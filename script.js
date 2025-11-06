// ===== Preloader Start

function loaderAnimation() {
  var loader = document.querySelector("#loading");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 2500);
}

loaderAnimation();

// ===== Preloader End



// ===== Video Gallery Script Code Start
const videoList = document.querySelectorAll('.video-list .vid');
    const mainFrame = document.getElementById('mainVideoFrame');
    const mainTitle = document.getElementById('mainVideoTitle');

    videoList.forEach(vid => {
      vid.addEventListener('click', () => {
        // active class remove from all
        videoList.forEach(item => item.classList.remove('active'));
        vid.classList.add('active');

        // change main video and title
        mainFrame.src = vid.getAttribute('data-src');
        mainTitle.textContent = vid.getAttribute('data-title');
      });
    });
// ===== Video Gallery Script Code End





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

});







// Generate 50 random particles
const particleContainer = document.querySelector(".particles");
const particleCount = 50;

for(let i=0; i<particleCount; i++){
    const span = document.createElement("span");

    // Random size between 5px to 15px
    const size = Math.random() * 10 + 5;
    span.style.width = `${size}px`;
    span.style.height = `${size}px`;

    // Random horizontal position
    span.style.left = `${Math.random() * 100}%`;

    // Random animation duration
    const duration = Math.random() * 15 + 10; // 10s to 25s
    span.style.animationDuration = `${duration}s`;

    // Random background color & glow
    const hue = Math.floor(Math.random() * 360);
    span.style.background = `hsl(${hue}, 80%, 60%)`;
    span.style.boxShadow = `0 0 ${size}px hsl(${hue}, 80%, 60%)`;

    particleContainer.appendChild(span);
}







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




