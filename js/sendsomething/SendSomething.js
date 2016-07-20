/**
 * Created by User on 8/25/15.
 */
$(document).ready(function(){
    //$('#toDate').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    //$('#fromDate').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );

    var from_min_date = moment().toDate();
    var from_max_date = new Date(2099 , 1 , 1 ,0,0,0,0 );

    var to_min_date =  moment().toDate();
    var to_max_date =  new Date(2099 , 1 , 1 ,0,0,0,0 );

    $('#fromDate').on('change',function(){
        splitted = String($(this).val()).split('-');
        //console.log('splitted1:'+parseInt(splitted[0]));
        //console.log('splitted2:'+parseInt(splitted[1]));
        //console.log('splitted3:'+parseInt(splitted[2]));

        to_min_date = new Date(parseInt(splitted[0]), parseInt(splitted[1])-1, parseInt(splitted[2]), 0, 0 , 0, 0 );

        to_date.setMinDate(to_min_date);
        to_date.setMaxDate(to_max_date);
        to_date.gotoDate(to_min_date);

        console.log("from done!");
    });

    $('#toDate').on('change',function(){
        splitted = String($(this).val()).split('-');
        from_max_date = new Date(parseInt(splitted[0]), parseInt(splitted[1])-1, parseInt(splitted[2]), 0, 0 , 0, 0 );

        from_date.setMinDate(from_min_date);
        from_date.setMaxDate(from_max_date);
        //console.log("max date:",from_max_date)
        //from_date.gotoDate(from_max_date);

        console.log("to done!");
    });




    var to_date = new Pikaday({
        isRTL : true ,
        firstday : 6 ,
        field: $('#toDate')[0] ,
        minDate: from_min_date ,
        maxDate: from_max_date ,
    });
    var from_date = new Pikaday({
        isRTL : true ,
        firstday : 6 ,
        field: $('#fromDate')[0] ,
        minDate: to_min_date ,
        maxDate: to_max_date ,
    });
//    var slider = document.getElementById('slider');
//    noUiSlider.create(slider, {
//        start: [20, 80],
//        connect: true,
//        range: {
//            'min': 0,
//            'max': 100
//        }
//    });
//    var connectSlider = document.getElementById('slider');
//
//    noUiSlider.create(connectSlider, {
//        start: 40,
//        connect: 'upper',
//        range: {
//          'min': 0,
//          'max': 100
//        }
//    });
    $('#slider').on('change',function(){
        console.log((this).value);
        $('#slider-value').html((this).value+"$");
    });
    $('.weight-input').on('change',function(){
      if(this.value > 40){
          this.value = 40;
      }
       else if(this.value<0){
          this.value=0;
      }
   });
    //var acOptions = {
    //    types: ['(cities)']
    //};
    //var input1 = document.getElementById('dest-input');
    //input1.onkeypress = function(){
    //    $('#dest-input').geocomplete(acOptions);
    //}
    //var input2 = document.getElementById('source-input');
    //input2.onkeypress = function(){
    //    $('#source-input').geocomplete(acOptions);
    //}

    var acOptions = {
        types: ['(cities)']
    };

    var dest_input_geolocate = false;

    $('#dest-input').geocomplete(acOptions).bind("geocode:result", function(event, click){
        dest_input_geolocate = true;
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
        else if(jQuery.inArray("country",click.address_components[5].types) === 0){
            country = click.address_components[5].long_name;
        }
        else{
            console.log("Bugg happened!");
        }
        var lat = click.geometry.location.lat();
        var lng = click.geometry.location.lng();
        var place_id = click.place_id;
        console.log("city: "+city+" country: "+country+" lat: "+lat+" lng:"+lng+" place_id: "+place_id);
        var here = click.address_components[0].long_name;

        $('#dest-input').closest('div').find('.location-span').remove();
        $('#dest-input').closest('div').append('<span style="display: none;" class="location-span"><span style="display: none;"><input type="hidden" name="destination_city" value="'+String(city)+'"></span>'+
                '<span style="display: none;"><input type="hidden" name="destination_country" style="display: none;" value="'+String(country)+'"></span>'+
                '<span style="display: none;"><input type="hidden" name="destination_lat" style="display: none;" value="'+String(lat)+'"></span>'+
                '<span style="display: none;"><input type="hidden" name="destination_lng" style="display: none;" value="'+String(lng)+'"></span>'+
                '<span style="display: none;"><input type="hidden" name="destination_placeID" style="display: none;" value="'+String(place_id)+'"></span></span>');
    });

    $('#dest-input').focus(function(){
       $('#dest-input').on('keydown' , function(){
          dest_input_geolocate = false;
       });
    });
    $('#dest-input').focusout(function(){
       if(!dest_input_geolocate){
           $('#dest-input').closest('div').find('.location-span').remove();
           $('#dest-input').val('');
       }
    });

    var source_input_geolocate = false;

    $('#source-input').geocomplete(acOptions).bind("geocode:result", function(event, click){
        source_input_geolocate = true;
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
        else if(jQuery.inArray("country",click.address_components[5].types) === 0){
            country = click.address_components[5].long_name;
        }
        else{
            console.log("Bugg happened!");
        }
        var lat = click.geometry.location.lat();
        var lng = click.geometry.location.lng();
        var place_id = click.place_id;
        console.log("city: "+city+" country: "+country+" lat: "+lat+" lng:"+lng+" place_id: "+place_id);
        var here = click.address_components[0].long_name;

        $('#source-input').closest('div').find('.location-span').remove();
        $('#source-input').closest('div').append('<span style="display: none;" class="location-span"><span style="display: none;"><input type="hidden" name="origin_city" value="'+String(city)+'"></span>'+
                '<span style="display: none;"><input type="hidden" name="origin_country" style="display: none;" value="'+String(country)+'"></span>'+
                '<span style="display: none;"><input type="hidden" name="origin_lat" style="display: none;" value="'+String(lat)+'"></span>'+
                '<span style="display: none;"><input type="hidden" name="origin_lng" style="display: none;" value="'+String(lng)+'"></span>'+
                '<span style="display: none;"><input type="hidden" name="origin_placeID" style="display: none;" value="'+String(place_id)+'"></span></span>');
    });

    $('#source-input').focus(function(){
       $('#source-input').on('keydown' , function(){
          source_input_geolocate = false;
       });
    });
    $('#source-input').focusout(function(){
       if(!source_input_geolocate){
           $('#source-input').closest('div').find('.location-span').remove();
           $('#source-input').val('');
       }
    });




    $('#slider-value').html($('#slider').val()+"$");

    $('.upload-image1').on('click',function(){
        if($('#user-image1').attr('uploaded')==='false'){
            document.getElementById("fileInput1").click();
        }
                console.log("1 clicked!");
        return false ;
    });
    $('.upload-image-link1').hover(function(){
        if($('#user-image1').attr('uploaded')==='true'){
            $('.top-image1').css('visibility','visible');
            $('#user-image1').css('opacity','0.3');
            $(this).on('click',function(){
            $('.top-image1').css('visibility','hidden');
            $('#user-image1').attr('src','img/sendsomething/dotted1.png');
            $('#user-image1').attr('uploaded','false');
            return false ;
            });
        }
    },function(){
        $('.top-image1').css('visibility','hidden');
        $('#user-image1').css('opacity','1');
    });

    $('.upload-image2').on('click',function(){
        if($('#user-image2').attr('uploaded')==='false'){
            document.getElementById("fileInput2").click();
        }
                console.log("2 clicked!");
        return false ;
    });
    $('.upload-image-link2').hover(function(){
        if($('#user-image2').attr('uploaded')==='true'){
            $('.top-image2').css('visibility','visible');
            $('#user-image2').css('opacity','0.3');
            $(this).on('click',function(){
            $('.top-image2').css('visibility','hidden');
            $('#user-image2').attr('src','img/sendsomething/dotted1.png');
            $('#user-image2').attr('uploaded','false');
            return false ;
            });
        }
    },function(){
        $('.top-image2').css('visibility','hidden');
        $('#user-image2').css('opacity','1');
    });

    $('.upload-image3').on('click',function(){
        if($('#user-image3').attr('uploaded')==='false'){
            document.getElementById("fileInput3").click();
        }
        console.log("3 clicked!");
        return false ;
    });
    $('.upload-image-link3').hover(function(){
        if($('#user-image3').attr('uploaded')==='true'){
            $('.top-image3').css('visibility','visible');
            $('#user-image3').css('opacity','0.3');
            $(this).on('click',function(){
            $('.top-image3').css('visibility','hidden');
            $('#user-image3').attr('src','img/sendsomething/dotted1.png');
            $('#user-image3').attr('uploaded','false');
            return false ;
            });
        }
    },function(){
        $('.top-image3').css('visibility','hidden');
        $('#user-image3').css('opacity','1');
    });


});