
let r = document.getElementById('small-goods');
let goodsUnlocked = false;
let newsBusy = false;



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
const pennyClickerUpgrade = {
    pennyFirst: document.getElementById('pennyFirst'),
    pennySecond: document.getElementById('pennySecond'),
    pennyThird: document.getElementById('pennyThird'),
    pennyFourth: document.getElementById('pennyFourth'),
    pennyFifth: document.getElementById('pennyfifth')
}
const nickeClickerUpgrade = {
    nickelFirst: document.getElementById('nickelFirst'),
    nickelSecond: document.getElementById('nickelSecond'),
    nickelThird: document.getElementById('nickelThird'),
    nickelFourth: document.getElementById('nickelFourth'),
    nickelFifth: document.getElementById('nickelFifth')
}
const dimeClickerUpgrade = {
    dimeFirst: document.getElementById('dimeFirst'),
    dimeSecond: document.getElementById('dimeSecond'),
    dimeThird: document.getElementById('dimeThird'),
    dimeFourth: document.getElementById('dimeFourth'),
    dimeFifth: document.getElementById('dimeFifth')
}
const quaterClickerUpgrade = {
    quaterFirst: document.getElementById('quaterFirst'),
    quaterSecond: document.getElementById('quaterSecond'),
    quaterThird: document.getElementById('quaterThird'),
    quaterFourth: document.getElementById('quaterFourth'),
    quaterFifth: document.getElementById('quaterFifth')
}
const halfDollarClickerUpgrade = {
    hdFirst: document.getElementById('hdFirst'),
    hdSecond: document.getElementById('hdSecond'),
    hdThird: document.getElementById('hdThird'),
    hdFourth: document.getElementById('hdFourth'),
    hdFifth: document.getElementById('hdFifth')
}
const dollarClickerUpgrade = {
    DFirst: document.getElementById('DFirst'),
    DSecond: document.getElementById('DSecond'),
    DThird: document.getElementById('DThird'),
    DFourth: document.getElementById('DFourth'),
    DFifth: document.getElementById('DFifth')
}
const FiveDCU = {
    fdFirst: document.getElementById('fiveFirst'),
    fdSecond: document.getElementById('fiveSecond'),
    fdThird: document.getElementById('fiveThird'),
    fdFourth: document.getElementById('fiveFourth'),
    fdFifth: document.getElementById('fiveFifth')
}
const TenDCU = {
    tenFirst: document.getElementById('tenFirst'),
    tenSecond: document.getElementById('tenSecond'),
    tenThird: document.getElementById('tenThird'),
    tenFourth: document.getElementById('tenFourth'),
    tenFifth: document.getElementById('tenFifth'),
}
const TwentyDCU = {
    TFirst: document.getElementById('twentyFirst'),
    TSecond: document.getElementById('twentySecond'),
    TThird: document.getElementById('twentyThird'),
    TFourth: document.getElementById('twentyFourth'),
    TFifth: document.getElementById('twentyFifth')
}

futureUpgrade(halfDollarClickerUpgrade.hdFirst, 160.00, 2, "you've doubled half-dollar per second", 'first', 'HFCU');
futureUpgrade(halfDollarClickerUpgrade.hdSecond, 430.00, 3, "you've tripled the half-dollar per second", 'second', 'HFCU');
futureUpgrade(halfDollarClickerUpgrade.hdFourth, 1290.00, 2, "you've double half-dollar per second", 'four', 'HFCU');
futureUpgrade(halfDollarClickerUpgrade.hdFifth, 1452.00, 3, "you've tripled half-dollar per seccond", 'five', 'HFCU');
futureUpgrade(dollarClickerUpgrade.DFirst, 205.00, 2, "you've doubled dollar per second", "first", 'dollar');
futureUpgrade(dollarClickerUpgrade.DSecond, 525.00, 3, "you've tripled dollar per second", "second", 'dollar' );
futureUpgrade(dollarClickerUpgrade.DThird, 4368.00, 2, "you've doubled dollar per second", 'four', 'dollar');
futureUpgrade(dollarClickerUpgrade.DFifth, 16598.00, 3, "you've tripled dollar per second", 'five', 'dollar');
futureUpgrade(FiveDCU.fdFirst, 290.00, 2, "you've doubled five dollar per second", ' first', 'FDCU');
futureUpgrade(FiveDCU.fdSecond, 663.00, 3, "you've tripled five dollar per second", ' second', 'FDCU');
futureUpgrade(FiveDCU.fdFourth, 5907.00, 2, "you've doubled five dollar per second", ' four', 'FDCU');
futureUpgrade(FiveDCU.fdFifth, 23037.00, 3, "you've tripled five dollar per second", ' five', 'FDCU');

//new way more advanced and more efficent

function futureUpgrade(button, cost, multiplier, message, key, group ) {
    button.addEventListener('click', () => {
        console.log('group', group);
        try {
            if(totalCount >= cost) {
                totalCount -= cost;
                if(group === 'HFCU') {
                    values.halfDollar *= multiplier;
                    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
                    perSecData.halfDPerSec = values.halfDollar;
                    upDateTotalPerSec();
                    button.style.display = 'none';
                    safeNewsUpdate(message);
                    HFCU[key] = false;
                } else if(group === 'dollar') {
                    values.dollar *= multiplier;
                    total.textContent = `$ ${totalCount.toLocaleString(2)}`;
                    perSecData.dPerSec = values.dollar;
                    upDateTotalPerSec();
                    button.style.display = 'none';
                    safeNewsUpdate(message);
                    dollar[key];
                } else if(group === 'FDCU') {
                    values.fiveDollar *= multiplier;
                    total.textContent `$ ${totalCount.toFixed(2)}`;
                    perSecData.fiveDPerSec = values.fiveDollar;
                    upDateTotalPerSec();
                    button.style.display = 'none';
                    newsContext.style.animation = 'none';
                    void newsContext.offsetWidth;
                    newsContext.style.animation = 'slideInOut 3s';
                    newsContext.textContent = message;
                    FDCU[key];
                } else if(group === 'TDCU') {
                    values.tenDollar *= multiplier;
                    total.textContent = `$ ${totalCount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
                    perSecData.tenDPerSec = values.tenDollar;
                    upDateTotalPerSec();
                    button.style.display = 'none';
                    newsContext.style.animation = 'none';
                    void newsContext.offsetWidth;
                    newsContext.style.animation = 'slideInOut 3s';
                    newsContext.textContent = message;
                    TDCU[key];
                } else {
                    button.style.display = 'none';
                    newsContext.style.animation = 'none';
                    void newsContext.offsetWidth;
                    newsContext.style.animation = 'slideInOut 3s';
                    newsContext.textContent = message;
                    console.log('not working');
                    console.warn(`unknown group: ${group}`);
                }   
            }
        } catch(error) {
            logError(error.message);
            console.error(`error with ${button.id} upgrade`, error);
        }
    })
}
//testing



//error for finding anything thats not right in the objects above
Object.entries(TwentyDCU, FiveDCU, dollarClickerUpgrade, halfDollarClickerUpgrade, quaterClickerUpgrade, dimeClickerUpgrade, nickeClickerUpgrade).forEach(([key, value]) => {
    if(!value) console.warn(`element with id${key} 'not found` );
})
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
let pennyClickerUnlock = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false
}
let NCU = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false
}
let DCU = {
    first: false,
    two: false,
    three: false,
    four: false,
    five: false
}
let QCU = {
    first: false,
    two: false,
    three: false,
    four: false,
    five: false
}
let HFCU = {
    first: false,
    two: false,
    three: false,
    four: false,
    five: false
}
let dollar = {
    first: false,
    two: false,
    three: false,
    four: false,
    five: false
}
let FDCU = {
    first: false,
    two: false,
    three: false,
    four: false,
    five: false
}
let TDCU = {
    first: false,
    two: false,
    three: false,
    four: false,
    five: false 
}
let twentyDCU = {
    first: false,
    two: false,
    three: false,
    four: false,
    five: false
}
let fiftyDCU = {
    first: false,
    two: false,
    three: false,
    four: false,
    five: false
}
let HDCU = {
    first: false,
    two: false,
    three: false,
    four: false,
    five: false
}
//data for all upgrades unlocked you can add to as well
let allClickerUpgrades = {
    NCU, DCU, QCU, HFCU, dollar, FDCU, TDCU, pennyClickerUnlock, mainClickerUnlock
}
//resuable message 
function safeNewsUpdate(message, duration = 3000) {
    if(newsBusy) return;
    newsBusy = true;
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.textContent = message;
    setTimeout(() => {
        newsBusy = false;
    }, duration);
}







//nickel
nickeClickerUpgrade.nickelFirst.addEventListener('click',function() {
    try {
        if(totalCount >= 35.00) {
            totalCount -= 35.00;
            values.nickel *= 2;
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.nickelPerSec = values.nickel;
            upDateTotalPerSec();
            nickeClickerUpgrade.nickelFirst.style.display = 'none';
            NCU.one = false;
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "you've doubled nickels per second";
        } else {
            noMoneyDisplay.textContent = 'need more money!';
            setTimeout(() => {
            noMoneyDisplay.textContent = '';
            }, 1000); 
        }
    } catch(error)  {
        console.error('first double nickle not working');
    }
})
nickeClickerUpgrade.nickelSecond.addEventListener('click',function() {
    try {
        if(totalCount >= 165.00) {
            totalCount -= 165.00;
            values.nickel *= 2;
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.nickelPerSec = values.nickel;
            upDateTotalPerSec();
            nickeClickerUpgrade.nickelSecond.style.display = 'none';
            NCU.two = false;
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "you've doubled nickels per second";
        } else {
            noMoneyDisplay.textContent = 'need more money!';
            setTimeout(() => {
            noMoneyDisplay.textContent = '';
            }, 1000); 
        }
    } catch(error)  {
        console.error('first double nickle not working');
    }
})
nickeClickerUpgrade.nickelFourth.addEventListener('click',function() {
    try {
        if(totalCount >= 815.00) {
            totalCount -= 815.00;
            values.nickel *= 2;
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.nickelPerSec = values.nickel;
            upDateTotalPerSec();
            nickeClickerUpgrade.nickelFourth.style.display = 'none';
            NCU.four = false;
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "you've doubled nickels per second";
        } else {
            noMoneyDisplay.textContent = 'need more money!';
            setTimeout(() => {
            noMoneyDisplay.textContent = '';
            }, 1000); 
        }
    } catch(error)  {
        console.error('first double nickle not working');
    }
})
nickeClickerUpgrade.nickelFifth.addEventListener('click',function() {
    try {
        if(totalCount >= 1080.00) {
            totalCount -= 1080.00;
            values.nickel *= 2;
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.nickelPerSec = values.nickel;
            upDateTotalPerSec();
            nickeClickerUpgrade.nickelFifth.style.display = 'none';
            NCU.five = false;
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "you've doubled nickels per second";
        } else {
            noMoneyDisplay.textContent = 'need more money!';
            setTimeout(() => {
            noMoneyDisplay.textContent = '';
            }, 1000); 
        }
    } catch(error)  {
        console.error('first double nickle not working');
    }
})
//dime
dimeClickerUpgrade.dimeFirst.addEventListener('click', function() {
    try {
        if(totalCount >= 56.00) {
            totalCount -= 56.00;
            values.dime *=2;
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.dimePerSec = values.dime;
            upDateTotalPerSec();
            dimeClickerUpgrade.dimeFirst.style.display = 'none';
            DCU.first = false;
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "you've doubled dimes per second";
        } else {
            console.log('testing ');
        }
    } catch(error) {
        console.error('error with dime first double');
    }
})
dimeClickerUpgrade.dimeSecond.addEventListener('click', function() {
    try {
        if(totalCount >= 198.00) {
            totalCount -= 198.00;
            values.dime *= 2;
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.dimePerSec = values.dime;
            upDateTotalPerSec();
            dimeClickerUpgrade.dimeSecond.style.display = 'none';
            DCU.two = false;
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "you've doubled dimes per second";
        } else {
            noMoneyDisplay.textContent = 'need more money!';
            setTimeout(() => {
            noMoneyDisplay.textContent = '';
            }, 1000); 
        }
    } catch(error) {
        console.error('error with dime second');
    }
})
dimeClickerUpgrade.dimeFourth.addEventListener('click', function() {
    try {
        if(totalCount >= 964.00) {
            totalCount -= 964.00;
            values.dime *= 3;
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.dimePerSec = values.dime;
            upDateTotalPerSec();
            dimeClickerUpgrade.dimeFourth.style.display = 'none';
            DCU.four = false;
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "you've tripled dimes per second"
        } else {
            noMoneyDisplay.textContent = 'need more money!';
            setTimeout(() => {
            noMoneyDisplay.textContent = '';
            }, 1000); 
        }
    } catch(error) {
        console.error('error with fourth dime')
    }
})
dimeClickerUpgrade.dimeFifth.addEventListener('click', function() {
    try {
        if(totalCount >= 1124.00) {
            totalCount -= 1124.00;
            values.dime *= 2;
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.dimePerSec = values.dime;
            upDateTotalPerSec();
            dimeClickerUpgrade.dimeFifth.style.display = 'none';
            DCU.five = false;
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "you've doubled dimes per second"
        } else {
            noMoneyDisplay.textContent = 'need more money!';
            setTimeout(() => {
            noMoneyDisplay.textContent = '';
            }, 1000); 
        }
    } catch(error) {
        console.error('error with fifth dime upgrade');
    }
})
//quater
quaterClickerUpgrade.quaterFirst.addEventListener('click', function() {
    try {
        if(totalCount >= 82.00) {
            totalCount -= 82.00;
            values.quarter *= 2;
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.quarterPerSec = values.quarter;
            upDateTotalPerSec();
            quaterClickerUpgrade.quaterFirst.style.display = 'none';
            QCU.first = false;
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "you've doubled quaters per second";
        } else {
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "need more money";
        }
    } catch(error) {
        console.error('first quater double not working');
    }
})
quaterClickerUpgrade.quaterSecond.addEventListener('click', function() {
    try {
        if(totalCount >= 240.00) {
            totalCount -= 240.00;
            values.quarter *= 2;
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.quarterPerSec = values.quarter;
            upDateTotalPerSec();
            quaterClickerUpgrade.quaterSecond.style.display = 'none';
            QCU.two = false;
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "you've doubled quaters per second";
        } else {
            noMoneyDisplay.textContent = 'need more money!';
            setTimeout(() => {
            noMoneyDisplay.textContent = '';
            }, 1000); 
        }
    } catch(error) {
        console.error('error with quater second upgrade');
    }
})
quaterClickerUpgrade.quaterFourth.addEventListener('click', function() {
    try {
        if(totalCount >= 1040.00) {
            totalCount -= 1040.00;
            values.quarter *= 3;
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.quarterPerSec = values.quarter;
            upDateTotalPerSec();
            quaterClickerUpgrade.quaterFourth.style.display = 'none';
            QCU.four = false;
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "you've tripled quater per second";
        } else {
            noMoneyDisplay.textContent = 'need more money!';
            setTimeout(() => {
            noMoneyDisplay.textContent = '';
            }, 1000);
        }
    } catch(error) {
        console.error('error with quater four upgrade');
    }
})
quaterClickerUpgrade.quaterFifth.addEventListener('click', function() {
    try {
        if(totalCount >= 1260.00) {
            totalCount -= 1260.00;
            values.quarter *= 2;
            total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
            perSecData.quarterPerSec = values.quarter;
            upDateTotalPerSec();
            quaterClickerUpgrade.quaterFifth.style.display = 'none';
            QCU.five = false;
            newsContext.style.animation = 'none';
            void newsContext.offsetWidth;
            newsContext.style.animation = 'slideInOut 3s';
            newsContext.textContent = "you've doubled quater per second";
        } else {
            noMoneyDisplay.textContent = 'need more money!';
            setTimeout(() => {
            noMoneyDisplay.textContent = '';
            }, 1000);
        }
    } catch(error) {
        console.error('error with quater fifth upgrade');
    }
})

//bounce the photos/ icons
document.querySelectorAll('.photo').forEach(photo => {
    photo.addEventListener('click', function() {
        const bounce = this.querySelector('img');
        if(bounce) {
            bounce.classList.add('zoom');
            void bounce.offsetHeight;
            setTimeout(() => {
                bounce.classList.remove('zoom');
            }, 100);
        }
    })
})
//assests 
    //vault



let closeVault = document.getElementById('closevault').addEventListener('click', function() {
    document.getElementById('personal-vault').style.display = 'none';
    document.getElementById('assests').style.display = 'flex'; // come back to later 
})
    //markets
let openMarkets = document.getElementById('markets').addEventListener('click', function() {
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.innerText = 'coming soon...!';
})
    //goods
let openGoods = document.getElementById('goods').addEventListener('click', function() {
    if(goodsUnlocked) {
        r.style.display = 'flex';
        document.getElementById('assests').style.display = 'none';
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.textContent = 'goods opened!';
    } else {
        newsContext.style.animation = 'none';
        void newsContext.offsetWidth;
        newsContext.style.animation = 'slideInOut 3s';
        newsContext.innerText = 'unlock nickels first!';
    }
})
let closeGoods = document.getElementById('close-goods').addEventListener('click', function() {
    document.getElementById('small-goods').style.display = 'none';
    document.getElementById('assests').style.display = 'flex';
})

//account 
/*document.getElementById('account').addEventListener('click', function() {
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.innerText = 'coming soon...!';
}) */
document.getElementById('transfermoney').addEventListener('click', function() {
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.innerText = 'coming soon...!';
})


