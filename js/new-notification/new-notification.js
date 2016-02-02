/**
 * Created by User on 12/17/15.
 */
$(document).ready(function(){
    var width = $('.goods-img').width();
    $('.goods-img').css({'height':width+'px'});
    $(window).resize(function(){
        var width = $('.goods-img').width();
        $('.goods-img').css({'height':width+'px'});
    });

});