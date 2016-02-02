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
//    var input1 = document.getElementById('departure-city');
//    input1.onkeypress = function(){
//        $('#departure-city').geocomplete();
//    }
//    var input2 = document.getElementById('arrival-city');
//    input2.onkeypress = function(){
//        $('#arrival-city').geocomplete();
//    }


    function initialize(input) {

     var options = {
      types: ['(cities)']
//      componentRestrictions: {country: "us"}
     };

//     var input = document.getElementById('arrival-city');
     var autocomplete = new google.maps.places.Autocomplete(input, options);
    }

    var input1 = document.getElementById('departure-city');
    input1.onkeypress = initialize(input1);

    var input2 = document.getElementById('arrival-city');
    input2.onkeypress = initialize(input2);


    $('#date1').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    $('#date2').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    $('#date3').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    $('#first-radio').on('click',function(){
        if($('#optionsRadios1').is(':checked')) {
//            alert("first is checked!");
            $('#slider').prop('disabled',true);
            $('#slider').css('visibility','hidden');
            $('#money-input').css('visibility','hidden');
        }
    });
    $('#second-radio').on('click',function(){
        if($('#optionsRadios2').is(':checked')) {
//            alert("second is checked!");
            $('#slider').removeAttr("disabled");
            $('#slider').css('visibility','visible');
            $('#money-input').css('visibility','visible');
        }
//        console.log("second radio clicked");
    });
//    console.log("is: "+$('#optionsRadios1').checked);


});











