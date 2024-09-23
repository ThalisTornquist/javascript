let v = [1,4,7,10,13,15]


/* Jeito tradicional
for(p = 0; p < v.length; p++){
    if(p < 1){
        console.log(`Esse Vetor tem ${v.length} Posições, e são:`)
    } 
    console.log(`Posição ${p}: valor == ${v[p]}`)
    
    if(p == 5){
        console.log('Essas são as posições desse Array!')
    }
}
*/


// PARA CATAR NUMEROS DENTRO DE UMA ARRAY!
num = 7
pos = v.indexOf(num)
console.log(`o numero ${num} esta na posicao ${pos}`)




// USANDO O 'FOR IN'
for(p in v){
    if(p < 1){
        console.log(`Esse Vetor tem ${v.length} Posições, e são:`)
    } 


    // DESSE MODO É MAIS RÁPIDO E FACIL! 
    console.log(`Posição ${p}: valor == ${v[p]}`)
    //..................................


    if(p == 5){
        console.log('Essas são as posições desse Array!')
    }
}