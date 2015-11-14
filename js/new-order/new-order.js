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
          source: availableTags
        });
//        console.log("change");
//    });
    var input1 = document.getElementById('specific-region-input');
    $('#specific-region-input').geocomplete().bind("geocode:result", function(event, click){
        $('.regions').append('<div class="alert alert-dismissable alert-material-green-A100"><span><strong>'+click.address_components[0].long_name+'</strong></span><span><button type="button" class="close" data-dismiss="alert">×</button></span></div>');
        $(this).val('');
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
    $('.upload-image-link').on('click',function(){
        if($('#user-image').attr('uploaded')==='false'){
            document.getElementById("fileInput").click();
        }

    });
    $('.upload-image-link').hover(function(){
        if($('#user-image').attr('uploaded')==='true'){
            $('.top-image').css('visibility','visible');
            $('#user-image').css('opacity','0.3');
            $(this).on('click',function(){
            $('.top-image').css('visibility','hidden');
            $('#user-image').attr('src','img/new-order/dotted1.png');
            $('#user-image').attr('uploaded','false');
            });
        }
    },function(){
        $('.top-image').css('visibility','hidden');
        $('#user-image').css('opacity','1');
    });
    var number = 1000;
    var tooshe = 10;
    $('#slider').attr('min',number/10);
    $('#slider').attr('max',number);
   $('.you-pay').html($('#slider').val()+'$');
    $('.ten-percent-amount').html($('.amount-input').val()+"$");
    $('.fee-amount').html((parseInt($('.amount-input').val()) + parseInt($('#slider').val()))+'$');
    $('#slider').on('change',function(){
       $('.fee-amount').html((parseInt($(this).val()) + parseInt($('.amount-input').val()))+'$');
       $('.you-pay').html($(this).val()+'$');
    });
    $('.amount-input').on('change',function(){
       $('.ten-percent-amount').html($(this).val()+"$");
       $('.fee-amount').html((parseInt($(this).val()) + parseInt($('#slider').val()))+'$')
    });
});