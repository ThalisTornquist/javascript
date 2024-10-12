let regex = /^\d{3}[.]\d{3}[.]\d{3}-\d{2}$/g
let regex2 = /^(\w+)(@gmail[.]com)$/g
let cpf = '222.222.222-22'


if(regex.test(cpf)){
    console.log('verdade')
} else{
    console.log('mentira')
}
/*
    else if(regex2.test(cpf)){
    return res.innerHTML = 'E-mail Válido!'
} else{
    return res.innerHTML = 'CPF ou E-mail invalidos!'
}
*/