/**
 * Created by User on 8/25/15.
 */
$(document).ready(function(){
    //$('#toDate').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    //$('#fromDate').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    new Pikaday({
        isRTL : true ,
        firstday : 6 ,
        field: $('#toDate')[0] ,
    });
    new Pikaday({
        isRTL : true ,
        firstday : 6 ,
        field: $('#fromDate')[0] ,
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
    var acOptions = {
        types: ['(cities)']
    };
    var input1 = document.getElementById('dest-input');
    input1.onkeypress = function(){
        $('#dest-input').geocomplete(acOptions);
    }
    var input2 = document.getElementById('source-input');
    input2.onkeypress = function(){
        $('#source-input').geocomplete(acOptions);
    }
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