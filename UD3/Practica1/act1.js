const botonStart = document.getElementById("btnStart");
const estado = document.getElementById("statusText");
const ultimoComando = document.getElementById("commandText");

if(!("speecgSysnthesis" in window) || !("SpeechSysnthesisUtterance" in window)){
    estado.textContent ="Este navegador no admite lectura de voz";
    botonStart.disabled = true;
}
if (!SpeechRecognition) {
  alert("Tu navegador no soporta la Web Speech API. Prueba con Google Chrome u Edge.");
} else {
  // Se crea el objeto que se encargará de escuchar y transcribir.
  const recognition = new SpeechRecognition();
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
}
  detener.addEventListener("click", () => {
    window.speechSynthesis.cancel();
    estado.textContent = "Lectura detenida.";
  });


if (!SpeechRecognition) {
  alert("Tu navegador no soporta la Web Speech API. Prueba con Google Chrome u Edge.");
} else {
  const recognition = new SpeechRecognition();
  recognition.lang = 'es-ES';
  recognition.continuous = true;
  recognition.interimResults = false;

  const btnStart = document.getElementById('btnStart');
  const statusText = document.getElementById('statusText');
  const commandText = document.getElementById('commandText');

  let isListening = false;


  btnStart.addEventListener('click', () => {
    if (!isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }
  });

  recognition.onstart = () => {
    isListening = true;
    statusText.textContent = "Estado: Escuchando...";
    btnStart.textContent = "Detener Micrófono";
  };

  recognition.onend = () => {
    isListening = false;
    statusText.textContent = "Estado: Inactivo";
    btnStart.textContent = "Activar Micrófono";
  };

  recognition.onresult = (event) => {
  
    const lastIndex = event.results.length - 1;


    const transcript = event.results[lastIndex][0].transcript.trim().toLowerCase();

    commandText.textContent = transcript;

  
    if (transcript.includes('rojo')) {
      document.body.style.backgroundColor = '#f8d7da';
    } else if (transcript.includes('verde')) {
      document.body.style.backgroundColor = '#d4edda';
    } else if (transcript.includes('azul')) {
      document.body.style.backgroundColor = '#cce5ff';
    } else if (transcript.includes('restablecer') || transcript.includes('blanco')) {
      document.body.style.backgroundColor = '#ffffff';
    }else if (transcript.includes('Modo Oscuro')) {
      document.body.style.backgroundColor = '#000';
      document.body.style.color = '#ffffff';
    }else if(transcript.includes('Mas grande')){
        document.body.style.fontSize ='2.0em'; 
    }
    else if(transcript.includes('Mas grande')){
        document.body.style.fontSize ='0.5em'; 
    }
  };

  recognition.onerror = (event) => {
    console.error("Error en el reconocimiento de voz:", event.error);
    statusText.textContent = "Error: " + event.error;
  };
}
