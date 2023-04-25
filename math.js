console.group("circle");

const radioCirculo = 3; 
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo
})


console.groupEnd("circle")

//ahora con funciones

function calcularCirculo(radio){
    const diametro = radio*2
    const radioAlCuadrado = Math.pow(radio,2);
    console.log({
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI
    })
}

calcularCirculo(3);