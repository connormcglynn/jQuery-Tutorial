/*global $*/

// $("section").wrap("<div>");
// $("section").unwrap();
// $("section").wrapAll("<div>"); // ONE empty div around all together, not individually

// WRAPPING AND UNWRAPPING ELEMENTS

// wrap() - wraps all matches elements individually
// unwrap() - unwraps all matches elements
// wrapALl() - wraps all elements combined with 1 single element

var wrapper = "<div class='wrapper'>";
var button = $(".button");
var wrapped = true;

button[0].onclick = function(){
    if (wrapped) {
        $("section").unwrap();
        wrapped = false;
        button.text("Wrap");
    } else {
        $("section").wrapAll(wrapper);
        wrapped = true;
        button.text("Unwrap");
    }
};