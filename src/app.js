import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  // Definimos los diferentes arrays que contienen strings dentro de una variable 
  const pronoun = ['the', 'our', 'his', 'her',];
  const adj = ['great', ' big', 'small', 'mighty',];
  const noun = ['racoon', 'lion', 'explorer', 'warrior'];
  const extend = [".com", ".es", ".us", ".net"];
 
  function generarNombreDominio(pronoun, adj, noun) {
    // Inicializamos una variable con un array vacio para mas adelante guardar las concatenaciones
    let arrayConcatenado = [];
    //Bucle for en el que se realizan las concatenaciones y el push 
    for (let i in pronoun) {
      for (let j in adj) {
        for (let k in noun) {
          arrayConcatenado.push(pronoun[i] + adj[j] + noun[k]); //realizamos un push a arrayConcatenado por cada vuelta del bucle 
        }
      }
    }
    return arrayConcatenado; //Por cada vuelta del bucle devolvemos el resultado generado con return 
  };

// Generamos un array concatenado a partir de la función generarNombreDominio
// A cada elemento del array se le añade una extensión seleccionada aleatoriamente del array extend
let arrayConcatenado = generarNombreDominio(pronoun, adj, noun)
  .map(item => item + extend[Math.floor(Math.random() * extend.length)]);

  // Ordenamos la salida con sort para que aparezcan primero los dominios que terminen en .com 
  const arrayOrdenado = arrayConcatenado.sort((a, b) => {
    const aEsCom = a.slice(-4) === ".com"; // Verifica si los últimos 4 caracteres son ".com"
    const bEsCom = b.slice(-4) === ".com"; // Hace lo mismo para b

    if (aEsCom && !bEsCom) return -1; // a termina en .com, b no
    if (!aEsCom && bEsCom) return 1;  // b termina en .com, a no
    return 0; // Mantener el orden si ambos o ninguno terminan en .com
});

 // Recorremos el arrayOrdenado con .map y transformamos cada elemento en un párrafo HTML (<p>).
  const finalResult = arrayOrdenado.map(item => `<p class="border border-1 rounded-2 mb-2 p-2 bg-light border-dark">${item}</p>`).join("");
  // Insertamos el contenido generado en el elemento con id "resultado".
  document.getElementById("resultado").innerHTML = finalResult;
};



