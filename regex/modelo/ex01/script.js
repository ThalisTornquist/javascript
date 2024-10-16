let str = 'o pato chato tem sapato de gato!'
let regex =  /\b([pg]|ch)ato\b/g

let array

while(array = regex.exec(str)){
    let msg = `Encontrei o [${array[0]}] na posição (${array.index}). `
    
    msg += `Começarei a procurar apartir da posição [${regex.lastIndex}].
(${array.input})`

    console.log(msg)
}