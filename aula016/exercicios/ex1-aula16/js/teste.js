valores = [5, 1, 9, 7, 6, 2,]
valores.sort()
let maior = Number(valores.length) -1
let tot = valores.length
console.log(`o ultimo valor é: ${tot}`)
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

console.log(v)