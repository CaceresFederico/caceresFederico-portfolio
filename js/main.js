
const topButton = document.getElementById("topBtn")
const downButton = document.getElementById("downBtn")
window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY >= document.body.offsetHeight)  ){
        topButton.classList.add("btn-hover")
        downButton.classList.remove("btn-hover")
        downButton.classList.add("btn-hover-disabled")
        // downButton.classList.remove("btn-hover")

    }
    if(window.scrollY==0){
        console.log("Estás en el comienzo de la página")
        downButton.classList.add("btn-hover")
        topButton.classList.remove("btn-hover")
        topButton.classList.add("btn-hover-disabled")
    }
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


