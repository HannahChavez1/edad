function verificarEdad() {
    // Obtener el valor del campo input usando su ID
    let edad = document.getElementById("edad").value;

    //Comprobar si el campo está vacío
    if (edad === "") {
        alert("Por favor, ingresa tu edad");
    } 
    //Comprobar que no sea un número negativo
    else if (edad < 0) {
        alert("Ingresa un numero mayor o igual a cero");
    } 
    //Comprobar si es mayor de edad (18 años o más)
    else if (edad >= 18) {
        alert("Eres mayor de edad");
    } 
    //Si no es ninguna de las anteriores, es menor de 18
    else {
        alert("Eres menor de edad");
    }
}