

const smallGoods = {
    sgFirst: document.getElementById('sg-first'),//double all coins values
    sgSecond: document.getElementById('sg-second'),//triple click value of coins only
    sgThird: document.getElementById('sg-third'),//small cash burst
    sgFourth: document.getElementById('sg-fourth'),//add small coin value
    sgFifth: document.getElementById('sg-fifth')//small cash burst
}
const mediumGoods = {
    mgFirst: document.getElementById('mg-first'),
    mgSecond: document.getElementById('mg-second'),
    mgThird: document.getElementById('mg-third'),
    mgFourth: document.getElementById('mg-fourth'),
    mgFifth: document.getElementById('mg-fifth')
}
//error for matching the objects above
Object.entries(smallGoods, mediumGoods).forEach(([key, value]) => {
    if(!value) console.warn(`element with id${key} 'not found` );
})
// for adding any click value
addClickValue(smallGoods.sgSecond, 68.00, 22.25, "you' tripled click value");
buySmallGood(smallGoods.sgFirst, 110.00, 2, "you've doubled all coin values");
buySmallGood(smallGoods.sgFourth, 97.00, 1.5, "you've add a small coin value");
smallCashBurst(smallGoods.sgThird, 115.00, 22.25, "you've added small cash burst");
smallCashBurst(smallGoods.sgFifth, 132.00, 32.25, "you've added small cash burst");

function addClickValue(button, cost, message) {
    const c = 5;
    button.addEventListener('click', () => {
        try {
            if(totalCount >= cost) {
                totalCount -= cost;
                pennyIncrement *= 3;
                nickelIncrement *= 3;
                perSecData.centPerSec = values.cent;
                perSecData.nickelPerSec = values.nickel;
                total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
                upDateTotalPerSec();
                button.style.display = 'none';
                newsList.style.animation = 'none';
                void newsList.offsetWidth;
                newsList.style.animation = 'slideInOut 3s';
                newsList.textContent =  message;
                console.log('working');
            } else {
                newsList.style.animation = 'none';
                void newsList.offsetWidth;
                newsList.style.animation = 'slideInOut 3s';
                newsList.textContent = 'need more money';
            }
        } catch(error) {
            console.error(`error with add click value`, error);
        }
    })
}
function smallCashBurst(button, cost, add, message) {
    try {
        button.addEventListener('click', () => {
            if(totalCount >=  cost) {
                totalCount -= cost;
                setInterval(() => {
                    totalCount += add;
                    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
                    
                    newsList.style.animation = 'none';
                    void newsList.offsetWidth;
                    newsList.style.animation = 'slideInOut 3s';
                    newsList.textContent = `you've added ${add} to your total`;
                }, 100000);
                button.style.display = 'none';
                newsList.style.animation = 'none';
                void newsList.offsetWidth;
                newsList.style.animation = 'slideInOut 3s';
                newsList.textContent = message;
            } else {
                newsList.style.animation = 'none';
                void newsList.offsetWidth;
                newsList.style.animation = 'slideInOut 3s';
                newsList.textContent = 'need more money..';
            }
        })
    } catch(error) {
        console.error(`error with small cash burst`, error);
    }
}
//function itself
function buySmallGood(button, cost, multiplier, message) {
    button.addEventListener('click', () => {
        try {
            if(totalCount >= cost) {
                totalCount -= cost;
                for(let coin in coinsUnlocked) {
                   if(coinsUnlocked[coin]) {
                    console.log(`coin ${coin} is unlocked`);
                    switch (coin) {
                        case 'penny':
                            values.cent *= multiplier,
                            perSecData.centPerSec = values.cent;
                            break;
                        case 'nickel':
                            values.nickel *= multiplier,
                            perSecData.nickelPerSec = values.nickel;
                            break;
                        case 'dime':
                            values.dime *= multiplier,
                            perSecData.dimePerSec = values.dime;
                            break;
                        case 'quarter':
                            values.quarter *= multiplier,
                            perSecData.quarterPerSec = values.quarter;
                            break;
                        case 'halfDollar':
                            values.halfDollar *= multiplier,
                            perSecData.hfDollarPerSec = values.halfDollar;
                            break;
                        default:
                            console.warn(`coin ${coin} is not recognized`);
                            break;
                    }
                   }
                }
                upDateTotalPerSec();
                total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
                button.style.display = 'none';
                newsList.style.animation = 'none';
                void newsList.offsetWidth;
                newsList.style.animation = 'slideInOut 3s';
                newsList.textContent = message;
                console.log('working');
            } else {
                newsList.style.animation = 'none';
                void newsList.offsetWidth;
                newsList.style.animation = 'slideInOut 3s';
                newsList.textContent = 'need more money..';
            }
        } catch(error) {
            console.error(`error with ${button}`, error);
        }
    })
    
}








