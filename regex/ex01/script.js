// VALIDADOR DE CEP

let cep = '93080-000'

function écep(str){
    let regex = /^\d{5}[-]\d{3}$/gi
    return regex.test(str)
}