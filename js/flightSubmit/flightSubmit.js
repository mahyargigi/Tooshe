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


//    function initialize(input) {
//
//     var options = {
//      types: ['(cities)']
////      componentRestrictions: {country: "us"}
//     };
//
////     var input = document.getElementById('arrival-city');
//     var autocomplete = new google.maps.places.Autocomplete(input, options);
//    }

    //var input1 = document.getElementById('departure-city');
    //input1.onkeypress = initialize(input1);
    //
    //var input2 = document.getElementById('arrival-city');
    //input2.onkeypress = initialize(input2);


    //start

    var acOptions = {
        types: ['(cities)']
    };

    var departure_input_geolocate = false;

    $('#departure-city').geocomplete(acOptions).bind("geocode:result", function(event, click){
        departure_input_geolocate = true;
        var city = click.address_components[0].long_name;
        var country = "";
        if(jQuery.inArray("country",click.address_components[2].types) === 0){
            country = click.address_components[2].long_name;
        }
        else if(jQuery.inArray("country",click.address_components[3].types) === 0){
            country = click.address_components[3].long_name;
        }
        else if(jQuery.inArray("country",click.address_components[4].types) === 0){
            country = click.address_components[4].long_name;
        }
        else{
            console.log("Bugg happened!");
        }
        var lat = click.geometry.location.lat();
        var lng = click.geometry.location.lng();
        var place_id = click.place_id;
        console.log("city: "+city+" country: "+country+" lat: "+lat+" lng:"+lng+" place_id: "+place_id);
        var here = click.address_components[0].long_name;

        $('#departure-city').closest('div').append('<span style="display: none;"><input type="hidden" name="startpoint_city">'+String(city)+'</span>'+
                '<span style="display: none;"><input type="hidden" name="startpoint_country" style="display: none;">'+String(country)+'</span>'+
                '<span style="display: none;"><input type="hidden" name="startpoint_lat" style="display: none;">'+String(lat)+'</span>'+
                '<span style="display: none;"><input type="hidden" name="startpoint_lng" style="display: none;">'+String(lng)+'</span>'+
                '<span style="display: none;"><input type="hidden" name="startpoint_placeID" style="display: none;">'+String(place_id)+'</span>');
    });

    $('#departure-city').focus(function(){
       $('#departure-city').on('keypress' , function(){
          departure_input_geolocate = false;
       });
    });
    $('#departure-city').focusout(function(){
       if(!departure_input_geolocate){
           $('#departure-city').val('');
       }
    });

    var arrival_input_geolocate = false;

    $('#arrival-city').geocomplete(acOptions).bind("geocode:result", function(event, click){
        arrival_input_geolocate = true;
        var city = click.address_components[0].long_name;
        var country = "";
        if(jQuery.inArray("country",click.address_components[2].types) === 0){
            country = click.address_components[2].long_name;
        }
        else if(jQuery.inArray("country",click.address_components[3].types) === 0){
            country = click.address_components[3].long_name;
        }
        else if(jQuery.inArray("country",click.address_components[4].types) === 0){
            country = click.address_components[4].long_name;
        }
        else{
            console.log("Bugg happened!");
        }
        var lat = click.geometry.location.lat();
        var lng = click.geometry.location.lng();
        var place_id = click.place_id;
        console.log("city: "+city+" country: "+country+" lat: "+lat+" lng:"+lng+" place_id: "+place_id);
        var here = click.address_components[0].long_name;

        $('#arrival-city').closest('div').append('<span style="display: none;"><input type="hidden" name="startpoint_city">'+String(city)+'</span>'+
                '<span style="display: none;"><input type="hidden" name="startpoint_country" style="display: none;">'+String(country)+'</span>'+
                '<span style="display: none;"><input type="hidden" name="startpoint_lat" style="display: none;">'+String(lat)+'</span>'+
                '<span style="display: none;"><input type="hidden" name="startpoint_lng" style="display: none;">'+String(lng)+'</span>'+
                '<span style="display: none;"><input type="hidden" name="startpoint_placeID" style="display: none;">'+String(place_id)+'</span>');
    });

    $('#arrival-city').focus(function(){
       $('#arrival-city').on('keypress' , function(){
          arrival_input_geolocate = false;
       });
    });
    $('#arrival-city').focusout(function(){
       if(!arrival_input_geolocate){
           $('#arrival-city').val('');
       }
    });

    //end

    //$('#date1').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    //$('#date2').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    //$('#date3').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
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

    var flight_min_date = moment().toDate();
    var flight_max_date = new Date(2099 , 1 , 1 ,0,0,0,0 );

    var flight_landing_min_date = moment().toDate();
    var flight_landing_max_date = new Date(2099 , 1 , 1 ,0,0,0,0 );

    var last_day_min_date =  moment().toDate();
    var last_day_max_date =  new Date(2099 , 1 , 1 ,0,0,0,0 );

    $('#date1').on('change',function(){
        splitted = String($(this).val()).split('-');

       flight_landing_min_date = new Date(parseInt(splitted[0]), parseInt(splitted[1])-1, parseInt(splitted[2]), 0, 0 , 0, 0 );
       flight_landing_date.setMinDate(flight_landing_min_date);
       flight_landing_date.gotoDate(flight_landing_min_date);

       last_day_min_date = new Date(parseInt(splitted[0]), parseInt(splitted[1])-1, parseInt(splitted[2]), 0, 0 , 0, 0 );
       last_day_date.setMinDate(last_day_min_date);
       last_day_date.gotoDate(last_day_min_date);
    });
    $('#date2').on('change',function(){
       splitted = String($(this).val()).split('-');

       last_day_min_date = new Date(parseInt(splitted[0]), parseInt(splitted[1])-1, parseInt(splitted[2]), 0, 0 , 0, 0 );
       last_day_date.setMinDate(last_day_min_date);
       last_day_date.gotoDate(last_day_min_date);

       flight_max_date =  new Date(parseInt(splitted[0]), parseInt(splitted[1])-1, parseInt(splitted[2]), 0, 0 , 0, 0 );
       flight_date.setMaxDate(flight_max_date);
       flight_date.gotoDate(flight_min_date);

        console.log("from2 done!");
    });
    $('#date3').on('change',function(){
        splitted = String($(this).val()).split('-');
        flight_landing_max_date = new Date(parseInt(splitted[0]), parseInt(splitted[1])-1, parseInt(splitted[2]), 0, 0 , 0, 0 );
        flight_landing_date.setMaxDate(flight_landing_max_date);

        flight_max_date =  new Date(parseInt(splitted[0]), parseInt(splitted[1])-1, parseInt(splitted[2]), 0, 0 , 0, 0 );
        flight_date.setMaxDate(flight_max_date);

        //flight_landing_date.gotoDate(flight_landing_min_date);

        console.log("to done!");
    });

    var flight_date = new Pikaday({
        isRTL : true ,
        firstday : 6 ,
        field: $('#date1')[0] ,
        minDate: flight_min_date ,
        maxDate: flight_max_date ,
    });
    var flight_landing_date = new Pikaday({
        isRTL : true ,
        firstday : 6 ,
        field: $('#date2')[0] ,
        minDate: flight_landing_min_date ,
        maxDate: flight_landing_max_date ,
    });
    var last_day_date = new Pikaday({
        isRTL : true ,
        firstday : 6 ,
        field: $('#date3')[0] ,
        minDate: last_day_min_date ,
        maxDate: last_day_max_date,
    });
//    console.log("is: "+$('#optionsRadios1').checked);

    //$('#date1').pDatepicker();
    //$('#date1').bootstrapMaterialDatePicker('setMinDate', moment());
    //$('#date2').bootstrapMaterialDatePicker('setMinDate', moment());
    //$('#date3').bootstrapMaterialDatePicker('setMinDate', moment());
});











