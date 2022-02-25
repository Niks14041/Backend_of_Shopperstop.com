// -------------------------created by constructor function -------------------------

// let mycartres = [];

async function getData(){
    try{

        let mens_shirt = await fetch("https://shoppersstopapi.herokuapp.com/products/mens/shirts");

        let res = await mens_shirt.json();
        console.log(res);
        displayitem(res);

    }
    catch(err){
        console.log(err.message)
    }
}

getData();


// ---------------------------append-----------------------------

function displayitem(data)
{
    document.querySelector('.main').innerHTML = "";

    data.map(function (elem) {

    var div = document.createElement("div");
    div.setAttribute("class", "product-box");

    var image_div = document.createElement("div");
    image_div.setAttribute("class", "image-box");

    var image = document.createElement("img");
    image.setAttribute("src", elem.img_url);

    var child_div = document.createElement("div");
    child_div.setAttribute("class", "pro_child_box");

    var brand = document.createElement("p");
    brand.innerHTML = elem.brand;
    brand.setAttribute("class", "brand-name")

    var brand_div = document.createElement("div");
    brand_div.setAttribute("class", "brand-box");

    var des = document.createElement("p");
    des.textContent = elem.description;

    var price = document.createElement("p");
    price.textContent = "₹" + elem.price;
    price.setAttribute("class", "price-bold");

    var previous_price = document.createElement("p");
    previous_price.textContent = elem.pre_price

    var discount = document.createElement("p");
    discount.textContent = elem.discount+'%'+' '+'OFF';
    discount.setAttribute("class", "discount-color");
    previous_price.setAttribute("class", "line-on");

    var price_div = document.createElement("div");
    price_div.setAttribute("class", "price-box");

    let addTocart = document.createElement('button');
    addTocart.textContent = 'ADD TO CART';
    addTocart.setAttribute('class','cart-btn');


    addTocart.addEventListener('click', () => {

        myCart(elem);

    });

    price_div.append(price, previous_price, discount);

    image_div.append(image);

    brand_div.append(brand, des)

    child_div.append(image_div, brand_div, price_div,addTocart);

    div.append(child_div);

    document.querySelector('.main').append(div);

});

}


// ------------------------filter by brands----------------

// function filterByBrands(){

//     let brand = document.getElementById('filterbrand').value;

//     let brandFilter = res.filter((ele)=>{

//         if(brand == 'brand'){
//             return res
//         }
//         else if(ele.brand == brand){
//             return ele;
//         }
//     })

//     displayitem(brandFilter);
    
// }
// // -------------------filter by discount------------------

// function filterByDiscount(){

//     let discount = document.getElementById('filterdiscount').value;

//     let brandFilter = res.filter((ele)=>{

//         if(discount == 'all' ){
//             return res;
//         }
//         else if(discount == '20'){
//             return ele.discount<=20;
//         }
//         else if(discount == '40'){
//             return ele.discount <= 40 && ele.discount>=20;
//         }
//         else if(discount == '50'){
//             return ele.discount == 50 ;
//         }
//     })

//     displayitem(brandFilter);
    
// }

// // ---------------------------SORT by PRICE----------------------

// function numsort(){

//     let priceSort = document.getElementById('sort').value; 

//     if(priceSort == 'low'){

//         let sorted_res = res.sort((a,b) => {

//             return a.price - b.price;
//         })

//         displayitem(sorted_res);
//     }
//     else if(priceSort == 'high'){

//         let sorted_res = res.sort((a,b)=>{

//             return b.price - a.price;
//         })

//         displayitem(sorted_res);
//     }
     
// }

// // -----------------------------------------cart------------------------
// function myCart(ele){

//     mycartres.push(ele);

//     localStorage.setItem('myCart',JSON.stringify(mycartres));
//     // window.location.href = './cart.html'
    
// }

// let cart_btn = document.getElementById('cart-btn');
// cart_btn.addEventListener('click',()=>{

//     window.location.href = './cart.html'

// })





