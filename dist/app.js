import { calcularSubtotal } from "./calculo_Subtotal.js";
import { calcularIVA } from "./calculo_Iva.js";
import { calcularTotal } from "./calculo_Total.js";
const precios = [150, 200, 75, 50];
export function mostrarResultados() {
    const subtotal = calcularSubtotal(precios);
    const iva = calcularIVA(subtotal);
    const total = calcularTotal(subtotal, iva);
    console.log("Subtotal: Q" + subtotal.toFixed(2));
    console.log("IVA: Q" + iva.toFixed(2));
    console.log("Total: Q" + total.toFixed(2));
}
//# sourceMappingURL=app.js.map