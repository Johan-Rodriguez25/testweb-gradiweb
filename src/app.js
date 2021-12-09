import { queries, changeCurrency } from './currencies';
import { query, showProduct, showProduct2 } from './products';
import "../scss/index.scss";

import mainLogo from '../assets/images/logo.png';
import searchLogo from '../assets/images/search.png';
import shopLogo from '../assets/images/shop-bag.png';
import menuLogo from '../assets/images/menu.png';
import discountImage from '../assets/images/discount-image.png';
import descriptionImageBackpack from '../assets/images/description-image-backpack.png';
import description2ImageHoodie from '../assets/images/description2-image-hoodie.png';
import facebookLogo from '../assets/images/facebook.png';
import pinteresLogo from '../assets/images/pinterest.png';
import instagramLogo from '../assets/images/instagram.png';
import googlePayLogo from '../assets/images/google-pay.png';
import masterCardLogo from '../assets/images/maestro.png';
import paypalLogo from '../assets/images/paypal.png';
import visaLogo from '../assets/images/visa.png';

document.getElementById('main-logo').src = mainLogo;
document.getElementById('search-logo').src = searchLogo;
document.getElementById('shop-logo').src = shopLogo;
document.getElementById('menu-logo').src = menuLogo;
document.getElementById('discount-image').src = discountImage;
document.getElementById('description-image').src = descriptionImageBackpack;
document.getElementById('description-image2').src = description2ImageHoodie;
document.getElementById('second-logo').src = mainLogo;
document.getElementById('fb-icon').src = facebookLogo;
document.getElementById('pt-icon').src = pinteresLogo;
document.getElementById('ig-icon').src = instagramLogo;
document.getElementById('gpay-icon').src = googlePayLogo;
document.getElementById('ms-icon').src = masterCardLogo;
document.getElementById('p-icon').src = paypalLogo;
document.getElementById('visa-icon').src = visaLogo;

queries()
query()

document.getElementById("Slide1").addEventListener("click", () => {
  showProduct(0)
})

document.getElementById("Slide2").addEventListener("click", () => {
  showProduct(1)
})

document.getElementById("Slide3").addEventListener("click", () => {
  showProduct(2)
})

document.getElementById("Slide4").addEventListener("click", () => {
  showProduct(3)
})

document.getElementById("Slide5").addEventListener("click", () => {
  showProduct2(14)
})

document.getElementById("Slide6").addEventListener("click", () => {
  showProduct2(15)
})

document.getElementById("Slide7").addEventListener("click", () => {
  showProduct2(16)
})

document.getElementById("Slide8").addEventListener("click", () => {
  showProduct2(17)
})

document.getElementById("usd-currency").addEventListener("click", () => {
  changeCurrency(1)
})

document.getElementById("eur-currency").addEventListener("click", () => {
  changeCurrency(2)
})