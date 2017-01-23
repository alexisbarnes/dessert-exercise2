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


var apple = document.querySelector('.Fruit--apple');
apple.addEventListener('click', function() {
  console.log('Apple clicked.');
  document.querySelector('.Holder--fruit').innerHTML= '<img src="' + images.fruits.apple + '">';
  // console.log(images.fruits.apple);
  apple = currentFruit;

  // if (apple == currentFruit) {
  //   console.log("Apple is the currentFruit");
  // }

});



var orange = document.querySelector('.Fruit--orange');
orange.addEventListener('click', function() {
  // console.log('Orange clicked.');
  document.querySelector('.Holder--fruit').innerHTML= '<img src="' + images.fruits.orange + '">';
  // console.log(images.fruits.apple);
  orange = currentFruit;
});

var banana = document.querySelector('.Fruit--banana');
banana.addEventListener('click', function() {
  // console.log('Banana clicked.');
  document.querySelector('.Holder--fruit').innerHTML= '<img src="' + images.fruits.banana + '">';
  // console.log(images.fruits.apple);
  banana = currentFruit;
});

var icecream = document.querySelector('.Dessert--icecream');
icecream.addEventListener('click', function() {
  // console.log('Ice Cream clicked.');
  document.querySelector('.Holder--dessert').innerHTML= '<img src="' + images.desserts.icecream + '">';
  // console.log(images.fruits.apple);
  icecream = currentDessert;

  if (apple == currentFruit && icecream == currentDessert) {
    // console.log("The current fruit is the apple, and the current dessert is ice cream.");
    var appleIce = document.querySelector('.Holder--result').innerHTML= '<img src="' + images.mixes.apple.icecream + '">';
  } else if (orange == currentFruit && icecream == currentDessert) {
    // console.log(images.mixes.orange.icecream);
    var orangeIce = document.querySelector('.Holder--result').innerHTML= '<img src"' + images.mixes.orange.icecream + '">';
    console.log(orangeIce);
    // console.log(currentFruit);
    // console.log(currentDessert);
  }else if (banana == currentFruit && icecream == currentDessert) {
    var bananaIce = document.querySelector('.Holder--result').innerHTML = '<img src"' + images.mixes.banana.icecream + '">';
    console.log(bananaIce);
    // console.log(currentFruit);
    // console.log(currentDessert);
  }

});

var cake = document.querySelector('.Dessert--cake');
cake.addEventListener('click', function() {
  console.log('Cake clicked.');
  document.querySelector('.Holder--dessert').innerHTML= '<img src="' + images.desserts.cake + '">';
  // console.log(images.fruits.apple);
  cake = currentDessert;

  if (apple == currentFruit && cake == currentDessert) {
    var appleCake = document.querySelector('.Holder--result').innerHTML = '<img src="' + images.mixes.apple.cake + '">';
  }else if (orange == currentFruit && cake == currentDessert) {
    var orangeCake = document.querySelector('.Holder--result').innerHTML = '<img src="' + images.mixes.orange.cake + '">';
  }else if (banana == currentFruit && cake == currentDessert) {
    var bananaCake = document.querySelector('.Holder--result').innerHTML = '<img src"' + images.mixes.banana.cake + '">';
  }
});

var pie = document.querySelector('.Dessert--smoothie');
pie.addEventListener('click', function() {
  console.log('Pie clicked.');
  document.querySelector('.Holder--dessert').innerHTML= '<img src="' + images.desserts.pie + '">';
  // console.log(images.fruits.apple);
  pie = currentDessert;

  if (apple == currentFruit && pie == currentDessert) {
    var applePie = document.querySelector('.Holder--result').innerHTML= '<img src="' + images.mixes.apple.pie + '">';
  } else if (orange == currentFruit && pie == currentDessert) {
    var orangePie = document.querySelector('.Holder--result').innerHTML= '<img src="' + images.mixes.orange.pie + '">';
  } else if (banana == currentFruit && pie == currentDessert) {
    var bananaPie = document.querySelector('.Holder--result').innerHTML = '<img src="' + images.mixes.banana.pie + '">';
  }
});

var clear = document.querySelector('.Reset');
clear.addEventListener('click', function() {
  currentFruit == null;
  currentDessert == null;
  document.querySelector('.Holder--fruit').innerHTML= "";
  document.querySelector('.Holder--dessert').innerHTML = "";
  document.querySelector('.Holder--result').innerHTML = "";
});
// if (currentFruit == apple && currentDessert === icecream) {
//   var appleicecream = document.querySelector('.Holder--result').innerHTML='<img src"' + images.mixes.apple.icecream + '">';
// }
