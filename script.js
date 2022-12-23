function navToggle() {
    var navToggleNav = document.getElementById("nav");
    var html = document.getElementById("html");
    var body = document.getElementById("body");
    navToggleBtn.classList.toggle("_active");
    html.classList.toggle("_overflow");
    body.classList.toggle("_overflow");
}