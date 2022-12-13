const btnChangeColor = document.querySelector('.change-color')
const spanColor = document.querySelector('.color')


btnChangeColor.addEventListener("click", () => {
  const hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  spanColor.textContent = hexColor;
  
  console.log('click');
  console.log(hexColor);
})



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
