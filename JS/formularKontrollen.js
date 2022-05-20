const formHinzufuegen = document.getElementById("hinzufuegen");
const fahrgestellnummer = document.getElementById("fahrgestellnummer");
const bezeichnung = document.getElementById("bezeichnung")

const regExFahrgestellnummer = /[QIO\sa-z!,%$&"/()=?.:;-_<>|]+/;

formHinzufuegen.addEventListener("submit", (e)=> {

    let fehlermeldungen = validiereFahrgestellnummer();

    if(fehlermeldungen.length > 0){
        e.preventDefault();
        alert(fehlermeldungen.join("\n\n"));
    }
    //kein alert sondern  div in fett rot direkt unter Speichern
})

function validiereFahrgestellnummer(){
    let fehlermeldung = [];

    if(regExFahrgestellnummer.test(fahrgestellnummer.value) === true){
        fehlermeldung.push("Ihre Fahrgestellnummer darf keine Sonderzeichen enthalten, keine Kleinbuchstaben und kein Q,I oder O.");
    }
    if(fahrgestellnummer.value.length !== 17){
         fehlermeldung.push("Ihre Fahrgestellnummer hat nicht die richtige Länge. Diese musss 17 sein.");
    }
    if(bezeichnung.value.length < 1){
        fehlermeldung.push("Die Bezeichnung braucht einen Eintrag.");
    }

    return fehlermeldung;
}