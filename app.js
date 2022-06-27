const items = {
    frappes:{
        name:'Frappes',
        items:["Coffee", "Mocha", "Caramel", "Java Chip", "Choc Mint", "Cookies & Cream", "Cotton Candy", "Vanilla Bean", "Vanilla Latte", "Seasonal"]
    },
    smoothies:{
        name:'Smoothies',
        items:["MVP", "Spring Break", "High School Sweet Hearts", "Deans List", "Seasonal" ]
    },
    local:{
        name:'Local Creations',
        items:["Whitney", "Al Capone"]
    },
    coffee:{
        name:'Coffee',
        items:["Cappucino", "Cafe Latte", "Espresso", "Doppio", "Caramel Macchiato", "Mocha", "Americano", "Fresh Brew", "Cold Brew", "Iced Cafe Latte", "Iced Mocha", "Keto Kickstart", "Spiced Cherry Mocha", "Coconut White Mocha", "Lavendar Mocha", "Peppermint Mocha", "S'Mores Mocha", "Maple Butterscotch Latte", "Pumpkin Spice Latte", "Red Velvet White Mocha", "Peppermint White Mocha", "Honey Ginger Latte", "Cold Brew Lavender Latte", "Caramel Nut Spice Latte", "Caramel Apple Latte"]
    },
    noncoffee:{
        name:'Tea',
        items:["Iced Tea", "Iced Thai Tea", "Chai Latte", "French Toast Latte", "Shaken Iced Green", "Lemonade Brewed Tea", "Raspberry Brewed Tea", "Peach Brewed Tea", "Mango Brewed Tea", "Mandarin Orange Brewed Tea", "Strawberry", "Hot Tea", "Hot Chocolate", "Lavendar Matcha", "Winter Chai", "Winter Chai", "Mint Chocolate Matcha", "Honey Ginger Lemonade", "Lavendar Lemonade", "Salted Butterscotch"]
    },
    pies:{
        name:'Pies',
        items:["Traditional", "Steak/Cheese", "Steak/Cheese/Bacon", "Guiness", "Vegetable Pastie", "Chicken/Vegetable", "Spinach/Feta", "Egg/Bacon", "Sausage Roll"]
    },
    paninis:{
        name:'Pressed Paninis',
        items:["Ham & Cheese", "Cuban", "Pesto Caprese", "Grilled Cheese", "Turkey Bacon Melt", "Kira's Kategory 5", "BLT"]
    },
    health:{
        name:'Rabbit Food',
        items:["Prime Time Toast", "Yogurt Parfait", "Vegan Overnight Oats", "Caesar Salad", "Superfood Overnight Oatmeal"]
    },
    bagels:{
        name:'Bagels',
        items:["Signature Stormy Bagel", "Bagel with Butter", "Bagel with Cream Cheese", "Egg & Cheese Bagel", "Bacon, Egg & Cheese Bagel", "Ham, Egg & Cheese Bagel", "Sausage, Egg & Cheese Bagel"]
    },
    waffles:{
        name:'Waffles',
        items:["Berry Berry Good Waffle", "The Pre-Game Waffle", "The Nutty Professor Waffle", "Ice Cream Sundae Waffle"]
    },
    superdonut:{
        name:'Just Do It',
        items:["Prime Time Toast", "Caesar Salad", "Superfood Overnight Oatmeal", "Donut", "Muffin", "Croissant"]
    }

}


function onLoad() {
    // alert("Function onLoad() called");
    document.getElementById("timestamp").innerHTML = Date();
    const buttons = document.querySelectorAll("button");
    let modal= document.querySelector(".modal-container");
    let content= document.querySelector(".content");
    modal.addEventListener("click",(e)=>{
        content.innerHTML= "";
        modal.style.display="none";
        
    });
    for(let button of buttons) {
        button.addEventListener("click", menuRNG);
    }
}

function menuRNG(e) {
   
    let menuID = e.target.id;
    console.log(menuID);
    if (Object.keys(items).includes(menuID)) {

        let nameList = items[menuID].items;
        let winChikDin = Math.floor(Math.random() * nameList.length);
       
        let modal= document.querySelector(".modal-container");
        let content= document.querySelector(".content");
        content.classList.add("modalContent");

     
        // modal.style.visibility= "visible";
        modal.style.display= "block";
        let result=`<h5>${items[menuID].name}</h5>\n<h3>${nameList[winChikDin]}</h3>`;
        content.innerHTML= result;
        console.log(content);
        // location.replace("result.html")

    }
}




