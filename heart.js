<script>
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s"; // tốc độ khác nhau
  heart.style.transform = `rotate(${Math.random() * 90}deg)`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 300); // tạo tim mới mỗi 0.3s
</script>
