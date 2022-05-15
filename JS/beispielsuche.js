function eingabesimulator(){
    var hersteller = document.getElementById("suchfeldHersteller");
    var kraftstoff = document.getElementById("suchfeldKraftstoff");

    hersteller.value = "Penis";
    kraftstoff.value = "Prothese";

    setTimeout(function() {
        window.location.replace("beispielsuche.html");
    }, 5000);
}