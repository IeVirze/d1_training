//Šeit būs kalkulatora funkcionalitāte

function takeValue(event) {
    const num = event.target.getAttribute("value")

    //console.log(num)

    document.getElementById('display').innerHTML += num;
}

function clear(){

}

function showResult() {

}