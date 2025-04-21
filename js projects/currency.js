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

/*4.15 time: 5:16pm working on local storage and saving the game */

let values = {
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
let perSecData = {
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
//data stored
let money = {
    centMoney: 0.25,
    nickelMoney: 1.50,
    dimeMoney: 2.75,
    quaterMoney: 7.00,
    halfDollarMoney: 14.50,
    dollarMoney: 20.00,
    fiveDollarMoney: 45.00,
    tenDollarMoney: 90.25,
    twentyDollarMoney: 183.50,
    fiftyDollarMoney: 365.25,
    hundredDollarMoney: 750.50,
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
const mainClickerUpgrade = {
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
}
let mainClickerUnlock = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
}
let pennyClickerUpgrade = {
    pennyFirst: document.getElementById('pennyFirst'),
    pennySecond: document.getElementById('pennySecond'),
    pennyThird: document.getElementById('pennyThird'),
    pennyFourth: document.getElementById('pennyFourth'),
    pennyFifth: document.getElementById('pennyfifth')
}
let pennyClickerUnlock = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false
}
let coinsUnlocked = {
    penny: false,
    nickel: false,
    dime: false,
    quarter: false,
    halfDollar: false,
    dollar: false,
    fiveDollar: false,
    tenDollar: false,
    twentyDollar: false,
    fiftyDollar: false,
    hundredDollar: false
}
let coinsUnlocked2 = {
    nickel: false,
    dime: false,
    quarter: false,
    halfDollar: false,
    dollar: false,
    fiveDollar: false,
    tenDollar: false,
    twentyDollar: false,
    fiftyDollar: false,
    hundredDollar: false

}
//auto money amount
const moneyAutoAmount = {
    NAM: 1.00,
    DAM: 14.40,
    QAM: 165.00,
    HDAM: 384.00,
    dollarAM: 585.00,
    fiveDollarAM: 980.00,
    tenDollarAM: 1500.00,
    twentyDollarAM: 2240.00,
    fiftyDollarAM: 3400.00,
    hundredDollarAM: 4320.00
}
//unlock money amount
let moneyUnlockAmount = {
    DUA: 9.00,
    QUA: 66.00,
    HAD: 180.00,
    dollarUA: 559.00,
    fiveDollarUA: 1428.00,
    tenDollarUA: 6300.00,
    twentyDollarUA: 19200.00,
    fiftyDollarUA: 68000.00,
    hundredDollarUA: 180000.00
}
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

//call count for items
let autoCentCallCount = 0;
let autoNickelCallCount = 0;
let autoDimeCallCount = 0;
let autoQuaterCallCount = 0;
let autoHDCentCallCount = 0;
let autoDollarCallCount = 0;
let autoFiveDollarCallCount = 0;
let autoTenDollarCallCount = 0;
let autoTwentyDollarCallCount = 0;
let autoFiftyDollarCallCount = 0;
let autoHundredDollarCallCount = 0;
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
//commas in the totalcount
function UpdateTotalDisplay() {
    total.textContent =  `$ ${totalCount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`
}
//commas in the upgrade amount





let newsButtn = document.getElementById('top-news').addEventListener('click', function() {
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.textContent = 'coming soon...!';
})
awardButtn.addEventListener('click', function() {
    if(awardUnlocked) {
        if(awardButtn.style.pointerEvents === 'none' || assestButtn.style.display === 'flex') return;
        awards.style.display = 'grid';
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'awards opened!';
        awardButtn.style.pointerEvents = 'none';
        awardButtn.style.opacity = '0.5' 
        assestButtn.style.pointerEvents = 'none';
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'reach 25 workers for pennys to unlock';
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
const bankGoals = {
    first: 1000.00,
    second: 5000.00,
    third: 10000.00,
    fourth: 50000.00,
    fifth: 100000.00,
    sixth: 500000.00,
    seventh: 1000000.00,
    eighth: 5000000.00,
    ninth: 10000000.00,
    tenth: 50000000.00,
    eleventh: 100000000.00,
    twelfth: 500000000.00,
    thirteenth: 1000000000.00,
    fourteenth: 5000000000.00,
    fifteenth: 10000000000.00,
    sixteenth: 50000000000.00,
    seventeenth: 100000000000.00,
}
let goalsArray = Object.values(bankGoals);
const moneyInbank = document.getElementById('bankamount');
const withDraw = document.getElementById('withdraw');
let deposit = document.getElementById('deposit').addEventListener('click', function() {
    if(totalCount >= 5.00) {
        account += totalCount;
        totalCount = 0;
        console.log(account);
        
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'not enough money deposit!';
    }
    for(let i = 0; i < goalsArray.length; i++) {
        if(account >= goalsArray[i]) {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = bankNews[i];
        }
        
    }
    if(account >= 10000000.00) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'here is a award for you!';
        sixthAward.style.display = 'grid';
        
    }
    if(account >= 100000.00) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'here is award!';
        fourthAward.style.display = 'grid';
        
    }
})
moneyInbank.addEventListener('click', function() {
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 4s';
    newsContext.textContent = `$ ${account.toFixed(2)}`
})
withDraw.addEventListener('click', function() {
    if(account >= 5.00) {
        totalCount += account;
        account = 0;
        console.log('money withdre');
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'no money to withdraw';
    }
})


function upDateTotalPerSec() {
    totalPerSec = perSecData.centPerSec + perSecData.nickelPerSec + perSecData.dimePerSec + perSecData.quarterPerSec + perSecData.halfDPerSec + perSecData.dPerSec + perSecData.fiveDPerSec + perSecData.tenDPerSec + perSecData.twentyDPerSec + perSecData.fiftyDPersec + perSecData.hundredDPersec;
    totalPerSecDisplay.textContent = `$ ${totalPerSec.toFixed(2)} per second`;
    if(totalPerSec >= 1000.00) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        fifthAward.style.display = 'grid';
    }
    if(totalPerSec >= 500.00) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        seventhAward.style.display = 'grid';
    }
    if(totalPerSec >= 1000000.00) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        eighthAward.style.display = 'grid';
    }
    if(totalPerSec >= 50.00) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        ninthAward.style.display = 'grid';
    }
    if(totalPerSec >= 700000.00) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        thirteenthAward.style.display = 'grid';
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
        total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
        console.log('unlocked upgrades');
        hideTitle.textContent = 'upgrades';
        hideTitle.style.fontSize = '2.6rem';
        buttn.style.display = 'none';
        upgrades.style.display = 'flex';
        
    } else if (upgradesUnlocked) {
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
        if(totalCount >= 5.00) {
            totalCount -= 5.00;
            values.main = 0.05;
            mainClickerUpgrade.first.style.display = 'none';
            mainClickerUnlock.one = false;
            console.log('main clicker upgraded by 100%');
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } catch(error) {
        console.error('error with first main clicker');
    }
})
mainClickerUpgrade.second.addEventListener('click', function() {
    try {
        if(totalCount >= 15.00) {
            totalCount -= 15.00;
            values.main *= 2;
            mainClickerUpgrade.second.style.display = 'none';
            mainClickerUnlock.two = false;
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
            values.main *= 2;
            mainClickerUpgrade.third.style.display = 'none';
            mainClickerUnlock.three = false;
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
            values.main = parseFloat((values.main * 3).toFixed(2));
            mainClickerUpgrade.fourth.style.display = 'none';
            mainClickerUnlock.four = false;
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
            values.main = parseFloat((values.main * 2).toFixed(2));
            mainClickerUpgrade.fifth.style.display = 'none';
            mainClickerUnlock.five = false;
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
            values.main = 2.00;
            mainClickerUpgrade.sixth.style.display = 'none';
            mainClickerUnlock.six = false;
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
            values.main = 5.00;
            mainClickerUpgrade.seventh.style.display = 'none';
            mainClickerUnlock.seven = false;
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
            values.main = 10.00;
            mainClickerUpgrade.eighth.style.display = 'none';
            mainClickerUnlock.eight = false;
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
            values.main = 25.00;
            mainClickerUpgrade.nighth.style.display = 'none';
            mainClickerUnlock.nine = false;
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
            values.main = 50.00;
            mainClickerUpgrade.tenth.style.display = 'none';
            mainClickerUnlock.ten = false;
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
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.centPerSec = values.cent;
            upDateTotalPerSec();
            pennyClickerUpgrade.pennyFirst.style.display = 'none';
            pennyClickerUnlock.one = false;
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "you've doubled pennys per second!";
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
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.centPerSec = values.cent;
            upDateTotalPerSec();
            pennyClickerUpgrade.pennySecond.style.display = 'none';
            pennyClickerUnlock.two = false;
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
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.centPerSec = values.cent;
            upDateTotalPerSec();
            pennyClickerUpgrade.pennyThird.style.display = 'none';
            pennyClickerUnlock.three = false;
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
            pennyClickerUnlock.four = false;
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
            pennyClickerUnlock.five = false;
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
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.nickelPerSec = values.nickel;
            upDateTotalPerSec();
            nickeClickerUpgrade.nickelFirst.style.display = 'none';
            NCU.three = false;
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "you've doubled nickels per second";
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
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.dimePerSec = values.dime;
            upDateTotalPerSec();
            dimeClickerUpgrade.dimeThird.style.display = 'none';
            DCU.three = false;
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "you've double dime per click";
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
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.quarterPerSec = values.quarter;
            upDateTotalPerSec();
            quaterClickerUpgrade.quaterThird.style.display = 'none';
            HFCU.three = false;
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "you've double click amount";
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
    startAutoCent();
    coinsUnlocked.penny = true;
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.textContent = pennyNews[0];
    index = (index + 1) % pennyNews.length;
    
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
    if(totalCount >= moneyAutoAmount.NAM) {
        totalCount = totalCount - moneyAutoAmount.NAM;
        startAutoNickel(); 
        coinsUnlocked.nickel = true;
        console.log('auto nickel started');
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'automating nickels!';
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
    
}
function autoDime() {
    autoDimeCallCount++;
    if(totalCount >= moneyAutoAmount.DAM) {
        totalCount = totalCount - moneyAutoAmount.DAM;
        startAutoDime();
        coinsUnlocked.dime = true;
        console.log('auto dime started');
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function autoQuater() {
    autoQuaterCallCount++;
    if(totalCount >= moneyAutoAmount.QAM) {
        totalCount = totalCount - moneyAutoAmount.QAM;
        startAutoQuarter();
        coinsUnlocked.quarter = true;
        console.log('auto quater started');
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'increased production for quaters!';
    } else  {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function autoHD() {
    autoHDCentCallCount++;
    if(totalCount >= moneyAutoAmount.HDAM) {
        totalCount = totalCount - moneyAutoAmount.HDAM;
        startAutoHFD();
        coinsUnlocked.halfDollar = true;
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'increased production for half-dollar!';
        console.log('auto half dollar started');
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function autoDollar() {
    autoDollarCallCount++;
    if(totalCount >= moneyAutoAmount.dollarAM) {
        totalCount = totalCount - moneyAutoAmount.dollarAM;
        if(!autoDInterval) {
            autoDInterval = setInterval(() => {
                totalCount +=values.dollar;
                total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
                dollarAuto.style.display = 'none';
                dollarAutoBody.style.display = 'none';
                increaseDollars.style.display = 'flex';
                dollarTotal.style.display = 'flex';
                dollarTotal.textContent = `${values.dollar.toFixed(2)} dollar per second`;
                increaseDollarAmount.textContent = money.dollarMoney.toFixed(2);
            }, 1000);
            perSecData.dPerSec = values.dollar;
            coinsUnlocked.dollar = true;
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
    autoFiveDollarCallCount++;
    if(totalCount >= moneyAutoAmount.fiveDollarAM) {
        totalCount = totalCount - moneyAutoAmount.fiveDollarAM;
        if(!autoFiveDInterval) {
            autoFiveDInterval = setInterval(() => {
                totalCount += values.fiveDollar;
                total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
                fiveDollarAuto.style.display = 'none';
                fiveDollarAutoBody.style.display = 'none';
                increaseFiveDollars.style.display = 'flex';
                fiveDollarTotal.style.display = 'flex';
                fiveDollarTotal.textContent = `${values.fiveDollar.toFixed(2)} dollar per second`;
                increaseFiveDollarAmount.textContent = money.fiveDollarMoney.toFixed(2);
            }, 1000);
            perSecData.fiveDPerSec = values.fiveDollar;
            coinsUnlocked.fiveDollar = true;
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
    autoTenDollarCallCount++;
    if(totalCount >= moneyAutoAmount.tenDollarAM) {
        totalCount = totalCount - moneyAutoAmount.tenDollarAM;
        if(!autoTenDInterval) {
            autoTenDInterval = setInterval(() => {
                totalCount += values.tenDollar;
                total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
                tenDollarAuto.style.display = 'none';
                tenDollarAutoBody.style.display = 'none';
                increaseTenDollars.style.display = 'flex';
                tenDollarTotal.style.display = 'flex';
                tenDollarTotal.textContent =  `${values.tenDollar.toFixed(2)} dollar per second`;
                increaseTenDollarAmount.textContent =  money.tenDollarMoney.toFixed(2);
            }, 1000);
            perSecData.tenDPerSec = values.tenDollar;
            coinsUnlocked.tenDollar = true;
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
    autoTwentyDollarCallCount++;
    if(totalCount >= moneyAutoAmount.twentyDollarAM) {
        totalCount = totalCount - moneyAutoAmount.twentyDollarAM;
        if(!autoTwentyDInterval) {
            autoTwentyDInterval =  setInterval(() => {
                totalCount += values.twentyDollar;
                total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
                twentyDollarAuto.style.display = 'none';
                increaseTwentyDollars.style.display = 'flex';
                twentyDollarAutoBody.style.display = 'none';
                twentyDollarTotal.style.display = 'flex';
                twentyDollarTotal.textContent = `${values.twentyDollar.toFixed(2)} dollar per second`;
                increaseTwentyDollarAmount.textContent = money.twentyDollarMoney.toFixed(2);
            }, 1000);
            perSecData.twentyDPerSec = values.twentyDollar;
            coinsUnlocked.twentyDollar = true;
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
    autoFiftyDollarCallCount++;
    if(totalCount >= moneyAutoAmount.fiftyDollarAM) {
        totalCount = totalCount - moneyAutoAmount.fiftyDollarAM;
        if(!autoFityDInterval) {
            autoFityDInterval = setInterval(() => {
                totalCount += values.fiftyDollar;
                total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
                fiftyDollarAuto.style.display = 'none';
                fiftyDollarAutoBody.style.display = 'none';
                increaseFiftyDollars.style.display = 'flex';
                fiftyDollarTotal.style.display = 'flex';
                fiftyDollarTotal.textContent = `${values.fiftyDollar.toFixed(2)} dollar per second`;
                increaseFiftyDollarAmount.textContent =  money.fiftyDollarMoney.toFixed(2);
            }, 1000);
            perSecData.fiftyDPersec = values.fiftyDollar;
            coinsUnlocked.fiftyDollar = true;
            upDateTotalPerSec();
            twelfthAward.style.display = 'grid';
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s'
            newsContext.textContent = 'need more money!';
        }
    } 
}
function autoHundredDollar() {
    autoHundredDollarCallCount++;
    if(totalCount >= moneyAutoAmount.hundredDollarAM) {
        totalCount =  totalCount - moneyAutoAmount.hundredDollarAM;
        if(!autoHundredDInterval) {
            autoHundredDInterval = setInterval(() => {
                totalCount += values.hundredDollar;
                total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
                hundredDollarAuto.style.display = 'none';
                hundredDollarAutoBody.style.display = 'none';
                increaseHundredDollars.style.display = 'flex';
                hundredDollarTotal.style.display = 'flex';
                hundredDollarTotal.textContent =  `${values.hundredDollar.toFixed(2)} dollar per second`;
                increaseHundredDollarAmount.textContent = money.hundredDollarMoney.toFixed(2);
            }, 1000);
            perSecData.hundredDPersec = values.hundredDollar;
            coinsUnlocked.hundredDollar = true;
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
    if((n.style.display === 'none' || n.style.display === '') && totalCount >= 0.50) {// change later to higher number
        n.style.display = 'flex';
        dUnlock.style.display = 'flex';
        totalCount -= 0.50;
        total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
        hide.style.display = 'none';
        goodsUnlocked = true;
        coinsUnlocked2.nickel = true;
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
    if ((d.style.display === 'none' || d.style.display === '') && totalCount >= moneyUnlockAmount.DUA) { 
        d.style.display = 'flex';
        dimeAutoBody.style.display = 'flex';
        qUnlock.style.display = 'flex';
        totalCount -= moneyUnlockAmount.DUA; // Update to 12.00 when ready
        total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
        dUnlock.style.display = 'none';
        dimeAuto.style.display = 'flex';
        coinsUnlocked2.dime = true;
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
        
    }
}
function quaterUnlock() {
    if(q.style.display === 'none' || q.style.display === '' && totalCount >= moneyUnlockAmount.QUA) {
        q.style.display = 'flex';
        qauterAutoBody.style.display = 'flex';
        hD.style.display = 'flex';
        totalCount -= moneyUnlockAmount.QUA; 
        total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
        qUnlock.style.display = 'none';
        quaterAuto.style.display = 'flex';
        coinsUnlocked2.quarter = true;
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function halfDollarUnlock() {
    if(Hd.style.display === 'none' || Hd.style.display === '' && Math.round(totalCount * 100) / 100 >= moneyUnlockAmount.HDA) {
        Hd.style.display = 'flex';
        dollarunlock.style.display = 'flex';
        hDAutoBody.style.display = 'flex';
        totalCount -= moneyUnlockAmount.HDA;
        total.textContent = `${totalCount.toFixed(2).toLocaleString()}`;
        hD.style.display = 'none';
        hDAuto.style.display = 'flex';
        coinsUnlocked2.halfDollar = true;
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function dollarUnlock() {//works for now might be bugs in here
    if(dO.style.display === 'none' || dO.style.display === '' && Math.round(totalCount * 100) / 100 >= moneyUnlockAmount.dollarUA) {
        dO.style.display = 'flex';
        fdUnlock.style.display = 'flex';
        dollarAutoBody.style.display = 'flex';
        totalCount -= moneyUnlockAmount.dollarUA;
        total.textContent = `${totalCount.toFixed(2).toLocaleString()}`;
        dollarunlock.style.display = 'none';
        dollarAuto.style.display = 'flex';
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = overallNew[0] || "you've unlocked medium goods";
        index = (index + 1) % overallNew.length;
        document.getElementById('medium-goods').style.display = 'block';
        
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = "need more money..";
    }
}
function fiveDollarUnlock() {
    if(fiveDollar.style.display === 'none' || fiveDollar.style.display === '' && Math.round(totalCount * 100) / 100 >= moneyUnlockAmount.fiveDollarUA) {
        fiveDollar.style.display = 'flex';
        tdUnlock.style.display = 'flex';
        fiveDollarAutoBody.style.display = 'flex';
        totalCount -= moneyUnlockAmount.fiveDollarUA;
        total.textContent = `${totalCount.toFixed(2).toLocaleString()}`;
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
    if(tenDollar.style.display === 'none' || tenDollar.style.display === '' && Math.round(totalCount * 100) / 100 >= moneyUnlockAmount.tenDollarUA) {
        tenDollar.style.display = 'flex';
        twdUnlock.style.display = 'flex';
        tenDollarAutoBody.style.display = 'flex';
        totalCount -= moneyUnlockAmount.tenDollarUA;
        total.textContent = `${totalCount.toFixed(2).toLocaleString()}`;
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
    if(twentyDollar.style.display === 'none' || twentyDollar.style.display === '' && Math.round(totalCount * 100) / 100 >= moneyUnlockAmount.twentyDollarUA) {
        twentyDollar.style.display = 'flex';
        fiftyDUnlock.style.display = 'flex';
        twentyDollarAutoBody.style.display = 'flex';
        totalCount -= moneyUnlockAmount.twentyDollarUA;
        total.textContent = `${totalCount.toFixed(2).toLocaleString()}`;
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
    if(fiftyDollar.style.display === 'none' || fiftyDollar.style.display === '' && Math.round(totalCount * 100) / 100 >= moneyUnlockAmount.fiftyDollarUA) {
        fiftyDollar.style.display = 'flex';
        hundredDUnlock.style.display = 'flex';
        fiftyDollarAutoBody.style.display = 'flex';
        totalCount -= moneyUnlockAmount.fiftyDollarUA;
        total.textContent = `${totalCount.toFixed(2).toLocaleString()}`;
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
    if(hundredDollar.style.display === 'none' || hundredDollar.style.display === '' && Math.round(totalCount * 100) / 100 >= moneyUnlockAmount.hundredDollarUA) {
        hundredDollar.style.display = 'flex';
        hundredDollarAutoBody.style.display = 'flex';
        totalCount -= moneyUnlockAmount.hundredDollarUA;
        total.textContent = `${totalCount.toFixed(2).toLocaleString()}`;
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
    if(timeID) {
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
        newsContext.textContent = clickerNews[0];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.first.style.display = 'flex';
        mainClickerUnlock.one = true;
    }
    if(mainClickerCount === 100) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = clickerNews[1];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.second.style.display = 'flex';
        smallGoods.sgFourth.style.display = 'flex';
        mainClickerUnlock.two = true;
       
    }
    if(mainClickerCount === 200) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = clickerNews[2];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.third.style.display = 'flex';
        mainClickerUnlock.three = true;
    }
    if(mainClickerCount === 300) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = clickerNews[3];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.fourth.style.display = 'flex';
        mainClickerUnlock.four = true;
    }
    if(mainClickerCount === 500) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = clickerNews[4];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.fifth.style.display = 'flex';
        mainClickerUnlock.five = true;
    }
    if(mainClickerCount === 1000) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = clickerNews[5];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.sixth.style.display = 'flex';
        thirdAward.style.display = 'block';
        mainClickerUnlock.six = true;
    }
    if(mainClickerCount === 2000) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = clickerNews[6];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.seventh.style.display = 'flex';
        mainClickerUnlock.seven = true;
    }
    if(mainClickerCount === 5000) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = clickerNews[7];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.eighth.style.display = 'flex';
        mainClickerUnlock.eight = true;
    }
    if(mainClickerCount === 10000) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = clickerNews[8];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.nighth.style.display = 'flex';
        mainClickerUnlock.nine = true;
    }
    if(mainClickerCount === 20000) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = clickerNews[9];
        index = (index + 1) % pennyNews.length;
        mainClickerUpgrade.tenth.style.display = 'flex';
        mainClickerUnlock.ten = true;
    }
    totalCount += values.main;
    mcdisplay.textContent = values.main;
    UpdateTotalDisplay();
}
//cent counter
function cents() {
    totalCount += 0.01;
    UpdateTotalDisplay();
    
}
function increaseCent() {// this is done for now, ready for new version
    centTotal.textContent = `${values.cent.toFixed(2)} cents per second`;
    if(totalCount >= money.centMoney) {
        increaseCentAmount.textContent = money.centMoney.toFixed(2);
        autoCentCallCount++;//the count for how many times been called
        values.cent += pennyIncrement;
        totalCount -= money.centMoney;
        money.centMoney += money.centMoney * 0.12;
        perSecData.centPerSec = values.cent;
        upDateTotalPerSec();
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = 'need more money';
        console.log(values.cent);
    }
    if(autoCentCallCount === 2) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = "you've unlocked a good to buy!";
        smallGoods.sgFirst.style.display = 'flex';
    }
    if(autoCentCallCount === 10) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = pennyNews[1];
        index = (index + 1) % pennyNews.length;
        pennyClickerUpgrade.pennyFirst.style.display = 'flex';
        pennyClickerUnlock.one = true;
    }
    if(autoCentCallCount === 25) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = pennyNews[2];
        index = (index + 1) % pennyNews.length;
        pennyClickerUpgrade.pennySecond.style.display = 'flex';
        firstAward.style.display = 'grid';
        awardUnlocked = true;
        pennyClickerUnlock.two = true;
    }
    if(autoCentCallCount === 50) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = pennyNews[3];
        index = (index + 1) % pennyNews.length;
        pennyClickerUpgrade.pennyThird.style.display = 'flex';
        pennyClickerUnlock.three = false;
    }
    if(autoCentCallCount === 100) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = pennyNews[4];
        index = (index + 1) % pennyNews.length;
        pennyClickerUpgrade.pennyFourth.style.display = 'flex';
        secondAward.style.display = 'block';
        pennyClickerUnlock.four = true;
    }
    if(autoCentCallCount === 250) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = pennyNews[5];
        index = (index + 1) % pennyNews.length;
        pennyClickerUpgrade.pennyFifth.style.display = 'flex';
        pennyClickerUnlock.five = true;
        mediumGoods.mgFirst.style.display = 'flex';
    }
    
}
//nickel counter
function nickels() {
    totalCount += 0.05;
    UpdateTotalDisplay();
    
   
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
        newsContext.innerText = 'unlocked another good to buy'
        smallGoods.sgThird.style.display = 'flex';
        
    }
    if(autoNickelCallCount === 10) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = nickelNews[0];
        index = (index + 1) % nickelNews.length;
        nickeClickerUpgrade.nickelFirst.style.display = 'flex';
        NCU.first = true;
    }
    if(autoNickelCallCount === 25) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = nickelNews[1];
        index = (index + 1) % nickelNews.length;
        nickeClickerUpgrade.nickelSecond.style.display = 'flex';
        smallGoods.sgSecond.style.display = 'flex';
        NCU.two = true;

    }
    if(autoNickelCallCount === 50) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = nickelNews[2];
        index = (index + 1) % nickelNews.length;
        nickeClickerUpgrade.nickelThird.style.display = 'flex';
        NCU.three = true;
    }
    if(autoNickelCallCount === 100) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = nickelNews[3];
        index = (index + 1) % nickelNews.length;
        nickeClickerUpgrade.nickelFourth.style.display = 'flex';
        tenthAward.style.display = 'grid';
        NCU.four = true;
    }
    if(autoNickelCallCount ===  250) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = nickelNews[4];
        index = (index + 1) % nickelNews.length;
        nickeClickerUpgrade.nickelFifth.style.display = 'flex';
        NCU.five = true;
        mediumGoods.mgSecond.style.display = 'flex';
    }
    
}
//dime counter
function dimes() {
    totalCount += 0.10;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
    
}
function increasedime() {
    dimeTotal.textContent = `${values.dime.toFixed(2)} cent per second`;
    if(totalCount >= money.dimeMoney) {
        autoDimeCallCount++;
        values.dime += dimeIncrement;
        totalCount -= money.dimeMoney;
        money.dimeMoney += money.dimeMoney * 0.48;
        increaseDimeAmount.textContent = money.dimeMoney.toFixed(2);
        dimes();
        perSecData.dimePerSec = values.dime;
        upDateTotalPerSec();
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
    if(autoDimeCallCount === 2) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'unlocked another good';
        smallGoods.sgFifth.style.display = 'flex';
    }
    if(autoDimeCallCount === 10) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = dimeNews[0];
        index = (index + 1) % dimeNews.length;
        dimeClickerUpgrade.dimeFirst.style.display = 'flex';
        DCU.first = true;
    }
    if(autoDimeCallCount === 25) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = dimeNews[1];
        index = (index + 1) % dimeNews.length;
        dimeClickerUpgrade.dimeSecond.style.display = 'flex';
        DCU.two = true;
    }
    if(autoDimeCallCount === 50) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = dimeNews[2];
        index = (index + 1) % dimeNews.length;
        dimeClickerUpgrade.dimeThird.style.display = 'flex';
        DCU.three = true;
    }
    if(autoDimeCallCount === 100) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = dimeNews[3];
        index = (index + 1) % dimeNews.length;
        dimeClickerUpgrade.dimeFourth.style.display = 'flex';
        DCU.four = true;
        mediumGoods.mgThird.style.display = 'flex';
    }
    if(autoDimeCallCount === 250) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = dimeNews[4];
        index = (index + 1) % dimeNews.length;
        dimeClickerUpgrade.dimeFifth.style.display = 'flex';
        DCU.five = true;
    }
}
//quater counter
function quaters() {
    totalCount += 0.25;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
}
function increaseQuaters() {
    qauterTotal.textContent = `${values.quarter.toFixed(2)} cents per second`;
    if(totalCount >= money.quaterMoney) {
        autoQuaterCallCount++;
        values.quarter += quaterIncrement;
        totalCount -= money.quaterMoney;
        money.quaterMoney += money.quaterMoney * 0.96;
        increaseQuaterAmount.textContent = money.quaterMoney.toFixed(2);
        quaters();
        perSecData.quarterPerSec = values.quarter;
        upDateTotalPerSec();
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
    if(autoQuaterCallCount === 2) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        smallGoods.sgSixth.style.display = 'flex';
    }
    if(autoQuaterCallCount === 10) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = qauterNews[0];
        index = (index + 1) % qauterNews.length;
        quaterClickerUpgrade.quaterFirst.style.display = 'flex';
        QCU.first = true;
    }
    if(autoQuaterCallCount === 25) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = qauterNews[1];
        index = (index + 1) % qauterNews.length;
        quaterClickerUpgrade.quaterSecond.style.display = 'flex';
        QCU.two = true;
    }
    if(autoQuaterCallCount === 50) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = qauterNews[2];
        index = (index + 1) % qauterNews.length;
        quaterClickerUpgrade.quaterThird.style.display = 'flex';
        QCU.three = true;
    }
    if(autoQuaterCallCount === 100) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = qauterNews[3];
        index = (index + 1) % qauterNews.length;
        quaterClickerUpgrade.quaterFourth.style.display = 'flex';
        eleventhAward.style.display = 'grid';
        QCU.four = true;
    }
    if(autoQuaterCallCount === 250) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = qauterNews[4];
        index = (index + 1) % qauterNews.length;
        quaterClickerUpgrade.quaterFifth.style.display = 'flex';
        QCU.five = true;
    }
}
//halfdollar counter
function halfDollars() {
    totalCount += 0.50;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
}
function increaseHd() {
    hDTotal.textContent = `${values.halfDollar.toFixed(2)} cents per second`;
    if(totalCount >= money.halfDollarMoney) {
        autoHDCentCallCount++;
        values.halfDollar += hfDollarIncrement;
        totalCount -= money.halfDollarMoney;
        money.halfDollarMoney += money.halfDollarMoney * 0.97;
        increaseHDAmount.textContent = money.halfDollarMoney.toFixed(2);
        halfDollars();
        perSecData.halfDPerSec = values.halfDollar;
        upDateTotalPerSec();
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
    if(autoHDCentCallCount === 10) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = halfNews[0];
        index = (index + 1) % halfNews.length;
        halfDollarClickerUpgrade.hdFirst.style.display = 'flex';
        HFCU.first = true;
    }
    if(autoHDCentCallCount === 25) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = halfNews[1];
        index = (index + 1) % halfNews.length;
        halfDollarClickerUpgrade.hdSecond.style.display = 'flex';
        HFCU.two = true;
    }
    if(autoHDCentCallCount === 50) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = halfNews[2];
        index = (index + 1) % halfNews.length;
        halfDollarClickerUpgrade.hdThird.style.display = 'flex';
        HFCU.three = true;
    }
    if(autoHDCentCallCount === 100) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = halfNews[3];
        index = (index + 1) % halfNews.length;
        halfDollarClickerUpgrade.hdFourth.style.display = 'flex';
        HFCU.four = true;
    }
    if(autoHDCentCallCount === 250) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = halfNews[4];
        index = (index + 1) % halfNews.length;
        halfDollarClickerUpgrade.hdFifth.style.display = 'flex';
        HFCU.five = true;
    }
}
//dollar counter 
function dollars() {
    totalCount += 1.00;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
   
}
function increaseDollar() {
    dollarTotal.textContent = `${values.dollar.toFixed(2)} dollar per second`;
    if(totalCount >= money.dollarMoney) {
        autoDollarCallCount++;
        values.dollar += 1.00;
        totalCount -= money.dollarMoney;
        money.dollarMoney *= 2.00;
        increaseDollarAmount.textContent = money.dollarMoney.toFixed(2);
        dollars();
        perSecData.dPerSec = values.dollar;
        upDateTotalPerSec();
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
    if(autoDollarCallCount === 10) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = dollarNews[0];
        index = (index + 1) % dollarNews.length;
        dollarClickerUpgrade.DFirst.style.display = 'flex';
        dollar.first = true;
    }
    if(autoDollarCallCount === 25) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = dollarNews[1];
        index = (index + 1) % dollarNews.length;
        dollarClickerUpgrade.DSecond.style.display = 'flex';
        dollar.two = true;
    }
    if(autoDollarCallCount === 50) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = dollarNews[2];
        index = (index + 1) % dollarNews.length;
        dollar.three = true;
    }
    if(autoDollarCallCount === 100) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = dollarNews[3];
        index = (index + 1) % dollarNews.length;
        dollarClickerUpgrade.DFourth.style.display = 'flex';
        dollar.four = true;
    }
    if(autoDollarCallCount === 250) {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = dollarNews[4];
        index = (index + 1) % dollarNews.length;
        dollarClickerUpgrade.DFifth.style.display = 'flex';
        dollar.five = true;
    }
}
//five dollar counter
function fiveDollars() {
    totalCount += 5.00;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
}
function increasefiveDollar() {
    fiveDollarTotal.textContent = `${values.fiveDollar.toFixed(2)} dollar per second`;
    if(totalCount >= money.fiveDollarMoney) {
        autoFiveDollarCallCount++;
        values.fiveDollar += 5.00;
        totalCount -= money.fiveDollarMoney;
        money.fiveDollarMoney *= 2.15;
        increaseFiveDollarAmount.textContent = money.fiveDollarMoney.toFixed(2);
        console.log(values.fiveDollar);
        console.log(money.fiveDollarMoney);
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
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
}
function increasetenDollar() {
    tenDollarTotal.textContent =  `${values.tenDollar.toFixed(2)} dollar per second`;
    if(totalCount >= money.tenDollarMoney) {
        autoTenDollarCallCount++;
        values.tenDollar += 10.00;
        totalCount -=  money.tenDollarMoney;
        money.tenDollarMoney *= 2.30;
        increaseTenDollarAmount.textContent = money.tenDollarMoney.toFixed(2);
        console.log(values.tenDollar);
        console.log(money.tenDollarMoney);
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
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
}
function increasetwentyDollar() {
    twentyDollarTotal.textContent = `${values.twentyDollar.toFixed(2)} dollars per second`;
    if(totalCount >= money.twentyDollarMoney) {
        autoTwentyDollarCallCount++;
        values.twentyDollar += 20.00;
        totalCount -= money.twentyDollarMoney;
        money.twentyDollarMoney *= 2.75;
        increaseTwentyDollarAmount.textContent =  money.twentyDollarMoney.toFixed(2);
        console.log(values.twentyDollar);
        console.log(money.twentyDollarMoney);
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
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
}
function increaseFiftyDollar() {
    fiftyDollarTotal.textContent = `${values.fiftyDollar.toFixed(2)} dollar per second`;
    if(totalCount >= money.fiftyDollarMoney) {
        autoFiftyDollarCallCount++;
        values.fiftyDollar += 50.00;
        totalCount -= money.fiftyDollarMoney;
        money.fiftyDollarMoney *= 3.00;
        increaseFiftyDollarAmount.textContent =  money.fiftyDollarMoney.toFixed(2);
        console.log(values.fiftyDollar);
        console.log(money.fiftyDollarMoney);
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
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
} 
function increaseHundredDollar() {
    hundredDollarTotal.textContent = `${values.hundredDollar.toFixed(2)} dollar per second`;
    if(totalCount >= money.hundredDollarMoney) {
        autoHundredDollarCallCount++;
        values.hundredDollar += 100.00;
        totalCount -= money.hundredDollarMoney;
        money.hundredDollarMoney *= 3.75;
        increaseHundredDollarAmount.textContent = money.hundredDollarMoney.toFixed(2);
        console.log(values.hundredDollar);
        console.log(money.hundredDollarMoney);
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

