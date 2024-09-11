var agora = new Date()
var hora = agora.getHours()
if (hora >= 0, hora < 6) {
    console.log(`Boa madrudaga! São ${hora} horas da noite.`)
} else if (hora < 18){
    console.log(`Boa tarde! são ${hora} horas da tarde.`)
} else if(hora < 24){
    console.log(`Boa noite! são ${hora} horas da noite.`)
} else if(hora >= 24){
    console.log(`O dia tem apenas 24 horas, sua hora nao existe!`)
}