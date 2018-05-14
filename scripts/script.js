/*global $*/

// Chaining // shouldn't be too long, but good for a few changes. If multiple changes needed, return and indent at .next / .prev / .closest etc: 

// LIKE THIS

$("#contact-methods").css({border: "2px solid red"}).next().css({border: "2px solid green"}).closest("section").css({border: "2px solid blue"});

// OR LIKE THIS FOR LONGER STATEMENTS

$("#contact-methods").css({border: "2px solid red"})
    .next().css({border: "2px solid green"})
    .closest("section").css({border: "2px solid blue"});