var autosArray = [
    {
        fahrgestellnummer: "WVWZZZ1KZ5W192681",
        hersteller: "VW",
        bezeichnung: "Polo",
        kraftstoff: "Benzin",
        farbe: "Schwarz",
        stellplatz: "D8",
        anmerkung: "-"
    },

    {
        fahrgestellnummer: "1B3LC46K68N629623",
        hersteller: "Skoda",
        bezeichnung: "Fabio Mont",
        kraftstoff: "Hybrid",
        farbe: "Grau",
        stellplatz: "E9",
        anmerkung: "-"
    },

    {
        fahrgestellnummer: "SALNY22252A259131",
        hersteller: "VW",
        bezeichnung: "Golf 5",
        kraftstoff: "Benzin",
        farbe: "Schwarz",
        stellplatz: "G7",
        anmerkung: "BlueMotion"
    },

    {
        fahrgestellnummer:  "4T1BF30KX5U097715",
        hersteller: "Opel",
        bezeichnung: "Corsa",
        kraftstoff: "Diesel",
        farbe: "Schwarz",
        stellplatz: "B6",
        anmerkung: "-"
    },

    {
        fahrgestellnummer: "1FMZU65K63ZA29250",
        hersteller: "BMW",
        bezeichnung: "330I",
        kraftstoff: "Elektro",
        farbe: "Rot",
        stellplatz: "F4",
        anmerkung: "-"
    },

    {
        fahrgestellnummer: "2LMDJ8JKXEBL18582",
        hersteller: "BMW",
        bezeichnung: "750LI",
        kraftstoff: "Diesel",
        farbe: "Schwarz",
        stellplatz: "B1",
        anmerkung: "-"
    },
    
    {
        fahrgestellnummer: "JHMCP26428C045853",
        hersteller: "Fiat",
        bezeichnung: "500C",
        kraftstoff: "Benzin",
        farbe: "Grau",
        stellplatz: "A10",
        anmerkung: "-"
    },

    {
        fahrgestellnummer: "1LNHM82W33Y621189",
        hersteller: "Mercedes",
        bezeichnung: "B-Klasse",
        kraftstoff: "Hybrid",
        farbe: "Grau",
        stellplatz: "A5",
        anmerkung: "Cabrio"
    },
]

function printAutos(){
 
  autoTabelle = document.getElementById("autoTable");

  for (var i = 1; i < autoTabelle.rows.length; i++){
     autoTabelle.rows[i].cells[0].innerHTML = autosArray[i-1].fahrgestellnummer;
     autoTabelle.rows[i].cells[1].innerHTML = autosArray[i-1].hersteller;
     autoTabelle.rows[i].cells[2].innerHTML = autosArray[i-1].bezeichnung;
     autoTabelle.rows[i].cells[3].innerHTML = autosArray[i-1].kraftstoff;
     autoTabelle.rows[i].cells[4].innerHTML = autosArray[i-1].farbe;
     autoTabelle.rows[i].cells[5].innerHTML = autosArray[i-1].stellplatz;
     autoTabelle.rows[i].cells[6].innerHTML = autosArray[i-1].anmerkung;
  }     
}

function printIcons(){

    autoTabelle = document.getElementById("autoTable");

    for (var i = 1; i < autoTabelle.rows.length; i++){

        autoTabelle.rows[i].cells[7].innerHTML = '<i class="fa-regular fa-image"></i>'; 
        autoTabelle.rows[i].cells[8].innerHTML = '<i class="fa-solid fa-pencil"></i>';
        autoTabelle.rows[i].cells[9].innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    }

}

printIcons();

printAutos();

