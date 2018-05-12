/*global $*/
$("header nav li:first").css({border: "2px solid red"});
$("header nav li:last").css({border: "2px solid red"});

$("#contact ul:first").css({border: "2px solid red"});
$("contact ul:last").css({border: "2px solid red"});

$("header nav li:even").css({border: "2px solid blue"});
$("header nav li:odd").css({border: "2px solid yellow"});

$("section:not('#contact')").css({border: "2px solid green"});

$("#social-nav li:lt(3)").css({border: "2px solid blue"});
$("#social-nav li:gt(2)").css({border: "2px solid blue"});

$("div[class]").css({border: "2px solid pink"});
$("img[alt=quote]").css({border: "2px solid purple"});