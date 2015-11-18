/**
 * Created by User on 11/2/15.
 */
$(document).ready(function(){
//    $('.search-input').on('',function(){
           var availableTags = [
          "ActionScript",
          "AppleScript",
          "Asp",
          "BASIC",
          "C",
          "C++",
          "Clojure",
          "COBOL",
          "ColdFusion",
          "Erlang",
          "Fortran",
          "Groovy",
          "Haskell",
          "Java",
          "JavaScript",
          "Lisp",
          "Perl",
          "PHP",
          "Python",
          "Ruby",
          "Scala",
          "Scheme"
        ];
        $( ".search-input" ).autocomplete({
          source: availableTags ,
          select: function(event , ui){
//              1st way for passing the input value
              search_select(ui.item.value);
          }
        });
    var input1 = document.getElementById('specific-region-input');
    $('#specific-region-input').geocomplete().bind("geocode:result", function(event, click){
        $('.regions').append('<div class="alert alert-dismissable alert-material-green-A100"><span><strong>'+click.address_components[0].long_name+'</strong></span><span><button type="button" class="close" data-dismiss="alert">×</button></span></div>');
        $(this).val('');
    });
    //              2nd way for passing the input value
    $('.search-image-btn').on('click',function(){
//        console.log("test");
        search_select($('.search-input').val());
    });
    //              3rd way for passing the input value
    $('.search-input').keypress(function(e){
        var key = e.which ;
        if(key == 13){
            search_select($(this).val());
//             console.log("enter");
        }
        else{
            if($('.slider-row').css('display')==='block'){
                $('.slider-row').animate({height: "0px"},"slow",function(){
                    $(this).css('display','none');
                    console.log("animate called!");
                });
            }
        }

    });
    function search_select(input){
        console.log(input);
        if(true){
            $('.slider-row').css('display','block');
            $('.or-div').css('display','block');
        }
    }
    var src1 = $('.first-search-image').attr('src');
    var src2 = $('.second-search-image').attr('src');
    var newSrc = 'img/new-order/camera.png';
    var newlabel = 'cameraaa';
    $('.prev-arrow').on('click',function(){
       $('.first-search-image-label').html($('.second-search-image-label').html());
       $('.second-search-image-label').html(newlabel);
       $('.first-search-image').attr('src',$('.second-search-image').attr('src'));
       $('.second-search-image').attr('src',newSrc);

    });
    $('.next-arrow').on('click',function(){
       $('.second-search-image-label').html($('.first-search-image-label').html());
       $('.first-search-image-label').html(newlabel);
       var src1 = $('.first-search-image').attr('src');
       var src2 = $('.second-search-image').attr('src');
       var newSrc = 'img/new-order/camera.png';


       $('.second-search-image').attr('src',$('.first-search-image').attr('src'));
       $('.first-search-image').attr('src',newSrc);
    });
    $('.search-image').on('click',function(){
        $('.slider-row').animate({height: "0px"},"slow",function(){
            $(this).css('display','none');
        });
        $('.or-div').animate({height: "0px"},"slow",function(){
            $(this).css('display','none');
        });
    });
    $('.first').on('click',function(){
        var name = $('.first-search-image-label').html();
        var picsrc = $('.first-search-image').attr('src');
        $('.what-u-want-input').val(name);
        console.log(name);
        $('#user-image').attr('src', picsrc);
        $('#user-image').attr('uploaded', 'true');

    });
    $('.second').on('click',function(){
        var name = $('.second-search-image-label').html();
        var picsrc = $('.second-search-image').attr('src');
        $('.what-u-want-input').val(name);
        $('#user-image').attr('src', picsrc);
        $('#user-image').attr('uploaded', 'true');
    });

    $('#radio1').on('click',function(){
        $('.input-div').css('display','none');
        $('.regions').css('display','none');
    });
    $('#radio2').on('click',function(){
        $('.input-div').css('display','inline-block');
        $('.regions').css('display','block');
    });
    $('.online-stores').on('click',function(){
        var attr = $(this).attr('checked');
        console.log("attr is = "+attr)
        // For some browsers, `attr` is undefined; for others,
        // `attr` is false.  Check for both.
        if (typeof attr !== typeof undefined && attr !== false) {
            console.log("1");
            $(this).removeAttr("checked");
            $('.url').attr('disabled','true');
        }
        else{
            $('.url').removeAttr('disabled');
            $(this).attr("checked","");
        }
    });
    $('.upload-image').on('click',function(){
        if($('#user-image').attr('uploaded')==='false'){
            document.getElementById("fileInput").click();
        }
        return false ;
    });
    $('.upload-image-link').hover(function(){
        if($('#user-image').attr('uploaded')==='true'){
            $('.top-image').css('visibility','visible');
            $('#user-image').css('opacity','0.3');
            $(this).on('click',function(){
            $('.top-image').css('visibility','hidden');
            $('#user-image').attr('src','img/new-order/dotted1.png');
            $('#user-image').attr('uploaded','false');
            return false ;
            });
        }
    },function(){
        $('.top-image').css('visibility','hidden');
        $('#user-image').css('opacity','1');
    });
//    var number = 1000;
//    var tooshe = 10;
    $('#slider').attr('max',parseInt($('.amount-input').val()));
    $('#slider').attr('min',parseInt($('.amount-input').val())/10);
    $('#slider').val(parseInt($('#slider').attr('max')/2))
    $('.ten-percent-amount').html((parseInt($('#slider').val())/10)+"$");
    $('.amount-input').on('change',function(){
       if($(this).val()<500){
        $('#slider').attr('min',parseInt($(this).val())/10);
        $('#slider').attr('max',parseInt($(this).val()));
        $('.ten-percent-amount').html((parseInt($('#slider').val())/10)+"$");
       }
        else{
           $('#slider').attr('min',(6*(parseInt($(this).val())/100)));
           $('#slider').attr('max',parseInt($(this).val()));
           $('.ten-percent-amount').html((parseInt($('#slider').val())/10)+"$");
       }
    });

    function initialize(input) {

     var options = {
      types: ['(cities)']
     };
     var autocomplete = new google.maps.places.Autocomplete(input, options);
    }

    var input2 = document.getElementById('delivered-where-input');
    input2.onkeypress = initialize(input2);

   $('.you-pay').html($('#slider').val()+'$');
//    console.log("slider-amount:"+$('slider').val());

    $('.fee-amount').html((parseInt($('.amount-input').val()) + parseInt($('#slider').val()))+'$');
    $('#slider').on('change',function(){
       $('.fee-amount').html((parseInt($(this).val()) + parseInt($('.amount-input').val()))+'$');
       $('.you-pay').html($(this).val()+'$');
        $('.ten-percent-amount').html((parseInt($('#slider').val())/10)+"$");
    });
    $('.amount-input').on('change',function(){
       $('.ten-percent-amount').html($(this).val()+"$");
       $('.fee-amount').html((parseInt($(this).val()) + parseInt($('#slider').val()))+'$');
        $('.ten-percent-amount').html((parseInt($('#slider').val())/10)+"$");
    });
});