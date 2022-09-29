
function openPara(evt) {
            
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
                

            }
            evt.currentTarget.className += " active";
            
            
        }

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints:{
    1000:{
        slidesPerView: 3,
    },
    600:{
        slidesPerView:2,
    },
  
  }
});
const burger = document.getElementById("burger")
const sideNav = document.querySelector(".side-nav")
const links = document.querySelectorAll(".link")

burger.addEventListener("click", function(){
    this.classList.toggle("rotate")
    sideNav.classList.toggle("translate")
})

window.addEventListener("resize", function(){
    if(window.innerWidth> 768){
        burger.classList.remove("rotate")
        sideNav.classList.remove("translate")
    }
})

// for(let link of links){
//     link.addEventListener("click", function(){
//         for(var x of links){
//             x.classList.remove("selected")
//         }
//         this.classList.add("selected")
//     })
// }

// change link style according to current section

const sections = document.querySelectorAll("section")
window.addEventListener("scroll", function(){
    let current = ""
    for(let section of sections){
        if(window.pageYOffset >= section.offsetTop){
        current = section.getAttribute("id")
        }
    } 

    // close site navigation

    setTimeout(function(){
        sideNav.classList.remove("translate")
        burger.classList.remove("rotate")
    }, 300)

    

})
