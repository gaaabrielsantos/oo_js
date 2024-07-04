function Guitar(modelo, genero) {
    this.modelo = modelo;
    this.genero = genero;
}

function Jazz(modelo) {
    Guitar.call(this, modelo, "Jazz");
}

function Blues(modelo) {
    Guitar.call(this, modelo, "Blues")
}

function Country(modelo) {
    Guitar.call(this, modelo, "Country")
}

const banda1 = new Jazz("Gibson ES-335");
const banda2 = new Blues("Fender Stratocaster");
const banda3 = new Country("Fender Telecaster");

console.log(banda1);
console.log(banda2);
console.log(banda3);