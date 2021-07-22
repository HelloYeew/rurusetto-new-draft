const header = document.getElementById ('header');

window.onscroll = function() {scrollFunction()};
window.onresize = function() {onResize()};
window.addEventListener('load', function() {scrollFunction()})

function scrollFunction() {
    if (document.documentElement.clientWidth > 1010) {
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
    } else {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("mobile-header").style.height = "7%";
            document.getElementById("mobile-header").style.minHeight = "68px";
            document.getElementById("mobile-logo").style.marginTop = "-5px";
            document.getElementById("mobile-logo").style.marginLeft = "-5px";
            document.getElementById("mobile-logo").style.height = "45px";
            document.getElementById("mobile-header").style.backgroundColor = "rgba(74,74,74,.8)";
            document.getElementById("mobile-header").classList.add('blur-bg');
            document.getElementById("navbarToggleExternalContent").style.marginTop = "68px";
        } else {
            document.getElementById("mobile-header").style.height = "8%";
            document.getElementById("mobile-header").style.minHeight = "75px";
            document.getElementById("mobile-logo").style.marginTop = "0";
            document.getElementById("mobile-logo").style.marginLeft = "0";
            document.getElementById("mobile-logo").style.height = "50px";
            document.getElementById("mobile-header").style.backgroundColor = "rgba(74,74,74,0)";
            document.getElementById("mobile-header").classList.remove('blur-bg');
            document.getElementById("navbarToggleExternalContent").style.marginTop = "77px";
        }
    }
}

function onResize() {
    if (document.documentElement.clientWidth > 1010) {
        document.getElementById("header").classList.add('show')
        document.getElementById("header").classList.remove('hidden')
        document.getElementById("header").style.zIndex = "1"
        document.getElementById("mobile-header").style.zIndex = "0"
    } else {
        document.getElementById("header").classList.add('hidden')
        document.getElementById("header").classList.remove('show')
        document.getElementById("header").style.zIndex = "0"
        document.getElementById("mobile-header").style.zIndex = "1"
    }
}

window.addEventListener("load", function(){onResize()})