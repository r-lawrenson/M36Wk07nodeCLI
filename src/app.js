const yargs = require("yargs");

const { Movie, movieArr } = require("./utils");

// console.log(process.argv);
// console.log(yargs.argv)

const app = (movieObj) => {
    // if else to check the user input
    if(movieObj.add) {
        const movie = new Movie(movieObj.title, movieObj.actor, movieObj.year);
        movie.add();
        console.log(movieArr);

    } else {
        console.log("Incorrect command")
    }
}

function uesrInput() {
    app(yargs.argv);
}

uesrInput()

// node src/app.js --add --title="Guardians of the Galaxy" --actor="Chris Pratt, Vin Disel" --year=2016 

// const app = (movieObj) => {
//     // if else to chech the user input
//     if(movieObj.add) {
//         //
//         let movie1 = new Movie(movieObj.title1, movieObj.actor1, movieObj.genre1, movieObj.certificate, movieObj.year);
//         movie.add();
        
//         console.log(movieArr);
//     } else {
//         console.log("Incorrect command")
//     }
// }

// function uesrInput() {
//     app(yargs.argv);
// }

// uesrInput()