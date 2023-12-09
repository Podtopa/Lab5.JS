const images = ['1.jpg', '2.jpg', '3.jpg',];

function openModal(index) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  modalImg.src = images[index];
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  images.forEach((imageName, index) => {
    const img = document.createElement('img');
    img.src = imageName;
    img.alt = `Зображення ${index + 1}`;
    img.addEventListener('click', () => openModal(index));
    body.appendChild(img);
  });

  const modal = document.getElementById('modal');
  modal.addEventListener('click', closeModal);
  const modalImg = document.getElementById('modalImg');
  modalImg.addEventListener('click', (event) => event.stopPropagation());
});
