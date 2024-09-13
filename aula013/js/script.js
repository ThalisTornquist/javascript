var data = new Date()
var hora = data.getHours()
var res = document.getElementById('res')
var turno = 'manha'
var img = document.getElementById('hr')
var manha = document.getElementById('f1')
var tarde = document.getElementById('f2')
var noite = document.getElementById('f3')

if (hora > 3 && hora <= 12){
    document.body.style.backgroundColor = 'rgb(211, 185, 132)'
    turno = 'manha'
    res.innerHTML = `Agora são <strong>${hora}</strong> horas da <strong>${turno}.</strong>`
} else if(hora <= 18 && hora > 12){
    document.body.style.backgroundColor = '#c55412'
    turno = 'tarde'
    res.innerHTML = `Agora são <strong>${hora}</strong> horas da <strong>${turno}.</strong>`
    
    manha.style.display = 'none'
    tarde.style.display = 'block'
    noite.style.display = 'none'
} else if(hora > 18 || hora <= 3){
    document.body.style.backgroundColor = '#212c33'
    turno = 'noite'
    res.innerHTML = `Agora são <strong>${hora}</strong> horas da <strong>${turno}.</strong>`

    manha.style.display = 'none'
    tarde.style.display = 'none'
    noite.style.display = 'block'
} else{
    alert('Dados inquerentes, verifique-os e tente novante.')
}