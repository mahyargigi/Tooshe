<?php
if(Auth::check()){
    $user = Auth::user();
}
?>
<!DOCTYPE html>
<html lang="fa">
<head>
    <title></title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/css/global/bootstrap.min.css" rel="stylesheet">
    <link href="/css/global/material.min.css" rel="stylesheet">
    <link href="/css/global/material-fullpalette.min.css" rel="stylesheet">
    <!--<link href="css/global/bootstrap-material-datepicker.css" rel="stylesheet">-->
    <link href="/css/pickaday/pikaday.css" rel="stylesheet">

    <link href="/css/flightSubmit/flightSubmit-fa.css" rel="stylesheet">
    <link href="/css/global/input-styles.css" rel="stylesheet">

        <!--navbar css-->
    <link href="/css/most-new-navbar/style.css" rel="stylesheet">
    <link href="/css/most-new-navbar/navbar.css" rel="stylesheet">
    <link href="/css/most-new-navbar/most-new-navbar.css" rel="stylesheet">
    <link href="/css/footer/footer-fa.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link href="/css/flightSubmit/flightSubmit-input-styles.css" rel="stylesheet">
    <link href="/css/modal/modal.css" rel="stylesheet">
    <link href="/css/global/farsi-font.css" rel="stylesheet">
    <link href="/css/global/farsi-datepicker-font.css" rel="stylesheet">
    <!--<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>-->
</head>
<body>

    <div class="navmenu navmenu-inverse navmenu-fixed-right offcanvas">
            <ul class="nav navmenu-nav">

                <li><a href="/">
                    خانه
                </a></li>
                <li class="divider"></li>
                <li><a href="/search" class="">
                    جست و جو
                </a></li>
                <li class="divider"></li>
                <li><a href="/order">
                    خرید
                </a></li>
                <li><a href="/send" class="highlighted">
                    ارسال
                </a></li>
                <li><a href="/travelSubmit" class="">
                    ثبت سفر
                </a></li>

                @if(!Auth::check())
                <!--not signed up 1-->
                <li><a href="#"  data-toggle="modal" data-target="#signup_modal2">
                    عضویت
                </a> </li>
                <li><a href="#" data-toggle="modal" data-target="#signin_modal2">
                    ورود
                </a> </li>
                <!--end not signed up-->
                @else 

                <!--signed in 1-->

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                 نوتیفیکیشن ها
                        <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu navmenu-nav note-ul" dir="rtl">
                        <!-- <li><a href="/dashboard/profile">
                            ali درخواست ارسال بار کرده است.
                            </a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="/dashboard/payment">
                        ali درخواست تو را پذیرفت.
                        </a></li>
                        <li class="divider"></li>
                        <li><a href="/dashboard/account">
                            ali به تو درخواست خرید یک جنس را داده است.
                        </a></li> -->
                    </ul>
                </li>
                <li class="divider"></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        داشبورد
                        <b class="caret"></b></a>
                    <ul class="dropdown-menu navmenu-nav dash-ul" dir="rtl">
                        <li><a href="/profile">
                            پروفایل من
                        </a></li>
                        <li class="divider"></li>
                        <li><a href="#">
                            کیف پول من
                        </a></li>
                        <li class="divider"></li>
                        <li><a href="/dashboard/account">
                            کمک
                        </a></li>
                        <li><a href="/dashboard/editprofile">
                            تنظیمات
                        </a></li>
                        <li class="divider"></li>
                        <li><a href="/profile/logout">
                            خروج
                        </a> </li>
                    </ul>
                </li>

                <!--end signed in 1-->
                @endif
            </ul>
        </div>
    <div class="navbar navbar-default mynavbar navbar-fixed-top">
        <div class="container" style="padding-top: 0px;">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="offcanvas" data-target=".navmenu" data-canvas="body">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/"><img src="/img/most-new-navbar/Tooshe_logo.png" alt="Tooshe" style="position: fixed;top: 25px;;left: 0;margin-left: 20px;margin-bottom: 10px;height: 45px;width: 110px;"></a>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav search-navbar">
                    <li id="search_button">
                        <a class="page-scroll search-a" href="/search"><i class="fa fa-lg fa-search search-i"></i>
                        جست و جو
                        </a>
                    </li>
                </ul>

            </div>

            </div>

            <div class="navbar-collapse collapse">
                <ul id="middle-navbar" class="nav navbar-nav navbar-right" >
                    <li class="middle-li">
                        <a class="page-scroll order-sth-a" href="/order"><i class="fa fa-lg fa-shopping-cart order-sth-i"></i>
                        خرید
                        </a>
                    </li>
                    <li class="middle-li">
                        <a class="page-scroll send-sth-a" href="/send"><i class="fa fa-lg fa-gift send-sth-i"></i>
                        ارسال
                        </a>
                    </li>
                    <li id="rightest-li" class="middle-li">
                        <a class="page-scroll take-sth-a" href="/travelSubmit"><i class="fa fa-lg fa-plane take-sth-i"></i>
                        ثبت سفر
                        </a>
                    </li>

                    @if(!Auth::check())
                    <!--not signed up 2-->
                    <li id="sign-in">
                        <a href="#" class="dropdown-toggle" role="button" aria-expanded="false" data-toggle="modal" data-target="#signin_modal2" >
                            ورود
                        </a>
                    </li>
                    <li id="join">
                        <a href="#" class="dropdown-toggle" role="button" aria-expanded="false" data-toggle="modal" data-target="#signup_modal2" >
                            عضویت
                        </a>
                    </li>
                    <!--end not signed up 2-->
                    @else
                    <!--signed in 2-->
                    <li id="bell-li" class="dropdown" style="background: none;"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" style="padding: 0px;margin-right: 40px;">
                        <img src="/img/most-new-navbar/Bell-Icon.png" alt="note" class="img-circle" style="height:32px;margin-top:-5px;margin-left: 0px;">

                        </a>
                            <ul class="dropdown-menu note-ul" role="menu" dir="rtl">
                                <!-- <li><a href="/profile.html" style="">
                            ali درخواست ارسال بار کرده است.
                                </a></li>
                                <li class="divider"></li>
                                <li><a href="payment.html">
                        ali درخواست تو را پذیرفت.
                                </a></li>
                                <li class="divider"></li>
                                <li><a href="account.html">
                            ali به تو درخواست خرید یک جنس را داده است.
                                </a></li> -->
                            </ul>
                    </li>
                    <li id="profile-li" class="dropdown" style="background: none;">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            <img src=<?php echo "\"/profilepics/".$user->profile_image."\"" ?> class="img-circle" style="height:32px;margin-top:-5px;margin-left: 0px;">

                        </a>
                        <ul class="dropdown-menu dash-ul" role="menu">
                            <li><a href="/profile">
                                پروفایل من
                            </a></li>
                            <li class="divider"></li>
                            <li><a href="#">
                                کیف پول من
                            </a></li>
                            <li class="divider"></li>
                            <li><a href="#">
                                کمک
                            </a></li>
                            <li><a href="/dashboard/editprofile">
                                تنظیمات
                            </a></li>
                            <li class="divider"></li>
                            <li><a href="/profile/logout">
                                خروج
                            </a></li>
                        </ul>
                    </li>
                    <!--end signed in 2-->
                    @endif
                </ul>
            </div>
        </div>
    </div>
    </div>


    <div class="container-fluid">
        <div class="row container-row" style="margin-top: 50px;">
            <div class="col-md-2"></div>
            <div class="col-md-8 col-sm-12 col-xs-12">

                <!-- <form id="flight-form"> -->
                @if(Auth::check())
                <form id="flight-form" method="post" action="travelSubmit">
                @else
                <form id="flight-form" method="post" action="anonymous-travelSubmit">
                @endif
                    <div class="row" id="title">
                        <h3 class="header">
                            برنامه ی سفرت را اعلام کن
                        </h3>
                    </div>
                    <div class="row first-row">
                        <!--<div class="col-md-1"></div>-->
                        <div class="col-md-5 col-sm-6 col-xs-12">
                            <label class="travel-label col-xs-12 visible-xs">
                                شهر مبدا
                            </label>
                            <label class="travel-label hidden-xs" style="margin-left: 40px;">
                                شهر مبدا
                            </label>
                            <input id="departure-city" class="input-lg travel-input" name="startpoint" placeholder="به انگلیسی" value="{{Input::old('startpoint')}}">
                            {!! $errors->first('startpoint' , '<h6 style="color:red">شهر مبدا به درستی وارد نشده است</h6>') !!}
                        </div>
                        <div class="col-md-2"></div>
                        <div class="col-md-5 col-sm-6 col-xs-12">
                            <label class="travel-label col-xs-12 visible-xs">
                            شهر مقصد
                            </label>
                            <label class="travel-label hidden-xs">
                            شهر مقصد
                            </label>
                            <input id="arrival-city" class="input-lg travel-input" name="destination" placeholder="به انگلیسی" value="{{Input::old('destination')}}">
                            {!! $errors->first('destination' , '<h6 style="color:red">شهر مقصد به درستی وارد نشده است</h6>') !!}
                        </div>
                    </div>
                    <div class="row second-row">
                        <!--<div class="col-md-1">-->

                        <!--</div>-->
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <label class="travel-label visible-xs col-xs-12">
                                تاریخ پرواز
                            </label>
                            <label class="travel-label hidden-xs" style="margin-left: 40px;">
                                تاریخ پرواز
                            </label>
                            <input class="form-input input-lg travel-input second-line-input" id="date1" name="takeofftime" value="{{Input::old('takeofftime')}}">
                            {!! $errors->first('takeofftime' , '<h6 style="color:red">تاریخ پرواز به درستی وارد نشده است</h6>') !!}
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <label class="travel-label col-xs-12 visible-xs">
تاریخ فرود پرواز
                            </label>
                            <label class="travel-label hidden-xs">
تاریخ فرود پرواز
                            </label>
                            <input class="form-input input-lg travel-input second-line-input" id="date2" name="landingtime" value="{{Input::old('landingtime')}}">
                            {!! $errors->first('landingtime' , '<h6 style="color:red">تاریخ فرود به درستی وارد نشده است</h6>') !!}
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <label class="travel-label col-xs-12 visible-xs">
                                آخرین روز اقامت
                            </label>
                            <label class="travel-label hidden-xs">
                                آخرین روز اقامت
                            </label>
                            <input class="form-input input-lg travel-input second-line-input" id="date3" name="staytime" value="{{Input::old('staytime')}}" placeholder="اختیاری">
                        </div>
                    </div>
                    
                    <hr style="border-color: #c6c6c6;">
                    <div class="row form-horizontal">
                        <!--<div class="col-md-2"></div>-->
                        <div class="col-md-6 col-sm-12 col-xs-12">
                            <div class="row textarea-row " style="margin-top: 0px ; margin-left: 0px;">
                                <!--<label id="any-information" style="width: 80%;" dir="rtl" >-->
                                   <!--آیا چیز دیگری هست که افراد باید در مورد مسافرت شما بدانند ؟-->
                            <!--<br>-->
                                    <!--(نظیر محدودیت ها و ...)-->
                                <!--</label>-->
                                <textarea class="" name="description" placeholder="آیا چیز دیگری هست که افراد باید در مورد مسافرت شما بدانند؟" dir="rtl" rows="6" id="textArea"></textarea>
                            </div>
                            <!--<div class="row">-->
                            <br>
                            <br>
                            <!--</div>-->
                        </div>
                        <div class="col-md-6 col-sm-9 col-xs-12">
                            <!--<div class="col-sm-1 col-xs-1 visible-xs visible-sm"></div>-->
                            <div class="col-md-4 col-sm-6 col-xs-3" style="padding-left: 0px;">
                                <label class="travel-label max-weight-label" dir="rtl">
ظرفیت بار
                                </label>
                            </div>
                            <div class="col-md-3 col-sm-3 col-xs-4">
                                <input type="number" name="maxweight" class="input-lg" min='1' max='40' id="max-weight-input">
                                {!! $errors->first('weight' , '<h6 style="color:red">وزن به درستی وارد نشده است</h6>') !!}
                            </div>
                            <div class="col-md-1 col-sm-2">
                                <label class="travel-label" style="position: relative;top: 7px;">
                                    کیلوگرم
                                </label>
                            </div>
                            @if(Auth::check())
                            <div class="btn btn-material-cyan btn-material-cyan-400" onclick="document.getElementById('flight-form').submit(); return false;" id='submit-button'>سفر من را ثبت کن</div>
                            @else
                            <div class="btn btn-material-cyan btn-material-cyan-400" id='submit-button' data-toggle="modal" data-target="#signup_modal">
                                    سفر من را ثبت کن
                            </div>
                            @endif
                        </div>
                        <!--<div class="col-md-3 col-sm-3 col-xs-3" id="warning-div">-->
                            <!--&lt;!&ndash;<label>You cannot carry more than 40kg!</label>&ndash;&gt;-->
                        <!--</div>-->
                    </div>
                
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>





 <!-- Modal -->
        <div class="modal fade" id="signin_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <br>
                <h4 class="modal-title" id="myModalLabel" style="text-align:center">ورود به حساب کاربری</h4>
                <span style="display:block;text-align:center">با <a class="fbcl" href="/fb">فیسبوک</a> یا <a class="glcl" href="/google">گوگل</a></span>
                <p class="or_container"><span>یا</span></p>
              </div>
              <div class="modal-body">

              <!-- <form novalidate action="/signin" method="post"> -->
                <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
                <div class="row">
                    <div class="col-md-12 signinfield">
                        <div class="form-group mgb">
                            <input type="email" class="form-control" name="loginEmail" value="{{Input::old('loginEmail')}}" placeholder="ایمیل" id="signin-username" required data-validation-required-message="لطفا ایمیل خود را وارد کنید" data-validation-email-message="فرمت ایمیل صحیح نمی‌باشد.">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                </div>
                
                
                <div class="row">
                    <div class="col-md-12 signinfield">
                        <div class="form-group mgb">
                            <input type="password" class="form-control" name="loginPassword" placeholder="رمز عبور" id="signin-password" required data-validation-required-message="لطفا رمز عبور خود را وارد کنید">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 signinfield">

                        <div class="checkbox">
                          <label>
                            <input type="checkbox" name="remember"> مرا به خاطر بسپار
                          </label>
                        <span style="float:left;"><a href="/password/email">رمزعبور را فراموش کرده‌ام</a></span>
                        </div>

                    </div>

                </div>
              </div>
              <div class="modal-footer">
                <div onclick="tester();" class="btn btn-primary" style="margin-top:0px;">ورود</div>
                <input type="hidden" value="Not set" id="submitCheck" name="submitCheck" >
                <button type="button" class="btn btn-default" data-dismiss="modal">انصراف</button>
                <p>عضو توشه نشده‌اید؟ <a href="#" data-toggle="modal" data-target="#signup_modal" data-dismiss="modal">عضویت</a> رایگان</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal -->
        <script type="text/javascript">
        function tester(){
            document.getElementById('submitCheck').value='login';
            document.getElementById('flight-form').submit(); return false;
        }
    </script>

<!-- Modal -->
        <div class="modal fade" id="signup_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <br>
                <h4 class="modal-title" id="myModalLabel" style="text-align:center">برای تکمیل درخواست کافیست عضو شوید</h4>
                <span style="display:block;text-align:center">با <a class="fbcl" href="#">فیسبوک</a> یا <a class="glcl" href="#">گوگل</a></span>
                <p class="or_container"><span>یا</span></p>
              </div>
              <div class="modal-body">
              <!-- <form novalidate action="signup" method="post"> -->
                <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
                <div class="row">

                    <div class="col-md-6 signupfield">
                        <div class="form-group">
                            <input type="text" class="form-control" value="{{Input::old('firstname')}}" name="firstname" placeholder="نام" id="signup-faname" required data-validation-required-message="نام ضروری است" pattern="^[a-zA-Z ]{2,15}$" data-validation-pattern-message="فقط شامل حروف انگلیسی باشد">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>

                    <div class="col-md-6 signupfield">
                        <div class="form-group">
                            <input type="text" class="form-control" value="{{Input::old('lastname')}}" name="lastname" placeholder="نام خانوادگی" id="signup-laname" required data-validation-required-message="نام ضروری است" pattern="^[a-zA-Z ]{2,15}$" data-validation-pattern-message="فقط شامل حروف انگلیسی باشد">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>

                    <div class="col-md-12 signupfield">
                        <div class="form-group">
                            <input type="email" class="form-control" value="{{Input::old('email')}}" name="email" placeholder="ایمیل" id="signup-username" required data-validation-required-message="لطفا ایمیل خود را وارد کنید" data-validation-email-message="فرمت ایمیل صحیح نمی‌باشد.">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>

                    <div class="col-md-12 signupfield">
                        <div class="form-group">
                            <input type="password" class="form-control" name="password" placeholder="رمز عبور" id="signup-password" minlength="6" required data-validation-required-message="لطفا رمز عبور خود وارد کنید" data-validation-minlength-message="حداقل 6 کاراکتر">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>

                    <div class="col-md-12 signupfield">
                        <span style="margin-left:30px;">جنسیت:</span>
                        <div class="radio" style="display:inline-block;">
                          <label>
                            <input type="radio" name="sex" value="Male" checked="checked"> مرد  
                          </label>
                          <label>
                            <input type="radio" name="sex" value="Female"> زن
                          </label>
                        </div>
                    </div>
                
                    <div class="col-md-12 signupfield">
                        <span>تاریخ تولد:</span>
                        <div class="birthday">
                            <select name="day" class="form-control">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="19">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                              <option value="16">16</option>
                              <option value="17">17</option>
                              <option value="18">18</option>
                              <option value="19">19</option>
                              <option value="20">20</option>
                              <option value="21">21</option>
                              <option value="22">22</option>
                              <option value="23">23</option>
                              <option value="24">24</option>
                              <option value="25">25</option>
                              <option value="26">26</option>
                              <option value="27">27</option>
                              <option value="28">28</option>
                              <option value="29">29</option>
                              <option value="30">30</option>
                              <option value="31">31</option>
                            </select>
                            <select name="month" class="form-control">
                              <option value="Jan">Jan</option>
                              <option value="Feb">Feb</option>
                              <option value="Mar">Mar</option>
                              <option value="Apr">Apr</option>
                              <option value="May">May</option>
                              <option value="Jun">Jun</option>
                              <option value="Jul">Jul</option>
                              <option value="Aug">Aug</option>
                              <option value="Sep">Sep</option>
                              <option value="Oct">Oct</option>
                              <option value="Nov">Nov</option>
                              <option value="Dec">Dec</option>
                            </select>
                            <select name="year" class="form-control">
                              <option value="2005">2005</option>
                              <option value="2004">2004</option>
                              <option value="2003">2003</option>
                              <option value="2002">2002</option>
                              <option value="2001">2001</option>
                              <option value="2000">2000</option>
                              <option value="1999">1999</option>
                              <option value="1998">1998</option>
                              <option value="1997">1997</option>
                              <option value="1996">1996</option>
                              <option value="1995">1995</option>
                              <option value="1994">1994</option>
                              <option value="1993">1993</option>
                              <option value="1992">1992</option>
                              <option value="1991">1991</option>
                              <option value="1990">1990</option>
                              <option value="1989">1989</option>
                              <option value="1988">1988</option>
                              <option value="1987">1987</option>
                              <option value="1986">1986</option>
                              <option value="1985">1985</option>
                              <option value="1984">1984</option>
                              <option value="1983">1983</option>
                              <option value="1982">1982</option>
                              <option value="1981">1981</option>
                              <option value="1980">1980</option>
                              <option value="1979">1979</option>
                              <option value="1978">1978</option>
                              <option value="1977">1977</option>
                              <option value="1976">1976</option>
                              <option value="1975">1975</option>
                              <option value="1974">1974</option>
                              <option value="1973">1973</option>
                              <option value="1972">1972</option>
                              <option value="1971">1971</option>
                              <option value="1970">1970</option>
                              <option value="1969">1969</option>
                              <option value="1968">1968</option>
                              <option value="1967">1967</option>
                              <option value="1966">1966</option>
                              <option value="1965">1965</option>
                              <option value="1964">1964</option>
                              <option value="1963">1963</option>
                              <option value="1962">1962</option>
                              <option value="1961">1961</option>
                              <option value="1960">1960</option>
                              <option value="1959">1959</option>
                              <option value="1958">1958</option>
                              <option value="1957">1957</option>
                              <option value="1956">1956</option>
                              <option value="1955">1955</option>
                              <option value="1954">1954</option>
                              <option value="1953">1953</option>
                              <option value="1952">1952</option>
                              <option value="1951">1951</option>
                            </select>

                        </div>
                    </div>

                    <div class="col-md-12 text-muted" style="text-align: center;margin-top: 10px;">
                        عضویت شما به منزله‌ی پذیرفتن <a href="#">شرایط و مقررات</a> توشه می‌باشد
                    </div> 
                
                </div>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">انصراف</button>
                <button type="submit" class="btn btn-primary">عضویت</button>
                <p>آیا قبلا عضو شده‌اید ؟ <a href="#" data-toggle="modal" data-target="#signin_modal" data-dismiss="modal">وارد شوید</a></p>
              </form>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal -->

        </form> <!-- For flight -->



    <footer>
          <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <img src="/img/global/logo.png" id="logo-img" style="float: right;"></br>
                    <label id="footer-shoar" dir="rtl">
                        <i>
ما افرادی مثل شما هستیم
                            </br>
 با این تفاوت که علاقه ای به هزینه کردن اضافه نداریم.
                           </br>
همچنین ، بدمان نمی آید که اجناس اصل را با قیمت کمتر از خارج کشور تهیه کنیم :)
                        </i>
                    </label>
                </div>
                <div class="col-md-2">
                    <ul class="footer-list" dir="rtl">
                        <li class="title"><b>
                            شرکت
                            <br><br></b></li>
                        <li><a href="#">
                            درباره ما
                        </a></li>
                        <li><a href="#">
فرصت های شغلی
                        </a></li>
                        <li><a href="#">
در رسانه ها
                        </a></li>
                        <li><a href="#">
                            وبلاگ
                        </a></li>
                        <li><a href="#">
راهنما
                        </a></li>
                        <li><a href="#">
سیاست ها
                        </a></li>
                        <li><a href="#">
قوانین و خط و مشی رازداری
                        </a></li>
                        <li><a href="#">
                            چه کسانی ما را حمایت نکردند؟
                        </a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <ul class="footer-list" dir="rtl">
                        <li class="title"><b>
                            جست و جو
                            <br><br></b></li>
                        <li><a href="#">
                            امنیت
                        </a></li>
                        <li><a href="#">
دوستانت را دعوت کن!
                        </a></li>
                        <li><a href="#">
                            بارهای توشه
                        </a></li>
                        <li><a href="#">
                            موبایل
                        </a></li>
                        <li><a href="#">
                            سفر تجاری
                        </a></li>
                        <li><a href="#">
                            نقشه سایت
                        </a></li>
                        <li><a href="#">
                            سوالات متداول
                        </a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <ul class="footer-list" dir="rtl">
                        <li class="title"><b>
                            توشه بری
                            <br><br></b></li>
                        <li><a href="#">
                            چرا توشه بری؟
                        </a></li>
                        <li><a href="#">
                            مهمان نوازی
                        </a></li>
                        <li><a href="#">
                            راه های تحویل
                        </a></li>
                    </ul>
                </div>
                <div class="col-md-3 footer-list">
                    <div class="row dropdown-div" id="language-dropdown">
                        <div class="dropdown">
                          <button class="btn dropdown-toggle dropdown-button" type="button" data-toggle="dropdown">
                              زبان
                          <span class="caret"></span></button>
                          <ul class="dropdown-menu">
                            <li><a href="#">
                                انگلیسی
                            </a></li>
                            <li><a href="#">
                                فارسی
                            </a></li>
                            <li><a href="#">
                                عربی
                            </a></li>
                            <li><a href="#">
                                هندی
                            </a></li>
                          </ul>
                        </div>
                    </div>
                    <div class="row dropdown-div">
                        <div class="dropdown">
                          <button class="btn dropdown-toggle dropdown-button" type="button" data-toggle="dropdown">
                              واحد پول
                          <span class="caret"></span></button>
                          <ul class="dropdown-menu">
                            <li><a href="#">
                                دلار
                            </a></li>
                            <li><a href="#">
                                ریال
                            </a></li>
                            <li><a href="#">
                                یورو
                            </a></li>
                            <li><a href="#">
                                لیره
                            </a></li>
                            <li><a href="#">
                                درهم
                            </a></li>
                          </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
               <!--<h4 id="join-us">Join us on</h4>-->
            </div>
            <div class="row">
                <ul>
                    <li><img></li>
                </ul>
            </div>
          </div>
    </footer>
    
     <!-- Modal -->
        <div class="modal fade" id="signin_modal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <br>
                <h4 class="modal-title" id="myModalLabel" style="text-align:center">ورود به حساب کاربری</h4>
                <span style="display:block;text-align:center">با <a class="fbcl" href="/fb">فیسبوک</a> یا <a class="glcl" href="/google">گوگل</a></span>
                <p class="or_container"><span>یا</span></p>
              </div>
              <div class="modal-body">

              <form novalidate action="/signin" method="post">
                <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
                <div class="row">
                    <div class="col-md-12 signinfield">
                        <div class="form-group mgb">
                            <input type="email" class="form-control" name="email" value="{{Input::old('email')}}" placeholder="ایمیل" id="signin-username" required data-validation-required-message="لطفا ایمیل خود را وارد کنید" data-validation-email-message="فرمت ایمیل صحیح نمی‌باشد.">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                </div>
                
                
                <div class="row">
                    <div class="col-md-12 signinfield">
                        <div class="form-group mgb">
                            <input type="password" class="form-control" name="password" placeholder="رمز عبور" id="signin-password" required data-validation-required-message="لطفا رمز عبور خود را وارد کنید">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 signinfield">

                        <div class="checkbox">
                          <label>
                            <input type="checkbox" name="remember"> مرا به خاطر بسپار
                          </label>
                        <span style="float:left;"><a href="/password/email">رمزعبور را فراموش کرده‌ام</a></span>
                        </div>

                    </div>

                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">انصراف</button>
                <button type="submit" class="btn btn-primary">ورود</button>
                <p>عضو توشه نشده‌اید؟ <a href="#" data-toggle="modal" data-target="#signup_modal2" data-dismiss="modal">عضویت</a> رایگان</p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal -->


        <!-- Modal -->
        <div class="modal fade" id="signup_modal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <br>
                <h4 class="modal-title" id="myModalLabel" style="text-align:center">رایگان عضو شوید</h4>
                <span style="display:block;text-align:center">با <a class="fbcl" href="/fb">فیسبوک</a> یا <a class="glcl" href="/google">گوگل</a></span>
                <p class="or_container"><span>یا</span></p>
              </div>
              <div class="modal-body">
              <form novalidate action="signup" method="post">
                <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
                <div class="row">

                    <div class="col-md-6 signupfield">
                        <div class="form-group">
                            <input type="text" class="form-control" value="{{Input::old('firstname')}}" name="firstname" placeholder="نام" id="signup-faname" required data-validation-required-message="نام ضروری است" pattern="^[a-zA-Z ]{2,15}$" data-validation-pattern-message="فقط شامل حروف انگلیسی باشد">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>

                    <div class="col-md-6 signupfield">
                        <div class="form-group">
                            <input type="text" class="form-control" value="{{Input::old('lastname')}}" name="lastname" placeholder="نام خانوادگی" id="signup-laname" required data-validation-required-message="نام ضروری است" pattern="^[a-zA-Z ]{2,15}$" data-validation-pattern-message="فقط شامل حروف انگلیسی باشد">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>

                    <div class="col-md-12 signupfield">
                        <div class="form-group">
                            <input type="email" class="form-control" value="{{Input::old('email')}}" name="email" placeholder="ایمیل" id="signup-username" required data-validation-required-message="لطفا ایمیل خود را وارد کنید" data-validation-email-message="فرمت ایمیل صحیح نمی‌باشد.">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>

                    <div class="col-md-12 signupfield">
                        <div class="form-group">
                            <input type="password" class="form-control" name="password" placeholder="رمز عبور" id="signup-password" minlength="6" required data-validation-required-message="لطفا رمز عبور خود وارد کنید" data-validation-minlength-message="حداقل 6 کاراکتر">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>

                    <div class="col-md-12 signupfield">
                        <span style="margin-left:30px;">جنسیت:</span>
                        <div class="radio" style="display:inline-block;">
                          <label>
                            <input type="radio" name="sex" value="Male" checked="checked"> مرد  
                          </label>
                          <label>
                            <input type="radio" name="sex" value="Female"> زن
                          </label>
                        </div>
                    </div>
                
                    <div class="col-md-12 signupfield">
                        <span>تاریخ تولد:</span>
                        <div class="birthday">
                            <select name="day" class="form-control">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="19">9</option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                              <option value="13">13</option>
                              <option value="14">14</option>
                              <option value="15">15</option>
                              <option value="16">16</option>
                              <option value="17">17</option>
                              <option value="18">18</option>
                              <option value="19">19</option>
                              <option value="20">20</option>
                              <option value="21">21</option>
                              <option value="22">22</option>
                              <option value="23">23</option>
                              <option value="24">24</option>
                              <option value="25">25</option>
                              <option value="26">26</option>
                              <option value="27">27</option>
                              <option value="28">28</option>
                              <option value="29">29</option>
                              <option value="30">30</option>
                              <option value="31">31</option>
                            </select>
                            <select name="month" class="form-control">
                              <option value="Jan">Jan</option>
                              <option value="Feb">Feb</option>
                              <option value="Mar">Mar</option>
                              <option value="Apr">Apr</option>
                              <option value="May">May</option>
                              <option value="Jun">Jun</option>
                              <option value="Jul">Jul</option>
                              <option value="Aug">Aug</option>
                              <option value="Sep">Sep</option>
                              <option value="Oct">Oct</option>
                              <option value="Nov">Nov</option>
                              <option value="Dec">Dec</option>
                            </select>
                            <select name="year" class="form-control">
                              <option value="2005">2005</option>
                              <option value="2004">2004</option>
                              <option value="2003">2003</option>
                              <option value="2002">2002</option>
                              <option value="2001">2001</option>
                              <option value="2000">2000</option>
                              <option value="1999">1999</option>
                              <option value="1998">1998</option>
                              <option value="1997">1997</option>
                              <option value="1996">1996</option>
                              <option value="1995">1995</option>
                              <option value="1994">1994</option>
                              <option value="1993">1993</option>
                              <option value="1992">1992</option>
                              <option value="1991">1991</option>
                              <option value="1990">1990</option>
                              <option value="1989">1989</option>
                              <option value="1988">1988</option>
                              <option value="1987">1987</option>
                              <option value="1986">1986</option>
                              <option value="1985">1985</option>
                              <option value="1984">1984</option>
                              <option value="1983">1983</option>
                              <option value="1982">1982</option>
                              <option value="1981">1981</option>
                              <option value="1980">1980</option>
                              <option value="1979">1979</option>
                              <option value="1978">1978</option>
                              <option value="1977">1977</option>
                              <option value="1976">1976</option>
                              <option value="1975">1975</option>
                              <option value="1974">1974</option>
                              <option value="1973">1973</option>
                              <option value="1972">1972</option>
                              <option value="1971">1971</option>
                              <option value="1970">1970</option>
                              <option value="1969">1969</option>
                              <option value="1968">1968</option>
                              <option value="1967">1967</option>
                              <option value="1966">1966</option>
                              <option value="1965">1965</option>
                              <option value="1964">1964</option>
                              <option value="1963">1963</option>
                              <option value="1962">1962</option>
                              <option value="1961">1961</option>
                              <option value="1960">1960</option>
                              <option value="1959">1959</option>
                              <option value="1958">1958</option>
                              <option value="1957">1957</option>
                              <option value="1956">1956</option>
                              <option value="1955">1955</option>
                              <option value="1954">1954</option>
                              <option value="1953">1953</option>
                              <option value="1952">1952</option>
                              <option value="1951">1951</option>
                            </select>

                        </div>
                    </div>

                    <div class="col-md-12 text-muted" style="text-align: center;margin-top: 10px;">
                        عضویت شما به منزله‌ی پذیرفتن <a href="#">شرایط و مقررات</a> توشه می‌باشد
                    </div> 
                
                </div>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">انصراف</button>
                <button type="submit" class="btn btn-primary">عضویت</button>
                <p>آیا قبلا عضو شده‌اید ؟ <a href="#" data-toggle="modal" data-target="#signin_modal2" data-dismiss="modal">وارد شوید</a></p>
              </form>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal -->
        <!-- Modal -->
        <div class="modal fade" id="error_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <br>
                <h4 class="modal-title" id="myModalLabel" style="text-align:center">متاسفم .</h4>
                <!-- <span style="display:block;text-align:center">with <a class="fbcl" href="/fb">Facebook</a> or <a class="glcl" href="/google">Google</a></span>
                <p class="or_container"><span>or</span></p> -->
              </div>
              <div class="modal-body">
              @if($errors->has())
                  <center><img src="/error.png"></center>
                    {!! $errors->first('firstname' , '<div class="row"><center><p class="text-muted">لطفا نام کوچک خود را به درستی وارد کنید</p></center></div>') !!}
                    {!! $errors->first('lastname' , '<div class="row"><center><p class="text-muted">لطفا نام خانوادگی خود را به درستی وارد کنید</p></center></div>') !!}
                    {!! $errors->first('email' , '<div class="row"><center><p class="text-muted">لطفا ایمیل خود را به درستی وارد کنید</p></center></div>') !!}
                    {!! $errors->first('password' , '<div class="row"><center><p class="text-muted">لطفا یک پسورد مناسب برای خود انتخاب کنید</p></center></div>') !!}
              @elseif(session()->has('loginError'))
                <center><img src="/error.png"></center>
                <div class="row"><center><p class="text-muted">ایمیل یا رمز ورود اشتباه است! </p></center></div>
                   @endif
                </div>
              <div class="modal-footer">
                <p>دوباره تلاش کنید ! <a href="#" data-toggle="modal" data-target="#signin_modal" data-dismiss="modal">ورود یا عضویت</a></p>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal -->

    
    
    <!--site ends here-->
    <script src="/js/global/jquery-1.11.2.js" ></script>
    <script src="http://maps.googleapis.com/maps/api/js?sensor=false&amp;libraries=places"></script>
    <script src="/js/global/jquery.geocomplete.js"></script>
    <script src="/js/most-new-navbar/tooshe.min.js"></script>
    <script src="/js/global/material.min.js"></script>
    <script src="/js/global/moment.min.js"></script>
    <!--<script src="js/global/nouislider.min.js"></script>-->
    <!--<script src="js/global/bootstrap-mterial-datepicker.js"></script>-->
    <script src="/js/pickaday/pikaday.js"></script>


    <script src="/js/flightSubmit/flightSubmit.js"></script>
   <script src="/js/modal/jqBootstrapValidation.js"></script>
    <script src="/js/modal/contact_me.js"></script>
    <script src="/js/global/english-input.js"></script>
    <script>
        $(document).ready(function(){
            $.material.init();
        });
    </script>
    @if(session('loginError')=="Wrong email or password!" || session('signupError')==1)
    <script type="text/javascript">
      $(window).load(function() {
      $('#error_modal').modal('show');
      }); 
      </script>
      <?php session()->forget('loginError');session()->forget('signupError'); ?>
@endif
</body>
</html>