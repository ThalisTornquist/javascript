function tabuada(){
    let n = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    let num = Number(n.value)

    tab.innerHTML = ''
    if(n.value == ''){
        alert('Por favor digite um número!')
    }else{
        for(x = 1; x <= 10; x++){
        tab.style.display = 'block'
        let item = document.createElement('option')
        item.text = `${num} x ${x} = ${num*x}`
        item.value = `tab${x}`
        tab.appendChild(item)
    }
    }
    

}