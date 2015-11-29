/**
 * Created by User on 10/5/15.
 */
$(document).ready((function(){
    $('.close').on('click',function(){
        $(this).closest('.row-li').remove();
    });
    $('.trash-link').on('click',function(){
        console.log("here1");
        var element = $(this).closest('.travel-info');
        $('.modal').modal("show");
        console.log("here2");
        $('.confirm-delete').on('click',function(){
            element.remove();
            $('.modal').modal("hide");
        });

    });
    $('.hidden-element').hide();
    window.setTimeout(function() {
        $('.fade-in-1').fadeIn(500);
    }, 1000);
    window.setTimeout(function() {
        $('.fade-in-2').fadeIn(500);
    }, 1500);
    window.setTimeout(function() {
        $('.fade-in-3').fadeIn(500);
    }, 2000);
    window.setTimeout(function() {
        $('.fade-in-4').fadeIn(500);
    }, 2500);
    window.setTimeout(function() {
        $('.fade-in-5').fadeIn(500);
    }, 3000);

    var input1 = document.getElementById('input-address');
    input1.onkeypress = function(){
        $('#input-address').geocomplete();
    }
//    $('.done-name').on('click',function(){
//       $(this).html("edit");
//       $(this).addClass('edit-name');
//       $(this).removeClass('done-name');
//       $('#name').attr('contenteditable','false');
//        console.log("2");
//    });

    $('.edit-name').on('click',function(){
       if($(this).hasClass('done-name')){
           $(this).html("ویرایش");
           $(this).addClass('edit-name');
           $(this).removeClass('done-name');
           $('#name').attr('contenteditable','false');
       }
        else{
            $(this).html("تمام");
           $(this).addClass('done-name');
           $(this).removeClass('edit-name');
           $('#name').attr('contenteditable','true');
           $('#name').focus();
           place
       }
    });
    $('.edit-address').on('click',function(){
        if($(this).hasClass('done-address')){
           $(this).html("ویرایش");
           $(this).addClass('edit-address');
           $(this).removeClass('done-address');
//           $('#address').attr('contenteditable','false');

           var value = $('#input-address').val();
//           $('#address').html('<a href="#" id="test2" class="edit-address">'+value+'</a>');
           $('#input-address').css('display','none');
           $('#address').html(value);
           $('#address').css('display','');
        }
        else{
            $(this).html("تمام");
            $(this).addClass('done-address');
            $(this).removeClass('edit-address');
//           $('#address').attr('contenteditable','true');
            var content = $('#address').html();
//            console.log(""content);
            $('#input-address').css('display','inline');
            $('#input-address').attr('value',content);
            $('#address').css('display','none');

        }
    });

    $('.thumbs-down').on('click',function(){
       var thumbs_up = $(this).parent().parent().find('.thumbs-up-div').find('input[type=image].thumbs-up');
       var thumbs_down = $(this);
       var negative_thumb_label = $(this).parent().find('.negative-thumb-label');
       var positive_thumb_label =  $(this).parent().parent().find('.thumbs-up-div').find('.positive-thumb-label');
        if($(this).hasClass('thumbs-down-deactive')){
           console.log("1");
        thumbs_down.addClass('thumbs-down-active');
        thumbs_down.removeClass('thumbs-down-deactive');
        thumbs_down.attr('src','img/user-profile/Thumb_down_icon_2.svg.png');
        thumbs_up.addClass('thumbs-up-deactive');
        thumbs_up.removeClass('thumbs-up-active');
        thumbs_up.attr('src','img/user-profile/thumbs-up-deactive.png');
        negative_thumb_label.html('1');
        positive_thumb_label.html('0');
       }
        else if($(this).hasClass('thumbs-down-active')){
           console.log("2");
           thumbs_down.removeClass('thumbs-down-active');
            thumbs_down.addClass('thumbs-down-deactive');
            thumbs_down.attr('src','img/user-profile/thumbs-down-deactive.png');
            negative_thumb_label.html('0');
            positive_thumb_label.html('0');
       }
    });
    $('.thumbs-up').on('click',function(){
        var thumbs_up = $(this);
        var thumbs_down = $(this).parent().parent().find('.thumbs-down-div').find('input[type=image].thumbs-down');
        var positive_thumb_label = $(this).parent().find('.positive-thumb-label');
        var negative_thumb_label =  $(this).parent().parent().find('.thumbs-down-div').find('.negative-thumb-label');
        if($(this).hasClass('thumbs-up-deactive')){
            console.log("3");
            thumbs_down.removeClass('thumbs-down-active');
            thumbs_down.addClass('thumbs-down-deactive');
            thumbs_down.attr('src','img/user-profile/thumbs-down-deactive.png');
            thumbs_up.removeClass('thumbs-up-deactive');
            thumbs_up.addClass('thumbs-up-active');
            thumbs_up.attr('src','img/user-profile/thumbs-up-active.png');
            negative_thumb_label.html('0');
            positive_thumb_label.html('1');
        }
       else if($(this).hasClass('thumbs-up-active')){
            console.log("4");
            thumbs_up.addClass('thumbs-up-deactive');
            thumbs_up.removeClass('thumbs-up-active');
            thumbs_up.attr('src','img/user-profile/thumbs-up-deactive.png');
//            console.log("click");
            negative_thumb_label.html('0');
            positive_thumb_label.html('0');
       }
    })  ;

}));
