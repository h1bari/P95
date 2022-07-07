let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
burger.addEventListener('click',function(e){
    burger.classList.toggle('burger-active')
    menu.classList.toggle('menu-active')
    
    // if(menu.classList.contains('menu-active')){
    //     menu.classList.remove('menu-active')
    // }else{
    //     menu.classList.add('menu-active')
    // }

})


Fancybox.bind("#gallery a", {
    groupAll : true, 
    
  });

const myCarousel = new Carousel(document.querySelector(".carousel"), {
    'center' : true,

  });