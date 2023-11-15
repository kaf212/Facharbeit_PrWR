function loadNavElements() {
    const nav = "<nav id='nav' style='position: fixed'><div id='navContent' class='container d-flex ' style='height: 100%'><div class='col-4 d-flex align-items-center' style='height: 100%'><span id='navTitle'><em><strong>Wirtschaftsgeschichte 2</strong></em></span></div><div class='flex-spacer'></div><div class='nav-option'><button onClick=\"window.location.href='./index.html';\">Home</button></div><div class='nav-option'><button onClick=\"window.location.href='./content.html';\" class=''>Themen</button></div><div class='nav-option'><button onClick=\"window.location.href='';\">Über uns</button></div></div></nav>\n"

    Array.from(document.getElementsByClassName("nav-header")).forEach((h) => {
        const temp = h.innerHTML
        h.innerHTML = nav
        h.innerHTML += temp
    })
}

loadNavElements()
