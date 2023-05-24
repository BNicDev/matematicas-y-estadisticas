//calculando promedio con ciclos
const numeros = [10,20,30,40,50,60,70,80,90];
let sumaDeElementos = 0;
let prom;
 function calcularPromedio(){
    for(let i=0; i<numeros.length;i++){
        sumaDeElementos += numeros[i];
    }
    prom = sumaDeElementos/numeros.length;
 }
 calcularPromedio();
 console.log(prom)
 console.log(sumaDeElementos)


 //calculando promedio con metodos
 const numeros2 = [10,20,30,40,50,60,70,80,90];
 let sumaLista = 0;
 let promedio;
  function calcularPromedio(){
    //  for(let i=0; i<numeros.length;i++){
        //  sumaDeElementos += numeros[i];
    //  }
    function sumarElementos(valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor;
    }
    const sumaLista = numeros2.reduce(sumarElementos)
     promedio = sumaLista/numeros2.length;
     console.log(promedio); 
  }
  calcularPromedio();
  

  //con arrow function
  const numeros3 = [10,20,30,40,50,60,70,80,90];
  let sumaLista2 = 0;
  let promedio2;
   function calcularPromedio(){
     //  for(let i=0; i<numeros.length;i++){
         //  sumaDeElementos += numeros[i];
     //  }
    //  function sumarElementos(valorAcumulado, nuevoValor){
    //      return valorAcumulado + nuevoValor;
    //  }
    //  const sumaLista = numeros3.reduce(sumarElementos)
    const sumarTodosElementos = (valorAcumulado, nuevoValor)=> valorAcumulado + nuevoValor;
    const sumaLista = numeros3.reduce(sumarTodosElementos)


      promedio = sumaLista/numeros3.length;
      console.log(promedio); 
   }
   calcularPromedio();
   
  
 



