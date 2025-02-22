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
multiInterval(2, 10)