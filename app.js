

function onLoad() {
    // alert("Function onLoad() called");
    document.getElementById("timestamp").innerHTML = Date();
}

function frappeRNG(nameList) {
    
    let ranName = [];
    let winChikDin = Math.floor(Math.random() * nameList.length);
    
    for (let i = 0; i < nameList.length; i++) {
        if (i === winChikDin) {

            ranName.push(nameList[i])
    
        }
    
    }

return ranName.join()

}

let frappeNames = ["Coffee", "Mocha", "Caramel", "Java Chip", "Choc Mint", "Cookies & Cream", "Cotton Candy", "Vanilla Bean", "Vanilla Latte"]
console.log(mrPodcastRNG(frappeNames));

function smoothiesRNG(nameList) {
    
  let ranName = [];
  let winChikDin = Math.floor(Math.random() * nameList.length);
  
  for (let i = 0; i < nameList.length; i++) {
      if (i === winChikDin) {

          ranName.push(nameList[i])
  
      }
  
  }

return ranName.join()

}

let smoothieNames = ["Coffee", "Mocha", "Caramel", "Java Chip", "Choc Mint", "Cookies & Cream", "Cotton Candy", "Vanilla Bean", "Vanilla Latte"]
console.log(mrPodcastRNG(smoothieNames));

