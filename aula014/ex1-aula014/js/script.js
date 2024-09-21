function contar(){
    let i = document.getElementById('inicio')
    let f = document.getElementById('fim')
    let p = document.getElementById('passo') 
    let res = document.getElementById('res')

    if(inicio.value == ''|| fim.value == ''){
        
        alert('[ERRO] Verifique os dados!')

    }else{
        let inicio = Number(i.value)
        let fim = Number(f.value)
        let passo = Number(p.value)

        res.innerHTML = `Contando: `
        if(passo < 1){
            passo = 1
            alert(`Seu passo era invalido e recebeu 1`)
        }

        if(inicio < fim){
            for(n = inicio; n <= fim; n += passo){
            res.innerHTML += ` ${n} \u{1F449}`
        }
        }else{
            for(n = inicio; n >= fim; n -= passo){
                res.innerHTML += ` ${n} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
           
    }

}