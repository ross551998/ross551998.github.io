const tutorialSteps = [
    {
        title: "Welcome to idle wealth tycoon!",
        content: "In this game, you will manage your wealth and make strategic decisions to grow your empire.",
        target: null,
        platform: 'both',
    },
    {
        title: "main clicker",
        content: "Click the button to earn money. The more you click, the more money you make!",
        target: '#mainclicker',
        platform: 'both',
    },
    {
        title: "icon",
        content: "click the 3 lines to open your navigation and all the features",
        platform: 'mobile',
        target: '#bar-for-mobile',
    },
    {
        title: "navigation",
        content: "here below is where all the features are, we will go over them",
        platform: 'mobile',
        target: '#mobile-nav',
    },
    {
        title: "upgrades",
        content: "here you will find the upgrades for all your items, here you can unlock and add value to them!",
        platform: 'both',
        target: '#upgrades',
    },
    {
        title: "coin lab",
        content: "here is the coin lab, where are the coins are stored, you can add values to them, see the values of them etc!",
        platform: 'both',
    },
    {
        title: "assests",
        content: "down below are your assests section, here you can find where you store money, you can get additonal goods to add even more value!",
        platform: 'both',
    },
    {
        title: 'goods',
        content: "down below are your goods, here you can add even more value to your coin lab!",
        platform: 'both',
    },
    {
        title: "awards",
        content: "these are your awards you will gain some as you progress through the game",
        platform: 'both',
    }
]
//localStorage.removeItem('tutorialShown');
let currentStep = 0;
const tutorialBox = document.getElementById('overlay');
let h = document.getElementById('bar-for-mobile');
const tutorialTitle = document.getElementById('tt');
const tutroialContent = document.getElementById('tc');
window.onload = function() {
    console.log('page fully loaded');
    if(!localStorage.getItem('tutorialShown') && !isTouchDevice()) {
        showSteps();
        localStorage.setItem('tutorialShown', 'true');
    }
}
function isMobile() {
    return window.innerWidth <= 896;
}
function showSteps() {
    tutorialBox.style.display = 'flex';
    let steps = tutorialSteps[currentStep];
    tutorialTitle.textContent = steps.title;
    tutroialContent.textContent = steps.content;
    u.classList.remove('active');
    settings.style.display = 'none';
    try {
        if(steps.platform === 'both' && !isMobile()) {
            
            t.style.marginLeft = '12%';
            console.log('web ready');
            try {
                if(currentStep === 4) {
                    tutorialBox.style.top = '56%';
                } else if(currentStep === 5) {
                    tutorialBox.style.left = '60%';
                } else if(currentStep === 6) {
                    tutorialBox.style.top = '';
                    tutorialBox.style.left = '32%';
                    document.getElementById('assests').style.display = 'flex';
                } else if(currentStep === 7) {
                    document.getElementById('assests').style.display = 'none';
                    r.style.display = 'flex';
                } else if(currentStep === 8) {
                    r.style.display = 'none';
                    awards.style.display = 'grid';
                } 
            } catch(error) {
                document.getElementById('assests').style.display = 'none';
                r.style.display = 'none';
                tutorialBox.style.display = 'none';
                console.error(`error with ${currentStep} web: ${isMobile()}`);
            }
        } else if(steps.platform === 'mobile' && isMobile()) {
            if(currentStep === 2) {
                tutorialBox.style.top = '52%';
                console.log('working');
            } else if(currentStep === 3) {
                tutorialBox.style.top = '10%';
                nav.classList.add('show');
                console.log(`current step: ${currentStep}`);
            } else {
                tutorialBox.style.display = 'none';
                console.error(`error with ${currentStep} web: ${isMobile()}`);
            }
        } else {
            if(!isMobile()) {
                currentStep++;
                showSteps();
            } else if(isMobile()) {
                nav.classList.remove('show');
                tutorialBox.style.width = '90%';
                tutorialBox.style.top = '46%';
                if(currentStep === 4) {
                    nav.classList.remove('show');
                    tutorialBox.style.top = '0';
                    showUpgrades();
                } else if(currentStep === 5) {
                    tutorialBox.style.top = '0';
                    closeUpgrades();
                    nav.classList.remove('show');
                    showCurrency();
                } else if(currentStep === 6) {
                    closeCurrency();
                    showAssests();
                    tutorialBox.style.top = '0';
                } else if(currentStep === 7) {
                    tutorialBox.style.top = '0';
                    closeMobileAssests();
                    goodsUnlocked = true;
                    show_goods();
                } else if(currentStep === 8) {
                    goodsUnlocked = false;
                    awardUnlocked = true;
                    close_goods();
                    tutorialBox.style.top = '0';
                    show_Awards();
                }
            }
        }
    } catch(error) {
        tutorialBox.style.display = 'none';
        console.log("caught a error:", error.message, "sent back home");
    }
}
function nextStep() {
    currentStep++;
    if(currentStep < tutorialSteps.length) {
        showSteps();
    } else {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('arrow');
        assestButtn.style.pointerEvents = 'auto';
        tutorialBox.style.display = 'none';
        goodsUnlocked = false;
        smallGoods.sgFirst.style.display = 'none';
        r.style.display = 'none';
        e.style
        document.getElementById('assests').style.display = 'none';
        assestButtn.style.pointerEvents = 'auto';
        assestButtn.style.opacity = '1';
        awardUnlocked =  false;
        awards.style.display = 'none';
        firstAward.style.display = 'none';
        nav.classList.remove('show');
        topNav.style.display = 'flex';
        firstAward.style.pointerEvents = 'auto';
        awardButtn.style.pointerEvents = 'auto';
        document.getElementById('top-news').style.pointerEvents = 'auto';
        document.getElementById('upgrade-unlockbuttn').style.pointerEvents = 'auto';
        document.getElementById('nextButton').style.pointerEvents = 'auto';
        currentStep = 0;
    }
}
document.getElementById('skipbuttn').addEventListener('click', function() {
    tutorialBox.style.display = 'none';
    goodsUnlocked = false;
    smallGoods.sgFirst.style.display = 'none';
    r.style.display = 'none';
    document.getElementById('assests').style.display = 'none';
    assestButtn.style.pointerEvents = 'auto';
    assestButtn.style.opacity = '1';
    awardUnlocked =  false;
    awards.style.display = 'none';
    firstAward.style.display = 'none';
    firstAward.style.pointerEvents = 'auto';
    awardButtn.style.pointerEvents = 'auto';
    document.getElementById('top-news').style.pointerEvents = 'auto';
    document.getElementById('upgrade-unlockbuttn').style.pointerEvents = 'auto';
    document.getElementById('nextButton').style.pointerEvents = 'auto';
    
})