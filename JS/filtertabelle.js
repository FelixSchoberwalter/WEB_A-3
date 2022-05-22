function tabelleFilter(){

    var suchButton = document.getElementById("suchenButton");
    var kraftstoff = document.getElementById("kraftstoffValue").value;
    var tabelle = document.getElementById("tabelleAutos");

    
    for (var i = 1; i < tabelle.rows.length; i++){

        var kraftstoffTabelle = tabelle.rows[i].cells[3].innerHTML;
          
            if (kraftstoffTabelle != kraftstoff){
                tabelle.rows[i].style.display = 'none';
            }


}

}