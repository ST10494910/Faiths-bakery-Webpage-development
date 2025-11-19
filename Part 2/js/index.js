const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery img").forEach(img => {
	img.addEventListener("click", () => { 
	lightboxImg.src = img.dataset.full;
	lightbox.style.display = "flex";
	});
});

closeBtn.addEventListener("click",() => {
	lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
	if (e.target === lightbox) {
		lightbox.style.display ="none";
	}
});