Array = [10,20,30,40]

function espar(){
    return !(Array.length % 2);
}

function calcularMediana(lista){
    const listaEsPar = espar(lista);

    if(listaEsPar){
        const index = lista.length/2;
        const index2 = (lista.length/2)-1;
        const listaMitades = [];
        listaMitades.push(lista[index]);
        listaMitades.push(lista[index2]);
        calcularPromedio(listaMitades);
        
    }else{
        const mitadLista = parseInt(lista.length / 2);
        console.log(lista[mitadLista])
    }
}

function calcularPromedio(lista){
    function sumarElementos(valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor;
    }
    const sumaLista = lista.reduce(sumarElementos)
        const promedioLista = sumaLista / lista.length;
        console.log(promedioLista); 
  }
calcularMediana(Array);