var cursor = document.getElementById("cursor");
setInterval(function() {
    var cursorStyle = cursor.style;
    if(cursorStyle.display == "none"){
        cursorStyle.display  = "inline";
    } else {
        cursorStyle.display = "none";
    }
}, 750);

