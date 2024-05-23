//Šeit būs kalkulatora funkcionalitāte

function takeValue(event) {
    const num = event.target.getAttribute("value")
    let input = document.getElementById('display')
    let text = input.innerHTML;
    //console.log(num)
    document.getElementById('display').innerHTML += num;

    //ja display ievadītā teksta garums ir lielāks par 15 rakstzīmēm izpildīt sekojošo
    if (text.length > 15 ) {
        clearInput();
    } 
}


//C pogas funkcija - notīrīt visu
function clearInput() {
    display.innerHTML = "";
}

//= funkcija parādīt rezultātu
function showResult() {
    //mainīgais, kas paņem displeja innerHTML vērtību un pēc tās aprēķina rezultātu
    //eval() šajā mācību projektā ir pieņemams, bet reālos projektos no tā vajag izvairīties
    const result = eval(document.getElementById('display').innerHTML);
    document.getElementById('display').innerHTML = result;
}