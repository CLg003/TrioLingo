use triolingo;
db.dropDatabase();

db.words.insertMany([
    // numbers attribute: <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
//animals and colours attribute: https://icons8.com/
    {animals: {
        dog: {
            english: "dog",
            translation: "perro",
            img: "/assets/images/animals/icons8-fat-dog-96.png"
        },
        cat: {
            english: "cat",
            translation: "gato",
            img: "/assets/images/animals/icons8-cat-96.png"
        },
        fish: { 
            english: "fish",
            translation: "pez",
            img: "/assets/images/animals/icons8-flounder-fish-96.png"
        },
        duck: {
            english: "duck",
            translation: "pato",
            img: "/assets/images/animals/icons8-rubber-duck-96.png"
        },
        penguin: { 
            english: "penguin",
            translation: "pinguino",
            img: "/assets/images/animals/icons8-penguin-96.png"
        },
        dinosaur: {
            english: "dinosaur",
            translation: "dinosaurio",
            img: "/assets/images/animals/icons8-kawaii-dinosaur-96.png"
        },
        pig: {
            english: "pig",
            translation: "cerdo",
            img: "/assets/images/animals/icons8-money-box-96.png"
        },
        frog: {
            english: "frog",
            translation: "rana",
            img: "/assets/images/animals/icons8-frog-96.png"
        }
    }},
    {colours: {
        red: {
            english: "red",
            translation: "rojo",
            img: "/assets/images/colours/icons8-fill-color-96RED.png"
        },
        green: {
            english: "green",
            translation: "verde",
            img: "/assets/images/colours/icons8-fill-color-96GREEN.png"
        },
        yellow: {
            english: "yellow",
            translation: "amarillo",
            img: "/assets/images/colours/icons8-fill-color-96YELLOW.png"
        },
        orange: {
            english: "orange",
            translation: "naranja",
            img: "/assets/images/colours/icons8-fill-color-96ORANGE.png"
        },
        brown: {
            english: "brown",
            translation: "marron",
            img: "/assets/images/colours/icons8-fill-color-96BROWN.png"
        },
        blue: {
            english: "blue",
            translation: "azul",
            img: "/assets/images/colours/icons8-fill-color-96BLUE.png"
        },
        white: {
            english: "white",
            translation: "blanco",
            img: "/assets/images/colours/icons8-fill-color-96WHITE.png"
        },
        black: {
            english: "black",
            translation: "negro",
            img: "/assets/images/colours/icons8-fill-color-96BLACK.png"
        },
        purple: {
            english: "purple",
            translation: "morado",
            img: "/assets/images/colours/icons8-fill-color-96PURPLE.png"
        },
    }},
    {numbers: {
        zero: {

            english: "zero",
            translation: "cero",
            img: "/assets/images/numbers/0.png"
        },
        one: {
            english: "one",
            translation: "uno",
            img: "/assets/images/numbers/001-1.png"
        },
        two: {            
            english: "two",
            translation: "dos",
            img: "/assets/images/numbers/002-2.png"
        },
        three: {
            english: "three",
            translation: "tres",
            img: "/assets/images/numbers/003-3.png"
        },
        four: {
            english: "four",
            translation: "cuatro",
            img: "/assets/images/numbers/004-4.png"
        },
        five: {
            english: "five",
            translation: "cinco",
            img: "/assets/images/numbers/005-5.png"
        },
        six: {
            english: "six",
            translation: "seis",
            img: "/assets/images/numbers/006-6.png"
        },
        seven: {
            english: "seven",
            translation: "siete",
            img: "/assets/images/numbers/007-7.png"
        },
        eight: {
            english: "eight",
            translation: "ocho",
            img: "/assets/images/numbers/008-8.png"
        },
        nine: {
            english: "nine",
            translation: "nueve",
            img: "/assets/images/numbers/009-9.png"
        },
        ten: {
            english: "ten",
            translation: "diez",
            img: "/assets/images/numbers/010-10.png"
        }
    }},
])

db.users.insertMany([
    {name: "Cordii",
    lessons_completed: "0"},
    {name: "Claire",
    lessons_completed: "1"},
    {name: "Tanya",
    lessons_completed: "2"},
    {name: "Eli",
    lessons_completed: "3"}

])