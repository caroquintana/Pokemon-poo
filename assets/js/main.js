		function Pokemon(nombre, color, poderDeAtaque){
			this.nombre = nombre;
			this.color = color;
			this.nivelDeAmistad = 0;
			this.vida = 100;
			this.poderDeAtaque = poderDeAtaque;

			this.mostrarPokemon = function(){
				return("Hola, soy: " + this.nombre + " y soy de color: " + this.color)
			}

			this.aumentarAmistad = function(valor){
				this.nivelDeAmistad = this.nivelDeAmistad + valor;
			}

			this.atacar = function(pokemon){
				pokemon.vida = pokemon.vida - this.poderDeAtaque;
			}
			mostrar()
			{
				document.write(this.nombre + " atacó a " + this.nombre + " y " + this.nombre + " tiene " + this.vida + " restantes ");
		
			}
		}


			var pikachu = new Pokemon("Pikachu", "amarillo", 100);
			var charmander = new Pokemon("Charmander", "rojo", 20);

			pikachu.atacar(charmander);

			return(charmander.vida);