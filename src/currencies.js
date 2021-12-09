let priceConverted
let usdToEur
let eurToUsd
let isUSDSelected = false

 function queries() {
  let convertUsdToEur = new XMLHttpRequest()
  convertUsdToEur.open("GET", "https://api.getgeoapi.com/v2/currency/convert?api_key=d1fd585c6ce57d2b390d05674c87b45b8b78b5ab&from=USD&to=EUR&amount=1&format=json", true)
  convertUsdToEur.send();

  let convertEurToUsd = new XMLHttpRequest()
  convertEurToUsd.open("GET", "https://api.getgeoapi.com/v2/currency/convert?api_key=d1fd585c6ce57d2b390d05674c87b45b8b78b5ab&from=EUR&to=USD&amount=1&format=json", true)
  convertEurToUsd.send();


  convertUsdToEur.onload = () => {
    if (convertUsdToEur.status === 200) {
      usdToEur = JSON.parse(convertUsdToEur.response).rates.EUR.rate_for_amount
    } else {
      console.log(`error ${convertUsdToEur.status}`)
    }
  }

  convertUsdToEur.onerror = () => {
    console.error(convertUsdToEur)
  }

  convertEurToUsd.onload = () => {
    if (convertEurToUsd.status === 200) {
      eurToUsd = JSON.parse(convertEurToUsd.response).rates.USD.rate_for_amount
    } else {
      console.log(`error ${convertEurToUsd.status}`)
    }
  }

  convertEurToUsd.onerror = () => {
    console.error(convertEurToUsd)
  }
}

 function changeCurrency(number) {
  number == 1 ? (isUSDSelected = true) : (isUSDSelected = false)

  if (!isUSDSelected) {
    document.getElementById("eur-currency").disabled = true
    document.getElementById("usd-currency").disabled = false
    priceConverted = (document.getElementById("product-price").innerHTML * usdToEur).toFixed(2)
    document.getElementById("product-price").innerHTML = priceConverted
  } else {
    document.getElementById("eur-currency").disabled = false
    document.getElementById("usd-currency").disabled = true
    priceConverted = (document.getElementById("product-price").innerHTML * eurToUsd).toFixed(2)
    document.getElementById("product-price").innerHTML = priceConverted
  }
}

queries()