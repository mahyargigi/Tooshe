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
    var acOptions = {
        types: ['(cities)']
    };
    //var input1 = document.getElementById('specific-region-input');
    $('#specific-region-input').geocomplete(acOptions).bind("geocode:result", function(event, click){
        //console.log("place_id: "+click.place_id);
        //console.log("type: "+click.types);
        //console.log(jQuery.inArray("locality",click.address_components[0].types));
        //if(jQuery.inArray("locality",click.address_components[0].types))
        //console.log("City:"+click.address_components[0].long_name);
        var city = click.address_components[0].long_name;
        var country = "";
        if(jQuery.inArray("country",click.address_components[2].types) === 0){
            //console.log("Country:"+click.address_components[2].long_name);
            country = click.address_components[2].long_name;
        }
        else if(jQuery.inArray("country",click.address_components[3].types) === 0){
            //console.log("Country:"+click.address_components[3].long_name);
            country = click.address_components[3].long_name;
        }
        else if(jQuery.inArray("country",click.address_components[4].types) === 0){
            //console.log("Country:"+click.address_components[4].long_name);
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
        $('#specific-region-input').val('');
        var here = click.address_components[0].long_name;
        $('.regions').append('<div class="alert alert-dismissable alert-material-green-A100">' +
            '<span><strong><input type="hidden" class="test">'+city+'</strong></span>' +
                '<span style="display: none;"><input type="hidden" name="location_city[]">'+String(city)+'</span>'+
                '<span style="display: none;"><input type="hidden" name="location_country[]" style="display: none;">'+String(country)+'</span>'+
                '<span style="display: none;"><input type="hidden" name="location_lat[]" style="display: none;">'+String(lat)+'</span>'+
                '<span style="display: none;"><input type="hidden" name="location_lng[]" style="display: none;">'+String(lng)+'</span>'+
                '<span style="display: none;"><input type="hidden" name="location_placeID[]" style="display: none;">'+String(place_id)+'</span>'+
            '<span><button type="button" class="close" data-dismiss="alert">×</button></span></div>');
        $('.test').val(here);
        $('.test').removeClass('test');
//        console.log($('.test').val());
    });

    var delivered_input_geolocate = false ;

    $('#delivered-where-input').geocomplete(acOptions).bind("geocode:result", function(event, click){
        delivered_input_geolocate = true;

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

        $('#delivered-where-input').closest('div').find('.location-span').remove();
        $('#delivered-where-input').closest('div').append('<span style="display: none;" class="location-span"><span style="display: none;"><input type="hidden" name="destination_city">'+String(city)+'</span>'+
                '<span style="display: none;"><input type="hidden" name="destination_country" style="display: none;">'+String(country)+'</span>'+
                '<span style="display: none;"><input type="hidden" name="destination_lat" style="display: none;">'+String(lat)+'</span>'+
                '<span style="display: none;"><input type="hidden" name="destination_lng" style="display: none;">'+String(lng)+'</span>'+
                '<span style="display: none;"><input type="hidden" name="destination_placeID" style="display: none;">'+String(place_id)+'</span></span>');
    });


    $('#delivered-where-input').focus(function(){
       $('#delivered-where-input').on('keydown' , function(){
          delivered_input_geolocate = false;
           console.log("keydown");
       });
    });
    $('#delivered-where-input').focusout(function(){
       if(!delivered_input_geolocate){
           $('#delivered-where-input').closest('div').find('.location-span').remove();
           $('#delivered-where-input').val('');
       }
    });
    function isUrlValid(url) {
        return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
    }
    $('.online-stores').on('change',function(){
       var attr = $(this).attr('checked');

    // For some browsers, `attr` is undefined; for others, `attr` is false. Check for both.
    if (typeof attr !== typeof undefined && attr !== false) {
        if(isUrlValid($('.url').val())){
            $('.warning-label').css('display','none');
        }
        else{
            $('.warning-label').css('display','');
        }
    }
    else{
        $('.warning-label').css('display','none');
    }

       // if($(this).hasAttr('checked')){
       //    console.log("checked!")
       //}
       //else{
       //    console.log("unchecked!");
       //}
    });
    $('.url').on('keyup' , function(){
        console.log($(this).val());
        if(isUrlValid($(this).val())){
            $('.warning-label').css('display','none');
        }
        else{
            $('.warning-label').css('display','');
        }
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
/*    10% bood ke 0% kardimesh
    $('.ten-percent-amount').html((parseInt($('#slider').val())/10)+"$");
    */
    $('.ten-percent-amount').html((0)+"$");

    $('.amount-input').on('change',function(){
       if($(this).val()<500){
        $('#slider').attr('min',parseInt($(this).val())/10);
        $('#slider').attr('max',parseInt($(this).val()));
/*         10% bood ke 0% kardimesh
        $('.ten-percent-amount').html((parseInt($('#slider').val())/10)+"$");
        */
        $('.ten-percent-amount').html((0)+"$");
       }
        else{
           $('#slider').attr('min',(6*(parseInt($(this).val())/100)));
           $('#slider').attr('max',parseInt($(this).val()));
/*           10% bood ke 0% shod
           $('.ten-percent-amount').html((parseInt($('#slider').val())/10)+"$");
           */
           $('.ten-percent-amount').html((0)+"$");
       }
    });

    //function initialize(input) {
    //
    // var options = {
    //  types: ['(cities)']
    // };
    // var autocomplete = new google.maps.places.Autocomplete(input, options);
    //}

    //var input2 = document.getElementById('delivered-where-input');
    //input2.onkeypress = initialize(input2);

   $('.you-pay').html($('#slider').val()+'$');
//    console.log("slider-amount:"+$('slider').val());
/* 10% - 0%
    $('.fee-amount').html((parseInt($('.amount-input').val()) + parseInt($('#slider').val())+(parseInt($('#slider').val())/10))+'$');
    */
    $('.fee-amount').html((parseInt($('.amount-input').val()) + parseInt($('#slider').val()))+'$');


//    console.log("amount-input:"+(parseInt($('.amount-input').val()))+" slider-amount:"+parseInt($('#slider').val())+" slider/10:"+(parseInt($('#slider').val())/10));
    $('#slider').on('change',function(){
/*        10% - 0%
       $('.fee-amount').html((parseInt($(this).val()) + parseInt($('.amount-input').val())+(parseInt($('#slider').val())/10))+'$');
       */
       $('.fee-amount').html((parseInt($(this).val()) + parseInt($('.amount-input').val()))+'$');

        $('.you-pay').html($(this).val()+'$');
/*        10% bood ke 0% shod
        $('.ten-percent-amount').html((parseInt($('#slider').val())/10)+"$");
        */
        $('.ten-percent-amount').html((0)+"$");
//            console.log("amount-input:"+(parseInt($('.amount-input').val()))+" slider-amount:"+parseInt($('#slider').val())+" slider/10:"+(parseInt($('#slider').val())/10));
    });
    $('.amount-input').on('change',function(){
       $('.ten-percent-amount').html($(this).val()+"$");
/*        10% - 0%
       $('.fee-amount').html((parseInt($(this).val()) + parseInt($('#slider').val()) +(parseInt($('#slider').val())/10))+'$');
       */
       $('.fee-amount').html((parseInt($(this).val()) + parseInt($('#slider').val()))+'$');
/*        10% bood ke 0% shod
        $('.ten-percent-amount').html((parseInt($('#slider').val())/10)+"$");
        */
        $('.ten-percent-amount').html((0)+"$");
        $('.you-pay').html($('#slider').val()+'$');
//            console.log("amount-input:"+(parseInt($('.amount-input').val()))+" slider-amount:"+parseInt($('#slider').val())+" slider/10:"+(parseInt($('#slider').val())/10));
    });
    //$('#date1').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    new Pikaday({
        isRTL : true ,
        firstday : 6 ,
        field: $('#date1')[0] ,
        minDate: moment().toDate(),
    });
    $('.number').on('change',function(){
      if(this.value < 1){
          this.value = 1;
      }
    });
    $('.weight').on('change',function(){
      if(this.value > 40){
          this.value = 40;
      }
      else if(this.value < 0){
          this.value = 0;
      }
    });
});