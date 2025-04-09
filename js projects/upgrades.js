let newsList = document.getElementById('news');
let r = document.getElementById('small-goods');
let goodsUnlocked = false;





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
futureUpgrade(halfDollarClickerUpgrade.hdFirst, 160.00, 2, "you've doubled half-dollar per second");
futureUpgrade(halfDollarClickerUpgrade.hdSecond, 430.00, 3, "you've tripled the half-dollar per second ");
futureUpgrade(halfDollarClickerUpgrade.hdFourth, 1290.00, 2, "you've double half-dollar per second");
futureUpgrade(halfDollarClickerUpgrade.hdFifth, 1452.00, 3, "you've tripled half-dollar per seccond");
//new way more advanced and more efficent

function futureUpgrade(button, cost, multiplier, message) {
    button.addEventListener('click', () => {
        try {
            if(totalCount >= cost) {
                totalCount -= cost;
                values.halfDollar *= multiplier;
                total.textContent = `$ ${totalCount.toFixed(2)}`;
                perSecData.halfDPerSec = values.halfDollar;
                upDateTotalPerSec();
                button.style.display = 'none';
                newsList.style.animation = 'none';
                void newsList.offsetWidth;
                newsList.style.animation = 'slideInOut 3s';
                newsList.textContent = message;
                console.log('working');
            } else {
                button.style.display = 'none';
                newsList.style.animation = 'none';
                void newsList.offsetWidth;
                newsList.style.animation = 'slideInOut 3s';
                newsList.textContent = message;
                console.log('not working');
            }
        } catch(error) {
            console.error(`error with ${button.id} upgrade`, error);
        }
    })
}


//error for finding anything thats not right in the objects above
Object.entries(halfDollarClickerUpgrade, quaterClickerUpgrade, dimeClickerUpgrade, nickeClickerUpgrade).forEach(([key, value]) => {
    if(!value) console.warn(`element with id${key} 'not found` );
})
//functions for upgrades



//nickel
nickeClickerUpgrade.nickelFirst.addEventListener('click',function() {
    try {
        if(totalCount >= 35.00) {
            totalCount -= 35.00;
            totalCount = values.nickel *= 2;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.nickelPerSec = values.nickel;
            upDateTotalPerSec();
            nickeClickerUpgrade.nickelFirst.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = "you've doubled nickels per second";
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
            totalCount = values.nickel *= 2;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.nickelPerSec = values.nickel;
            upDateTotalPerSec();
            nickeClickerUpgrade.nickelSecond.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = "you've doubled nickels per second";
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
            totalCount = values.nickel *= 2;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.nickelPerSec = values.nickel;
            upDateTotalPerSec();
            nickeClickerUpgrade.nickelFourth.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = "you've doubled nickels per second";
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
            totalCount = values.nickel *= 2;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.nickelPerSec = values.nickel;
            upDateTotalPerSec();
            nickeClickerUpgrade.nickelFifth.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = "you've doubled nickels per second";
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
            totalCount = values.dime *=2;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.dimePerSec = values.dime;
            upDateTotalPerSec();
            dimeClickerUpgrade.dimeFirst.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = "you've doubled dimes per second";
        } else {
            noMoneyDisplay.textContent = 'need more money!';
            setTimeout(() => {
            noMoneyDisplay.textContent = '';
            }, 1000); 
        }
    } catch(error) {
        console.error('error with dime first double');
    }
})
dimeClickerUpgrade.dimeSecond.addEventListener('click', function() {
    try {
        if(totalCount >= 198.00) {
            totalCount -= 198.00;
            totalCount = values.dime *= 2;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.dimePerSec = values.dime;
            upDateTotalPerSec();
            dimeClickerUpgrade.dimeSecond.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = "you've doubled dimes per second";
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
            totalCount = values.dime *= 3;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.dimePerSec = values.dime;
            upDateTotalPerSec();
            dimeClickerUpgrade.dimeFourth.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = "you've tripled dimes per second"
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
            totalCount = values.dime *= 2;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.dimePerSec = values.dime;
            upDateTotalPerSec();
            dimeClickerUpgrade.dimeFifth.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = "you've doubled dimes per second"
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
            totalCount = values.quarter *= 2;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.quarterPerSec = values.quarter;
            upDateTotalPerSec();
            quaterClickerUpgrade.quaterFirst.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = "you've doubled quaters per second";
        } else {
            noMoneyDisplay.textContent = 'need more money!';
            setTimeout(() => {
            noMoneyDisplay.textContent = '';
            }, 1000); 
        }
    } catch(error) {
        console.error('first quater double not working');
    }
})
quaterClickerUpgrade.quaterSecond.addEventListener('click', function() {
    try {
        if(totalCount >= 240.00) {
            totalCount -= 240.00;
            totalCount = values.quarter *= 2;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.quarterPerSec = values.quarter;
            upDateTotalPerSec();
            quaterClickerUpgrade.quaterSecond.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = "you've doubled quaters per second";
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
            totalCount = values.quarter *= 3;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.quarterPerSec = values.quarter;
            upDateTotalPerSec();
            quaterClickerUpgrade.quaterFourth.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = "you've tripled quater per second";
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
            totalCount = values.quarter *= 2;
            total.textContent = `$ ${totalCount.toFixed(2)}`;
            perSecData.quarterPerSec = values.quarter;
            upDateTotalPerSec();
            quaterClickerUpgrade.quaterFifth.style.display = 'none';
            newsList.style.animation = 'none';
            void newsList.offsetWidth;
            newsList.style.animation = 'slideInOut 3s';
            newsList.textContent = "you've doubled quater per second";
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
//half-dollar










































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
    newsList.style.animation = 'none';
    void newsList.offsetWidth;
    newsList.style.animation = 'slideInOut 3s';
    newsList.innerText = 'coming soon...!';
})
    //goods
let openGoods = document.getElementById('goods').addEventListener('click', function() {
    if(goodsUnlocked) {
        r.style.display = 'flex';
        document.getElementById('assests').style.display = 'none';
        newsList.style.animation = 'none';
        void newsList.offsetWidth;
        newsList.style.animation = 'slideInOut 3s';
        newsList.textContent = 'goods opened!';
    } else {
        newsList.style.animation = 'none';
        void newsList.offsetWidth;
        newsList.style.animation = 'slideInOut 3s';
        newsList.innerText = 'unlock nickels first!';
    }
    
    
    
    
})
let closeGoods = document.getElementById('close-goods').addEventListener('click', function() {
    document.getElementById('small-goods').style.display = 'none';
    document.getElementById('assests').style.display = 'flex';
})

//account 
document.getElementById('account').addEventListener('click', function() {
    newsList.style.animation = 'none';
    void newsList.offsetWidth;
    newsList.style.animation = 'slideInOut 3s';
    newsList.innerText = 'coming soon...!';
})
document.getElementById('transfermoney').addEventListener('click', function() {
    newsList.style.animation = 'none';
    void newsList.offsetWidth;
    newsList.style.animation = 'slideInOut 3s';
    newsList.innerText = 'coming soon...!';
})


