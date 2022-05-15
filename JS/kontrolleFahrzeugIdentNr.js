const formHinzufuegen = document.getElementById("hinzufuegen");
const fahrgestellnummer = document.getElementById("fahrgestellnummer");
const bezeichnung = document.getElementById("bezeichnung")

const regExFahrgestellnummer = /^[ABCDEFGHJKLMNPRSTUVWXYZ0-9]+$/;

formHinzufuegen.addEventListener("submit", (e)=> {

    if(validiereFahrgestellnummer().length > 0){
        e.preventDefault();
        alert(validiereFahrgestellnummer().join("\n\n"));
    }
})

function validiereFahrgestellnummer(){
    let fehlermeldung = [];

    if(regExFahrgestellnummer.test(fahrgestellnummer.value) === false){
        fehlermeldung.push("Ihre Fahrgestellnummer erfüllt die falschen Vorraussetzungen.");
    }else if(fahrgestellnummer.value.length == 17){
         fehlermeldung.push("Ihre Fahrgestellnummer erfüllt die falschen Vorraussetzungen.");
    }
    if(bezeichnung.value.length < 1){
        fehlermeldung.push("Die Bezeichnung braucht einen Eintrag.");
    }

    return fehlermeldung;
}