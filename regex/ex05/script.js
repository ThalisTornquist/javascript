let str = `https://www.google.com/search?q=quantas+kcal+tem+uma+banana&rlz=1C1GCEA_enBR1106BR1106&oq=quantas+kcal+tem+uma+banana`
let regex = /\?(\w+)=([\w+]+)&(\w+)=(\w+)&(\w+)=\2/g


let teste = regex.exec(str)

console.log(teste)

let all = {
    q: teste,
    rlz: 
}