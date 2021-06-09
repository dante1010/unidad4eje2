var numeros = [10, 5, 14, 8, 6, 29];
var mayor = 0;
for(var i= 0; i<numeros.length; i++) {
    if (numeros[i] > mayor){
    mayor = numeros [i];
}
}
console.log("el mayor de " + numeros + " es " + mayor)