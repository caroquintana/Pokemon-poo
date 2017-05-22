// function Pokemon (nombre, color, poderDeAtaque){
// 	this.nombre = nombre;
// 	this.color = color;
	
// 	this.nivelDeAmistad = 0;
	
// 	this.poderDeAtaque = poderDeAtaque;			
// 	this.vida = 100;

// 	this.mostrarPokemon = function(){
// 		return("Hola, soy: " + this.nombre + " y soy de color: " + this.color);
// 	}

// 	this.aumentarAmistad = function(valor){
// 		this.nivelDeAmistad = this.nivelDeAmistad + valor;
// 	}

// 	this.atacar = function(pokemon){
// 		pokemon.vida = pokemon.vida - this.poderDeAtaque;
// 	}

// }

function Pokemon(nombre,color,poderDeAtaque){
	this.nombre = nombre
	this.color = color

	this.nivelDeAmistad = 0

	this.vida = 100
	this.poderDeAtaque = poderDeAtaque

	this.mostrarPokemon = function(){
		return('Hola, soy: '+ this.nombre + ' y soy de color: ' + this.color)
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad  = this.nivelDeAmistad + valor
		return this.nivelDeAmistad
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
		return pokemon.vida
	}
}

const Pikachu = new Pokemon('Pikachu','amarillo',100)
const Charmander = new Pokemon('Charmander','rojo',20)
const Venusaur = new Pokemon('Venusaur','verde',82)
const Nidoqueen = new Pokemon('Nidoqueen','azul',20)


//Pikachu.atacar(Charmander);

//console.log(Charmander.vida);

function pelea(nombre, color, poderDeAtaque){
 	var pokemon1 = document.getElementById('pokemon1').value; //valor select 1
 	var pokemon2 = document.getElementById('pokemon2').value; //valor select 2
	var casilla_resultado = document.getElementById('resultado'); //donde se mostrará el resultado

	if (pokemon1 == pokemon2) {
		alert("¡Los Pokemones no se pueden atacar a sí mismos!")
	}else{
		var poke1 = new Pokemon(pokemon1, + color + poderDeAtaque);
		var poke2 = new Pokemon(pokemon2, + color + poderDeAtaque);
		
	}
casilla_resultado.innerHTML = "¡" + poke1.nombre + " atacó a " + poke2.nombre + " y " + poke2.nombre + " tiene " + poke2.vida + " de vida restante!";
};
















