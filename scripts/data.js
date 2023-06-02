const productsList = [];
productsList.push({
  name: "Luffy 5th gear figure",
  price: 120,
  imgSrc: "../images/luffy_toy_2.jpg",
  description:
    "Anime One Piece, Luffy 5th gear edition, One Piece collectible action figure.",
});
productsList.push({
  name: "Vans Black White",
  price: 140,
  imgSrc: "../images/zapatillas_negras.jpg",
});
productsList.push({
  name: "Gray Joggers",
  price: 80,
  imgSrc: "../images/jogger_gris.jpg",
});
productsList.push({
  name: "Adidas Soccer Ball",
  price: 100,
  imgSrc: "../images/pelota_de_futbol.jpg",
});
productsList.push({
  name: "Dove Shampoo",
  price: 15,
  imgSrc: "../images/shampoo_dove.jpg",
});
productsList.push({
  name: "Lottie Bag Black Pebble",
  price: 250,
  imgSrc: "../images/cartera_negra.jpg",
});
productsList.push({
  name: "Echo Dot 3rd Gen Alexa",
  price: 36,
  imgSrc: "../images/echo_dot_alexa.jpg",
});
productsList.push({
  name: "Airpods 3rd Gen",
  price: 120,
  imgSrc: "../images/airpods.jpg",
});
productsList.push({
  name: "Set of 2 dumbbells 10kg",
  price: 40,
  imgSrc: "../images/mancuernas.jpg",
});
productsList.push({
  name: "Headphone Pulse",
  price: 180,
  imgSrc: "../images/headphones.jpg",
});

// Como variable global poniendola en el objeto window
window.productsList = productsList;
