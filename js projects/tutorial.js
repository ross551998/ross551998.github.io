const tutorialSteps = [
    {
        title: "Welcome to idle wealth tycoon!",
        content: "In this game, you will manage your wealth and make strategic decisions to grow your empire.",
        target: null,
    },
    {
        title: "main clicker",
        content: "Click the button to earn money. The more you click, the more money you make!",
        target: '#mainclicker',
    },
    {
        title: "upgrades",
        content: "right above you will find the upgrades for all your items, here you can unlock and add value to them!",
        target: '#upgrades',
    },
    {
        title: "coin lab",
        content: "here is the coin lab, where are the coins are stored, you can add values to them, see the values of them etc!",
    },
    {
        title: "assests",
        content: "down below are your assests section, here you can find where you store money, you can get additonal goods to add even more value!",
    },
    {
        title: 'goods',
        content: "down below are your goods, here you can add even more value to your coin lab!"
    },
    {
        title: "awards",
        content: "these are your awards you will gain some as you progress through the game",
    }
]
//localStorage.removeItem('tutorialShown');
let currentStep = 0;
const tutorialBox = document.getElementById('overlay');
window.onload = function() {
    console.log('page fully loaded');
    if(!localStorage.getItem('tutorialShown') && !isTouchDevice()) {
        showSteps();
        localStorage.setItem('tutorialShown', 'true');
    }
}
function showSteps() {
    const tutorialTitle = document.getElementById('tt');
    const tutroialContent = document.getElementById('tc');
    tutorialBox.style.display = 'flex';
    const step = tutorialSteps[currentStep];
    tutorialTitle.textContent = step.title;
    tutroialContent.textContent = step.content;
    assestButtn.style.pointerEvents = 'none';
    awardButtn.style.pointerEvents = 'none';
    document.getElementById('top-news').style.pointerEvents = 'none';
    document.getElementById('upgrade-unlockbuttn').style.pointerEvents = 'none';
    u.classList.remove('active');
    e.style.marginRight = '-47%';
    t.style.marginLeft = '12%';
    t.style.fontSize = '1.6rem';
    document.getElementById('nextButton').style.pointerEvents = 'none';
    if(currentStep === 2) {
        tutorialBox.style.top = '50%';
        tutorialBox.style.left = '1%';
    }
    if(currentStep === 3) {
        tutorialBox.style.left = '62%';
    }
    if(currentStep === 4) {
        tutorialBox.style.top = '12%';
        tutorialBox.style.left = '30%';
        document.getElementById('assests').style.display = 'flex';
        assestButtn.style.pointerEvents = 'none';
        assestButtn.style.opacity = '0.5';
    }
    if(currentStep === 5) {
        tutorialBox.style.top = '12%';
        tutorialBox.style.left = '30%';
        goodsUnlocked = true;
        smallGoods.sgFirst.style.display = 'flex';
        r.style.display = 'flex';
        document.getElementById('assests').style.display = 'none';
        document.getElementById('close-goods').style.pointerEvents = 'none';
        smallGoods.sgFirst.style.pointerEvents = 'none';
    }
    if(currentStep === 6) {
        goodsUnlocked = false;
        smallGoods.sgFirst.style.display = 'none';
        r.style.display = 'none';
        awardUnlocked =  true;
        awards.style.display = 'grid';
        firstAward.style.display = 'grid';
        firstAward.style.pointerEvents = 'none';
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