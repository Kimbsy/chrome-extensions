$(document).ready(function() {

  var up = false;

  // add turrets (hidden)
  $('body').append('<div class="turret-container turret-left"><div class="turret">TURRET</div></div><div class="turret-container turret-right"><div class="turret">TURRET</div></div>');

  // slide up turrets with ctrl+alt+shift+p
  $(document).keydown(function(e) {
    if (e.ctrlKey && e.altKey && e.shiftKey && e.keyCode == 80) {
      if (!up) {
        // put em up
        $('.turret-right .turret').animate({top: '-=100'});
        $('.turret-left .turret').animate({top: '-=100'});
        // need to sort out nicer rotation?
        $('.turret-container.turret-right').rotate({animateTo:45});
        $('.turret-container.turret-left').rotate({animateTo:-45});

        up = true;
      }
      else {
        // put em down
        // need to sort out nicer rotation?
        $('.turret-container.turret-right').rotate({animateTo:0});
        $('.turret-container.turret-left').rotate({animateTo:0});
        $('.turret-right .turret').animate({top: '+=100'});
        $('.turret-left .turret').animate({top: '+=100'});

        up = false;
      }
    }
  });

  // launch missiles on click
  $(document).on('click', function(e) {
    // only fire if turrets are up
    if (up) {
      // stop any actualy clicking action
      e.preventDefault();

      // set target variables
      var mouseX = e.pageX - $(document).scrollLeft();
      var mouseY = e.pageY - $(document).scrollTop();
      
      // set page dimensions
      var w = $(window).width();
      var h = $(window).height();

      var targX = w - mouseX;
      var targY = h - mouseY;

      var targElem = e.target;

      // create missiles
      $('body').append('<div class="missile-container turret-right"><div class="missile">MISSILE</div></div><div class="missile-container turret-left"><div class="missile">MISSILE</div></div>');

      // animate missiles (then delete)
      // right missile goes to width - mouse positionX
      $('.missile-container.turret-right').animate({bottom: targY, right: targX}, 500, 'linear', function() {
        // remove missile
        $(this).remove();
      });
      // left missile goes to mouse positionX
      $('.missile-container.turret-left').animate({bottom: targY, left: mouseX}, 500, 'linear', function() {
        // remove missile
        $(this).remove();
        // add explosion
        $('body').append('<div class="splode" style="top:'+mouseY+'px;left:'+mouseX+'px;">POW</div>');
        $('.splode').animate({'font-size': '50px', left: '-=50', top: '-=20'}, 200, 'linear', function() {
          // remove explsion
          $(this).remove();
        });
        // remove destroyed element (as long as it isn't the page itself)
        if (targElem.nodeName != 'HTML') {
          targElem.remove();
        }
      });
    }
  });

  // track mouse position
  $(document).mousemove(function(e) {
    if (up) {
      // set page dimensions
      var w = $(window).width();
      var h = $(window).height();
      // set target variables
      var mouseX = e.pageX - $(document).scrollLeft();
      var mouseY = e.pageY - $(document).scrollTop();

      // calculate position to point at
      var targX = w - mouseX;
      var targY = h - mouseY;

      // calculate angles
      var rightAngle = -(Math.atan(targX / targY) * (180 / Math.PI)) + 90;
      var leftAngle = (Math.atan(mouseX / targY) * (180 / Math.PI)) - 90;

      // rotate turrets
      $('.turret-container.turret-right').rotate({animateTo:rightAngle});
      $('.turret-container.turret-left').rotate({animateTo:leftAngle});
    }
  });
});
