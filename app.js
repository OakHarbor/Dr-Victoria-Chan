/* jQuery for the navigation animation */

var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });


  var $bannerButton = $("#banner-button");
  var $banner = $(".banner");
  $bannerButton.on("click", function(e) {
    $banner.addClass("none");
    $bannerButton.addClass("none");
  });

  /* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".navbar-menu");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");

    if (toggleNavStatus === false) {

         getSidebarLinks.forEach((item, index)=>{
          console.log(item);
          item.style.opacity = "1";
         });
        getSidebar.style.width = "60%";

        toggleNavStatus = true;
    } 

    else if (toggleNavStatus === true) {

         getSidebarLinks.forEach((item, index)=>{
          item.style.opacity = "0";
          item.style.transitionDelay = "0s";
         });
        getSidebar.style.width = "0";

        toggleNavStatus = false;
    }
}

// Unique Approach Collapsing buttons

// ACcordian 2
const $acc2Box = $(".acc2 .accordian-box");
const $acc2Content = $(".acc2 .accordian-content");
const $acc2Open = $(".acc2 .open-accordian");
const $acc2Close = $(".acc2 .close-accordian");

// ACcordian 3
const $acc3Box = $(".acc3 .accordian-box");
const $acc3Content = $(".acc3 .accordian-content");
const $acc3Open = $(".acc3 .open-accordian");
const $acc3Close = $(".acc3 .close-accordian");

// ACcordian 4
const $acc4Box = $(".acc4 .accordian-box");
const $acc4Content = $(".acc4 .accordian-content");
const $acc4Open = $(".acc4 .open-accordian");
const $acc4Close = $(".acc4 .close-accordian");

// ACcordian 5
const $acc5Box = $(".acc5 .accordian-box");
const $acc5Content = $(".acc5 .accordian-content");
const $acc5Open = $(".acc5 .open-accordian");
const $acc5Close = $(".acc5 .close-accordian");

// ACcordian 6
const $acc6Box = $(".acc6 .accordian-box");
const $acc6Content = $(".acc6 .accordian-content");
const $acc6Open = $(".acc6 .open-accordian");
const $acc6Close = $(".acc6 .close-accordian");

// ACcordian 7
const $acc7Box = $(".acc7 .accordian-box");
const $acc7Content = $(".acc7 .accordian-content");
const $acc7Open = $(".acc7 .open-accordian");
const $acc7Close = $(".acc7 .close-accordian");

// ACcordian 8
const $acc8Box = $(".acc8 .accordian-box");
const $acc8Content = $(".acc8 .accordian-content");
const $acc8Open = $(".acc8 .open-accordian");
const $acc8Close = $(".acc8 .close-accordian");

// ACcordian 9
const $acc9Box = $(".acc9 .accordian-box");
const $acc9Content = $(".acc9 .accordian-content");
const $acc9Open = $(".acc9 .open-accordian");
const $acc9Close = $(".acc9 .close-accordian");

// ACcordian 10
const $acc10Box = $(".acc10 .accordian-box");
const $acc10Content = $(".acc10 .accordian-content");
const $acc10Open = $(".acc10 .open-accordian");
const $acc10Close = $(".acc10 .close-accordian");

// ACcordian 11
const $acc11Box = $(".acc11 .accordian-box");
const $acc11Content = $(".acc11 .accordian-content");
const $acc11Open = $(".acc11 .open-accordian");
const $acc11Close = $(".acc11 .close-accordian");

// ACcordian 12
const $acc12Box = $(".acc12 .accordian-box");
const $acc12Content = $(".acc12 .accordian-content");
const $acc12Open = $(".acc12 .open-accordian");
const $acc12Close = $(".acc12 .close-accordian");



// Opening & Closing Accordian 2
$acc2Open.on("click", function (e) {
  $acc2Open.addClass("clicked");
  $acc2Close.addClass("clicked");
  $acc2Box.addClass("open");
  $acc2Content.addClass("open");
});

$acc2Close.on("click", function (e) {
  $acc2Open.removeClass("clicked");
  $acc2Close.removeClass("clicked");
  $acc2Box.removeClass("open");
  $acc2Content.removeClass("open");
});


// Opening & Closing Accordian 3
$acc3Open.on("click", function (e) {
  $acc3Open.addClass("clicked");
  $acc3Close.addClass("clicked");
  $acc3Box.addClass("open");
  $acc3Content.addClass("open");
});

$acc3Close.on("click", function (e) {
  $acc3Open.removeClass("clicked");
  $acc3Close.removeClass("clicked");
  $acc3Box.removeClass("open");
  $acc3Content.removeClass("open");
});

// Opening & Closing Accordian 4
$acc4Open.on("click", function (e) {
  $acc4Open.addClass("clicked");
  $acc4Close.addClass("clicked");
  $acc4Box.addClass("open");
  $acc4Content.addClass("open");
});

$acc4Close.on("click", function (e) {
  $acc4Open.removeClass("clicked");
  $acc4Close.removeClass("clicked");
  $acc4Box.removeClass("open");
  $acc4Content.removeClass("open");
});

// Opening & Closing Accordian 5
$acc5Open.on("click", function (e) {
  $acc5Open.addClass("clicked");
  $acc5Close.addClass("clicked");
  $acc5Box.addClass("open");
  $acc5Content.addClass("open");
});

$acc5Close.on("click", function (e) {
  $acc5Open.removeClass("clicked");
  $acc5Close.removeClass("clicked");
  $acc5Box.removeClass("open");
  $acc5Content.removeClass("open");
});

// Opening & Closing Accordian 5
$acc6Open.on("click", function (e) {
  $acc6Open.addClass("clicked");
  $acc6Close.addClass("clicked");
  $acc6Box.addClass("open");
  $acc6Content.addClass("open");
});

$acc6Close.on("click", function (e) {
  $acc6Open.removeClass("clicked");
  $acc6Close.removeClass("clicked");
  $acc6Box.removeClass("open");
  $acc6Content.removeClass("open");
});

// Opening & Closing Accordian 7
$acc7Open.on("click", function (e) {
  $acc7Open.addClass("clicked");
  $acc7Close.addClass("clicked");
  $acc7Box.addClass("open");
  $acc7Content.addClass("open");
});

$acc7Close.on("click", function (e) {
  $acc7Open.removeClass("clicked");
  $acc7Close.removeClass("clicked");
  $acc7Box.removeClass("open");
  $acc7Content.removeClass("open");
});

// Opening & Closing Accordian 8
$acc8Open.on("click", function (e) {
  $acc8Open.addClass("clicked");
  $acc8Close.addClass("clicked");
  $acc8Box.addClass("open");
  $acc8Content.addClass("open");
});

$acc8Close.on("click", function (e) {
  $acc8Open.removeClass("clicked");
  $acc8Close.removeClass("clicked");
  $acc8Box.removeClass("open");
  $acc8Content.removeClass("open");
});

// Opening & Closing Accordian 9
$acc9Open.on("click", function (e) {
  $acc9Open.addClass("clicked");
  $acc9Close.addClass("clicked");
  $acc9Box.addClass("open");
  $acc9Content.addClass("open");
});

$acc9Close.on("click", function (e) {
  $acc9Open.removeClass("clicked");
  $acc9Close.removeClass("clicked");
  $acc9Box.removeClass("open");
  $acc9Content.removeClass("open");
});

// Opening & Closing Accordian 10
$acc10Open.on("click", function (e) {
  $acc10Open.addClass("clicked");
  $acc10Close.addClass("clicked");
  $acc10Box.addClass("open");
  $acc10Content.addClass("open");
});

$acc10Close.on("click", function (e) {
  $acc10Open.removeClass("clicked");
  $acc10Close.removeClass("clicked");
  $acc10Box.removeClass("open");
  $acc10Content.removeClass("open");
});

// Opening & Closing Accordian 11
$acc11Open.on("click", function (e) {
  $acc11Open.addClass("clicked");
  $acc11Close.addClass("clicked");
  $acc11Box.addClass("open");
  $acc11Content.addClass("open");
});

$acc11Close.on("click", function (e) {
  $acc11Open.removeClass("clicked");
  $acc11Close.removeClass("clicked");
  $acc11Box.removeClass("open");
  $acc11Content.removeClass("open");
});

// Opening & Closing Accordian 12
$acc12Open.on("click", function (e) {
  $acc12Open.addClass("clicked");
  $acc12Close.addClass("clicked");
  $acc12Box.addClass("open");
  $acc12Content.addClass("open");
});

$acc12Close.on("click", function (e) {
  $acc12Open.removeClass("clicked");
  $acc12Close.removeClass("clicked");
  $acc12Box.removeClass("open");
  $acc12Content.removeClass("open");
});