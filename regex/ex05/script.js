let str = `https://www.google.com/search?q=quantas+kcal+tem+uma+banana&rlz=1C1GCEA_enBR1106BR1106&oq=quantas+kcal+tem+uma+banana`
let regex = /[?&](\w+)=([\w+]+)/g


let array
let param = {}

while (array = regex.exec(str)){
    param[array[1]] = array[2]
}


console.log(param)