/**
 * Created by User on 8/30/15.
 */
$(document).ready(function(){
    $('#user-rate').rating('update', 3.6);
    $('#slider').on('change',function(){
       console.log((this).value);
      $('#money-input').html((this).value+"$");
   });

    var requester_money = 60;
    console.log($('#slider').val());
    if($('#slider').val()>requester_money){
        $('.warning-label').css('display','block');
    }
    $('#slider').on('change',function(){
        if($('#slider').val()>requester_money){
            $('.warning-label').css('display','block');
        }
        else{
            $('.warning-label').css('display','none');
        }
    });
});