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
