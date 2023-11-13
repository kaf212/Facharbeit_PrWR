function loadNavElements() {
    const nav = "<nav id='nav' style='position: fixed'> <div id='navContent' class='container d-flex ' style='height: 100%'> <div class='col-4 d-flex align-items-center' style='height: 100%'> <span id='navTitle'><em><strong>Wirtschaftsgeschichte 2</strong></em></span> </div> <div class='flex-spacer'></div> <a href='./index.html' class='nav-option'><div> <span>Home</span> </div></a> <a href='./content.html' class='nav-option'><div class='nav-option'> <span>Wiki</span> </div></a> <a href='' class='nav-option'><div class='nav-option'> <span>Über uns</span> </div></a> </div> </nav>"

    Array.from(document.getElementsByClassName("nav-header")).forEach((h) => {
        const temp = h.innerHTML
        h.innerHTML = nav
        h.innerHTML += temp
    })
}

loadNavElements()
