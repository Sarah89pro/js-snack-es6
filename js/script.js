/*jsnack2
A
creore un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.

B
generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.

C
creiamo un nuovo array i cui elementi contengono solo nomi, falli subiti e stampiamo in console*/


//CON ES5

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