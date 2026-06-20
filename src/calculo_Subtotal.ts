
/* la funcion lo que hace es sumar todos los elementos del array list
    asi haciendo calculando el subtotal de los precios que se le pasa 
    a las demas funciones para que puedan realizarr sus calculos propios
*/  

export function calcularSubtotal(precios: number[]): number {
    return precios.reduce((subtotal, precio) => subtotal + precio, 0);
}