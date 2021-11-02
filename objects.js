//le graffe indicano un oggetto, le quadre un array
// oggetto vuoto {}
const movie={ 
    title: "Free Guy",
    year: 2021,
    cast: ["Ryan Raynolds", "Jodie Comer"],
    details:{
        cameos: true,
        isFunny: true,
        realistic: false,
        genre:"comedy",
        duration: 115,
    }
};

//metodi di stampa
console.log(movie);
console.log(movie.title);
console.log(movie.details.cameos);
console.log(movie.cast[0]);

//aggiunge e quindi modifica l'oggetto
movie.director = "Shaun Levy";
console.log(movie); //ritornerà l'oggetto con director aggiunto

