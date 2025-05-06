let DI = [
    "photos/vecteezy_money-bag-with-dollar-sign-on-transparent-background_46437304.png",
    "photos/vecteezy_gold-bar-clipart-design-illustration_9383747.png", 
    "photos/vecteezy_low-poly-bitcoin-gold-coin-icon_44788296.png",
    "photos/coin.png"
];
let mI = document.getElementById('mainicon');
let currentIconIndex = 0;
document.getElementById('iconchange').addEventListener('click', function() {
    currentIconIndex = (currentIconIndex + 1) % DI.length;
    mI.src = DI[currentIconIndex];
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.innerText = 'changed icon';
})
//version control for users
const  currentVersion = "3.0.0";
const versionUrl = '/version.json'; // URL to fetch the version data
async function shouldCheckForUpdates() {
    const lastCheck = localStorage.getItem('lastVersionCheck');
    const today = new Date().toISOString().split('T')[0];
    if(lastCheck !== today) {
        localStorage.setItem('lastVersionCheck', today);
        return true;
    }
    return false;
}
async function CheckForUpdate() {
    if(!shouldCheckForUpdates()) return;
    try {
        const response = await fetch(versionUrl, {cache: 'no-cache'});
        const data = await response.json();
        if(data.version !== currentVersion) {
            alert("new update available, please save your progress and refresh the page ");
        }
    } catch(error) {
        console.error('Error fetching version data:', error);
        alert('Error fetching version data. Please try again later.');
    }
}
window.addEventListener('load', () => {
    CheckForUpdate();
})
console.log('checking for updates...');
console.log('current version:', currentVersion);
