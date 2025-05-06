let DI = [
    "photos/vecteezy_money-bag-with-dollar-sign-on-transparent-background_46437304.png",
    "photos/vecteezy_gold-bar-clipart-design-illustration_9383747.png", 
    "photos/vecteezy_low-poly-bitcoin-gold-coin-icon_44788296.png",
    "photos/coin.png"
];
let mI = document.getElementById('mainicon');
let currentIconIndex = 0;
document.getElementById('iconchange').addEventListener('click', function() {
    currentIconIndex = (currentIconIndex + 1) % DI.length;
    mI.src = DI[currentIconIndex];
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.innerText = 'changed icon';
})
