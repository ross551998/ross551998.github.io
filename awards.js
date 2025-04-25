const firstAward = document.getElementById('one-dollar-award');
const secondAward = document.getElementById('100-penny-award');
const thirdAward = document.getElementById('1,000-mainclick-award');
const fourthAward = document.getElementById('100,000-bank-award');
const fifthAward = document.getElementById('10,000-per-sec-upgrade');
const sixthAward = document.getElementById('10,000,000-bank-award');
const seventhAward = document.getElementById('500-per-sec-upgrade');
const eighthAward = document.getElementById('1,000,000-per-sec-upgrade');
const ninthAward = document.getElementById('aninth');
const tenthAward = document.getElementById('atenth');
const eleventhAward = document.getElementById('aeleventh');
const twelfthAward = document.getElementById('atwelve');
const thirteenthAward = document.getElementById('athirteen');

firstAward.addEventListener('click', function() {
    totalCount += 120.00;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
    firstAward.style.display = 'none';
})
secondAward.addEventListener('click', function() {
    totalCount += 500.00;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
    secondAward.style.display = 'none';
})
thirdAward.addEventListener('click', function() {
    totalCount += 3000.00;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
    thirdAward.style.display = 'none';
})
fourthAward.addEventListener('click', function() {
    totalCount += 15000;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
    fourthAward.style.display = 'none';
})
fifthAward.addEventListener('click', function() {
    totalCount += 120000;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
    fifthAward.style.display = 'none';
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.textContent = 'you make more than apple a second';
})
sixthAward.addEventListener('click', function() {
    totalCount += 260000;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
    sixthAward.style.display = 'none';
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.textContent = "you've made enough to afford a prive plane";
})
seventhAward.addEventListener('click', function() {
    totalCount += 6000;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
    seventhAward.style.display = 'none';
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.textContent = 'you make as much as taylor swift';
})
eighthAward.addEventListener('click', function() {
    totalCount += 100000000;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
    eighthAward.style.display = 'none';
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.textContent = 'you make as much as a small country';
})
ninthAward.addEventListener('click', function() { 
    totalCount += 80000;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
    ninthAward.style.display = 'none';
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
    newsContext.textContent = '50 per sec equal out to 1 billion a year';
})
tenthAward.addEventListener('click', function() {
    totalCount += 2000;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
    tenthAward.style.display = 'none';
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
})
eleventhAward.addEventListener('click', function() {
    totalCount += 5000;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
    eleventhAward.style.display = 'none';
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
})
twelfthAward.addEventListener('click', function() {
    totalCount += 7200;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
    twelfthAward.style.display = 'none';
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
})
thirteenthAward.addEventListener('click', function() {
    totalCount += 22000000;
    total.textContent = `$ ${totalCount.toFixed(2).toLocaleString()}`;
    thirteenthAward.style.display = 'none';
    newsContext.style.animation = 'none';
    void newsContext.offsetWidth;
    newsContext.style.animation = 'slideInOut 3s';
})

