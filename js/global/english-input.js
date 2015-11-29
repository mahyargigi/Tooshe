$("input").on("keypress", function(event) {
    var englishAlphabetAndWhiteSpace = /[A-Za-z ]/g;
    var key = String.fromCharCode(event.which);
    if (englishAlphabetAndWhiteSpace.test(key) || key.match(/^\d+$/)) {
        return true;
    }
    else{
        return false;
    }
});
$("input").on("paste", function(event) {
//    var englishAlphabetAndWhiteSpace = /[A-Za-z ]/g;
//    var key = String.fromCharCode(event.which);
////    if (englishAlphabetAndWhiteSpace.test(key)) {
////        return true;
////    }
////    else{
////        return false;
////    }
//    var element = this ;
    return false;

});