document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("El elemento ya es visible");
    }
  });

  observer.observe(document.querySelector(".premium"));
});
