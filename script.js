const rate = document.querySelectorAll('.rate');
const submitBtn = document.querySelector('button');
const goBack = document.querySelector('#back-button');
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thank-you-card');
const selectedRate = document.querySelector('span');

let rateValue = 0

submitBtn.disabled = true;
submitBtn.style.cursor = 'not-allowed'

for (let element of rate) {
    element.addEventListener('click', () => {
        rate.forEach(el => el.classList.remove('selected'))
        rate.forEach(el => el.classList.remove('rating-animation'))
        element.classList.toggle('selected')
        element.classList.toggle('rating-animation')
        rateValue = element.textContent
        submitBtn.disabled = false
        submitBtn.style.cursor = 'pointer'
    })
}

submitBtn.addEventListener('click', () => {
    ratingCard.style.display = 'none'
    thankYouCard.style.display = 'flex'
    selectedRate.textContent = rateValue
}
)

goBack.addEventListener('click', () => {
    ratingCard.style.display = 'flex'
    thankYouCard.style.display = 'none'
    rateValue = 0
    rate.forEach(el => el.classList.remove('selected'))
    rate.forEach(el => el.classList.remove('rating-animation'))
    submitBtn.disabled = true;
    submitBtn.style.cursor = 'not-allowed'
})