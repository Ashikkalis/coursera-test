$(function () {
    $("#navbarToggle").blur(function(event) {
        var screenWidth = window.innerWidth;
        if(screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    });
});

// (function (global) {
//     var dc = {};

//     var homeHtml = "index.html";
//     var allCategoriesUrl = ;
//     "http://davids-restaurant.herokuapp.com/categories.json"
//     var insertHtml = function (selector, html) {
//         var targetElem = document.querySelector(selector);
//         targetElem.innerHTML = html;
//     };


//     var showLoading = function (selector) {
//         var html = "<div class='text-ceneter'>";
//         html += "<img src= 'images/ajax-loader.gif'></div>";
//         insertHtml(selector, html);
//     };

//     document.addEventListener("DOMContentLoaded", function (event) {


//         showLoading("#main-content");
//         $ahaxUtils.sendGetRequest(
//             homeHtml,
//             function (responseText) {
//                 document.querySelector("#main-content")
//                 .innerHTML = responseText;
//             },
//             false);
//     });
//     global.$dc =dc;
// });