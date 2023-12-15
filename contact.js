
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

    // Zuerst alle dynamischen Formular-Elemente deaktivieren
    Array.from(document.getElementsByClassName("dynamic-form-element")).forEach(elem => {

        elem.style.display = "none"

        Array.from(elem.getElementsByTagName("input")).forEach(input => {
            input.removeAttribute("required")
        })
    })

    let elemId = undefined
    // Betreff der Nachricht auslesen und korrektes dynamisches Element aktivieren.
    switch (event.currentTarget.value) {
        case "Fehler":
            elemId = "errorDescription"
            break

        case "Anfrage":
            elemId = "requestDescription"
            break

        case "Feedback":
            elemId = "feedbackDescription"
            break

        case "Vorschlag":
            elemId = "proposalDescription"
            break

    }

    document.getElementById(elemId).style.display = "block"

    const radios = Array.from(document.getElementById(elemId).getElementsByTagName("input"))

    if (radios !== undefined) {
        radios.forEach(radio => {
            radio.setAttribute("required", "required")
        })
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
    if (data.get("subject") === "Anfrage") {
        body += `\nBeschreibung:\t${data.get("requestDescription")}\n`
    }
    if (data.get("subject") === "Feedback") {
        body += `\nBeschreibung:\t${data.get("feedbackDescription")}\n`
    }
    if (data.get("subject") === "Vorschlag") {
        body += `\nBeschreibung:\t${data.get("proposalDescription")}\n`
    }


    body += `\nNachricht:\n${data.get("message")}\n\n`

    window.location.href = 'mailto:' + targetMail + '?subject=' + encodeURIComponent(mailSubject) + '&body=' + encodeURIComponent(body)



})