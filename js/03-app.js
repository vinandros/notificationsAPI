window.addEventListener("online", updateState);
window.addEventListener("offline", updateState);

function updateState() {
  if (navigator.onLine) {
    console.log("Estas conectado!!");
  } else {
    console.log("No estas conectado!!");
  }
}
