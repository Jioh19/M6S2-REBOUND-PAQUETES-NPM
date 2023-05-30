// En la barra de búsqueda de npm, ubica el término fake data. Con éste encontrarás
// paquetes que generan data de pruebas. Instala, al menos, dos paquetes que generen
// datos falsos, y usando la documentación, intenta hacer uso de éstos en un programa
// nodejs.
import { faker } from "@faker-js/faker/locale/es";
import { PhonyData } from "phonydata";

// Instala en tu proyecto el paquete Nano ID (https://www.npmjs.com/package/nanoid), y
// lee la documentación para generar dos id diferentes (https://github.com/ai/nanoid#js),
// guarda cada valor en una variable independiente.
import { nanoid } from "nanoid";

import { stringCatLen as catlen } from "./utils.js";
import { largo } from "./config.js";

let instance = new PhonyData();

const id1 = nanoid();
const id2 = nanoid();

console.log(faker.person.fullName());
console.log(instance.loremSentence);

// Exporta la función de tu archivo utils.js, e invócala en tu archivo principal index.js
// utilizando los dos id generados.
// Cambia el valor de la variable booleana en el archivo config.js, para variar el resultado de
// tu programa.
console.log(catlen(id1, id2, !largo));
console.log(catlen(id1, id2, largo));
