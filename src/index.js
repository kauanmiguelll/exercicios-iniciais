function printInterval(start, end){
    console.log("1. Imprimir Números em um Intervalo")
    
    if(end < start ){
        console.log("erro: primeiro valor tem que ser menor que o segundo")
    }

    for(var i=start; i<=end; i++){
        console.log(i)
    }
}


//printInterval(0, -2) 

function sumInterval(start, end){
    console.log("2. Somar Números em um Intervalo")
 
    var i =start
    var totalSum = 0  

    while(i<=end){
        
        totalSum= totalSum + i
        i++
    }
    console.log(totalSum)
        
} 
//sumInterval(2, -10)


function multiInterval(start, end){
    console.log("2.1 multipicar Números em um Intervalo")
 
    var i =start
    var totalMult = 1  

    while(i<=end){
        
        totalMult= totalMult * i
        i++
    }
    console.log(totalMult)
        
} 
//multiInterval(2, 10)

function checkParity(checkedNumber){
    console.log("3.Verificar se um Número é Par ou Ímpar")
    
    var restDivision = checkedNumber % 2

    
    if(restDivision === 0){
        console.log(`O numero ${checkedNumber} é Par`)
    }
    else{
        console.log(`O numero ${checkedNumber} é Impar` )
    }
}
// checkParity(7)

function invertString(str){
    //console.log("str = " ,str)
    var tamanhoString = str.length
    //console.log("tamanhoString = ", tamanhoString)
    var indiceUltimoElemento = tamanhoString - 1
    //console.log("indiceUltimoElemento = ", indiceUltimoElemento)

    var stringInvertida = ""

    for(var i = indiceUltimoElemento; i>=0; i-- ){
        stringInvertida = stringInvertida + str[i]
       
    }
    
    return stringInvertida
   
}
var s1 = invertString("hello")
//console.log(s1)



function encontrarMaior(arr) { //[10, 2, 9, 1]
    var indice = 0
    var maior = arr[indice]; // 10
    for (var i = 1; i < arr.length; i++){ 
        if( arr[i] > maior){
            maior  = arr[i]
        }
        
    }
    return maior;
}

//console.log('AAAA = ', encontrarMaior([10, 2, 9, 1]));

function encontrarMenor(arr) { //[10, 2, 9, 1]
    var indice = 0
    var menor = arr[indice]; // 10
    for (var i = 1; i < arr.length; i++){ 
        if( arr[i] < menor){
            menor  = arr[i]
        }
        
    }
    return menor;
}

console.log('AAAA = ', encontrarMenor([10, 2, 9, 1]));


// function contarVogais(str) {
//     var contador = 0
//     for (var letra of str){ 
//         if ("aeiouAEIOU".includes(letra)) contador++;
//     }
//     return contador;
// }

// console.log(contarVogais("javascript"));

// function verificarPalindromo(palavra) {
//     return palavra === palavra.split("").reverse().join("");
// }

// console.log(verificarPalindromo("arara")); 
// console.log(verificarPalindromo("teste")); 



// function fibonacci(n) {
//     var seq [0,1];
//     for (var i=2; i < n; i++) seq.push(seq[i - 1] + seq[i - 2]);
//     return seq.slice(0, n);
// }

// console.log(fibonacci(5));


// function verificarPrimo(n) {
//     if (n < 2) return false;
//     for (var i = 2; i < n; i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

// console.log(verificarPrimo(11)); 
// console.log(verificarPrimo(10)); 
