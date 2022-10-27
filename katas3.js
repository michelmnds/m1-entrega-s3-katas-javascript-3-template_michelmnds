//EX 2
function vowelsCounte(lista){
    let vogais = ["a", "e", "i", "o", "u"];
    let contadores = [];
    
    for (let i = 0; i < lista.length; i++){
        let contador = 0;

        for (let j = 0; j < lista[i].length; j++){
            if (vogais.includes(lista[i][j])){
                contador++
            }
        }
        contadores.push(contador)
    }
    return contadores
}
let retorno1 = vowelsCounte(["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"])
console.log(retorno1)


//EX 3
function stringTripletGroup(lista){
    let retorno = [];
    let tresLetras = "";
    
    for (let i = 0; i < lista.length; i++){
        if (tresLetras.length == 3){
            retorno.push(tresLetras);
            tresLetras = "";
        }
        tresLetras += lista[i]
    }
    return retorno;
}
let retorno2 = stringTripletGroup("Os três mosqueteiros")
console.log(retorno2)


//EX 4
function dominantPet(lista){
    let contadorCat = 0;
    let contadorDog = 0;

    for (let i = 0; i < lista.length; i++){
        if (lista[i] == "DOG" || lista[i] == "Dog" || lista[i] == "dOg" || lista[i] == "doG" || lista[i] == "dog"){
            contadorDog++
        }
        if (lista[i] == "CAT" || lista[i] == "Cat" || lista[i] == "cAt" || lista[i] == "caT" || lista[i] == "cat"){
            contadorCat++
        }
        if (contadorCat > contadorDog){
            return "CAT!"
        }
        else if(contadorDog > contadorCat){
            return "DOG!"
        }
        else if (contadorDog = contadorCat){
            return "DRAW!"
        }
    }
}
let retorno3 = dominantPet(["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT"])
console.log(retorno3)


//EX 5
function divisibleList(lista, numero){
    let divisiveis = [];

    for (let i = 0; i < lista.length; i++){
        if (lista[i] % numero == 0){
            divisiveis.push(lista[i]);
        }
    }
    return divisiveis
}
let retorno4 = divisibleList([14, 25, 32, 50, 35, 30], 5)
console.log(retorno4)


//EX 6
function trustMeOrNot(bool, numero){
    let retornoT = [];
    for (let i = 0; i < numero; i++){
        retornoT.push(bool)
    }
    return retornoT
}
let retorno5 = trustMeOrNot(true, 8)
console.log(retorno5)


//EX 7
function changeLampStatus(lista){
    let retornoC = [];
    for (let i = 0; i < lista.length; i++){
        lista[i] = !lista[i]
        retornoC.push(lista[i])
    }
    return retornoC
} 
let retorno6 = changeLampStatus([false, false, true, false, true, true, true])
console.log(retorno6)


//EX 8 
function gradeAverage(lista){
    let valorInicia = 0;

    let media = lista.reduce((a, b) => a + b, valorInicia) / lista.length;

    return `A média das notas é: ${media.toFixed(2)}`
}
let retorno7 = gradeAverage([6.0, 5.5, 6.7, 8.0, 10, 10, 7.1])
console.log(retorno7)


//EX 9
function canvasDeliveriesPercentage(lista){
    let valorInicia = 0;

    let media = lista.reduce((a, b) => a + b, valorInicia) / lista.length;
    let conversao = media * 10

    return `A média das notas é: ${conversao.toFixed(2)}%`
}
let retorno8 = canvasDeliveriesPercentage([3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7])
console.log(retorno8)

//EX 10
function shouldIGo(lista){
    let retornoS = [];
    
    for (let i = 0; i < lista.length; i++){
        if(lista[i] == "R"){
            lista[i] = "Stop!"
            retornoS.push(lista[i])
        }
        else if(lista[i] == "r"){
            lista[i] = "Stop!"
            retornoS.push(lista[i])
        }
        else if(lista[i] == "Y"){
            lista[i] = "Attention!"
            retornoS.push(lista[i])
        }
        else if(lista[i] == "y"){
            lista[i] = "Attention!"
            retornoS.push(lista[i])
        }
        else if(lista[i] == "G"){
            lista[i] = "Go!"
            retornoS.push(lista[i])
        }
        else if(lista[i] == "g"){
            lista[i] = "Go!"
            retornoS.push(lista[i])
        }
    }
    return retornoS;
}
let retorno9 = shouldIGo(["R", "r", "G", "y", "G", "Y", "g"])
console.log(retorno9)