var data = new Date()
var hora = data.getHours()
var res = document.getElementById('res')

//res.innerHTML = `Agora são ${hora} horas.`

if (hora > 3 && hora <= 12){
    document.body.style.backgroundColor = 'rgb(243, 224, 163)'
} else if(hora <= 18 && hora > 12){
    document.body.style.backgroundColor = 'rgb(151, 93, 70)'
} else if(hora > 18 || hora <= 3){
    document.body.style.backgroundColor = 'rgb(92, 92, 92)'
} else{
    alert('Dados inquerentes, verifique-os e tente novante.')
}