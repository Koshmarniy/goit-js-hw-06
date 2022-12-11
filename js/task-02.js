const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ul = document.querySelector('#ingredients')

const elements = [];
for (let i = 0; i <ingredients.length; i += 1) {
  const setLi = ingredients[i];

  const li = document.createElement('li');
  li.classList.add('site-nav__item');
  li.textContent = setLi;
  elements.push(li);
}
ul.append(...elements)


// const li1 = document.createElement('li1')
// li1.textContent = 'Potatoes'
// li1.classList.add('site-nav__item')

// const li2 = document.createElement('li2')
// li2.textContent = 'Mushrooms'
// li2.classList.add('site-nav__item')

// ul.append(li1, li2)
// console.log(ul)

