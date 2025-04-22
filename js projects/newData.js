let index = 0;

const overallNew = ['you have reach dollar! and a reward'];
const clickerNews = ['you have reached a mile marker of 50 clicks', 'you have reach a amazing 100 clicks', 'Wow 200 clicks', 'keep going 300 clicks!', 'congrats 500 clicks!', 'pro at clicking, 1,000 clicks!', 'on your way to become master clicker', 'your now at 5,000 clicks', 'an amazing 10,000 clicks!', '20,000 clicks, you are now a master clicker'];
const pennyNews = ['Pennys has increased production', '10 workers now work hard to make 10¢ per second', '25 workers, here is a award!', 'you have reach 50 workers!', 'congrats on 100 workers, here is a award!'];
const nickelNews = ['you now have 10 nickel workers', 'congrats on 25 nickel workers', '50 workers, here is a new upgrade!', 'now have 100 workers'];
const dimeNews = ['you now have 10 dime workers', 'congrats on 25 dime workers', '50 workers, here is a new upgrade!', ' now have 100 workers'];
const qauterNews = ['you now have 10 quater workers', ' congrats on 25 quater workers', '50 workers, here is a new upgrade!', 'now have 100 wokers'];
const halfNews = ['you now have 10 half dollar workers', 'congrats on 25 half dollar workers', '50 workers, here is a new upgrade!', 'now have 100 workers'];
const dollarNews = ['you now have 10 dollar workers', 'congrats on 25 dollar workers', '50 workers, here is a new upgrade!', 'now have 100 workers'];
const fiveDollarNews = ['you now have 10 five dollar workers', 'congrats on 25 five dollar workers', '50 workers, here is a new upgrade!', 'now have 100 workers'];
const tenDollarNews = ['you now have 10 ten dollar workers', 'congrats on 25 ten dollar workers', '50 workers, here is a new upgrade!', 'now have 100 workers'];
const twentyDollarNews = ['you now have 10 twenty dollar workers', 'congrats on 25 twenty dollar workers', '50 workers, here is a new upgrade!', 'now have 100 workers'];
const fiftyDollarNews = ['you now have 10 fifty dollar workers', 'congrats on 25 fifty dollar workers', '50 workers, here is a new upgrade!', 'now have 100 workers'];
const hundredDollarNews = ['you now have 10 hundred dollar workers', 'congrats on 25 hundred dollar workers', '50 workers, here is a new upgrade!', 'now have 100 workers'];
//bank account news
const bankNews = ['you now have the average emergency savings', 'you can afford a week long vacation for 2', '10,000 is the minimum prize on game shows', 'you can afford a new car', '100,000 in the bank, here is award', 'you could buy a small house', 'you are a millioaire!', 'you can buy a private island', '50 million is average budget for a hollywood movie', 'you can buy a professionals sports team', 'you are now a billionaire, here is a award!', '10 million is the average GDP of small countiries', 'you are not one of the wealthies people in human history!' ]

//form data
let closeForm = document.getElementById('closeform');
let e = document.getElementById('bar-for-web');
let u = document.getElementById('settings');
const t = document.getElementById('title');
const p = document.getElementById('problem');
const centralTime = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });

//for sending me problem forms
document.getElementById('report-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let debugInfo = '';
    try {
        debugInfo += `totalCount: ${totalCount}\n`;
        debugInfo += `main clicker count: ${mainClickerCount}\n`;
        debugInfo += `awards unlocked ${awardUnlocked}\n`;
        debugInfo += `penny clicks ${autoCentCallCount}\n`;
        debugInfo += `nickel clicks ${autoNickelCallCount}\n`;
        debugInfo += `dime clicks ${autoDimeCallCount}\n`;
        debugInfo += `quarter clicks ${autoQuaterCallCount}\n`;
        debugInfo += `half-dollar clicks ${autoHDCentCallCount}\n`;
        debugInfo += `dollar clicks ${autoDollarCallCount}\n`;
        debugInfo += `five dollar clicks ${autoFiveDollarCallCount}\n`;
        debugInfo += `ten dollar clicks ${autoTenDollarCallCount}\n`;
        debugInfo += `twenty dollar clicks ${autoTwentyDollarCallCount}\n`
        debugInfo += `fifty dollar clicks ${autoFiftyDollarCallCount}\n`;
        debugInfo += `hundred dollar clicks ${autoHundredDollarCallCount}\n`
        debugInfo += `idkyet unlocked ${JSON.stringify(coinsUnlocked2, null, 2)}\n`;
        debugInfo += `clicker upgrades: ${JSON.stringify(allClickerUpgrades, null, 2)}\n`;
        debugInfo += `values info ${JSON.stringify(values, null, 2)}\n`;
        debugInfo += `total per sec info ${totalPerSec}\n`;
        debugInfo += `Current Date: ${centralTime}\n`;
        debugInfo += `Error Log:\n${errorLog.join('\n')}\n`;
    } catch (err) {
        debugInfo += `error collecting debug info: ${err.message}\n`;
        logError(err.message);
    }
    document.getElementById('debug-info').value = debugInfo;
    emailjs.sendForm("service_jutg1vj", "template_n0cyenc", this)
        .then(() => {
            alert('problem report sent successfully! Thank you!');
            nav.classList.add('show');
            topNav.style.display = 'flex';
            mp.style.display = 'none';
            p.style.display = 'none';
            this.reset();
        }, (error) => {
            console.error('failed...', error);
            p.style.display = 'none';
            alert('oops!, something went wrong, please try refreshing page and try again.');
        })
})



//web open/close settings
e.addEventListener('click', function() {
    u.classList.toggle('active');
    if(u.classList.contains('active')) {
        e.style.marginRight = '5%';
       t.style.marginLeft = '0.5%';
       t.style.fontSize = '1rem';
    } else {
        e.style.marginRight = '-45%';
        t.style.marginLeft = '';
        t.style.fontSize = '1.6rem';
    }
})
//form
function reportButtn() {
    p.style.display = 'flex';
}
closeForm.addEventListener('click', function() {
    p.style.display = 'none';
})


