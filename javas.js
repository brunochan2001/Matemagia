const form2 = document.getElementById(`form2`);
const resultElement2 = document.getElementById(`result2`);

form2.addEventListener(`submit`, (e) => {
  e.preventDefault();
  if (e.target.number5.value != `` && e.target.number5.value > 0) {
    const number5 = parseInt(e.target.number5.value);
    const result2 = number5 * number5;
    resultElement2.textContent = `El area del circulo es = ${result2}π`;

    e.target.reset();
  }
});

const form4 = document.getElementById(`form4`);
const resultElement4 = document.getElementById(`result4`);

form4.addEventListener(`submit`, (e) => {
  e.preventDefault();
  if (e.target.number8.value != `` && e.target.number8.value > 0) {
    const number8 = parseInt(e.target.number8.value);
    const result4 = number8 * number8;
    resultElement4.textContent = `El area del Cuadrado es = ${result4}`;

    e.target.reset();
  }
});

const form3 = document.getElementById(`form3`);
const resultElement3 = document.getElementById(`result3`);

form3.addEventListener(`submit`, (e) => {
  e.preventDefault();
  if (e.target.number6.value != `` && e.target.number7.value != ``) {
    const number6 = parseInt(e.target.number6.value);
    const number7 = parseInt(e.target.number7.value);
    const result3 = number6 * number7;
    resultElement3.textContent = `El area del Triangulo es = ${result3} `;

    e.target.reset();
  }
});

const form1 = document.getElementById(`form1`);
const resultElement1 = document.getElementById(`result1`);

form1.addEventListener(`submit`, (e) => {
  e.preventDefault();
  if (e.target.number3.value != `` && e.target.number4.value != ``) {
    const number3 = parseInt(e.target.number3.value);
    const number4 = parseInt(e.target.number4.value);
    const result1 = number3 * number4;
    resultElement1.textContent = `El area del Rectangulo es = ${result1} `;

    e.target.reset();
  }
});
