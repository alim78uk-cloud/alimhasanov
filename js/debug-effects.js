// ========================================
// Debug Panel Controls
// ========================================
const root = document.documentElement;
const rngHeight = document.getElementById('rngHeight');
const valHeight = document.getElementById('valHeight');
const rngWidth = document.getElementById('rngWidth');
const valWidth = document.getElementById('valWidth');
const rngPad = document.getElementById('rngPad');
const valPad = document.getElementById('valPad');
const debugPanel = document.getElementById('debugPanel');

function toggleDebug() {
    if (debugPanel.style.display === 'none') {
        debugPanel.style.display = 'block';
    } else {
        debugPanel.style.display = 'none';
    }
}

rngHeight.addEventListener('input', (e) => {
    const val = e.target.value + 'px';
    root.style.setProperty('--sticky-height', val);
    valHeight.textContent = val;
});

rngWidth.addEventListener('input', (e) => {
    const val = e.target.value + 'px';
    root.style.setProperty('--details-max-width', val);
    valWidth.textContent = val;
});

rngPad.addEventListener('input', (e) => {
    const val = e.target.value + 'rem';
    root.style.setProperty('--details-top-padding', val);
    valPad.textContent = val;
});

// ========================================
// Effects Logic
// ========================================
const effectSelect = document.getElementById('effectSelect');
const btnTriggerEffect = document.getElementById('btnTriggerEffect');

// Logic to trigger the CURRENTLY SELECTED effect at the specific origin (toggle or center)
function triggerCurrentEffect(originEl) {
    const type = effectSelect ? effectSelect.value : 'fireworks';

    // Default origin: toggle switch position
    const toggle = document.getElementById('modeToggleHero');
    const targetEl = originEl || toggle;

    let originX = 0.5;
    let originY = 0.5;

    if (targetEl) {
        const rect = targetEl.getBoundingClientRect();
        originX = (rect.left + rect.width / 2) / window.innerWidth;
        originY = (rect.top + rect.height / 2) / window.innerHeight;
    }

    if (type === 'fireworks') {
        // Fireworks: Localized, intense burst
        const count = 25; // Reduced by ~80% (was 120)
        const defaults = {
            origin: { x: originX, y: originY },
            zIndex: 9999,
            scalar: 1.4,
            startVelocity: 30,
            gravity: 0.35,
            decay: 0.94,
            spread: 360,
            ticks: 100
        };
        confetti(Object.assign({}, defaults, { particleCount: count }));
        setTimeout(() => {
             confetti(Object.assign({}, defaults, { particleCount: count / 2, scalar: 1.2, startVelocity: 25 }));
        }, 100);

    } else if (type === 'hobbies') {
        // Hobby Burst: Emojis + Colors
        const scalar = 3;
        const hobbies = ['📷', '✈️', '🌲', '☕', '🎮', '🍳'];

        const defaults = {
            origin: { x: originX, y: originY },
            spread: 360,
            ticks: 100,
            gravity: 0.6,
            decay: 0.92,
            startVelocity: 25,
            scalar: 3,
            zIndex: 9999
        };

        const emojiShapes = hobbies.map(emoji => confetti.shapeFromText({ text: emoji, scalar: 3 }));

        confetti({
            ...defaults,
            particleCount: 40,
            shapes: emojiShapes,
            scalar: 3
        });

        // Add some glitter/colors behind
        confetti({
            ...defaults,
            particleCount: 60,
            shapes: ['circle'],
            colors: ['#FF3B30', '#FFD700', '#00d4ff'],
            scalar: 1
        });

    } else if (type === 'paper') {
        // Paper Toss: Classic confetti
        const defaults = {
            origin: { x: originX, y: originY },
            zIndex: 9999,
            spread: 120,
            startVelocity: 35,
            gravity: 0.8,
            ticks: 200,
            scalar: 1.1,
            drift: 0,
        };

        confetti({
            ...defaults,
            particleCount: 100,
            shapes: ['square'],
            colors: ['#ffffff', '#eeeeee', '#dddddd']
        });

        confetti({
            ...defaults,
            particleCount: 50,
            shapes: ['circle'],
            colors: ['#FF3B30', '#007AFF', '#34C759', '#FF9500']
        });
    }
}

// Manual Trigger
if (btnTriggerEffect) {
    btnTriggerEffect.addEventListener('click', () => {
        triggerCurrentEffect();
    });
}

// ========================================
// Heatmap Firm Names Position Controls
// ========================================
function updateFirmPosition() {
    const topVal = document.getElementById('rngFirmTop')?.value || 25;
    const nudgeVal = document.getElementById('rngFirmNudge')?.value || 0;
    const angleVal = document.getElementById('rngFirmAngle')?.value || -55;

    // Update display values
    const valFirmTop = document.getElementById('valFirmTop');
    const valFirmNudge = document.getElementById('valFirmNudge');
    const valFirmAngle = document.getElementById('valFirmAngle');

    if (valFirmTop) valFirmTop.textContent = topVal + 'px';
    if (valFirmNudge) valFirmNudge.textContent = nudgeVal + 'px';
    if (valFirmAngle) valFirmAngle.textContent = angleVal + 'deg';

    // Apply CSS variables to the container (scope source of truth)
    const container = document.getElementById('skillMatrixContainer');
    if (container) {
        container.style.setProperty('--hm-firm-top', topVal + 'px');
        container.style.setProperty('--hm-firm-nudge', nudgeVal + 'px');
        container.style.setProperty('--hm-firm-angle', angleVal + 'deg');
    }

    // Also update the firm border angle if needed (or ensure CSS uses the same var)
    // The CSS uses --firm-border-angle for ::before, let's sync it or reuse --hm-firm-angle
    if (container) {
         container.style.setProperty('--firm-border-angle', angleVal + 'deg');
    }
}

function copyFirmCSS() {
    const topVal = document.getElementById('rngFirmTop')?.value || 8;
    const nudgeVal = document.getElementById('rngFirmNudge')?.value || 0;
    const angleVal = document.getElementById('rngFirmAngle')?.value || -55;

    const css = `/* Container Variables */
#skillMatrixContainer {
    --hm-firm-top: ${topVal}px;
    --hm-firm-nudge: ${nudgeVal}px;
    --hm-firm-angle: ${angleVal}deg;
}

/* Firm Label */
.footer-row .angled-inner {
    position: absolute;
    left: 50%;
    top: var(--hm-firm-top);
    transform: translateX(calc(-50% + var(--hm-firm-nudge))) rotate(var(--hm-firm-angle));
    transform-origin: center top;
    text-align: center;
}`;

    navigator.clipboard.writeText(css).then(() => {
        alert('CSS copied to clipboard!\\n\\n' + css);
    }).catch(() => {
        prompt('Copy this CSS:', css);
    });
}

// ========================================
// Glass Effect & Photo Controls
// ========================================
const rngBlur = document.getElementById('rngBlur');
const valBlur = document.getElementById('valBlur');
const rngPhotoTop = document.getElementById('rngPhotoTop');
const valPhotoTop = document.getElementById('valPhotoTop');
const rngPhotoSize = document.getElementById('rngPhotoSize');
const valPhotoSize = document.getElementById('valPhotoSize');

if (rngBlur) {
    rngBlur.addEventListener('input', (e) => {
        const val = e.target.value + 'px';
        valBlur.textContent = val;

        // Apply blur to details-tabs
        const detailsTabs = document.querySelector('.details-tabs');
        if (detailsTabs) {
            detailsTabs.style.backdropFilter = `blur(${e.target.value}px)`;
            detailsTabs.style.webkitBackdropFilter = `blur(${e.target.value}px)`;
        }
    });
}

if (rngPhotoTop) {
    rngPhotoTop.addEventListener('input', (e) => {
        const val = e.target.value + 'px';
        valPhotoTop.textContent = val;

        // Apply to sticky profile
        const stickyProfile = document.querySelector('.sticky-profile');
        if (stickyProfile) {
            stickyProfile.style.marginTop = val;
        }
    });
}

if (rngPhotoSize) {
    rngPhotoSize.addEventListener('input', (e) => {
        const val = e.target.value + 'px';
        valPhotoSize.textContent = val;

        // Apply to sticky profile
        const stickyProfile = document.querySelector('.sticky-profile');
        if (stickyProfile) {
            stickyProfile.style.width = val;
            stickyProfile.style.height = val;
        }
    });
}

function copyGlassPhotoCSS() {
    const blurVal = document.getElementById('rngBlur')?.value || 60;
    const photoTopVal = document.getElementById('rngPhotoTop')?.value || 0;
    const photoSizeVal = document.getElementById('rngPhotoSize')?.value || 100;

    const css = `/* Glass Effect */
.details-tabs {
    backdrop-filter: blur(${blurVal}px);
    -webkit-backdrop-filter: blur(${blurVal}px);
}

/* Sticky Profile Photo */
.sticky-profile {
    width: ${photoSizeVal}px;
    height: ${photoSizeVal}px;
    margin-top: ${photoTopVal}px;
}`;

    navigator.clipboard.writeText(css).then(() => {
        alert('CSS copied to clipboard!\\n\\n' + css);
    }).catch(() => {
        prompt('Copy this CSS:', css);
    });
}
