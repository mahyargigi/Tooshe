$(document).ready(function(){
    $('#search-button').on('click',function(){
        if(false){
            //    this function for getting no appropriate result
            $('#or-noResult').html('No result found for Your request! :(');
        }
        else{
            //    this funciton for getting appropriate result
            $('#or-noResult').html('None of above ?');
            document.getElementById("suggestions-div").style.display = 'block';
//            document.getElementById("optimized-suggestions-container").style.display = 'block';
//            document.getElementById("optimizedDeals1").style.display = 'block';
//            document.getElementById("optimizedDeals2").style.display = 'block';
        }
    });
    $("#suggestions").owlCarousel({
        items : 3,
        lazyLoad : true,
        navigation : true
    });
    $("#deal1").owlCarousel({
        items : 5,
        lazyLoad : true,
        navigation : true
    });
    $("#deal2").owlCarousel({
        items : 5,
        lazyLoad : true,
        navigation : true
    });


});