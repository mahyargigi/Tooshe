/**
 * Created by User on 8/31/15.
 */
$(document).ready(function(){
   $('#max-weight-input').on('change',function(){
      if(this.value > 40){
          this.value = 40;
      }
       else if(this.value<0){
          this.value=0;
      }
   });
   $('#slider').on('change',function(){
       console.log((this).value);
      $('#money-input').html((this).value+"$");
   });
    var input1 = document.getElementById('departure-city');
    input1.onkeypress = function(){
        $('#departure-city').geocomplete();
    }
    var input2 = document.getElementById('arrival-city');
    input2.onkeypress = function(){
        $('#arrival-city').geocomplete();
    }

    $('#date1').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    $('#date2').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    $('#date3').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    $('#first-radio').on('click',function(){
        if($('#optionsRadios1').is(':checked')) {
//            alert("first is checked!");
            $('#slider').prop('disabled',true);
        }
    });
    $('#second-radio').on('click',function(){
        if($('#optionsRadios2').is(':checked')) {
//            alert("second is checked!");
            $('#slider').removeAttr("disabled");
        }
//        console.log("second radio clicked");
    });
//    console.log("is: "+$('#optionsRadios1').checked);


});










