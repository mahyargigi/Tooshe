/**
 * Created by User on 12/3/15.
 */
$(document).ready(function(){
   $('.phone-number').on('click',function(){
       $(this).css('display','none');
       $('#input-phone-number').css('display','inline-block');
       $('.done').css('display','inline-block');
   });
    $('.done').on('click',function(){
       var number = $('#input-phone-number').val();
       $('#input-phone-number').css('display','none');
       $('.done').css('display','none');
       $('.phone-number-span').css('display','inline-block');
       $('.number-span').html(number);
    });
    $('.edit').on('click',function(){
        var number = $('#input-phone-number').val();
        $('#input-phone-number').val(number);
        $('#input-phone-number').css('display','inline-block');
        $('.done').css('display','inline-block');
        $('.phone-number-span').css('display','none');
    });
    var dollar = parseInt($('.dollar').html());
    $('.toman').html(dollar*3500);
});



//if($(this).hasClass('done-address')){
//           $(this).html("EDIT");
//           $(this).addClass('edit-address');
//           $(this).removeClass('done-address');
////           $('#address').attr('contenteditable','false');
//
//           var value = $('#input-address').val();
////           $('#address').html('<a href="#" id="test2" class="edit-address">'+value+'</a>');
//           $('#input-address').css('display','none');
//           $('#address').html(value);
//           $('#address').css('display','');
//        }
//        else{
//            $(this).html("DONE");
//            $(this).addClass('done-address');
//            $(this).removeClass('edit-address');
////           $('#address').attr('contenteditable','true');
//            var content = $('#address').html();
////            console.log(""content);
//            $('#input-address').css('display','inline');
//            $('#input-address').attr('value',content);
//            $('#address').css('display','none');
//
//}