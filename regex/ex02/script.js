let res = document.getElementById('res') 

function testar(){
    let regex = /^\d{3}[.]\d{3}[.]\d{3}-\d{2}$/g
    let regex2 = /^(\w+)(@[ge]mail[.]com)$/g
    let txt = document.getElementById('txtcpf')
    let cpf = String(txt.value)
   
    
    if(regex.test(cpf)){
        return res.innerHTML = 'CPF válido!'
    }else if(regex2.test(cpf)){
        return res.innerHTML = 'E-mail Válido!'
    } else{
        return res.innerHTML = 'CPF ou E-mail invalidos!'
    }
    
}