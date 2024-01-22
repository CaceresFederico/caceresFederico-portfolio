window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.fade');
    for (var i = 0; i < items.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = items[i].getBoundingClientRect().top;
        let revealPoint = 100;
        revealTop < windowHeight - revealPoint ? items[i].classList.add('active') : items[i].classList.remove('active');
    }
})

// const navButtons = document.querySelectorAll('.nav-item')
// const navItemChangeColor = (e) => {
//     const selectedBtn = e
//     return console.log(e)
// }

// const buttons = document.querySelector('.nav-item')
// buttons.addEventListener('click', (e)=>{
//     console.log(e)
// })

// console.log(buttons)
