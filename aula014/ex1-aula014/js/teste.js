i = 1
f = 10
p = 1



if(i == f){
    
    alert('[ERRO] Verifique os dados!')

}else{
    
    if(p < 1){
        p = 1
        alert(`Seu passo era invalido e recebeu 1`)
    }

    for(n = i; n <= f; n += p){
        console.log(n)
    }
}
