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
  