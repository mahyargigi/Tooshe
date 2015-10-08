/**
 * Created by User on 10/5/15.
 */
$('.remove-btn').on('click',function(){
    var element = $(this).closest('.travel-info');
    element.remove();
});