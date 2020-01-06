document.getElementById("num2").innerHTML = '<img src="misterio.jpg"/>'
var numero = parseInt(prompt("Adivine un numero entre 1 y 10 \ntiene 5 intentos!!!"))

var aleatorio = Math.floor(Math.random() * 10) + 1

var intentos = 5;
var ganoPerdio = false;

console.log(aleatorio)

while (ganoPerdio === false) {
    if (!isNaN(numero)) {

        if (numero === aleatorio) {

            document.getElementById("num1").style.backgroundColor = "green"
            document.getElementById("num1").innerHTML = "Ganó, acertó el número!!!"
            document.getElementById("num2").innerHTML = '<img src="budah.jpg"/>'
            ganoPerdio = true

        } else if (intentos > 1) {

            --intentos
            numero = parseInt(prompt("No acertó le quedan " + intentos + " intentos!!!"))


        } else {

            document.getElementById("num1").style.backgroundColor = "red"
            document.getElementById("num1").innerHTML = "Perdió!!!"
            document.getElementById("num2").innerHTML = '<img src="viejo.jpg"/>'
            ganoPerdio = true
        }


    } else {

        alert("No Ingresó un número!!!")
        break
    }
}