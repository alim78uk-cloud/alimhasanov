// ==========================================
// DATA: Chronological Heatmap
// ==========================================
const careerData = {
  "employers": [
    {
      "id": "fefund",
      "name": "FE fundinfo",
      "start": "2023-10",
      "end": "2025-05",
      "headerOffset": 15,
      "footerOffset": 15,
      "levels": {
        "1": [
          "incident_management",
          "log_analysis",
          "linux_unix",
          "monitoring_alerting",
          "git_version_control"
        ],
        "2": [
          "web_development",
          "html_css",
          "uat_testing",
          "vendor_coordination",
          "root_cause_analysis",
          "shell_scripting",
          "client_interactions",
          "excel_vba"
        ],
        "3": [
          "application_support",
          "sql",
          "python",
          "master_data_management",
          "duckdb",
          "troubleshooting_debugging",
          "built_internal_tools",
          "documentation_maintenance",
          "data_validation_reconciliation",
          "automation_of_manual_processes",
          "client_training_onboarding",
          "rest_api",
          "bash_scripting",
          "jira_confluence",
          "pandas_python_data_library",
          "power_bi"
        ]
      },
      "dur": 19
    },
    {
      "id": "elwood",
      "name": "Elwood Technology",
      "start": "2022-05",
      "end": "2023-06",
      "headerOffset": 15,
      "footerOffset": 15,
      "levels": {
        "1": [
          "web_development",
          "html_css"
        ],
        "2": [
          "fix_protocol",
          "market_data",
          "bloomberg_terminal",
          "excel_vba",
          "git_version_control"
        ],
        "3": [
          "application_support",
          "incident_management",
          "sql",
          "python",
          "websockets",
          "log_analysis",
          "on_call_support",
          "master_data_management",
          "duckdb",
          "shell_scripting",
          "linux_unix",
          "uat_testing",
          "troubleshooting_debugging",
          "vendor_coordination",
          "monitoring_alerting",
          "root_cause_analysis",
          "built_internal_tools",
          "documentation_maintenance",
          "trade_support",
          "data_validation_reconciliation",
          "automation_of_manual_processes",
          "client_interactions",
          "client_training_onboarding",
          "rest_api",
          "bash_scripting",
          "jira_confluence",
          "pandas_python_data_library"
        ]
      },
      "dur": 13
    },
    {
      "id": "broadridge",
      "name": "Broadridge",
      "start": "2018-05",
      "end": "2022-05",
      "headerOffset": 15,
      "footerOffset": 15,
      "levels": {
        "1": [
          "shell_scripting",
          "jira_confluence"
        ],
        "2": [
          "websockets",
          "web_development",
          "html_css",
          "bash_scripting",
          "git_version_control",
          "pandas_python_data_library"
        ],
        "3": [
          "application_support",
          "incident_management",
          "sql",
          "python",
          "master_data_management",
          "log_analysis",
          "on_call_support",
          "linux_unix",
          "uat_testing",
          "troubleshooting_debugging",
          "vendor_coordination",
          "monitoring_alerting",
          "root_cause_analysis",
          "built_internal_tools",
          "documentation_maintenance",
          "data_validation_reconciliation",
          "client_interactions",
          "client_training_onboarding",
          "rest_api",
          "excel_vba",
          "automation_of_manual_processes"
        ]
      },
      "dur": 48
    },
    {
      "id": "qb",
      "name": "Quantitative Brokers",
      "start": "2017-02",
      "end": "2018-04",
      "headerOffset": 15,
      "footerOffset": 15,
      "levels": {
        "1": [
          "web_development",
          "html_css"
        ],
        "2": [
          "master_data_management",
          "market_data",
          "shell_scripting",
          "vendor_coordination",
          "documentation_maintenance",
          "data_validation_reconciliation",
          "built_internal_tools",
          "client_training_onboarding",
          "git_version_control",
          "pandas_python_data_library"
        ],
        "3": [
          "application_support",
          "incident_management",
          "sql",
          "python",
          "websockets",
          "fix_protocol",
          "log_analysis",
          "on_call_support",
          "linux_unix",
          "bloomberg_terminal",
          "uat_testing",
          "troubleshooting_debugging",
          "monitoring_alerting",
          "root_cause_analysis",
          "trade_support",
          "automation_of_manual_processes",
          "client_interactions",
          "rest_api",
          "bash_scripting",
          "jira_confluence",
          "excel_vba"
        ]
      },
      "dur": 14
    },
    {
      "id": "tethys",
      "name": "Tethys Technology",
      "start": "2015-08",
      "end": "2017-02",
      "headerOffset": 15,
      "footerOffset": 15,
      "levels": {
        "1": [
          "shell_scripting"
        ],
        "2": [
          "websockets",
          "master_data_management",
          "market_data",
          "documentation_maintenance",
          "data_validation_reconciliation",
          "client_training_onboarding"
        ],
        "3": [
          "application_support",
          "incident_management",
          "sql",
          "python",
          "linux_unix",
          "fix_protocol",
          "log_analysis",
          "on_call_support",
          "bloomberg_terminal",
          "uat_testing",
          "troubleshooting_debugging",
          "monitoring_alerting",
          "root_cause_analysis",
          "built_internal_tools",
          "trade_support",
          "automation_of_manual_processes",
          "client_interactions",
          "rest_api",
          "bash_scripting",
          "excel_vba"
        ]
      },
      "dur": 18
    },
    {
      "id": "bloomberg",
      "name": "Bloomberg",
      "start": "2014-10",
      "end": "2015-06",
      "headerOffset": 15,
      "footerOffset": 15,
      "levels": {
        "1": [
          "master_data_management",
          "monitoring_alerting",
          "incident_management",
          "uat_testing",
          "client_interactions"
        ],
        "2": [
          "sql",
          "vendor_coordination",
          "log_analysis",
          "market_data",
          "rest_api"
        ],
        "3": [
          "python",
          "bloomberg_terminal",
          "troubleshooting_debugging",
          "application_support",
          "data_validation_reconciliation",
          "automation_of_manual_processes",
          "excel_vba"
        ]
      },
      "dur": 8
    }
  ],
  "skills": {
    "application_support": "Application Support",
    "troubleshooting_debugging": "Troubleshooting & Debugging",
    "automation_of_manual_processes": "Automation of Manual Processes",
    "master_data_management": "Master Data Management",
    "data_validation_reconciliation": "Data Validation & Reconciliation",
    "built_internal_tools": "Built Internal Tools",
    "documentation_maintenance": "Documentation Maintenance",
    "client_training_onboarding": "Client Training & Onboarding",
    "client_interactions": "Client Interactions",
    "vendor_coordination": "Vendor Coordination",
    "uat_testing": "UAT Testing",
    "root_cause_analysis": "Root Cause Analysis",
    "web_development": "Web Development",
    "log_analysis": "Log Analysis",
    "incident_management": "Incident Management",
    "monitoring_alerting": "Monitoring & Alerting",
    "on_call_support": "On-call Support",
    "market_data": "Market Data",
    "trade_support": "Trade Support",
    "sql": "SQL",
    "python": "Python",
    "rest_api": "REST API",
    "bash_scripting": "Bash scripting",
    "jira_confluence": "Jira & Confluence",
    "duckdb": "DuckDB",
    "excel_vba": "Excel & VBA",
    "html_css": "HTML & CSS",
    "shell_scripting": "Shell Scripting",
    "linux_unix": "Linux/Unix",
    "git_version_control": "Git/Version Control",
    "websockets": "WebSockets",
    "fix_protocol": "FIX Protocol",
    "bloomberg_terminal": "Bloomberg Terminal",
    "pandas_python_data_library": "pandas (python data library)",
    "power_bi": "Power BI"
  },
  "taskSkills": [
    "application_support",
    "troubleshooting_debugging",
    "automation_of_manual_processes",
    "master_data_management",
    "data_validation_reconciliation",
    "built_internal_tools",
    "documentation_maintenance",
    "client_training_onboarding",
    "client_interactions",
    "vendor_coordination",
    "uat_testing",
    "root_cause_analysis",
    "web_development",
    "log_analysis",
    "incident_management",
    "monitoring_alerting",
    "on_call_support",
    "market_data",
    "trade_support"
  ],
  "toolSkills": [
    "sql",
    "python",
    "rest_api",
    "bash_scripting",
    "jira_confluence",
    "duckdb",
    "pandas_python_data_library",
    "excel_vba",
    "power_bi",
    "html_css",
    "shell_scripting",
    "linux_unix",
    "git_version_control",
    "websockets",
    "fix_protocol",
    "bloomberg_terminal"
  ],
  "_customSkillList": null
};

// Handle potential overwrite of getter by simple assignment in drag/drop or admin
Object.defineProperty(careerData, "skillIds", {
  get: function () {
    return this._customSkillList || [...this.taskSkills, ...this.toolSkills];
  },
  set: function (val) {
    this._customSkillList = val;
  },
});

function getSkillName(skillId) {
  return careerData.skills[skillId] || skillId;
}

function ensureLevelBuckets(employer) {
  if (!employer.levels) {
    employer.levels = { 1: [], 2: [], 3: [] };
  }
  if (!employer.levels[1]) employer.levels[1] = [];
  if (!employer.levels[2]) employer.levels[2] = [];
  if (!employer.levels[3]) employer.levels[3] = [];
}

function removeSkillFromLevels(employer, skillId) {
  if (!employer.levels) return;
  [1, 2, 3].forEach((lvl) => {
    const list = employer.levels[lvl];
    if (!list) return;
    let idx = list.indexOf(skillId);
    while (idx > -1) {
      list.splice(idx, 1);
      idx = list.indexOf(skillId);
    }
  });
}

function buildEmployerLevelMap(employer) {
  const map = {};
  if (!employer.levels) return map;
  [1, 2, 3].forEach((lvl) => {
    const list = employer.levels[lvl] || [];
    list.forEach((skillId) => {
      map[skillId] = lvl;
    });
  });
  return map;
}

const container = document.getElementById("skillMatrixContainer");

// ==========================================
// ADMIN MODE STATE
// ==========================================
let isAdminMode = false;

// Toggle Admin Mode
window.toggleAdminMode = function () {
  isAdminMode = !isAdminMode;
  const btn = document.getElementById("adminModeToggle");
  const controls = document.getElementById("adminControls");

  if (btn) {
    btn.style.background = isAdminMode
      ? "rgba(76, 175, 80, 0.4)"
      : "rgba(255, 255, 255, 0.15)";
    btn.textContent = isAdminMode ? "Disable Admin Mode" : "Enable Admin Mode";
  }

  if (controls) {
    controls.style.display = isAdminMode ? "flex" : "none";
  }

  renderHeatmapView();
};

// ==========================================
// ADMIN V2: DROPDOWNS & EDITING
// ==========================================
let activeDropdown = null;

window.openRatingDropdown = function (rowIdx, colIdx, event) {
  if (!isAdminMode) return;
  event.stopPropagation(); // Prevent document click

  closeRatingDropdown();

  // Create Dropdown UI
  const dd = document.createElement("div");
  dd.className = "admin-rating-dropdown";

  const levels = [
    { val: 0, label: "Clear", color: "#333" },
    {
      val: 3,
      label: "Daily Activity (3)",
      color: "var(--hm-p-main)",
      opacity: 0.95,
    }, // Darkest
    {
      val: 2,
      label: "Periodic Activity (2)",
      color: "var(--hm-p-main)",
      opacity: 0.6,
    }, // Medium
    {
      val: 1,
      label: "On Demand (1)",
      color: "var(--hm-p-main)",
      opacity: 0.25,
    }, // Lightest
  ];

  levels.forEach((lvl) => {
    const item = document.createElement("div");
    item.className = "admin-rating-option";

    // Mini color box
    const box = document.createElement("div");
    box.className = "admin-rating-color";
    box.style.background = lvl.color;
    if (lvl.opacity) box.style.opacity = lvl.opacity;

    item.appendChild(box);
    item.appendChild(document.createTextNode(lvl.label));

    item.onclick = () => {
      setRating(rowIdx, colIdx, lvl.val);
      closeRatingDropdown();
    };

    dd.appendChild(item);
  });

  document.body.appendChild(dd);

  // Position it
  dd.style.left = `${event.clientX}px`;
  dd.style.top = `${event.clientY}px`;
  activeDropdown = dd;
};

window.closeRatingDropdown = function () {
  if (activeDropdown) {
    activeDropdown.remove();
    activeDropdown = null;
  }
};

window.setRating = function (rowIdx, colIdx, level) {
  const skillId = careerData.skillIds[rowIdx];
  const employer = careerData.employers[colIdx];

  ensureLevelBuckets(employer);
  removeSkillFromLevels(employer, skillId);
  if (level > 0) {
    employer.levels[level].push(skillId);
  }
  renderHeatmapView();
};

document.addEventListener("click", () => {
  closeRatingDropdown();
});

// Reorder Logic (Drag & Drop)
let dragSrcIndex = null;
let dragSrcSkill = null;

window.handleDragStart = function (e, index) {
  dragSrcIndex = index;
  dragSrcSkill = careerData.skillIds[index];
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", index);
  e.target.classList.add("dragging");
};

window.handleDragOver = function (e) {
  if (e.preventDefault) e.preventDefault();
  return false;
};

window.handleDragEnter = function (e) {
  this.classList.add("drag-over");
};

window.handleDragLeave = function (e) {
  this.classList.remove("drag-over");
};

window.handleDrop = function (e, targetIndex) {
  if (e.stopPropagation) e.stopPropagation();

  // Reorder Data
  if (dragSrcIndex !== null && dragSrcIndex !== targetIndex && dragSrcSkill) {
    const taskCount = careerData.taskSkills.length;
    
    // Determine source and target sections
    const srcIsTask = dragSrcIndex < taskCount;
    const tgtIsTask = targetIndex < taskCount;
    
    // Remove from source array
    if (srcIsTask) {
      const srcArrIdx = careerData.taskSkills.indexOf(dragSrcSkill);
      if (srcArrIdx > -1) careerData.taskSkills.splice(srcArrIdx, 1);
    } else {
      const srcArrIdx = careerData.toolSkills.indexOf(dragSrcSkill);
      if (srcArrIdx > -1) careerData.toolSkills.splice(srcArrIdx, 1);
    }
    
    // Calculate target position in the appropriate array
    if (tgtIsTask) {
      // Insert into taskSkills at the correct position
      careerData.taskSkills.splice(targetIndex, 0, dragSrcSkill);
    } else {
      // Insert into toolSkills at the correct position (offset by taskSkills length)
      const toolIndex = targetIndex - careerData.taskSkills.length;
      careerData.toolSkills.splice(toolIndex, 0, dragSrcSkill);
    }
    
    // Clear custom skill list to force recalculation from source arrays
    careerData._customSkillList = null;
    
    renderHeatmapView();
  }
  return false;
};

window.handleDragEnd = function (e) {
  this.classList.remove("dragging");
  document.querySelectorAll(".hm-skill-row").forEach((row) => {
    row.classList.remove("drag-over");
  });
  dragSrcSkill = null;
};

// Edit Data (Inline)
// Edit Data (Inline)
window.editSkillName = function (idx) {
  if (!isAdminMode) return;
  const skillId = careerData.skillIds[idx];
  const current = getSkillName(skillId);
  const newName = prompt("Edit Skill Name:", current);
  
  if (newName && newName.trim() !== current) {
    const trimmed = newName.trim();
    // Check collision
    if (skillNameExists(trimmed, skillId)) {
      alert("Skill name already exists!");
      return;
    }
    careerData.skills[skillId] = trimmed;
    renderHeatmapView();
  }
};

window.editEmployerName = function (idx) {
  if (!isAdminMode) return;
  const emp = careerData.employers[idx];
  const newName = prompt("Edit Firm Name:", emp.name);
  if (newName) {
    emp.name = newName;
    renderHeatmapView();
  }
};

window.editEmployerYears = function (idx) {
  if (!isAdminMode) return;
  const emp = careerData.employers[idx];
  const newStart = prompt("Start Date (YYYY-MM):", emp.start);
  const newEnd = prompt("End Date (YYYY-MM):", emp.end);

  if (newStart && newEnd) {
    emp.start = newStart;
    emp.end = newEnd;
    renderHeatmapView();
  }
};

// Add New Skill
// Add New Skill
// Add New Skill (Modal)
window.openAddSkillModal = function () {
  const modal = document.getElementById("addSkillModal");
  if (modal) {
    modal.style.display = "flex";
    const input = document.getElementById("newSkillInput");
    if (input) {
      input.value = "";
      setTimeout(() => input.focus(), 100);
    }
  }
};

window.closeAddSkillModal = function () {
  const modal = document.getElementById("addSkillModal");
  if (modal) modal.style.display = "none";
};

function skillNameExists(name, excludeId = null) {
  const target = name.trim();
  return Object.entries(careerData.skills).some(([id, value]) => {
    if (excludeId && id === excludeId) return false;
    return value === target;
  });
}

function makeSkillId(name) {
  const base = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  const normalizedBase = base || "skill";
  let id = normalizedBase;
  let suffix = 2;
  while (careerData.skills[id]) {
    id = `${normalizedBase}_${suffix++}`;
  }
  return id;
}

window.confirmAddSkill = function () {
  const input = document.getElementById("newSkillInput");
  const name = input ? input.value.trim() : "";
  
  if (!name) {
    alert("Please enter a skill name.");
    return;
  }

  if (skillNameExists(name)) {
    alert("Skill name already exists!");
    return;
  }

  const typeRadio = document.querySelector('input[name="skillType"]:checked');
  const type = typeRadio ? typeRadio.value : "task";
  
  const skillId = makeSkillId(name);
  careerData.skills[skillId] = name;

  if (type === "tool") {
    careerData.toolSkills.push(skillId);
  } else {
    careerData.taskSkills.push(skillId);
  }
  
  careerData._customSkillList = null; 
  renderHeatmapView();
  closeAddSkillModal();
};

// Remove Skill
window.removeSkill = function (skillId) {
  const skillName = getSkillName(skillId);
  if (!confirm(`Delete skill "${skillName}"?`)) return;
  
  const taskIdx = careerData.taskSkills.indexOf(skillId);
  if (taskIdx > -1) {
    careerData.taskSkills.splice(taskIdx, 1);
  } else {
    const toolIdx = careerData.toolSkills.indexOf(skillId);
    if (toolIdx > -1) {
      careerData.toolSkills.splice(toolIdx, 1);
    }
  }

  careerData.employers.forEach((e) => {
    ensureLevelBuckets(e);
    removeSkillFromLevels(e, skillId);
  });
  
  delete careerData.skills[skillId];
  if (careerData._customSkillList) {
    careerData._customSkillList = careerData._customSkillList.filter(
      (id) => id !== skillId,
    );
  }
  careerData._customSkillList = null;
  renderHeatmapView();
};

// Save Career Data (Export JSON)
window.saveCareerData = async function () {
  const jsonStr = JSON.stringify(careerData, null, 2);
  try {
    await navigator.clipboard.writeText("const careerData = " + jsonStr + ";");
    alert("Data copied to clipboard! You can paste it into js/skill-matrix.js");

    const blob = new Blob(["const careerData = " + jsonStr + ";"], {
      type: "text/javascript",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "skill-matrix-data.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error("Save failed:", err);
    alert("Failed to save/copy. Check console.");
  }
};

// Ensure minimal theme is set on load
document.addEventListener("DOMContentLoaded", () => {
  const view = document.querySelector(".skill-matrix-view");
  if (view) view.setAttribute("data-heatmap-theme", "minimal");
});



// Utilities
function calculateMonths(start, end) {
  const s = new Date(start);
  const e = new Date(end);
  return (
    (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth())
  );
}

// Color Mapping
const COLOR_MAP = {
  3: "bg-level-3",
  2: "bg-level-2",
  1: "bg-level-1",
  0: "bg-level-0",
};

/**
 * renderHeatmapView
 * Ported directly from foo1.html logic to match "THAT TABLE" request.
 * Uses exact same structure but with vanilla CSS classes defined in skill-matrix.css.
 * Now with mobile responsive support - shows single firm at a time on mobile.
 */
function renderHeatmapView() {
  // Check mobile state
  isMobileView = checkMobileView();

  // 1. Calculate Durations
  careerData.employers.forEach(
    (emp) => (emp.dur = calculateMonths(emp.start, emp.end)),
  );
  const totalDur = careerData.employers.reduce((acc, e) => acc + e.dur, 0);
  const skillIds = careerData.skillIds;
  const levelMaps = careerData.employers.map(buildEmployerLevelMap);

  // Update mobile mode class on view
  const view = document.querySelector(".skill-matrix-view");
  if (view) {
    if (isMobileView) {
      view.classList.add("mobile-mode");
    } else {
      view.classList.remove("mobile-mode");
    }
  }

  // Mobile view - single firm carousel
  if (isMobileView) {
    renderMobileView(skillIds, levelMaps);
    return;
  }

  // Desktop/Tablet view - full matrix
  let html = '<div class="hm-layout-container">';

  // 2. Header (Timelines)
  html += renderDiagonalHeader(false, totalDur);

  // 3. Skill Rows
  skillIds.forEach((skillId, idx) => {
    const skillName = getSkillName(skillId);
    let labelContent = skillName;
    let preBtns = "";

    if (isAdminMode) {
      // Drag Handle
      preBtns += `<span class="admin-drag-handle"></span>`;

      // Delete
      preBtns += `<span class="admin-delete-btn" onclick="removeSkill('${skillId}')">-</span>`;

      // Editable Name
      labelContent = `<span class="hm-editable-text" onclick="editSkillName(${idx})">${skillName}</span>`;
    }

    const rowAttrs = isAdminMode
      ? `draggable="true"
          ondragstart="handleDragStart(event, ${idx})"
          ondragover="handleDragOver(event)"
          ondrop="handleDrop(event, ${idx})"
          ondragenter="handleDragEnter(event)"
          ondragleave="handleDragLeave(event)"
          ondragend="handleDragEnd(event)"`
      : "";

    // Check for "Tool" (technical) skill
    const isTool =
      careerData.toolSkills && careerData.toolSkills.includes(skillId);
    const isFirstTool =
      careerData.toolSkills && careerData.toolSkills[0] === skillId;

    // Style classes
    const labelClass = isTool
      ? "hm-skill-label font-monospace"
      : "hm-skill-label";
    const rowClass = isFirstTool
      ? "hm-skill-row hm-separator-top"
      : "hm-skill-row";

    html += `<div class="${rowClass}" data-row="${idx}" ${rowAttrs}>
            <div class="${labelClass}" data-row="${idx}">${preBtns} ${labelContent}</div>
            <div class="hm-skill-track" data-row="${idx}">
                ${careerData.employers
                  .map((e, colIdx) => {
                    const level = levelMaps[colIdx][skillId] || 0;
                    // Admin Mode: Click handler calls dropdown
                    const clickAttr = isAdminMode
                      ? `onclick="openRatingDropdown(${idx}, ${colIdx}, event)"`
                      : "";

                    return `<div class="hm-heat-cell ${COLOR_MAP[level]}"
                                 data-col="${colIdx}"
                                 data-row="${idx}"
                                 style="width: ${(e.dur / totalDur) * 100}%"
                                 ${clickAttr}></div>`;
                  })
                  .join("")}
            </div>
        </div>`;
  });

  // Admin Mode: Add Class to container for CSS styling
  if (view) {
    if (isAdminMode) view.classList.add("admin-mode-active");
    else view.classList.remove("admin-mode-active");
  }

  // 4. Footer (Employers)
  html += renderDiagonalHeader(true, totalDur);

  html += "</div>";
  container.innerHTML = html;
  
  // Re-apply current language
  const currentLang = document.documentElement.lang || 'en';
  if (currentLang !== 'en') {
      container.querySelectorAll('[data-en][data-de]').forEach(el => {
          el.textContent = el.dataset[currentLang];
      });
  }
}

/**
 * renderMobileView
 * Renders a mobile-optimized view showing one firm at a time with navigation
 */
function renderMobileView(skillIds, levelMaps) {
  const employer = careerData.employers[currentFirmIndex];
  const startYear = employer.start.split("-")[0];
  const endYear = employer.end.split("-")[0];
  const levelMap = levelMaps[currentFirmIndex];

  let html = '';

  // Fixed header area that contains firm nav + legend (all sticky together)
  html += `<div class="mobile-skills-fixed-header">
    <!-- Mobile navigation header -->
    <div class="mobile-firm-nav">
      <button class="mobile-firm-nav-btn" onclick="navigateFirm(-1)" ${currentFirmIndex === 0 ? 'disabled' : ''}>
        <span>←</span>
      </button>

      <div class="mobile-firm-info">
        <div class="mobile-firm-name">${employer.name}</div>
        <div class="mobile-firm-years">${startYear} - ${endYear}</div>
        <div class="mobile-firm-dots">
          ${careerData.employers.map((_, idx) =>
            `<div class="mobile-firm-dot ${idx === currentFirmIndex ? 'active' : ''}" onclick="goToFirm(${idx})"></div>`
          ).join('')}
        </div>
      </div>
      <button class="mobile-firm-nav-btn" onclick="navigateFirm(1)" ${currentFirmIndex === careerData.employers.length - 1 ? 'disabled' : ''}>
        <span>→</span>
      </button>
    </div>
    <!-- Legend - single horizontal row below firm nav -->
    <div class="mobile-legend-row">
      <span class="mobile-legend-title" data-de="Häufigkeit je Rolle:" data-en="Cadence:">Cadence:</span>
      <div class="mobile-legend-item"><div class="hm-legend-box bg-level-3"></div> <span data-de="Kern" data-en="Core">Core</span></div>
      <div class="mobile-legend-item"><div class="hm-legend-box bg-level-2"></div> <span data-de="Regelmässig" data-en="Regular">Regular</span></div>
      <div class="mobile-legend-item"><div class="hm-legend-box bg-level-1"></div> <span data-de="Nach Bedarf" data-en="On Demand">On Demand</span></div>
    </div>
  </div>`;

  // Skill rows - single column for current firm
  html += '<div class="hm-layout-container">';

  skillIds.forEach((skillId, idx) => {
    const skillName = getSkillName(skillId);
    const level = levelMap[skillId] || 0;

    // Check for "Tool" (technical) skill
    const isTool = careerData.toolSkills && careerData.toolSkills.includes(skillId);
    const isFirstTool = careerData.toolSkills && careerData.toolSkills[0] === skillId;

    // Style classes
    const labelClass = isTool ? "hm-skill-label font-monospace" : "hm-skill-label";
    const rowClass = isFirstTool ? "hm-skill-row hm-separator-top" : "hm-skill-row";

    html += `<div class="${rowClass}" data-row="${idx}">
      <div class="${labelClass}" data-row="${idx}">${skillName}</div>
      <div class="hm-skill-track" data-row="${idx}">
        <div class="hm-heat-cell ${COLOR_MAP[level]}"
             data-col="${currentFirmIndex}"
             data-row="${idx}"
             style="width: 100%"></div>
      </div>
    </div>`;
  });

  html += '</div>';

  // Swipe hint (only show first time)
  if (!sessionStorage.getItem('swipeHintShown')) {
    html += `<div class="mobile-swipe-hint" style="
      text-align: center;
      padding: 1rem;
      font-size: 11px;
      color: var(--secondary-text);
      opacity: 0.7;
    ">
      <span>← Swipe to navigate between firms →</span>
    </div>`;
    sessionStorage.setItem('swipeHintShown', 'true');
  }

  container.innerHTML = html;
  
  // Re-apply current language
  const currentLang = document.documentElement.lang || 'en';
  if (currentLang !== 'en') {
      container.querySelectorAll('[data-en][data-de]').forEach(el => {
          el.textContent = el.dataset[currentLang];
      });
  }
}

function renderDiagonalHeader(isFooter, totalDur) {
    const legendHtml = !isFooter
      ? `
          <div class="hm-legend hm-legend-style-stacked">
              <div class="hm-stacked-content-col">
                  <span class="hm-stacked-title" data-de="Häufigkeit je Rolle:" data-en="Cadence across roles:">Cadence across roles:</span>
                  <div class="hm-stacked-row">
                      <div class="hm-legend-item"><div class="hm-legend-box bg-level-3"></div> <span data-de="Kern" data-en="Core">Core</span></div>
                      <div class="hm-legend-item"><div class="hm-legend-box bg-level-2"></div> <span data-de="Regelmässig" data-en="Regular">Regular</span></div>
                      <div class="hm-legend-item"><div class="hm-legend-box bg-level-1"></div> <span data-de="Nach Bedarf" data-en="On Demand">On Demand</span></div>
                  </div>
              </div>
          </div>
      `
      : "";

  let html = `<div class="hm-diagonal-zone ${isFooter ? "hm-footer-zone" : "hm-header-zone"}">
        <div class="hm-label-placeholder">${legendHtml}</div>
        <div class="hm-diagonal-track">`;

  careerData.employers.forEach((e, idx) => {
    const offset = isFooter ? e.footerOffset : e.headerOffset;
    // Show only years (e.g., 2023-2025) not months
    const startYear = e.start.split("-")[0];
    const endYear = e.end.split("-")[0];
    // EDITABLE: Years or Name
    let text = isFooter ? e.name : `${startYear}-${endYear}`;

    // Add edit hooks
    if (isAdminMode) {
      if (isFooter) {
        text = `<span class="hm-editable-text" onclick="editEmployerName(${idx})">${text}</span>`;
      } else {
        text = `<span class="hm-editable-text" onclick="editEmployerYears(${idx})">${text}</span>`;
      }
    }
    const width = (e.dur / totalDur) * 100;

    // Inline styles for dynamic rotations/widths that are hard to do in static CSS

    // Separator Lines
    const sepStyle = isFooter
      ? `right: 0; top:0; transform: rotate(45deg); transform-origin: top right;`
      : `right: 0; bottom:0; transform: rotate(45deg); transform-origin: bottom right;`;

    const firstSepStyle = isFooter
      ? `left: 0; top:0; transform: rotate(45deg); transform-origin: top left;`
      : `left: 0; bottom:0; transform: rotate(45deg); transform-origin: bottom left;`;

    // Text Positioning
    /*
      Footer Text Adjustment for Clipping:
      - We wrap the text in a skewed clipper (hm-text-clipper) to match the cell shape.
      - The text element must be UN-skewed (skewX(45deg)) to look normal.
      - We keep the rotation (-45deg).
      - Origin is top-left for the clipper (matching CSS), but text rotation origin is its own.
    */
    const textPosStyle = isFooter
      ? `top: 3px; right: calc(50% + ${offset}px); transform: skewX(45deg) rotate(-45deg); transform-origin: top right;`
      : `bottom: 6px; left: calc(50% + ${offset}px); transform: rotate(-45deg); transform-origin: bottom left;`;

    // Wrapper Position
    const wrapperClass = isFooter ? "hm-pos-top" : "hm-pos-bottom";

    // Clipper Style (Only for footer to prevent hanging text)
    // Matches the CSS ::after highlight shape: skewX(-45deg), origin top left.
    const footerClipperStart = isFooter 
      ? `<div class="hm-text-clipper" style="position: absolute; top:0; left:0; width:100%; height:100%; transform: skewX(-45deg); transform-origin: top left; overflow: hidden; pointer-events: none;">` 
      : ``;
    const footerClipperEnd = isFooter ? `</div>` : ``;

    html += `
            <div class="hm-diagonal-item" data-col="${idx}" style="width: ${width}%">
                <!-- Slanted Cell Boundaries -->
                ${idx === careerData.employers.length - 1 ? "" : `<div class="hm-separator-line" style="${sepStyle}"></div><div class="hm-separator-line" style="${sepStyle}"></div>`}
                <!-- First cell top border removed as requested -->
                ${idx === 0 ? `` : ""}

                <!-- Text Wrapper -->
                ${footerClipperStart}
                <div class="hm-text-wrapper ${wrapperClass}">
                    <div class="hm-angled-text" style="${textPosStyle}">
                        ${text}
                    </div>
                </div>
                ${footerClipperEnd}
            </div>`;
  });

  html += `</div></div>`;
  return html;
}

// Crosshair highlight functionality
function initColumnHighlight() {
  const container = document.getElementById("skillMatrixContainer");
  if (!container) return;

  // Clear previous highlights
  function clearHighlights() {
    container
      .querySelectorAll(".highlight-target, .highlight-col, .highlight-row")
      .forEach((el) => {
        el.classList.remove(
          "highlight-target",
          "highlight-col",
          "highlight-row",
        );
      });
  }

  // Highlight crosshair
  function highlightCrosshair(rowIdx, colIdx) {
    clearHighlights();

    // 1. Column Highlight (Vertical Axis)
    if (colIdx !== undefined && colIdx !== null) {
      container.querySelectorAll(`[data-col="${colIdx}"]`).forEach((el) => {
        // Headers use col-highlight distinct style if needed, or share.
        // For now, mapping to generic axis class
        el.classList.add("highlight-col");
      });
    }

    // 2. Row Highlight (Horizontal Axis) - Only if we have a row index (i.e. inside the grid)
    if (rowIdx !== undefined && rowIdx !== null) {
      container.querySelectorAll(`[data-row="${rowIdx}"]`).forEach((el) => {
        // The row itself (container) or cells?
        // Highlighting the row container might be easier for borders.
        // Let's highlight the cells to match column logic.
        // Note: hm-skill-row has data-row, but individual cells need it too?
        // Actually, we can target the row container if we style it, but the user asked for CELL masking.
        // Let's assume we target the cells. We need to ensure cells have data-row.
        // UPDATE: I will add data-row to cells in renderHeatmapView first.
        // Assuming cells have data-row:
        el.classList.add("highlight-row");
      });
      // Also highlight the row parent/label if needed? User didn't ask.
    }

    // 3. Target Cell (Intersection)
    if (rowIdx !== undefined && colIdx !== undefined) {
      const target = container.querySelector(
        `.hm-heat-cell[data-row="${rowIdx}"][data-col="${colIdx}"]`,
      );
      if (target) {
        target.classList.add("highlight-target");
        // Target overrides axis styles
        target.classList.remove("highlight-col", "highlight-row");
      }
    }
  }

  // Delegate events
  container.addEventListener("mouseover", (e) => {
    const cell = e.target.closest(".hm-heat-cell");
    const diagonalItem = e.target.closest(".hm-diagonal-item");
    const skillLabel = e.target.closest(".hm-skill-label");

    if (cell) {
      const col = cell.dataset.col;
      const row = cell.dataset.row;
      highlightCrosshair(row, col);
    } else if (diagonalItem) {
      const col = diagonalItem.dataset.col;
      highlightCrosshair(null, col);
    } else if (skillLabel) {
      const row = skillLabel.dataset.row;
      highlightCrosshair(row, null);
    } else {
      clearHighlights();
    }
  });

  container.addEventListener("mouseleave", () => {
    clearHighlights();
  });
}

// ==========================================
// MOBILE RESPONSIVE STATE
// ==========================================
let isMobileView = false;
let currentFirmIndex = 0;

function checkMobileView() {
  return window.matchMedia("(max-width: 1200px)").matches;
}

function updateMobileState() {
  const wasMobile = isMobileView;
  isMobileView = checkMobileView();

  const view = document.querySelector('.skill-matrix-view');
  if (view) {
    if (isMobileView) {
      view.classList.add('mobile-mode');
    } else {
      view.classList.remove('mobile-mode');
    }
  }

  // Re-render if state changed
  if (wasMobile !== isMobileView) {
    currentFirmIndex = 0;
    renderHeatmapView();
  }
}

// Navigation functions for mobile
window.navigateFirm = function(direction) {
  const maxIndex = careerData.employers.length - 1;
  currentFirmIndex = Math.max(0, Math.min(maxIndex, currentFirmIndex + direction));
  renderHeatmapView();
};

window.goToFirm = function(index) {
  currentFirmIndex = index;
  renderHeatmapView();
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  updateMobileState();
  renderHeatmapView();
  initColumnHighlight();
  initMobileSwipe();
});

// Handle resize
window.addEventListener('resize', debounce(updateMobileState, 150));

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Mobile swipe support
function initMobileSwipe() {
  const container = document.getElementById('skillMatrixContainer');
  if (!container) return;

  let touchStartX = 0;
  let touchEndX = 0;
  const minSwipeDistance = 50;

  container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  container.addEventListener('touchend', (e) => {
    if (!isMobileView) return;

    touchEndX = e.changedTouches[0].screenX;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swipe right - go to previous firm
        navigateFirm(-1);
      } else {
        // Swipe left - go to next firm
        navigateFirm(1);
      }
    }
  }, { passive: true });
}

// Global function to switch heatmap themes
window.switchHeatmapTheme = function (element, themeName) {
  document
    .querySelectorAll(".theme-opt")
    .forEach((opt) => opt.classList.remove("active"));
  element.classList.add("active");

  const viewContainer = document.querySelector(".skill-matrix-view");
  if (viewContainer) {
    if (themeName === "default") {
      viewContainer.removeAttribute("data-heatmap-theme");
    } else {
      viewContainer.setAttribute("data-heatmap-theme", themeName);
    }
  }
};

// ==========================================
// EXPORT FUNCTIONALITY
// ==========================================

async function addPageNumbersToPdf(pdfDoc, PDFLib) {
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

// Open export modal and render export-ready matrix
window.openMatrixExportModal = function () {
  const modal = document.getElementById("matrixExportModal");
  const preview = document.getElementById("matrixExportPreview");

  if (!modal || !preview) return;

  // Avoid stacked overlays (and potential click-blockers) across different modal systems.
  document.querySelectorAll(".contact-modal-overlay.is-open").forEach((o) => {
    o.classList.remove("active", "is-open");
  });

  // Render export-ready matrix
  renderExportMatrix(preview);

  // Show modal
  modal.classList.add("active");
  if (window.updateBodyScrollLock) {
    window.updateBodyScrollLock();
  } else {
    document.body.style.overflow = "hidden";
  }
};

// Close export modal
window.closeMatrixExportModal = function () {
  const modal = document.getElementById("matrixExportModal");
  if (modal) {
    modal.classList.remove("active");
    if (window.updateBodyScrollLock) {
      window.updateBodyScrollLock();
    } else {
      document.body.style.overflow = "";
    }
  }
};



// Render export-ready matrix (simplified, no sticky, fits on page)
function renderExportMatrix(container) {
  // Calculate durations
  careerData.employers.forEach(
    (emp) => (emp.dur = calculateMonths(emp.start, emp.end)),
  );
  const totalDur = careerData.employers.reduce((acc, e) => acc + e.dur, 0);
  const skillIds = careerData.skillIds;
  const levelMaps = careerData.employers.map(buildEmployerLevelMap);

  const currentLang = document.documentElement.lang || 'en';
  const isDe = currentLang === 'de';

  let html = '<div class="export-matrix">';

  // Header Container (Title + Legend)
  html += '<div class="export-header-container">';

  // Title + Subtitle/Source (Full Width)
  html += '<div class="export-header-full">';
  html += '<div class="export-title-name">Alim Hasanov</div>';
  
  const progressionText = isDe ? "Entwicklung" : "Progression";
  const ampersand = isDe ? "UND" : "&";
  
  html += `<div class="export-title-desc">
    <span style="font-weight: 900">TASKS</span> ${ampersand} <span class="font-monospace" style="font-weight: 700">TOOLS</span> ${progressionText} | 2014-2025
  </div>`;
  html += '<div class="export-subtitle">alimhasanov.com</div>';
  html += "</div>";

  html += "</div>"; // End header container

  // Legend HTML (to be placed in label placeholder)
  const cadenceText = isDe ? "Häufigkeit je Rolle:" : "Cadence across roles:";
  const coreText = isDe ? "Kern" : "Core";
  const regularText = isDe ? "Regelmässig" : "Regular";
  const onDemandText = isDe ? "Nach Bedarf" : "On Demand";

  const legendHtml = `<div class="export-legend stacked">
    <div class="export-legend-note">${cadenceText}</div>
    <div class="export-legend-separator"></div>
    <div class="export-legend-row">
      <div class="export-legend-item"><div class="export-legend-box level-3"></div> ${coreText}</div>
      <div class="export-legend-item"><div class="export-legend-box level-2"></div> ${regularText}</div>
      <div class="export-legend-item"><div class="export-legend-box level-1"></div> ${onDemandText}</div>
    </div>
  </div>`;

  // Diagonal header zone (like original matrix)
  html += '<div class="export-diagonal-zone">';
  html += `<div class="export-label-placeholder">${legendHtml}</div>`;
  html += '<div class="export-diagonal-track">';

  careerData.employers.forEach((e, idx) => {
    const startYear = e.start.split("-")[0];
    const endYear = e.end.split("-")[0];
    const width = (e.dur / totalDur) * 100;
    // Combined: Years + Company Name
    const text = `<span class="export-years">${startYear}-${endYear}</span> <span class="export-firm">${e.name}</span>`;

    html += `<div class="export-diagonal-item" style="width: ${width}%">
      ${idx === careerData.employers.length - 1 ? "" : '<div class="export-separator-line"></div>'}
      ${idx === 0 ? '<div class="export-separator-line export-first-sep"></div>' : ""}
      <div class="export-angled-text">${text}</div>
    </div>`;
  });

  html += "</div></div>";

  // Skill rows with borders
  skillIds.forEach((skillId) => {
    const skillName = getSkillName(skillId);
    // Check for "Tool" (technical) skill
    const isTool =
      careerData.toolSkills && careerData.toolSkills.includes(skillId);
    const isFirstTool =
      careerData.toolSkills && careerData.toolSkills[0] === skillId;

    // Style classes
    const labelClass = isTool
      ? "export-skill-label font-monospace"
      : "export-skill-label";
    const rowClass = isFirstTool
      ? "export-skill-row hm-separator-top"
      : "export-skill-row"; // Re-using hm-separator-top if compat, or check CSS

    html += `<div class="${rowClass}">
      <div class="${labelClass}">${skillName}</div>
      <div class="export-skill-track">
        ${careerData.employers
          .map((e, colIdx) => {
            const level = levelMaps[colIdx][skillId] || 0;
            const width = (e.dur / totalDur) * 100;
            return `<div class="export-heat-cell level-${level}" style="width: ${width}%"></div>`;
          })
          .join("")}
      </div>
    </div>`;
  });

  html += "</div>";
  container.innerHTML = html;
}

// Download as PDF
window.downloadMatrixAsPDF = async function () {
  const preview = document.getElementById("matrixExportPreview");
  const btn = document.querySelector(".matrix-export-btn");
  const checkbox = document.getElementById("includeCV");
  const includeCV = checkbox && checkbox.checked;

  if (!preview || !window.html2canvas || !window.jspdf) {
    console.error("Required libraries not loaded");
    return;
  }

  // Disable button during generation
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
      <circle cx="12" cy="12" r="10" stroke-dasharray="31.4 31.4" stroke-dashoffset="0"/>
    </svg> Generating...`;
  }

  try {
    // Capture the preview as canvas
    const canvas = await html2canvas(preview, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
    });

    // Create PDF
    const { jsPDF } = window.jspdf;
    const imgData = canvas.toDataURL("image/png");

    // Calculate dimensions to fit on A4 portrait
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // A4 dimensions in mm: 210 x 297
    const pdfWidth = 210;
    const pdfHeight = 297;

    // Calculate scale to fit width with margins
    const margin = 10;
    const maxWidth = pdfWidth - margin * 2;
    const maxHeight = pdfHeight - margin * 2;

    let finalWidth = maxWidth;
    let finalHeight = (imgHeight / imgWidth) * finalWidth;

    // If too tall, scale by height instead
    if (finalHeight > maxHeight) {
      finalHeight = maxHeight;
      finalWidth = (imgWidth / imgHeight) * finalHeight;
    }

    // Center on page
    const xOffset = (pdfWidth - finalWidth) / 2;
    const yOffset = margin;

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    pdf.addImage(imgData, "PNG", xOffset, yOffset, finalWidth, finalHeight);

    // If Include CV is checked, prepend the CV pages
    const PDFLib = window.PDFLib || window.pdfLib || window['pdf-lib'];
    if (includeCV && PDFLib) {
      try {
        const { PDFDocument } = PDFLib;
        
        // Get the skills matrix PDF as bytes
        const matrixPdfBytes = pdf.output('arraybuffer');
        const matrixPdfDoc = await PDFDocument.load(matrixPdfBytes);
        
        // Fetch the CV PDF
        const cvFilename = window.getCVFilename ? window.getCVFilename() : "AlimHasanov_CV_public.pdf";
        const cvResponse = await fetch(cvFilename);
        const cvBytes = await cvResponse.arrayBuffer();
        const cvPdfDoc = await PDFDocument.load(cvBytes);
        
        // Create a new PDF and copy CV pages first, then matrix pages
        const combinedPdf = await PDFDocument.create();
        
        // Copy all CV pages
        const cvPages = await combinedPdf.copyPages(cvPdfDoc, cvPdfDoc.getPageIndices());
        cvPages.forEach(page => combinedPdf.addPage(page));
        
        // Copy matrix page
        const [matrixPage] = await combinedPdf.copyPages(matrixPdfDoc, [0]);
        combinedPdf.addPage(matrixPage);
        
        await addPageNumbersToPdf(combinedPdf, PDFLib);

        // Save combined PDF
        const combinedPdfBytes = await combinedPdf.save();
        const blob = new Blob([combinedPdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'AlimHasanov_CV_public.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error merging with CV:', error);
        alert('Unable to merge with CV. This feature requires the page to be served over HTTP. Downloading skills matrix only.');
        pdf.save("AlimHasanov_Skills.pdf");
      }
    } else {
      // Just save the skills matrix
      pdf.save("AlimHasanov_Skills.pdf");
    }
  } catch (error) {
    console.error("PDF generation failed:", error);
    alert("Failed to generate PDF. Please try again.");
  } finally {
    // Re-enable button
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>`;
    }
  }
};

// Close modal on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMatrixExportModal();
  }
});

// Close modal on backdrop click
document.addEventListener("click", (e) => {
  const modal = document.getElementById("matrixExportModal");
  if (e.target === modal) {
    closeMatrixExportModal();
  }
});
