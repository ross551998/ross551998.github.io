//kill switch, DO NOT USE UNLESS YOU KNOW WHAT YOU ARE DOING
//          |
//          |
//          |
//         \ /
//localStorage.clear();


document.getElementById('mobile-save-game').addEventListener('click', function() {
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.textContent = 'coming soon...!';
})
function loadGame() {
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.textContent = 'coming soon...!';
}
function saveGame() {
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.textContent = 'coming soon...!';
}
//for the web version 
function webSaveGame() {
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.textContent = 'coming soon...!';
}
function webLoadGame() {
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.textContent = 'coming soon...!';
}
//log errors, warn, logs
let logs = [];
function logError() {
    logs.push(`${new Date().toISOString()}: ${console.error()}`);
}
 






//uncheck when ready for release
/*
function saveGame() {
    const savedData = {
        totalCount: totalCount,
        mainClickerCount: mainClickerCount,
        totalPerSec: totalPerSec,
        account: account,
        values: values,
        perSecData: perSecData,
        money: money,
        autoCentCallCount: autoCentCallCount,
        coinsUnlocked: coinsUnlocked,
        moneyUnlockAmount: moneyUnlockAmount,
        awardUnlocked: awardUnlocked,
        autoNickelCallCount: autoNickelCallCount,
        autoDimeCallCount: autoDimeCallCount,
        autoQuaterCallCount: autoQuaterCallCount,
        autoHDCentCallCount: autoHDCentCallCount,
        upgradesUnlocked: upgradesUnlocked,
        coinsUnlocked2: coinsUnlocked2,
        mainClickerUnlock: mainClickerUnlock,
        pennyClickerUnlock: pennyClickerUnlock
    }
    localStorage.setItem('clickergamesaved', JSON.stringify(savedData));
    console.log('game saved');
}
function loadGame() {
    console.log('loading game...');
    const savedGame = localStorage.getItem('clickergamesaved'); 
    if(savedGame) {
        const loadedState = JSON.parse(savedGame);
        totalCount = loadedState.totalCount;
        account = loadedState.account;
        values = loadedState.values;
        perSecData = loadedState.perSecData;
        totalPerSec = loadedState.totalPerSec;
        money = loadedState.money;
        autoCentCallCount = loadedState.autoCentCallCount;
        coinsUnlocked = loadedState.coinsUnlocked;
        moneyUnlockAmount = loadedState.moneyUnlockAmount;
        awardUnlocked = loadedState.awardUnlocked;
        autoNickelCallCount = loadedState.autoNickelCallCount;
        autoDimeCallCount = loadedState.autoDimeCallCount;
        autoQuaterCallCount = loadedState.autoQuaterCallCount;
        autoHDCentCallCount = loadedState.autoHDCentCallCount;
        mainClickerCount = loadedState.mainClickerCount;
        upgradesUnlocked = loadedState.upgradesUnlocked;
        coinsUnlocked2 = loadedState.coinsUnlocked2;
        mainClickerUnlock = loadedState.mainClickerUnlock;
        pennyClickerUnlock = loadedState.pennyClickerUnlock
        updateDisplay();
        if(autoCentCallCount > 0) {
            startAutoCent();
        }
        if(autoNickelCallCount > 0) {
            startAutoNickel();
        }
        if(autoDimeCallCount > 0) {
            startAutoDime();
        }
        if(autoQuaterCallCount > 0) {
            startAutoQuarter();
        }
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'no game saved found';
        console.log('no gamed saved found');
    }
}
function updateDisplay() {
    if(upgradesUnlocked === true) {
        let hideTitle = document.getElementById('upgradetitle');
        let button = document.getElementById('upgrade-unlockbuttn');
        document.getElementById('upgrades').style.display = 'flex';
        hideTitle.textContent = 'upgrades';
        hideTitle.style.fontSize = '2.6rem';
        button.style.display = 'none';
        console.log('upgrades unlocked');
    }
    //auto
    for(let i in coinsUnlocked) {
        if(coinsUnlocked[i]) {
            console.log(`coin auto ${i} is started`);
        }
    }
    //unlock
    for(let un in coinsUnlocked2) {
        try {
            if(coinsUnlocked2[un]) {
                console.log(`coin  ${un} is unlocked`);
                switch (un) {
                    case 'penny':
                        document.getElementById('pennys').style.display = 'flex';
                        nav.style.display = 'flex';
                        break;
                    case 'nickel':
                        document.getElementById('nickels').style.display = 'flex';
                        document.getElementById('nickelsunlock').style.display = 'none';
                        dUnlock.style.display = 'flex';
                        goodsUnlocked = true;
                        break;
                    case 'dime':
                        d.style.display = 'flex';
                        dUnlock.style.display = 'none';
                        dimeAuto.style.display = 'flex';
                        qUnlock.style.display = 'flex';
                        dimeAutoBody.style.display = 'flex';
                        break;
                    case 'quarter':
                        q.style.display = 'flex';
                        qauterAutoBody.style.display = 'flex';
                        hD.style.display = 'flex';
                        qUnlock.style.display = 'none';
                        quaterAuto.style.display = 'flex';
                        break;
                    case 'halfDollar':
                        Hd.style.display = 'flex';
                        dollarunlock.style.display = 'flex';
                        hDAutoBody.style.display = 'flex';
                        hD.style.display = 'none';
                        hDAuto.style.display = 'flex';
                        break;
                    case 'dollar':
                        dO.style.display = 'flex';
                        fdUnlock.style.display = 'flex';
                        dollarAutoBody.style.display = 'flex';
                        ollarunlock.style.display = 'none';
                        dollarAuto.style.display = 'flex';
                        break;
                    case 'fiveDollar':
                        fiveDollar.style.display = 'flex';
                        tdUnlock.style.display = 'flex';
                        fiveDollarAutoBody.style.display = 'flex';
                        fdUnlock.style.display = 'none';
                        fiveDollarAuto.style.display = 'flex';
                        break;
                    case 'tenDollar':
                        tenDollar.style.display = 'flex';
                        twdUnlock.style.display = 'flex';
                        tenDollarAutoBody.style.display = 'flex';
                        tdUnlock.style.display = 'none';
                        tenDollarAuto.style.display = 'flex';
                        break;
                    case 'twentyDollar':
                        twentyDollar.style.display = 'flex';
                        fiftyDUnlock.style.display = 'flex';
                        twentyDollarAutoBody.style.display = 'flex';
                        twentyDollarAuto.style.display = 'flex';
                        twdUnlock.style.display = 'none';
                        break;
                    case 'fiftyDollar':
                        fiftyDollar.style.display = 'flex';
                        hundredDUnlock.style.display = 'flex';
                        fiftyDollarAutoBody.style.display = 'flex';
                        fiftyDUnlock.style.display = 'none';
                        fiftyDollarAuto.style.display = 'flex';
                        break;
                    case 'hundredDollar':
                        hundredDollar.style.display = 'flex';
                        hundredDollarAutoBody.style.display = 'flex';
                        hundredDollarAuto.style.display = 'flex';
                        hundredDUnlock.style.display = 'none';
                        break;
                    default:
                        console.warn(`coin ${un} is not recognized`);
                        break;
                }
            }
        } catch(error) {
            console.error(`error with ${un}`, error);
        }
    }
    //main clicker upgrade
    console.log(`main clicker count ${mainClickerCount}`);
    for(let MCC in mainClickerUnlock) {
        try {
            if(mainClickerUnlock[MCC]) {
                console.log(`main clicker ${MCC} is unlocked`);
                switch (MCC) {
                    case 'one':
                        document.getElementById('mainFirst').style.display = 'flex';
                        break;
                    case 'two':
                        document.getElementById('mainSecond').style.display = 'flex';
                        break;
                    case 'three':
                        document.getElementById('mainThird').style.display = 'flex';
                        break;
                    case 'four':
                        document.getElementById('mainFourth').style.display = 'flex';
                        break;
                    case 'five':
                        document.getElementById('mainFifth').style.display = 'flex';
                        break;
                    case 'six':
                        document.getElementById('mainSixth').style.display = 'flex';
                        break;
                    case 'seven':
                        document.getElementById('mainSeventh').style.display = 'flex';
                        break;
                    case 'eight':
                        document.getElementById('mainEighth').style.display = 'flex';
                        break;
                    case 'nine':
                        document.getElementById('mainNinth').style.display = 'flex';
                        break;
                    case 'ten':
                        document.getElementById('mainTenth').style.display = 'flex';
                        break;
                    default:
                        console.warn(`main clicker ${MCC} is not recognized`);
                        break;
                }
            } 
        } catch(error) {
            console.error(`error with ${MCC}`, error);
        }
    }
    //penny upgrades
    for(let p in pennyClickerUnlock) {
        try {
            if(pennyClickerUnlock[p]) {
                console.log(`penny clicker ${p} is unlocked`);
                switch(p) {
                    case 'one':
                        pennyClickerUpgrade.pennyFirst.style.display = 'flex';
                        break;
                    case 'two':
                        pennyClickerUpgrade.pennySecond.style.display = 'flex';
                        break;
                    case 'three':
                        pennyClickerUpgrade.pennyThird.style.display = 'flex';
                        break;
                    case 'four':
                        pennyClickerUpgrade.pennyFourth.style.display = 'flex';
                        break;
                    case 'five':
                        pennyClickerUpgrade.pennyFifth.style.display = 'flex';
                        break;
                    default:
                        console.warn(`penny clicker ${p} is not recognized`);
                        break;
                }
            }
        } catch(error) {
            console.error(`error with ${p}`, error);
        }
    }
    //nickel upgrades
    for(let n in NCU) {
        try {
            if(NCU[n]) {
                console.log(`nickle clicker ${n} is unlocked`);
                switch(n) {
                    case 'one':
                        nickeClickerUpgrade.nickelFirst.style.display = 'flex';
                        break;
                    case 'two':
                        nickeClickerUpgrade.nickelSecond.style.display = 'flex';
                        break;
                    case 'three':
                        nickeClickerUpgrade.nickelThird.style.display = 'flex';
                        break;
                    case 'four':
                        nickeClickerUpgrade.nickelFourth.style.display = 'flex';
                        break;
                    case 'five':
                        nickeClickerUpgrade.nickelFifth.style.display = 'flex';
                        break;
                    default:
                        console.warn(`nickel clicker ${n} is not recognized`);
                }
            }
        } catch(error) {
            console.error(`error with ${n}`, error);
        }
    }
    //dime upgrades
    for(let d in DCU) {
        try {
            if(DCU[d]) {
                console.log(`dime clicker ${d} is unlocked`);
                switch(d) {
                    case 'one':
                        dimeClickerUpgrade.dimeFirst.style.display = 'flex';
                        break;
                    case 'two':
                        dimeClickerUpgrade.dimeSecond.style.display = 'flex';
                        break;
                    case 'three':
                        dimeClickerUpgrade.dimeThird.style.display = 'flex';
                        break;
                    case 'four':
                        dimeClickerUpgrade.dimeFourth.style.display = 'flex';
                        break;
                    case 'five':
                        dimeClickerUpgrade.dimeFifth.style.display = 'flex';
                        break;
                    default:
                        console.warn(`dime clicker ${d} is not recognized`);
                }
            }

        } catch(error) {
            console.error(`error with ${d}`, error);
        }
    }
    //quarter upgrades
    for(let q in QCU) {
        try {
            if(QCU[q]) {
                console.log(`quarter clicker ${q} is unlocked`);
                switch(q) {
                    case 'one':
                        quaterClickerUpgrade.quaterFirst.style.display = 'flex';
                        break;
                    case 'two':
                        quaterClickerUpgrade.quaterSecond.style.display = 'flex';
                        break;
                    case 'three':
                        quaterClickerUpgrade.quaterThird.style.display = 'flex';
                        break;
                    case 'four':
                        quaterClickerUpgrade.quaterFourth.style.display = 'flex';
                        break;
                    case 'five':
                        quaterClickerUpgrade.quaterFifth.style.display = 'flex';
                        break;
                    default:
                        console.warn(`quarter clicker ${q} is not recongized`);
                }
            }
        } catch(error) {
            console.error(`error with ${q}`, error);
            
        }
    }
    //half-dollar upgrades 
    for(let hf in HFCU) {
        try {
            if(HFCU[hf]) {
                console.log(`half-dollar ${hf} is unlocked`);
                switch(hf) {
                    case 'one':
                        halfDollarClickerUpgrade.hdFirst.style.display = 'flex';
                        break;
                    case 'two':
                        halfDollarClickerUpgrade.hdSecond.style.display = 'flex';
                        break;
                    case 'three':
                        halfDollarClickerUpgrade.hdThird.style.display = 'flex';
                        break;
                    case 'four':
                        halfDollarClickerUpgrade.hdFourth.style.display = 'flex';
                        break;
                    case 'five':
                        halfDollarClickerUpgrade.hdFifth.style.display = 'flex';
                        break;
                    default:
                        console.warn(`half-dollar clicker ${hf} is not recongized`);
                }
            }
        } catch(error) {
            console.error(`error with ${hf}`, error);
        }
    }
    doubleCheckall();
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
    increaseCentAmount.textContent = money.centMoney.toFixed(2);
    totalPerSecDisplay.textContent = `Total per second: $ ${totalPerSec}`;
    upDateTotalPerSec();
    if(goodsUnlocked) {
        mobile_goods.style.display = 'grid';
    }
}
function doubleCheckall() {
    if(autoCentCallCount >= 2) {
        smallGoods.sgFirst.style.display = 'flex';
    }
    if(autoNickelCallCount >= 2) {
        smallGoods.sgThird.style.display = 'flex';
    }
    if(autoDimeCallCount >= 2) {
        smallGoods.sgFifth.style.display = 'flex';
    }
    if(autoQuaterCallCount >= 2) {
        smallGoods.sgSixth.style.display = 'flex';
    }
}
//for per sec timer*/
function startAutoCent() {
    if (!autoCentInterval) {
        autoCentInterval = setInterval(() => {
            totalCount += values.cent;
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            centAuto.style.display = 'none';
            centAutoBody.style.display = 'none';
            increaseCents.style.display = 'flex';
            centTotal.style.display = 'flex';
            centTotal.textContent = `${values.cent.toFixed(2)} cents per second`;
            increaseCentAmount.textContent = money.centMoney.toFixed(2);
        }, 1000);
        perSecData.centPerSec = values.cent;
        upDateTotalPerSec();
    }
}
function startAutoNickel() {
    if(!autoNickelInterval) {
        autoNickelInterval = setInterval(() => {
            totalCount += values.nickel;
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            nickelAuto.style.display = 'none';
            nickelAutoBody.style.display = 'none';
            increaseNickels.style.display = 'flex';
            nickelTotal.style.display = 'flex';
            nickelTotal.textContent = `${values.nickel.toFixed(2)} cents per second`;
            increaseNickelAmount.textContent = money.nickelMoney.toFixed(2);
        }, 1000);
        perSecData.nickelPerSec = values.nickel;
        upDateTotalPerSec();
    }
}
function startAutoDime() {
    if(!autoDimeInterval) {
        autoDimeInterval = setInterval(() => {
            totalCount += values.dime;
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            dimeAuto.style.display = 'none';
            dimeAutoBody.style.display = 'none';
            increaseDimes.style.display = 'flex';
            dimeTotal.style.display = 'flex';
            dimeTotal.textContent = `${values.dime.toFixed(2)} cent per second`;
            increaseDimeAmount.textContent = money.dimeMoney.toFixed(2);
        }, 1000);
        perSecData.dimePerSec = values.dime;
        upDateTotalPerSec();
    }
}
function startAutoQuarter() {
    if(!autoQuaterInterval) {
        autoQuaterInterval =  setInterval(() => {
            totalCount += values.quarter;
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            quaterAuto.style.display = 'none';
            qauterAutoBody.style.display = 'none';
            increaseQuater.style.display = 'flex';
            qauterTotal.style.display = 'flex';
            qauterTotal.textContent = `${values.quarter.toFixed(2)} cent per second`;
            increaseQuaterAmount.textContent = money.quaterMoney.toFixed(2);
        }, 1000);
        perSecData.quarterPerSec = values.quarter;
        upDateTotalPerSec();
    }
}
function startAutoHFD() {
    if(!autoHDInterval) {
        autoHDInterval =  setInterval (() => {
            totalCount += values.halfDollar;
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            hDAuto.style.display = 'none';
            hDAutoBody.style.display = 'none';
            increaseHD.style.display = 'flex';
            hDTotal.style.display = 'flex';
            hDTotal.textContent = `${values.halfDollar.toFixed(2)} cent per sec`;
            increaseHDAmount.textContent = money.halfDollarMoney.toFixed(2);
        }, 1000);
        perSecData.halfDPerSec = values.halfDollar;
        upDateTotalPerSec();
    }
}
