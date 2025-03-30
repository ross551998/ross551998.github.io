let mainDisplay = document.getElementById('mainclicker');
const openMobile_assest = document.getElementById('mobile-assests');
const mobile_assests = document.getElementById('assests');
const nav = document.getElementById('mobile-nav');

//for smaller devices
function isTouchDevice() {
    return ('ontouchstart' in window) || 
           (navigator.maxTouchPoints > 0) || 
           (window.matchMedia("(hover: none) and (pointer: coarse)").matches);
}

// Set up the navigation only on touch screens
function setupMobileNav() {
    if (isTouchDevice()) {
        const navIcon = document.getElementById('bar-for-mobile');
        const closeBtn = document.getElementById('mobile-close-nav');
        const d = document.getElementById('wholedisplay');
        // Open the sliding navigation
        navIcon.addEventListener('click', () => {
            nav.classList.add('show');
            d.style.marginTop = '-5%';
            mainDisplay.style.marginTop = '-5%';
            console.log('Navigation opened!');
        });
        // Close the sliding navigation
        closeBtn.addEventListener('click', () => {
            nav.classList.remove('show');
            d.style.marginTop = '15%';
            mainDisplay.style.marginTop = '33%';
            console.log('Navigation closed!');
        });
    } else {
        console.log("Non-touch device detected. Navigation is disabled.");
    }
}
openMobile_assest.addEventListener('click', () => {
    showAssests();
})
// Initialize navigation on page load
setupMobileNav();

// Check on window resize (for dynamic devices like tablets)
window.addEventListener('resize', setupMobileNav);

//js manipulation of assests
function showAssests() {
    if(isTouchDevice()) {
        nav.classList.remove('show');
        mobile_assests.style.position = 'fixed';
        mobile_assests.style.display = 'flex';
        mobile_assests.style.bottom = '0';
        mobile_assests.style.height = '50vh';
        mobile_assests.style.width = '100%';
        mobile_assests.style.transition = 'bottom 0.5s ease';
    } else {
        console.log('no!');
    }
}
document.getElementById('closeasset').addEventListener('click', () => {
    closeMobileAssests();
})
function closeMobileAssests() {
    if(isTouchDevice()) {
        nav.classList.add('show');
        mobile_assests.style.display = 'none';

    }
}
