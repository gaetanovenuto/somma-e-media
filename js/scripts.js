let sumNum = 0;

for (let i = 0; i < 5; i++) {
    let userNumber = parseInt(prompt('Inserisci un numero'));
    console.log('Il numero inserito dall\'utente è:', userNumber)

    sumNum += userNumber;  
}

let mediaNum = sumNum / 5;

console.log('La somma dei numeri inseriti dall\'utente è:', sumNum);

console.log('La media dei numeri inseriti dall\'utente è:', mediaNum);

