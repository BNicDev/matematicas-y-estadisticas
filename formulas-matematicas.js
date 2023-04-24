//calcular perimetro de cuadrado 
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado*4;

console.log(perimetroCuadrado);

//calcular area del cuadrado

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(areaCuadrado);

//calcular perimetro del triangulo

const ladoTriangulo1 = 6;
const ladoTriangulo2= 6;
const ladoTrianguloBase = 4;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;

console.log(perimetroTriangulo)

//area del triangulo 
const alturaTriangulo = 5.5;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo)/2 ;

console.log(areaTriangulo);

//ahora con funciones

function calcularTriangulo(lado1, lado2, base, altura){
    console.log( {
        perimetro:lado1 + lado2 + base,
        area : (base*altura)/2
    })
}

calcularTriangulo(6,6,4,5.5);

function calcularCuadrado(lado){
    console.log({
        perimetro : lado * 4,
        area : lado * lado 
    })
}

calcularCuadrado(5);