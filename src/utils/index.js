
const movieArr = [];

class Movie {
    constructor(
        title, 
        actor = "Not specified",
        year = "Not Specified"
        ) {
    this.title = title;
    this.actor = actor;
    this.year = year;
    }
    add() {
        movieArr.push(this)
    }

    addMultiple() {
        movieArr.push(this)
    }

};

module.exports = {Movie, movieArr};