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


