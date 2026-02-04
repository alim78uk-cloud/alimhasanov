// ========================================
// Elements
// ========================================
const header = document.getElementById("header");
const detailsPanel = document.getElementById("detailsPanel");
const nameTitle = document.getElementById("nameTitle");
const modeToggle = document.getElementById("modeToggleHero");
const labelOn = document.getElementById("labelOnHero");
const labelOff = document.getElementById("labelOffHero");
const navHero = document.getElementById("navHero");
const navDetails = document.getElementById("navDetails");
const allProfileImgs = document.querySelectorAll(
  ".profile-container img, .sticky-profile img",
);
const prodProfile = {
  src: "images/darkblue_centered.png",
};
const uatProfile = {
  src: "images/uat_image_nobg.png",
};

// ========================================
// State
// ========================================
let currentPanel = "hero"; // 'hero' or 'details'
let isOffHours = false;
let isAnimating = false;



function applyMode(nextIsOffHours, { animate = true } = {}) {
  isOffHours = nextIsOffHours;

  document.body.classList.toggle("off-hours", isOffHours);
  labelOn.classList.toggle("active", !isOffHours);
  labelOff.classList.toggle("active", isOffHours);

  const targetProfile = isOffHours ? uatProfile : prodProfile;

  if (!allProfileImgs.length) return;

  if (!animate) {
    allProfileImgs.forEach((img) => {
      img.style.transition = "none";
      img.style.opacity = "1";
      img.src = targetProfile.src;
    });

    requestAnimationFrame(() => {
      allProfileImgs.forEach((img) => {
        img.style.transition = "opacity 0.3s ease";
      });
    });

    return;
  }

  // Image Transition
  allProfileImgs.forEach((img) => {
    // Only animate opacity to avoid seeing the flip
    img.style.transition = "opacity 0.3s ease";
    img.style.opacity = "0";
  });

  setTimeout(() => {
    allProfileImgs.forEach((img) => {
      img.src = targetProfile.src;
    });

    // Fade back in
    requestAnimationFrame(() => {
      allProfileImgs.forEach((img) => {
        img.style.opacity = "1";
      });
    });
  }, 300);
}

// ========================================
// Panel Transition
// ========================================
const heroSummary = document.querySelector(".hero-summary");
const journeyTrace = document.querySelector(".journey-trace");
const headerCenter = document.querySelector(".header-center");
const headerRight = document.querySelector(".header-controls");
const tabsToggleBtn = document.getElementById("tabsToggleBtn");
const tabsToggleLabel = document.getElementById("tabsToggleLabel");

// Mobile burger menu elements
const mobileBurgerBtn = document.getElementById("mobileBurgerBtn");
const mobileActiveTabLabel = document.getElementById("mobileActiveTabLabel");

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
      nameTitle.innerHTML =
        '<span data-en="Alim" data-de="Alim">Alim</span> <span data-en="Hasanov" data-de="Hasanov">Hasanov</span>';

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
      nameTitle.innerHTML =
        '<span data-en="Alim" data-de="Alim">Alim</span><br><span data-en="Hasanov" data-de="Hasanov">Hasanov</span>';

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
const HERO_SCROLL_EPS = 2;

function getHeroScrollState() {
  if (!header) {
    return { canScroll: false, atTop: true, atBottom: true };
  }

  const canScroll = header.scrollHeight > header.clientHeight + HERO_SCROLL_EPS;
  const atTop = header.scrollTop <= HERO_SCROLL_EPS;
  const atBottom =
    header.scrollTop + header.clientHeight >=
    header.scrollHeight - HERO_SCROLL_EPS;

  return { canScroll, atTop, atBottom };
}

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
    // Disable scroll-triggered transitions when burger menu is available
    if (window.innerWidth <= 1250) return;

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
      const { canScroll, atTop, atBottom } = getHeroScrollState();

      if (canScroll) {
        if (e.deltaY > 0 && !atBottom) {
          accumulatedDelta = 0;
          return;
        }

        if (e.deltaY < 0 && !atTop) {
          accumulatedDelta = 0;
          return;
        }
      }

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
    // Disable swipe-triggered transitions when burger menu is available
    if (window.innerWidth <= 1250) return;

    if (isAnimating) return;

    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY - touchEndY;

    if (currentPanel === "hero" && deltaY > TOUCH_THRESHOLD) {
      const { canScroll, atBottom } = getHeroScrollState();
      if (canScroll && !atBottom) return;
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
// Nav Dot Clicks & Name Click
// ========================================
navHero.addEventListener("click", () => goToPanel("hero"));
navDetails.addEventListener("click", () => goToPanel("details"));

// Name Click: Go to Hero + Force PROD (Reload Page)
nameTitle.addEventListener("click", () => {
  window.location.reload();
});

// ========================================
// Mode Toggle (Office Hours ON/OFF)
// ========================================
modeToggle.addEventListener("click", () => {
  applyMode(!isOffHours, { animate: true });

  // Reset scroll when switching modes
  const detailsWrapper = document.querySelector(".details-wrapper");
  if (detailsWrapper) detailsWrapper.scrollTop = 0;

  updateTabsToggleLabel();
  closeTabsMenu();
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
// Tabs Toggle (Mobile)
// ========================================
function getActiveTabLabel() {
  const selector = document.body.classList.contains("off-hours")
    ? "#uat-tabs .tab-btn.active"
    : "#prod-tabs .tab-btn.active";
  const activeBtn = document.querySelector(selector);

  if (!activeBtn) return "Menu";

  // Using innerText is more reliable for gathering formatted text from elements
  // We'll clone to avoid any side effects from cleaning nodes
  const clone = activeBtn.cloneNode(true);

  // Remove download bits if any exist (safety)
  const downloads = clone.querySelectorAll(
    ".tab-download-btn, .mobile-tab-download-icon",
  );
  downloads.forEach((d) => d.remove());

  return clone.innerText.trim().replace(/\s+/g, " ") || "Menu";
}

function closeTabsMenu() {
  if (!tabsToggleBtn) return;
  document.body.classList.remove("tabs-open");
  tabsToggleBtn.setAttribute("aria-expanded", "false");
}

function toggleTabsMenu() {
  if (!tabsToggleBtn) return;
  const willOpen = !document.body.classList.contains("tabs-open");
  document.body.classList.toggle("tabs-open", willOpen);
  tabsToggleBtn.setAttribute("aria-expanded", String(willOpen));

  if (willOpen) {
    // When opening menu on hero page, highlight Home tab
    if (currentPanel === "hero") {
      const tabsContainer = document.body.classList.contains("off-hours")
        ? "#uat-tabs"
        : "#prod-tabs";
      const allBtns = document.querySelectorAll(`${tabsContainer} .tab-btn`);
      allBtns.forEach((b) => b.classList.remove("active"));
      const homeBtn = document.querySelector(
        `${tabsContainer} .tab-btn[data-tab="home"]`,
      );
      if (homeBtn) homeBtn.classList.add("active");
    }
    updateTabsToggleLabel();
  }
}

if (tabsToggleBtn) {
  tabsToggleBtn.addEventListener("click", () => {
    toggleTabsMenu();
  });
}

// Mobile burger button listener
if (mobileBurgerBtn) {
  mobileBurgerBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent document click from immediate close
    toggleTabsMenu();
  });
}

// Click outside to close burger menu
document.addEventListener("click", (e) => {
  if (!document.body.classList.contains("tabs-open")) return;

  const isBurgerClick = mobileBurgerBtn?.contains(e.target);
  const isMenuClick = e.target.closest(".details-tabs");

  if (!isBurgerClick && !isMenuClick) {
    closeTabsMenu();
  }
});

function updateTabsToggleLabel() {
  const activeLabelText = getActiveTabLabel();

  // Update original label (if visible)
  if (tabsToggleLabel) {
    tabsToggleLabel.textContent = activeLabelText;
  }

  // Update mobile active tab label (shown below header)
  if (mobileActiveTabLabel) {
    if (activeLabelText === "Home" || currentPanel === "hero") {
      mobileActiveTabLabel.innerHTML = "";
      mobileActiveTabLabel.style.display = "none";
    } else {
      let finalHtml = activeLabelText;

      // 1. Styling for "TASKS AND TOOLS" - Explicitly handle spacing and bolding
      // Check if this is the tech tab to be absolutely sure we don't merge words
      // Scope to the correct container to prevent false positives from hidden mode tabs
      const containerSelector = document.body.classList.contains("off-hours")
        ? "#uat-tabs"
        : "#prod-tabs";
      const activeBtn = document.querySelector(
        `${containerSelector} .tab-btn.active`,
      );
      const isTechTab = activeBtn?.dataset?.tab === "tech";
      const isCVTab = activeBtn?.dataset?.tab === "cv";

      if (isTechTab) {
        finalHtml =
          '<span style="font-weight: 700;">TASKS</span>&nbsp;AND&nbsp;<span class="font-monospace">TOOLS</span>';
      } else {
        // General replacements for other cases if they happen to contain these words
        if (finalHtml.includes("TASKS")) {
          finalHtml = finalHtml.replace(
            "TASKS",
            '<span style="font-weight: 700;">TASKS</span>',
          );
        }
        if (finalHtml.includes("TOOLS")) {
          finalHtml = finalHtml.replace(
            "TOOLS",
            '<span class="font-monospace">TOOLS</span>',
          );
        }
      }

      // 2. Add Download Icon for TASKS & TOOLS or CV tabs
      if (isTechTab) {
        // Build download icon for TASKS & TOOLS
        const downloadIcon = `
          <div class="mobile-tab-download-icon" onclick="if(window.openMatrixExportModal) { window.openMatrixExportModal(); event.stopPropagation(); }" style="display:inline-flex; align-items:center; margin-right:6px; cursor:pointer;">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
             </svg>
          </div>`;
        finalHtml = downloadIcon + finalHtml;

        mobileActiveTabLabel.style.display = "flex";
        mobileActiveTabLabel.style.alignItems = "center";
      } else if (isCVTab) {
        // Build download icon for CV
        const downloadIcon = `
          <div class="mobile-tab-download-icon" onclick="if(window.openCVExportModal) { window.openCVExportModal(); event.stopPropagation(); }" style="display:inline-flex; align-items:center; margin-right:6px; cursor:pointer;">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
             </svg>
          </div>`;
        finalHtml = downloadIcon + finalHtml;

        mobileActiveTabLabel.style.display = "flex";
        mobileActiveTabLabel.style.alignItems = "center";
      } else {
        mobileActiveTabLabel.style.display = "block";
      }

      mobileActiveTabLabel.innerHTML = finalHtml;
    }
  }
}

// ========================================
// Details Panel Tab Switching (PROD)
// ========================================
const prodTabBtns = document.querySelectorAll("#prod-tabs .tab-btn");
prodTabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Check if Home tab
    if (btn.dataset.tab === "home") {
      goToPanel("hero");
      closeTabsMenu();
      // Hide the mobile tab label when going home
      if (mobileActiveTabLabel) {
        mobileActiveTabLabel.textContent = "";
        mobileActiveTabLabel.style.display = "none";
      }
      return; // Don't activate tab styling for Home
    }

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

    if (currentPanel === "hero") {
      goToPanel("details");
    }
    updateTabsToggleLabel();
    closeTabsMenu();
  });
});

// ========================================
// UAT Tab Switching
// ========================================
const uatTabBtns = document.querySelectorAll("#uat-tabs .tab-btn");
uatTabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Check if Home tab
    if (btn.dataset.tab === "home") {
      goToPanel("hero");
      closeTabsMenu();
      // Hide the mobile tab label when going home
      if (mobileActiveTabLabel) {
        mobileActiveTabLabel.textContent = "";
        mobileActiveTabLabel.style.display = "none";
      }
      return; // Don't activate tab styling for Home
    }

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

    if (currentPanel === "hero") {
      goToPanel("details");
    }
    updateTabsToggleLabel();
    closeTabsMenu();
  });
});

updateTabsToggleLabel();

// ========================================
// Experience Item Expand/Collapse
// ========================================
// Initialize any pre-expanded items on page load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".exp-item.expanded").forEach((item) => {
    const wrapper = item.querySelector(".exp-details-wrapper");
    if (wrapper) {
      wrapper.style.maxHeight = wrapper.scrollHeight + "px";
    }
  });
});

function toggleExp(element, event) {
  if (document.body.classList.contains("off-hours")) return;

  const wrapper = element.querySelector(".exp-details-wrapper");
  if (!wrapper) return;

  const isExpanded = element.classList.contains("expanded");

  // If expanded and click/touch is inside the content area, don't collapse
  if (isExpanded && event && event.target.closest(".exp-details-wrapper")) {
    return;
  }

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
        if (translation !== undefined) {
          el.textContent = translation;
        }

        // Handle Link Href Translation
        // dataset property keys are camelCased (e.g. data-de-href -> deHref)
        const newHref = el.dataset[lang + "Href"];
        if (newHref) {
          el.href = newHref;
        }

        el.style.transition = "opacity 0.2s ease-in";
        el.style.opacity = ""; // Remove inline opacity to respect CSS (e.g. for .j-code 0.7 opacity)
      });
    }, 150);
  } else {
    translatableElements.forEach((el) => {
      const translation = el.dataset[lang];
      if (translation !== undefined) {
        el.textContent = translation;
      }

      // Handle Link Href Translation
      const newHref = el.dataset[lang + "Href"];
      if (newHref) {
        el.href = newHref;
      }
    });
  }

  // Handle Placeholders (Instant switch, no animation needed)
  const placeholderElements = document.querySelectorAll(
    "[data-en-placeholder][data-de-placeholder]",
  );
  placeholderElements.forEach((el) => {
    // dataset keys are camelCased: data-de-placeholder -> dePlaceholder
    // We construct the key as lang + "Placeholder" (e.g. "enPlaceholder" or "dePlaceholder")
    const key = lang + "Placeholder"; // e.g. "dePlaceholder"
    const newPlaceholder = el.dataset[key];
    if (newPlaceholder) {
      el.placeholder = newPlaceholder;
    }
  });

  document.documentElement.lang = lang;

  // Re-render heatmap if available (to update dynamic texts like legend)
  if (typeof renderHeatmapView === "function") {
    renderHeatmapView();
  }
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

// Sync UAT state on load if the page is pre-set to off-hours (e.g., UAT environment).
if (document.body.classList.contains("off-hours")) {
  applyMode(true, { animate: false });
}

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

// ========================================
// Contact Modal Logic (Google Forms Backend)
// ========================================
const contactModal = document.getElementById("contactModal");
const contactForm = document.getElementById("contactForm");
const contactEmailBtns = document.querySelectorAll(".contact-email-btn");
const contactSuccess = document.getElementById("contactSuccess");
const contactFormContainer = document.getElementById("contactFormContainer");

const MODAL_ANIM_MS = 400;

function updateBodyScrollLock() {
  const hasActiveModal = document.querySelector(
    ".contact-modal-overlay.is-open, .matrix-export-modal.active",
  );
  document.body.style.overflow = hasActiveModal ? "hidden" : "";
}

window.updateBodyScrollLock = updateBodyScrollLock;

function forceHideOverlay(overlay) {
  if (!overlay) return;
  const t = Number(overlay.dataset.hideTimer || "0");
  if (t) clearTimeout(t);
  delete overlay.dataset.hideTimer;
  overlay.classList.remove("active", "is-open");
}

function showOverlay(overlay) {
  if (!overlay) return;
  const t = Number(overlay.dataset.hideTimer || "0");
  if (t) clearTimeout(t);
  delete overlay.dataset.hideTimer;

  overlay.classList.add("is-open");
  // Force a layout so opacity transition reliably triggers.
  // eslint-disable-next-line no-unused-expressions
  overlay.offsetHeight;
  overlay.classList.add("active");
  updateBodyScrollLock();
}

function hideOverlay(overlay) {
  if (!overlay) return;

  overlay.classList.remove("active");
  updateBodyScrollLock();

  // Ensure the overlay cannot block clicks on any browser once closed.
  overlay.dataset.hideTimer = String(
    window.setTimeout(() => {
      overlay.classList.remove("is-open");
      delete overlay.dataset.hideTimer;
      updateBodyScrollLock();
    }, MODAL_ANIM_MS),
  );
}

function closeOtherContactOverlays(exceptEl) {
  document.querySelectorAll(".contact-modal-overlay.is-open").forEach((o) => {
    if (o !== exceptEl) forceHideOverlay(o);
  });
}

// Modal State Management
function openContactModal() {
  if (contactModal) {
    closeOtherContactOverlays(contactModal);
    showOverlay(contactModal);
  }
}

function closeContactModal() {
  hideOverlay(contactModal);

  // Reset form after a delay (animation time)
  setTimeout(() => {
    if (contactForm) contactForm.reset();
    if (contactSuccess) contactSuccess.classList.remove("active");
    if (contactFormContainer) contactFormContainer.style.opacity = "1";
    if (contactFormContainer) contactFormContainer.style.pointerEvents = "auto";
  }, MODAL_ANIM_MS);
}

// Intercept Email Icon Click
if (contactEmailBtns.length) {
  contactEmailBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // Stop default mailto: behavior
      openContactModal();
    });
  });
}

if (contactModal) {
  contactModal.addEventListener("click", (e) => {
    if (e.target === contactModal) closeContactModal();
  });
}

// Google Form Submission Logic
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector(".contact-submit");
    const originalBtnText = submitBtn.innerHTML;

    // UI Loading State
    submitBtn.classList.add("loading");
    submitBtn.innerHTML = "<span>Sending...</span>";

    // --- USER CONFIGURATION REQUIRED ---
    // Update these IDs after creating your Google Form
    const FORM_ID = "1FAIpQLSc722ZnUmi2V0zEEWpnmITQVCe8d8laS1dsY7dry3gcFRAi1A";
    const ENTRY_IDS = {
      name: "entry.778663532",
      email: "entry.1304901056",
      subject: "entry.245579432",
      message: "entry.502832612",
    };
    // ------------------------------------

    const formData = new FormData(contactForm);
    const googleFormUrl = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

    // We use URLSearchParams for the POST body
    const params = new URLSearchParams();
    params.append(ENTRY_IDS.name, formData.get("name"));
    params.append(ENTRY_IDS.email, formData.get("email"));
    const subjectValue = formData.get("subject");
    if (subjectValue) {
      params.append(ENTRY_IDS.subject, subjectValue);
    }
    params.append(ENTRY_IDS.message, formData.get("message"));

    try {
      // mode: 'no-cors' allows submission even if Google doesn't send CORS headers back
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: params,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      // Submission Success UI
      contactFormContainer.style.opacity = "0";
      contactFormContainer.style.pointerEvents = "none";
      contactSuccess.classList.add("active");
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        "Something went wrong. Please try again or use alim78uk@gmail.com directly.",
      );
    } finally {
      submitBtn.classList.remove("loading");
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

// ========================================
// CV Export Modal
// ========================================
window.openCVExportModal = function () {
  const modal = document.getElementById("cvExportModal");
  if (!modal) return;

  closeOtherContactOverlays(modal);
  showOverlay(modal);
};

window.closeCVExportModal = function () {
  const modal = document.getElementById("cvExportModal");
  hideOverlay(modal);
};

const cvExportModal = document.getElementById("cvExportModal");
if (cvExportModal) {
  cvExportModal.addEventListener("click", (e) => {
    if (e.target === cvExportModal) closeCVExportModal();
  });
}

function triggerDownload(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadPdfBytes(bytes, filename) {
  const blob = new Blob([bytes], { type: "application/pdf" });
  const objectUrl = URL.createObjectURL(blob);
  triggerDownload(objectUrl, filename);
  setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
}

async function downloadPdfFile(url, filename) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url} (${response.status})`);
    }
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    triggerDownload(objectUrl, filename);
    setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    return true;
  } catch (error) {
    console.error("Error downloading file:", error);
    triggerDownload(url, filename);
    return false;
  }
}

async function addPageNumbers(pdfDoc, PDFLib) {
  const { StandardFonts, rgb } = PDFLib;
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const totalPages = pdfDoc.getPageCount();

  for (let index = 0; index < totalPages; index += 1) {
    const page = pdfDoc.getPage(index);
    const { width, height } = page.getSize();
    const label = `${index + 1}/${totalPages}`;
    const fontSize = 9;
    const margin = 24;
    const textWidth = font.widthOfTextAtSize(label, fontSize);
    const x = Math.max(margin, width - margin - textWidth);
    const y = Math.max(margin, 18);

    page.drawText(label, {
      x,
      y,
      size: fontSize,
      font,
      color: rgb(0.4, 0.4, 0.4),
    });
  }
}

async function downloadCvWithPageNumbers(filename) {
  const PDFLib = window.PDFLib || window.pdfLib || window["pdf-lib"];
  if (!PDFLib) {
    throw new Error("pdf-lib not loaded");
  }
  const { PDFDocument } = PDFLib;
  const cvResponse = await fetch("AlimHasasov_CV_public.pdf");
  const cvBytes = await cvResponse.arrayBuffer();
  const cvPdf = await PDFDocument.load(cvBytes);
  await addPageNumbers(cvPdf, PDFLib);
  const numberedBytes = await cvPdf.save();
  downloadPdfBytes(numberedBytes, filename);
}

function createOffscreenMatrixPreview() {
  const wrapper = document.createElement("div");
  wrapper.style.position = "fixed";
  wrapper.style.left = "-2000px";
  wrapper.style.top = "0";
  wrapper.style.width = "1200px";
  wrapper.style.height = "auto";
  wrapper.style.overflow = "visible";
  wrapper.style.zIndex = "-1";
  wrapper.style.display = "flex";
  wrapper.style.justifyContent = "center";
  wrapper.style.alignItems = "flex-start";
  wrapper.style.pointerEvents = "none";

  const preview = document.createElement("div");
  preview.className = "matrix-export-preview";
  preview.style.boxShadow = "none";
  preview.style.display = "inline-block";
  wrapper.appendChild(preview);

  document.body.appendChild(wrapper);
  return { wrapper, preview };
}

// Download CV only
window.downloadCVOnly = async function () {
  try {
    await downloadCvWithPageNumbers("AlimHasanov_CV_public.pdf");
  } catch (error) {
    console.error("Error downloading CV:", error);
    await downloadPdfFile(
      "AlimHasanov_CV_public.pdf",
      "AlimHasanov_CV_public.pdf",
    );
  }
  closeCVExportModal();
};

// Download CV with Skills Matrix appended
window.downloadCV = async function () {
  const checkbox = document.getElementById("includeSkillsMatrix");
  const includeMatrix = checkbox && checkbox.checked;

  if (!includeMatrix) {
    // Simple download using blob to force download
    try {
      await downloadCvWithPageNumbers("AlimHasanov_CV_public.pdf");
    } catch (error) {
      console.error("Error adding page numbers to CV:", error);
      await downloadPdfFile(
        "AlimHasanov_CV_public.pdf",
        "AlimHasanov_CV_public.pdf",
      );
    }
    closeCVExportModal();
    return;
  }

  // Download with skills matrix merged
  try {
    // Show loading state
    const btn = document.querySelector(".cv-download-submit");
    const originalText = btn ? btn.innerHTML : "";
    if (btn) {
      btn.innerHTML = "<span>Generating PDF...</span>";
      btn.disabled = true;
    }

    // Load pdf-lib - check multiple possible exports
    const PDFLib = window.PDFLib || window.pdfLib || window["pdf-lib"];
    if (!PDFLib) {
      throw new Error("pdf-lib not loaded");
    }
    const { PDFDocument } = PDFLib;

    if (!window.html2canvas) {
      throw new Error("html2canvas not loaded");
    }
    if (!window.jspdf || !window.jspdf.jsPDF) {
      throw new Error("jsPDF not loaded");
    }
    if (typeof window.renderExportMatrix !== "function") {
      throw new Error("Skills matrix not available");
    }

    // Fetch the existing CV PDF
    const cvResponse = await fetch("AlimHasanov_CV_public.pdf");
    const cvBytes = await cvResponse.arrayBuffer();

    // Load the CV PDF
    const cvPdf = await PDFDocument.load(cvBytes);

    // Create a new PDF for the skills matrix
    const { jsPDF } = window.jspdf;
    const matrixPdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    const { wrapper, preview } = createOffscreenMatrixPreview();
    try {
      // Render the export matrix into an offscreen container
      window.renderExportMatrix(preview);

      // Allow layout + fonts to settle before capture
      await new Promise((resolve) => requestAnimationFrame(resolve));
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
      const exportMatrix = preview.querySelector(".export-matrix");
      if (exportMatrix) {
        const styles = getComputedStyle(preview);
        const padLeft = parseFloat(styles.paddingLeft) || 0;
        const padRight = parseFloat(styles.paddingRight) || 0;
        const requiredWidth = exportMatrix.scrollWidth + padLeft + padRight;
        preview.style.width = `${Math.ceil(requiredWidth)}px`;
      }
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Capture the matrix as PDF using html2canvas
      const canvas = await window.html2canvas(preview, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        allowTaint: false,
        removeContainer: false,
      });

      // Validate canvas
      if (!canvas || canvas.width === 0 || canvas.height === 0) {
        throw new Error("Failed to render skills matrix to canvas");
      }

      const imgData = canvas.toDataURL("image/png");

      // Validate PNG data
      if (!imgData || !imgData.startsWith("data:image/png")) {
        throw new Error("Failed to generate PNG from canvas");
      }

      const pdfWidth = 297; // A4 landscape width in mm
      const pdfHeight = 210; // A4 landscape height in mm
      const margin = 10;
      const maxWidth = pdfWidth - margin * 2;
      const maxHeight = pdfHeight - margin * 2;
      let finalWidth = maxWidth;
      let finalHeight = (canvas.height * finalWidth) / canvas.width;
      if (finalHeight > maxHeight) {
        finalHeight = maxHeight;
        finalWidth = (canvas.width * finalHeight) / canvas.height;
      }
      const xOffset = (pdfWidth - finalWidth) / 2;
      const yOffset = margin;

      // Add image with error handling
      try {
        matrixPdf.addImage(
          imgData,
          "PNG",
          xOffset,
          yOffset,
          finalWidth,
          finalHeight,
        );
      } catch (imgError) {
        console.error("Error adding image to PDF:", imgError);
        throw new Error("Failed to add skills matrix image to PDF");
      }

      // Get the matrix PDF as bytes
      const matrixPdfBytes = matrixPdf.output("arraybuffer");
      const matrixPdfDoc = await PDFDocument.load(matrixPdfBytes);

      // Copy pages from matrix PDF to CV PDF
      const [matrixPage] = await cvPdf.copyPages(matrixPdfDoc, [0]);
      cvPdf.addPage(matrixPage);
    } finally {
      wrapper.remove();
    }

    await addPageNumbers(cvPdf, PDFLib);

    // Save the combined PDF
    const combinedPdfBytes = await cvPdf.save();

    // Download
    downloadPdfBytes(combinedPdfBytes, "AlimHasanov_CV_public.pdf");

    // Restore button
    if (btn) {
      btn.innerHTML = originalText;
      btn.disabled = false;
    }

    closeCVExportModal();
  } catch (error) {
    console.error("Error combining PDFs:", error);
    const isFileProtocol =
      window.location && window.location.protocol === "file:";
    const message = isFileProtocol
      ? "Unable to combine PDFs when opening the file directly. Please serve the page over HTTP(S). Downloading CV only instead."
      : "Unable to combine PDFs. Downloading CV only instead.";
    alert(message);

    // Fallback to simple download
    await downloadPdfFile(
      "AlimHasasov_CV_public.pdf",
      "AlimHasanov_CV_public.pdf",
    );
    closeCVExportModal();

    // Restore button
    const btn = document.querySelector(".cv-download-submit");
    if (btn) {
      btn.innerHTML =
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>Download CV';
      btn.disabled = false;
    }
  }
};
