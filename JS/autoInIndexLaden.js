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
        stellplatz: "A3",
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

    {
        fahrgestellnummer: "6LKHM868HENY6KEP4",
        hersteller: "Mercedes",
        bezeichnung: "A-Klasse",
        kraftstoff: "Benzin",
        farbe: "Grau",
        stellplatz: "A6",
        anmerkung: "-"
    },

    {
        fahrgestellnummer: "1KEBA65K65ZA29250",
        hersteller: "BMW",
        bezeichnung: "330I",
        kraftstoff: "Elektro",
        farbe: "Gelb",
        stellplatz: "F3",
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
        fahrgestellnummer: "2FMZU65L84ZA29250",
        hersteller: "BMW",
        bezeichnung: "330I",
        kraftstoff: "Elektro",
        farbe: "Blau",
        stellplatz: "F5",
        anmerkung: "-"
    },

    {
        fahrgestellnummer: "3PEUA5K45CJ29250",
        hersteller: "BMW",
        bezeichnung: "330I",
        kraftstoff: "Elektro",
        farbe: "Weiss",
        stellplatz: "F6",
        anmerkung: "-"
    },

    {
        fahrgestellnummer: "2LMDJ8JKXEBL18582",
        hersteller: "BMW",
        bezeichnung: "750LI",
        kraftstoff: "Diesel",
        farbe: "Schwarz",
        stellplatz: "A4",
        anmerkung: "-"
    },

    {
        fahrgestellnummer: "2LKAI8JKXEBL18582",
        hersteller: "BMW",
        bezeichnung: "750LI",
        kraftstoff: "Diesel",
        farbe: "Schwarz",
        stellplatz: "A2",
        anmerkung: "-"
    },

    {
        fahrgestellnummer: "WVKAID1KZ5W192681",
        hersteller: "VW",
        bezeichnung: "Polo",
        kraftstoff: "Benzin",
        farbe: "Schwarz",
        stellplatz: "D4",
        anmerkung: "-"
    },

    {
        fahrgestellnummer: "WKWAZY1KZ5Q192681",
        hersteller: "VW",
        bezeichnung: "Polo",
        kraftstoff: "Benzin",
        farbe: "Schwarz",
        stellplatz: "D7",
        anmerkung: "-"
    },

    {
        fahrgestellnummer: "WAUEBW5UW5W192681",
        hersteller: "VW",
        bezeichnung: "Polo",
        kraftstoff: "Benzin",
        farbe: "Weiss",
        stellplatz: "A8",
        anmerkung: "-"
    },

    {
        fahrgestellnummer: "192681Z1KZ5W19268",
        hersteller: "VW",
        bezeichnung: "Polo",
        kraftstoff: "Benzin",
        farbe: "Schwarz",
        stellplatz: "D2",
        anmerkung: "-"
    },

    
]

function autotabelleErstellen(){

    let autoTabelle = document.getElementById("tabelleAutos");

    for(var i = 0; i < autosArray.length;i++){

        var zeile = document.createElement('tr');

        for (var j = 0; j < 10;j++){

            zeile.appendChild(document.createElement('td'));
            
        }

        

        autoTabelle.appendChild(zeile)



    }
}





function printAutos(){
 
  let autoTabelle = document.getElementById("tabelleAutos");

  var imageIcon = document.createElement('button');
  imageIcon.innerHTML = '<img src="Media/image-icon.png"/>';

  let pencilIcon = document.createElement('button');
  pencilIcon.innerHTML = '<img src="Media/pencil-icon.png"/>';

  var trashIcon = document.createElement('button');
  trashIcon.innerHTML = '<img src="Media/trash-icon.png"/>';

  for (var i = 1; i < autoTabelle.rows.length; i++){
     autoTabelle.rows[i].cells[0].innerHTML = autosArray[i-1].fahrgestellnummer;
     autoTabelle.rows[i].cells[1].innerHTML = autosArray[i-1].hersteller;
     autoTabelle.rows[i].cells[2].innerHTML = autosArray[i-1].bezeichnung;
     autoTabelle.rows[i].cells[3].innerHTML = autosArray[i-1].kraftstoff;
     autoTabelle.rows[i].cells[4].innerHTML = autosArray[i-1].farbe;
     autoTabelle.rows[i].cells[5].innerHTML = autosArray[i-1].stellplatz;
     autoTabelle.rows[i].cells[6].innerHTML = autosArray[i-1].anmerkung;  

     autoTabelle.rows[i].cells[7].appendChild(imageIcon.cloneNode(true));
     autoTabelle.rows[i].cells[7].addEventListener('click', () =>{
       
        window.open("Media/beispielAuto.jpg");
     }
     )
     autoTabelle.rows[i].cells[8].appendChild(pencilIcon.cloneNode(true));
     autoTabelle.rows[i].cells[8].addEventListener('click', (e) => {

        location.href = "fahrzeug_hinzufuegen.html";
        


     })

     autoTabelle.rows[i].cells[9].appendChild(trashIcon.cloneNode(true));
     autoTabelle.rows[i].cells[9].addEventListener('click', (e) => {

        var bt = e.target;
        bt.closest('tr').remove();

     });
     
  }  
  
  
}



