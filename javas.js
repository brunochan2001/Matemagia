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


const form4 = document.getElementById(`form4`)
const resultElement4 = document.getElementById(`result4`)

form4.addEventListener(`submit`,(e) =>{
    e.preventDefault()
    if(e.target.number8.value != `` && e.target.number8.value > 0){
    const number8 = parseInt(e.target.number8.value)
    const result4 =  number8 * number8
    resultElement4.textContent = `El area del Cuadrado es = ${result4}`

    e.target.reset()
    }
})