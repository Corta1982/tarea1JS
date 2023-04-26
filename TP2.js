let frutas1= ["manzana", "frutilla", "mandarina", "pera", "banana"];
let frutas2= ["naranja", "mandarina", "limón", "pomelo", "manzana"];

function frutasEnComunes(frutas1, frutas2) {
    let resultado = [];
    for (let i = 0; i < frutas1.length; i++) {
      if (frutas2.includes(frutas1[i])) {
        resultado.push(frutas1[i]);
      }
    }
    return resultado;
  }

  let frutasComunes = frutasEnComunes(frutas1, frutas2);
console.log(frutasComunes);