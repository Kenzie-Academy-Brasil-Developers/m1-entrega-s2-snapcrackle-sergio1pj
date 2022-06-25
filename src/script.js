let value = parseInt(prompt("Digite um valor máximo, e.g. 15, usando snapCracklePrime"));
function verificaPrimo(num) {
    let numeroDivisores = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            numeroDivisores++;
        }
    }
    if (numeroDivisores == 2) {
        return true;
    }
    return false;
}
function verificaImpar(num) {
    if (num % 2 != 0) {
        return true;
    }
    return false;
}
function verificaMultiplo5(num){
    if (num % 5 == 0) {
        return true;
    }
    return false;
}
function snapCrackle(maxValue) {
    let arr = [];
    for(let i = 1; i <= maxValue; i++) {
        if (verificaImpar(i) && verificaMultiplo5(i)) {
            arr.push("SnapCrackle");
        } else if (verificaImpar(i)) {
            arr.push("Snap");
        }  else if (verificaMultiplo5(i)) {
            arr.push("Crackle");
        } else{
            arr.push(i);
        }
    }
    return arr.toString();
}
function snapCracklePrime(maxValue) {
    let arr = [];
    for(let i = 1; i <= maxValue; i++) {
        if (verificaPrimo(i) && verificaImpar(i) && verificaMultiplo5(i)) {
            arr.push("SnapCracklePrime");
        } else if (verificaPrimo(i) && verificaImpar(i)) {
            arr.push("SnapPrime");
        } else if (verificaPrimo(i)) {
            arr.push("Prime");
        } else if (verificaImpar(i) && verificaMultiplo5(i)) {
            arr.push("SnapCrakle");
        } else if(verificaImpar(i)) {
            arr.push("Snap");
        } else if (verificaMultiplo5(i)) {
            arr.push("Crackle");
        } else{
            arr.push(i);
        }
    }
    return arr.toString();
}
//console.log(snapCrackle(value));
console.log(snapCracklePrime(value)); //Mesmo caso exemplificado no problema
