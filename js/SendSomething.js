/**
 * Created by User on 8/25/15.
 */
$(document).ready(function(){
    $('#toDate').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    $('#fromDate').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
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
    var input1 = document.getElementById('dest-input');
    input1.onkeypress = function(){
        $('#dest-input').geocomplete();
    }
    var input2 = document.getElementById('source-input');
    input2.onkeypress = function(){
        $('#source-input').geocomplete();
    }
    $('#slider-value').html($('#slider').val()+"$");

});