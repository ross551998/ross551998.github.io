//adjust the drop down menu
function menu() {
    let content = document.getElementById('hidden');
    let menu = document.getElementById('dropDown');
    if(content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'flex';
        menu.style.top = '98px';
    } else {
        content.style.display = 'none';
        menu.style.top = 0;
    }
}








//scroll effect on section 1
document.addEventListener('scroll', function() {
    //for the background image
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const maxOpacityScroll = windowHeight * 5;
    const newOpacity = 1 - (scroll / maxOpacityScroll);
    document.querySelector('.firstphoto').style.opacity = Math.max(newOpacity, 0.5);
    //increase the text on section1 
    const newTextOpacity = (scroll / windowHeight);
    const fadeTextElements = document.querySelectorAll('.increase');
    fadeTextElements.forEach(element => {
        element.style.opacity = Math.min(newTextOpacity, 1);
    });
    const newDecreaseOpacity = 1 - (scrollY / windowHeight);
    const decreaseElements = document.querySelectorAll('.decrease');
    decreaseElements.forEach(element => {
        element.style.opacity = Math.max(newDecreaseOpacity, 0);
    });
});
//have user stop at 1100 to scroll throught the images then when done the use can continue scrolling
const photos = document.querySelector('.photos');
const maxScrollPosition = 1100; // Vertical scroll position to trigger the horizontal scroll
let horizontalScrollComplete = false;
let textDocument = document.querySelector('section');
let locked = false;
function lockVerticalScroll() {
    let textDocument = document.querySelector('section');
    if (window.scrollY > maxScrollPosition && !horizontalScrollComplete) {
        window.scrollTo(0, maxScrollPosition);
        textDocument.style.opacity = 1;
        if (!locked) {
            enableHorizontalScroll();
            locked = true;
        }
    }
}
function enableHorizontalScroll() {
    photos.addEventListener('wheel', horizontalScrollHandler, { passive: false });
    photos.addEventListener('touchmove', touchMoveHandler, { passive: false });
}
function horizontalScrollHandler(e) {
    if (e.deltaY !== 0) {
        e.preventDefault();
        photos.scrollLeft += e.deltaY; // Use the scroll delta to match the speed of horizontal scrolling
        checkHorizontalScrollCompletion();
    }
}
function touchMoveHandler(e) {
    if (Math.abs(e.changedTouches[0].clientY - e.changedTouches[0].screenY) < Math.abs(e.changedTouches[0].clientX - e.changedTouches[0].screenX)) {
        e.preventDefault(); // Prevent the default vertical scroll behavior
    }
}
function checkHorizontalScrollCompletion() {
    const maxScrollLeft = photos.scrollWidth - photos.clientWidth;
    if (photos.scrollLeft >= maxScrollLeft) {
        horizontalScrollComplete = true;
        setTimeout(unlockVerticalScroll, 200); // Add a slight delay before unlocking vertical scroll
    }
}
function unlockVerticalScroll() {
    window.removeEventListener('scroll', lockVerticalScroll);
    window.onscroll = null; // Re-enable vertical scrolling
    photos.removeEventListener('wheel', horizontalScrollHandler);
    photos.removeEventListener('touchmove', touchMoveHandler);
}
// Initial scroll event listener to lock vertical scroll
window.addEventListener('scroll', lockVerticalScroll);
//next section
















