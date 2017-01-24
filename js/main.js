console.info('Welcome to the dessert maker v1.0.');

var currentFruit = null;
var currentDessert = null;

var images = {
  fruits: {
    apple: 'img/Apple.jpg',
    orange: 'img/Orange.jpg',
    banana: 'img/Banana.jpg'
  },
  desserts: {
    icecream: 'img/IceCream.jpg',
    cake: 'img/Cake.jpg',
    pie: 'img/Pie.jpg'
  },
  mixes: {
    apple: {
      icecream: 'img/AppleIceCream.jpg',
      cake: 'img/AppleCake.jpg',
      pie: 'img/ApplePie.jpg'
    },
    orange: {
      icecream: 'img/OrangeIceCream.jpg',
      cake: 'img/OrangeCake.jpg',
      pie: 'img/OrangePie.jpg'
    },
    banana: {
      icecream: 'img/BananaIceCream.jpg',
      cake: 'img/BananaCake.jpg',
      pie: 'img/BananaPie.jpg'
    }
  }
};

//reset button
var reset = document.querySelector('.Reset');


//fruit dom elements

var apple = document.querySelector('.Fruit--apple');
var banana = document.querySelector('.Fruit--banana');
var orange = document.querySelector('.Fruit--orange');

//dessert dom elements

var cake = document.querySelector('.Dessert--cake');
var icecream = document.querySelector('.Dessert--icecream');
var pie = document.querySelector('.Dessert--pie');

//Holder--result

var fruitHolder = document.querySelector('.Holder--fruit');
var dessertHolder = document.querySelector('.Holder--dessert');
var resultHolder = document.querySelector('.Holder--result');


function setFruit(f) {
  console.log(f + ' clicked');
  currentFruit = f;

  if (currentFruit !== null){
    fruitHolder.innerHTML = `<img src="${images.fruits[currentFruit]}" />`;
  } else {
    dessertHolder.innerHTML = '';
  }
  loadMix();
}

function setDessert(d) {
  console.log(d + ' clicked');
  currentDessert = d;

  if (currentDessert !== null){
    dessertHolder.innerHTML = `<img src="${images.desserts[currentDessert]}" />`;
  } else {
    dessertHolder.innerHTML = '';
  }
  loadMix();
}

function loadMix() {
  if (currentFruit !== null && currentDessert !== null) {
    //set result image
    resultHolder.innerHTML = `<img src="${images.mixes[currentFruit][currentDessert]}" />`
  } else {
    //clear out result image
    resultHolder.innerHTML = '';
  }
}



apple.addEventListener('click', function() {
  setFruit('apple');
});

banana.addEventListener('click', function() {
  setFruit('banana');
});

orange.addEventListener('click', function() {
  setFruit('orange');
});

icecream.addEventListener('click', function() {
  setDessert('icecream');
});

cake.addEventListener('click', function() {
  setDessert('cake');
});

pie.addEventListener('click', function() {
  setDessert('pie');
});

reset.addEventListener('click', function() {
  setFruit(null);
  setDessert(null);
});


// var apple = document.querySelector('.Fruit--apple');
// apple.addEventListener('click', function() {
//   console.log('Apple clicked.');
//   document.querySelector('.Holder--fruit').innerHTML= '<img src="' + images.fruits.apple + '">';
//   apple = currentFruit;
//
//
// });
//
//
//
// var orange = document.querySelector('.Fruit--orange');
// orange.addEventListener('click', function() {
//
//   document.querySelector('.Holder--fruit').innerHTML= '<img src="' + images.fruits.orange + '">';
//
//   orange = currentFruit;
// });
//
// var banana = document.querySelector('.Fruit--banana');
// banana.addEventListener('click', function() {
//
//   document.querySelector('.Holder--fruit').innerHTML= '<img src="' + images.fruits.banana + '">';
//
//   banana = currentFruit;
// });
//
// var icecream = document.querySelector('.Dessert--icecream');
// icecream.addEventListener('click', function() {
//   document.querySelector('.Holder--dessert').innerHTML= '<img src="' + images.desserts.icecream + '">';
//   icecream = currentDessert;
//
//   if (apple == currentFruit && icecream == currentDessert) {
//
//     var appleIce = document.querySelector('.Holder--result').innerHTML= '<img src="' + images.mixes.apple.icecream + '">';
//   }
//   if (orange == currentFruit && icecream == currentDessert) {
//
//     var orangeIce = document.querySelector('.Holder--result').innerHTML= '<img src"' + images.mixes.orange.icecream + '">';
//     console.log(orangeIce);
//
//   }
//   if (banana == currentFruit && icecream == currentDessert) {
//     var bananaIce = document.querySelector('.Holder--result').innerHTML = '<img src"' + images.mixes.banana.icecream + '">';
//     console.log(bananaIce);
//
//   }
//
// });
//
//
//
// var cake = document.querySelector('.Dessert--cake');
// cake.addEventListener('click', function() {
//   console.log('Cake clicked.');
//   document.querySelector('.Holder--dessert').innerHTML= '<img src="' + images.desserts.cake + '">';
//
//   cake = currentDessert;
//
//   if (apple == currentFruit && cake == currentDessert) {
//     var appleCake = document.querySelector('.Holder--result').innerHTML = '<img src="' + images.mixes.apple.cake + '">';
//   }
//   if (orange == currentFruit && cake == currentDessert) {
//     var orangeCake = document.querySelector('.Holder--result').innerHTML = '<img src="' + images.mixes.orange.cake + '">';
//   }
//   if (banana == currentFruit && cake == currentDessert) {
//     var bananaCake = document.querySelector('.Holder--result').innerHTML = '<img src"' + images.mixes.banana.cake + '">';
//   }
// });
//
// var pie = document.querySelector('.Dessert--pie');
// pie.addEventListener('click', function() {
//   console.log('Pie clicked.');
//   document.querySelector('.Holder--dessert').innerHTML= '<img src="' + images.desserts.pie + '">';
//
//   pie = currentDessert;
//
//   if (apple == currentFruit && pie == currentDessert) {
//     var applePie = document.querySelector('.Holder--result').innerHTML= '<img src="' + images.mixes.apple.pie + '">';
//   }
//   if (orange == currentFruit && pie == currentDessert) {
//     var orangePie = document.querySelector('.Holder--result').innerHTML= '<img src="' + images.mixes.orange.pie + '">';
//   }
//   if (banana == currentFruit && pie == currentDessert) {
//     var bananaPie = document.querySelector('.Holder--result').innerHTML = '<img src="' + images.mixes.banana.pie + '">';
//   }
// });
//
//
//
// var clear = document.querySelector('.Reset');
// clear.addEventListener('click', function() {
//   currentFruit == null;
//   currentDessert == null;
//   document.querySelector('.Holder--fruit').innerHTML= "";
//   document.querySelector('.Holder--dessert').innerHTML = "";
//   document.querySelector('.Holder--result').innerHTML = "";
// });
// if (currentFruit == apple && currentDessert === icecream) {
//   var appleicecream = document.querySelector('.Holder--result').innerHTML='<img src"' + images.mixes.apple.icecream + '">';
// }
