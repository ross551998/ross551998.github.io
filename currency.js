

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
}
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
    QAM: 100.00,
    HDAM: 384.00,
    dollarAM: 585.00,
    fiveDollarAM: 1260.00,
    tenDollarAM: 2400.00,
    twentyDollarAM: 3500.00,
    fiftyDollarAM: 6200.00,
    hundredDollarAM: 8800.00
}
//unlock money amount
let moneyUnlockAmount = {
    DUA: 9.00,
    QUA: 66.00,
    HAD: 255.00,
    dollarUA: 989.00,
    fiveDollarUA: 3060.00,
    tenDollarUA: 15960.00,
    twentyDollarUA: 54000.00,
    fiftyDollarUA: 196000.00,
    hundredDollarUA: 650000.00
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
const nickelB = document.getElementById('nickelB');
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
const settings = document.getElementById('setting2');

function UpdateTotalDisplay() {
    total.textContent =  `$ ${totalCount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`
}
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
    assestButtn.style.pointerEvents = 'auto';
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
    awardButtn.style.pointerEvents = 'none';
    assestButtn.style.opacity = '0.5';
})
closeAssets.addEventListener('click', function() {
    document.getElementById('assests').style.display = 'none';
    assestButtn.style.pointerEvents = 'auto';
    assestButtn.style.opacity = '1';
    awardButtn.style.pointerEvents = 'auto';
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
    if(!coinsUnlocked2) {
        perSecData.centPerSec = 0;
        perSecData.nickelPerSec = 0;
        perSecData.dimePerSec = 0;
        perSecData.quarterPerSec = 0;
        perSecData.halfDPerSec = 0;
        perSecData.dPerSec = 0;
        perSecData.fiveDPerSec = 0;
        perSecData.tenDPerSec = 0;
        perSecData.twentyDPerSec = 0;
        perSecData.fiftyDPersec = 0;
        perSecData.hundredDPersec = 0;
    } else {
        totalPerSec = perSecData.centPerSec + perSecData.nickelPerSec + perSecData.dimePerSec + perSecData.quarterPerSec + perSecData.halfDPerSec + perSecData.dPerSec + perSecData.fiveDPerSec + perSecData.tenDPerSec + perSecData.tenDPerSec + perSecData.twentyDPerSec + perSecData.fiftyDPersec + perSecData.hundredDPersec;
    }
    totalPerSecDisplay.textContent = `$ ${totalPerSec.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} / second`;
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
    if(totalPerSec >= 700000.00) {
        /*
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        thirteenthAward.style.display = 'grid';
        */
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
        UpdateTotalDisplay();
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
function autoCent() {
    autoCentCallCount++;
    startAutoCent();
    coinsUnlocked.penny = true;
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    document.getElementById('centspersec').style.fontSize = '36px';
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.textContent = pennyNews[0];
    index = (index + 1) % pennyNews.length;
    
}
function autoNickel() {
    autoNickelCallCount++;
    if(!coinsUnlocked2.nickel) {
        console.log('nickels not unlocked yet');
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'unlock nickels first!';
    } else if (totalCount >= moneyAutoAmount.NAM) {
        totalCount = totalCount - moneyAutoAmount.NAM;
        document.querySelector('#nickelB i').remove();
        document.getElementById('nickelB').style.backgroundColor = 'rgb(251, 255, 0)';
        removeIcon('nickelB i');
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
        document.querySelector('#dimeB i').remove();
        document.getElementById('dimeB').style.backgroundColor = 'rgb(251, 255, 0)';
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
        document.querySelector('#quaterB i').remove();
        document.getElementById('quaterB').style.backgroundColor = 'rgb(251, 255, 0)';
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
        document.querySelector('#hfb i').remove();
        document.getElementById('hfb').style.backgroundColor = 'rgb(251, 255, 0)';
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
        coinsUnlocked.dollar = true;
        startAutoDollar();
        console.log('auto dollar started');
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
        coinsUnlocked.fiveDollar = true;
        startAutoFiveDollar();
        console.log('auto five dollar');
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
        coinsUnlocked.tenDollar = true;
        startAutoTenDollar();
        console.log('auto ten dollar');
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function autoTwentyDollar() {
    autoTwentyDollarCallCount++;
    if(totalCount >= moneyAutoAmount.twentyDollarAM) {
        totalCount = totalCount - moneyAutoAmount.twentyDollarAM;
        coinsUnlocked.twentyDollar = true;
        startTWD();
        console.log('auto twenty dollar');
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function autoFiftyDollar() {
    autoFiftyDollarCallCount++;
    if(totalCount >= moneyAutoAmount.fiftyDollarAM) {
        totalCount = totalCount - moneyAutoAmount.fiftyDollarAM;
        coinsUnlocked.fiftyDollar = true;
        startAFD();
        //twelfthAward.style.display = 'grid';
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    } 
}
function autoHundredDollar() {
    autoHundredDollarCallCount++;
    if(totalCount >= moneyAutoAmount.hundredDollarAM) {
        totalCount =  totalCount - moneyAutoAmount.hundredDollarAM;
        coinsUnlocked.hundredDollar = true;
        startAHD();
        console.log('auto hundred dollar');
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
//open next levels
function nickelsUnlock() {
    let total = document.getElementById('display');
    let hide = document.getElementById('nickelsunlock');
    let n = document.getElementById('nickels');
    if((n.style.display === 'none' || n.style.display === '') && totalCount >= 0.50 && upgradesUnlocked) {// change later to higher number
        n.style.display = 'flex';
        dUnlock.style.display = 'flex';
        increaseSpawnRate();
        totalCount -= 0.50;
        UpdateTotalDisplay();
        hide.style.display = 'none';
        goodsUnlocked = true;
        coinsUnlocked2.nickel = true;
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.innerText = 'goods unlocked';
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money';
    }
}
function dimesUnlock() {
    if ((d.style.display === 'none' || d.style.display === '') && totalCount >= moneyUnlockAmount.DUA) { 
        increaseSpawnRate();
        d.style.display = 'flex';
        dimeAutoBody.style.display = 'flex';
        increaseSpawnRate();
        qUnlock.style.display = 'flex';
        totalCount -= moneyUnlockAmount.DUA; // Update to 12.00 when ready
        UpdateTotalDisplay();
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
        increaseSpawnRate();
        q.style.display = 'flex';
        qauterAutoBody.style.display = 'flex';
        hD.style.display = 'flex';
        totalCount -= moneyUnlockAmount.QUA; 
        UpdateTotalDisplay();
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
    if(Hd.style.display === 'none' || Hd.style.display === '' && totalCount >= moneyUnlockAmount.HAD) {
        increaseSpawnRate();
        Hd.style.display = 'flex';
        dollarunlock.style.display = 'flex';
        hDAutoBody.style.display = 'flex';
        totalCount -= moneyUnlockAmount.HAD;
        UpdateTotalDisplay();
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
    if(dO.style.display === 'none' || dO.style.display === '' && totalCount >= moneyUnlockAmount.dollarUA) {
        increaseSpawnRate();
        dO.style.display = 'flex';
        fdUnlock.style.display = 'flex';
        dollarAutoBody.style.display = 'flex';
        totalCount -= moneyUnlockAmount.dollarUA;
        UpdateTotalDisplay();
        dollarunlock.style.display = 'none';
        coinsUnlocked2.dollar = true;
        dollarAuto.style.display = 'flex';
        document.getElementById('medium-goods').style.display = 'flex';
        
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = "need more money..";
    }
}
function fiveDollarUnlock() {
    if(fiveDollar.style.display === 'none' || fiveDollar.style.display === '' && totalCount >= moneyUnlockAmount.fiveDollarUA) {
        fiveDollar.style.display = 'flex';
        tdUnlock.style.display = 'flex';
        fiveDollarAutoBody.style.display = 'flex';
        totalCount -= moneyUnlockAmount.fiveDollarUA;
        UpdateTotalDisplay();
        fdUnlock.style.display = 'none';
        coinsUnlocked2.fiveDollar = true;
        fiveDollarAuto.style.display = 'flex';
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function tenDollarUnlock() {
    if(tenDollar.style.display === 'none' || tenDollar.style.display === '' && totalCount >= moneyUnlockAmount.tenDollarUA) {
        tenDollar.style.display = 'flex';
        twdUnlock.style.display = 'flex';
        tenDollarAutoBody.style.display = 'flex';
        totalCount -= moneyUnlockAmount.tenDollarUA;
        UpdateTotalDisplay();
        tdUnlock.style.display = 'none';
        tenDollarAuto.style.display = 'flex';
        coinsUnlocked2.tenDollar = true;
    }  else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function twentyDollarUnlock() {
    if(twentyDollar.style.display === 'none' || twentyDollar.style.display === '' && totalCount >= moneyUnlockAmount.twentyDollarUA) {
        twentyDollar.style.display = 'flex';
        fiftyDUnlock.style.display = 'flex';
        twentyDollarAutoBody.style.display = 'flex';
        totalCount -= moneyUnlockAmount.twentyDollarUA;
        UpdateTotalDisplay();
        twdUnlock.style.display = 'none';
        console.log('twenty dollar unlocked');
        twentyDollarAuto.style.display = 'flex';
        coinsUnlocked2.twentyDollar = true;
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function fiftyDollarUnlock() {
    if(fiftyDollar.style.display === 'none' || fiftyDollar.style.display === '' && totalCount >= moneyUnlockAmount.fiftyDollarUA) {
        fiftyDollar.style.display = 'flex';
        hundredDUnlock.style.display = 'flex';
        fiftyDollarAutoBody.style.display = 'flex';
        totalCount -= moneyUnlockAmount.fiftyDollarUA;
        UpdateTotalDisplay();
        fiftyDUnlock.style.display = 'none';
        console.log('fifty dollar unlocked');
        fiftyDollarAuto.style.display = 'flex';
        coinsUnlocked2.fiftyDollar = true;
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
function hundredDollarUnlock() {
    if(hundredDollar.style.display === 'none' || hundredDollar.style.display === '' && totalCount >= moneyUnlockAmount.hundredDollarUA) {
        hundredDollar.style.display = 'flex';
        hundredDollarAutoBody.style.display = 'flex';
        totalCount -= moneyUnlockAmount.hundredDollarUA;
        UpdateTotalDisplay();
        hundredDUnlock.style.display = 'none';
        console.log('hundred dollar unlocked');
        hundredDollarAuto.style.display = 'flex';
        coinsUnlocked2.hundredDollar = true;
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth; 
        newsContext.style.animation = 'slideInOut 3s'
        newsContext.textContent = 'need more money!';
    }
}
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
function mainClicker() {
    let mcdisplay = document.getElementById('mcamount');
    mainClickerCount++;
    if(timeID) {
        clearTimeout(timeID);
    }
    mcdisplay.style.display === 'none' || mcdisplay.style.display === '';
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
        smallGoods.sgFourth.element.style.display = 'flex';
        mainClickerUnlock.two = true;
        goodsB.sgFour = true;
       
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
function increaseCent() {// this is done for now, ready for new version
    centTotal.textContent = `+$ ${values.cent.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}/second`;
    if(totalCount >= money.centMoney) {
        autoCentCallCount++;//the count for how many times been called
        totalCount -= money.centMoney;
        values.cent += pennyIncrement;
        perSecData.centPerSec = values.cent;
        money.centMoney += money.centMoney * 0.12;
        increaseCentAmount.textContent = `Increase by $ ${money.centMoney.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        upDateTotalPerSec();
        if(autoCentCallCount === 2) {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "you've unlocked a good to buy!";
            smallGoods.sgFirst.element.style.display = 'flex';
            goodsB.sgOne = true;
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
            mediumGoods.mgFirst.element.style.display ='flex';
            goodsB.MgOne = true;
        }
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = 'need more money';
        console.log(values.cent);
    }
    
}
function increaseNickel() { // ready for new version
    nickelTotal.textContent = `+$ ${values.nickel.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} / second`;
    if(totalCount >= money.nickelMoney) {
        autoNickelCallCount++;
        totalCount -= money.nickelMoney;
        values.nickel += nickelIncrement;
        perSecData.nickelPerSec = values.nickel;
        money.nickelMoney += money.nickelMoney * 0.24;
        increaseNickelAmount.textContent = `Increase by $ ${money.nickelMoney.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        upDateTotalPerSec();
        if(autoNickelCallCount === 2) {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.innerText = 'unlocked another good to buy'
            smallGoods.sgThird.element.style.display = 'flex';
            goodsB.sgThree = true;
            
        }
        if(autoNickelCallCount === 10) {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = nickelNews[0];
            index = (index + 1) % nickelNews.length;
            nickeClickerUpgrade.nickelFirst.style.display = 'flex';
            NCU.one = true;
        }
        if(autoNickelCallCount === 25) {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = nickelNews[1];
            index = (index + 1) % nickelNews.length;
            nickeClickerUpgrade.nickelSecond.style.display = 'flex';
            smallGoods.sgSecond.element.style.display = 'flex';
            goodsB.sgTwo = true;
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
            //tenthAward.style.display = 'grid';
            mediumGoods.mgFourth.element.style.display = 'flex';
            goodsB.MgFour = true;
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
            mediumGoods.mgSecond.element.style.display = 'flex';
            goodsB.MgTwo = true;
        }
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
    
}
function increasedime() {
    dimeTotal.textContent = `+$ ${values.dime.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} / second`;
    if(totalCount >= money.dimeMoney) {
        autoDimeCallCount++;
        values.dime += dimeIncrement;
        totalCount -= money.dimeMoney;
        perSecData.dimePerSec = values.dime;
        money.dimeMoney += money.dimeMoney * 0.48;
        increaseDimeAmount.textContent = `Increase by $ ${money.dimeMoney.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        upDateTotalPerSec();
        if(autoDimeCallCount === 2) {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = 'unlocked another good';
            smallGoods.sgFifth.element.style.display = 'flex';
            goodsB.SgFive = true;
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
            mediumGoods.mgThird.element.style.display = 'flex';
            goodsB.MgThree = true;
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
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
}
function increaseQuaters() {
    qauterTotal.textContent = `+$ ${values.quarter.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} / second`;
    if(totalCount >= money.quaterMoney) {
        autoQuaterCallCount++;
        values.quarter += quaterIncrement;
        totalCount -= money.quaterMoney;
        perSecData.quarterPerSec = values.quarter;
        money.quaterMoney += money.quaterMoney * 0.96;
        increaseQuaterAmount.textContent = `Increase by $ ${money.quaterMoney.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        upDateTotalPerSec();
        if(autoQuaterCallCount === 2) {
            smallGoods.sgSixth.element.style.display = 'flex';
            goodsB.SgSix = true;
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
            mediumGoods.mgFifth.element.style.display = 'flex';
            goodsB.MgFive = true;
            QCU.three = true;
        }
        if(autoQuaterCallCount === 100) {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = qauterNews[3];
            index = (index + 1) % qauterNews.length;
            quaterClickerUpgrade.quaterFourth.style.display = 'flex';
            //eleventhAward.style.display = 'grid';
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
    }  else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
}
function increaseHd() {
    hDTotal.textContent = `+$ ${values.halfDollar.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} / second`;
    if(totalCount >= money.halfDollarMoney) {
        autoHDCentCallCount++;
        values.halfDollar += hfDollarIncrement;
        totalCount -= money.halfDollarMoney;
        perSecData.halfDPerSec = values.halfDollar;
        money.halfDollarMoney += money.halfDollarMoney * 0.97;
        increaseHDAmount.textContent = `Increase by $ ${money.halfDollarMoney.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        upDateTotalPerSec();
        console.log(autoHDCentCallCount);
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
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
}
function increaseDollar() {
    dollarTotal.textContent = `${values.dollar.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} dollar per second`;
    if(totalCount >= money.dollarMoney) {
        autoDollarCallCount++;
        values.dollar += 1.00;
        totalCount -= money.dollarMoney;
        money.dollarMoney *= 2.00;
        increaseDollarAmount.textContent = money.dollarMoney.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        perSecData.dPerSec = values.dollar;
        upDateTotalPerSec();
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
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
}
function increasefiveDollar() {
    fiveDollarTotal.textContent = `${values.fiveDollar.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} dollar per second`;
    if(totalCount >= money.fiveDollarMoney) {
        autoFiveDollarCallCount++;
        values.fiveDollar += 5.00;
        totalCount -= money.fiveDollarMoney;
        money.fiveDollarMoney *= 2.15;
        increaseFiveDollarAmount.textContent = money.fiveDollarMoney.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        perSecData.fiveDPerSec = values.fiveDollar;
        upDateTotalPerSec();
        if(autoFiveDollarCallCount === 10) {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = fiveDollarNews[0];
            index = (index + 1) % fiveDollarNews.length;
            FiveDCU.fdFirst.style.display = 'flex';
            FDCU.first = true;
        }
        if(autoFiveDollarCallCount === 25) {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = fiveDollarNews[1];
            index = (index + 1) % fiveDollarNews.length;
            FiveDCU.fdSecond.style.display = 'flex';
            FDCU.two = true;
        }
        if(autoFiveDollarCallCount === 50) {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = fiveDollarNews[2];
            index = (index + 1) % fiveDollarNews.length;
            FiveDCU.fdThird.style.display = 'flex';
            FDCU.three = true;
        }
        if(autoFiveDollarCallCount === 100) {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = fiveDollarNews[3];
            index = (index + 1) % fiveDollarNews.length;
            FiveDCU.fdFourth.style.display = 'flex';
            FDCU.four = true;
        }
        if(autoFiveDollarCallCount === 250) {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = fiveDollarNews[4];
            index = (index + 1) % fiveDollarNews.length;
            FiveDCU.fdFifth.style.display = 'flex';
            FDCU.five = true;
        }
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
}
function increasetenDollar() {
    tenDollarTotal.textContent =  `${values.tenDollar.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} dollar per second`;
    if(totalCount >= money.tenDollarMoney) {
        autoTenDollarCallCount++;
        values.tenDollar += 10.00;
        totalCount -=  money.tenDollarMoney;
        money.tenDollarMoney *= 2.30;
        increaseTenDollarAmount.textContent = money.tenDollarMoney.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        perSecData.tenDPerSec = values.tenDollar;
        upDateTotalPerSec();
        console.log(autoTenDollarCallCount);
        if(autoTenDollarCallCount === 10) {
            
            TenDCU.tenFirst.style.display = 'flex';
            TDCU.first = true;
        }
        if(autoTenDollarCallCount === 25) {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.textContent = tenDollarNews[1];
            index = (index + 1) % tenDollarNews.length;
            TenDCU.tenSecond.style.display = 'flex';
            TDCU.two = true;
        }
        if(autoTenDollarCallCount === 50) {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent =  tenDollarNews[2];
            index = (index + 1) % tenDollarNews.length;
            TenDCU.tenThird.style.display = 'flex';
            TDCU.three = true;
        }
        if(autoTenDollarCallCount === 100) {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.textContent = tenDollarNews[3];
            index = (index + 1) % tenDollarNews.length;
            TenDCU.tenFourth.style.display = 'flex';
            TDCU.four = true;
        }
        if(autoTenDollarCallCount === 250) {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.textContent = 'slideInOut 3s';
            index = (index + 1) % tenDollarNews[4];
            TenDCU.tenFifth.style.display = 'flex';
            TDCU.five = true;
        }
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
}
function increasetwentyDollar() {
    twentyDollarTotal.textContent = `${values.twentyDollar.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} dollars per second`;
    if(totalCount >= money.twentyDollarMoney) {
        autoTwentyDollarCallCount++;
        values.twentyDollar += 20.00;
        totalCount -= money.twentyDollarMoney;
        money.twentyDollarMoney *= 2.75;
        increaseTwentyDollarAmount.textContent =  money.twentyDollarMoney.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        perSecData.twentyDPerSec = values.twentyDollar;
        upDateTotalPerSec();
        if(autoTwentyDollarCallCount === 10) {
            twentyDCU.first = true;
        }
        if(autoTwentyDollarCallCount === 25) {
            twentyDCU.two = true;
        }
        if(autoTwentyDollarCallCount === 50) {
            twentyDCU.three = true;
        }
        if(autoTwentyDollarCallCount === 100) {
            twentyDCU.four = true;
        }
        if(autoTwentyDollarCallCount === 250) {
            twentyDCU.five = true;
        }
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
}
function increaseFiftyDollar() {
    fiftyDollarTotal.textContent = `${values.fiftyDollar.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} dollar per second`;
    if(totalCount >= money.fiftyDollarMoney) {
        autoFiftyDollarCallCount++;
        values.fiftyDollar += 50.00;
        totalCount -= money.fiftyDollarMoney;
        money.fiftyDollarMoney *= 3.00;
        increaseFiftyDollarAmount.textContent =  money.fiftyDollarMoney.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        perSecData.fiftyDPersec = values.fiftyDollar;
        upDateTotalPerSec();
        if(autoFiftyDollarCallCount === 10) {
            fiftyDCU.first = true;
        }
        if(autoFiftyDollarCallCount === 25) {
            fiftyDCU.two = true;
        }
        if(autoFiftyDollarCallCount === 50 ) {
            fiftyDCU.three = true;
        }
        if(autoFiftyDollarCallCount === 100) {
            fiftyDCU.four = true;
        }
        if(autoFiftyDollarCallCount === 250) {
            fiftyDCU.five = true;
        }
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
}
function increaseHundredDollar() {
    hundredDollarTotal.textContent = `${values.hundredDollar.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} dollar per second`;
    if(totalCount >= money.hundredDollarMoney) {
        autoHundredDollarCallCount++;
        values.hundredDollar += 100.00;
        totalCount -= money.hundredDollarMoney;
        money.hundredDollarMoney *= 3.75;
        increaseHundredDollarAmount.textContent = money.hundredDollarMoney.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        perSecData.hundredDPersec = values.hundredDollar;
        upDateTotalPerSec();
        if(autoHundredDollarCallCount === 10) {
            HDCU.first = true;
        }
        if(autoHundredDollarCallCount === 25) {
            HDCU.two = true;
        }
        if(autoHundredDollarCallCount === 50) {
            HDCU.three = true;
        }
        if(autoHundredDollarCallCount === 100) {
            HDCU.four = true;
        }
        if(autoHundredDollarCallCount === 250) {
            HDCU.five = true;
        }
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'need more money';
    }
}

