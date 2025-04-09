const firstAward = document.getElementById('one-dollar-award');
const secondAward = document.getElementById('100-penny-award');
const thirdAward = document.getElementById('1,000-mainclick-award');
const fourthAward = document.getElementById('100,000-bank-award');
const fifthAward = document.getElementById('10,000-per-sec-upgrade');
const sixthAward = document.getElementById('10,000,000-bank-award');
const seventhAward = document.getElementById('500-per-sec-upgrade');

firstAward.addEventListener('click', function() {
    totalCount += 600.00;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
    firstAward.style.display = 'none';
})
secondAward.addEventListener('click', function() {
    totalCount += 500.00;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
    secondAward.style.display = 'none';
})
thirdAward.addEventListener('click', function() {
    totalCount += 3000.00;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
    thirdAward.style.display = 'none';
})
fourthAward.addEventListener('click', function() {
    totalCount += 15000;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
    fourthAward.style.display = 'none';
})
fifthAward.addEventListener('click', function() {
    totalCount += 120000;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
    fifthAward.style.display = 'none';
    newsList.style.animation = 'none';
    void newsList.offsetWidth;
    newsList.style.animation = 'slideInOut 3s';
    newsList.textContent = 'you make more than apple a second';
})
sixthAward.addEventListener('click', function() {
    totalCount += 260000;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
    sixthAward.style.display = 'none';
    newsList.style.animation = 'none';
    void newsList.offsetWidth;
    newsList.style.animation = 'slideInOut 3s';
    newsList.textContent = "you've made enough to afford a prive plane";
})
seventhAward.addEventListener('click', function() {
    totalCount += 6000;
    total.textContent = `$ ${totalCount.toFixed(2)}`;
    seventhAward.style.display = 'none';
    newsList.style.animation = 'none';
    void newsList.offsetWidth;
    newsList.style.animation = 'slideInOut 3s';
    newsList.textContent = 'you make as much as taylor swift';
})

