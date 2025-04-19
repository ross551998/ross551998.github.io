const tutorialSteps = [
    {
        title: "Welcome to idle wealth tycoon!",
        content: "In this game, you will manage your wealth and make strategic decisions to grow your empire.",
    },
    {
        title: "main clicker",
        content: "Click the button to earn money. The more you click, the more money you make!",
    }
]
let currentStep = 0;
const tutorialBox = document.getElementById('overlay');
function showSteps() {
    const tutorialTitle = document.getElementById('tt');
    const tutroialContent = document.getElementById('tc');
    tutorialBox.style.display = 'flex';
    const step = tutorialSteps[currentStep];
    tutorialTitle.textContent = step.title;
    tutroialContent.textContent = step.content;
    console.log('working');
    document.getElementById('settings').style.display = 'none';
    document.getElementById('title').style.marginLeft = ''
    document.getElementById('bar-for-web').style.pointerEvents = 'none';
    assestButtn.style.pointerEvents = 'none';
    awardButtn.style.pointerEvents = 'none';
    document.getElementById('top-news').style.pointerEvents = 'none';
    document.getElementById('')
}
function nextStep() {
    currentStep++;
    if(currentStep < tutorialSteps.length) {
        showSteps();
    } else {
        document.getElementById('overlay').style.display = 'none';
        currentStep = 0;
    }
}
document.getElementById('skipbuttn').addEventListener('click', function() {
    tutorialBox.style.display = 'none';
    document.getElementById('settings').style.display = 'none';
    document.getElementById('bar-for-web').style.pointerEvents = 'auto';

})