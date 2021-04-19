

/*jsnack 4 CON ES6
Dato un'array con dei capi d'abbigliamento - con informazioni su nome modello, tipologia e colore -
si aggiunga a ciascun elemento una ulteriore proprietà che indichi il costo del prodotto.
Per inserire il costo del singolo prodotto si scriva una funzione che generi un numero random da 10 a 50
(potete sfruttare il map per aggiungere la nuova proprietà)*/

const garments = [
    {
        brand: "Giuditta",
        type: "dress",
        color: "white",
    },
    {
        brand: "Panerai",
        type: "wristwatch",
        color: "gold",
    },
    {
        brand: "Desigual",
        type: "bag",
        color: "blue",
    },
];

const newGarments = garments.map((element) => {
    const newElement = {
        ...element,
        price: randomNumber (10, 50)
    }

    return newElement;
});


/***********
 * UTILITY *
 **********/

function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(newGarments);







/*jsnack 3 con ES6
Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
inseriti dall'utente (è possibile usare, ad esempio, for/foreach/filter*/

 
//REFS    

/*const myArray = ["Paolo", "Fabio", "Lorenzo", "Didier", "Alexandre", "Salvatore"];

let min = parseInt(prompt("Inserisci un numero tra 0 e 5"));
while(isNaN(min) || (min > 0 && min < myArray.length) ) {
    min = parseInt(prompt("Inserisci un numero tra 0 e 5"));
}


let max = parseInt(prompt("Inserisci un numero tra "+min+" e 5"));
while(isNaN(max) || (max < min || max > myArray.length) ) {
    min = parseInt(prompt("Inserisci un numero tra "+min+" e 5"));
}

//con Filter
const newFilterArray = myArray.filter((element, index) => {
    return min <= index && max >=index;
});*/

//con for Each
/*function filterArray(min, max) {
    myArray.forEach((element, index) => {
        if(min <= index && max >= index) {
            newArray.push(element);
        }
    });
}
filterArray (min, max);

console.log(newArray);*/



//CON ES5
/*let newArray = [];

//FUNZIONE
function filterArray(arr, min, max) {
    for (let i = 0; i < arr.length; i++) {
        const tmp = arr[i];
        if(min <= i && max >= i) {
            newArray.push(tmp);
        }
        
    }
}

filterArray (myArray, min, max);
console.log(newArray);*/
    




/*jsnack2 CON ES6
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

/*const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
};

const teams = [
    {
        teamName: "Juventus",
        scores: 0,
        fouls: 0,
    },
    {
        teamName: "Roma",
        scores: 0,
        fouls: 0,
    },
    {
        teamName: "Lazio",
        scores: 0,
        fouls: 0,
    },
];

console.log(teams);

//cloned teams
let updateTeams =[...teams];

for (let i = 0; i < teams.length; i++) {
    updateTeams[i].scores = randomNumber (0, 100);
    updateTeams[i].fouls = randomNumber (0, 100);
}


console.log("Results", updateTeams);

//new array for results
let newResults = [];

for (let i = 0; i < updateTeams.length; i++) {
    newResults.push({
        teamName: updateTeams[i].teamName,
        scores: updateTeams[i].scores,
    })
}

console.log("New results ", newResults);*/


/*jsnack2 CON ES5
A
creore un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.

B
generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.

C
creiamo un nuovo array i cui elementi contengono solo nomi, falli subiti e stampiamo in console*/


//A
/*var teams = [
    {
        teamName: "Juventus",
        scores: 0,
        fouls: 0,
    },
    {
        teamName: "Roma",
        scores: 0,
        fouls: 0,
    },
    {
        teamName: "Lazio",
        scores: 0,
        fouls: 0,
    },
];

//B
for (var i = 0; i < teams.length; i++) {
    var team = teams[i];

    team.scores = randomNumber (0, 10);
    team.fouls = randomNumber(0, 10);
}

console.table(teams);



//C
var newTeams = [];
for (var i = 0; i < teams.length; i++) {
    var team = teams[i];

    newTeams.push( {
        teamName: team.teamName,
        fouls: team.fouls,
    });
}

console.table(newTeams);



/************
 * UTILITY *
************/

/*function randomNumber(min, max) {
    return Math.floor( Math.random() * (max - min +1) ) + min;
}*/









/*jsnack 1 CON ES6
Creare un array di oggetti: 
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal*/
/*const bikes = [
    {
        bikename: "Merida",
        weight: 24, 
    },
    {
        bikename: "Kona",
        weight: 20,
    },
    {
        bikename: "Santa Cruz",
        weight: 30,
    }, 
];

console.log(bikes);

let lightBike = 0;

for (let i = 0; i < bikes.length; i++) {
    console.log(bikes[i]);

    if(bikes[i].weight < bikes[lightBike].weight) {
        lightBike = i;
    }
}

console.log("La bicicletta più leggera è ", bikes[lightBike]);

document.getElementById("bk").innerHTML = `
    <span class="bike"> ${bikes[lightBike].bikename} </span>
    <label for="weight> Peso </label> <span class="weight"> ${bikes[lightBike].weight} </span>
    `;*/




//CON ES5

/*var bikes = [
    {
        bikename: "Merida",
        weight: 24, 
    },
    {
        bikename: "Kona",
        weight: 20,
    },
    {
        bikename: "Santa Cruz",
        weight: 30,
    },
];

var lightBike = bikes[0]; //partiamo da quella con indice zero, la prima

for (var i = 1; i < bikes.length; i ++) {

    if (bikes[i].weight < lightBike.weight) {
        lightBike = bikes[i];
    }
}

console.log(lightBike);*/