/**
 * Created by User on 8/24/2016.
 */
$(document).ready(function(){
   $('.prof-pic').on('click',function(){
        if($('#prof-pic').attr('uploaded')==='false'){
            document.getElementById("fileInput").click();
        }
        return false ;
    });
    $('.upload-image-link').hover(function(){
        if($('#prof-pic').attr('uploaded')==='true'){
            $('.top-image').css('visibility','visible');
            $('#prof-pic').css('opacity','0.3');
            $(this).on('click',function(){
            $('.top-image').css('visibility','hidden');
            $('#prof-pic').attr('src','img/new-order/dotted1.png');
            $('#prof-pic').attr('uploaded','false');
            $('.forget-it').html('!بی خیال');
            return false ;
            });
        }
    },function(){
        $('.top-image').css('visibility','hidden');
        $('#prof-pic').css('opacity','1');
    });
    $('.forget-it').on('click',function(){
       $('.prof-pic-div').fadeOut(500);
       $('.job-div').delay(500).fadeIn(100);
    });
    $('.prev-phase').on('click',function(){
       $('.job-div').fadeOut(500);
       $('.prof-pic-div').delay(500).fadeIn(100);
    });
    $('.forget-it2').on('click',function(){
       $('.job-div').fadeOut(500);
       $('.city-div').delay(500).fadeIn(100);
    });
    $('.job-input').on('keyup' , function(){
       if($(this).val() !== ''){
           $('.forget-it2').html('مرحله بعد');
       }else{
           $('.forget-it2').html('بی خیال!');
       }
    });
    $('.city-input').on('keyup' , function(){
       if($(this).val() !== ''){
           $('.forget-it3').html('مرحله بعد');
       }else{
           $('.forget-it3').html('بی خیال!');
       }
    });
    var acOptions = {
    types: ['(cities)']
    };
    var geolocated = false;
    $('#city-input').geocomplete(acOptions).bind("geocode:result", function(event, click){
        $('.forget-it3').html('مرحله بعد');
    });

    $('#city-input').focus(function(){
       $('#city-input').on('keydown' , function(){
         $('.forget-it3').html('بی خیال!');
       });
    });
});