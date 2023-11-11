const cuenta = document.getElementById("cuenta");
const mensajeBienvenida = document.getElementById("bienvenido");
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

  // Oculta el mensaje de bienvenida
  mensajeBienvenida.style.opacity = "0";
});
function on() {
  function agregarDigito(digito) {
    cuenta.innerText += digito;
  }

  for (let index = 0; index <= 9; index++) {
    document.getElementById(`${numeros[index][0]}`).disabled = false;
    document
      .getElementById(`${numeros[index][0]}`)
      .addEventListener("click", () => {
        agregarDigito(numeros[index][1]);
      });
  }
}
