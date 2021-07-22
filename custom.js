const header = document.getElementById ('header');

window.onscroll = function() {scrollFunction()};
window.onresize = function() {onResize()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("profile-picture").style.height = "32px";
        document.getElementById("header-logo").style.height = "50px";
        document.getElementById("header").style.backgroundColor = "rgba(74,74,74,.8)"
        document.getElementById("header").classList.add('blur-bg')
        document.getElementById("nav-listing").style.fontSize = "18px"
        document.getElementById("nav-install").style.fontSize = "18px"
        document.getElementById("nav-status").style.fontSize = "18px"
    } else {
        document.getElementById("profile-picture").style.height = "48px";
        document.getElementById("header-logo").style.height = "65px";
        document.getElementById("header").style.backgroundColor = "rgba(74,74,74,0)"
        document.getElementById("header").classList.remove('blur-bg')
        document.getElementById("nav-listing").style.fontSize = "20px"
        document.getElementById("nav-install").style.fontSize = "20px"
        document.getElementById("nav-status").style.fontSize = "20px"
    }
}

function onResize() {
    if (document.documentElement.clientWidth > 992) {
        document.getElementById("header").classList.add('show')
        document.getElementById("header").classList.remove('hidden')
    } else {
        document.getElementById("header").classList.add('hidden')
        document.getElementById("header").classList.remove('show')
    }
}

window.addEventListener("load", function(){onResize()})