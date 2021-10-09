const userAge = document.querySelector('.user-age');
const catAge = document.querySelector('.cat-age');
const password = document.querySelector('.password');

let text;
userAge.addEventListener('input', () => {
    text = Number(userAge.value);

    catAge.textContent = catCalculator.getCatAgeString(text)
})
password.addEventListener('input', (e) => {
    const target = e.target.value
    const passwordText = zxcvbn(target);
    document.querySelector('.password-text').textContent = passwordText.score
    console.log(passwordText)
})

$( '.jqwery' ).append( $( '<button>Кнопка</button>' ) )
$('button').addClass('button')
$('.button').on('click', () => {
    console.log('click')
})