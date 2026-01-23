// ========================================
// Elements
// ========================================
const header = document.getElementById("header");
const detailsPanel = document.getElementById("detailsPanel");
const nameTitle = document.getElementById("nameTitle");
const heroTagline = document.getElementById("heroTagline");
const headerSubtitle = document.getElementById("headerSubtitle");
const modeToggle = document.getElementById("modeToggleHero");
const labelOn = document.getElementById("labelOnHero");
const labelOff = document.getElementById("labelOffHero");
const navHero = document.getElementById("navHero");
const navDetails = document.getElementById("navDetails");
const profileImg = document.getElementById("profileImg");
const allProfileImgs = document.querySelectorAll(
  ".profile-container img, .sticky-profile img",
);

// ========================================
// State
// ========================================
let currentPanel = "hero"; // 'hero' or 'details'
let isOffHours = false;
let isAnimating = false;

// ========================================
// Panel Transition
// ========================================
const heroSummary = document.querySelector(".hero-summary");
const journeyTrace = document.querySelector(".journey-trace");
const headerCenter = document.querySelector(".header-center");
const headerRight = document.querySelector(".header-controls");

function goToPanel(panel) {
  if (isAnimating || panel === currentPanel) return;

  isAnimating = true;
  currentPanel = panel;

  if (panel === "details") {
    // Hero → Details
    // Step 1: Pre-fade the hero summary and journey trace
    heroSummary.classList.add("pre-fade");
    journeyTrace.classList.add("pre-fade");

    // Step 2: After they fade, start main transition
    setTimeout(() => {
      header.classList.add("collapsed");
      document.body.classList.add("show-details");
      nameTitle.innerHTML = "Alim Hasanov";

      // Update nav
      navHero.classList.remove("active");
      navDetails.classList.add("active");
    }, 150);
  } else {
    // Details → Hero
    // Step 1: Pre-fade the header center and right
    headerCenter.classList.add("pre-fade-out");

    // Step 2: After they fade, start main transition
    setTimeout(() => {
      header.classList.remove("collapsed");
      document.body.classList.remove("show-details");
      nameTitle.innerHTML = "Alim<br>Hasanov";

      // Clean up pre-fade classes
      headerCenter.classList.remove("pre-fade-out");

      heroSummary.classList.remove("pre-fade");
      journeyTrace.classList.remove("pre-fade");

      // Update nav
      navHero.classList.add("active");
      navDetails.classList.remove("active");

      // Reset details scroll position
      const detailsWrapper = document.querySelector(".details-wrapper");
      if (detailsWrapper) detailsWrapper.scrollTop = 0;

      // Reset elastic pull (was kept during transition)
      resetElasticPull();
    }, 150);
  }

  // Allow next transition after animation
  setTimeout(() => {
    isAnimating = false;
  }, 1100);
}

// ========================================
// Wheel/Scroll Detection
// ========================================
let wheelTimeout = null;
let accumulatedDelta = 0;
const WHEEL_THRESHOLD = 130;
const ELASTIC_MAX = 70;
let elasticOffset = 0;

const pullIndicator = document.getElementById("pullIndicator");
const progressCircle = pullIndicator
  ? pullIndicator.querySelector(".progress-circle")
  : null;
const CIRCLE_CIRCUMFERENCE = 113; // 2 * PI * 18

function applyElasticPull(offset) {
  detailsPanel.style.transform = offset > 0 ? `translateY(${offset}px)` : "";

  if (pullIndicator && offset > 5) {
    pullIndicator.classList.add("visible");

    const progress = Math.min(1, offset / (ELASTIC_MAX * 0.9));

    if (progressCircle) {
      const dashOffset = CIRCLE_CIRCUMFERENCE - progress * CIRCLE_CIRCUMFERENCE;
      progressCircle.style.strokeDashoffset = dashOffset;
    }

    if (progress >= 1) {
      pullIndicator.classList.add("full");
    } else {
      pullIndicator.classList.remove("full");
    }
  } else if (pullIndicator) {
    pullIndicator.classList.remove("visible");
    pullIndicator.classList.remove("full");
  }
}

function resetElasticPull() {
  detailsPanel.style.transform = "";
  elasticOffset = 0;

  if (pullIndicator) {
    pullIndicator.classList.remove("visible");
    pullIndicator.classList.remove("full");
    if (progressCircle) {
      setTimeout(() => {
        progressCircle.style.strokeDashoffset = CIRCLE_CIRCUMFERENCE;
      }, 200);
    }
  }
}

document.addEventListener(
  "wheel",
  (e) => {
    if (isAnimating) return;

    if (currentPanel === "details") {
      const detailsWrapper = document.querySelector(".details-wrapper");
      const skillsWrapper = document.querySelector(".skills-wrapper");
      const softSkillsWrapper = document.querySelector(".soft-skills-wrapper");

      const inSkills = skillsWrapper && skillsWrapper.contains(e.target);
      const inSoft = softSkillsWrapper && softSkillsWrapper.contains(e.target);

      if (inSkills || inSoft) {
        const targetContainer = inSkills ? skillsWrapper : softSkillsWrapper;
        const containerAtTop = targetContainer
          ? targetContainer.scrollTop <= 0
          : true;

        if (e.deltaY < 0) {
          if (!containerAtTop) return;
        } else {
          return;
        }
      }

      const wrapperAtTop = detailsWrapper
        ? detailsWrapper.scrollTop <= 0
        : true;

      if (e.deltaY < 0) {
        if (!wrapperAtTop) {
          // Let native scroll happen - don't prevent default
          resetElasticPull();
          return;
        }

        e.preventDefault();

        const resistance = 1 - (elasticOffset / ELASTIC_MAX) * 0.6;
        elasticOffset = Math.min(
          ELASTIC_MAX,
          elasticOffset + Math.abs(e.deltaY) * 0.25 * resistance,
        );
        applyElasticPull(elasticOffset);

        accumulatedDelta += Math.abs(e.deltaY);

        if (elasticOffset >= ELASTIC_MAX * 0.9) {
          accumulatedDelta = 0;
          goToPanel("hero");
        }
      } else {
        // Scrolling down - let native scroll happen
        if (elasticOffset > 0) {
          resetElasticPull();
          accumulatedDelta = 0;
        }
        // Don't prevent default - allow native scrolling on details-wrapper
      }
    } else {
      e.preventDefault();
      accumulatedDelta += Math.abs(e.deltaY);

      if (accumulatedDelta > WHEEL_THRESHOLD && e.deltaY > 0) {
        accumulatedDelta = 0;
        goToPanel("details");
      }
    }

    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
      if (elasticOffset > 0) {
        resetElasticPull();
      }
      accumulatedDelta = 0;
    }, 150);
  },
  { passive: false },
);

// ========================================
// Touch Support
// ========================================
let touchStartY = 0;
const TOUCH_THRESHOLD = 50;

document.addEventListener(
  "touchstart",
  (e) => {
    touchStartY = e.touches[0].clientY;
  },
  { passive: true },
);

document.addEventListener(
  "touchend",
  (e) => {
    if (isAnimating) return;

    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY - touchEndY;

    if (currentPanel === "hero" && deltaY > TOUCH_THRESHOLD) {
      goToPanel("details");
    } else if (currentPanel === "details" && deltaY < -TOUCH_THRESHOLD) {
      const detailsWrapper = document.querySelector(".details-wrapper");
      if (detailsWrapper && detailsWrapper.scrollTop <= 0) {
        goToPanel("hero");
      }
    }
  },
  { passive: true },
);

// ========================================
// Nav Dot Clicks
// ========================================
navHero.addEventListener("click", () => goToPanel("hero"));
navDetails.addEventListener("click", () => goToPanel("details"));

// ========================================
// Mode Toggle (Office Hours ON/OFF)
// ========================================
modeToggle.addEventListener("click", () => {
  isOffHours = !isOffHours;

  document.body.classList.toggle("off-hours", isOffHours);
  labelOn.classList.toggle("active", !isOffHours);
  labelOff.classList.toggle("active", isOffHours);

  // Update tagline and header subtitle
  const taglineText = isOffHours
    ? "Explorer | Reader | Human"
    : "Application Support | Data Management";
  heroTagline.textContent = taglineText;
  headerSubtitle.textContent = taglineText;

  // Image Transition
  const prodSrc = "images/darkblue_centered.png";
  const uatSrc = "images/uat_image_nobg.png";

  allProfileImgs.forEach((img) => {
    // Only animate opacity to avoid seeing the flip
    img.style.transition = "opacity 0.3s ease";
    img.style.opacity = "0";
  });

  setTimeout(() => {
    const targetSrc = isOffHours ? uatSrc : prodSrc;
    const targetBlend = isOffHours ? "normal" : "multiply";
    // Prod (default CSS) is scaleX(-1). UAT needs scaleX(1).
    // We apply this instantly while invisible.
    const targetTransform = isOffHours ? "scaleX(1)" : "";

    allProfileImgs.forEach((img) => {
      img.src = targetSrc;
      img.style.mixBlendMode = targetBlend;
      img.style.transform = targetTransform;
    });

    // Fade back in
    requestAnimationFrame(() => {
      allProfileImgs.forEach((img) => {
        img.style.opacity = "1";
      });
    });
  }, 300);

  // Reset scroll when switching modes
  const detailsWrapper = document.querySelector(".details-wrapper");
  if (detailsWrapper) detailsWrapper.scrollTop = 0;
});

// ========================================
// Student Jobs Expand/Collapse
// ========================================
function toggleStudentJobs(button) {
  button.classList.toggle("expanded");
  const content = button.nextElementSibling;
  content.classList.toggle("expanded");
}

// ========================================
// ========================================
// Details Panel Tab Switching (PROD)
// ========================================
const prodTabBtns = document.querySelectorAll("#prod-tabs .tab-btn");
prodTabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 1. Switch active button
    prodTabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // 2. Switch active pane
    document
      .querySelectorAll(".tab-pane")
      .forEach((pane) => pane.classList.remove("active"));
    const targetId = `tab-${btn.dataset.tab}`;
    const targetPane = document.getElementById(targetId);
    if (targetPane) {
      targetPane.classList.add("active");
    }

    // 3. Reset scroll when switching tabs
    const detailsWrapper = document.querySelector(".details-wrapper");
    if (detailsWrapper) detailsWrapper.scrollTop = 0;

    // 4. Force re-render of skill matrix if switching to tech
    if (btn.dataset.tab === "tech" && typeof switchView === "function") {
      // Re-trigger current view to ensure layout is correct in full width
      const activeMatrixBtn = document.querySelector(".view-toggle-btn.active");
      if (activeMatrixBtn) {
        switchView(activeMatrixBtn.dataset.view);
      }
    }
  });
});

// ========================================
// UAT Tab Switching
// ========================================
const uatTabBtns = document.querySelectorAll("#uat-tabs .tab-btn");
uatTabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 1. Toggle active class on nav items
    uatTabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // 2. Hide all contents
    document.querySelectorAll(".uat-section-content").forEach((content) => {
      content.classList.remove("active");
    });

    // 3. Show target content
    const targetId = btn.getAttribute("data-target");
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});

// ========================================
// Experience Item Expand/Collapse
// ========================================
function toggleExp(element) {
  if (document.body.classList.contains("off-hours")) return;

  const wrapper = element.querySelector(".exp-details-wrapper");
  if (!wrapper) return;

  const isExpanded = element.classList.contains("expanded");

  if (isExpanded) {
    element.classList.remove("expanded");
    wrapper.style.maxHeight = "0";
  } else {
    element.classList.add("expanded");
    wrapper.style.maxHeight = wrapper.scrollHeight + "px";
  }
}

// ========================================
// Skill Highlighting on Hover
// ========================================
document.querySelectorAll(".exp-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const skills = item.dataset.skills?.split(",") || [];
    document.querySelectorAll(".skill-entry").forEach((entry) => {
      if (skills.includes(entry.dataset.skill)) {
        entry.classList.add("highlight-active");
      }
    });
  });

  item.addEventListener("mouseleave", () => {
    document
      .querySelectorAll(".skill-entry.highlight-active")
      .forEach((entry) => {
        entry.classList.remove("highlight-active");
      });
  });
});

// ========================================
// Keyboard Navigation
// ========================================
document.addEventListener("keydown", (e) => {
  if (isAnimating) return;

  if (e.key === "ArrowDown" || e.key === "PageDown") {
    if (currentPanel === "hero") {
      e.preventDefault();
      goToPanel("details");
    }
  } else if (e.key === "ArrowUp" || e.key === "PageUp") {
    if (currentPanel === "details") {
      const detailsWrapper = document.querySelector(".details-wrapper");
      if (detailsWrapper && detailsWrapper.scrollTop <= 0) {
        e.preventDefault();
        goToPanel("hero");
      }
    }
  } else if (e.key === "Home") {
    e.preventDefault();
    goToPanel("hero");
  } else if (e.key === "End") {
    e.preventDefault();
    goToPanel("details");
  }
});


// ========================================
// Theme Toggle
// ========================================
const themeBtns = document.querySelectorAll(".theme-btn");

themeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.theme;

    themeBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    if (theme === "original") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }

    localStorage.setItem("theme", theme);
  });
});

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme && savedTheme !== "original") {
  document.documentElement.setAttribute("data-theme", savedTheme);
  themeBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.theme === savedTheme);
  });
}

// ========================================
// Language Switcher
// ========================================
const langBtns = document.querySelectorAll(".lang-btn");

function switchLanguage(lang, animate = true) {
  const translatableElements = document.querySelectorAll("[data-en][data-de]");

  if (animate) {
    translatableElements.forEach((el) => {
      el.style.transition = "opacity 0.15s ease-out";
      el.style.opacity = "0";
    });

    setTimeout(() => {
      translatableElements.forEach((el) => {
        const translation = el.dataset[lang];
        if (translation) {
          el.textContent = translation;
        }
        el.style.transition = "opacity 0.2s ease-in";
        el.style.opacity = "1";
      });
    }, 150);
  } else {
    translatableElements.forEach((el) => {
      const translation = el.dataset[lang];
      if (translation) {
        el.textContent = translation;
      }
    });
  }

  document.documentElement.lang = lang;
}

langBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;

    langBtns.forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });

    localStorage.setItem("language", lang);
    switchLanguage(lang, true);
  });
});

// Load saved language on page load (default to English)
const savedLang = localStorage.getItem("language") || "en";
langBtns.forEach((btn) => {
  btn.classList.toggle("active", btn.dataset.lang === savedLang);
});
switchLanguage(savedLang, false);

// UAT: Toggle Bucket List Items
document.querySelectorAll(".bucket-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("done");
    const icon = item.querySelector(".check-icon");
    if (icon) {
      if (item.classList.contains("done")) {
        icon.textContent = "✓";
        icon.classList.remove("empty");
      } else {
        icon.textContent = "○";
        icon.classList.add("empty");
      }
    }
  });
});
