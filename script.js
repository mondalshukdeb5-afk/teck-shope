
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
