let res = document.querySelector("p#res")
let lista = []

function adicionar(n){
    res.innerHTML += `${n}`
}
function igual(){
    res.innerHTML = eval(res.innerHTML)      
}
function apagarTudo(){
    res.innerHTML = ''
}
function apagar(){
    const text = res.innerHTML
    res.innerHTML = text.slice(0, (text.length - 1))
}