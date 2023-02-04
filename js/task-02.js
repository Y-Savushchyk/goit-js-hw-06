const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");
/*
const itemRef = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const ingredientsItemRef = document.createElement("li");
  ingredientsItemRef.classList.add("item");
  ingredientsItemRef.textContent = ingredients[i];
  itemRef.push(ingredientsItemRef);
}
ingredientsListRef.append(...itemRef);
*/
const itemRef = ingredients.map((ingredient) => {
  const ingredientsItemRef = document.createElement("li");
  ingredientsItemRef.classList.add("item");
  ingredientsItemRef.textContent = ingredient;
  return ingredientsItemRef;
});
ingredientsListRef.append(...itemRef);
