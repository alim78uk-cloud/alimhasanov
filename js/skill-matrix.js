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
      "skills": {
        "Application Support": 1,
        "Incident Management": 3,
        "Troubleshooting": 1,
        "Monitoring": 3,
        "SQL": 1,
        "Python": 1,
        "REST APIs": 1,
        "Data Automation": 3,
        "Master Data Management": 3,
        "Jira": 3,
        "Web Development": 2,
        "HTML & CSS": 3,
        "Data Profiling": 3,
        "Quality Assessment": 3,
        "Process Automation": 3,
        "DuckDB": 3,
        "Excel VBA": 2,
        "ETL Pipelines": 2,
        "Agile/Scrum": 3,
        "WebSockets": 3,
        "Bash": 1
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
      "skills": {
        "Application Support": 1,
        "Incident Management": 1,
        "Troubleshooting": 1,
        "Monitoring": 1,
        "SQL": 1,
        "Python": 1,
        "WebSockets": 1,
        "REST APIs": 1,
        "Bash": 3,
        "Testing & Debugging": 3,
        "Jira": 3,
        "Data Automation": 1,
        "Crypto Assets": 3,
        "Fix Protocol": 2,
        "Linux Systems": 3,
        "Log Analysis": 3,
        "Network Debugging": 2,
        "Market Data": 3,
        "On-call Support": 3
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
      "skills": {
        "Application Support": 1,
        "Incident Management": 1,
        "Troubleshooting": 1,
        "Monitoring": 1,
        "SQL": 1,
        "Python": 1,
        "REST APIs": 1,
        "Bash": 2,
        "Testing & Debugging": 2,
        "Jira": 3,
        "Data Automation": 1,
        "Financial Systems": 3,
        "Batch Processing": 3,
        "Shell Scripting": 3,
        "ITIL": 2,
        "SLA Management": 3,
        "Client Relations": 2,
        "WebSockets": 2
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
      "skills": {
        "Application Support": 1,
        "Incident Management": 1,
        "Troubleshooting": 1,
        "Monitoring": 1,
        "SQL": 1,
        "Python": 1,
        "Bash": 3,
        "Testing & Debugging": 2,
        "Data Automation": 3,
        "Jira": 1,
        "Algorithmic Trading": 3,
        "System Latency": 2,
        "Performance Tuning": 2,
        "Data Integrity": 3,
        "WebSockets": 1,
        "REST APIs": 1
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
      "skills": {
        "Application Support": 1,
        "Incident Management": 1,
        "Troubleshooting": 1,
        "Monitoring": 1,
        "SQL": 1,
        "Python": 1,
        "Testing & Debugging": 3,
        "Data Automation": 2,
        "Technical Support": 3,
        "Linux/Unix": 3,
        "Connectivity": 3,
        "WebSockets": 2,
        "REST APIs": 1
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
      "skills": {
        "Troubleshooting": 3,
        "Monitoring": 3,
        "SQL": 2,
        "Python": 1,
        "Master Data Management": 3,
        "HTML & CSS": 2,
        "Data Automation": 1,
        "Web Development": 1,
        "Bloomberg Terminal": 3,
        "Customer Service": 3,
        "Data Mining": 2
      },
      "dur": 8
    }
  ],
  "skillList": [
    "Application Support",
    "Incident Management",
    "Troubleshooting",
    "Monitoring",
    "SQL",
    "Python",
    "WebSockets",
    "REST APIs",
    "Bash",
    "Testing & Debugging",
    "Data Automation",
    "Master Data Management",
    "Jira",
    "Web Development",
    "HTML & CSS",
    "Data Profiling",
    "Quality Assessment",
    "Process Automation",
    "DuckDB",
    "Excel VBA",
    "ETL Pipelines",
    "Agile/Scrum",
    "Crypto Assets",
    "Fix Protocol",
    "Linux Systems",
    "Log Analysis",
    "Network Debugging",
    "Market Data",
    "On-call Support",
    "Financial Systems",
    "Batch Processing",
    "Shell Scripting",
    "ITIL",
    "SLA Management",
    "Algorithmic Trading",
    "System Latency",
    "Performance Tuning",
    "Data Integrity",
    "Technical Support",
    "Linux/Unix",
    "Connectivity",
    "Bloomberg Terminal",
    "Customer Service",
    "Data Mining"
  ],
};

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
    btn.style.background = isAdminMode ? "rgba(76, 175, 80, 0.4)" : "rgba(255, 255, 255, 0.15)";
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

  const skillName = careerData.skillList[rowIdx];
  const employer = careerData.employers[colIdx];
  
  // Create Dropdown UI
  const dd = document.createElement("div");
  dd.className = "admin-rating-dropdown";
  
  const levels = [
    { val: 0, label: "Clear", color: "#333" }, 
    { val: 1, label: "Daily Focus (1)", color: "var(--hm-p-main)", opacity: 0.95 },   // Darkest
    { val: 2, label: "Regularly (2)", color: "var(--hm-p-main)", opacity: 0.6 },    // Medium
    { val: 3, label: "On Demand (3)", color: "var(--hm-p-main)", opacity: 0.25 }    // Lightest
  ];

  levels.forEach(lvl => {
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
  const skillName = careerData.skillList[rowIdx];
  const employer = careerData.employers[colIdx];
  
  if (level === 0) {
    delete employer.skills[skillName];
  } else {
    employer.skills[skillName] = level;
  }
  renderHeatmapView();
};

document.addEventListener("click", () => {
  closeRatingDropdown();
});


// Reorder Logic (Drag & Drop)
let dragSrcIndex = null;

window.handleDragStart = function (e, index) {
  dragSrcIndex = index;
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
  if (dragSrcIndex !== null && dragSrcIndex !== targetIndex) {
      // Move item
      const item = careerData.skillList.splice(dragSrcIndex, 1)[0];
      careerData.skillList.splice(targetIndex, 0, item);
      renderHeatmapView();
  }
  return false;
};

window.handleDragEnd = function (e) {
  this.classList.remove("dragging");
  document.querySelectorAll(".hm-skill-row").forEach(row => {
      row.classList.remove("drag-over");
  });
};

// Edit Data (Inline)
window.editSkillName = function (idx) {
  if (!isAdminMode) return;
  const current = careerData.skillList[idx];
  const newName = prompt("Edit Skill Name:", current);
  if (newName && newName !== current) {
    // Migrate data
    careerData.employers.forEach(e => {
        if (e.skills[current] !== undefined) {
            e.skills[newName] = e.skills[current];
            delete e.skills[current];
        }
    });
    careerData.skillList[idx] = newName;
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
window.addSkill = function () {
  const name = prompt("Enter new skill name:");
  if (name && !careerData.skillList.includes(name)) {
    careerData.skillList.push(name);
    renderHeatmapView();
  } else if (careerData.skillList.includes(name)) {
    alert("Skill already exists!");
  }
};

// Remove Skill
window.removeSkill = function (skillName) {
  if (!confirm(`Delete skill "${skillName}"?`)) return;
  const idx = careerData.skillList.indexOf(skillName);
  if (idx > -1) {
    careerData.skillList.splice(idx, 1);
    careerData.employers.forEach(e => {
      delete e.skills[skillName];
    });
    renderHeatmapView();
  }
};

// Save Career Data (Export JSON)
window.saveCareerData = async function () {
  const jsonStr = JSON.stringify(careerData, null, 2);
  try {
     await navigator.clipboard.writeText("const careerData = " + jsonStr + ";");
     alert("Data copied to clipboard! You can paste it into js/skill-matrix.js");
     
     const blob = new Blob(["const careerData = " + jsonStr + ";"], { type: "text/javascript" });
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

// Palette Switcher Logic
window.switchPalette = function (palette) {
  const view = document.querySelector(".skill-matrix-view");
  if (view) view.setAttribute("data-heatmap-palette", palette);
};

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
 */
function renderHeatmapView() {
  // 1. Calculate Durations
  careerData.employers.forEach(
    (emp) => (emp.dur = calculateMonths(emp.start, emp.end)),
  );
  const totalDur = careerData.employers.reduce((acc, e) => acc + e.dur, 0);

  let html = '<div class="hm-layout-container">';

  // 2. Header (Timelines)
  html += renderDiagonalHeader(false, totalDur);

  // 3. Skill Rows
  careerData.skillList.forEach((skill, idx) => {
    let labelContent = skill;
    let preBtns = "";
    
    if (isAdminMode) {
        // Drag Handle
        preBtns += `<span class="admin-drag-handle"></span>`;
        
        // Delete
        preBtns += `<span class="admin-delete-btn" onclick="removeSkill('${skill}')">-</span>`;
        
        // Editable Name
        labelContent = `<span class="hm-editable-text" onclick="editSkillName(${idx})">${skill}</span>`;
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

    html += `<div class="hm-skill-row" data-row="${idx}" ${rowAttrs}>
            <div class="hm-skill-label">${preBtns} ${labelContent}</div>
            <div class="hm-skill-track">
                ${careerData.employers
                  .map((e, colIdx) => {
                    const level = e.skills[skill] || 0;
                    // Admin Mode: Click handler calls dropdown
                    const clickAttr = isAdminMode ? `onclick="openRatingDropdown(${idx}, ${colIdx}, event)"` : "";
                    
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
  const view = document.querySelector(".skill-matrix-view");
  if (view) {
    if (isAdminMode) view.classList.add("admin-mode-active");
    else view.classList.remove("admin-mode-active");
  }

  // 4. Footer (Employers)
  html += renderDiagonalHeader(true, totalDur);

  html += "</div>";
  container.innerHTML = html;
}

function renderDiagonalHeader(isFooter, totalDur) {
  const legendHtml = !isFooter
    ? `
        <!-- Download Button linked to Legend area -->
        <button class="matrix-download-btn" onclick="openMatrixExportModal()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
            </svg>
        </button>

        <div class="hm-legend">
            <div class="hm-legend-item"><div class="hm-legend-box bg-level-3"></div> Daily Focus</div>
            <div class="hm-legend-item"><div class="hm-legend-box bg-level-2"></div> Regularly</div>
            <div class="hm-legend-item"><div class="hm-legend-box bg-level-1"></div> Support Mode</div>
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
    const textPosStyle = isFooter
      ? `top: 6px; right: calc(50% + ${offset}px); transform: rotate(-45deg); transform-origin: top right;`
      : `bottom: 6px; left: calc(50% + ${offset}px); transform: rotate(-45deg); transform-origin: bottom left;`;

    // Wrapper Position
    const wrapperClass = isFooter ? "hm-pos-top" : "hm-pos-bottom";

    html += `
            <div class="hm-diagonal-item" data-col="${idx}" style="width: ${width}%">
                <!-- Slanted Cell Boundaries -->
                <div class="hm-separator-line" style="${sepStyle}"></div>
                <div class="hm-separator-line" style="${sepStyle}"></div>
                <!-- First cell top border removed as requested -->
                ${idx === 0 ? `` : ""}

                <!-- Text Wrapper -->
                <div class="hm-text-wrapper ${wrapperClass}">
                    <div class="hm-angled-text" style="${textPosStyle}">
                        ${text}
                    </div>
                </div>
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
    container.querySelectorAll(".highlight-target, .highlight-col, .highlight-row").forEach((el) => {
      el.classList.remove("highlight-target", "highlight-col", "highlight-row");
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
      const target = container.querySelector(`.hm-heat-cell[data-row="${rowIdx}"][data-col="${colIdx}"]`);
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

    if (cell) {
      const col = cell.dataset.col;
      const row = cell.dataset.row; // Needs to be added in render
      highlightCrosshair(row, col);
    } else if (diagonalItem) {
      const col = diagonalItem.dataset.col;
      // Header hover -> Only column highlight, no row
      highlightCrosshair(null, col);
    } else {
       clearHighlights();
    }
  });

  container.addEventListener("mouseleave", () => {
    clearHighlights();
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderHeatmapView();
  initColumnHighlight();
});

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

// Open export modal and render export-ready matrix
window.openMatrixExportModal = function () {
  const modal = document.getElementById("matrixExportModal");
  const preview = document.getElementById("matrixExportPreview");

  if (!modal || !preview) return;

  // Render export-ready matrix
  renderExportMatrix(preview);

  // Show modal
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

// Close export modal
window.closeMatrixExportModal = function () {
  const modal = document.getElementById("matrixExportModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
};

// Toggle color/B&W mode
window.toggleExportColor = function () {
  const preview = document.getElementById("matrixExportPreview");
  const toggle = document.getElementById("exportColorToggle");

  if (preview && toggle) {
    if (toggle.checked) {
      preview.classList.remove("bw-mode");
    } else {
      preview.classList.add("bw-mode");
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

  let html = '<div class="export-matrix">';

  // Header Container (Title + Legend)
  html += '<div class="export-header-container">';
  
  // Left side: Title + Subtitle/Source
  html += '<div class="export-header-left">';
  html += '<div class="export-title-name">Alim Hasanov</div>';
  html += '<div class="export-title-desc">Skills & Activities Progression</div>';
  html += '<div class="export-subtitle">alimhasanov.com | 2014-2025</div>';
  html += '</div>';

  // Right side: Legend
  html += `<div class="export-legend top-right">
    <div class="export-legend-item"><div class="export-legend-box level-3"></div> Daily Focus</div>
    <div class="export-legend-item"><div class="export-legend-box level-2"></div> Regularly</div>
    <div class="export-legend-item"><div class="export-legend-box level-1"></div> Support Mode</div>
  </div>`;
  
  html += '</div>'; // End header container

  // Diagonal header zone (like original matrix)
  html += '<div class="export-diagonal-zone">';
  html += '<div class="export-label-placeholder"></div>';
  html += '<div class="export-diagonal-track">';

  careerData.employers.forEach((e, idx) => {
    const startYear = e.start.split("-")[0];
    const endYear = e.end.split("-")[0];
    const width = (e.dur / totalDur) * 100;
    // Combined: Years + Company Name
    const text = `<span class="export-years">${startYear}-${endYear}</span> <span class="export-firm">${e.name}</span>`;

    html += `<div class="export-diagonal-item" style="width: ${width}%">
      <div class="export-separator-line"></div>
      ${idx === 0 ? '<div class="export-separator-line export-first-sep"></div>' : ''}
      <div class="export-angled-text">${text}</div>
    </div>`;
  });

  html += '</div></div>';

  // Skill rows with borders
  careerData.skillList.forEach((skill) => {
    html += `<div class="export-skill-row">
      <div class="export-skill-label">${skill}</div>
      <div class="export-skill-track">
        ${careerData.employers
          .map((e) => {
            const level = e.skills[skill] || 0;
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
    pdf.save("ali-hariri-tech-skills-matrix.pdf");
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
      </svg> Download PDF`;
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
