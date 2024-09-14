function calcular(){
    var idade = document.getElementById('idade')
    var sexo = document.getElementById('sex')
    var res = document.getElementById('res')
    var num = Number(idade.value)
    
    soma = 2024 - num 
    res.style.fontSize = '1.1em'
    res.style.textAlign = 'center'
    res.innerHTML = `Você tem ${soma} anos de idade!`
}