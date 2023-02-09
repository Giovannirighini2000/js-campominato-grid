// CONTROLLIAMO CHE IL COLLEMENTO FUNZIONI DANDO IL BENVENUTO ALL'UTENTE
// alert('BENVENUTO A CAMPO MINATO')
// COLLEGARE IL BOTTONE PLAY AD UN EVENT LISTENER PER FAR APPARIRE LA GRIGLIA DI GIOCO

const btn = document.getElementById("mybuttonplay")
// QUANDO L'UTENTE FARE UN CLICK SI CE EVENT LISTENER CON UN FUNZIONE 
btn.addEventListener("click", function () {
    // CALCOLO LE CELLE DELLE GRIGLIA 
    let latoGriglia = 10
    let numeroCelle = latoGriglia * latoGriglia
    console.log(latoGriglia, numeroCelle)
    console.log("IL BOTTONE FUNZIONA");
    // COLLEMENTO AL DOM
    const grigliaElement = document.querySelector('.griglia-caselle-di-gioco')
    console.log(grigliaElement)
    // RIMUOVO TUTTI I NODI FIGLI PRIMA DI RIGENERARE LE CELLE
    while (grigliaElement.firstChild) {
        grigliaElement.removeChild(grigliaElement.firstChild)
    }
    // CREO LE DIV CON UN CICLO FOR E USO APPEND PER METTERLI ALL'INZIO DELLA GRIGLIA
    for (let i = 0; i < numeroCelle; i++) {
        let num = i + 1
	    console.log(num)
        let cellaElement = document.createElement('div')
        console.log(cellaElement)
        grigliaElement.append(cellaElement)
        cellaElement.classList.add("cella", "width");
        cellaElement.append(num)
        
    }
    // RIPRENDO IL TAG CELLA CREATO IN PRECEDENZA 
    const celleTotali = document.querySelectorAll('.cella')
    // CREO UN CICLO FOR CHE AL CLICK MI DICE IL NUMERO DELLA CASELLA E MI IMPOSTA IL COLORE 
    // DI BACKGROUND

    for (let i = 0; i < celleTotali.length; i++) {
        const cella = celleTotali[i]
        
        cella.addEventListener('click', function () {
            console.log(i + 1)
            cella.style.backgroundColor = "blue";
            

        })

    }
  

});