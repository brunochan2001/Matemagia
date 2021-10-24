const form2 = document.getElementById(`form2`)
const resultElement2 = document.getElementById(`result2`)

form2.addEventListener(`submit`,(e) =>{
    e.preventDefault()
    if(e.target.number5.value != `` && e.target.number5.value > 0){
    const number5 = parseInt(e.target.number5.value)
    const result2 =  number5 * number5
    resultElement2.textContent = `El area del circulo es = ${result2}π`

    e.target.reset()
    }
})