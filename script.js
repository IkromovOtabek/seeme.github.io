window.addEventListener('DOMContentLoaded',function (){
    window.addEventListener('scroll',function(){
        const header = document.querySelector('header');
        header.classList.toggle('sticky',this.window.scrollY > 0)
    })

    const menuBtn = document.querySelector('.menu-btn')
    const navigation = document.querySelector('.navigation')
    const navigationItem = this.document.querySelectorAll('.navigation a')

    menuBtn.addEventListener('click',() =>{
        menuBtn.classList.toggle('active')
        navigation.classList.toggle('active')
    })

    navigationItem.forEach(navItem => {
        navItem.addEventListener('click',() => {
            menuBtn.classList.remove('active')
            navigation.classList.remove('active')
        })
    })

    const scrollBtn = this.document.querySelector('.scrollToTop-btn')
    this.window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active',this.window.scrollY > 500)
    })
    scrollBtn.addEventListener('click', () => {
        this.document.body.scrollTop = 0;
        this.document.documentElement.scrollTop = 0;
    })

    this.window.addEventListener('scroll', () => {
        let reveals = this.document.querySelectorAll('.reveal')

        for(let i = 0; i < reveals.length; i++){
            let windowHeight = this.window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;
            
            if(revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active')
            }
        }
    })

    function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

   function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight && rect.bottom >= 0
    );
  }
})