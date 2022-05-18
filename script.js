var mobileBreakpoint = 530;

/* When the page loads, add an open class to nav if the screen is wide enough. */

window.onload = function() {
    var screenWidth = window.innerWidth; 
    var globalNavbar = document.getElementById("global-nav");
    var toggle = document.getElementById("menu-toggle");

    // add 'open' class to the ul in the navbar if wider than the breakpoint
    if (screenWidth > mobileBreakpoint) {
        globalNavbar.classList.add("open");
        toggle.classList.add("open");
    }
    /* add a toggle click function, which serves as an on-off button */
    toggle.onclick = function() {
        //why doesn't globalNavbar change anything on my navbar?
        // added 5/18: globalNavbar.classList.toggle("open");
        // added 5/18: toggle.classList.toggle("open");
        if (globalNavbar.classList.contains("open")) {
           globalNavbar.classList.remove("open");
        }
        else {
            globalNavbar.classList.add("open");
            toggle.classList.add("open");
        }
    }
}
window.onresize = function() {
    var screenWidth = window.innerWidth;

    var globalNavbar = document.getElementById("global-nav");
    var toggle = document.getElementById("menu-toggle");

    if (screenWidth > mobileBreakpoint) {
        globalNavbar.classList.add("open");
        toggle.classList.add("open");
    }
    else {
    // checking to see if it still works (screenWidth > mobileBreakpoint) {
        globalNavbar.classList.remove("open");
        toggle.classList.remove("open");
    }
}