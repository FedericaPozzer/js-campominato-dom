// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


/************************************
 *              ON LOAD             *
 ***********************************/


// richiamo il bottone dall'HTML
let my_button = document.getElementById("start-button");
// addeventlistener con il click sul bottone
my_button.addEventListener(
    "click", 
    function () {
        // genero la griglia.. come? BOH, intanto vedi se va:
        // console.log("cliccato");
        // prendo la griglia dall'HTML
        const grid_el = document.getElementById("grid");
        // collego la funzione griglia con la girglia pescata dall'HTML
        generate_grid(grid_el, 1);
        
        // distinzione in base al livello selezionato
            // richiamo il mio select
        let difficulty_el = document.getElementById("difficulty");
            // assegno il suo value a una costante
        const level = difficulty_el.value;
            // funziona? si!
        console.log("livello selezionato: " + level);
    }
)



/************************************
 *            FUNCTIONS             *
 ***********************************/

/**
 * funzione per creare una griglia con dentro le celle numerate
 * @param {HTMLElement} grid griglia con celle
 * @param {int} difficulty il livello di difficoltà selezionato (che definisce se le mie celle saranno 100 -easy-, 81 -medium- oppure 64 -hard- )
 */

function generate_grid(grid, difficulty) {
    
    // svuoto la grid (nel caso sia piena, così se clicco "start game" più volte non comapiono griglie sotto)
    grid.innerHTML = "";

    // le celle devono essere numerate, quindi:
    // dichiaro array lista numeri (vuota)
    let lista_numeri = [];

    // condizioni per generare i numeri
    for (let i = 0; i < 100; i++) {
        // pusho i numeri generati nell'array
        lista_numeri.push(i + 1);
    }
    // funziona? NOPE -- perchè? AAAAH ok, perchè siamo dentro a un click iniziale -.-" ok, funziona!
    // console.log(lista_numeri);


    for (let i = 0; i < 100; i++) {
        // creo le celle
        const cell_el = document.createElement("div");
        cell_el.classList.add("square");
        grid.append(cell_el);

        // "quando clicco sulla cella, cambia colore"
        cell_el.addEventListener("click",
            function () {
                this.classList.toggle("clicked");
                console.log("hai cliccato la cella numero " + this.innerHTML);
            }
        )

        // now, ogni volta che genero una cella la devo numerare :)
        cell_el.innerHTML = i + 1;     
    }

    // day 2 --> GENERO 16 NUMERI CASUALI DA 1 A 100 - I NUMERI NON DEVONO RIPETERSI
                // I 16 NUMERI SARANNO LE 16 BOMBE
    const bombs_array = [];

    while (bombs_array.length < 16) {
        random_number = Math.floor(Math.random() * 100) + 1;

        if (!bombs_array.includes(random_number)) {
            bombs_array.push(random_number);
        }
    }
    console.log("bombs locations: " + bombs_array);

};










// BONUS BOH -- non va
// let numero_celle;
// if (difficulty == 1) {
//     numero_celle = 100;
//     // cell_el.classList.add("square-medium");
// } else if (difficulty == 2) {
//     numero_celle = 81;
//     cell_el.classList.add("square-medium");
// } else if (difficulty == 3) {
//     numero_celle = 64;
//     cell_el.classList.add("square-big");
// }


/***********************************************************************************************************************************/
/******************************************************** DAY TWO ******************************************************************/
/***********************************************************************************************************************************/

// Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco(attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js / css / con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git). - DONE
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti(ovvero quando ha rivelato tutte le celle che non sono bombe).
// Errata corrige: rendere le caselle "non cliccabili" e far finire la partita è un superbonus, non è richiesto dalla consegna!
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.

// GENERO 16 NUMERI CASUALI DA 1 A 100 - I NUMERI NON DEVONO RIPETERSI
// I 16 NUMERI SARANNO LE 16 BOMBE
// SE CLICCANDO UNA CELLA TROVO UNA BOMBA
    // LA CELLA SI COLORA DI ROSSO
    // LA PARTITA FINISCE ---- COMUNICO CHE HAI PERSO, DOPO TOT CLICK 
// SE CLICCO 100-16 CASELLE AZZURRE
    // LA PARTITA FINISCE ---- COMUNICO CHE HAI VINTO E CHE SEI UN DRAGO


