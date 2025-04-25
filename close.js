//open and clost side nav bar
function openFunction() {
    let o = document.getElementById('content');
    if(o.style.display === 'none' || o.style.display === '') {
        o.style.display = 'flex';
        setTimeout(() => {
            o.classList.add('show');
        }, 10);
        console.log('open');
    } else {
        o.classList.remove('show');
        setTimeout(() => {
            o.style.display = 'none';
        }, 500);
        console.log('close');
    }
}
