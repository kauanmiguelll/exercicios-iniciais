function printInterval(start, end){
    console.log("1. Imprimir Números em um Intervalo")
    
    if(end < start ){
        console.log("erro: primeiro valor tem que ser menor que o segundo")
    }

    for(var i=start; i<=end; i++){
        console.log(i)
    }
}


printInterval(0, -2) 
