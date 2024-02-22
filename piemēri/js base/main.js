//Javascript kods

// Funkcija: atslegasvārds funkcijasNosaukums()
function floral(){
    //objekts document apzīmē visu HTML dokumenta struktūru
    //.getElementById() iebūvēta metode, kas atrod html elementu pēc tā id nosaukuma  https://www.w3schools.com/js/js_htmldom_document.asp
    // .innerHTML īpašība (property), kas piešķir elementam citu vērtību 

    document.getElementById("outter").innerHTML = "Hello World from the other file!";
}