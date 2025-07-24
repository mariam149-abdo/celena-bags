const container = document.querySelector('#slider');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const scrollAmount = 520;

nextBtn.addEventListener('click', () => {
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

const images = document.querySelectorAll('.slider-container img');
const colors = document.querySelectorAll('.colors span');
const productCard = document.getElementById('productCard');
const cardTitle = document.getElementById('cardTitle');
const cardDesc = document.getElementById('cardDesc');
const cardPrice = document.getElementById('cardPrice');
const cardImage = document.getElementById('cardImage');
const content =document.querySelector('.container .content');
images.forEach(img => {
  img.addEventListener('click', () => {
    cardTitle.textContent = img.dataset.title;
    cardDesc.textContent = img.dataset.desc;
    cardPrice.textContent = img.dataset.price;
    cardImage.src= img.src;
    productCard.style.display = 'block';
    productCard.scrollIntoView({ behavior: 'smooth' });
    img.style.display="none";
    content.style.display = 'none';
  });
});

colors.forEach(color => {
  color.addEventListener('click', () => {
    cardTitle.textContent = color.dataset.title;
    cardDesc.textContent = color.dataset.desc;
    cardPrice.textContent = color.dataset.price;
    productCard.style.display = 'block';
    cardImage.src = color.dataset.img;
    productCard.scrollIntoView({ behavior: 'smooth' });
    images.forEach(img => img.style.display = 'none');
  });
});

  const buyNowBtn = document.getElementById("buy-now-btn");
  const formContainer = document.getElementById("form-container");
  buyNowBtn.addEventListener("click", () => {
    formContainer.style.display = "block";
    buyNowBtn.style.display = "none";
    content.style.display = 'none';
    container.style.display='none';
    productCard.style.display='none';
  });
