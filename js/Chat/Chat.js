$(document).ready(function(){
    var myDiv = document.getElementById("chat-history");
    myDiv.scrollTop = myDiv.scrollHeight;
    $('.send-message-btn').on('click',function(){
        if($('.unsent-textarea').val() != ''){
            var msg = $('.unsent-textarea').val();
            $('.unsent-textarea').val('');
            var time = '22:52';
            $('#chat-history').append('<div class="my-message"><a href="#" class="inline-div"><img src="img/global/11024738_854969787883795_4193688850460528963_n.jpg" class="inline-div chat-history-img img-circle"></a><p class="triangle-isosceles left inline-div">'+msg+'<br><span class="glyphicon glyphicon-ok"></span><span class="msg-date">'+time+'</span></p></div>');
            document.getElementById( 'chat-history' ).scrollTop = '150000';
        }
    });
//    function ScrollDiv(){
//
//   if(document.getElementById('chat-history').scrollTop<(document.getElementById('chat-history').scrollHeight-document.getElementById('chat-history').offsetHeight)){-1
//     document.getElementById('chat-history').scrollTop=document.getElementById('chat-history').scrollTop+1
//   }
//   //else {document.getElementById('chat-history').scrollTop=0;}
//}
    document.getElementById( 'chat-history' ).scrollTop = '150000';
    $('.information-each').on('click',function(){
       $(this).find('.unread-nmber').fadeOut('fast');
    });
}
);