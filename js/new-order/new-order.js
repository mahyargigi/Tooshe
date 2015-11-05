/**
 * Created by User on 11/2/15.
 */
$(document).ready(function(){
   var input1 = document.getElementById('specific-region-input');
    input1.onkeypress = function(){
        $('#specific-region-input').geocomplete().bind("geocode:result", function(event, click){
          console.log(click.address_components);
        });
//        geocomplete.bind("geocode:result", function(event, result){
//    console.log(result.formatted_address);
////            $('.regions').append('<div class="alert alert-dismissable alert-danger"><span><strong>'+result.formatted_address+'</strong></span><span><button type="button" class="close" data-dismiss="alert">×</button></span></div>');
//  });
    }
});