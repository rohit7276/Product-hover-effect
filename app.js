let productContent = document.querySelector(".product-content");
let productContentImg = document.querySelector(".product-content img");
let text1 = document.querySelector(".text1");
let text2 = document.querySelector(".text2");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let threeDot = document.querySelector(".threeDot");
let productDetails = document.querySelector(".product-details");

productContent.addEventListener("mouseover", ()=>{
    productContentImg .classList.add('active')
    text1.classList.add('active');
    text2.classList.add('active');
    button1.classList.add('active');
    button2.classList.add('active')
    threeDot.classList.add('active');
})

productContent.addEventListener('mouseout', ()=>{
    productContentImg.classList.remove('active');
    text1.classList.remove('active');
    text2.classList.remove('active');
    button1.classList.remove('active');
    button2.classList.remove('active');
    threeDot.classList.remove('active');
})

threeDot.addEventListener('mouseover', ()=>{
    productDetails.classList.add('active')
})

threeDot.addEventListener("mouseout", ()=>{
    productDetails.classList.remove('active')
})