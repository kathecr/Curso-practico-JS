const coupons = [
  {
    name: "LOCOXCOMPRAR",
    discount: 15
  },
  {
    name: "DIADELNINO",
    discount: 30
  },
  {
    name: "SOMOSEQUIPO",
    discount:25
  }
]
const calculatePriceDiscount = (price, discount) => (price-price*(1-discount))/100

function onClickPriceCoupon() {
  const price =  document.querySelector("#inputPrice").value
  const couponClient =  document.querySelector("#inputCoupon").value.toUpperCase()
  try {
    const discount = coupons.find(element => element.name == couponClient).discount
    const result = calculatePriceDiscount(price, discount)
    document.querySelector("#outputResult").innerText = result;
  }catch{
    alert(`El cupón ${couponClient} es invalido`)
  }
}