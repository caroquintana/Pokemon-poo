function Pokemon(nombre, color, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;
	this.poderDeAtaque = poderDeAtaque;			
	this.nivelDeAmistad = 0;
	this.vida = 100;

	this.mostrarPokemon = function(){
		return("Hola, soy: " + this.nombre + " y soy de color: " + this.color);
	}

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}

}

var Pikachu = new Pokemon("Pikachu", "amarillo", 100);
var Charmander = new Pokemon("Charmander", "rojo", 20);
var Venusaur = new Pokemon("Venusaur", "verde", 82);
var Nidoqueen = new Pokemon("Nidoqueen", "azul", 31);

//Pikachu.atacar(Charmander);

//console.log(Charmander.vida);

function pelea(nombre, color, poderDeAtaque){
 	var pokemon1 = document.getElementById("pokemon1").value; //valor select 1
 	var pokemon2 = document.getElementById("pokemon2").value; //valor select 2
	var casilla_resultado = document.getElementById("resultado"); //donde se mostrará el resultado

	var poke1 = new Pokemon(pokemon1 + color + poderDeAtaque);
	var poke2 = new Pokemon(pokemon2 + color + poderDeAtaque);

casilla_resultado.innerHTML = "¡" + poke1.nombre + " atacó a " + poke2.nombre + " y " + poke2.nombre + " tiene " + poke2.vida + " de vida restante."+ "!";

}


















