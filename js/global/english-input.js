$("input").on("keypress", function(event) {
    var englishAlphabetAndWhiteSpace = /[A-Za-z ]/g;
    var key = String.fromCharCode(event.which);
    if($(this).hasClass('url')){
        return true;
    }
    else{
        if (englishAlphabetAndWhiteSpace.test(key) || key.match(/^\d+$/) || (key==='@') ||(key==='.') || (key==='_')) {
            return true;
        }
        else{
            return false;
        }
    }
});
$("input").on("paste", function(event) {
    if($(this).hasClass('url')){
        return true;
    }
    else{
        return false;
    }

});
