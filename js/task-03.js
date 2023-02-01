const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
for (const image of images) {
  const galleryListRef = document.querySelector(".gallery");

  for (let i = 0; i < images.length; i++) {
    const galleryItemRef = document.createElement("li");
    const galleryImgRef = document.createElement("img");
    galleryImgRef.setAttribute("url", image.url);
    galleryImgRef.setAttribute("alt", image.alt);
    galleryItemRef.prepend(galleryImgRef);
    galleryListRef.prepend(galleryItemRef);
    break;
  }
}
