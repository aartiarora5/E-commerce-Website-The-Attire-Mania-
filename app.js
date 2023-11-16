// Select the slider wrapper and menu items
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

// Define an array of products with their details
const products = [
  {
    id: 1,
    title: "Straight Fit Denim",
    price: 30,
    colors: [
      {
        code: "#00008B",
        img: "./image/Denim1.jpg",
      },
      {
        code: "#ADD8E6",
        img: "./image/Denim2.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Dresses",
    price: 19,
    colors: [
      {
        code: "Black",
        img: "./image/Dress2.jpg",
      },
      {
        code: "#800020",
        img: "./image/Dress1.jpeg",
      },
    ],
    },
   
  {
    id: 3,
    title: "Tops",
    price: 15,
    colors: [
      {
        code: "Black",
        img: "./image/Top1.jpg",
      },
      {
        code: "White",
        img: "./image/Top2.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Jacket",
    price: 27,
    colors: [
      {
        code: "Red",
        img: "./image/Jacket1.jpg",
      },
      {
        code: "Black",
        img: "./image/Jacket2.jpg",
      },
    
    ],
  },
  {
    id: 5,
    title: "Sweater",
    price: 35,
    colors: [
      {
        code: "Red",
        img: "./image/Sweater2.jpg",
      },
      {
        code: "Green",
        img: "./image/Sweater1.jpg",
      },
    ],
  },
];

// Initialize the chosen product with the first product in the array
let chosenProduct = products[0];

// Select elements related to the current product display
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Iterate through each menu item
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide by updating the wrapper's transformation
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Update the chosen product based on the selected menu item
    chosenProduct = products[index];

    // Update the text and image of the current product
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "$" + chosenProduct.price;
    currentProductImg.src = chosenProduct.colors[0].img;

    // Update the background color of color options
    currentProductColors.forEach((colorOption, i) => {
      colorOption.style.backgroundColor = chosenProduct.colors[i].code;
    });
  });
});

// Add event listeners to each color option
currentProductColors.forEach((colorOption, index) => {
  colorOption.addEventListener("click", () => {
    // Change the displayed image when a color option is clicked
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

// Add event listeners to each size option
currentProductSizes.forEach((sizeOption, index) => {
  sizeOption.addEventListener("click", () => {
    // Update the background color and text color for size options
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    sizeOption.style.backgroundColor = "black";
    sizeOption.style.color = "white";
  });
});

// Select the product purchase button, payment container, and close button
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// Add an event listener to display the payment container when the product button is clicked
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

// Add an event listener to hide the payment container when the close button is clicked
close.addEventListener("click", () => {
  payment.style.display = "none";
});
