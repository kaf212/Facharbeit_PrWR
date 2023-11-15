function loadNavElements() {
    const nav = "<nav id='nav' style='position: fixed'><div id='navContent' class='container d-flex ' style='height: 100%'><div class='col-4 d-flex align-items-center' style='height: 100%'><span id='navTitle'><em><strong><a href='./index.html' id='navTitle'>Wirtschaftsgeschichte</a></strong></em></span></div><div class='flex-spacer'></div><div class='nav-option'><button onClick=\"window.location.href='./index.html';\">Home</button></div><div class='nav-option'><button onClick=\"window.location.href='./content.html';\" class=''>Themen</button></div><div class='nav-option'><button onClick=\"window.location.href='';\">Über uns</button></div></div></nav>\n"

    const h = document.getElementsByClassName("nav-header")[0]
    const temp = h.innerHTML
    h.innerHTML = nav
    h.innerHTML += temp

}

function loadFooter() {
    document.getElementsByClassName("footer")[0].innerHTML = "<div><div class='d-flex justify-content-center'><a href='' class='footer-link px-3'>Quellenverzeichnis</a><a href='https://github.com/kaf212/Facharbeit_PrWR' class='footer-link px-3'>GitHub</a></div><div class='d-flex justify-content-center mt-2'>&copy; Jan Atzgerstorfer</div></div>\n"

}

loadNavElements()
loadFooter()

// code for navbar scroll animation
window.addEventListener("scroll", function () {
    const navbar = document.getElementById('nav');
    const navbarOptions = Array.from(document.getElementsByClassName("nav-option"))
    const navbarTitle = document.getElementById("navTitle")
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
        navbarTitle.classList.add("scrolled")

        for (const opt of navbarOptions) {
            opt.classList.add("scrolled")
        }
    } else {
        navbar.classList.remove("scrolled");
        navbarTitle.classList.remove("scrolled")
        for (const opt of navbarOptions) {
            opt.classList.remove("scrolled")
        }
    }
});