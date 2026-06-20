import readline from "readline";
import { pedirDatos, mostrarResultados, mostrarIva, mostrarTotal } from "./calculos.js";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// funcion que muestra todas las opciones del menu ademas de  alvergar las funciones 
// que se utilizan para el calculo del IVA, subtotal y total de la compra
export function menu() {
    console.log("Bienvenido al sistema de cálculo de IVA");
    console.log("1. Ingresar precios");
    console.log("2. Calcular IVA");
    console.log("3. Calcular Total");
    console.log("4. Mostrar resultados");
    console.log("5. Salir");
    rl.question("Elige una opcion: ", (option) => {
        switch (option) {
            case "1":
                // se llama a la funcion que ingresa los precios
                pedirDatos();
                break;
            case "2":
                // se llama a la funcion que hace el calculo del IVA
                mostrarIva();
                break;
            case "3":
                // se llama a la funcion que hace el calculo del totall
                mostrarTotal();
                break;
            case "4":
                // se llama a la funcion que muestra los resultados
                mostrarResultados();
                break;
            case "5":
                // Opcion que finaliza el programa
                console.log("Saliendo...");
                rl.close();
                break;
            default:
                console.log("Opción no válida. Por favor, elige una opción del 1 al 5.");
                menu(); //Si se confunde o elije una opcion que no es valida se devuelve al menu principal
                break;
        }
    });
}
menu();
//# sourceMappingURL=menu.js.map