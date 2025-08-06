const container = document.querySelector('#slider');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const scrollAmount =slider.clientWidth;

nextBtn.addEventListener('click', () => {
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

const images = document.querySelectorAll('.slider-container img');
const productCard = document.getElementById('productCard');
const cardTitle = document.getElementById('cardTitle');
const cardDesc = document.getElementById('cardDesc');
const cardPrice = document.getElementById('cardPrice');
const cardImage = document.getElementById('cardImage');
const content = document.querySelector('.container .content');
const pro = document.getElementById('product-container');
images.forEach(img => {
  img.addEventListener('click', () => {
    if(!img.dataset.title)return;
    cardTitle.textContent = img.dataset.title;
    cardDesc.textContent = img.dataset.desc;
    cardPrice.textContent = img.dataset.price;
    cardImage.src = img.src;
    pro.style.display = 'block';
    productCard.scrollIntoView({ behavior: 'smooth' });
    content.style.display='none';
  });
});

const buyButtons = document.querySelectorAll('#buy-now-btn, #buy-now');
const formContainer = document.getElementById("form-container");

buyButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    formContainer.style.display = "block";
  });
});

let days = 0;
let hours = 2;
let minutes = 60;
let seconds = 60;

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCounter() {
  if (seconds > 0) {
    seconds--;
  } else {
    if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else if (hours > 0) {
      hours--;
      minutes = 59;
      seconds = 59;
    } else if (days > 0) {
      days--;
      hours = 23;
      minutes = 59;
      seconds = 59;
    } else {
      clearInterval(timer);
      return;
    }
  }

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
  setTimeout(updateCounter, 500);
}

updateCounter();

