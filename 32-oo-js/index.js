const rectangleList = document.querySelector("#rectangle-list");
const newRectangleForm = document.querySelector("#create-rectangle-form");

newRectangleForm.addEventListener("submit", e => {
  e.preventDefault();
  const height = e.target.width.value;
  const width = e.target.height.value;
  let rectangle = new Rectangle(width, height);
  rectangleList.append(rectangle.render());
});
