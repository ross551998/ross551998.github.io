const mainDisplay = document.getElementById('mainclicker');
const openMobile_assest = document.getElementById('mobile-assests');
const mobile_assests = document.getElementById('assests');
const nav = document.getElementById('mobile-nav');
const topNav = document.getElementById('navigation');
const mobile_currency = document.getElementById('mobile-gamecontent');
const moneyAmount = document.getElementById('gamecontent');
const openMobile_Upgrades = document.getElementById('mobile-upgrades');
const mobile_upgrades = document.getElementById('upgrade-title');
const open_Vault = document.getElementById('vault');
const mobile_Vault = document.getElementById('personal-vault');
const open_Awards = document.getElementById('mobile-Awards');
const mobile_awards = document.getElementById('awards');
const open_goods = document.getElementById('goods');
const mobile_goods = document.getElementById('buy-goods');

//for smaller devices
function isTouchDevice() {
    const isTouch = ('ontouchstart0 in window') || 
    (navigator.maxTouchPoints > 0) || (window.matchMedia("(hover: none) and (pointer: coarse)").matches);

    const screenWidth = window.innerWidth;
    return isTouch && screenWidth >= 400 && screenWidth <= 700;
    
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
            d.style.marginTop = '0';
            mainDisplay.style.marginTop = '0';
        });
        // Close the sliding navigation
        closeBtn.addEventListener('click', () => {
            nav.classList.remove('show');
            d.style.marginTop = '0';
            mainDisplay.style.marginTop = '0';
        });
    } else {
        console.log("Non-touch device detected. Navigation is disabled.");
    }
}
openMobile_assest.addEventListener('click', () => {
    showAssests();
})
mobile_currency.addEventListener('click', () => {
    showCurrency();
})
openMobile_Upgrades.addEventListener('click', () => {
    showUpgrades();
})
open_Vault.addEventListener('click', () => {
    showVault();
})
open_Awards.addEventListener('click', () => {
    show_Awards();
})
open_goods.addEventListener('click', () => {
    show_goods();
})
// Initialize navigation on page load
setupMobileNav();

// Check on window resize (for dynamic devices like tablets)
window.addEventListener('resize', setupMobileNav);

//js manipulation of assests

//for closing the sections
document.getElementById('closeasset').addEventListener('click', () => {
    closeMobileAssests();
})
document.getElementById('mobile-use-only').addEventListener('click', () => {
    closeCurrency();
})
document.getElementById('mobile-upgrades-only').addEventListener('click', () => {
    closeUpgrades();
})
document.getElementById('closeawards').addEventListener('click', () => {
    close_Awards();
})
document.getElementById('close-goods').addEventListener('click', () => {
    close_goods();
})
//functions themselfs
function showAssests() {
    if(isTouchDevice()) {
        topNav.style.display = 'none';
        nav.classList.remove('show');
        mobile_assests.style.position = 'fixed';
        mobile_assests.style.display = 'flex';
        mobile_assests.style.bottom = '0';
        mobile_assests.style.height = '55vh';
        mobile_assests.style.width = '100%';
        mobile_assests.style.transition = 'bottom 0.5s ease';
        document.getElementsByTagName(nav);
    } else {
        console.log('no!');
    }
}
function closeMobileAssests() {
    if(isTouchDevice()) {
        nav.classList.add('show');
        topNav.style.display = 'flex';
        mobile_assests.style.display = 'none';
    } else {
        console.log('user expericing problems');
    }
}
function showCurrency() {
    if(isTouchDevice()) {
        topNav.style.display = 'none';
        moneyAmount.style.position = 'fixed';
        moneyAmount.style.display = 'flex';
        moneyAmount.style.bottom = '0';
        moneyAmount.style.height = '55vh';
        moneyAmount.style.width = '100%';
        moneyAmount.style.transition = 'bottom 0.5s ease';
        document.getElementById(nav);
    } 
}
function closeCurrency() {
    if(isTouchDevice()) {
        nav.classList.add('show');
        topNav.style.display = 'flex';
        moneyAmount.style.display = 'none';
    } else {
        console.log('error with currency closing');
    }
}
function showUpgrades() {
    if(isTouchDevice()) {
        topNav.style.display = 'none';
        mobile_upgrades.style.position = 'fixed';
        mobile_upgrades.style.display = 'flex';
        mobile_upgrades.style.bottom = '0';
        mobile_upgrades.style.height = '58vh';
        mobile_upgrades.style.width = '100%';
        mobile_upgrades.style.transition = 'bottom 0.5s ease';
        document.getElementById(nav);
    } 
} 
function closeUpgrades() {
    if(isTouchDevice()) {
        nav.classList.add('show');
        topNav.style.display = 'flex';
        mobile_upgrades.style.display = 'none';
    } else {
        console.log('user expericing problems');
    }
}
function showVault() {
    if(isTouchDevice()) {
        topNav.style.display = 'none';
        mobile_Vault.style.position = 'fixed';
        mobile_Vault.style.display = 'flex';
        mobile_Vault.style.bottom = '0';
        mobile_Vault.style.height = '55vh';
        mobile_Vault.style.width = '100%';
        mobile_Vault.style.transition = 'bottom 0.5s ease';
        document.getElementById(nav);
    } else {
        
    }
}
function show_Awards() {
    if(isTouchDevice()) {
        if(awardUnlocked) {
            topNav.style.display = 'none';
            mobile_awards.style.position = 'fixed';
            mobile_awards.style.display = 'grid';
            mobile_awards.style.bottom = '0';
            mobile_awards.style.height = '55vh';
            mobile_awards.style.width = '100%';
            mobile_awards.style.transition = 'bottom 0.5s ease';
            document.getElementById(nav);
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.innerText = 'not avaible right now..';
        }
    } 
}
function close_Awards() {
    if(isTouchDevice()) {
        nav.classList.add('show');
        topNav.style.display = 'flex';
        mobile_awards.style.display = 'none';
    } else {
        console.log('user expericing problems');
    }
}
function show_goods() {
    if(isTouchDevice()) {
        if(goodsUnlocked) {
            topNav.style.display = 'none';
            mobile_goods.style.position = 'fixed';
            mobile_goods.style.display = 'flex';
            mobile_goods.style.bottom = '0';
            mobile_goods.style.height = '55vh';
            mobile_goods.style.width = '100%';
            mobile_goods.style.transition = 'bottom 0.5s ease';
            document.getElementById(nav);
        }
    } 
}
function close_goods() {
    if(isTouchDevice()) {
        nav.classList.add('show');
        topNav.style.display = 'none';
        mobile_goods.style.display = 'none';
    } else {
        console.log('user expericing problems with goods closing');
    }
}
