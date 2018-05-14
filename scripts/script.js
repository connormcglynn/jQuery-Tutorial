/*global $*/

// EVENT HELPERS --- "METHODS"

$("#lead-banner").dblclick(function(){
    alert('you double clicked me');
    $("#lead-banner").off("dblclick")
});

// BINDING AND UNBINDING

var lis = $("#points-of-sale li");

lis.on("click", function(){
    $(this).css({"background" : "pink"});
    lis.off("click");
});


// on() - binds an event to matched element(s)
// off() - unbinds event from matched element(s)

// TOGGLE ON/OFF 

var button = $("#lead-banner a");

button[0].onclick = function() {
    $("#points-of-sale").toggleClass("open");
    return false;
}