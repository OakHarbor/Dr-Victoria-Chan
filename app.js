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
    let html = document.querySelectorAll("html");

    if (toggleNavStatus === false) {

        //  getSidebarLinks.forEach((item, index)=>{
        //   console.log(item);
        //   item.style.opacity = "1";
        //  });
        getSidebar.style.right = "0px";

        toggleNavStatus = true;
    } 

    else if (toggleNavStatus === true) {

        //  getSidebarLinks.forEach((item, index)=>{
        //   item.style.opacity = "0";
        //   item.style.transitionDelay = "0s";
        //  });
        getSidebar.style.right = "-450px";
       

        toggleNavStatus = false;
    }
}

// Unique Approach Collapsing buttons

// ACcordian 1
const $acc1WhiteBackground = $(".acc1 .white-background");
const $whiteBox = $(".white-box1");
const $acc1Box = $(".acc1 .accordian-box");
const $acc1Content = $(".acc1 .accordian-content");
const $acc1List = $(".acc1 .accordian-list");
const $acc1Open = $(".acc1 .open-accordian");
const $acc1Close = $(".acc1 .close-accordian");

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

// ACcordian 13
const $acc13Box = $(".acc13 .accordian-box");
const $acc13Content = $(".acc13 .accordian-content");
const $acc13Open = $(".acc13 .open-accordian");
const $acc13Close = $(".acc13 .close-accordian");

// ACcordian 14
const $acc14Box = $(".acc14 .accordian-box");
const $acc14Content = $(".acc14 .accordian-content");
const $acc14Open = $(".acc14 .open-accordian");
const $acc14Close = $(".acc14 .close-accordian");

// ACcordian 15
const $acc15Box = $(".acc15 .accordian-box");
const $acc15Content = $(".acc15 .accordian-content");
const $acc15Open = $(".acc15 .open-accordian");
const $acc15Close = $(".acc15 .close-accordian");

// ACcordian 16
const $acc16Box = $(".acc16 .accordian-box");
const $acc16Content = $(".acc16 .accordian-content");
const $acc16Open = $(".acc16 .open-accordian");
const $acc16Close = $(".acc16 .close-accordian");

// ACcordian 17
const $acc17Box = $(".acc17 .accordian-box");
const $acc17Content = $(".acc17 .accordian-content");
const $acc17Open = $(".acc17 .open-accordian");
const $acc17Close = $(".acc1 .close-accordian");

// ACcordian 18
const $acc18Box = $(".acc18 .accordian-box");
const $acc18Content = $(".acc18 .accordian-content");
const $acc18Open = $(".acc18 .open-accordian");
const $acc18Close = $(".acc18 .close-accordian");

// ACcordian 19
const $acc19Box = $(".acc19 .accordian-box");
const $acc19Content = $(".acc19 .accordian-content");
const $acc19Open = $(".acc19 .open-accordian");
const $acc19Close = $(".acc19 .close-accordian");

// ACcordian 20
const $acc20Box = $(".acc20 .accordian-box");
const $acc20Content = $(".acc20 .accordian-content");
const $acc20Open = $(".acc20 .open-accordian");
const $acc20Close = $(".acc20 .close-accordian");

// ACcordian 21
const $acc21Box = $(".acc21 .accordian-box");
const $acc21Content = $(".acc21 .accordian-content");
const $acc21Open = $(".acc21 .open-accordian");
const $acc21Close = $(".acc21 .close-accordian");

// ACcordian 22
const $acc22Box = $(".acc22 .accordian-box");
const $acc22Content = $(".acc22 .accordian-content");
const $acc22Open = $(".acc22 .open-accordian");
const $acc22Close = $(".acc22 .close-accordian");


// Opening & Closing Accordian 1
$acc1Open.on("click", function (e) {
  $acc1Open.addClass("clicked");
  $acc1Close.addClass("clicked");
  $acc1Box.addClass("open");
  $acc1Content.addClass("open");
  $acc1List.addClass("open");
  $acc1WhiteBackground.addClass("open");
  $whiteBox.addClass("open");
});

$acc1Close.on("click", function (e) {
  $acc1Open.removeClass("clicked");
  $acc1Close.removeClass("clicked");
  $acc1Box.removeClass("open");
  $acc1Content.removeClass("open");
  $acc1List.removeClass("open");
  $acc1WhiteBackground.removeClass("open");
  $whiteBox.removeClass("open");
});

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

// Opening & Closing Accordian 13
$acc13Open.on("click", function (e) {
  $acc13Open.addClass("clicked");
  $acc13Close.addClass("clicked");
  $acc13Box.addClass("open");
  $acc13Content.addClass("open");
});

$acc13Close.on("click", function (e) {
  $acc13Open.removeClass("clicked");
  $acc13Close.removeClass("clicked");
  $acc13Box.removeClass("open");
  $acc13Content.removeClass("open");
});

// Opening & Closing Accordian 14
$acc14Open.on("click", function (e) {
  $acc14Open.addClass("clicked");
  $acc14Close.addClass("clicked");
  $acc14Box.addClass("open");
  $acc14Content.addClass("open");
});

$acc14Close.on("click", function (e) {
  $acc14Open.removeClass("clicked");
  $acc14Close.removeClass("clicked");
  $acc14Box.removeClass("open");
  $acc14Content.removeClass("open");
});

// Opening & Closing Accordian 15
$acc15Open.on("click", function (e) {
  $acc15Open.addClass("clicked");
  $acc15Close.addClass("clicked");
  $acc15Box.addClass("open");
  $acc15Content.addClass("open");
});

$acc15Close.on("click", function (e) {
  $acc15Open.removeClass("clicked");
  $acc15Close.removeClass("clicked");
  $acc15Box.removeClass("open");
  $acc15Content.removeClass("open");
});

// Opening & Closing Accordian 16
$acc16Open.on("click", function (e) {
  $acc16Open.addClass("clicked");
  $acc16Close.addClass("clicked");
  $acc16Box.addClass("open");
  $acc16Content.addClass("open");
});

$acc16Close.on("click", function (e) {
  $acc16Open.removeClass("clicked");
  $acc16Close.removeClass("clicked");
  $acc16Box.removeClass("open");
  $acc16Content.removeClass("open");
});

// Opening & Closing Accordian 17
$acc17Open.on("click", function (e) {
  $acc17Open.addClass("clicked");
  $acc17Close.addClass("clicked");
  $acc17Box.addClass("open");
  $acc17Content.addClass("open");
});

$acc17Close.on("click", function (e) {
  $acc17Open.removeClass("clicked");
  $acc17Close.removeClass("clicked");
  $acc17Box.removeClass("open");
  $acc17Content.removeClass("open");
});

// Opening & Closing Accordian 18
$acc18Open.on("click", function (e) {
  $acc18Open.addClass("clicked");
  $acc18Close.addClass("clicked");
  $acc18Box.addClass("open");
  $acc18Content.addClass("open");
});

$acc18Close.on("click", function (e) {
  $acc18Open.removeClass("clicked");
  $acc18Close.removeClass("clicked");
  $acc18Box.removeClass("open");
  $acc18Content.removeClass("open");
});

// Opening & Closing Accordian 19
$acc19Open.on("click", function (e) {
  $acc19Open.addClass("clicked");
  $acc19Close.addClass("clicked");
  $acc19Box.addClass("open");
  $acc19Content.addClass("open");
});

$acc19Close.on("click", function (e) {
  $acc19Open.removeClass("clicked");
  $acc19Close.removeClass("clicked");
  $acc19Box.removeClass("open");
  $acc19Content.removeClass("open");
});

// Opening & Closing Accordian 20
$acc20Open.on("click", function (e) {
  $acc20Open.addClass("clicked");
  $acc20Close.addClass("clicked");
  $acc20Box.addClass("open");
  $acc20Content.addClass("open");
});

$acc20Close.on("click", function (e) {
  $acc20Open.removeClass("clicked");
  $acc20Close.removeClass("clicked");
  $acc20Box.removeClass("open");
  $acc20Content.removeClass("open");
});

// Opening & Closing Accordian 21
$acc21Open.on("click", function (e) {
  $acc21Open.addClass("clicked");
  $acc21Close.addClass("clicked");
  $acc21Box.addClass("open");
  $acc21Content.addClass("open");
});

$acc21Close.on("click", function (e) {
  $acc21Open.removeClass("clicked");
  $acc21Close.removeClass("clicked");
  $acc21Box.removeClass("open");
  $acc21Content.removeClass("open");
});

// Opening & Closing Accordian 22
$acc22Open.on("click", function (e) {
  $acc22Open.addClass("clicked");
  $acc22Close.addClass("clicked");
  $acc22Box.addClass("open");
  $acc22Content.addClass("open");
});

$acc22Close.on("click", function (e) {
  $acc22Open.removeClass("clicked");
  $acc22Close.removeClass("clicked");
  $acc22Box.removeClass("open");
  $acc22Content.removeClass("open");
});



// what is naturopathic medicne buttons 


const $button1 = $("#button1");
const $button2 = $("#button2");
const $button3 = $("#button3");
const $button4 = $("#button4");
const $button5 = $("#button5");
const $button6 = $("#button6");

const $button1Content = $(".button1-content");
const $button2Content = $(".button2-content");
const $button3Content = $(".button3-content");
const $button4Content = $(".button4-content");
const $button5Content = $(".button5-content");
const $button6Content = $(".button6-content");


// Opening & Closing Accordian 1
$button1.on("click", function (e) {
  $button1.addClass("active");
  $button2.removeClass("active");
  $button3.removeClass("active");
  $button4.removeClass("active");
  $button5.removeClass("active");
  $button6.removeClass("active");

  // content active
  $button1Content.addClass("active");
  $button2Content.removeClass("active");
  $button3Content.removeClass("active");
  $button4Content.removeClass("active");
  $button5Content.removeClass("active");
  $button6Content.removeClass("active");
});

$button2.on("click", function (e) {
  $button2.addClass("active");
  $button1.removeClass("active");
  $button3.removeClass("active");
  $button4.removeClass("active");
  $button5.removeClass("active");
  $button6.removeClass("active");

  // content active
  $button2Content.addClass("active");
  $button1Content.removeClass("active");
  $button3Content.removeClass("active");
  $button4Content.removeClass("active");
  $button5Content.removeClass("active");
  $button6Content.removeClass("active");
});

$button3.on("click", function (e) {
  $button3.addClass("active");
  $button2.removeClass("active");
  $button1.removeClass("active");
  $button4.removeClass("active");
  $button5.removeClass("active");
  $button6.removeClass("active");

  // content active
  $button3Content.addClass("active");
  $button2Content.removeClass("active");
  $button1Content.removeClass("active");
  $button4Content.removeClass("active");
  $button5Content.removeClass("active");
  $button6Content.removeClass("active");
});

$button4.on("click", function (e) {
  $button4.addClass("active");
  $button2.removeClass("active");
  $button3.removeClass("active");
  $button1.removeClass("active");
  $button5.removeClass("active");
  $button6.removeClass("active");

  // content active
  $button4Content.addClass("active");
  $button2Content.removeClass("active");
  $button3Content.removeClass("active");
  $button1Content.removeClass("active");
  $button5Content.removeClass("active");
  $button6Content.removeClass("active");
});

$button5.on("click", function (e) {
  $button5.addClass("active");
  $button2.removeClass("active");
  $button3.removeClass("active");
  $button4.removeClass("active");
  $button1.removeClass("active");
  $button6.removeClass("active");

  // content active
  $button5Content.addClass("active");
  $button2Content.removeClass("active");
  $button3Content.removeClass("active");
  $button4Content.removeClass("active");
  $button1Content.removeClass("active");
  $button6Content.removeClass("active");
});

$button6.on("click", function (e) {
  $button6.addClass("active");
  $button2.removeClass("active");
  $button3.removeClass("active");
  $button4.removeClass("active");
  $button5.removeClass("active");
  $button1.removeClass("active");

  // content active
  $button6Content.addClass("active");
  $button2Content.removeClass("active");
  $button3Content.removeClass("active");
  $button4Content.removeClass("active");
  $button5Content.removeClass("active");
  $button1Content.removeClass("active");
});