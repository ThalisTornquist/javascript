function calcular(){
    var data =new Date()
    var ano = data.getFullYear()
    
    var idade = document.getElementById('idade')
    var sexo = document.getElementById('sex')
    var res = document.getElementById('res')
    var num = Number(idade.value)
    var fsex = document.getElementsByName('radsex')

    var foto = document.getElementById('foto')
    var img = document.getElementById('img')
    if (num.valueOf() == 0 || num > Number(ano.valueOf())){
        alert('Verifique seus dados e tente novamente!')
    }else{
        soma = Number(ano.valueOf()) - num 
        res.style.fontSize = '1.1em'
        res.style.textAlign = 'center'


        var genero = ''
        var lig = ''

        img.style.display = 'block'
        if(fsex[0].checked){
            genero = 'Homem'
            lig = 'um'

            if(soma >= 0 && soma <= 13){
                img.style.display = 'block'
                foto.setAttribute('src', 'imagens/criança.jpg')
            }else if(soma <= 25){
                img.style.display = 'block'
                foto.setAttribute('src', 'imagens/jovem.jpg')
            }else if(soma < 60 ){
                img.style.display = 'block'
                foto.setAttribute('src', 'imagens/adulto.jpg')
            }else if(soma > 59){
                img.style.display = 'block'
                foto.setAttribute('src', 'imagens/idoso.jpg')
            }
        } else{
            genero = 'Mulher'
            lig = 'uma'

            if(soma >= 0 && soma <= 13){
                foto.setAttribute('src', 'imagens/criançafem.jpg')
            }else if(soma <= 25){
                foto.setAttribute('src', 'imagens/jovemfem.jpg')
            }else if(soma < 60 ){
                foto.setAttribute('src', 'imagens/adulta.jpg')
            }else if(soma > 59){
                foto.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        
        res.innerHTML = `Detectamos ${lig} ${genero} com <strong>${soma}</strong> anos!`

    }

    

}