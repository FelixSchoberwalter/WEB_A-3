const submitButton = document.getElementById("submitSpeichernBtn");
const fahrgestellnummer = document.getElementById("fahrgestellnummer");
const bezeichnung = document.getElementById("bezeichnung");
const kennzeichenInhalt = document.getElementById("kennzeichen");
const zivilRadioButton = document.getElementById("zivilKennung");
const bundeswehrRadioButton = document.getElementById("bundeswehrKennung");

const ausgabeFehlermeldungen = document.getElementById("fehlermeldungen");

const regExFahrgestellnummer = /^[ABCDEFGHJKLMNPRSTUVWXYZ\d]{11}[\d]{6}$/;
const regExKennzeichenZivil =  /^[A-Z]{1,3}[A-Z]{1,2}[\d]{1,4}$/; 
const regExKennzeichenBundeswehr = /^Y{1}-{1}\d{1,6}$/;

submitButton.addEventListener('click', (e)=> {

    let fehlermeldungen = validiereFahrgestellnummer();

    if(fehlermeldungen.length > 0){
        e.preventDefault();
        ausgabeFehlermeldungen.innerText = fehlermeldungen.join("\n");
    }
})

function validiereFahrgestellnummer(){
    let fehlermeldung = [];

    if(regExFahrgestellnummer.test(fahrgestellnummer.value) === false){
        fehlermeldung.push("Ihre Fahrgestellnummer darf keine Sonderzeichen enthalten, keine Kleinbuchstaben und kein Q,I oder O. Außerdem muss sie genau 17 Stellen haben.");
    }
    if(bezeichnung.value.length < 1){
        fehlermeldung.push("Die Bezeichnung braucht einen Eintrag.");
    }
    if(bundeswehrRadioButton.checked === false && zivilRadioButton.checked === false){
        fehlermeldung.push("Sie müssen bitten angeben welchen Kennzeichetyp Sie haben.");
    }else {
        if(bundeswehrRadioButton.checked === true){
            if(regExKennzeichenBundeswehr.test(kennzeichenInhalt.value) === false){
                fehlermeldung.push("Sie haben ein ungültiges Kennzeicher der Bundeswehr eingegeben.");
            }

        }else{
            if(regExKennzeichenZivil.test(kennzeichenInhalt.value) === false || kennzeichenInhalt.value.length > 8){
                fehlermeldung.push("Sie haben ein ungültiges ziviles Kennzeichen eingegeben.");
            }
        }
    }

    return fehlermeldung;
}