//Javascript kods iet šeit

//funkcija getValue(event)
function getValue(event) {
    const num = event.target.getAttribute("value")

    document.getElementById("display").innerHTML += num;
}


//funkcija clear(), kas notīra visas vērtības


//funkcija result(), kas parāda aprēķināto rezultātu