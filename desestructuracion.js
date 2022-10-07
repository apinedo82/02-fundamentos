
const deadpool = {
    nombre:'Wade',
    apellido:'winston',
    poder:'Regeneracion',
    getnombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
};

// ejemplo desestructuracion
function imprimeHeroe({ nombre, apellido, poder, edad = 0 }){
    //const { nombre, apellido, poder, edad = 0 } = heroe; 
    console.log(nombre, apellido, poder, edad);
}

//imprimeHeroe(deadpool);

const heroes = ['deadpool', 'superman', 'batman'];

//const [h1, h2, h3] = heroes;

const [, , h3] = heroes;

console.log(h3);
