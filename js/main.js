(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();

})(jQuery);



// (function ($) {
//     "use strict";

//     // Remove WOW animations from listFeature <li> on mobile
//     if (window.innerWidth <= 768) {
//         document.querySelectorAll('.listFeature li').forEach(li => {
//             li.classList.remove('wow', 'fadeInLeft', 'fadeInRight', 'animated');
//             li.style.visibility = 'visible'; // Make sure they're visible
//         });
//     }

//     // Initiate WOW.js (will still work for other elements)
//     new WOW({
//         boxClass: 'wow',
//         animateClass: 'animated',
//         offset: 0,
//         mobile: true,
//         live: true
//     }).init();

// })(jQuery);
