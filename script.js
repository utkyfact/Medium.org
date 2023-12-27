const nav = document.querySelector('nav')

const renkDegis = document.querySelector('.renk-degis')

window.addEventListener('scroll',function navbarColor(){
    if(this.window.scrollY > 300){
        nav.classList.add('bg-white')
        nav.classList.remove('bg-warning')
        renkDegis.classList.add('btn-success')
        renkDegis.classList.remove('btn-dark')
    }else{
        nav.classList.remove('bg-white')
        nav.classList.add('bg-warning')
        renkDegis.classList.remove('btn-success')
        renkDegis.classList.add('btn-dark')
    }
})