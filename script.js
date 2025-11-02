// Preloader

function loaderAnimation() {
    var loader = document.querySelector("#loading")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 2200)
}

loaderAnimation()


$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
         // scroll-up button show/hide script
         if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show");
         }else{
            $('.scroll-up-btn').removeClass("show");
         }
    });
    
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings : ["🔥 সাশ্রয়ী শক্তি ব্যবহার", "💨 ধোঁয়ামুক্ত রান্নাঘর জীবন", "🌱 নব উদ্ভাবনী চুলা", "⚡ দ্রুত ও কার্যকরী", "🌟 পরিষ্কার রান্নাঘর অভিজ্ঞতা", "💡 উন্নত প্রযুক্তি ব্যবহার"],

        //strings: ["YouTuber","Entrepreneur", "Humanitarian", "Nature - lover", "Green activist"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });

     var typed = new Typed(".typing-2", {
        strings: ["Entrepreneur", "Humanitarian", "Nature - lover", "Green activist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

/* **********************************************************
    Slide/Carousel Section JS Code
********************************************************** */

let slideIndex = 0;
showSlidesAuto();

function plusSlides(n) {
  showSlidesManual(slideIndex += n);
}

function currentSlide(n) {
  showSlidesManual(slideIndex = n);
}

// Manual control (prev/next/dots)
function showSlidesManual(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active1");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active1");
}

// Auto slide
function showSlidesAuto() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex - 1].style.display = "block";

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active1");
  }

  dots[slideIndex - 1].classList.add("active1");

  setTimeout(showSlidesAuto, 3000); // 3 seconds auto slide
}




