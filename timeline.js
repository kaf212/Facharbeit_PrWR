

function renderTimeLine() {
    const yearElements = Array.from(document.getElementById("timeLineList").children)
    const timeLine = document.getElementById("timeLine")
    const startYear = Number(yearElements[0].innerText) // erstes Jahr des Zeitstrahls
    const endYear = Number(yearElements[yearElements.length - 1].innerText) // letztes Jahr
    const timeLineDuration = endYear - startYear // Gesamtdauer des Zeitstrahls in Jahren
    console.log(`total time on timeline (${startYear} - ${endYear}) =   ${timeLineDuration}`)

    const imgElements = Array.from(document.getElementById("timeLineImages").children)

    let totalElementWidth = 0 // Summierte Breite aller HTML-Element auf dem Strahl
    let elemWidth = undefined
    yearElements.forEach(elem => {
        elemWidth = elem.offsetWidth
        totalElementWidth += elem.offsetWidth
    })
    console.log(`total element width (${document.getElementById("timeLineList").childElementCount} * ${elemWidth}) =  ${totalElementWidth}`)


    let debuggingTimeLineWidth = 0
    for (let i=1;i<yearElements.length; i++) {
        /*
        Iteriert über alle Jahr-Elemente und Bild-Elemente des Zeitrstrahls ausser dem ersten element
         */
        let year = yearElements[i]
        let prevYear = Number(yearElements[i - 1].innerText) // Numerischer Wert des vorjahres
        let yearDiff = Number(year.innerText) - prevYear // Differenz zwischen jahr A und B
        let relativeDistance = yearDiff * 100 / timeLineDuration // Relative Distanz zwischen A und B in % der Gesamtstrecke in Jahren.
        console.log(`Relative distance from ${prevYear} - ${year.innerText} (${yearDiff} years of ${timeLineDuration} years) =  ${relativeDistance}%`)
        let relativeWidthOfElement = year.offsetWidth * 100 / timeLine.offsetWidth
        console.log(`relative width of element: ${year.offsetWidth} * 100 / ${timeLine.offsetWidth} = ${relativeWidthOfElement}`)

        let img = imgElements[i]
        let relativeImgWidth = img.offsetWidth * 100 / timeLine.offsetWidth
        console.log(`relative IMG width = ${img.offsetWidth} * 100 / ${timeLine.offsetWidth} = ${relativeImgWidth}`)
        img.style.marginLeft = String(relativeDistance - relativeImgWidth) + "%"
        relativeImgWidth.toFixed(2)
        //img.style.transform = `translateX(-${relativeImgWidth}%)`


        if (yearElements.indexOf(year) === yearElements.length -1) { // Wenn das letzte Jahr erreicht wurde:
            year.style.marginLeft = String(relativeDistance - relativeWidthOfElement) + "%"
            img.style.marginLeft = String(relativeDistance - relativeImgWidth) + "%"
            /* Diese Bedingung stellt sicher, dass das letzte Jahr nicht über den Zeitstrahl hinausragt, indem
            sie die Margin des letzten Elements um das doppelte der relativen Breite der Elemente vermindert.
             */
        }
        else {
            year.style.marginLeft = String(relativeDistance - relativeWidthOfElement) + "%"
            //year.style.transform = `translateX(-${relativeWidthOfElement}%)` //
            // Dieser Code wird bei allen anderen Jahren ausgeführt
        }
    }

    for (let i=0;i<yearElements.length; i++) {
        yearElements[i].style.transform = `translateX(-50%)`
        imgElements[i].style.transform = `translateX(-50%)`
    }
}

renderTimeLine()
window.addEventListener("resize", renderTimeLine)
