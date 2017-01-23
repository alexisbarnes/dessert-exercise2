console.info('Welcome to the dessert maker v1.0.');

var currentFruit = " ";
var currentDessert = " ";

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
  currentFruit = "Apple";
});

var orange = document.querySelector('.Fruit--orange');
orange.addEventListener('click', function() {
  console.log('Orange clicked.');
  document.querySelector('.Holder--fruit').innerHTML= '<img src="' + images.fruits.orange + '">';
  // console.log(images.fruits.apple);
});

var banana = document.querySelector('.Fruit--banana');
banana.addEventListener('click', function() {
  console.log('Banana clicked.');
  document.querySelector('.Holder--fruit').innerHTML= '<img src="' + images.fruits.banana + '">';
  // console.log(images.fruits.apple);
});

var icecream = document.querySelector('.Dessert--icecream');
icecream.addEventListener('click', function() {
  console.log('Ice Cream clicked.');
  document.querySelector('.Holder--dessert').innerHTML= '<img src="' + images.desserts.icecream + '">';
  // console.log(images.fruits.apple);
  currentDessert = "IceCream";
});

var cake = document.querySelector('.Dessert--cake');
cake.addEventListener('click', function() {
  console.log('Cake clicked.');
  document.querySelector('.Holder--dessert').innerHTML= '<img src="' + images.desserts.cake + '">';
  // console.log(images.fruits.apple);
});

var pie = document.querySelector('.Dessert--smoothie');
pie.addEventListener('click', function() {
  console.log('Pie clicked.');
  document.querySelector('.Holder--dessert').innerHTML= '<img src="' + images.desserts.pie + '">';
  // console.log(images.fruits.apple);
});

if (currentFruit === "Apple" && currentDessert === "IceCream") {
  var appleicecream = document.querySelector('.Holder--result').innerHTML='<img src"' + images.mixes.apple.icecream + '">';
}
