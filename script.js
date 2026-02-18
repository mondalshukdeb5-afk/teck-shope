
  function openPreview(img, title, desc = "") {

    // 📱 MOBILE → open new page
    if (window.innerWidth <= 600) {
      const url =
        "preview.html" +
        "?img=" + encodeURIComponent(img) +
        "&title=" + encodeURIComponent(title) +
        "&desc=" + encodeURIComponent(desc);

      window.location.href = url;
      return;
    }

    // 💻 DESKTOP → side preview panel
    document.getElementById("previewImage").src = img;
    document.getElementById("previewTitle").innerText = title;
    document.getElementById("previewDesc").innerText = desc;

    document.getElementById("overlay").classList.add("active");
    document.getElementById("previewPanel").classList.add("active");
  }

  function closePreview() {
    document.getElementById("overlay").classList.remove("active");
    document.getElementById("previewPanel").classList.remove("active");
  }

  const reveals = document.querySelectorAll(".project");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

reveals.forEach((card, index) => {
  card.classList.add("reveal");

  // optional: alternate left/right
  if(index % 2 === 1){
    card.classList.add("right");
  }

  observer.observe(card);
});
