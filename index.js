/*
let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let edad = parseInt(prompt("Ingrese su edad: "));

while (nombre != "ESC"){
  if (edad < 18) {
    alert("Es menor de edad, no puede continuar :(")
    break;
  }else {
    alert("Su nombre es: " + nombre);
    alert("Su apellido es: " + apellido);
    alert("Su edad es: " + edad);
    alert("Bienvenido al team +18")
  }
}
*/



/*
function nombre(){
  let nombre = prompt("Ingrese su nombre: ");
  while (nombre != "") {

    let nombre = prompt("Ingrese su nombre: ");
        promediar();
  }
}
*/
let anio;
let promedio;
let suma;

function promediar(){
  let anio = parseInt(prompt("Ingrese cuantos años tiene (Para salir ingrese 0)"));
  let promedio = [];
  let suma = 0;

  while(anio != 0) {
    promedio.push(anio);
    anio = parseInt(prompt("Ingrese cuantos años tiene (Para salir ingrese 0)"));
    }
  for (var i = 0; i < promedio.length; i++) {
    suma = suma + promedio[i];
  }
  promedio = suma / promedio.length;
  alert("El promedio de años ingresados es: " + promedio);
}

promediar();
