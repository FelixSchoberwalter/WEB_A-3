const submitButton = document.getElementById("submitSpeichernBtn");
const fahrgestellnummer = document.getElementById("fahrgestellnummer");
const bezeichnung = document.getElementById("bezeichnung");
const kennzeichenInhalt = document.getElementById("kennzeichen");
const zivilRadioButton = document.getElementById("zivilKennung");
const bundeswehrRadioButton = document.getElementById("bundeswehrKennung");

const ausgabeFehlermeldungen = document.getElementById("fehlermeldungen");

const regExFahrgestellnummer = /[QIO\sa-z!,%$&"/()=?.:;-_<>|]+/;
const regExKennzeichenZivil =  /^[A-Z]{1,3}[A-Z]{1,2}[\d]{1,4}$/; //finde heraus was /g genau macht global?
const regExKennzeichenBundeswehr = /^[A-Z]{1,3}[A-Z]{1,2}[\d]{1,4}$/;

submitButton.addEventListener('click', (e)=> {

    let fehlermeldungen = validiereFahrgestellnummer();

    if(fehlermeldungen.length > 0){
        e.preventDefault();
        ausgabeFehlermeldungen.innerText = fehlermeldungen.join("\n");
    }
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
    if(bundeswehrRadioButton.checked === false && zivilRadioButton.checked === false){
        fehlermeldung.push("Sie müssen bitten angeben welchen Kennzeichetyp Sie haben.");
    }else {
        if(bundeswehrRadioButton.checked === true){

        }else{
            if(regExKennzeichenZivil.test(kennzeichenInhalt.value) === false){
                fehlermeldung.push("Sie haben ein ungültiges Ziviles Kennzeichen eingegeben.");
            }
        }
    }

    return fehlermeldung;
}