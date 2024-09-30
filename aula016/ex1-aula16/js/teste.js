valores = [5, 1, 9, 7, 6, 2, 12, 122]
valores.sort((a, b) => a - b)
let maior = Number(valores.length) -1
let tot = valores.length
console.log(`o ultimo valor é: ${valores[maior]}`)
let v = 0

for (i = 0; i < valores.length; i++){
    v += valores[i]
}
console.log(valores)
console.log(v)













/*
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
*/