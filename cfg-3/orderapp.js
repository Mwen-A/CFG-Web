

//mapquest API
var L;
    window.onload = function() {
      L.mapquest.key = '7fLpSCYAZcTJAqSXGjifoQ5i4LJnZi7x';

      // 'map' refers to a <div> element with the ID map
      var map = L.mapquest.map('map', {
        center: [14.682113, -17.451037],
        // 1. change 'map' to 'hybrid', try other type of map
        layers: L.mapquest.tileLayer('map'),
        zoom: 18
      });

      // 3. Add icon
      L.marker([14.682113, -17.451037], {
        icon: L.mapquest.icons.marker({
          primaryColor: '#22407F',
          secondaryColor: '#3B5998',
          shadow: true,
          size: 'md',
          symbol: ''
        })
      })
      .bindPopup('Come and grab a coffee!')
      .addTo(map);
    }

    //Jquery initiation of functionalities


function calc_price () {
  console.log("calculateprice clicked");
  var InputEl = document.getElementById("ItemQuantity");

  var InputText = InputEl.value;
  var Quantity = parseInt(InputText);
  console.log("Quantity", Quantity);
  console.log("type", typeof Quantity);

// checks for valid input
if(isNaN(Quantity)){
 console.log("Please insert an integer amount");
  return;   //ends function earlier
}

if (Quantity < 0){
  console.log("Please insert an positive amount");
  return;   //ends function earlier
}

var price= 5;
var total_price = Quantity * price;
console.log(total_price);

var outputEl = document.getElementById("total_price");
outputEl.innerText = total_price;

addToCartBtn = document.getElementsByClassName('addToCartBtn');


}
