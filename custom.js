window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("profile-picture").style.height = "32px";
        document.getElementById("header-logo").style.height = "50px";
        document.getElementById("header").style.backgroundColor = "rgba(74,74,74,60)"
    } else {
        document.getElementById("profile-picture").style.height = "48px";
        document.getElementById("header-logo").style.height = "65px";
        document.getElementById("header").style.backgroundColor = "rgba(74,74,74,0)"
    }
}