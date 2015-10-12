/**
 * Created by User on 10/5/15.
 */
$(document).ready((function(){
    $('.close').on('click',function(){
        $(this).closest('.row-li').remove();
    });
    $('.remove-btn').on('click',function(){
    var element = $(this).closest('.travel-info');
    element.remove();
});
}));
