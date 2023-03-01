// AOS Initialization
AOS.init();

// Tawk.to
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/63f7671831ebfa0fe7eee8c9/1gpv6leu5';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

// Brand Identity Variables

const basicButton = document.getElementById("basic-button");
const standardButton = document.getElementById("standard-button");
const premiumButton = document.getElementById("premium-button");

let priceName = document.getElementById("pricing-name");
let price = document.getElementById("pricing-price");
let logoConcept = document.getElementById("logo-concept");
let brandBook = document.getElementById("brand-book");
let socialKit = document.getElementById("Social-Kit");
let xMarkStationery = document.getElementById("xmark-stationery");
let xMarkBrandbook = document.getElementById("xmark-brandbook");
let xMarkSocialMedia = document.getElementById("xmark-social-media");

// Brand Identity Checkout Link

let brandIdentityCheckOut = document.getElementById(
  "brand-identity-checkout-btn"
);

// End Brand Identity Variable

// eBook Variables

const eBookbasicButton = document.getElementById("ebook-basic-button");
const eBookstandardButton = document.getElementById("ebook-standard-button");
const eBookpremiumButton = document.getElementById("ebook-premium-button");

let eBookprice = document.getElementById("ebook-pricing-price");
let ebookCoverImg = document.getElementById("ebook-cover");
let eBookStockImg = document.getElementById("ebook-stock-img");
let eBookSoruceFiles = document.getElementById("ebook-soruce-files");
let eBookPages = document.getElementById("ebook-pages");
let eBookxMarkSrcFiles = document.getElementById("ebook-xmark-source-files");
let eBookxMarkMockups = document.getElementById("ebook-xmark-mockups");
let eBookxMarkFlipBook = document.getElementById("ebook-xmark-flip-book");

// Ebook Checkout Link

let eBookCheckOut = document.getElementById("ebook-checkout-btn");

// End Ebook Variables

// Start Brand Identity Functions

basicButton.addEventListener("click", function () {
  price.innerHTML = "$25";
  logoConcept.innerHTML = "1 Logo Concept ";

  brandIdentityCheckOut.href = "https://buy.stripe.com/cN2cO496ifJi6zu008";

  standardButton.classList.remove("pricing-header-active");
  premiumButton.classList.remove("pricing-header-active");
  basicButton.classList.add("pricing-header-active");

  xMarkStationery.classList.remove("fa-check", "pricing-card-details-check");
  xMarkStationery.classList.add("fa-xmark");

  xMarkBrandbook.classList.remove("fa-check", "pricing-card-details-check");
  xMarkBrandbook.classList.add("fa-xmark");

  xMarkSocialMedia.classList.remove("fa-check", "pricing-card-details-check");
  xMarkSocialMedia.classList.add("fa-xmark");
});

standardButton.addEventListener("click", function () {
  //   priceName.innerHTML = "Standard";
  price.innerHTML = "$45";
  logoConcept.innerHTML = "2 Logo Concept ";

  brandIdentityCheckOut.href = "https://buy.stripe.com/8wM7tKaamfJi0b6aEK";

  standardButton.classList.add("pricing-header-active");
  basicButton.classList.remove("pricing-header-active");
  premiumButton.classList.remove("pricing-header-active");

  xMarkStationery.classList.add("fa-check", "pricing-card-details-check");
  xMarkStationery.classList.remove("fa-xmark");

  xMarkBrandbook.classList.remove("fa-check", "pricing-card-details-check");
  xMarkBrandbook.classList.add("fa-xmark");

  xMarkSocialMedia.classList.remove("fa-check", "pricing-card-details-check");
  xMarkSocialMedia.classList.add("fa-xmark");
});

premiumButton.addEventListener("click", function () {
  //   priceName.innerHTML = "Premium";
  price.innerHTML = "$90";
  logoConcept.innerHTML = "3 Logo Concept ";

  brandIdentityCheckOut.href = "https://buy.stripe.com/eVa4hyaam0OocXSaEL";

  premiumButton.classList.add("pricing-header-active");
  standardButton.classList.remove("pricing-header-active");
  basicButton.classList.remove("pricing-header-active");

  xMarkStationery.classList.add("fa-check", "pricing-card-details-check");
  xMarkStationery.classList.remove("fa-xmark");

  xMarkBrandbook.classList.add("fa-check", "pricing-card-details-check");
  xMarkBrandbook.classList.remove("fa-xmark");

  xMarkSocialMedia.classList.add("fa-check", "pricing-card-details-check");
  xMarkSocialMedia.classList.remove("fa-xmark");
});

// End Brand Identity Functions

// start eBook Functions

eBookbasicButton.addEventListener("click", function () {
  eBookprice.innerHTML = "$25";

  eBookCheckOut.href = "https://buy.stripe.com/bIYdS80zM2Ww4rm5km";

  eBookbasicButton.classList.add("pricing-header-active");
  eBookstandardButton.classList.remove("pricing-header-active");
  eBookpremiumButton.classList.remove("pricing-header-active");
  eBookPages.innerHTML = "03 Pages";

  eBookxMarkSrcFiles.classList.remove("fa-check", "pricing-card-details-check");
  eBookxMarkSrcFiles.classList.add("fa-xmark");

  eBookxMarkFlipBook.classList.remove("fa-check", "pricing-card-details-check");
  eBookxMarkFlipBook.classList.add("fa-xmark");

  eBookxMarkMockups.classList.remove("fa-check", "pricing-card-details-check");
  eBookxMarkMockups.classList.add("fa-xmark");
});

eBookstandardButton.addEventListener("click", function () {
  eBookprice.innerHTML = "$45";

  eBookCheckOut.href = "https://buy.stripe.com/5kAcO40zM9kU8HC147";

  eBookbasicButton.classList.remove("pricing-header-active");
  eBookpremiumButton.classList.remove("pricing-header-active");
  eBookstandardButton.classList.add("pricing-header-active");
  eBookPages.innerHTML = "10 Pages";

  eBookxMarkSrcFiles.classList.add("fa-check", "pricing-card-details-check");
  eBookxMarkSrcFiles.classList.remove("fa-xmark");

  eBookxMarkFlipBook.classList.remove("fa-check", "pricing-card-details-check");
  eBookxMarkFlipBook.classList.add("fa-xmark");

  eBookxMarkMockups.classList.remove("fa-check", "pricing-card-details-check");
  eBookxMarkMockups.classList.add("fa-xmark");
});

eBookpremiumButton.addEventListener("click", function () {
  eBookprice.innerHTML = "$90";

  eBookCheckOut.href = "https://buy.stripe.com/9AQcO46Ya9kUga4eUY";

  eBookbasicButton.classList.remove("pricing-header-active");
  eBookstandardButton.classList.add("pricing-header-active");
  eBookbasicButton.classList.remove("pricing-header-active");
  eBookstandardButton.classList.remove("pricing-header-active");
  eBookpremiumButton.classList.add("pricing-header-active");
  eBookPages.innerHTML = "20 Pages";

  eBookxMarkSrcFiles.classList.add("fa-check", "pricing-card-details-check");
  eBookxMarkSrcFiles.classList.remove("fa-xmark");

  eBookxMarkFlipBook.classList.add("fa-check", "pricing-card-details-check");
  eBookxMarkFlipBook.classList.remove("fa-xmark");

  eBookxMarkMockups.classList.add("fa-check", "pricing-card-details-check");
  eBookxMarkMockups.classList.remove("fa-xmark");
});
