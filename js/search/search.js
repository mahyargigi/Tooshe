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
        $('#picks-image').attr("src","img/search/l.png");
        $('#packs-image').attr("src","img/search/d2.png");
        $('#goods-image').attr("src","img/search/s2.png");
        $('#picks-li').css('color','lightseagreen');
        $('#packs-li').css('color','rgba(117, 116, 116, 0.80)');
        $('#goods-li').css('color','rgba(117, 116, 116, 0.80)');
    });
    $('#packs-li').on('click',function(){
        $('#picks-image').attr("src","img/search/l2.png");
        $('#packs-image').attr("src","img/search/d.png");
        $('#goods-image').attr("src","img/search/s2.png");
        $('#packs-li').css('color','lightseagreen');
        $('#picks-li').css('color','rgba(117, 116, 116, 0.80)');
        $('#goods-li').css('color','rgba(117, 116, 116, 0.80)');
    });
    $('#goods-li').on('click',function(){
        $('#picks-image').attr("src","img/search/l2.png");
        $('#packs-image').attr("src","img/search/d2.png");
        $('#goods-image').attr("src","img/search/s.png");
        $('#picks-li').css('color','rgba(117, 116, 116, 0.80)');
        $('#packs-li').css('color','rgba(117, 116, 116, 0.80)');
        $('#goods-li').css('color','lightseagreen');
    });

    $('#picks-li').on('click',function(){
        $('#picks-ul').show();
        $('#packs-ul').hide();
        $('#goods-ul').hide();
    });
    $('#packs-li').on('click',function(){
        $('#picks-ul').hide();
        $('#packs-ul').show();
        $('#goods-ul').hide();
    });
    $('#goods-li').on('click',function(){
        $('#picks-ul').hide();
        $('#packs-ul').hide();
        $('#goods-ul').show();
    });
    $('.picks-pagination li a').on('click',function(){
        if($(this).parent().hasClass('disabled')){

        }
        else{
            if($(this).html()==='«'){
                var current = $('#picks-pagination li.active:first').prev();
                var page = $('a',current).html();
                $('#picks-ul > li.'+page).show();
                $('#picks-ul >li:not(.'+page+')').hide();
                current.parent().children().removeClass('active');
                current.addClass('active');
            }
            else if($(this).html()==='»'){
                var current = $('#picks-pagination li.active:first').next();
                var page = $('a',current).html();
                console.log("current is="+current);
                console.log("page is="+page);
                $('#picks-ul > li.'+page).show();
                $('#picks-ul >li:not(.'+page+')').hide();
                current.parent().children().removeClass('active');
                current.addClass('active');
            }
            else{
                $('#picks-ul > li.'+$(this).html()).show();
                $('#picks-ul >li:not(.'+$(this).html()+')').hide();
                $(this).parent().parent().children().removeClass('active');
                $(this).parent().addClass('active');
            }
            if($('#paiks-pagination li.first-page').hasClass('active')){
                $('#picks-previous').addClass('disabled');
                $('#picks-next').removeClass('disabled');
            }
            if($('#picks-pagination li.last-page').hasClass('active')){
                $('#picks-previous').removeClass('disabled');
                $('#picks-next').addClass('disabled');
            }
            if($('#picks-pagination li.last-page.first-page').hasClass('active')){
                $('#picks-previous').removeClass('disabled');
                $('#picks-next').removeClass('disabled');
            }
        }
    });
    $('#packs-pagination li a').on('click',function(){
        if($(this).parent().hasClass('disabled')){

        }
        else{
            if($(this).html()==='«'){
                var current = $('#packs-pagination li.active:first').prev();
                var page = $('a',current).html();
                $('#packs-ul > li.'+page).show();
                $('#packs-ul >li:not(.'+page+')').hide();
                current.parent().children().removeClass('active');
                current.addClass('active');
            }
            else if($(this).html()==='»'){
                var current = $('#packs-pagination li.active:first').next();
                var page = $('a',current).html();
                console.log("current is="+current);
                console.log("page is="+page);
                $('#packs-ul > li.'+page).show();
                $('#packs-ul >li:not(.'+page+')').hide();
                current.parent().children().removeClass('active');
                current.addClass('active');
            }
            else{
                $('#packs-ul > li.'+$(this).html()).show();
                $('#packs-ul >li:not(.'+$(this).html()+')').hide();
                $(this).parent().parent().children().removeClass('active');
                $(this).parent().addClass('active');
            }
            if($('#packs-pagination li.first-page').hasClass('active')){
                $('#packs-previous').addClass('disabled');
                $('#packs-next').removeClass('disabled');
            }
            if($('#packs-pagination li.last-page').hasClass('active')){
                $('#packs-previous').removeClass('disabled');
                $('#packs-next').addClass('disabled');
            }
            if($('#packs-pagination li.last-page.first-page').hasClass('active')){
                $('#packs-previous').removeClass('disabled');
                $('#packs-next').removeClass('disabled');
            }
        }
    });
    $('input[type=radio]').on('click',function(){
        if($('#specific-categories-radio').is(':checked')){
            $('#modal1').modal("show");
        }
    });
    $('.picks-btn').on('click',function(){
        $('#modal2').modal("show");
    });
    $('#modal2 input[type=radio]').on('click',function(){
       if($('#optionsRadios1').is(':checked')){
             console.log("hello1");
            $('#upper-image').attr('src','img/search/create-req2.png');
            $('#upper-a').attr('href','#');
            $('#bottom-image').attr('src','img/search/create-req.png');
            $('#bottom-image').removeAttr('href');
        }
        if($('#optionsRadios2').is(':checked')){
             console.log("hello2");
            $('#bottom-image').attr('src','img/search/create-req2.png');
            $('#bottom-a').attr('href','#');
            $('#upper-image').attr('src','img/search/create-req.png');
            $('#upper-a').removeAttr('href');
        }
    });
    $('.mark-all').on('click',function(){
        var attr = $(this).attr('checked');
        console.log("attr is = "+attr)
        // For some browsers, `attr` is undefined; for others,
        // `attr` is false.  Check for both.
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).removeAttr("checked");
            $('.modal-checkbox').each(function(){
                $(this).removeProp("checked");
            });
        }
        else{

            $(this).attr("checked","");
            $('.modal-checkbox').each(function(){
                $(this).prop("checked","true");
            });
        }
    });
});
