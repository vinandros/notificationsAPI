const openFullScreenBtn = document.querySelector("#abrir-pantalla-completa");
const closeFullScreenBtn = document.querySelector("#salir-pantalla-completa");

openFullScreenBtn.addEventListener("click", openFullScreen);
closeFullScreenBtn.addEventListener("click", closeFullScreen);

function openFullScreen() {
  const target = document.documentElement; // puede ser imagen o video
  target.requestFullscreen();
}

function closeFullScreen() {
  document.exitFullscreen();
}
