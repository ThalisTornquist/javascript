let res = document.getElementById('res')

function data(){
    res.innerHTML = ``
    let regdata = /^[1-3][0-9][/-][01][1-9][/-][\d]{1,4}$/
    
    let txt = document.getElementById('txtcpf')
    let data = String(txt.value)

    if (regdata.test(data)){
        return res.innerHTML = 'iff'
    }
}