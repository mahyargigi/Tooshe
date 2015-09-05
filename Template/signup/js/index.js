$(document).ready(function() {
  $('#signuplink').click(function(e) { // Button which will activate our modal
      console.log("clicked!");
      $('#modal').reveal({ // The item which will be opened with reveal
        animation: 'fade',                   // fade, fadeAndPop, none
      animationspeed: 500,                       // how fast animtions are
      closeonbackgroundclick: true,              // if you click background will modal close?
      dismissmodalclass: 'close'    // the class of a button or element that will close an open modal
    });
  return false;
  });
});

    $(document).ready(function() {
  $('#signuplink2').click(function(e) { // Button which will activate our modal
      $('#modal2').fadeOut();
      $('#modal').reveal({ // The item which will be opened with reveal
        animation: 'fade',                   // fade, fadeAndPop, none
      animationspeed: 500,                       // how fast animtions are
      closeonbackgroundclick: true,              // if you click background will modal close?
      dismissmodalclass: 'close'    // the class of a button or element that will close an open modal

    });
  return false;
  });
});

$(document).ready(function() {
  $('#loginlink').click(function(e) { // Button which will activate our modal
      $('#modal2').reveal({ // The item which will be opened with reveal
        animation: 'fade',                   // fade, fadeAndPop, none
      animationspeed: 500,                       // how fast animtions are
      closeonbackgroundclick: true,              // if you click background will modal close?
      dismissmodalclass: 'close'    // the class of a button or element that will close an open modal
    });
  return false;
  });
});

    $(document).ready(function() {
  $('#loginlink2').click(function(e) { // Button which will activate our modal
      $('#modal').fadeOut();
      $('#modal2').reveal({ // The item which will be opened with reveal
        animation: 'fade',                   // fade, fadeAndPop, none
      animationspeed: 500,                       // how fast animtions are
      closeonbackgroundclick: true,              // if you click background will modal close?
      dismissmodalclass: 'close'    // the class of a button or element that will close an open modal
    });
  return false;
  });
});





var imageArray = ['signup/image/pic1.jpg', 'signup/image/pic2.jpg', 'signup/image/pic3.jpg', 'signup/image/pic4.jpg', 'signup/image/pic5.jpg'];
var sentence = ['Act optimized', 'Act optimized', 'It Could Be Less Boring', "Surprise'em", "Surprise'em" ];
var i=0;
$(function(){
   $("#next").click(
  function() {
            $('#hero').fadeOut(500, function(){

            $('#hero').css('background-image', function () {
            if (i >= imageArray.length-1) {
                    i = -1;
                }

                return 'url(' + imageArray[++i] + ')';
            });
            $("#slider-header").html(sentence[i]);
            $('#hero').fadeIn(500);
        })

  })
  $("#prev").click(
    function(){

            $('#hero').fadeOut(500, function(){

            $('#hero').css('background-image', function () {
            if (i <=1) {
                    i = imageArray.length;
                }

                return 'url(' + imageArray[--i] + ')';
            });
            $("#slider-header").html(sentence[i]);
            $('#hero').fadeIn(500);
        })
  })
});
