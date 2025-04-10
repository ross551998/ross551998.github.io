/*my notes for day
2.18 time:7:31pm
got the counter, per sec for the cent to work
but now it wont only keep the last 2 decimals
and also i cant get it to start at 1.25 and increasee from there
and its able to go negative
2.19 time:4:47pm all that is left is to finish the dollar then start on the 
rest of the bills
*/
/*2.28.25 
error on trying to add a double of main clicker
also when clicking sometimes doestn work when the amount
is over the limit but still wont let you unlock
*/
/*3.6.25 to do list
make the apperance of upgrages better
make the buttons more appealing
make more icons and upgrades
up to $100 dollars
*/
//bugs 
    //fix issue, of not registering the next icon
    // fix issue, the auto is starting when the unlock is open
    // fix issue, bug of increase the total amount when having the auto on and then clicking the nickel or cents
    //fix issue, of if you open or close upgrades the auto counter stops but when continue if you leave it open or close
//new bugs
    // fixed bug: bug where dollar wont appear
    // fixed bug: bug where when you increase the cents amount it adds to the total
    // fixed bug: bug where if the amount reaches $10.00 it wont unlock the next icon
/*3.7.25
    working on the upgrades that will constantly increase the amount of the coins
    and also working on the double main clicker
    with a setinterval that will double the amount of the main clicker
    and also working on the appearance of the upgrades
    set the random upgrades based off the amount of amount of auto clickers
    and based off the amount of the main clicker, and whats unlocked
    time:10:15pm starting on the increaments of upgrades for penny and doubling them
*/
/* 3.15.25 
THE AUTO PRICE NEEDS TO BE HIGHER
and then the price for each auto needs to be higher
*/
//make a way to track the amount of time use clicks on main clicker to throw in the double clicker based off that clicks
//values for each coin

const values = {
    cent: 0.01,
    nickel: 0.05,
    dime: 0.10,
    quarter: 0.25,
    halfDollar: 0.50,
    dollar: 1.00,
    fiveDollar: 5.00,
    tenDollar: 10.00,
    twentyDollar: 20.00,
    fiftyDollar: 50.00,
    hundredDollar: 100.00,
    main: 0.01
};

pennyIncrement = 0.01;
nickelIncrement = 0.05;
dimeIncrement = 0.10;
quaterIncrement = 0.25;
hfDollarIncrement = 0.50;
let mainClickerCount = 0;
let totalPerSec = 0;
let totalPerSecDisplay = document.getElementById('per-sec');
//per sec data
const perSecData = {
    centPerSec: 0,
    nickelPerSec: 0,
    dimePerSec: 0,
    quarterPerSec: 0,
    halfDPerSec: 0,
    dPerSec: 0,
    fiveDPerSec: 0,
    tenDPerSec: 0,
    twentyDPerSec: 0,
    fiftyDPersec: 0,
    hundredDPersec: 0,
};
//double main clicker increments
const mainClickerAmount = [7, 12, 15, 18, 23, 56, 80, 112];
const mainClickerMoney = [];
//data stored
const money = {
    centMoney: 0.25,//change later
    nickelMoney: 1.50,//change later
    //add more later

};
const coins = ['pennys', 'nickels', 'dimes', 'quaters', 'half-dollar', 'dollar', 'fivedollar', 'tendollar', 'twentydollar', 'fiftydollar', 'hundreddollar'];
const excludeIds = {
    'pennys': 'increaseCentamount',
    'nickels': 'increasenickelamount',
    'dimes': 'increasedimeamount',
    'quaters': 'increasequateramount',
    'half-dollar': 'increaseHDamount',
    'dollar': 'increasedollaramount',
    'fivedollar': 'increasefivedollaramount',
    'tendollar': 'increasetendollaramount',
    'twentydollar': 'increasetwentydollaramount',
    'fiftydollar': 'increasefiftydollaramount',
    'hundreddollar': 'increasehundreddollaramount'

};
const doubleMC = {
    firstMain: 3.00,
    secondMain: 4.50,
    thirdMain: 6.75,
    fourthMain: 10.12,
    fifthMain: 15.18,
    sixthMain: 22.77,
    seventhMain: 34.15,
    eighthMain: 51.22,
    ninthMain: 76.83,
    tenthMain: 115.25,
    eleventhMain: 172.87,
    twelfthMain: 259.31,
    thirteenthMain: 388.97,
    fourteenthMain: 583.46,
    fifteenthMain: 875.19,
    sixteenthMain: 1312.79,
}
const mainClickerUpgrade = {//set up for now
    first: document.getElementById('mainFirst'),
    second: document.getElementById('mainSecond'),
    third: document.getElementById('mainThird'),
    fourth: document.getElementById('mainForth'),
    fifth: document.getElementById('mainFifth'),
    sixth: document.getElementById('mainSixth'),
    seventh: document.getElementById('mainSeventh'),
    eighth: document.getElementById('maineigth'),
    nighth: document.getElementById('mainnigth'),
    tenth: document.getElementById('maintenth')
};
const pennyClickerUpgrade = {
    pennyFirst: document.getElementById('pennyFirst'),
    pennySecond: document.getElementById('pennySecond'),
    pennyThird: document.getElementById('pennyThird'),
    pennyFourth: document.getElementById('pennyFourth'),
    pennyFifth: document.getElementById('pennyfifth')
}
let coinsUnlocked = {
    penny: false,
    nickel: false,
    dime: false,
    quarter: false,
    halfDollar: false
}

let dimeMoney = 2.75;//change later
let quaterMoney = 7.00;//change later
let halfDollarMoney = 14.50;//change later
let dollarMoney = 20.00;//change later
let fiveDollarMoney = 45.00;//change later
let tenDollarMoney = 90.25;//change later
let twentyDollarMoney = 183.50;//change later
let fiftyDollarMoney = 365.25;//change later
let hundredDollarMoney = 750.50;//change later
let totalCount = 0;
let total = document.getElementById('display');
let d = document.getElementById('dimes');
let q = document.getElementById('quaters');
let Hd = document.getElementById('half-dollar');
let dO = document.getElementById('dollar');
let fiveDollar = document.getElementById('fivedollar');
let tenDollar = document.getElementById('tendollar');
let twentyDollar = document.getElementById('twentydollar');
let fiftyDollar = document.getElementById('fiftydollar');
let hundredDollar = document.getElementById('hundreddollar');
let dUnlock = document.getElementById('dimesunlock');
let qUnlock = document.getElementById('quaterunlock');
let hD =  document.getElementById('half-dollarunlock');
let dollarunlock = document.getElementById('dollarunlock');
let fdUnlock = document.getElementById('fivedollarunlock');
let tdUnlock = document.getElementById('tendollarunlock');
let twdUnlock = document.getElementById('twentydollarunlock');
let fiftyDUnlock = document.getElementById('fiftydollarunlock');
let hundredDUnlock = document.getElementById('hundreddollarunlock');

//increase increments by getid
let centTotal = document.getElementById('centspersec');
let nickelTotal = document.getElementById('nickelspersec');
let dimeTotal = document.getElementById('dimepersec');
let qauterTotal = document.getElementById('quaterspersec');
let hDTotal = document.getElementById('HDpersec');
let dollarTotal = document.getElementById('dollarpersec');
let fiveDollarTotal = document.getElementById('fivedollarpersec');
let tenDollarTotal = document.getElementById('tendollarpersec');
let twentyDollarTotal = document.getElementById('twentydollarpersec');
let fiftyDollarTotal = document.getElementById('fiftydollarpersec');
let hundredDollarTotal = document.getElementById('hundreddollarpersec');

//upgrade data stored
let upgradesUnlocked = false;
let timeID;
let noMoneyDisplay = document.getElementById('nomoney');
//pennys
let centAuto = document.getElementById('centautocounter');
let centAutoBody = document.getElementById('cent-upgrades');
let autoCentInterval;
let autoCentCalled = false;
let pennyInterval;
let increaseCents = document.getElementById('increaseCents');
let increaseCentAmount = document.getElementById('increaseCentamount');
let autoCentCallCount = 0;
let autoNickelCallCount = 0;

let pennytimes125;
let pennytimes150;
let pennytimes175;
let pennytimes200;
let pennytimes225;//increase by percentages
let pennytimes250;
let pennytimes275;
let pennytimes300;
//nickel
let autoNickelInterval;

let increaseNickels = document.getElementById('increasenickels');
let nickelAuto = document.getElementById('nickelautocounter');
let nickelAutoBody = document.getElementById('nickel-upgrades');
let increaseNickelAmount = document.getElementById('increasenickelamount');
//dimes
let autoDimeInterval;
let increaseDimes = document.getElementById('increasedimes');
let dimeAuto = document.getElementById('dimeautocounter');
let dimeAutoBody = document.getElementById('dime-upgrades');
let increaseDimeAmount = document.getElementById('increasedimeamount');
//quater
let autoQuaterInterval;
let increaseQuater = document.getElementById('increasequaters');
let quaterAuto = document.getElementById('quaterautocounter');
let qauterAutoBody = document.getElementById('quater-upgrades');
let increaseQuaterAmount = document.getElementById('increasequateramount');
//half dollar
let autoHDInterval;
let increaseHD = document.getElementById('increaseHDs');
let hDAuto = document.getElementById('hdautocounter');
let hDAutoBody = document.getElementById('hd-upgrades');
let increaseHDAmount = document.getElementById('increaseHDamount');
//dollar
let autoDInterval;
let increaseDollars = document.getElementById('increasedollars');
let dollarAuto = document.getElementById('dollarautocounter');
let dollarAutoBody = document.getElementById('dollar-upgrades');
let increaseDollarAmount = document.getElementById('increasedollaramount');
//five dollar
let autoFiveDInterval;
let increaseFiveDollars = document.getElementById('increasefivedollars');
let fiveDollarAuto = document.getElementById('fivedollarautocounter');
let fiveDollarAutoBody = document.getElementById('fivedollar-upgrades');
let increaseFiveDollarAmount = document.getElementById('increasefivedollaramount');
//ten dollar
let autoTenDInterval;
let increaseTenDollars = document.getElementById('increasetendollars');
let tenDollarAuto = document.getElementById('tendollarautocounter');
let tenDollarAutoBody = document.getElementById('tendollar-upgrades');
let increaseTenDollarAmount = document.getElementById('increasetendollaramount');
//twenty dollar
let autoTwentyDInterval;
let increaseTwentyDollars = document.getElementById('increasetwentydollars');
let twentyDollarAuto = document.getElementById('twentydollarautocounter');
let twentyDollarAutoBody = document.getElementById('twentydollar-upgrades');
let increaseTwentyDollarAmount = document.getElementById('increasetwentydollaramount');
//fifty dollar
let autoFityDInterval;
let increaseFiftyDollars = document.getElementById('increasefiftydollars');
let fiftyDollarAuto = document.getElementById('fiftydollarautocounter');
let fiftyDollarAutoBody = document.getElementById('fiftyDollar-upgrades');
let increaseFiftyDollarAmount = document.getElementById('increasefiftydollaramount');
//hundred dollar
let autoHundredDInterval;
let increaseHundredDollars = document.getElementById('increasehundreddollars');
let hundredDollarAuto = document.getElementById('hundreddollarautocounter');
let hundredDollarAutoBody = document.getElementById('hundreddollar-upgrades');
let increaseHundredDollarAmount = document.getElementById('increasehundreddollaramount');
//nav bar
let newsContext = document.getElementById('news');
let openVault = document.getElementById('vault');
let personalVault = document.getElementById('personal-vault');
let assestButtn = document.getElementById('top-assests');
let closeAssets = document.getElementById('closeasset');
let awards = document.getElementById('awards');
let awardButtn = document.getElementById('top-awards');
let closeAwards = document.getElementById('closeawards');
let awardUnlocked = false;
let newsButtn = document.getElementById('top-news').addEventListener('click', function() {
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.innerText = 'not avaible right now..';
})
awardButtn.addEventListener('click', function() {
    if(awardUnlocked) {
        if(awardButtn.style.pointerEvents === 'none' || assestButtn.style.display === 'flex') return;
        awards.style.display = 'grid';
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = 'awards opened!';
        awardButtn.style.pointerEvents = 'none';
        awardButtn.style.opacity = '0.5' 
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = 'not avaible right now..';
    }
    
})
closeAwards.addEventListener('click', function() {
    awardButtn.style.pointerEvents = 'auto';
    awardButtn.style.opacity = '1';
    awards.style.display = 'none';
})
openVault.addEventListener('click', function() {
    personalVault.style.display = 'flex';
    document.getElementById('assests').style.display = 'none';
})
assestButtn.addEventListener('click', function() {
    if(assestButtn.style.pointerEvents === 'none' || awards.style.display === 'flex') return;
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.innerText = 'Assets opened!';
    document.getElementById('assests').style.display = 'flex';
    assestButtn.style.pointerEvents = 'none';
    assestButtn.style.opacity = '0.5';
})
closeAssets.addEventListener('click', function() {
    document.getElementById('assests').style.display = 'none';
    assestButtn.style.pointerEvents = 'auto';
    assestButtn.style.opacity = '1';
    //document.getElementById('idkyet').style.display = 'none';
})
//bank account
let account = 0;
let moneyInbank = document.getElementById('bankamount');
let withDraw = document.getElementById('withdraw');
let deposit = document.getElementById('deposit').addEventListener('click', function() {
    if(totalCount >= 5.00) {
        account += totalCount;
        totalCount = 0;
        console.log(account);
    } else {
        newsList.style.animation = 'none';
        void newsList.offsetWidth;
        newsList.style.animation = 'slideInOut 3s';
        newsList.textContent = 'not enough money deposit!';
    }
    try {
        if(account >= 100000) {
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = `$ 100,000 in the bank, here is a award!`;
            fourthAward.style.display = 'flex';
        }
        if(account >= 10000000) {
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = `$ 10,000,000 in the bank, here is a award!`;
            sixthAward.style.display = 'flex';
        } 
    } catch(error) {
        console.error('error in money in the bank and fourth award');
    }
})
moneyInbank.addEventListener('click', function() {
    newsList.style.animation = 'none';
    void newsList.offsetWidth;
    newsList.style.animation = 'slideInOut 4s';
    newsList.innerText = `$ ${account.toFixed(2)}`
})
withDraw.addEventListener('click', function() {
    if(account >= 5.00) {
        totalCount += account;
        account = 0;
        console.log('money withdre');
    } else {
        newsList.style.animation = 'none';
        void newsList.offsetWidth;
        newsList.style.animation = 'slideInOut 3s';
        newsList.textContent = 'no money to withdraw';
    }
})





//news updates
let index = 0;
let overallNew = ['you have reach dollar! and a reward'];
let clickerNews = ['you have reached a mile marker of 50 clicks', 'you have reach a amazing 100 clicks', 'Wow 200 clicks', 'keep going 300 clicks!', 'congrats 500 clicks!', 'pro at clicking, 1,000 clicks!', 'on your way to become master clicker', 'your now at 5,000 clicks', 'an amazing 10,000 clicks!', '20,000 clicks, you are now a master clicker'];
let nickelNews = ['you now have 10 nickel workers', 'congrats on 25 nickel workers', '50 workers, here is a new upgrade!', 'now have 100 workers'];
let dimeNews = ['you now have 10 dime workers', 'congrats on 25 dime workers', '50 workers, here is a new upgrade!', ' now have 100 workers'];
let qauterNews = ['you now have 10 quater workers', ' congrats on 25 quater workers', '50 workers, here is a new upgrade!', 'now have 100 wokers'];
let halfNews = [];
let dollarNews = [];
let fiveDollarNews = [];




//sessionStorage.clear();





let pennyNews = ['Pennys has increased production', '10 workers now work hard to make 10¢ per second', '25 workers, here is a award!', 'you have reach 50 workers!', 'congrats on 100 workers, here is a award!'];
function upDateTotalPerSec() {
    totalPerSec = perSecData.centPerSec + perSecData.nickelPerSec + perSecData.dimePerSec + perSecData.quarterPerSec + perSecData.halfDPerSec + perSecData.dPerSec + perSecData.fiveDPerSec + perSecData.tenDPerSec + perSecData.twentyDPerSec + perSecData.fiftyDPersec + perSecData.hundredDPersec;
    totalPerSecDisplay.textContent = `$ ${totalPerSec.toFixed(2)} per second`;
    sessionStorage.setItem('money per second', totalPerSec);//session storage starting
    if(totalPerSec >= 1000.00) {
        newsList.style.animation = 'none';
        void newsList.offsetWidth;
        newsList.style.animation = 'slideInOut 3s'
        fifthAward.style.display = 'flex';
    }
    if(totalPerSec >= 500.00) {
        newsList.style.animation = 'none';
        void newsList.offsetWidth;
        newsList.style.animation = 'slideInOut 3s'
        seventhAward.style.display = 'flex';
    }
}




function unlock() {
    let upgrades = document.getElementById('upgrades');
    let total = document.getElementById('display');
    let hideTitle = document.getElementById('upgradetitle');
    let buttn = document.getElementById('upgrade-unlockbuttn');
    if(!upgradesUnlocked && parseFloat(total.textContent.replace('$', '').trim()) >= 0.05) {// change to different number when ready
        upgradesUnlocked = true;
        totalCount = totalCount - 0.05;//change to different number when ready
        total.textContent = `$ ${totalCount.toFixed(2)}`;
        console.log('unlocked upgrades');
        hideTitle.textContent = 'upgrades';
        hideTitle.style.fontSize = '2.6rem';
        buttn.style.display = 'none';
    }
    if(upgradesUnlocked) {
        if(upgrades.style.display === 'none' || upgrades.style.display === '') {
            upgrades.style.display = 'flex';
        }
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money..!';
    } 
}
//all upgrades that will occur in the game as you progress through
//new penny div
function newPenny() {
    console.log('penny inteval activated');
    const newPennnyDiv = document.getElementById('upgrades');
    const newDiv = document.createElement('div');
    newDiv.id = 'newpenny';
    const newPennyButton = document.createElement('button');
    newPennyButton.textContent = 'upgrade penny';
    newDiv.textContent = 'new penny';
    newDiv.appendChild(newPennyButton);
    newPennnyDiv.appendChild(newDiv);
    console.log('unlocked new penny');
    newPennyButton.addEventListener('click', function() {
        values.cent *= 2;
        totalPerSecDisplay.textContent = `${values.cent.toFixed(2)} cents per second`;
        console.log(values.cent);
        autoCentCallCount++;
        console.log(`times the auto cent has been called ${autoCentCallCount}`);
        console.log('penny upgraded by 100%');
        newPennnyDiv.style.display = 'none';
    });
}
//main clicker //done with 10 main clickers
mainClickerUpgrade.first.addEventListener('click', function() {
    try {
        if(totalCount >= 1.00) {
            totalCount -= 1.00;
            totalCount = values.main *= 5;
            mainClickerUpgrade.first.style.display = 'none';
            console.log('working');
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } catch(error) {
        console.error('error with double main clicker');
    }
})
mainClickerUpgrade.second.addEventListener('click', function() {
    try {
        if(totalCount >= 15.00) {
            totalCount -= 15.00;
            totalCount = values.main *= 2;
            mainClickerUpgrade.second.style.display = 'none';
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } catch(error) {
        console.error('error with second main clicker');
    }
})
mainClickerUpgrade.third.addEventListener('click', function() {
    try {
        if(totalCount >= 90.00) {
            totalCount -= 90.00;
            totalCount = values.main *= 2;
            mainClickerUpgrade.third.style.display = 'none';
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } catch(error) {
        console.error('error with third main clicker');
    }
})
mainClickerUpgrade.fourth.addEventListener('click', function() {
    try { 
        if(totalCount >= 135.00) {
            totalCount -= 135.00;
            totalCount = values.main = parseFloat((values.main * 3).toFixed(2));
            mainClickerUpgrade.fourth.style.display = 'none';
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } catch(error) {
        console.error('error with fourth main clicker');
    }
})
mainClickerUpgrade.fifth.addEventListener('click', function() {
    try {
        if(totalCount >= 360.00) {
            totalCount -= 360.00;
            totalCount = values.main = parseFloat((values.main * 2).toFixed(2));
            mainClickerUpgrade.fifth.style.display = 'none';
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } catch(error) {
        console.error('error with fifth main clicker');
    }
})
mainClickerUpgrade.sixth.addEventListener('click', function() {
    try {
        if(totalCount >= 740.00) {
            totalCount -= 740.00;
            totalCount = values.main = 2.00;
            mainClickerUpgrade.sixth.style.display = 'none';
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } catch(error) {
        console.error('error with sixth main clicker');
    }
})
mainClickerUpgrade.seventh.addEventListener('click', function() {
    try {
        if(totalCount >= 1250.00) {
            totalCount -= 1250.00;
            totalCount = values.main = 5.00;
            mainClickerUpgrade.seventh.style.display = 'none';
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } catch(error) {
        console.error('error with sixth main clicker');
    }
})
mainClickerUpgrade.eighth.addEventListener('click', function() {
    try {
        if(totalCount >= 3000.00) {
            totalCount -= 3000.00;
            totalCount = values.main = 10.00;
            mainClickerUpgrade.eighth.style.display = 'none';
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } catch(error) {
        console.error('error with sixth main clicker');
    }
})
mainClickerUpgrade.nighth.addEventListener('click', function() {
    try {
        if(totalCount >= 12000.00) {
            totalCount -= 12000.00;
            totalCount = values.main = 25.00;
            mainClickerUpgrade.nighth.style.display = 'none';
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } catch(error) {
        console.error('error with sixth main clicker');
    }
})
mainClickerUpgrade.tenth.addEventListener('click', function() {
    try {
        if(totalCount >= 23000.00) {
            totalCount -= 23000.00;
            totalCount = values.main = 50.00;
            mainClickerUpgrade.tenth.style.display = 'none';
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } catch(error) {
        console.error('error with sixth main clicker');
    }
})
//penny double
pennyClickerUpgrade.pennyFirst.addEventListener('click', function() {
    try {
        if(totalCount >= 25.00) {
            totalCount -= 25.00;
            totalCount = values.cent *= 2;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.centPerSec = values.cent;
            upDateTotalPerSec();
            pennyClickerUpgrade.pennyFirst.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = "you've doubled pennys per second!";
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } catch(error) {
        console.error('first double penny not working');
    }
})
pennyClickerUpgrade.pennySecond.addEventListener('click', function() {
    try {
        if(totalCount >= 115.00) {
            totalCount -= 115.00;
            totalCount = values.cent *= 2;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.centPerSec = values.cent;
            upDateTotalPerSec();
            pennyClickerUpgrade.pennySecond.style.display = 'none';
            console.log('double second penny working'); 
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } catch(error) {
        console.error('second double penny not working');
    }
})
pennyClickerUpgrade.pennyThird.addEventListener('click', function() {
    try {
        if(totalCount >= 250.00) {
            totalCount -= 250.00;
            totalCount = values.cent *= 3;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.centPerSec = values.cent;
            upDateTotalPerSec();
            pennyClickerUpgrade.pennyThird.style.display = 'none';
            console.log('double second penny working'); 
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } catch(error) {
        console.error('third triple penny not working');
    }
})
pennyClickerUpgrade.pennyFourth.addEventListener('click', function() {
    try {
        if(totalCount >= 625.00) {
            pennyIncrement = 0.02;
            console.log('double click amount');
            pennyClickerUpgrade.pennyFourth.style.display = 'none';
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } catch(error) {
        console.error('working on doubling penny per second');
    }
})
pennyClickerUpgrade.pennyFifth.addEventListener('click', function() {
    try {
        if(totalCount >= 890.00) {
            pennyIncrement *= 2;
            console.log('double click amount');
            pennyClickerUpgrade.pennyFifth.style.display = 'none';
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } catch(error) {
        console.error('working on doubling penny per second');
    }
})
nickeClickerUpgrade.nickelThird.addEventListener('click',function() {
    try {
        if(totalCount >= 370.00) {
            totalCount -= 370.00;
            nickelIncrement = 0.10;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.nickelPerSec = values.nickel;
            upDateTotalPerSec();
            nickeClickerUpgrade.nickelFirst.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = "you've doubled nickels per second";
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!'; 
        }
    } catch(error)  {
        console.error('first double nickle not working');
    }
})
dimeClickerUpgrade.dimeThird.addEventListener('click', function() {
    try {
        if(totalCount >= 482.00) {
            totalCount -= 482.00;
            dimeIncrement = 0.20;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.dimePerSec = values.dime;
            upDateTotalPerSec();
            dimeClickerUpgrade.dimeThird.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = "you've double dime per click";
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!'; 
        }
    } catch(error) {
        console.error('error with third dime');
    }
})
quaterClickerUpgrade.quaterThird.addEventListener('click', function() {
    try {
        if(totalCount >= 623.00) {
            totalCount -= 623.00;
            quaterIncrement *= 2;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.quarterPerSec = values.quarter;
            upDateTotalPerSec();
            quaterClickerUpgrade.quaterThird.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = "you've double click amount";
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = 'need more money';
        }
    } catch(error) {
        console.error('error with quater third upgrade');
    }
})
//auto cent counter
function autoCent() {
    autoCentCallCount++;
    if(!autoCentInterval) {
        autoCentInterval = setInterval(() => {
            totalCount += values.cent;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            centAuto.style.display = 'none';
            centAutoBody.style.display = 'none';
            increaseCents.style.display = 'flex';
            centTotal.style.display = 'flex';
            centTotal.textContent = `${values.cent.toFixed(2)} cents per second`;
            increaseCentAmount.textContent = money.centMoney.toFixed(2);
        }, 1000);
        perSecData.centPerSec = values.cent;
        upDateTotalPerSec();
        console.log('auto cent started');
        coinsUnlocked.penny = true;
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = pennyNews[0];
        index = (index + 1) % pennyNews.length;
    }
}
function autoNickel() {
    autoNickelCallCount++;
    if(!coinsUnlocked.nickel) {
        console.log('nickels not unlocked yet');
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'unlock nickels first!';
    }
    if(totalCount >= 1.00) {//change to 4.00 when ready
        totalCount = totalCount - 1.00; //change to 4.00 when ready
        if(!autoNickelInterval) {
            autoNickelInterval = setInterval(() => {
                totalCount += values.nickel;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                nickelAuto.style.display = 'none';
                nickelAutoBody.style.display = 'none';
                increaseNickels.style.display = 'flex';
                nickelTotal.style.display = 'flex';
                nickelTotal.textContent = `${values.nickel.toFixed(2)} cents per second`;
                increaseNickelAmount.textContent = money.nickelMoney.toFixed(2);
            }, 1000);
            perSecData.nickelPerSec = values.nickel;
            upDateTotalPerSec();
            coinsUnlocked.nickel = true;
            console.log('auto nickel started');
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'automating nickels!';
        }
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function autoDime() {
    if(totalCount >= 8.00) {
        totalCount = totalCount - 8.00;
        if(!autoDimeInterval) {
            autoDimeInterval = setInterval(() => {
                totalCount += values.dime;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                dimeAuto.style.display = 'none';
                dimeAutoBody.style.display = 'none';
                increaseDimes.style.display = 'flex';
                dimeTotal.style.display = 'flex';
                dimeTotal.textContent = `${values.dime.toFixed(2)} cent per second`;
                increaseDimeAmount.textContent = dimeMoney.toFixed(2);
            }, 1000);
            perSecData.dimePerSec = values.dime;
            upDateTotalPerSec();
            console.log('auto dime started');
            coinsUnlocked.dime = true;
        }
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function autoQuater() {
    if(totalCount >= 75.00) {//change to75.00 later
        totalCount = totalCount - 75.00;//change to 75.00 later
        if(!autoQuaterInterval) {
            autoQuaterInterval =  setInterval(() => {
                totalCount += values.quarter;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                quaterAuto.style.display = 'none';
                qauterAutoBody.style.display = 'none';
                increaseQuater.style.display = 'flex';
                qauterTotal.style.display = 'flex';
                qauterTotal.textContent = `${values.quarter.toFixed(2)} cent per second`;
                increaseQuaterAmount.textContent = quaterMoney.toFixed(2);
            }, 1000);
            perSecData.quarterPerSec = values.quarter;
            upDateTotalPerSec();
            coinsUnlocked.quarter = true;
            console.log('auto quater started');
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'increased production for quaters!';
        }
    } else  {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function autoHD() {
    if(totalCount >= 160.00) {//change later
        totalCount = totalCount - 160.00;//change later
        if(!autoHDInterval) {
            autoHDInterval =  setInterval (() => {
                totalCount += values.halfDollar;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                hDAuto.style.display = 'none';
                hDAutoBody.style.display = 'none';
                increaseHD.style.display = 'flex';
                hDTotal.style.display = 'flex';
                hDTotal.textContent = `${values.halfDollar.toFixed(2)} cent per sec`;
                increaseHDAmount.textContent = halfDollarMoney.toFixed(2);
            }, 1000);
            perSecData.halfDPerSec = values.halfDollar;
            upDateTotalPerSec();
            coinsUnlocked.halfDollar = true;
            console.log('auto half dollar started');
        }
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function autoDollar() {
    if(totalCount >= 225.00) {//change later to 225.00
        totalCount = totalCount - 225.00;//change later to 225.00
        if(!autoDInterval) {
            autoDInterval = setInterval(() => {
                totalCount +=values.dollar;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                dollarAuto.style.display = 'none';
                dollarAutoBody.style.display = 'none';
                increaseDollars.style.display = 'flex';
                dollarTotal.style.display = 'flex';
                dollarTotal.textContent = `${values.dollar.toFixed(2)} dollar per second`;
                increaseDollarAmount.textContent = dollarMoney.toFixed(2);
            }, 1000);
            perSecData.dPerSec = values.dollar;
            upDateTotalPerSec();
            console.log('auto dollar started');
        }
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function autoFiveDollar() {
    if(totalCount >= 350.00) {
        totalCount = totalCount - 350.00;
        if(!autoFiveDInterval) {
            autoFiveDInterval = setInterval(() => {
                totalCount += values.fiveDollar;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                fiveDollarAuto.style.display = 'none';
                fiveDollarAutoBody.style.display = 'none';
                increaseFiveDollars.style.display = 'flex';
                fiveDollarTotal.style.display = 'flex';
                fiveDollarTotal.textContent = `${values.fiveDollar.toFixed(2)} dollar per second`;
                increaseFiveDollarAmount.textContent = fiveDollarMoney.toFixed(2);
            }, 1000);
            perSecData.fiveDPerSec = values.fiveDollar;
            upDateTotalPerSec();
            console.log('auto five dollar');
        }
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function autoTenDollar() {
    if(totalCount >= 500.00) {
        totalCount = totalCount - 500.00;
        if(!autoTenDInterval) {
            autoTenDInterval = setInterval(() => {
                totalCount += values.tenDollar;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                tenDollarAuto.style.display = 'none';
                tenDollarAutoBody.style.display = 'none';
                increaseTenDollars.style.display = 'flex';
                tenDollarTotal.style.display = 'flex';
                tenDollarTotal.textContent =  `${values.tenDollar.toFixed(2)} dollar per second`;
                increaseTenDollarAmount.textContent =  tenDollarMoney.toFixed(2);
            }, 1000);
            perSecData.tenDPerSec = values.tenDollar;
            upDateTotalPerSec();
            console.log('auto ten dollar');
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    }
}
function autoTwentyDollar() {
    if(totalCount >= 700.00) {
        totalCount = totalCount - 700.00;
        if(!autoTwentyDInterval) {
            autoTwentyDInterval =  setInterval(() => {
                totalCount += values.twentyDollar;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                twentyDollarAuto.style.display = 'none';
                increaseTwentyDollars.style.display = 'flex';
                twentyDollarAutoBody.style.display = 'none';
                twentyDollarTotal.style.display = 'flex';
                twentyDollarTotal.textContent = `${values.twentyDollar.toFixed(2)} dollar per second`;
                increaseTwentyDollarAmount.textContent = twentyDollarMoney.toFixed(2);
            }, 1000);
            perSecData.twentyDPerSec = values.twentyDollar;
            upDateTotalPerSec();
            console.log('auto twenty dollar');
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    }
}
function autoFiftyDollar() {
    if(totalCount >= 1000.00) {
        totalCount = totalCount - 1000.00;
        if(!autoFityDInterval) {
            autoFityDInterval = setInterval(() => {
                totalCount += values.fiftyDollar;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                fiftyDollarAuto.style.display = 'none';
                fiftyDollarAutoBody.style.display = 'none';
                increaseFiftyDollars.style.display = 'flex';
                fiftyDollarTotal.style.display = 'flex';
                fiftyDollarTotal.textContent = `${values.fiftyDollar.toFixed(2)} dollar per second`;
                increaseFiftyDollarAmount.textContent =  fiftyDollarMoney.toFixed(2);
            }, 1000);
            perSecData.fiftyDPersec = values.fiftyDollar;
            upDateTotalPerSec();
            console.log('auto fifty dollar');
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } 
}
function autoHundredDollar() {
    if(totalCount >= 1200.00) {
        totalCount =  totalCount - 1200.00;
        if(!autoHundredDInterval) {
            autoHundredDInterval = setInterval(() => {
                totalCount += values.hundredDollar;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                hundredDollarAuto.style.display = 'none';
                hundredDollarAutoBody.style.display = 'none';
                increaseHundredDollars.style.display = 'flex';
                hundredDollarTotal.style.display = 'flex';
                hundredDollarTotal.textContent =  `${values.hundredDollar.toFixed(2)} dollar per second`;
                increaseHundredDollarAmount.textContent = hundredDollarMoney.toFixed(2);
            }, 1000);
            perSecData.hundredDPersec = values.hundredDollar;
            upDateTotalPerSec();
            console.log('auto hundred dollar');
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    }
}
//open next levels
function nickelsUnlock() {
    let total = document.getElementById('display');
    let hide = document.getElementById('nickelsunlock');
    let n = document.getElementById('nickels');
    if((n.style.display === 'none' || n.style.display) === '' && totalCount >= 0.50) {// change later to higher number
        n.style.display = 'flex';
        dUnlock.style.display = 'flex';
        totalCount -= 0.50;
        total.textContent = `$ ${totalCount.toFixed(2)}`;
        hide.style.display = 'none';
        goodsUnlocked = true;
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'goods unlocked';
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function dimesUnlock() {
    if ((d.style.display === 'none' || d.style.display === '') && totalCount >= 5.00) { 
        
        d.style.display = 'flex';
        dimeAutoBody.style.display = 'flex';
        qUnlock.style.display = 'flex';
        totalCount -= 5.00; // Update to 12.00 when ready
        total.textContent = `$ ${totalCount.toFixed(2)}`;
        dUnlock.style.display = 'none';
        dimeAuto.style.display = 'flex';
        
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
        
    }
}
function quaterUnlock() {
    if(q.style.display === 'none' || q.style.display === '' && totalCount >= 30.00) {
        q.style.display = 'flex';
        qauterAutoBody.style.display = 'flex';
        hD.style.display = 'flex';
        totalCount -= 30.00;//change later to 30.00
        total.textContent = `$ ${totalCount.toFixed(2)}`;
        qUnlock.style.display = 'none';
        quaterAuto.style.display = 'flex';
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function halfDollarUnlock() {
    if(Hd.style.display === 'none' || Hd.style.display === '' && Math.round(totalCount * 100) / 100 >= 75.00) {
        Hd.style.display = 'flex';
        dollarunlock.style.display = 'flex';
        hDAutoBody.style.display = 'flex';
        totalCount -= 75.00;//change later to 75.00
        total.textContent = `${totalCount.toFixed(2)}`;
        hD.style.display = 'none';
        hDAuto.style.display = 'flex';
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function dollarUnlock() {//works for now might be bugs in here
    if(dO.style.display === 'none' || dO.style.display === '' && Math.round(totalCount * 100) / 100 >= 215.00) {//change later
        dO.style.display = 'flex';
        fdUnlock.style.display = 'flex';
        dollarAutoBody.style.display = 'flex';
        totalCount -= 215.00;
        total.textContent = `${totalCount.toFixed(2)}`;
        dollarunlock.style.display = 'none';
        
        dollarAuto.style.display = 'flex';
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = overallNew[0] || "you've unlocked medium goods";
        index = (index + 1) % overallNew.length;
        document.getElementById('medium-goods').style.display = 'block';
        firstAward.style.display = 'block';
    } else {
        newsList.style.animation = 'none';
        void newsList.offsetWidth;
        newsList.style.animation = 'slideInOut 3s';
        newsList.textContent = "need more money..";
    }
}
function fiveDollarUnlock() {
    if(fiveDollar.style.display === 'none' || fiveDollar.style.display === '' && Math.round(totalCount * 100) / 100 >= 510.00) {
        fiveDollar.style.display = 'flex';
        tdUnlock.style.display = 'flex';
        fiveDollarAutoBody.style.display = 'flex';
        totalCount -= 510.00;//change later
        total.textContent = `${totalCount.toFixed(2)}`;
        fdUnlock.style.display = 'none';
        
        fiveDollarAuto.style.display = 'flex';
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function tenDollarUnlock() {
    if(tenDollar.style.display === 'none' || tenDollar.style.display === '' && Math.round(totalCount * 100) / 100 >= 2100.00) {
        tenDollar.style.display = 'flex';
        twdUnlock.style.display = 'flex';
        tenDollarAutoBody.style.display = 'flex';
        totalCount -= 2100.00;
        total.textContent = `${totalCount.toFixed(2)}`;
        tdUnlock.style.display = 'none';
        
        tenDollarAuto.style.display = 'flex';
    }  else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function twentyDollarUnlock() {
    if(twentyDollar.style.display === 'none' || twentyDollar.style.display === '' && Math.round(totalCount * 100) / 100 >=  6000.00) {
        twentyDollar.style.display = 'flex';
        fiftyDUnlock.style.display = 'flex';
        twentyDollarAutoBody.style.display = 'flex';
        totalCount -= 6000.00;
        total.textContent = `${totalCount.toFixed(2)}`;
        twdUnlock.style.display = 'none';
        console.log('twenty dollar unlocked');
        twentyDollarAuto.style.display = 'flex';
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function fiftyDollarUnlock() {
    if(fiftyDollar.style.display === 'none' || fiftyDollar.style.display === '' && Math.round(totalCount * 100) / 100 >= 20000.00) {
        fiftyDollar.style.display = 'flex';
        hundredDUnlock.style.display = 'flex';
        fiftyDollarAutoBody.style.display = 'flex';
        totalCount -= 20000.00;
        total.textContent = `${totalCount.toFixed(2)}`;
        fiftyDUnlock.style.display = 'none';
        console.log('fifty dollar unlocked');
        fiftyDollarAuto.style.display = 'flex';
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function hundredDollarUnlock() {
    if(hundredDollar.style.display === 'none' || hundredDollar.style.display === '' && Math.round(totalCount * 100) / 100 >= 50000.00) {
        hundredDollar.style.display = 'flex';
        hundredDollarAutoBody.style.display = 'flex';
        totalCount -= 50000.00;
        total.textContent = `${totalCount.toFixed(2)}`;
        hundredDUnlock.style.display = 'none';
        console.log('hundred dollar unlocked');
        hundredDollarAuto.style.display = 'flex';
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
//clickers
    //animations
coins.forEach(coin => {
    const icon = document.getElementById(coin);
    icon.addEventListener('click', function(event) {
        if (event.target.id !== excludeIds[coin]) {
            this.classList.add('zoom');
            setTimeout(() => {
                this.classList.remove('zoom');
            }, 100);
        }
    });
});

//main clicker
function mainClicker() {
    
    let mcdisplay = document.getElementById('mcamount');
    mainClickerCount++;
    if( timeID) {
        clearTimeout(timeID);
    }
    mcdisplay.style.display === 'none' || mcdisplay.style.display === 'none';
    timeID =  setTimeout(function() {
        mcdisplay.style.display = 'flex';
        timeID = setTimeout(function() {
            mcdisplay.style.display = 'none';
        }, 50)
    }, 50)
    if(mainClickerCount === 50) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = clickerNews[0];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.first.style.display = 'flex';
    }
    if(mainClickerCount === 100) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = clickerNews[1];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.second.style.display = 'flex';
        smallGoods.sgFourth.style.display = 'flex';
    }
    if(mainClickerCount === 200) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = clickerNews[2];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.third.style.display = 'flex';
    }
    if(mainClickerCount === 300) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = clickerNews[3];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.fourth.style.display = 'flex';
    }
    if(mainClickerCount === 500) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = clickerNews[4];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.fifth.style.display = 'flex';
    }
    if(mainClickerAmount === 1000) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = clickerNews[5];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.sixth.style.display = 'flex';
        secondAward.style.display = 'block';
    }
    if(mainClickerAmount === 2000) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = clickerNews[6];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.seventh.style.display = 'flex';
    }
    if(mainClickerAmount === 5000) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = clickerNews[7];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.eighth.style.display = 'flex';
    }
    if(mainClickerAmount === 10000) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = clickerNews[8];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.nighth.style.display = 'flex';
    }
    if(mainClickerAmount === 20000) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = clickerNews[9];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.tenth.style.display = 'flex';
    }
    totalCount += values.main;
    mcdisplay.textContent = values.main;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
}
//cent counter
function cents() {
    totalCount += 0.01;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
    
}
function increaseCent() {// this is done for now, ready for new version
    centTotal.textContent = `${values.cent.toFixed(2)} cents per second`;
    if(totalCount >= money.centMoney) {
        autoCentCallCount++;//the count for how many times been called
        values.cent += pennyIncrement;
        totalCount -= money.centMoney;
        money.centMoney += money.centMoney * 0.12;
        increaseCentAmount.textContent = money.centMoney.toFixed(2);
        perSecData.centPerSec = values.cent;
        upDateTotalPerSec();
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
        console.log(values.cent);
    }
    if(autoCentCallCount === 2) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = "you've unlocked a good to buy!";
        smallGoods.sgFirst.style.display = 'flex';
    }
    if(autoCentCallCount === 10) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = pennyNews[1];
        index = (index + 1) % pennyNews.length;
        pennyClickerUpgrade.pennyFirst.style.display = 'flex';
    }
    if(autoCentCallCount === 25) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = pennyNews[2];
        index = (index + 1) % pennyNews.length;
        pennyClickerUpgrade.pennySecond.style.display = 'flex';
        awardUnlocked = true;
    }
    if(autoCentCallCount === 50) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = pennyNews[3];
        index = (index + 1) % pennyNews.length;
        pennyClickerUpgrade.pennyThird.style.display = 'flex';
    }
    if(autoCentCallCount === 100) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = pennyNews[4];
        index = (index + 1) % pennyNews.length;
        pennyClickerUpgrade.pennyFourth.style.display = 'flex';
    }
    if(autoCentCallCount === 250) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = pennyNews[5];
        index = (index + 1) % pennyNews.length;
        pennyClickerUpgrade.pennyFifth.style.display = 'flex';
    }
}
//nickel counter
function nickels() {
    totalCount += 0.05;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
    
   
}
function increaseNickel() { // ready for new version
    nickelTotal.textContent = `${values.nickel.toFixed(2)} cents per second`;
    if(totalCount >= money.nickelMoney) {
        autoNickelCallCount++;
        values.nickel += nickelIncrement;
        totalCount -= money.nickelMoney;
        money.nickelMoney += money.nickelMoney * 0.24;
        increaseNickelAmount.textContent = money.nickelMoney.toFixed(2);
        perSecData.nickelPerSec = values.nickel;
        nickels();
        upDateTotalPerSec();
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
    if(autoNickelCallCount === 2) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'unlocked another good to buy'
        smallGoods.sgThird.style.display = 'flex';
        
    }
    if(autoNickelCallCount === 10) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = nickelNews[0];
        index = (index + 1) % nickelNews.length;
        nickeClickerUpgrade.nickelFirst.style.display = 'flex';
    }
    if(autoNickelCallCount === 25) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = nickelNews[1];
        index = (index + 1) % nickelNews.length;
        nickeClickerUpgrade.nickelSecond.style.display = 'flex';
        smallGoods.sgSecond.style.display = 'flex'
    }
    if(autoNickelCallCount === 50) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = nickelNews[2];
        index = (index + 1) % nickelNews.length;
        nickeClickerUpgrade.nickelThird.style.display = 'flex';
    }
    if(autoNickelCallCount === 100) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = nickelNews[3];
        index = (index + 1) % nickelNews.length;
        nickeClickerUpgrade.nickelFourth.style.display = 'flex';
    }
    if(autoCentCallCount ===  250) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = nickelNews[4];
        index = (index + 1) % nickelNews.length;
        pennyClickerUpgrade.pennyFifth.style.display = 'flex';
    }
}
//dime counter
function dimes() {
    totalCount += 0.10;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
    
}
function increasedime() {
    dimeTotal.textContent = `${values.dime.toFixed(2)} cents per second`;
    if(totalCount >= dimeMoney) {
        values.dime += dimeIncrement;
        totalCount -= dimeMoney;
        dimeMoney += dimeMoney * 0.48;
        increaseDimeAmount.textContent = dimeMoney.toFixed(2);
        dimes();
        perSecData.dimePerSec = values.dime;
        upDateTotalPerSec();
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
    if(dimeIncrement === 2) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        smallGoods.sgFifth.style.display = 'flex';
    }
    if(dimeIncrement === 10) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = dimeNews[0];
        index = (index + 1) % dimeNews.length;
        dimeClickerUpgrade.dimeFirst.style.display = 'flex';
    }
    if(dimeIncrement === 25) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = dimeNews[1];
        index = (index + 1) % dimeNews.length;
        dimeClickerUpgrade.dimeSecond.style.display = 'flex';
    }
    if(dimeIncrement === 50) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = dimeNews[2];
        index = (index + 1) % dimeNews.length;
        dimeClickerUpgrade.dimeThird.style.display = 'flex';
    }
    if(dimeIncrement === 100) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = dimeNews[3];
        index = (index + 1) % dimeNews.length;
        dimeClickerUpgrade.dimeFourth.style.display = 'flex';
    }
    if(dimeIncrement === 250) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = dimeNews[4];
        index = (index + 1) % dimeNews.length;
        dimeClickerUpgrade.dimeFifth.style.display = 'flex';
    }
}
//quater counter
function quaters() {
    totalCount += 0.25;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
}
function increaseQuaters() {
    qauterTotal.textContent = `${values.quarter.toFixed(2)} cents per second`;
    if(totalCount >= quaterMoney) {
        values.quarter += quaterIncrement;
        totalCount -= quaterMoney;
        quaterMoney += quaterMoney * 0.96;
        increaseQuaterAmount.textContent = quaterMoney.toFixed(2);
        quaters();
        perSecData.quarterPerSec = values.quarter;
        upDateTotalPerSec();
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
    if(quaterIncrement === 2) {

    }
    if(quaterIncrement === 10) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = qauterNews[0];
        index = (index + 1) % qauterNews.length;
        quaterClickerUpgrade.quaterFirst.style.display = 'flex';
    }
    if(quaterIncrement === 25) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = qauterNews[1];
        index = (index + 1) % qauterNews.length;
        quaterClickerUpgrade.quaterSecond.style.display = 'flex';
    }
    if(quaterIncrement === 50) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = qauterNews[2];
        index = (index + 1) % qauterNews.length;
        quaterClickerUpgrade.quaterThird.style.display = 'flex';
    }
    if(quaterIncrement === 100) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = qauterNews[3];
        index = (index + 1) % qauterNews.length;
        quaterClickerUpgrade.quaterFourth.style.display = 'flex';
    }
    if(quaterIncrement === 250) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = qauterNews[4];
        index = (index + 1) % qauterNews.length;
        quaterClickerUpgrade.quaterFifth.style.display = 'flex';
    }
}
//halfdollar counter
function halfDollars() {
    totalCount += 0.50;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
}
function increaseHd() {
    hDTotal.textContent = `${values.halfDollar.toFixed(2)} cents per second`;
    if(totalCount >= halfDollarMoney) {
        values.halfDollar += hfDollarIncrement;
        totalCount -= halfDollarMoney;
        halfDollarMoney += halfDollarMoney * 0.97;
        increaseHDAmount.textContent = halfDollarMoney.toFixed(2);
        halfDollars();
        perSecData.halfDPerSec = values.halfDollar;
        upDateTotalPerSec();
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
}
//dollar counter 
function dollars() {
    totalCount += 1.00;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
   
}
function increaseDollar() {
    dollarTotal.textContent = `${values.dollar.toFixed(2)} dollar per second`;
    if(totalCount >= dollarMoney) {
        values.dollar += 1.00;
        totalCount -= dollarMoney;
        dollarMoney *= 2.00;
        increaseDollarAmount.textContent = dollarMoney.toFixed(2);
        dollars();
        perSecData.dPerSec = values.dollar;
        upDateTotalPerSec();
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
}
//five dollar counter
function fiveDollars() {
    totalCount += 5.00;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
}
function increasefiveDollar() {
    fiveDollarTotal.textContent = `${values.fiveDollar.toFixed(2)} dollar per second`;
    if(totalCount >= fiveDollarMoney) {
        values.fiveDollar += 5.00;
        totalCount -= fiveDollarMoney;
        fiveDollarMoney *= 2.15;
        increaseFiveDollarAmount.textContent = fiveDollarMoney.toFixed(2);
        console.log(values.fiveDollar);
        console.log(fiveDollarMoney);
        console.log(totalCount);
        fiveDollars();
        perSecData.fiveDPerSec = values.fiveDollar;
        upDateTotalPerSec();
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
}
//ten dollar counter
function tenDollars() {
    totalCount += 10.00;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
}
function increasetenDollar() {
    tenDollarTotal.textContent =  `${values.tenDollar.toFixed(2)} dollar per second`;
    if(totalCount >= tenDollarMoney) {
        values.tenDollar += 10.00;
        totalCount -=  tenDollarMoney;
        tenDollarMoney *= 2.30;
        increaseTenDollarAmount.textContent = tenDollarMoney.toFixed(2);
        console.log(values.tenDollar);
        console.log(tenDollarMoney);
        console.log(totalCount);
        tenDollars();
        perSecData.tenDPerSec = values.tenDollar;
        upDateTotalPerSec();
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
}
//twenty dollar counter
function twentyDollars() {
    totalCount += 20.00;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
}
function increasetwentyDollar() {
    twentyDollarTotal.textContent = `${values.twentyDollar.toFixed(2)} dollars per second`;
    if(totalCount >= twentyDollarMoney) {
        values.twentyDollar += 20.00;
        totalCount -= twentyDollarMoney;
        twentyDollarMoney *= 2.75;
        increaseTwentyDollarAmount.textContent =  twentyDollarMoney.toFixed(2);
        console.log(values.twentyDollar);
        console.log(twentyDollarMoney);
        console.log(totalCount);
        twentyDollars();
        perSecData.twentyDPerSec = values.twentyDollar;
        upDateTotalPerSec();
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
}
//fifty dollar counter 
function fiftyDollars() {
    totalCount += 50.00;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
}
function increaseFiftyDollar() {
    fiftyDollarTotal.textContent = `${values.fiftyDollar.toFixed(2)} dollar per second`;
    if(totalCount >= fiftyDollarMoney) {
        values.fiftyDollar += 50.00;
        totalCount -= fiftyDollarMoney;
        fiftyDollarMoney *= 3.00;
        increaseFiftyDollarAmount.textContent =  fiftyDollarMoney.toFixed(2);
        console.log(values.fiftyDollar);
        console.log(fiftyDollarMoney);
        console.log(totalCount);
        fiftyDollars();
        perSecData.fiftyDPersec = values.fiftyDollar;
        upDateTotalPerSec();
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
}
//hundred dollar counter
function hundredDollars() {
    totalCount += 100.00;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
} 
function increaseHundredDollar() {
    hundredDollarTotal.textContent = `${values.hundredDollar.toFixed(2)} dollar per second`;
    if(totalCount >= hundredDollarMoney) {
        values.hundredDollar += 100.00;
        totalCount -= hundredDollarMoney;
        hundredDollarMoney *= 3.75;
        increaseHundredDollarAmount.textContent = hundredDollarMoney.toFixed(2);
        console.log(values.hundredDollar);
        console.log(hundredDollarMoney);
        console.log(totalCount);
        hundredDollars();
        perSecData.hundredDPersec = values.hundredDollar;
        upDateTotalPerSec();
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
}
// animations


