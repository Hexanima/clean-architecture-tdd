//Funciones puras:
//- No accede a valores o funciones declaradas fuera de su scope
//- Dado el mismo input devuelve el mismo output
//- No genera efectos secundarios
function sumar(x: number, y: number) {
    return x + y;
}

//Accede a valores o funciones declaradas fuera de su scope
//En este caso el objeto "console" no está definido dentro de la funcion
function saludar() {
    console.log("Hola mundo");
}

//Accede a "x" y "y", declaradas fuera de la funcion
const x: number = 2;
const y: number = 3;
function secondImpureFunction() {
    return x + y;
}

//Mismo input, distinto output
Math.random();

//Un efecto secundario es modificar un estado fuera del scope actual

//Ambientes
interface SaludarDependencies {
    log: (msg: string) => void,
}

//Mas pureza al inyectar las funciones impuras (como console.log)
function saludarDos(msg: string, {log}: SaludarDependencies) {
    log(`Hola ${msg}`);
}

//Generics
interface Something<T> {
    value: T
}

const thing1 : Something<number> = {
    value: 5
}

const thing2 : Something<string> = {
    value: "hola"
}

Promise<void>

