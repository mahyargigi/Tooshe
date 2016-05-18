$(document).ready(function() {
    $('.travelers-a').on('click', function () {
        $('.travelers-pic').attr("src", "img/new-search/l.png");
        $('.parcels-pic').attr("src", "img/new-search/d2.png");
        $('.shopping-pic').attr("src", "img/new-search/s2.png");
        $('.travelers-a label').css('color', '#229974');
        $('.parcels-a label').css('color', 'white');
        $('.shopping-a label').css('color', 'white');

        $('.travelers-a label').css('border-bottom', 'solid');
        $('.travelers-a label').css('border-bottom-color', '#b7354c');
        $('.parcels-a label').css('border-bottom', 'none');
        $('.shopping-a label').css('border-bottom', 'none');
    });
    $('.parcels-a').on('click', function () {
        $('.travelers-pic').attr("src", "img/new-search/l2.png");
        $('.parcels-pic').attr("src", "img/new-search/d.png");
        $('.shopping-pic').attr("src", "img/new-search/s2.png");
        $('.parcels-a label').css('color', '#229974');
        $('.travelers-a label').css('color', 'white');
        $('.shopping-a label').css('color', 'white');

        $('.parcels-a label').css('border-bottom', 'solid');
        $('.parcels-a label').css('border-bottom-color', '#b7354c');
        $('.travelers-a label').css('border-bottom', 'none');
        $('.shopping-a label').css('border-bottom', 'none');
    });
    $('.shopping-a').on('click', function () {
        $('.travelers-pic').attr("src", "img/new-search/l2.png");
        $('.parcels-pic').attr("src", "img/new-search/d2.png");
        $('.shopping-pic').attr("src", "img/new-search/s.png");
        $('.travelers-a label').css('color', 'white');
        $('.parcels-a label').css('color', 'white');
        $('.shopping-a label').css('color', '#229974');

        $('.shopping-a label').css('border-bottom', 'solid');
        $('.shopping-a label').css('border-bottom-color', '#b7354c');
        $('.travelers-a label').css('border-bottom', 'none');
        $('.parcels-a label').css('border-bottom', 'none');
    });
    $('#traveler-user-rate1').rating('update', 3.6);
    $('#traveler-user-rate2').rating('update', 2);
    $('#traveler-user-rate3').rating('update', 1.6);
    $('#traveler-user-rate4').rating('update', 4.6);
    $('#user-rate1').rating('update', 3.6);
    $('#user-rate2').rating('update', 4);
    $('#user-rate3').rating('update', 1);
    $('#user-rate4').rating('update', 2.5);


//    $('.picks-pagination li a').on('click',function(){
//        if($(this).parent().hasClass('disabled')){
//
//        }
//        else{
//            if($(this).html()==='«'){
//                var current = $('#picks-pagination li.active:first').prev();
//                var page = $('a',current).html();
//                $('#picks-ul > li.'+page).show();
//                $('#picks-ul >li:not(.'+page+')').hide();
//                current.parent().children().removeClass('active');
//                current.addClass('active');
//            }
//            else if($(this).html()==='»'){
//                var current = $('#picks-pagination li.active:first').next();
//                var page = $('a',current).html();
//                console.log("current is="+current);
//                console.log("page is="+page);
//                $('#picks-ul > li.'+page).show();
//                $('#picks-ul >li:not(.'+page+')').hide();
//                current.parent().children().removeClass('active');
//                current.addClass('active');
//            }
//            else{
//                $('#picks-ul > li.'+$(this).html()).show();
//                $('#picks-ul >li:not(.'+$(this).html()+')').hide();
//                $(this).parent().parent().children().removeClass('active');
//                $(this).parent().addClass('active');
//            }
//            if($('#paiks-pagination li.first-page').hasClass('active')){
//                $('#picks-previous').addClass('disabled');
//                $('#picks-next').removeClass('disabled');
//            }
//            if($('#picks-pagination li.last-page').hasClass('active')){
//                $('#picks-previous').removeClass('disabled');
//                $('#picks-next').addClass('disabled');
//            }
//            if($('#picks-pagination li.last-page.first-page').hasClass('active')){
//                $('#picks-previous').removeClass('disabled');
//                $('#picks-next').removeClass('disabled');
//            }
//        }
//    });

    $('#travelers-pagination li a').on('click', function () {
        if ($(this).parent().hasClass('disabled')) {

        }
        else {
            if ($(this).parent().hasClass('travelers-first')) {
                $('.travelers-result-div .result').fadeOut('slow');
                $('.travelers-result-div .result').fadeIn('slow');
                $('.travelers-result-div .page').html('5 - 8');
            }
            else if ($(this).parent().hasClass('travelers-previous')) {
                $('.travelers-result-div .result').fadeOut('slow');
                $('.travelers-result-div .result').fadeIn('slow');
                $('.travelers-result-div .page').html('5 - 8');
            }
            else if ($(this).parent().hasClass('travelers-next')) {
                $('.travelers-result-div .result').fadeOut('slow');
                $('.travelers-result-div .result').fadeIn('slow');
                $('.travelers-result-div .page').html('5 - 8');
            }
            else if ($(this).parent().hasClass('travelers-last')) {
                $('.travelers-result-div .result').fadeOut('slow');
                $('.travelers-result-div .result').fadeIn('slow');
                $('.travelers-result-div .page').html('5 - 8');
            }


        }
    });

    $('#parcels-pagination li a').on('click', function () {
        if ($(this).parent().hasClass('disabled')) {

        }
        else {
            if ($(this).parent().hasClass('parcels-first')) {
                $('.parcels-result-div .result').fadeOut('slow');
                $('.parcels-result-div .result').fadeIn('slow');
                $('.parcels-result-div .page').html('5 - 8');
            }
            else if ($(this).parent().hasClass('parcels-previous')) {
                $('.parcels-result-div .result').fadeOut('slow');
                $('.parcels-result-div .result').fadeIn('slow');
                $('.parcels-result-div .page').html('5 - 8');
            }
            else if ($(this).parent().hasClass('parcels-next')) {
                $('.parcels-result-div .result').fadeOut('slow');
                $('.parcels-result-div .result').fadeIn('slow');
                $('.parcels-result-div .page').html('5 - 8');
            }
            else if ($(this).parent().hasClass('parcels-last')) {
                $('.parcels-result-div .result').fadeOut('slow');
                $('.parcels-result-div .result').fadeIn('slow');
                $('.parcels-result-div .page').html('5 - 8');
            }


        }
    });
    $('#shopping-pagination li a').on('click', function () {
        if ($(this).parent().hasClass('disabled')) {

        }
        else {
            if ($(this).parent().hasClass('shopping-first')) {
                $('.shopping-result-div .result').fadeOut('slow');
                $('.shopping-result-div .result').fadeIn('slow');
                $('.shopping-result-div .page').html('5 - 8');
            }
            else if ($(this).parent().hasClass('shopping-previous')) {
                $('.shopping-result-div.result').fadeOut('slow');
                $('.shopping-result-div .result').fadeIn('slow');
                $('.shopping-result-div .page').html('5 - 8');
            }
            else if ($(this).parent().hasClass('shopping-next')) {
                $('.shopping-result-div .result').fadeOut('slow');
                $('.shopping-result-div .result').fadeIn('slow');
                $('.shopping-result-div .page').html('5 - 8');
            }
            else if ($(this).parent().hasClass('shopping-last')) {
                $('.shopping-result-div .result').fadeOut('slow');
                $('.shopping-result-div .result').fadeIn('slow');
                $('.shopping-result-div .page').html('5 - 8');
            }
        }
    });

    $('#slider1').on('change', function () {
//        console.log((this).value);
        $('#amount1').html((this).value + "$");
    });
    $('#traveler-slider1').on('change', function () {
//        console.log((this).value);
        $('#traveler-amount1').html((this).value + "KG");
    });
    $('#traveler-slider2').on('change', function () {
//        console.log((this).value);
        $('#traveler-amount2').html((this).value + "$");
    });
    $('#shopping-item-price-slider').on('change', function () {
//        console.log((this).value);
        $('#shopping-item-price-amount').html((this).value + "$");
    });
    $('#shopping-delivery-fee-slider').on('change', function () {
//        console.log((this).value);
        $('#shopping-delivery-fee-amount').html((this).value + "$");
    });
    if ($('.do-this-slider').val() > parseInt($('.requested-price-amount').html())) {
        $('.warning-label').css('display', 'block');
    }
    else {
        $('.warning-label').css('display', 'none');
    }
    if ($('.do-this-slider-2').val() > parseInt($('.requested-price-amount-2').html())) {
        $('.warning-label-2').css('display', 'block');
    }
    else {
        $('.warning-label-2').css('display', 'none');
    }
    $('#you-do-this-slider-1').on('change',function(){
        //console.log("val:")
        //$(this).closest('.application-fee-modal').find('.slider-amount-label').css('display','none');
        $(this).closest('.application-fee-modal').find('.slider-amount-label').html($(this).val());
        //console.log("the log:")
        //console.log();
        //if($(this).val()>parseInt($('.requested-price-amount').html())){
        //    $('.warning-label').css('display','block');
        //    //console.log("here1");
        //}
        //else{
        //    $('.warning-label').css('display','none');
        //    //console.log("here2");
        //}
    });
    $('#you-do-this-slider-3').on('change',function(){
        //console.log("cal:"+$(this).closest('.application-fee-modal').children('.slider-amount-label'));
        $(this).closest('.application-fee-modal2').find('.slider-amount-label').html($(this).val())
        if($(this).val()>parseInt($(this).closest('.application-fee-modal2').find('.requested-price-amount').html())){
            $(this).closest('.application-fee-modal2').find('.warning-label').css('display','block');
            //console.log("here1");
        }
        else{
            $(this).closest('.application-fee-modal2').find('.warning-label').css('display','none');
            //console.log("here2");
        }
    });
    $('#you-do-this-slider-2').on('change',function(){
        $('.slider-amount-label-2').html($(this).val());
        if($(this).val()>parseInt($('.requested-price-amount-2').html())){
            $('.warning-label-2').css('display','block');
            //console.log("here1");
        }
        else{
            $('.warning-label-2').css('display','none');
            //console.log("here2");
        }
    });

    var input1 = document.getElementById('from-input');
    input1.onkeypress = function(){
        $('#from-input').geocomplete();
    }
    var input2 = document.getElementById('to-input');
    input2.onkeypress = function(){
        $('#to-input').geocomplete();
    }
    var input3 = document.getElementById('shopping-from-input');
    input3.onkeypress = function(){
        $('#shopping-from-input').geocomplete();
    }
    var input4 = document.getElementById('shopping-to-input');
    input4.onkeypress = function(){
        $('#shopping-to-input').geocomplete();
    }
    var input5 = document.getElementById('traveler-from-input');
    input5.onkeypress = function(){
        $('#traveler-from-input').geocomplete();
    }
    var input6 = document.getElementById('traveler-to-input');
    input6.onkeypress = function(){
        $('#traveler-to-input').geocomplete();
    }


    $('#from-date').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    $('#from-date2').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    $('#to-date').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    $('#to-date2').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    $('#shopping-due-in-date').bootstrapMaterialDatePicker({ weekStart : 0 ,time: false } );
    $('.travelers-a').on('click',function(){
        $('.parcels-result-div').css('display','none');
        $('.shopping-result-div').css('display','none');
        $('.travelers-result-div').css('display','block');
    });
    $('.parcels-a').on('click',function(){
        $('.parcels-result-div').css('display','block');
        $('.shopping-result-div').css('display','none');
        $('.travelers-result-div').css('display','none');
    });
    $('.shopping-a').on('click',function(){
        $('.travelers-result-div').css('display','none');
        $('.parcels-result-div').css('display','none');
        $('.shopping-result-div').css('display','block');
    });


//    $('#from-date').bootstrapMaterialDatePicker('setMinDate', moment());
//    $('#to-date').bootstrapMaterialDatePicker('setMinDate', moment());
});