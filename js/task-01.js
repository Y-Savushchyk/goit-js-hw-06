/*step 1*/
const categoriesListRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesListRef.length}`);

/*step 2*/
const categorieListRef = document.querySelectorAll("#categories ul");
const categorieTitleRef = document.querySelectorAll("h2");

for (let i = 0; i < categoriesListRef.length; i += 1) {
  console.log(`Category: ${categorieTitleRef[i].textContent}`);
  console.log(`Elements: ${categorieListRef[i].children.length}`);
  /**/