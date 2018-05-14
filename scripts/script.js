/*global $*/

// SLIDING ELEMENTS

$(document).ready(function(){
    
    $(".slide-button-up").on("click", function(){ 
        $("#lead-banner").slideUp(400);
    });
    $(".slide-button-down").on("click", function(){ 
        $("#lead-banner").slideDown(400);
    });
    // $(".slide-button-up").on("click", function(){ 
    //     $("#lead-banner").slideToggle(400); will toggle up or down on same button
    // });
    
});

// SHOW, HIDE, TOGGLE FUNCTIONS

// $(document).ready(function(){
//     // function complete() {
//     //     alert('animation is finished');
//     // }
//     $("img[alt=map]").on("click", function(){ 
//         $("section > h2").toggle(400); // like css display:none;
//     });
// });

// FADING ELEMENTS (ANIMATION)

// $(document).ready(function(){
//     // function complete() {
//     //     alert('animation is finished');
//     // }
//     $("section > h2").on("click", function(event){ // flashing or strobe effect
//         $(this).fadeTo(200, 0.2)
//               .fadeTo(200, 1.0)
//               .fadeTo(200, 0.2)
//               .fadeTo(200, 1.0)
//               .fadeTo(200, 0.2)
//               .fadeTo(200, 1.0);
//     });
// });

// JQUERY ANIMATION

// $(document).ready(function(){
//     function complete() {
//         alert('animation is finished');
//     }
//     $("section > h2").on("click", function(event){
//         $(this).animate({"width" : "500px", "height" : "100px"}, 1000, "swing", complete);
//     });
// });

// JQUERY EVENT OBJECT

$(document).ready(function(){
    $("*").on("click", function(event){
        console.log(event.target);
        console.log("event type is: " + event.type);
        console.log("x-coordinate of event is: " + event.pageX);
        console.log("y-coordinate of event is: " + event.pageY);
        event.stopPropagation(); // stops bubbling up to parent elements
    });
});

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