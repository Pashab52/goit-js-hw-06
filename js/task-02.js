const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.getElementById("ingredients");

// Варіант №1
const createItems = ingredients.map((ingredient) => {
  const listItems = document.createElement("li");
  listItems.textContent = ingredient;
  listItems.classList.add("item");
  // console.log(listItems);
  return listItems;
});

// console.log(createItems);
list.append(...createItems);

// Варіант №2 (хотів спробувати редюс,
// ніби вийшло, але спочатку хотів додавати
// не конкатом, а пушом, але воно не працювало...не розумію чому)

// const createItems = ingredients.reduce(
//   (acc, ingredient) => {
//     const listItems = document.createElement("li");
//     listItems.textContent = ingredient;
//     listItems.classList.add("item");
//     return acc.concat(listItems);
//   },
//   []
// );
// console.log(createItems);
// list.append(...createItems);
