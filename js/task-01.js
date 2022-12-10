const navEl = document.querySelectorAll('.item');
console.log(navEl);

const numdOfCategories = navEl.length;
console.log("Number of categories:", numdOfCategories)

///////////////////////////

const findFirstH = navEl[0].firstElementChild.textContent;
console.log('Category:', findFirstH)

const findFirstHLength = navEl[0].lastElementChild.children.length;
console.log(findFirstHLength)


///////////////////////////////////////////////////
const findSecondH = navEl[1].firstElementChild.textContent;
console.log('Category:', findSecondH)

const findSecondHLength = navEl[1].lastElementChild.children.length;
console.log(findSecondHLength)


//////////////////////////////////////////////////////////
const findLastH = navEl[2].firstElementChild.textContent;
console.log('Category:', findLastH)


const findLastHLength = navEl[2].lastElementChild.children.length;
console.log(findLastHLength)



