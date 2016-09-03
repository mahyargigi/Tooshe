$(document).ready(function(){
    $('.navbar-notif').on('click',function(){
       $(this).fadeOut(500);
       var new_container_margin_length = ($('.container-fluid').css('margin-top')).length;
       var new_margin = parseInt(($('.container-fluid').css('margin-top')).substring(0,new_container_margin_length-2));
       $('.container-fluid').css('margin-top' , String(new_margin -height +"px"));
    });
    var container_margin_length = ($('.container-fluid').css('margin-top')).length;
    var height_length = ($('.navbar-notif').css('height')).length;
    var margin = parseInt(($('.container-fluid').css('margin-top')).substring(0,container_margin_length-2));
    var height = parseInt(($('.navbar-notif').css('height')).substring(0,height_length-2));
    if($('.navbar-notif').css('display') == 'block'){
        $('.container-fluid').css('margin-top' , String(margin+height+"px"));
    };
    //console.log("margin: "+$('.container-fluid').css('margin-top'));
    //console.log("margin: "+margin);
    //console.log("height: "+width);
    //console.log("height: "+$('.navbar-notif').css('height'));
});