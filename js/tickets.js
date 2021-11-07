let boton = document.getElementById("calculadora");
boton.onclick = calculadora;

function calculadora() {
      let cantidad = parseInt(document.getElementById("cantidad").value);
      let opciones = document.getElementById("categoria");
      let total = document.getElementById("total");
      let categorias = opciones.options[opciones.selectedIndex].text;
      let valor = 0;
            switch (categorias) {
                  case "Estudiante":
                        valor = cantidad * 200 * 0.2;
                        total.innerHTML = "Total a pagar: $" + valor;
                        break;
                  case "Trainee":
                        valor = cantidad * 200 * 0.5;
                        total.innerHTML = "Total a pagar: $" + valor;
                        break;
                  case "Junior":
                        valor = cantidad * 200 * 0.85;
                        total.innerHTML = "Total a pagar: $" + valor;
                        break;
                  default:
                        break;
            } 
      } 
