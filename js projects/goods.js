

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
addClickValue(smallGoods.sgSecond, 150.0, "you' tripled click value");

function addClickValue(button, cost, message) {
    const c = 5;
    button.addEventListener('click', () => {
        try {
            if(totalCount >= cost) {
                totalCount -= cost;
                pennyIncrement *= 3;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                perSecData.centPerSec = values.cent;
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
smallGoods.sgThird.addEventListener('click', () => {
    try {
        if(totalCount >= 115.00) {
            totalCount -= 115.00;
            setInterval(() => {
                totalCount += 22.25;
                newsList.style.animation = 'none';
                void newsList.offsetWidth;
                newsList.style.animation = 'slideInOut 3s';
                newsList.textContent = 'here\'s $22.25';
            }, 100000);
            smallGoods.sgThird.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = 'you\'ve activated small cash burst';
        } else {
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = 'need more money..';
        }
    } catch(error) {
        console.error(`error with first cash burst`, error);
    }
})
smallGoods.sgFifth.addEventListener('click', () => {
    try {
        if(totalCount >= 132.00) {
            totalCount -= 132.00;
            setInterval(() => {
                totalCount += 32.25;
                newsList.style.animation = 'none';
                void newsList.offsetWidth;
                newsList.style.animation = 'slideInOut 3s';
                newsList.textContent = 'here\'s $32.25';
            }, 100000);
            smallGoods.sgFifth.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = 'you\'ve activated small cash burst';
        } else {
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = 'need more money..';
        }
    } catch(error) {
        console.error(`error with second cash burst`, error);
    }
})
//things for doubling the coin values, can add more if want
buySmallGood(smallGoods.sgFirst, 110.0, 2, "you've doubled all coin values");
buySmallGood(smallGoods.sgFourth, 97.00, 1.5, "you've add a small coin value");
//function itself
function buySmallGood(button, cost, multiplier, message) {
    const n = 5;
    button.addEventListener('click', () => {
        try {
            if(totalCount >= cost) {
                totalCount -= cost;
                const firstEntries = Object.entries(values).slice(0, n);
                for(const [key, value] of firstEntries) {
                    if(key in values) {
                        firstEntries[key] = value * multiplier;
                        console.log('formula working');
                    }
                }
                upDateTotalPerSec();
                button.style.display = 'none';
                newsList.style.animation = 'none';
                void newsList.offsetWidth;
                newsList.style.animation = 'slideInOut 3s';
                newsList.textContent = message;
                console.log('function working');
            }
             else {
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








