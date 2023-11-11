// let productos = [
//   { Marca: "Nike", Tipo: "Zapatillas", Stock: 120, Precio: 200 },
//   { Marca: "Nike", Tipo: "Zapatillas", Stock: 120, Precio: 200 },
//   { Marca: "Puma", Tipo: "Zapatillas", Stock: 120, Precio: 2100 },
//   { Marca: "Puma", Tipo: "Buzo", Stock: 20, Precio: 2100 },
//   { Marca: "Adidas", Tipo: "Buzo", Stock: 20, Precio: 200 },
//   { Marca: "Adidas", Tipo: "Camisa", Stock: 160, Precio: 400 },
//   { Marca: "Jordan", Tipo: "Camisa", Stock: 160, Precio: 400 },
//   { Marca: "Jordan", Tipo: "Buzo", Stock: 160, Precio: 400 },
// ];

// function productoElegido(productos, iva) {
//   for (const producto of productos) {
//     iva(producto.Precio);
//   }
// }
// function iva(precioProducto) {
//   let precioIva = precioProducto * 0.21;
//   let precioFinal = precioIva + precioProducto;
//   console.log(`El precio con IVA incluido es: ${precioFinal}`);
// }

// productoElegido(productos, iva);
let num1 = 0;
let num2 = 0;
let operacionActual = "";
document.getElementById("punto").addEventListener("click", () => {
  if (!cuenta.innerText.includes(".")) {
    cuenta.innerText += ".";
  }
});
document.getElementById("borrar").addEventListener("click", () => {
  cuenta.innerText = "";
});
document.getElementById("uno").addEventListener("click", () => {
  cuenta.innerText += 1;
});
document.getElementById("dos").addEventListener("click", () => {
  cuenta.innerText += 2;
});
document.getElementById("tres").addEventListener("click", () => {
  cuenta.innerText += 3;
});
document.getElementById("cuatro").addEventListener("click", () => {
  cuenta.innerText += 4;
});
document.getElementById("cinco").addEventListener("click", () => {
  cuenta.innerText += 5;
});
document.getElementById("seis").addEventListener("click", () => {
  cuenta.innerText += 6;
});
document.getElementById("siete").addEventListener("click", () => {
  cuenta.innerText += 7;
});
document.getElementById("ocho").addEventListener("click", () => {
  cuenta.innerText += 8;
});
document.getElementById("nueve").addEventListener("click", () => {
  cuenta.innerText += 9;
});
document.getElementById("cero").addEventListener("click", () => {
  cuenta.innerText += 0;
});
const btnCalculadora = document.getElementById("calculadora");
const cuenta = document.getElementById("cuenta");
document.getElementById("sumar").addEventListener("click", () => {
  num1 = parseFloat(cuenta.innerText);
  operacionActual = "sumar";
  cuenta.innerText = "";
});
document.getElementById("restar").addEventListener("click", () => {
  num1 = parseFloat(cuenta.innerText);
  operacionActual = "restar";
  cuenta.innerText = "";
});
document.getElementById("dividir").addEventListener("click", () => {
  num1 = parseFloat(cuenta.innerText);
  operacionActual = "dividir";
  cuenta.innerText = "";
});
document.getElementById("multiplicar").addEventListener("click", () => {
  num1 = parseFloat(cuenta.innerText);
  operacionActual = "multiplicar";
  cuenta.innerText = "";
});

document.getElementById("igual").addEventListener("click", () => {
  num2 = parseFloat(cuenta.innerText);
  if (isNaN(cuenta.innerText)) {
    alert("No ingresaste ningun numero");
    cuenta.innerText = "";
  } else {
    if (operacionActual == "sumar") {
      operacionActual = num1 + num2;
      cuenta.innerText = operacionActual;
    } else if (operacionActual == "restar") {
      operacionActual = num1 - num2;
      cuenta.innerText = operacionActual;
    } else if (operacionActual == "dividir") {
      if (num2 == 0) {
        cuenta.innerText = "Error";
        setTimeout(() => {
          alert("No se puede dividir por 0");
        }, 300);
      } else {
        operacionActual = num1 / num2;
        cuenta.innerText = operacionActual;
      }
    } else {
      operacionActual = num1 * num2;
      cuenta.innerText = operacionActual;
    }

    return operacionActual;
  }
});
// btnCalculadora.addEventListener("click", () => {
//   cuenta = prompt("Que operacion queres realizar?");
// });

// ... (repita para otros números)

// document.getElementById("dividir").addEventListener("click", () => {
//   num1 = parseFloat(cuenta.innerText);
//   operacionActual = "dividir";
//   cuenta.innerText = "";
// });

// document.getElementById("sumar").addEventListener("click", () => {
//   num1 = parseFloat(cuenta.innerText);
//   operacionActual = "sumar";
//   cuenta.innerText = "";
// });

// document.getElementById("restar").addEventListener("click", () => {
//   num1 = parseFloat(cuenta.innerText);
//   operacionActual = "restar";
//   cuenta.innerText = "";
// });

// document.getElementById("igual").addEventListener("click", () => {
//   num2 = parseFloat(cuenta.innerText);
//   if (operacionActual === "multiplicar") {
//     cuenta.innerText = num1 * num2;
//   } else if (operacionActual === "dividir") {
//     if (num2 !== 0) {
//       cuenta.innerText = num1 / num2;
//     } else {
//       alert("No se puede dividir por cero");
//     }
//   } else if (operacionActual === "sumar") {
//     cuenta.innerText = num1 + num2;
//   } else if (operacionActual === "restar") {
//     cuenta.innerText = num1 - num2;
//   }
// });
\\\





document.addEventListener("DOMContentLoaded", function () {
  // Tu código aquí

  let numAcumulado = ""; // Acumula los números ingresados
  let operacionActual = "";
  const cuenta = document.getElementById("cuenta");

  document.getElementById("punto").addEventListener("click", () => {
    if (!cuenta.innerText.includes(".")) {
      cuenta.innerText += ".";
    }
  });

  document.getElementById("borrar").addEventListener("click", () => {
    cuenta.innerText = "";
    numAcumulado = "";
  });

  function agregarDigito(digito) {
    cuenta.innerText += digito;
  }

  function realizarOperacion(operacion) {
    if (numAcumulado !== "") {
      manejarOperacion(); // Realiza la operación acumulada antes de la nueva operación
    }
    numAcumulado = cuenta.innerText;
    operacionActual = operacion;
    cuenta.innerText = "";
  }

  function manejarOperacion() {
    const numActual = parseFloat(cuenta.innerText);

    switch (operacionActual) {
      case "sumar":
        cuenta.innerText = parseFloat(numAcumulado) + numActual;
        break;
      case "restar":
        cuenta.innerText = parseFloat(numAcumulado) - numActual;
        break;
      case "multiplicar":
        cuenta.innerText = parseFloat(numAcumulado) * numActual;
        break;
      case "dividir":
        if (numActual !== 0) {
          cuenta.innerText = parseFloat(numAcumulado) / numActual;
        } else {
          cuenta.innerText = "Error";
          setTimeout(() => {
            alert("No se puede dividir por 0");
          }, 300);
        }
        break;
      default:
        break;
    }

    numAcumulado = "";
    operacionActual = "";
  }

  // Asignar eventos a los dígitos
  for (let i = 0; i <= 9; i++) {
    document.getElementById(`${i}`).addEventListener("click", () => {
      agregarDigito(i);
    });
  }

  // Asignar eventos a las operaciones
  document.getElementById("sumar").addEventListener("click", () => {
    realizarOperacion("sumar");
  });

  document.getElementById("restar").addEventListener("click", () => {
    realizarOperacion("restar");
  });

  document.getElementById("dividir").addEventListener("click", () => {
    realizarOperacion("dividir");
  });

  document.getElementById("multiplicar").addEventListener("click", () => {
    realizarOperacion("multiplicar");
  });

  document.getElementById("igual").addEventListener("click", () => {
    manejarOperacion();
  });
});





function on() {
  for (let index = 0; index <= 9; index++) {
    const boton = document.getElementById(`${numeros[index][0]}`);
    if (!boton.hasEventListener) {
      boton.addEventListener("click", () => {
        agregarDigito(numeros[index][1]);
      });
      boton.hasEventListener = true;  // Marcar el botón como que tiene un evento asociado
    }
    boton.disabled = false;
  }
}
