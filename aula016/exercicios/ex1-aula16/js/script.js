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
        
       
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        sel.appendChild(item)
        sel.style.textAlign = 'center'
        
       
    } else {
        alert('numero invalido!')
    }
    
}

function finalizar(){
    res.innerHTML = `Ao todo, temos ${n.length} números cadastrados.`
}