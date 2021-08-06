$(function () {
    var mixer = mixitup(".gallery__inner", {
        load: {
          filter: ".all",
        },
      });

      $(window).resize(function () { 
        if($(window).width() < 1280) {
          $('.mot__item-images').appendTo($('.mot__inner'));
        } else {
          $('.mot__item-images').appendTo($('mot__item-box'));
        }
      });
      
      $(window).scroll(function () { 
        if($(this).scrollTop() > 400) {
          $('.btn-up').fadeIn()
        }else {
          $('.btn-up').fadeOut()
        }
      });
      $(document).ready(function(){
        $('.btn-up').click(function(){
          $('html ,body').animate({scrollTop : 0}, 800);
        })
      })
})

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 50,
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });