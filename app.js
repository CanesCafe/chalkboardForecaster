const items = {
    frappes:{
        name:'Frappes',
        items:["Coffee", "Mocha", "Caramel", "Java Chip", "Choc Mint", "Cookies & Cream", "Cotton Candy", "Vanilla Bean", "Vanilla Latte"]
    },
    smoothies:{
        name:'Smoothies',
        items:["Coffee", "Mocha", "Caramel", "Java Chip", "Choc Mint", "Cookies & Cream", "Cotton Candy", "Vanilla Bean", "Vanilla Latte"]
    },
    local:{
        name:'Local Creations',
        items:["Coffee", "Mocha", "Caramel", "Java Chip", "Choc Mint", "Cookies & Cream", "Cotton Candy", "Vanilla Bean", "Vanilla Latte"]
    },

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
       
     
        // modal.style.visibility= "visible";
        modal.style.display= "block";
        let result=`<h3>${items[menuID].name}</h3>\n${nameList[winChikDin]}`;
        content.innerHTML= result;
        console.log(content);
        // location.replace("result.html")

    }
}




