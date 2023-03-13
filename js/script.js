// //Arrays (lista in python)

// const students = ["Giuseppe" , "Hector", "Giulia", "Silvio"];


// for (let i = 0; i < students.length ; i++){
//     console.log(students[i]);
// }

// //per prendere l'ultimo elemento
// console.log(students[students.length - 1])

// //stampare partendo dall'ultimo

// for (let i = (students.length - 1); i>=0 ; i--) {
//     console.log(students[i]);
// }


//!esercizi
//chiediamo all'utente un numero e stampiamo quello

const words = ["Volvo" , "Pane" , "Cane", "Bicicletta"]

const userNumber = parseInt(prompt("Dimmi un numero"));

//condizioni di controllo
if (userNumber < words.length && userNumber >= 0 && !isNaN(userNumber)){
    const userWord = words[userNumber];
    console.log(userWord);
} else {alert(`Il numero deve essere compreso tra 0 e ${words.length - 1}`)}

//chiediamo all'utente un numero e stampiamo quello + quello successivo

let userNumber2 = parseInt(prompt("Dimmi un numero"));
if (!isNaN(userNumber2)){
    const nexNumber = userNumber2 + 1;
    console.log(userNumber2 , nexNumber);
} else {
    alert("Deve essere un numero")
}

//stampiamo solo i numeri dispari

const numbers = [10, 15, 2, 33, 55, 20, 22];

for (let i = 0; i<numbers.length; i++) {

    const currentNumber = numbers[i]
    if ((currentNumber % 2 != 0 )){
        console.log(currentNumber);
    }
}

//chiediamo tramite prompt prodotto, e controlliamo se lo abbiamo in lista

const product = ["Uranio" , "Latte" , "Playstation 5" , "Missili"]

const userSearch = prompt("Ciao, che prodotto stai cercando?");

let result = "Non trovato"
for (let i = 0; i<product.length; i++){
    const currentProduct = product[i];

    if (currentProduct === userSearch){
        result = "Trovato";
    }
}
console.log(result);



