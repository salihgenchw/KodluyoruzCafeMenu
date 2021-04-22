const menu = [
  {
    id: 1,
    title: "Cappuccino",
    category: "Cappuccinos",
    price: 10.99,
    img:
      "https://globalassets.starbucks.com/assets/5c515339667943ce84dc56effdf5fc1b.jpg?impolicy=1by1_wide_1242",
    desc: `Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.`,
  },
  {
    id: 2,
    title: "Caffè Americano",
    category: "Americanos",
    price: 7.99,
    img:
      "https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242",
    desc: `Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance. Pro Tip: For an additional boost, ask your barista to try this with an extra shot. `,
  },
  {
    id: 3,
    title: "White Chocolate Mocha",
    category: "Mochas",
    price: 8.99,
    img:
      "https://globalassets.starbucks.com/assets/4b621e63f6ba4c19a8618055284eca8d.jpg?impolicy=1by1_wide_1242",
    desc: `Our signature espresso meets white chocolate sauce and steamed milk, and then is finished off with sweetened whipped cream to create this supreme white chocolate delight.`,
  },
  {
    id: 4,
    title: "Caffè Latte",
    category: "Lattes",
    price: 5.99,
    img:
      "https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?impolicy=1by1_wide_1242",
    desc: `Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk-forward warm-up.`,
  },
  {
    id: 5,
    title: "Pistachio Latte",
    category: "Lattes",
    price: 12.99,
    img:
      "https://globalassets.starbucks.com/assets/21fd405326b742b190667e5301e94f68.jpg?impolicy=1by1_wide_1242",
    desc: `Cozy flavors of sweet pistachio and rich brown butter paired with espresso and steamed milk, specially crafted to keep you comforted and energized in the new year. `,
  },
  {
    id: 6,
    title: "Reserve® Dark Chocolate Mocha",
    category: "Mochas",
    price: 9.99,
    img:
      "https://globalassets.starbucks.com/assets/ce6342b5aeea4607a0e866057e3b5a4c.jpg?impolicy=1by1_wide_1242",
    desc: `Our small-lot Starbucks Reserve® espresso combined with cocoa, ground chocolate and topped with steamed milk delivers a brilliant combination of sweetness.`,
  },
  {
    id: 7,
    title: "Caffè Mocha",
    category: "Mochas",
    price: 15.99,
    img:
      "https://globalassets.starbucks.com/assets/f4ec500b34624242b15c2d29e53f3c48.jpg?impolicy=1by1_wide_1242",
    desc: `Our rich, full-bodied espresso combined with bittersweet mocha sauce and steamed milk, then topped with sweetened whipped cream. The classic coffee drink that always sweetly satisfies.`,
  },
  {
    id: 8,
    title: "Flat White",
    category: "Flat Whites",
    price: 12.99,
    img:
      "https://www.starbucks.co.th/stb-media/2020/08/14.Flat-white1080.png",
    desc: `Smooth ristretto shots of espresso get the perfect amount of steamed whole milk to create a not-too-strong, not-too-creamy, just-right flavor.`,
  },
  {
    id: 9,
    title: "Honey Almondmilk Flat White",
    category: "Flat Whites",
    price: 3.99,
    img:
      "https://globalassets.starbucks.com/assets/77801559b72b469583f4d484adc1bfa7.jpg?impolicy=1by1_wide_1242",
    desc: `This flat white intentionally pairs almondmilk and Starbucks® Blonde Espresso Roast with a hint of honey, making a perfect amount of creamy, nutty sweetness.`,
  },
];

const butonlar = document.querySelector('.btn-container');

var firstcategory = menu.map((category) => category.category);
let CategoryName = [...new Set(firstcategory)];


CategoryName.map(category => {
  butonlar.innerHTML +=  `<button type="button" class="btn btn-outline-success btn-lg me-2">${category}</button>`
});














