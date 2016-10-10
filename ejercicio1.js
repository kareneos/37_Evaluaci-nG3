/*Inicio
var piedra = piedra
var papel = papel
var tijeras = tijeras
var jugador1
var jugador2

for (i=1; i<=3; i++){
    Pedir al jugador1 que ingrese su jugada.
    leer jugador1
    Pedir al jugador2 que ingrese su jugada.
    leer jugador2

    if (jugador === piedra){
        if (jugador2 === piedra){
            alert("Empate");
        } else if (jugador2 === papel){
            alert("jugador2 gana");
        } else if (jugador2 === tijeras){
            alert ("Jugador1 gana");
        }else{
            alert ("Dato ingresado no válido, elija su jugada en minúsculas");
        }
    }else if (jugador1 === papel){
        if (jugador2 === piedra){
            alert("Jugador 1 gana");
        } else if (jugador2 === papel){
            alert("Empate");
        } else if (jugador2 === tijeras){
            alert ("Jugador2 gana");
        }else{
            alert ("Dato ingresado no válido, elija su jugada en minúsculas");
        }
    }else if (jugador1 === tijeras){
        if (jugador2 === piedra){
            alert("Jugador 2 gana");
        } else if (jugador2 === papel){
            alert("jugador1 gana");
        } else if (jugador2 === tijeras){
            alert ("Empate");
        }else{
            alert ("Dato ingresado no válido, elija su jugada en minúsculas");
        }
    }else{
        alert ("Dato ingresado no válido")
    }
}
Fin*/

var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";

for (var i = 1; i <= 3; i++){
    var jugador1 = prompt("Jugador1 elija: piedra, papel o tijeras","tijeras");
    jugador1.toLowerCase();
    var jugador2 = prompt("Jugador2 elija: piedra, papel o tijeras","tijeras");
    jugador2.toLowerCase();
    
    if (jugador1 === piedra){
        if (jugador2 === piedra){
            alert("Empate");
        } else if (jugador2 === papel){
            alert("jugador2 gana");
        } else if (jugador2 === tijeras){
            alert("Jugador1 gana");
        }else{
            alert ("Dato ingresado no válido, elija su jugada en minúsculas");
        }
    }else if (jugador1 === papel){
        if (jugador2 === piedra){
            alert("Jugador1 gana");
        } else if (jugador2 === papel){
            alert("Empate");
        } else if (jugador2 === tijeras){
            alert ("Jugador2 gana");
        }else{
            alert ("Dato ingresado no válido, elija su jugada en minúsculas");
        }
    }else if (jugador1 === tijeras){
        if (jugador2 === piedra){
            alert("Jugador2 gana");
        } else if (jugador2 === papel){
            alert("jugador1 gana");
        } else if (jugador2 === tijeras){
            alert ("Empate");
        }else{
            alert ("Dato ingresado no válido, elija su jugada en minúsculas");
        }
    }else{
        alert ("Dato ingresado no válido, elija su jugada en minúsculas");
    }
}