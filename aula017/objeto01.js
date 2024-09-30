let amigo = {
    Nome: 'Thalis',
    sexo: 'M',
    peso: 60,
    engordar(p=0){
        console.log('Engordou!')
        this.peso += p
    }
    
}

amigo.engordar(5)

console.log(`${amigo.Nome} pesa ${amigo.peso}kg.`)