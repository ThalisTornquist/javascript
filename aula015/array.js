let num = [5 , 2 , 7]
num[3] = 15
num.push(99) // ADICIONA NO FINAL DAS CASAS! caso colocado como abaixo, vai na ordem.
num.push(1)


                                                // num.length PARA SABER O COMPRIMENTO DA ARRAY! 
                                                // num.sort() PARA COLOCAR EM ORDEM CRESCENTE OS ELEMNTOS.
                                                


/* JEITO BURRO
console.log(`posição 0 = ${num[0]}`)
console.log(`posição 1 = ${num[1]}`)
console.log(`posição 2 = ${num[2]}`)
console.log(`posição 3 = ${num[3]}`)
console.log(`posição 4 = ${num[4]}`)
console.log(`posição 5 = ${num[5]}`)
*/

num.sort()
for(p = 0; p < num.length; p++){
    console.log(`posição ${p} = ${num[p]}`)
}

console.log(num)
console.log(`Esse array tem ${num.length} posições.`)