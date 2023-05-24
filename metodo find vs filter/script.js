//price input
let price = document.querySelector('.product-price');
//discount
let coupon = document.querySelector('#coupon');
//button
const buttonCalc = document.querySelector('.calc');
//p result
const pResult = document.querySelector('.result-container');

//escuchando el evento 
buttonCalc.addEventListener('click', calcularDescuento)

// const couponObj = {
//     "hoy30": 30,
//     "hoy45": 45,
//     "hoy50": 50
// };

const couponList = [];
couponList.push({
    name: "hoy30",
    discount: 30
});
couponList.push({
    name: "hoy45",
    discount: 45
});
couponList.push({
    name: "hoy50",
    discount: 50
});

function calcularDescuento(){
    //obtenemos los value de los input
    let priceValue = price.value;
    let discountCoupon = coupon.value;

    if(!priceValue||!discountCoupon){
        pResult.innerText="Complete el formulario"
    }
    let discount;

    function isCouponInArray(couponElement){
        return couponElement.name == discountCoupon;
    }
    // const couponInArr = couponList.filter(isCouponInArray);
    const couponInArr = couponList.find(isCouponInArray);

    if(couponInArr){
        discount = couponInArr.discount;
    }else{
        pResult.innerText="El cupon no es valido";
        return;
    }

    // if(couponObj[discountCoupon]){
    //     discount=couponObj[discountCoupon];
    // }else{
    //     pResult.innerText="El cupon no es valido"
    //     return;
    // }
    // switch(discountCoupon){
    //     case "hoy30":
    //         discount = 30;
    //         break;
    //     case "hoy40":
    //         discount = 40;
    //         break;
    //     default:
    //         pResult.innerText="El cupon no es valido"
    //         return;
    // }

    // if(discountCoupon =="hoy30"){
    //     discount = 30;
    // }else if(discountCoupon == "hoy40"){
    //     discount = 40;
    // }else{
    //     pResult.innerText="El cupon no es valido"
    // }
    //calculamos el descuento del producto
        const newPrice = (priceValue*(100-discount)/100);
        pResult.innerText= "El nuevo precio con Descuento es: $" + newPrice
    
}