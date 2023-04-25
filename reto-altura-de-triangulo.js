function alturaTriangulo(lados, base){
    if(lados == base){
        console.warn("este no es un triangulo isoceles");
    }else{
        const altura = Math.sqrt((lados**2) - ((base**2))/4);
        console.log(altura);
    }
}

alturaTriangulo(6,4)

//triangulo escaleno 

function alturaEscaleno(lado1, lado2, base){
    const semiperimetro = (lado1 + lado2 + base)/2;
    if(lado1 == lado2 && lado1 == base && lado2 == base){
        console.log("esto no es un triangulo escaleno"); 
    }else{
        const h = ((2/lado1) * (Math.sqrt(semiperimetro*(semiperimetro-lado1)*(semiperimetro-lado2)*semiperimetro-base)));
        console.log(h)
    }
}

// another way

function solution(lado1, lado2, lado3) {
    if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
      return false;
    }
    
    const S = (lado1 + lado2 + lado3) / 2;
    const S1 = S - lado1;
    const S2 = S - lado2;
    const S3 = S - lado3;
  
    const H = (2 / lado1) * Math.sqrt(S * S1 * S2 * S3);
    const result = Math.floor(H);
  
    return result;
  }