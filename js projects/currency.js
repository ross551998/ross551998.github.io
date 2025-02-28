/*my notes for day
2.18 time:7:31pm
got the counter, per sec for the cent to work
but now it wont only keep the last 2 decimals
and also i cant get it to start at 1.25 and increasee from there
and its able to go negative
2.19 time:4:47pm all that is left is to finish the dollar then start on the 
rest of the bills
*/



//have the background look like falling money
//of the money that its on and increase 
// the amount it falls with the amount per second




let cent = 0.01;
let main = 0.01;
let nickel = 0.05;
let dime = 0.10;
let quater = 0.25;
let halfDollar = 0.50;
let dollar = 1.00;
//per sec data
let totalPerSec = 0;
let totalPerSecDisplay = document.getElementById('per-sec');
let centPerSec = 0;
let nickelPerSec = 0;
let dimePerSec = 0;
let quaterPerSec = 0;
let halfDPerSec = 0;
let dPerSec = 0;
//data stored
let centMoney = 1.25;//change later 
let nickelMoney = 1.50;//change later
let dimeMoney = 1.75;//change later
let quaterMoney = 2.00;//change later
let halfDollarMoney = 2.50;//change later
let dollarMoney = 2.75;//change later
let totalCount = 0;
let total = document.getElementById('display');
let d = document.getElementById('dimes');
let q = document.getElementById('quaters');
let Hd = document.getElementById('half-dollar');
let dO = document.getElementById('dollar');
let qUnlock = document.getElementById('quaterunlock');
let hD =  document.getElementById('half-dollarunlock');
let dollarunlock = document.getElementById('dollarunlock');
//increase increments by getid
let dUnlock = document.getElementById('dimesunlock');
let centTotal = document.getElementById('centspersec');
let nickelTotal = document.getElementById('nickelspersec');
let dimeTotal = document.getElementById('dimepersec');
let qauterTotal = document.getElementById('quaterspersec');
let hDTotal = document.getElementById('HDpersec');
let dollarTotal = document.getElementById('dollarpersec');
//upgrade data stored
let upgradesUnlocked = false;
//pennys
let centAuto = document.getElementById('centautocounter');
let autoCentInterval;
let increaseCents = document.getElementById('increaseCents');
let increaseCentAmount = document.getElementById('increaseCentamount');
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
//upgrades
function upDateTotalPerSec() {
    totalPerSec = centPerSec + nickelPerSec + dimePerSec + quaterPerSec + halfDPerSec + dPerSec;
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
        main *= 2;
        console.log('working');
        newDiv.style.display = 'none';
    })
}
function unlock() {
    let upgrades = document.getElementById('upgrades');
    let total = document.getElementById('display');
    let hideTitle = document.getElementById('upgradetitle');
    if(!upgradesUnlocked && parseFloat(total.textContent.replace('$', '').trim()) >= 0.50) {// change to different number when ready
        upgradesUnlocked = true;
        totalCount = totalCount - 0.50;//change to different number when ready
        total.textContent = `$ ${totalCount.toFixed(2)}`;
        console.log('unlocked upgrades');
        hideTitle.textContent = 'upgrades';
    } else {
        console.log('not enough money');
    }
    if(upgradesUnlocked) {
        if(upgrades.style.display === 'none' || upgrades.style.display === '') {
            upgrades.style.display = 'flex';
            DMC();
            console.log('open upgrades');
        } else {
            upgrades.style.display = 'none';
            console.log('closed upgrades');
        }
    }
}
//auto cent counter
function autoCent() {
    if(!autoCentInterval) {
        autoCentInterval = setInterval(() => {
            totalCount += cent;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            centAuto.style.display = 'none';
            increaseCents.style.display = 'flex';
            centTotal.style.display = 'flex';
            centTotal.textContent = `${cent.toFixed(2)} cents per second`;
            increaseCentAmount.textContent = centMoney.toFixed(2);
        }, 1000);
        centPerSec = cent;
        upDateTotalPerSec();
    }
}
function autoNickel() {
    if(totalCount >= 1.00) {//change to 4.00 when ready
        totalCount = totalCount - 1.00; //change to 4.00 when ready
        if(!autoNickelInterval) {
            autoNickelInterval = setInterval(() => {
                totalCount += nickel;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                nickelAuto.style.display = 'none'
                increaseNickels.style.display = 'flex';
                nickelTotal.style.display = 'flex';
                nickelTotal.textContent = `${nickel.toFixed(2)} cents per second`;
                increaseNickelAmount.textContent = nickelMoney.toFixed(2);
            }, 1000);
            nickelPerSec = nickel;
            upDateTotalPerSec();
        }
    } else {
        console.log('not enough money');
    }
}
function autoDime() {
    if(totalCount >= 2.00) {// change to 21.00 when ready
        totalCount = totalCount - 2.00;//change to 21.00 when ready
        if(!autoDimeInterval) {
            autoDimeInterval = setInterval(() => {
                totalCount += dime;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                dimeAuto.style.display = 'none';
                increaseDimes.style.display = 'block';
                dimeTotal.style.display = 'block';
                dimeTotal.textContent = `${dime.toFixed(2)} cent per second`;
                increaseDimeAmount.textContent = dimeMoney.toFixed(2);
            }, 1000);
            dimePerSec = dime;
            upDateTotalPerSec();
        }
    } else {
        console.log('not enough money');
    }
}
function autoQuater() {
    if(totalCount >= 3.00) {//change to75.00 later
        totalCount = totalCount - 3.00;//change to 75.00 later
        if(!autoQuaterInterval) {
            autoQuaterInterval =  setInterval(() => {
                totalCount += quater;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                quaterAuto.style.display = 'none';
                increaseQuater.style.display = 'block';
                qauterTotal.style.display = 'block';
                qauterTotal.textContent = `${quater.toFixed(2)} cent per second`;
                increaseQuaterAmount.textContent = quaterMoney.toFixed(2);
            }, 1000);
            quaterPerSec = quater;
            upDateTotalPerSec();
        }
    } else  {
        console.log('not enough money');
    }
}
function autoHD() {
    if(totalCount >= 4.00) {//change later
        totalCount = totalCount - 4.00;//change later
        if(!autoHDInterval) {
            autoHDInterval =  setInterval (() => {
                totalCount += halfDollar;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                hDAuto.style.display = 'none';
                increaseHD.style.display = 'block';
                hDTotal.style.display = 'block';
                hDTotal.textContent = `${halfDollar.toFixed(2)} cent per sec`;
                increaseHDAmount.textContent = halfDollarMoney.toFixed(2);
            }, 1000);
            halfDPerSec = halfDollar;
            upDateTotalPerSec();
        }
    } else {
        console.log('not enough money');
    }
}
function autoDollar() {
    if(totalCount >= 5.00) {//change later to 225.00
        totalCount = totalCount - 5.00;//change later to 225.00
        if(!autoDInterval) {
            autoDInterval = setInterval(() => {
                totalCount += dollar;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                dollarAuto.style.display = 'none';
                increaseDollars.style.display = 'block';
                dollarTotal.style.display = 'block';
                dollarTotal.textContent = `${dollar.toFixed(2)} dollar per second`;
                increaseDollarAmount.textContent = dollarMoney.toFixed(2);
            }, 1000);
            dPerSec = dollar;
            upDateTotalPerSec();
        }
    } else {
        console.log('not enough money');
    }
}
//bugs 
    //fix issue, of not registering the next icon
    // fix issue, the auto is starting when the unlock is open
    // fix issue, bug of increase the total amount when having the auto on and then clicking the nickel or cents
    //fix issue, of if you open or close upgrades the auto counter stops but when continue if you leave it open or close
//new bugs
    // bug where dollar wont appear
    //bug where when you increase the cents amount it adds to the total



//open next levels
function nickelsUnlock() {
    let total = document.getElementById('display');
    let hide = document.getElementById('nickelsunlock');
    let n = document.getElementById('nickels');
    if(n.style.display === 'none' || n.style.display === '' && total.textContent >= '$ 0.05') {// change later to higher number
        n.style.display = 'flex';
        dUnlock.style.display = 'block';
        totalCount -= 0.05;
        total.textContent = `$ ${totalCount.toFixed(2)}`;
        hide.style.display = 'none';
        console.log('nickels unlocked');
    } else {
        console.log('need more money');
    }
}
function dimesUnlock() {
    if(d.style.display === 'none' || d.style.display === '' && total.textContent >= '$ 2.00') {//increase to 12.00 when ready
        d.style.display = 'flex';
        qUnlock.style.display = 'block';
        totalCount -= 2.00;//change to 12.00 when ready 
        total.textContent = `$ ${totalCount.toFixed(2)}`;
        dUnlock.style.display = 'none';
        console.log('dimes unlocked');
        dimeAuto.style.display = 'block';
    } else  {
        console.log('need more money');
    }
}
function quaterUnlock() {
    if(q.style.display === 'none' || q.style.display === '' && total.textContent >='$ 3.00') {//increase to 30.00 later
        q.style.display = 'flex';
        hD.style.display = 'block';
        totalCount -= 3.00;//change later to 30.00
        total.textContent = `$ ${totalCount.toFixed(2)}`;
        qUnlock.style.display = 'none';
        console.log('quaters unlocked');
        quaterAuto.style.display = 'block';
    } else {
        console.log('need more money');
    }
}
function halfDollarUnlock() {
    if(Hd.style.display === 'none' || Hd.style.display === '' && total.textContent >= `$ 4.00`) {
        Hd.style.display = 'flex';
        dollarunlock.style.display = 'block';
        totalCount -= 4.00;//change later to 75.00
        total.textContent = `${totalCount.toFixed(2)}`;
        hD.style.display = 'none';
        console.log('half dollar unlocked');
        hDAuto.style.display = 'block';
    } else {
        console.log('not enough money');
    }
}
function dollarUnlock() {//works for now might be bugs in here
    if(dO.style.display === 'none' || dO.style.display === '' && total.textContent >= `$ 5.00`) {
        dO.style.display = 'flex';
        totalCount -= 5.00;
        total.textContent = `${totalCount.toFixed(2)}`;
        dollarunlock.style.display = 'none';
        dollarAuto.style.display = 'block';
    }
}
function mainClicker() {
    totalCount += main;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
}
//cent counter
function cents() {
    totalCount += 0.01;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
}
function increaseCent() {
    centTotal.textContent = `${cent.toFixed(2)} cents per second`;
    if(totalCount >= centMoney) {
        cent += 0.01;
        totalCount -= centMoney;
        centMoney *= 1.25;
        increaseCentAmount.textContent = centMoney.toFixed(2);
        console.log(cent);
        console.log(centMoney);
        cents();
        console.log(totalCount);
        centPerSec = cent;
        upDateTotalPerSec();
    } else {
        console.log('need more money');
        console.log(cent);
    }
}
//nickel counter
function nickels() {
    totalCount += 0.05;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
}
function increaseNickel() {
    nickelTotal.textContent = `${nickel.toFixed(2)} cents per second`;
    if(totalCount >= nickelMoney) {
        nickel += 0.05;
        totalCount -= nickelMoney;
        nickelMoney *= 1.50;
        increaseNickelAmount.textContent = nickelMoney.toFixed(2);
        console.log(nickel);
        console.log(nickelMoney);
        console.log(totalCount);
        nickelPerSec = nickel;
        nickels();
        upDateTotalPerSec();
    } else {
        console.log('need more money');
    }
}
//dime counter
function dimes() {
    totalCount += 0.10;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
}
function increasedime() {
    
    dimeTotal.textContent = `${dime.toFixed(2)} cents per second`;
    if(totalCount >= dimeMoney) {
        dime += 0.10;
        totalCount -= dimeMoney;
        dimeMoney *= 1.75;
        increaseDimeAmount.textContent = dimeMoney.toFixed(2);
        console.log(dime);
        console.log(dimeMoney);
        console.log(totalCount);
        dimes();
        dimePerSec = dime;
        upDateTotalPerSec();
    } else {
        console.log('not enough money');
    }
}
//quater counter
function quaters() {
    totalCount += 0.25;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
}
function increaseQuaters() {
    qauterTotal.textContent = `${quater.toFixed(2)} cents per second`;
    if(totalCount >= quaterMoney) {
        quater += 0.25;
        totalCount -= quaterMoney;
        quaterMoney *= 2.00;
        increaseQuaterAmount.textContent = quaterMoney.toFixed(2);
        console.log(quater);
        console.log(quaterMoney);
        console.log(totalCount);
        quaters();
        quaterPerSec = quater;
        upDateTotalPerSec();
    } else {
        console.log('not enough money');
    }
}
//halfdollar counter
function halfDollars() {
    totalCount += 0.50;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
}
function increaseHd() {
    hDTotal.textContent = `${halfDollar.toFixed(2)} cents per second`;
    if(totalCount >= halfDollarMoney) {
        halfDollar += 0.50;
        totalCount -= halfDollarMoney;
        halfDollarMoney *= 2.50;
        increaseHDAmount.textContent = halfDollarMoney.toFixed(2);
        console.log(halfDollar);
        console.log(halfDollarMoney);
        console.log(totalCount);
        halfDollars();
        halfDPerSec = halfDollar;
        upDateTotalPerSec();
    } else {
        console.log('not enough money');
    }
}
//dollar counter 
function dollars() {
    totalCount += 1.00;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
}
function increaseDollar() {
    dollarTotal.textContent = `${dollar.toFixed(2)} dollar per sec`;
    if(totalCount >= dollarMoney) {
        dollar += 1.00;
        totalCount -= dollarMoney;
        dollarMoney *= 2.75;
        increaseDollarAmount.textContent = dollarMoney.toFixed(2);
        console.log(dollar);
        console.log(dollarMoney);
        console.log(totalCount);
        dollars();
        dPerSec = dollar;
        upDateTotalPerSec();
    } else {
        console.log('not enough money');
    }
}

