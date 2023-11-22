let automobili = [
    {marca: "FIAT", model: 10, engine: "diesel"},
    {marca: 'Audi', model: 13, engine: "diesel"},
    {marca: 'BMW', model: 4, engine: "gpl"},
    {marca: 'Lotus', model: 11, engine: "gpl"},
    {marca: 'FIAT', model: 2, engine: "gas"},
    {marca: 'Nissan', model: 5, engine: "electric"},
    {marca: 'Mazda', model: 7, engine: "electric"},
    {marca: 'FIAT', model: 3, engine: "gas"},
    {marca: 'Ford', model: 6, engine: "hybrid"},
];

let dieselCars = [];
let reaminingCars = [];
let gplCars = [];

automobili.forEach(function(element) {
if (element.engine == "gpl") {
    gplCars.push(element)
}
else if (element.engine == "diesel") {
    dieselCars.push(element)
}
else {reaminingCars.push(element)}
}

)
console.log("Queste sono le macchine Diesel" , dieselCars)
console.log("Queste sono le macchine restanti" , reaminingCars)
console.log("Queste sono le macchine GPL", gplCars)