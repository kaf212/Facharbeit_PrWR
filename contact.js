
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