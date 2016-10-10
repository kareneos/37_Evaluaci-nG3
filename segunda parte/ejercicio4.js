/*EJERCICIO 4
Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:
●	Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
●	Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar().
●	Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar().
Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.*/

function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.obtDetalles = obtDetalles;
    return;
}

  var nombre=(prompt("nombre","ana"));
  var edad=(prompt("edad","20"));
  var genero=(prompt("genero","mujer"));

 var estudiante = new Persona(){
    this.curso = curso;
    this.grupo = grupo;
    this.asignar = asignar;
};

var profesor = new Persona(){
    this.asignatura = asignatura;
    this.nivel = nivel;
    this.asignar = asignar;
};
 
  alert([Persona.nombre, persona.edad, persona.genero]);