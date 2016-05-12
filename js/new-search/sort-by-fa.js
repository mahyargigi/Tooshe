$(document).ready(function(){
    $('.traveler-select').change(function(){
        //$('option').on('click',function(){
        //    console.log("selected!");
        //    console.log($(this).html);
        //});
        if($(this).val() === 'قیمت'){
            $('.traveler-second-select').html(
                '<option>کم به زیاد</option>'+'<option>زیاد به کم</option>');
        }else if($(this).val() === 'وزن'){
            $('.traveler-second-select').html(
                '<option>کم به زیاد</option>'+'<option>زیاد به کم</option>');
        }else if($(this).val() === 'تاریخ'){
            $('.traveler-second-select').html(
                '<option>تاریخ های نزدیکتر</option>'+'<option>تاریخ های دورتر</option>');
        }else if($(this).val() === 'سابقه'){
            $('.traveler-second-select').html(
                '<option>اول کاربران تایید شده</option>'+'<option>میزان سابقه</option>');
        }
    });
    $('.parcels-select').change(function(){
        if($(this).val() === 'وزن'){
            $('.parcels-second-select').html(
                '<option>ینگین به یبک</option>'+'<option>سبک به سنگین</option>');
        }else if($(this).val() === 'کارمزد جابه جایی'){
            $('.parcels-second-select').html(
                '<option>کم به زیاد</option>'+'<option>زیاد به کم</option>');
        }
    });
    $('.shopping-select').change(function(){
        if($(this).val() === 'وزن'){
            $('.shopping-second-select').html(
                '<option>سنگین به سبک</option>'+'<option>سبک به سنگین</option>');
        }else if($(this).val() === 'قیمت'){
            $('.shopping-second-select').html(
                '<option>کم به زیاد</option>'+'<option>زیاد به کم</option>');
        }else if($(this).val() === 'کارمزد جابه جایی'){
            $('.shopping-second-select').html(
                '<option>کم به زیاد</option>'+'<option>زیاد به کم</option>');
        }
    });
})