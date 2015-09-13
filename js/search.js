/**
 * Created by User on 8/31/15.
 */
$(document).ready(function(){
   $('#slider1').on('change',function(){
//        console.log((this).value);
        $('#amount1').html((this).value+"$");
    });
    $('#slider2').on('change',function(){
//        console.log((this).value);
        $('#amount2').html((this).value+"$");
    });
    $('#slider3').on('change',function(){
//        console.log((this).value);
        $('#amount3').html((this).value+"$");
    });
    $('#slider4').on('change',function(){
//        console.log((this).value);
        $('#amount4').html((this).value+"$");
    });
    $('#user-rate1').rating('update', 3.6);
    $('#user-rate2').rating('update', 4.6);

    var input1 = document.getElementById('dest-input1');
    input1.onkeypress = function(){
        $('#dest-input1').geocomplete();
        console.log("injaaa");
    }
    var input2 = document.getElementById('source-input1');
    input2.onkeypress = function(){
        $('#source-input1').geocomplete();
    }

    var input3 = document.getElementById('dest-input2');
    input3.onkeypress = function(){
        $('#dest-input2').geocomplete();
        console.log("injaaa");
    }

    var input4 = document.getElementById('source-input2');
    input4.onkeypress = function(){
        $('#source-input2').geocomplete();
    }
    var input5 = document.getElementById('source-input3');
    input5.onkeypress = function(){
        $('#source-input3').geocomplete();
    }

    $('#to-date1').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    $('#from-date1').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    $('#to-date2').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    $('#from-date2').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );

    $('#goods-date').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );

    $('#picks-li').on('click',function(){
        $('#picks-image').attr("src","img/l.png");
        $('#packs-image').attr("src","img/d2.png");
        $('#goods-image').attr("src","img/s2.png");
        $('#picks-ul').show();
        $('#packs-ul').hide();
        $('#goods-ul').hide();
    });
    $('#packs-li').on('click',function(){
        $('#picks-image').attr("src","img/l2.png");
        $('#packs-image').attr("src","img/d.png");
        $('#goods-image').attr("src","img/s2.png");
        $('#picks-ul').hide();
        $('#packs-ul').show();
        $('#goods-ul').hide();
    });
    $('#goods-li').on('click',function(){
        $('#picks-image').attr("src","img/l2.png");
        $('#packs-image').attr("src","img/d2.png");
        $('#goods-image').attr("src","img/s.png");
        $('#picks-ul').hide();
        $('#packs-ul').hide();
        $('#goods-ul').show();
    });
});
