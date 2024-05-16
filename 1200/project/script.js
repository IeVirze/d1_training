//Javascript kods iet šeit

//funkcija getValue(event)
function getValue(event) {
    const num = event.target.getAttribute("value")

    //Pārbauda vai konsolē tiek izvadīta pogas vērtība pareizi
    console.log(num)

    document.getElementById("display").innerHTML += num;
}

//funkcija clear(), kas notīra visas vērtības
function clear() {

}


//funkcija result(), kas parāda aprēķināto rezultātu
function result() {

}