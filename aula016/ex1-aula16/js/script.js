let num = document.getElementById('txtn')
let valores = []
let sel = document.getElementById('selnum')
let res = document.getElementById('res')  

function numero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
function lista (n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}



function adicionar(){  
    
//||
    if (numero(num.value) && !lista(num.value, valores)){
        
        
        valores.push(Number(num.value))
       
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        sel.appendChild(item)
        sel.style.textAlign = 'center'
        
       
    } else {
        alert('numero invalido!')
    }
    res.innerHTML = ''
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores acima para continuar!')
    } else{
        res.innerHTML = ''
        
        
        let tot = valores.length
         
        
        v = 0
        if(tot % 2 == 0){
            for(soma = 0; soma < tot; soma += 2){ 
                v += valores[soma] + valores[soma + 1] 
            }
        } else{
            tot = tot - 1
            for(soma = 0; soma < tot; soma += 2){ 
                v += valores[soma] + valores[soma + 1] 
            }
            
            v += valores[tot]
        }
        
        var media = 0 

        if (valores.length == 1){
            media = v
        } else{
            media = v / tot
        }
        

        valores.sort((a, b) => {
            return a - b; // Para ordem crescente
        })
        let maior = Number(valores.length) -1

        res.innerHTML += `Ao todo, temos <strong>${valores.length}</strong> números cadastrados <br>`
        res.innerHTML += `O maior valor cadastrado foi <strong>${valores[maior]}</strong><br>`
        res.innerHTML += `O menor valor cadastrado foi <strong>${valores[0]}</strong><br>`
        res.innerHTML += `A soma dos valores é igual a <strong>${v}</strong><br>`
        res.innerHTML += `A média dos valores é igual a <strong>${media}</strong><br>`
    }
    
    
    
}