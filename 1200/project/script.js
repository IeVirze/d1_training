//Javascript kods iet šeit

//funkcija getValue(event)
function getValue(event) {
    const num = event.target.getAttribute("value")
    //Pārbauda vai konsolē tiek izvadīta pogas vērtība pareizi
    console.log(num)
    document.getElementById("display").innerHTML += num; 
}

//funkcija clear(), kas notīra visas vērtības
function clearInput() {
    console.log("Cipari notīrīti!")

    //Lai nodzēstu displeja vērtību to aizstājam ar tukšu teksta string
    document.getElementById("display").innerHTML = "";
}


//funkcija result(), kas parāda aprēķināto rezultātu
function result() {
    console.log("Rezultāts iegūts")
    //mainīgais, kurš satur rezultātu
    // Iebūvētā JS funkcija - eval()
    let result = eval(document.getElementById("display").innerHTML)
    document.getElementById("display").innerHTML = result;
}