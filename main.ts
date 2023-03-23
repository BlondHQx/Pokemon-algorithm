import promptSync from "prompt-sync"
const prompt = promptSync()

function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("");

let playerOne:number = 50;
let playerTwo:number = 50;
let valeur:number = 0;
let crit :number =random(0,0);

function charge(player:string) {
    let atk:number = random(0,1);
    console.log('the one'+ " "+playerTwo);
    if (playerOne) {
        
    }
   if (player = 'playerOne')
   {
    if (atk == 0) {
        playerTwo -= 10;        
        if (crit == 0) {
            playerTwo -= 5
        }
        return "L'attaque a réussi " + playerTwo
    }else {
        return "L'attaque a échoué " + playerTwo
    }
   }
   if (player = 'playerTwo')
   {
    if (atk == 0) {
        playerOne -= 10;
        return "L'attaque a réussi " + playerOne
    } else {
        return "L'attaque a échoué " + playerOne
    }
   }    
}
console.log(charge('playerTwo'));

console.log("Player One Life is: "+playerOne +"and player Two Life is: "+playerTwo); 

// function ecume(player:string) {
//     let atk:number = random(0,2);
//     console.log('the one'+ " "+playerTwo);
//    if (player = 'playerOne')
//    {
//     if (atk == 0) {
//         playerTwo -= 20;
//         return "L'attaque a réussi " + playerTwo
//     } else {
//         return "L'attaque a échoué " + playerTwo
//     }
//    }
//    if (player = 'playerTwo')
//    {
//     if (atk == 0) {
//         playerOne -= 20;
//         return "L'attaque a réussi " + playerOne
//     } else {
//         return "L'attaque a échoué " + playerOne
//     }
//    }
// }
// console.log(charge('playerTwo'));

// console.log("Player One Life is: "+playerOne +"and player Two Life is: "+playerTwo);