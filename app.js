// Circulo
const form1 = document.getElementById(`form1`)
const resultElement1 = document.getElementById(`result1`)
const constresult = document.getElementsByClassName(`visible`)
const visiblecir = document.getElementById(`visible-cir`)
const visibletri = document.getElementById(`visible-tri`)
const visiblerec = document.getElementById(`visible-rec`)
const visiblecua = document.getElementById(`visible-cua`)

form1.addEventListener(`submit`, (e) => {
  e.preventDefault()
  visiblecir.classList.add(`visible`)
  if (e.target.number1.value != `` && e.target.number1.value > 0) {
    const number1 = parseInt(e.target.number1.value)
    const result1 = number1 * number1
    resultElement1.textContent = `El area del circulo es = ${result1} π`

    e.target.reset()
  }
})

const form2 = document.getElementById(`form2`)
const resultElemnt2 = document.getElementById(`result2`)

form2.addEventListener(`submit`, (e) => {
  e.preventDefault()
  visiblecua.classList.add(`visible`)
  if (e.target.number2.value != '' && e.target.number2.value > 0) {
    const number2 = parseInt(e.target.number2.value)
    const result2 = number2 * number2
    resultElemnt2.textContent = `El area del cuadrado es = ${result2} u²`
  }
})

const form3 = document.getElementById(`form3`)
const resultElement3 = document.getElementById(`result3`)

form3.addEventListener(`submit`, (e) => {
  e.preventDefault()
  visibletri.classList.add(`visible`)
  if (e.target.number6.value != `` && e.target.number7.value != ``) {
    const number6 = parseInt(e.target.number6.value)
    const number7 = parseInt(e.target.number7.value)
    const result3 = (number6 * number7) / 2
    resultElement3.textContent = `El area del Triangulo es = ${result3} u² `

    e.target.reset()
  }
})

const form4 = document.getElementById(`form4`)
const resultElement4 = document.getElementById(`result4`)

form4.addEventListener(`submit`, (e) => {
  e.preventDefault()
  visiblerec.classList.add(`visible`)
  if (e.target.number3.value != `` && e.target.number4.value != ``) {
    const number3 = parseInt(e.target.number3.value)
    const number4 = parseInt(e.target.number4.value)
    const result3 = number3 * number4
    resultElement4.textContent = `El area del Rectangulo es = ${result3} u²`

    e.target.reset()
  }
})
