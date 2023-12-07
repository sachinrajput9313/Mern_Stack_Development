const countValue = document.querySelector("#counter")

function increment() {
    let val = parseInt(countValue.innerText)
    val = val + 1 
    countValue.innerText = val
}

function decrement(){
    let val = parseInt(countValue.innerText)
    val = val - 1 
    countValue.innerText = val
}