//Javascript kods iet šeit

//funkcija getValue(event)
function getValue(event) {
    const num = event.target.getAttribute("value")
    const display = document.getElementById("display")
    let text = display.innerHTML
    //Pārbauda vai konsolē tiek izvadīta pogas vērtība pareizi
    //console.log(num)

    //ja tiek sasniegts konkrēts skaitļu/darbības zīmju skaits teksta virknē, tad notīra rezultātu
    if (text.length < 23 ) {
        document.getElementById("display").innerHTML += num; 
    } else {
        clearInput()
        console.log("Virkne par garu")
    }
    
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