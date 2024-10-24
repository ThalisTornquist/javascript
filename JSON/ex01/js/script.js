const obj= [{
    nome:"Thalis",
    idade: 18,
    profissão:"estudante",
    detalhes:{
        "trabalha": true,
        "local": "casa",
        "profissão":"agricultor"
    }
}
]


let json_obj = JSON.stringify(obj) // TRANSFORMA JS EM STRING COM FORMATAÇÃO DE JSON.
console.log(json_obj)

/* TRANSFORMOU O OBJ EM JSON
[{"nome":"Thalis","idade":18,"profissão":"estudante","detalhes":{"trabalha":true,"local":"casa","profissão":"agricultor"}}]
*/ 



let obj_json = JSON.parse(json_obj) // TRANSFORMA JSON EM JS.
console.log(obj_json)

/* TRANSFORMO O JSON EM OBJ
  {
    nome: 'Thalis',
    idade: 18,
    'profissão': 'estudante',
    detalhes: { trabalha: true, local: 'casa', 'profissão': 'agricultor'}
  }
]
*/

obj_json.map((pessoa) =>
    console.log(pessoa.detalhes)
)