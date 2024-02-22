//  Ejercicio 1

const h1 = (document.getElementById("titulo"));

//Ejercicio 2
const tituloPrincipal = "Frutas";
titulo.innerText = tituloPrincipal;

//Ejercicio 3
const headerFooter = document.querySelectorAll("header, footer");
headerFooter.forEach(element => {
    element.style.backgroundColor = "orange";

});
//Ejercicio 4
const parrafoFooter = document.querySelector("footer p");
parrafoFooter.innerText += " Noemi Maldonado - Cohort ";

//Ejercicio 5
const main = document.querySelector("main");
let contDiv = document.createElement ("div");
main.appendChild (contDiv);
contDiv.id="contenedor";



//Ejercicio 6
    function crearCard(frutas) {
        return `
        <div class= "flex flex-row gap-5 p-4 w-1/2 rounded-lg border border-yellow-900 bg-yellow-500 text-center">
        <article class= "flex flex-col gap-2">
                <img class= "w-full h-60" src="${frutas.foto}" alt="${frutas.nombre}">
                <h5 class="text-xl">${frutas.nombre}</h5>
                <p>${frutas.descripcion}</p>
        </article>
        </div>
        `;
    }

//Ejercicio 7 y 8
    function mostrarCards(frutas) {
        let cardsHTML = "";
        frutas.forEach(fruta => {
            cardsHTML += crearCard(fruta);
        });
        contDiv.innerHTML = cardsHTML;
    }
mostrarCards(frutas);

//Ejercicio 9
let mainLista = document.querySelector("main");
let divLista= document.createElement ("div");
mainLista.appendChild (divLista);
divLista.id="lista";
const tituloLista = "Frutas Dulces";
divLista.ineerText = tituloLista;

//Ejercicio 10
function listaDesordenada(frutas) {
    const ul = document.createElement("ul");
    const fragment = document.createDocumentFragment();
    for (const fruta of frutas){
        if (fruta.esDulce) {
            const li = document.createElement("li");
            li.innerText = fruta.nombre;
            fragment.append(li);
        }
    }
    ul.appendChild(fragment);
    return ul
};

//Ejercicio 11
const MostrarListaFrutasDulces=document.getElementById("lista");
const listaFrutasDulces = listaDesordenada (frutas);
MostrarListaFrutasDulces.appendChild(listaFrutasDulces);
console.log (frutas);