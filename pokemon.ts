import promptSync from "prompt-sync"
const prompt = promptSync()

function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let pvOne: number = 50;
let pvTwo: number = 50;
let attack: number = 0;
let playerOne: string = ""
let playerTwo: string = ""

function charge(player: string) {
    let attack: number = random(0, 1);
    let critiq :number = random(0, 3);
    if (player == "PlayerOne") {
        if (attack == 0 && critiq == 0) {
            pvTwo -= 15
            return "Charge a réussi. Coup critique!!! Il reste " + pvTwo + " PV à " + playerTwo+ "\n"
        
        }else if (attack == 0 ) {
            pvTwo -= 10 
            return "Charge a réussi. Il reste " + pvTwo + " PV à " + playerTwo+ "\n"
        }
         else {
            return "Charge a échoué. Il reste " + pvTwo + " PV à " + playerTwo+ "\n"
        }
    } else {
        if (attack == 0 && critiq == 0) {
            pvTwo -= 15
            return "Charge a réussi. Coup critique!!! Il reste " + pvOne + " PV à " + playerOne+ "\n"
        
        }
        else if (attack == 0) {
            pvOne -= 10;
            return "Charge a réussi. Il reste " + pvOne + " PV à " + playerOne + "\n"
        } else {
            return "Charge a échoué. Il reste " + pvOne + " PV à " + playerOne + "\n"
        }
    }
}

function soin(player: string) {
    let attack: number = random(0, 1)
    let critiq :number = random(0,3)
    if (player == "PlayerOne") {
        if (attack == 0 && critiq == 0) {
            pvTwo += 30;
            return "Soin a réussi. Coup critique!!! Il reste " + pvOne + " PV à " + playerOne+ "\n"
        }
        else if (attack == 0) {
            pvOne += 20;
            return "Soin a réussi. Il reste " + pvOne + " PV à " + playerOne + "\n"
        } else {
            return "Soin a échoué. Il reste " + pvOne + " PV à " + playerOne + "\n"
        }
    } else {
        if (attack == 0 && critiq == 0) {
            pvTwo += 30;
            return "Soin a réussi. Coup critique!!! Il reste " + pvTwo + " PV à " + playerTwo+ "\n"
        }
        else if (attack == 0) {
            pvTwo += 20;
            return "Soin a réussi. Il reste " + pvTwo + " PV à " + playerTwo+ "\n"
        } else {
            return "Soin a échoué. Il reste " + pvTwo + " PV à " + playerTwo+ "\n"
        }
    }
}


function ecume(player: string) {
    let attack: number = random(0, 1);
    let critiq :number = random(0, 3);
    if (player == "PlayerOne") {
        if (attack == 0 && critiq == 0) {
            pvTwo -= 30
            return "Ecume a réussi. Coup critique!!! Il reste " + pvTwo + " PV à " + playerTwo+ "\n"
        
        }
        else if (attack == 0) {
            pvTwo -= 20;
            return "Ecume a réussi. Il reste " + pvTwo + " PV à " + playerTwo+ "\n"
        } else {
            return "Ecume  a échoué. Il reste " + pvTwo + " PV à " + playerTwo+ "\n"
        }
    } else {
        if (attack == 0 && critiq == 0) {
            pvTwo -= 30
            return "Ecume a réussi. Coup critique!!! Il reste " + pvOne + " PV à " + playerOne+ "\n"
        
        }
        else if (attack == 0) {
            pvOne -= 20;
            return "Ecume  a réussi. Il reste " + pvOne + " PV à " + playerOne + "\n"
        } else {
            return "Ecume  a échoué. Il reste " + pvOne + " PV à " + playerOne + "\n"
        }
    }
}


function finishHim(player: string) {
    let attack: number = random(0, 4);
    let critiq :number = random(0, 5);
    if (player == "PlayerOne") {
        if (attack == 0 && critiq == 0) {
            pvTwo -= 75
            return "Finish him a réussi. Coup critique!!! Il reste " + pvTwo + " PV à " + playerTwo+ "\n"
        
        }
        else if (attack == 0) {
            pvTwo -= 50;
            return "Finish Him a réussi. Il reste " + pvTwo + " PV à " + playerTwo+ "\n"
        } else {
            return "Finish Him a échoué. Il reste " + pvTwo + " PV à " + playerTwo + "\n"
        }
    } else {
        if (attack == 0 && critiq == 0) {
            pvTwo -= 75
            return "Finish him a réussi. Coup critique!!! Il reste " + pvOne + " PV à " + playerOne+ "\n"
        
        }
        else if (attack == 0) {
            pvOne -= 50;
            return "Finish Him a réussi. Il reste " + pvOne + " PV à" + playerOne + "\n"
        } else {
            return "Finish Him a échoué. Il reste " + pvOne + " PV à " + playerOne + "\n"
        }
    }
}





playerOne = prompt("Entrer nom joueur 1 : ");
playerTwo = prompt("Entrer nom du joueur 2 (0 si pas de joueur 2) : ");
if (playerTwo == "0"){
    playerTwo = "L'ordi"
}
while (pvOne > 0 && pvTwo > 0) {
    
    console.log("\n PV" , playerOne , pvOne ,"PV" , playerTwo , pvTwo ,"\n");

    console.log("Tour de " , playerOne , " :");
    attack = parseInt(prompt("Sélectionner 0 pour charge, 1 pour soin , 2 pour écume ,3 pour finish him! : 0"));
    if (attack == 0) {
        console.log(charge("PlayerOne"));
    }
    if (attack == 1) {
        console.log(soin("PlayerOne"));
    }
    if (attack == 2) {
        console.log(ecume("PlayerOne"));
    } if (attack == 3) {
        console.log(finishHim("PlayerOne"));
    }
    console.log("------------------------------------------ \n");
    

    if (pvTwo > 0) {
        if (playerTwo == "L'ordi") {
            console.log("Tour de " , playerTwo , " :");
            attack = random(0, 3);
            if (attack == 0) {
                console.log(charge("PlayerTwo"));
            }
            if (attack == 1) {
                console.log(soin("PlayerTwo"));
            }
            if (attack == 2) {
                console.log(ecume("PlayerTwo"));
            } if (attack == 3) {
                console.log(finishHim("PlayerTwo"));
            }
        }
        else {
            console.log("Tour de " , playerTwo , " :");
            attack = parseInt(prompt("Sélectionner 0 pour charge, 1 pour soin , 2 pour écume ,3 pour finish him! : "));
            if (attack == 0) {
                console.log(charge("PlayerTwo"));
            }
            if (attack == 1) {
                console.log(soin("PlayerTwo"));
            }
            if (attack == 2) {
                console.log(ecume("PlayerTwo"));
            } if (attack == 3) {
                console.log(finishHim("PlayerTwo"));
            }
        }
        console.log("------------------------------------------ \n");
    } else {
        break
    }
    
}
if (pvOne > pvTwo){
    console.log(playerOne , " a gagné contre " , playerTwo);
    
}
else {
    console.log(playerTwo , " a gagné contre " , playerOne);
}


