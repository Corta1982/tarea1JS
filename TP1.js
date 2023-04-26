function Piramide(numero){
    if (numero < 1 || numero > 6) {
        console.log("El número debe ser mayor o igual a 1 y menor a 6");
        return;
      }
    for (let i = 1; i <= numero; i++) {
        let fila = '';
        for (let j = 1; j <= i; j++) {
        fila += j;
        }
        console.log(fila);
    }
}
