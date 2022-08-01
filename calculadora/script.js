let res = document.querySelector("p#res")
let lista = []

function adicionar(n){
    res.innerHTML += `${n}`
}
function igual(){
    res.innerHTML = eval(res.innerHTML)      
}
function apagar(){
    res.innerHTML = ''
}