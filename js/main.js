window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.fade');
    for (var i = 0; i < items.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = items[i].getBoundingClientRect().top;
        let revealPoint = 100;
        revealTop < windowHeight - revealPoint ?
            items[i].classList.add('active') :
            items[i].classList.remove('active');
    }
})

