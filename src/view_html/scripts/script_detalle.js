document.addEventListener("DOMContentLoaded", () => {
  // VIDEO
  const playBtn = document.getElementById("playButton");
  const verVideoCompleto = document.getElementById("verVideoCompleto");
  const videoModal = document.getElementById("videoModal");
  const closeVideo = document.getElementById("closeVideo");

  // MAPA
  const verMapaBtn = document.getElementById("verMapa");
  const mapaModal = document.getElementById("mapaModal");
  const closeMapa = document.getElementById("closeMapa");

  // Mostrar Video
  const openVideoModal = () => {
    videoModal.style.display = "flex";
  };

  playBtn?.addEventListener("click", openVideoModal);
  verVideoCompleto?.addEventListener("click", openVideoModal);

  closeVideo?.addEventListener("click", () => {
    videoModal.style.display = "none";
  });

  // Mostrar Mapa
  verMapaBtn?.addEventListener("click", () => {
    mapaModal.style.display = "flex";
  });

  closeMapa?.addEventListener("click", () => {
    mapaModal.style.display = "none";
  });

  // Cerrar modales haciendo clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      videoModal.style.display = "none";
    }
    if (e.target === mapaModal) {
      mapaModal.style.display = "none";
    }
  });
});

// MODAL: Ruta estimada
const verRuta = document.getElementById("verRuta");
const rutaModal = document.getElementById("rutaModal");
const closeRuta = document.getElementById("closeRuta");

verRuta.addEventListener("click", () => {
  rutaModal.style.display = "flex";
});

closeRuta.addEventListener("click", () => {
  rutaModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === rutaModal) {
    rutaModal.style.display = "none";
  }
});

// MODAL: Fotograma
const verFotograma = document.getElementById("verFotograma");
const fotogramaModal = document.getElementById("fotogramaModal");
const closeFotograma = document.getElementById("closeFotograma");

verFotograma.addEventListener("click", () => {
  fotogramaModal.style.display = "flex";
});

closeFotograma.addEventListener("click", () => {
  fotogramaModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === fotogramaModal) {
    fotogramaModal.style.display = "none";
  }
});

const generarReporteBtn = document.getElementById("generarReporte");
const modalGenerar = document.getElementById("modal-generar-reporte");

generarReporteBtn.addEventListener("click", () => {
  // Mostrar modal
  modalGenerar.style.display = "flex";

  // Esperar 6 segundos y luego descargar
  setTimeout(() => {
    modalGenerar.style.display = "none";

    // Crear y activar descarga
    const link = document.createElement("a");
    link.href = "docs/reporte_bitpraes.pdf"; // Ajusta según tu ruta
    link.download = "reporte_bitpraes.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, 6000);
});

const validarBtn = document.querySelector("button:last-of-type");
const modalVerificacion = document.getElementById("verificacionModal");

validarBtn.addEventListener("click", () => {
  const confirmar = confirm("¿Estás seguro de que los datos han sido validados correctamente?");

  if (confirmar) {
    const check = modalVerificacion.querySelector(".check");
    const circle = modalVerificacion.querySelector(".circle");
    const texto = modalVerificacion.querySelector(".verificado-texto");

    // Reiniciar animaciones
    check.style.animation = "none";
    circle.style.animation = "none";
    texto.style.animation = "none";

    check.offsetHeight;
    circle.offsetHeight;
    texto.offsetHeight;

    // Reset valores de trazo
    check.style.strokeDashoffset = "48";
    circle.style.strokeDashoffset = "157";
    texto.style.opacity = "0";

    // Mostrar modal
    modalVerificacion.classList.add("mostrar");

    // Disparar animaciones
    setTimeout(() => {
      circle.style.animation = "drawCircle 0.5s ease forwards";
      check.style.animation = "drawCheck 0.5s ease 0.2s forwards";
      texto.style.animation = "fadeText 1s ease-in-out 0.6s forwards";
    }, 50);

    // Ocultar modal después de 2.5 segundos
    setTimeout(() => {
      modalVerificacion.classList.remove("mostrar");
    }, 2500);
  } else {
    alert("Verifica los datos nuevamente.");
    window.location.href = "index.html";
  }
});
