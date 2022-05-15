function eingabesimulator(){
    var hersteller = document.getElementById("suchfeldHersteller");
    var kraftstoff = document.getElementById("suchfeldKraftstoff");

    hersteller.value = "BWM";
    kraftstoff.value = "Elektro";

    setTimeout(function() {
        window.location.replace("beispielsuche.html");
    }, 5000);
}