// SNACKS CON ES6




/*jsnack2
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












/*jsnack 1
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












// SNACKS CON ES5

/*jsnack2
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













/*jsnack 1
Creare un array di oggetti
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore*/

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