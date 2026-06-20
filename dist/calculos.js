import readline from "readline";
import { menu } from "./menu.js";
import { calcularSubtotal } from "./calculo_Subtotal.js";
import { calcularIVA } from "./calculo_Iva.js";
import { calcularTotal } from "./calculo_Total.js";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const precios = [];
/* funcion que sirve para pedir los dattos de los precios al usuario el cual
    guardas los datos dentro de un arrayList de tipo numero el se utiliza para
    calcular el subtotal, IVA y total de la compra con las demas funciones que
    son las que estan importadas
*/
export function pedirDatos() {
    rl.question("Ingresa un dato (o 'salir' para regresar): ", (dato) => {
        if (dato.toLowerCase() === "salir") {
            console.log("precios guardados:", precios);
            menu();
            return;
        }
        precios.push(Number(dato));
        pedirDatos();
    });
}
/*  funcion que muestra los resultados del subtotal, IVA y total de la compra
    en un solo resultado asi pudiendo ver todos los resulatados de las compras
    hechas por el usuario en un solo resultado
*/
export function mostrarResultados() {
    const subtotal = calcularSubtotal(precios);
    const iva = calcularIVA(subtotal);
    const total = calcularTotal(subtotal, iva);
    console.log("Subtotal: Q " + subtotal.toFixed(2));
    console.log("IVA: Q " + iva.toFixed(2));
    console.log("Total: Q " + total.toFixed(2));
    console.log("-----------------------------");
    menu();
}
/**
 * funcion que llama a las funciones de calculo del Total de la compra para
 * luego mostrar el resultado del total de la compra al usuario en un solo
 * resultado
 */
export function mostrarTotal() {
    const subtotal = calcularSubtotal(precios);
    const iva = calcularIVA(subtotal);
    const total = calcularTotal(subtotal, iva);
    console.log("Total: Q " + total.toFixed(2));
    console.log("-----------------------------");
    menu();
}
/*
    funcionque llama a la funcion del calculo del IVA para luego mostrar
    el resultado del IVA al usuario en un solo resultadoasi el usuario
    puede decidir como quiere ver los resultados de su compra
*/
export function mostrarIva() {
    const subtotal = calcularSubtotal(precios);
    const iva = calcularIVA(subtotal);
    console.log("IVA: Q " + iva.toFixed(2));
    console.log("-----------------------------");
    menu();
}
/**
 * funcion que llama a la funcion del calculo del subtotal para despues
 * mostrar el resultado del subtotal al usuario en un solo resultado
 */
export function mostrarSubtotal() {
    const subtotal = calcularSubtotal(precios);
    console.log("Subtotal: Q " + subtotal.toFixed(2));
    console.log("-----------------------------");
    menu();
}
//# sourceMappingURL=calculos.js.map