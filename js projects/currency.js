
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




//values for each coin
const values = {
    cent: 0.01,
    main: 0.01,
    nickel: 0.05,
    dime: 0.10,
    quarter: 0.25,
    halfDollar: 0.50,
    dollar: 1.00,
    fiveDollar: 5.00,
    tenDollar: 10.00,
    twentyDollar: 20.00,
    fiftyDollar: 50.00,
    hundredDollar: 100.00
};
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
//data stored
const money = {
    centMoney: 1.25,//change later
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
let dimeMoney = 1.75;//change later
let quaterMoney = 2.00;//change later
let halfDollarMoney = 2.50;//change later
let dollarMoney = 2.75;//change later
let fiveDollarMoney = 3.00;//change later
let tenDollarMoney = 3.25;//change later
let twentyDollarMoney = 3.50;//change later
let fiftyDollarMoney = 4.25;//change later
let hundredDollarMoney = 5.50;//change later
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
let autoCentInterval;
let autoCentCalled = false;
let pennyInterval;
let increaseCents = document.getElementById('increaseCents');
let increaseCentAmount = document.getElementById('increaseCentamount');
let autoCentCallCount = 0;
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
let increaseNickelAmount = document.getElementById('increasenickelamount');
//dimes
let autoDimeInterval;
let increaseDimes = document.getElementById('increasedimes');
let dimeAuto = document.getElementById('dimeautocounter');
let increaseDimeAmount = document.getElementById('increasedimeamount');
//quater
let autoQuaterInterval;
let increaseQuater = document.getElementById('increasequaters');
let quaterAuto = document.getElementById('quaterautocounter');
let increaseQuaterAmount = document.getElementById('increasequateramount');
//half dollar
let autoHDInterval;
let increaseHD = document.getElementById('increaseHDs');
let hDAuto = document.getElementById('hdautocounter');
let increaseHDAmount = document.getElementById('increaseHDamount');
//dollar
let autoDInterval;
let increaseDollars = document.getElementById('increasedollars');
let dollarAuto = document.getElementById('dollarautocounter');
let increaseDollarAmount = document.getElementById('increasedollaramount');
//five dollar
let autoFiveDInterval;
let increaseFiveDollars = document.getElementById('increasefivedollars');
let fiveDollarAuto = document.getElementById('fivedollarautocounter');
let increaseFiveDollarAmount = document.getElementById('increasefivedollaramount');
//ten dollar
let autoTenDInterval;
let increaseTenDollars = document.getElementById('increasetendollars');
let tenDollarAuto = document.getElementById('tendollarautocounter');
let increaseTenDollarAmount = document.getElementById('increasetendollaramount');
//twenty dollar
let autoTwentyDInterval;
let increaseTwentyDollars = document.getElementById('increasetwentydollars');
let twentyDollarAuto = document.getElementById('twentydollarautocounter');
let increaseTwentyDollarAmount = document.getElementById('increasetwentydollaramount');
//fifty dollar
let autoFityDInterval;
let increaseFiftyDollars = document.getElementById('increasefiftydollars');
let fiftyDollarAuto = document.getElementById('fiftydollarautocounter');
let increaseFiftyDollarAmount = document.getElementById('increasefiftydollaramount');
//hundred dollar
let autoHundredDInterval;
let increaseHundredDollars = document.getElementById('increasehundreddollars');
let hundredDollarAuto = document.getElementById('hundreddollarautocounter');
let increaseHundredDollarAmount = document.getElementById('increasehundreddollaramount');
//upgrades

function upDateTotalPerSec() {
    totalPerSec = perSecData.centPerSec + perSecData.nickelPerSec + perSecData.dimePerSec + perSecData.quarterPerSec + perSecData.halfDPerSec + perSecData.dPerSec + perSecData.fiveDPerSec + perSecData.tenDPerSec + perSecData.twentyDPerSec + perSecData.fiftyDPersec + perSecData.hundredDPersec;
    totalPerSecDisplay.textContent = `$ ${totalPerSec.toFixed(2)} per second`;
}
function DMC() {
    const newDiv = document.createElement("div");
    const newButton = document.createElement("button");
    newDiv.id = 'doublemain';
    newButton.textContent = "Click Me";
    newDiv.appendChild(newButton);
    document.getElementById('upgrades').appendChild(newDiv);
    newDiv.addEventListener('click', function() {
        values.main *= 2;
        console.log(values.main);
        console.log(`user double mainer clicker to ${values.main}`);
        newDiv.style.display = 'none';
    });
}
function unlock() {
    let upgrades = document.getElementById('upgrades');
    let total = document.getElementById('display');
    let hideTitle = document.getElementById('upgradetitle');
    if(!upgradesUnlocked && parseFloat(total.textContent.replace('$', '').trim()) >= 0.05) {// change to different number when ready
        upgradesUnlocked = true;
        totalCount = totalCount - 0.05;//change to different number when ready
        total.textContent = `$ ${totalCount.toFixed(2)}`;
        console.log('unlocked upgrades');
        hideTitle.textContent = 'upgrades';
    }
    if(upgradesUnlocked) {
        if(upgrades.style.display === 'none' || upgrades.style.display === '') {
            upgrades.style.display = 'flex';
        } 
    } else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
    } 
}
//testing out for auto update of new upgrades


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

//auto cent counter
function autoCent() {
    autoCentCallCount++;
    console.log(`times the auto cent has been called ${autoCentCallCount}`);
    if(!autoCentInterval) {
        autoCentInterval = setInterval(() => {
            totalCount += values.cent;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            centAuto.style.display = 'none';
            increaseCents.style.display = 'flex';
            centTotal.style.display = 'flex';
            centTotal.textContent = `${values.cent.toFixed(2)} cents per second`;
            increaseCentAmount.textContent = money.centMoney.toFixed(2);
        }, 1000);
        perSecData.centPerSec = values.cent;
        upDateTotalPerSec();
        console.log('auto cent started');
    }
}
function autoNickel() {
    if(totalCount >= 1.00) {//change to 4.00 when ready
        totalCount = totalCount - 1.00; //change to 4.00 when ready
        if(!autoNickelInterval) {
            autoNickelInterval = setInterval(() => {
                totalCount += values.nickel;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                nickelAuto.style.display = 'none'
                increaseNickels.style.display = 'flex';
                nickelTotal.style.display = 'flex';
                nickelTotal.textContent = `${values.nickel.toFixed(2)} cents per second`;
                increaseNickelAmount.textContent = money.nickelMoney.toFixed(2);
            }, 1000);
            perSecData.nickelPerSec = values.nickel;
            upDateTotalPerSec();
            console.log('auto nickel started');
        }
    } else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
    }
}
function autoDime() {
    if(totalCount >= 2.00) {// change to 21.00 when ready
        totalCount = totalCount - 2.00;//change to 21.00 when ready
        if(!autoDimeInterval) {
            autoDimeInterval = setInterval(() => {
                totalCount += values.dime;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                dimeAuto.style.display = 'none';
                increaseDimes.style.display = 'flex';
                dimeTotal.style.display = 'flex';
                dimeTotal.textContent = `${values.dime.toFixed(2)} cent per second`;
                increaseDimeAmount.textContent = dimeMoney.toFixed(2);
            }, 1000);
            perSecData.dimePerSec = values.dime;
            upDateTotalPerSec();
            console.log('auto dime started');
        }
    } else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
    }
}
function autoQuater() {
    if(totalCount >= 3.00) {//change to75.00 later
        totalCount = totalCount - 3.00;//change to 75.00 later
        if(!autoQuaterInterval) {
            autoQuaterInterval =  setInterval(() => {
                totalCount += values.quarter;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                quaterAuto.style.display = 'none';
                increaseQuater.style.display = 'flex';
                qauterTotal.style.display = 'flex';
                qauterTotal.textContent = `${values.quarter.toFixed(2)} cent per second`;
                increaseQuaterAmount.textContent = quaterMoney.toFixed(2);
            }, 1000);
            perSecData.quarterPerSec = values.quarter;
            upDateTotalPerSec();
            console.log('auto quater started');
        }
    } else  {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
    }
}
function autoHD() {
    if(totalCount >= 4.00) {//change later
        totalCount = totalCount - 4.00;//change later
        if(!autoHDInterval) {
            autoHDInterval =  setInterval (() => {
                totalCount += values.halfDollar;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                hDAuto.style.display = 'none';
                increaseHD.style.display = 'flex';
                hDTotal.style.display = 'flex';
                hDTotal.textContent = `${values.halfDollar.toFixed(2)} cent per sec`;
                increaseHDAmount.textContent = halfDollarMoney.toFixed(2);
            }, 1000);
            perSecData.halfDPerSec = values.halfDollar;
            upDateTotalPerSec();
            console.log('auto half dollar started');
        }
    } else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
    }
}
function autoDollar() {
    if(totalCount >= 5.00) {//change later to 225.00
        totalCount = totalCount - 5.00;//change later to 225.00
        if(!autoDInterval) {
            autoDInterval = setInterval(() => {
                totalCount +=values.dollar;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                dollarAuto.style.display = 'none';
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
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
    }
}
function autoFiveDollar() {
    if(totalCount >= 6.00) {//change later to 400.00
        totalCount = totalCount - 6.00;//change later to 400.00
        if(!autoFiveDInterval) {
            autoFiveDInterval = setInterval(() => {
                totalCount += values.fiveDollar;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                fiveDollarAuto.style.display = 'none';
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
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
    }
}
function autoTenDollar() {
    if(totalCount >= 7.00) {
        totalCount = totalCount - 7.00;
        if(!autoTenDInterval) {
            autoTenDInterval = setInterval(() => {
                totalCount += values.tenDollar;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                tenDollarAuto.style.display = 'none';
                increaseTenDollars.style.display = 'flex';
                tenDollarTotal.style.display = 'flex';
                tenDollarTotal.textContent =  `${values.tenDollar.toFixed(2)} dollar per second`;
                increaseTenDollarAmount.textContent =  tenDollarMoney.toFixed(2);
            }, 1000);
            perSecData.tenDPerSec = values.tenDollar;
            upDateTotalPerSec();
            console.log('auto ten dollar');
        } else {
            console.log('not working');
            noMoneyDisplay.textContent = 'need more money';
            setTimeout(() => {
                noMoneyDisplay.textContent = '';
            }, 1000);
        }
    }
}
function autoTwentyDollar() {
    if(totalCount >= 8.00) {
        totalCount = totalCount - 8.00;
        if(!autoTwentyDInterval) {
            autoTwentyDInterval =  setInterval(() => {
                totalCount += values.twentyDollar;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                twentyDollarAuto.style.display = 'none';
                increaseTwentyDollars.style.display = 'flex';
                twentyDollarTotal.style.display = 'flex';
                twentyDollarTotal.textContent = `${values.twentyDollar.toFixed(2)} dollar per second`;
                increaseTwentyDollarAmount.textContent = twentyDollarMoney.toFixed(2);
            }, 1000);
            perSecData.twentyDPerSec = values.twentyDollar;
            upDateTotalPerSec();
            console.log('auto twenty dollar');
        } else {
            console.log('auto twenty not working');
            noMoneyDisplay.textContent = 'need more money';
            setTimeout(() => {
                noMoneyDisplay.textContent = '';
            }, 1000);
        }
    }
}
function autoFiftyDollar() {
    if(totalCount >= 9.00) {
        totalCount = totalCount - 9.00;
        if(!autoFityDInterval) {
            autoFityDInterval = setInterval(() => {
                totalCount += values.fiftyDollar;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                fiftyDollarAuto.style.display = 'none';
                increaseFiftyDollars.style.display = 'flex';
                fiftyDollarTotal.style.display = 'flex';
                fiftyDollarTotal.textContent = `${values.fiftyDollar.toFixed(2)} dollar per second`;
                increaseFiftyDollarAmount.textContent =  fiftyDollarMoney.toFixed(2);
            }, 1000);
            perSecData.fiftyDPersec = values.fiftyDollar;
            upDateTotalPerSec();
            console.log('auto fifty dollar');
        } else {
            console.log('auto fifty not working');
            noMoneyDisplay.textContent = 'need more money';
            setTimeout(() => {
                noMoneyDisplay.textContent = '';
            }, 1000);
        }
    } 
}
function autoHundredDollar() {
    if(totalCount >= 10.00) {
        totalCount =  totalCount - 9.00;
        if(!autoHundredDInterval) {
            autoHundredDInterval = setInterval(() => {
                totalCount += values.hundredDollar;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                hundredDollarAuto.style.display = 'none';
                increaseHundredDollars.style.display = 'flex';
                hundredDollarTotal.style.display = 'flex';
                hundredDollarTotal.textContent =  `${values.hundredDollar.toFixed(2)} dollar per second`;
                increaseHundredDollarAmount.textContent = hundredDollarMoney.toFixed(2);
            }, 1000);
            perSecData.hundredDPersec = values.hundredDollar;
            upDateTotalPerSec();
            console.log('auto hundred dollar');
        } else {
            console.log('auto hundred dollar not working');
            noMoneyDisplay.textContent = 'need more money';
            setTimeout(() => {
                noMoneyDisplay.textContent = '';
            }, 1000);
        }
    }
}
//open next levels
function nickelsUnlock() {
    let total = document.getElementById('display');
    let hide = document.getElementById('nickelsunlock');
    let n = document.getElementById('nickels');
    if(n.style.display === 'none' || n.style.display === '' && total.textContent >= '$ 0.50') {// change later to higher number
        n.style.display = 'flex';
        dUnlock.style.display = 'flex';
        totalCount -= 0.50;
        total.textContent = `$ ${totalCount.toFixed(2)}`;
        hide.style.display = 'none';
        console.log('nickels unlocked');
    } else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
    }
}
function dimesUnlock() {
    if(d.style.display === 'none' || d.style.display === '' && Math.round(totalCount * 100) / 100 >= 2.00) {//increase to 12.00 when ready
        console.log('unlocking dimes');
        d.style.display = 'flex';
        qUnlock.style.display = 'flex';
        totalCount -= 2.00;//change to 12.00 when ready 
        total.textContent = `$ ${totalCount.toFixed(2)}`;
        dUnlock.style.display = 'none';
        console.log('dimes unlocked');
        dimeAuto.style.display = 'flex';
    } else  {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
    }
}
function quaterUnlock() {
    if(q.style.display === 'none' || q.style.display === '' && Math.round(totalCount * 100) / 100 >= 2.50) {//increase to 30.00 later
        q.style.display = 'flex';
        hD.style.display = 'flex';
        totalCount -= 3.00;//change later to 30.00
        total.textContent = `$ ${totalCount.toFixed(2)}`;
        qUnlock.style.display = 'none';
        console.log('quaters unlocked');
        quaterAuto.style.display = 'flex';
    } else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
    }
}
function halfDollarUnlock() {
    if(Hd.style.display === 'none' || Hd.style.display === '' && Math.round(totalCount * 100) / 100 >= 3.50) {//change later
        Hd.style.display = 'flex';
        dollarunlock.style.display = 'flex';
        totalCount -= 4.00;//change later to 75.00
        total.textContent = `${totalCount.toFixed(2)}`;
        hD.style.display = 'none';
        console.log('half dollar unlocked');
        hDAuto.style.display = 'flex';
    } else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
    }
}
function dollarUnlock() {//works for now might be bugs in here
    if(dO.style.display === 'none' || dO.style.display === '' && Math.round(totalCount * 100) / 100 >= 4.50) {//change later
        dO.style.display = 'flex';
        fdUnlock.style.display = 'flex';
        totalCount -= 5.00;
        total.textContent = `${totalCount.toFixed(2)}`;
        dollarunlock.style.display = 'none';
        console.log('dollar unlocked');
        dollarAuto.style.display = 'flex';
    } else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
    }
}
function fiveDollarUnlock() {
    if(fiveDollar.style.display === 'none' || fiveDollar.style.display === '' && Math.round(totalCount * 100) / 100 >= 5.50) {//change later
        fiveDollar.style.display = 'flex';
        tdUnlock.style.display = 'flex';
        totalCount -= 6.00;//change later
        total.textContent = `${totalCount.toFixed(2)}`;
        fdUnlock.style.display = 'none';
        console.log('five dollar unlocked');
        fiveDollarAuto.style.display = 'flex';
    } else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
    }
}
function tenDollarUnlock() {
    if(tenDollar.style.display === 'none' || tenDollar.style.display === '' && Math.round(totalCount * 100) / 100 >= 6.50) {//change later
        tenDollar.style.display = 'flex';
        twdUnlock.style.display = 'flex';
        totalCount -= 6.50;
        total.textContent = `${totalCount.toFixed(2)}`;
        tdUnlock.style.display = 'none';
        console.log('ten dollar unlocked');
        tenDollarAuto.style.display = 'flex';
    }  else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
    }
}
function twentyDollarUnlock() {
    if(twentyDollar.style.display === 'none' || twentyDollar.style.display === '' && Math.round(totalCount * 100) / 100 >=  7.50) {
        twentyDollar.style.display = 'flex';
        fiftyDUnlock.style.display = 'flex';
        totalCount -= 7.50;
        total.textContent = `${totalCount.toFixed(2)}`;
        twdUnlock.style.display = 'none';
        console.log('twenty dollar unlocked');
        twentyDollarAuto.style.display = 'flex';
    } else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = ''
        }, 1000);
    }
}
function fiftyDollarUnlock() {
    if(fiftyDollar.style.display === 'none' || fiftyDollar.style.display === '' && Math.round(totalCount * 100) / 100 >= 8.50) {
        fiftyDollar.style.display = 'flex';
        hundredDUnlock.style.display = 'flex';
        totalCount -= 8.50;
        total.textContent = `${totalCount.toFixed(2)}`;
        fiftyDUnlock.style.display = 'none';
        console.log('fifty dollar unlocked');
        fiftyDollarAuto.style.display = 'flex';
    } else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = ''
        }, 1000);
    }
}
function hundredDollarUnlock() {
    console.log('error 4');
    if(hundredDollar.style.display === 'none' || hundredDollar.style.display === '' && Math.round(totalCount * 100) / 100 >= 9.50) {
        hundredDollar.style.display = 'flex';
        totalCount -= 9.50;
        total.textContent = `${totalCount.toFixed(2)}`;
        hundredDUnlock.style.display = 'none';
        console.log('hundred dollar unlocked');
        hundredDollarAuto.style.display = 'flex';
        console.log('error 5');
    } else {
        console.log('error 6');
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = ''
        }, 1000);
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
    totalCount += values.main;
    mcdisplay.textContent = values.main;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
    console.log(values.main);
}
//cent counter
function cents() {
    totalCount += 0.01;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
    console.log('user clicked pennys');
}
function increaseCent() {
    centTotal.textContent = `${values.cent.toFixed(2)} cents per second`;
    if(totalCount >= money.centMoney) {
        autoCentCallCount++;
        console.log(`times the auto cent has been called ${autoCentCallCount}`);
        values.cent += 0.01;
        totalCount -= money.centMoney;
        money.centMoney *= 1.25;
        increaseCentAmount.textContent = money.centMoney.toFixed(2);
        console.log(values.cent);
        console.log(money.centMoney);
        cents();
        console.log(totalCount);
        perSecData.centPerSec = values.cent;
        upDateTotalPerSec();
    } else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
        console.log(values.cent);
    }
}
//nickel counter
function nickels() {
    totalCount += 0.05;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
    console.log('user clicked nickels');
   
}
function increaseNickel() {
    nickelTotal.textContent = `${values.nickel.toFixed(2)} cents per second`;
    if(totalCount >= money.nickelMoney) {
        values.nickel += 0.05;
        totalCount -= money.nickelMoney;
        money.nickelMoney *= 1.50;
        increaseNickelAmount.textContent = money.nickelMoney.toFixed(2);
        console.log(values.nickel);
        console.log(money.nickelMoney);
        console.log(totalCount);
        perSecData.nickelPerSec = values.nickel;
        nickels();
        upDateTotalPerSec();
        console.log(`number of ${perSecData.nickelPerSec}`);
    } else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
    }
}
//dime counter
function dimes() {
    totalCount += 0.10;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
    console.log('user clicked dimes');
}
function increasedime() {
    dimeTotal.textContent = `${values.dime.toFixed(2)} cents per second`;
    if(totalCount >= dimeMoney) {
        values.dime += 0.10;
        totalCount -= dimeMoney;
        dimeMoney *= 1.75;
        increaseDimeAmount.textContent = dimeMoney.toFixed(2);
        console.log(values.dime);
        console.log(dimeMoney);
        console.log(totalCount);
        dimes();
        perSecData.dimePerSec = values.dime;
        upDateTotalPerSec();
    } else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
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
        values.quarter += 0.25;
        totalCount -= quaterMoney;
        quaterMoney *= 2.00;
        increaseQuaterAmount.textContent = quaterMoney.toFixed(2);
        console.log(values.quarter);
        console.log(quaterMoney);
        console.log(totalCount);
        quaters();
        perSecData.quarterPerSec = values.quarter;
        upDateTotalPerSec();
    } else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
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
        values.halfDollar += 0.50;
        totalCount -= halfDollarMoney;
        halfDollarMoney *= 2.50;
        increaseHDAmount.textContent = halfDollarMoney.toFixed(2);
        console.log(values.halfDollar);
        console.log(halfDollarMoney);
        console.log(totalCount);
        halfDollars();
        perSecData.halfDPerSec = values.halfDollar;
        upDateTotalPerSec();
    } else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
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
        dollarMoney *= 2.75;
        increaseDollarAmount.textContent = dollarMoney.toFixed(2);
        console.log(values.dollar);
        console.log(dollarMoney);
        console.log(totalCount);
        dollars();
        perSecData.dPerSec = values.dollar;
        upDateTotalPerSec();
    } else {
        noMoneyDisplay.textContent = 'need more money';
        setTimeout(() => {
            noMoneyDisplay.textContent = '';
        }, 1000);
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
        fiveDollarMoney *= 3.00;
        increaseFiveDollarAmount.textContent = fiveDollarMoney.toFixed(2);
        console.log(values.fiveDollar);
        console.log(fiveDollarMoney);
        console.log(totalCount);
        fiveDollars();
        perSecData.fiveDPerSec = values.fiveDollar;
        upDateTotalPerSec();
    } else {
        console.error('error for increae five dollar');
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
        tenDollarMoney *= 3.50;
        increaseTenDollarAmount.textContent = tenDollarMoney.toFixed(2);
        console.log(values.tenDollar);
        console.log(tenDollarMoney);
        console.log(totalCount);
        tenDollars();
        perSecData.tenDPerSec = values.tenDollar;
        upDateTotalPerSec();
    } else {
        console.error('error for increase tenDollar');
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
        twentyDollarMoney *= 4.50;
        increaseTwentyDollarAmount.textContent =  twentyDollarMoney.toFixed(2);
        console.log(values.twentyDollar);
        console.log(twentyDollarMoney);
        console.log(totalCount);
        twentyDollars();
        perSecData.twentyDPerSec = values.twentyDollar;
        upDateTotalPerSec();
    } else {
        console.error('error for increase twenty dollar');
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
        fiftyDollarMoney *= 5.50;
        increaseFiftyDollarAmount.textContent =  fiftyDollarMoney.toFixed(2);
        console.log(values.fiftyDollar);
        console.log(fiftyDollarMoney);
        console.log(totalCount);
        fiftyDollars();
        perSecData.fiftyDPersec = values.fiftyDollar;
        upDateTotalPerSec();
    } else {
        console.error('error for increase fifty dollar');
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
        hundredDollarMoney *= 6.50;
        increaseHundredDollarAmount.textContent = hundredDollarMoney.toFixed(2);
        console.log(values.hundredDollar);
        console.log(hundredDollarMoney);
        console.log(totalCount);
        hundredDollars();
        perSecData.hundredDPersec = values.hundredDollar;
        upDateTotalPerSec();
    } else {
        console.error('error for increase hundred dollar');
    }
}

