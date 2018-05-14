/*global $*/

// DOCUMENT READY & WINDOW LOAD EVENTS

$(function(){
    // waits for webpage elements to load, irrespective of content
});
// is the same as: $("document").ready(function(){ });
// or $("document").on("ready", function(){});

$(window).on("load", function(){
    // waits for whole webpage to load, not just elements -- images, scripts, resources etc
});
// is the same as $(window).load(function(){});




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