let products = []

export function query() {
  let getProducts = new XMLHttpRequest()
  getProducts.open("GET", "https://fakestoreapi.com/products", true)
  getProducts.send();


  getProducts.onload = () => {
    if (getProducts.status === 200) {
      products = JSON.parse(getProducts.response)
      document.getElementById("img1").src = products[0].image
      document.getElementById("product-name").innerHTML = products[0].title
      document.getElementById("product-price").innerHTML = products[0].price
      document.getElementById("product-rate").innerHTML = `${products[0].rating.rate} ⭐`
      document.getElementById("product-count").innerHTML = `(${products[0].rating.count})`

      document.getElementById("img2").src = products[1].image

      document.getElementById("img3").src = products[2].image

      document.getElementById("img4").src = products[3].image

      document.getElementById("img5").src = products[14].image
      document.getElementById("product-name2").innerHTML = products[14].title
      document.getElementById("product-price2").innerHTML = products[14].price
      document.getElementById("product-rate2").innerHTML = `${products[14].rating.rate} ⭐`
      document.getElementById("product-count2").innerHTML = `(${products[14].rating.count})`

      document.getElementById("img6").src = products[15].image

      document.getElementById("img7").src = products[16].image

      document.getElementById("img8").src = products[17].image

      document.getElementById("img9").src = products[16].image
      
      document.getElementById("img10").src = products[1].image
    } else {
      console.log(`error ${getProducts.status}`)
    }
  }

  getProducts.onerror = () => {
    console.error(getProducts)
  }
}

export function showProduct(number) {
  document.getElementById("product-name").innerHTML = products[number].title
  document.getElementById("product-price").innerHTML = products[number].price
  document.getElementById("product-rate").innerHTML = `${products[number].rating.rate} ⭐`
  document.getElementById("product-count").innerHTML = `(${products[number].rating.count})`
}

export function showProduct2(number) {
  document.getElementById("product-name2").innerHTML = products[number].title
  document.getElementById("product-price2").innerHTML = products[number].price
  document.getElementById("product-rate2").innerHTML = `${products[number].rating.rate} ⭐`
  document.getElementById("product-count2").innerHTML = `(${products[number].rating.count})`
}

query()
