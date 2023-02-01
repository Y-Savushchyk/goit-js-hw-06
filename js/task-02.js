const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsListRef = document.querySelector("#ingredients");
for (let i = 0; i < ingredients.length; i++) {
  const ingredientsItemRef = document.createElement("li");
  ingredientsItemRef.classList.add("item");
  ingredientsItemRef.textContent = ingredients[i];
  ingredientsListRef.prepend(ingredientsItemRef);
}
