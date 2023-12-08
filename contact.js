
document.getElementById("formAnonymity").addEventListener("click", (event)=>{
    if (event.currentTarget.checked === false) {
        document.getElementById("formFn").removeAttribute("disabled")
        document.getElementById("formLn").removeAttribute("disabled")
        document.getElementById("formEmail").removeAttribute("disabled")
    }
    else {
        document.getElementById("formFn").setAttribute("disabled", "disabled")
        document.getElementById("formLn").setAttribute("disabled", "disabled")
        document.getElementById("formEmail").setAttribute("disabled", "disabled")
    }

})

// fügt die Option für die Fehlerbeschreibung im Formular zu, wenn "Fehler" als Grund angewählt wird.
document.getElementById("formSubject").addEventListener("change", event => {
    if (event.currentTarget.value === "Fehler") {
        document.getElementById("errorDescription").classList.remove("hidden")
    }
    else {
        document.getElementById("errorDescription").classList.add("hidden")
    }
})


// Handler für den Submit vom Kontaktformular
document.getElementById("contactForm").addEventListener("submit", (event)=> {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const targetMail = "jan.atzgerstorfer@student.ksh.ch"
    const mailSubject = `${data.get("subject")} bezüglich der Facharbeit PrWR auf GitHub.io`
    let body = ""
    console.log(data.get("anonymous"))
    if (data.get("anonymous") !== "on") { // Wenn der User nicht anonym bleiben will
        console.log("not anonymous")
        body += `Anonym:\tNein\n`
        body += `Name:\t\t${data.get("firstName")} ${data.get("lastName")}\n`
        body += `E-mail:\t\t${data.get("email")}\n`
    }

    else {
        body += `Anonym:\tJa`

    }
    if (data.get("subject") === "Fehler") {
        body += `\nBeschreibung:\t${data.get("errorDescription")}\n`
    }
    body += `\nNachricht:\n${data.get("message")}\n\n`

    window.location.href = 'mailto:' + targetMail + '?subject=' + encodeURIComponent(mailSubject) + '&body=' + encodeURIComponent(body)



})