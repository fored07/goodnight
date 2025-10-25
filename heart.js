function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // random vị trí ngang
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.bottom = '0px';
  
  document.body.appendChild(heart);

  let bottom = 0;
  const speed = 2 + Math.random() * 2; // tốc độ bay
  const scale = 2 + Math.random() * 0.5;

  function animate() {
    bottom += speed;
    heart.style.bottom = bottom + 'px';
    heart.style.transform = `scale(${scale})`;

    if (bottom < window.innerHeight) {
      requestAnimationFrame(animate);
    } else {
      heart.remove();
    }
  }

  animate();
}

// Tạo tim liên tục
setInterval(createHeart, 10);
