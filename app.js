import modificador from "./modificador.js";
import ingredientes from "./ingredientes.js";
import pratos from "./pratos.js";

let pratosOrdenados = modificador.capitalizar(pratos, 'nome');
let pratosCapitalizados = modificador.capitalizar(pratos, 'nome');
let containerPratos = document.getElementById('container-pratos');

for(let prato of pratosCapitalizados){
    let textoHTML = `
        <div class="prato">
            <img src="img/${prato.img}"/>
            <p class="nome-prato">${prato.nome}</p>
        </div>
    `;

    containerPratos.innerHTML += textoHTML;

}





let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome');
let ingredientesCapitalizados = modificador.capitalizar(ingredientes, 'nome');
let containerIngredientes = document.getElementById('container-ingredientes');

for(let ingrediente of ingredientesCapitalizados){
    let textoHTML = `
        <div class="Ingrediente">
            <img src="img/${ingrediente.img}"/>
            <p class="nome-ingrediente">${ingrediente.nome}</p>
        </div>
    `;

    containerIngredientes.innerHTML += textoHTML;

}

