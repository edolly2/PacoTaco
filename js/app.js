$(document).ready(() => {
  $(".hamburger-icon").on("click", () => {
    $(".nav-cont").slideToggle(700);
  });
});

$(document).ready(() => {
  $(".hamburger-icon").on(
    "mouseover",
    () => {
      $(this).attr("src", "assets/icons/dots-menu.svg");
    },
    function () {
      $(this).attr("src", "assets/icons/dots-menu-green.svg");
    }
  );

  $(".hamburger-icon").on(
    "mouseout",
    () => {
      $(this).attr("src", "assets/icons/dots-menu-green.svg");
    },
    function () {
      $(this).attr("src", "assets/icons/dots-menu.svg");
    }
  );
});

// const navLink = $(".nav-link");
// $(document).ready(() => {
//   $(".nav-item").on('mouseenter mouseleave', (event) => {
//     if ($(event.target).hasClass("home-item")) {
//       $(".home-link-burrito").toggle();
//     }
//     if ($(event.target).hasClass("about-item")) {
//       $(".about-link-burrito").stop(true, true).show();
//     }
//     if ($(event.target).hasClass("menu-item")) {
//       $(".menu-link-burrito").stop(true, true).show();
//     }
//     if ($(event.target).hasClass("order-item")) {
//       $(".order-link-burrito").stop(true, true).show();
//     }
//     if ($(event.target).hasClass("locations-item")) {
//       $(".locations-link-burrito").stop(true, true).show();
//     }
//     if ($(event.target).hasClass("contact-item")) {
//       $(".contact-link-burrito").stop(true, true).show();
//     }

// })

//     $(".nav-item").on("mouseleave", (event) => {
//         // if ($(event.target).hasClass("home-item")) {
//         //   $(".home-link-burrito").stop(true, true).hide();
//         // }
//         if ($(event.target).hasClass("about-item")) {
//           $(".about-link-burrito").stop(true, true).hide();
//         }
//         if ($(event.target).hasClass("menu-item")) {
//           $(".menu-link-burrito").stop(true, true).hide();
//         }
//         if ($(event.target).hasClass("order-item")) {
//           $(".order-link-burrito").stop(true, true).hide();
//         }
//         if ($(event.target).hasClass("locations-item")) {
//           $(".locations-link-burrito").stop(true, true).hide();
//         }
//         if ($(event.target).hasClass("contact-item")) {
//           $(".contact-link-burrito").stop(true, true).hide();
//         }
//   });
// });
$(document).ready(() => {
  $("#slideshow > div:gt(0)").hide();

  setInterval(function () {
    $("#slideshow > div:first")
      .fadeOut(1100)
      setTimeout(() => {
        $("#slideshow > div:first")
          .next()
          .fadeIn(1100)
          .end()
          .appendTo("#slideshow");
        },1100)
  }, 4400);
});
// $(document).ready(() => {
//     $("#slideshow > div:gt(0)").hide();
  
//     setInterval(function () {
//       $("#slideshow > div:first")
//         .toggleClass('fade-out')
//         .next()
//         .fadeIn(1000)
//         .end()
//         .appendTo("#slideshow");
//     }, 4000);
//   });
  
$(document).ready(function() {
  // $(".popup-backdrop").removeClass('hidden');
    // $(".popup-backdrop").fadeTo(200, 1);
    if($(".popup-backdrop").hasClass('is-visible') && $(window).width() > 1025) {
      $('body').css({'overflow': 'hidden', 'padding-right': '29px'});
    }
    else if($(".popup-backdrop").hasClass('is-visible') && $(window).width() < 1025) {
      $('body').css('overflow', 'hidden');
    }
    else {
    $(".popup-backdrop").removeClass('is-visible');
    $(".popup-backdrop").addClass('is-hidden');
      $('body').css({'overflow-x': 'hidden', 'overflow-y': 'auto', 'padding': '1.4rem'});
    }
  $(".popup-btn").click(function() {
    if(!$('.popup-backdrop').hasClass('is-hidden')) {
      $(".popup-backdrop").addClass('is-hidden');
      $(".popup-backdrop").removeClass('is-visible');
      $('body').css({'overflow-x': 'hidden', 'overflow-y': 'auto', 'padding': '1.4rem'});
    }
  });
});

// const showModal = function (e) {
//   modal.classList.toggle("hidden");

//   if (!modal.classList.contains("hidden")) {
//       // Disable scroll
//       body.style.overflow = "hidden";
//   } else {
//       // Enable scroll
//       body.style.overflow = "auto";
//   }
// };
// $(document).ready(() => {

//   if ($(window).width() < 960) {
//     alert('Less than 960');
//   }
//   else {
//     alert('More than 960');
//   }
  
//   $(window).resize(function() {
//     if ($(window).width() < 960) {
//       alert('Less than 960');
//     }
//  else {
//    alert('More than 960');
//   }
// });
// })