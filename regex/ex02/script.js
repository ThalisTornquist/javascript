let res = document.getElementById('res') 

function testar(){
    let regex = /^\d{3}[.]\d{3}[.]\d{3}-\d{2}$/
    let regex2 = /^[\wç.-]+@[\wç.-]+([.]com|[.]br|[.]org|[.]gov|[.]rs)+$/
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