const exit = document.querySelector("#salida");
const microfono = document.querySelector("#microfono");

microfono.addEventListener("click", executeSpeechAPI);

function executeSpeechAPI() {
  const SpeechRecognition = webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.start();

  recognition.onstart = function () {
    exit.classList.add("mostrar");
    exit.textContent = "Escuchando....";
  };

  recognition.onspeechend = function () {
    exit.textContent = "Se dejo de grabar....";
    recognition.stop();
  };

  recognition.onresult = function (e) {
    const { confidence, transcript } = e.results[0][0];
    const speech = document.createElement("p");
    speech.innerHTML = `
        Grabado: ${transcript}
        `;

    const seguridad = document.createElement("p");
    seguridad.innerHTML = `
        Seguridad: ${parseInt(confidence * 100)} %
        `;
    exit.appendChild(speech);
    exit.appendChild(seguridad);
  };
}
