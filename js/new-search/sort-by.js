$(document).ready(function(){
    $('.traveler-select').change(function(){
        //$('option').on('click',function(){
        //    console.log("selected!");
        //    console.log($(this).html);
        //});
        if($(this).val() === 'Price'){
            $('.traveler-second-select').html(
                '<option>Low to high</option>'+'<option>High to low</option>');
        }else if($(this).val() === 'Weight'){
            $('.traveler-second-select').html(
                '<option>Low to High</option>'+'<option>High to Low</option>');
        }else if($(this).val() === 'Date'){
            $('.traveler-second-select').html(
                '<option>Close to Far</option>'+'<option>Far to close</option>');
        }else if($(this).val() === 'Reputation'){
            $('.traveler-second-select').html(
                '<option>Verified users first</option>'+'<option>Top rated</option>');
        }
    });
    $('.parcels-select').change(function(){
        if($(this).val() === 'Weight'){
            $('.parcels-second-select').html(
                '<option>Heavy to Light</option>'+'<option>Light to Heavy</option>');
        }else if($(this).val() === 'Delivery Fee'){
            $('.parcels-second-select').html(
                '<option>Low to High</option>'+'<option>High to Low</option>');
        }
    });
    $('.shopping-select').change(function(){
        if($(this).val() === 'Weight'){
            $('.shopping-second-select').html(
                '<option>Heavy to Light</option>'+'<option>Light to Heavy</option>');
        }else if($(this).val() === 'Price'){
            $('.shopping-second-select').html(
                '<option>Low to High</option>'+'<option>High to Low</option>');
        }else if($(this).val() === 'Delivery Fee'){
            $('.shopping-second-select').html(
                '<option>Low to High</option>'+'<option>High to Low</option>');
        }
    });
})