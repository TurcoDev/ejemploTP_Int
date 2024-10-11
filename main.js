import prompt_sync from 'prompt-sync';
import { arr1, arr2 } from "./arreglos.js";
import { agregarElemento } from "./manejador_arreglos.js";

const prompt = prompt_sync();



// arr1.push(2);
// arr1_1.push(10);
agregarElemento(5, arr1);

agregarElemento('u', arr2);

console.log(arr1);
console.log(arr2);


/// *************************
const menu = () => {
    console.log("Ingrese una opcion");
    console.log("1 - para agregar elemento");
    // ...
}

let eleccion = 1;
while (eleccion != 0) {
    menu();
    eleccion = Number(prompt());
    if (eleccion === 1) {
        agregarElemento(4, arr1);
    }
}

console.log(arr1);
