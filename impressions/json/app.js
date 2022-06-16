
/**
 * Deklaration der Variablen
 */
let index;
let client = undefined;

/**
 * Ausgabe zeigen
 */
function showUI(){
    //Identification
    let htmlObj = document.getElementById("identification");
    htmlObj.innerHTML =
        `id: ${client.studentid}<br>`+
        `Firstname: ${client.Firstname}<br>`+
        `Name: ${client.Name}<br>`+
        `Workfield: ${client.Workfield}`;

//Workplace
    htmlObj = document.getElementById("workplace");
    htmlObj.innerHTML =
        `Company: ${client.betrieb.Company}<br>`+
        `Position: ${client.betrieb.Position}<br>`+
        `Email: ${client.betrieb.Email}`;

    //Kurse - Problems
    htmlObj = document.getElementById("problems");
    //clear
    htmlObj.innerHTML = "";
    //set
    client.courses.problems.forEach(modulid => {
        htmlObj.innerHTML += `${modulid}<br>`;
    });


    let skill = "New Skillset";
    if (client.new){
        skill = "New Techniques";
    }
    htmlObj = document.getElementById("allgemeinTitle");
    //clear
    htmlObj.innerHTML = "";
    //set
    htmlObj.innerHTML += " " + skill;

    //Kurse - New Techniques
    htmlObj = document.getElementById("allgemein");
    //clear
    htmlObj.innerHTML = "";
    //set
    let skillListe = client.courses.allgemein;
    for (let i=0;i<skillListe.length; i++){
        htmlObj.innerHTML += `${skillListe[i]}<br>`;
    }


}


/**
 * Nächster Eintrag zeigen
 */
function showNext() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index eins kleiner als das Maximum ist
        if (clientListe.length-1 > index){
            //... erhöhe den index um 1
            index++;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    client = clientListe[index];
    //zeige den Eintrag
    showUI();
}

/**
 *  Vorhergehender Eintrag (Record) zeigen
 */
function showPrevious() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index grösser als das Minimum ist
        if (index > 0){
            //... vermindere den index um 1
            index--;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    client = clientListe[index];
    //zeige den Eintrag
    showUI();
}

//start app
//Falls der index nicht definiert ist ...
if (client === undefined){
    //... dann setze den index auf 0 (Anfang)
    index = 0;
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    client = clientListe[index];
    //zeige den Eintrag
    showUI();
}
