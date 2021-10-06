const userAge = document.querySelector('.user-age');
const catAge = document.querySelector('.cat-age');
const password = document.querySelector('.password');

let text;
userAge.addEventListener('input', () => {
    text = Number(userAge.value);

    catAge.textContent = window.catCalculator.getCatAgeString(text)
})
