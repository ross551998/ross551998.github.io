

const smallGoods = {
    sgFirst: {
        element: document.getElementById('sg-first'),//double all coins values
        coinType: 'all',
        cost: 110.00
    },
    sgSecond: {
        element: document.getElementById('sg-second'),//triple value of coins only
        coinType: 'all',
        cost: 68.00
    },
    sgThird: {
       element: document.getElementById('sg-third'),//small cash burst
       coinType: 'cash',
       cost: 115.00
    },
    sgFourth:{
        element: document.getElementById('sg-fourth'),//add small coin value
        coinType: 'all',
        cost: 97.00
    },
    sgFifth: {
       element: document.getElementById('sg-fifth'),//small cash burst
       coinType: 'cash',
        cost: 115.00

    },
    sgSixth: {
        element: document.getElementById('sg-sixth'),//add small coin value
        coinType: 'dime',
        cost: 142.00
    }
}
const mediumGoods = {
    mgFirst:{
        element: document.getElementById('mg-first'),
        coinType: 'cash',
        cost: 25-.00
    },
    mgSecond: {
       element: document.getElementById('mg-second'),
       coinType: 'all',
       cost: 420.00
    },
    mgThird: {
       element: document.getElementById('mg-third'),
       coinType: 'cash',
       cost: 500.00
    },
    mgFourth: {
        element: document.getElementById('mg-fourth'),
        coinType: 'cash',
        cost: 380.00
    },
    mgFifth: {
        element: document.getElementById('mg-fifth'),
        coinType: 'cash',
        cost: 620.00
    } 
}
//error for matching the objects above
Object.entries(smallGoods, mediumGoods).forEach(([key, value]) => {
    if(!value) console.warn(`element with id${key} 'not found` );
})
let StoredDM = [23.25, 32.25, 112.00, 123.00];
let goodsB = {
    sgOne: true,
    sgTwo: false,
    sgThree: false,
    sgFour: false,
    SgFive: false,
    SgSix: false,
    MgOne: false,
    MgTwo: false,
    MgThree: false,
    MgFour: false,
    MgFive: false,
}

const allGood =[smallGoods, mediumGoods];
allGood.forEach(goodsGroup => {
    for(let key in goodsGroup) {
        const { element, coinType, cost} = goodsGroup[key];
        element.addEventListener('click', () => {
                try {
                    if(coinType !== 'all' && coinType !== 'cash' && !coinsUnlocked[coinType]) {
                        safeNewsUpdate(`${coinType} needs to be unlocked first`);
                        return;
                    }
                    if(totalCount >= cost) {
                        totalCount -= cost;
                        if(key === 'sgFirst') {
                            for(let coin in coinsUnlocked) {
                                if(coinsUnlocked[coin]) {
                                    console.log(`coin ${coin} is unlocked`);
                                    switch(coin) {
                                        case 'penny':
                                            values.cent *= 2,
                                            perSecData.centPerSec = values.cent;
                                            break;
                                        case 'nickel':
                                            values.nickel *= 2,
                                            perSecData.nickelPerSec = values.nickel;
                                            break;
                                        case 'dime':
                                            values.dime *= 2,
                                            perSecData.dimePerSec = values.dime;
                                            break;
                                        case 'quarter':
                                            values.quarter *= 2,
                                            perSecData.quarterPerSec = values.quarter;
                                            break;
                                        case 'halfDollar':
                                            values.halfDollar *= 2,
                                            perSecData.halfDPerSec = values.halfDollar;
                                        default:
                                            console.log('testing first goods');
                                            break;
        
                                    }
                                }
                            }
                            goodsB.sgOne = false;
                            element.style.display = 'none';
                             
                        }
                        if(key === 'sgSecond') {
                            for(let coin in coinsUnlocked) {
                                if(coinsUnlocked[coin]) {
                                    console.log(`coin ${coin} is unlocked`);
                                    switch(coin) {
                                        case 'penny':
                                            values.cent *= 3,
                                            perSecData.centPerSec = values.cent;
                                            break;
                                        case 'nickel':
                                            values.nickel *= 3,
                                            perSecData.nickelPerSec = values.nickel;
                                            break;
                                        case 'dime':
                                            values.dime *= 3,
                                            perSecData.dimePerSec = values.dime;
                                            break;
                                        case 'quarter':
                                            values.quarter *= 3,
                                            perSecData.quarterPerSec = values.quarter;
                                            break;
                                        case 'halfDollar':
                                            values.halfDollar *= 3,
                                            perSecData.halfDPerSec = values.halfDollar;
                                            break;
                                        default:
                                            console.log('testing first goods');
                                            break;
        
                                    }
                                }
                            }
                            goodsB.sgTwo = false;
                            element.style.display = 'none';
                        }
                        if(key === 'sgThird') {
                            console.log('its getting called');
                            setInterval(() => {
                                totalCount += 23.25;
                                newsContext.style.animation = 'none';
                                void newsContext.offsetWidth;
                                newsContext.style.animation = 'slideInOut 3s';
                                newsContext.textContent = `you've added ${StoredDM[0]}`;
                                total.textContent = `$ ${totalCount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`
                            }, 20000)
                           element.style.display = 'none';
                           goodsB.sgThree = false; 
                        }
                        if(key === 'sgFourth') {
                            for(let coin in coinsUnlocked) {
                                if(coinsUnlocked[coin]) {
                                    console.log(`coin ${coin} is unlocked`);
                                    switch(coin) {
                                        case 'penny':
                                            values.cent *= 2,
                                            perSecData.centPerSec = values.cent;
                                            break;
                                        case 'nickel':
                                            values.nickel *= 2,
                                            perSecData.nickelPerSec = values.nickel;
                                            break;
                                        case 'dime':
                                            values.dime *= 2,
                                            perSecData.dimePerSec = values.dime;
                                            break;
                                        case 'quarter':
                                            values.quarter *= 2,
                                            perSecData.quarterPerSec = values.quarter;
                                            break;
                                        case 'halfDollar':
                                            values.halfDollar *= 2,
                                            perSecData.halfDPerSec = values.halfDollar;
                                            break;
                                        default:
                                            console.log('testing first goods');
                                            break;
        
                                    }
                                }
                            }
                            goodsB.sgFour = false;
                            element.style.display = 'none';
                        }
                        if(key === 'sgFifth') {
                            console.log('another cash purse');
                            setInterval(() => {
                                totalCount += 32.25;
                                newsContext.style.animation = 'none';
                                void newsContext.offsetWidth;
                                newsContext.style.animation = 'slideInOut 3s';
                                newsContext.textContent = `you've added ${StoredDM[1]}`;
                                total.textContent = `$ ${totalCount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
                            }, 25000)
                            element.style.display = 'none';
                            goodsB.SgFive = false;
                        }
                        if(key === 'sgSixth') {
                            dimeIncrement *= 2;
                            element.style.display = 'none';
                            goodsB.SgSix = false;
                        }
                        if(key === 'mgFirst') {
                            setInterval(() => {
                                totalCount += 112.00;
                                newsContext.style.animation = 'none';
                                void newsContext.offsetWidth;
                                newsContext.style.animation = 'slideInOut 3s';
                                newsContext.textContent = `you've added ${StoredDM[2]}`;
                                total.textContent = `$ ${totalCount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
                            }, 35000)
                            element.style.display = 'none';
                            goodsB.MgOne = false;
                        }
                        if(key === 'mgSecond') {
                            for(let k in coinsUnlocked) {
                                if(coinsUnlocked[k]) {
                                    console.log(`coins ${k} is unlocked`);
                                    switch(coin) {
                                        case 'penny':
                                            values.cent *= 3,
                                            perSecData.centPerSec = values.cent;
                                            break;
                                        case 'nickel':
                                            values.nickel *= 3,
                                            perSecData.nickelPerSec = values.nickel;
                                            break;
                                        case 'dime':
                                            values.dime *= 3,
                                            perSecData.dimePerSec = values.dime;
                                            break;
                                        case 'quarter':
                                            values.quarter *= 3,
                                            perSecData.quarterPerSec = values.quarter;
                                            break;
                                        case 'halfDollar':
                                            values.halfDollar *= 3,
                                            perSecData.halfDPerSec = values.halfDollar;
                                            break;
                                        case 'dollar':
                                            values.dollar *= 3,
                                            perSecData.dPerSec = values.dollar;
                                            break;
                                        case 'fiveDollar':
                                            values.fiveDollar *= 3,
                                            perSecData.fiveDPerSec = values.fiveDollar;
                                            break;
                                        case 'tenDollar':
                                            values.tenDollar *= 3,
                                            perSecData.tenDPerSec = values.tenDollar;
                                            break;
                                        case 'twentyDollar':
                                            values.twentyDollar *= 3,
                                            perSecData.twentyDPerSec = values.twentyDollar;
                                            break;
                                        case 'fiftyDollar':
                                            values.fiftyDollar *= 3,
                                            perSecData.fiftyDPersec = values.fiftyDollar;
                                            break;
                                        case 'hundredDollar':
                                            values.hundredDollar *= 3,
                                            perSecData.hundredDPersec = values.hundredDollar;
                                            break;
                                        default:
                                            console.log('testing first goods');
                                            break;
                                    }
                                }
                            }
                            element.style.display = 'none';
                            goodsB.MgTwo = false;
                        }
                        if(key === 'mgThird') {
                            values.main = 12.00;
                            element.style.display = 'none';
                            goodsB.MgThree = false;
                        }
                        if(key === 'mgFourth') {
                            for(let key in coinsUnlocked) {
                                if(coinsUnlocked[key]) {
                                    console.log(`item ${key} is unlocked`);
                                    switch(key) {
                                        case 'dollar':
                                            values.dollar *= 2,
                                            perSecData.dPerSec = values.dollar;
                                            break;
                                        case 'fiveDollar': 
                                            values.fiveDollar *= 2,
                                            perSecData.fiveDPerSec = values.fiveDollar;
                                            break;
                                        case 'tenDollar':
                                            values.tenDollar *= 2,
                                            perSecData.tenDPerSec = values.tenDollar;
                                            break;
                                        default:
                                            console.log(`testing fourth medium goods`);

                                    }
                                }
                            }
                            element.style.display = 'none';
                            goodsB.MgFour = false;
                        }
                        if(key === 'mgFifth') {
                            setInterval(() => {
                                totalCount += 123.00;
                                newsContext.style.animation = 'none';
                                void newsContext.offsetWidth;
                                newsContext.style.animation = 'slideInOut 3s';
                                newsContext.textContent = `you've added ${StoredDM[3]}`;
                                total.textContent = `$ ${totalCount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
                            }, 45000)
                            element.style.display = 'none';
                            goodsB.MgFive = false;
                        }
                        upDateTotalPerSec();
                        safeNewsUpdate(`upgrade applied: ${key}`);
                    } else {
                        safeNewsUpdate('need more money');
                    }
                } catch(err) {
                    console.error(`error applying ${key}`, err);
                }
        })
        }
})


