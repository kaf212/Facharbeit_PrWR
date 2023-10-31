
function loadNavElements() {
    const nav = "<nav id='nav' style='position: fixed'> <div id='navContent' class='container d-flex ' style='height: 100%'> <div class='col-4 d-flex align-items-center' style='height: 100%'> <span id='navTitle'><em><strong>Wirtschaftsgeschichte 2</strong></em></span> </div> <div class='flex-spacer'></div> <div class='nav-option'> <span>Home</span> </div> <div class='nav-option'> <span>Kontakt</span> </div> <div class='nav-option'> <span>Über uns</span> </div> </div> </nav>"

    Array.from(document.getElementsByClassName("nav-header")).forEach((h)=> {
        const temp = h.innerHTML
        h.innerHTML = nav
        h.innerHTML += temp
    })
}

loadNavElements()
