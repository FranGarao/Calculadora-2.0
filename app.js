const cuenta = document.getElementById("cuenta");
const mensajeBienvenida = document.getElementById("bienvenido");
let num1 = 0;
let num2 = 0;
let operacion = "";
let resultados = 0;
document.getElementById("sumar").addEventListener("click", () => {
  num1 = parseFloat(cuenta.innerText);
  suma();
  cuenta.innerText = "";
});
document.getElementById("igual").addEventListener("click", () => {
  num2 = parseFloat(cuenta.innerText);
  resultado(num1, num2);
  cuenta.innerText = resultado;
});
const numeros = [
  ["cero", 0],
  ["uno", 1],
  ["dos", 2],
  ["tres", 3],
  ["cuatro", 4],
  ["cinco", 5],
  ["seis", 6],
  ["siete", 7],
  ["ocho", 8],
  ["nueve", 9],
];
function resultado(a, b) {
  let resultado = 0;
  if (operacion == "sumar") {
    resultado = a + b;
  }
  return resultado;
}
function suma() {
  operacion = "sumar";
}
document.getElementById("on").addEventListener("click", () => {
  // Oculta el elemento inicialmente
  mensajeBienvenida.style.opacity = "0";
  mensajeBienvenida.style.opacity = "0.5";
  mensajeBienvenida.style.opacity = "0.8";
  // Cambia el texto después de que se haya desvanecido
  setTimeout(() => {
    mensajeBienvenida.innerText = "BIENVENIDO";
    // Muestra el elemento con un efecto de desvanecimiento suave
    mensajeBienvenida.style.opacity = "1";
    mensajeBienvenida.style.fontSize = "60px";
  }, 200);

  // Oculta el elemento después de un tiempo específico, limpia la cuenta después de otro tiempo específico y "prende" la calculadora.
  setTimeout(() => {
    mensajeBienvenida.style.opacity = "0";
    cuenta.innerText = "";
    on();
  }, 1500);
});

document.getElementById("off").addEventListener("click", () => {
  cuenta.innerText = "";

  // Deshabilita los botones numéricos
  for (let index = 0; index <= 9; index++) {
    document.getElementById(`${numeros[index][0]}`).disabled = true;
  }
});

function agregarDigito(digito) {
  cuenta.innerText += digito;
}

function on() {
  for (let index = 0; index <= 9; index++) {
    const boton = document.getElementById(`${numeros[index][0]}`);
    if (!boton.hasEventListener) {
      boton.addEventListener("click", () => {
        agregarDigito(numeros[index][1]);
      });
      boton.hasEventListener = true;
    }
    boton.disabled = false;
  }
}
