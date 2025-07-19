// Esperar al DOM
document.addEventListener('DOMContentLoaded', () => {
  const iniciarBtn = document.querySelector('.button.green');
  const reanalizarBtn = document.querySelector('.button.green-outline:nth-child(2)');
  const imprimirBtn = document.querySelector('.button.green-outline:nth-child(3)');
  const exportarBtn = document.querySelector('.button.green-outline:nth-child(4)');
  const ayudaBtn = document.querySelector('.button.green-outline:nth-child(5)');

  // Modales
  const modalCarga = document.getElementById('modalCarga');
  const modalExportar = document.getElementById('modalExportar');
  const closeCarga = document.getElementById('closeCarga');
  const closeExportar = document.getElementById('closeExportar');

  // ABRIR MODAL CARGA
  iniciarBtn.addEventListener('click', () => {
    alert("Por favor selecciona una imagen para iniciar la búsqueda.");
    modalCarga.style.display = 'flex';
  });

  reanalizarBtn.addEventListener('click', () => {
    alert("Reanalizando imagen. Asegúrate de cargar una imagen válida.");
    modalCarga.style.display = 'flex';
  });

  // IMPRIMIR
  imprimirBtn.addEventListener('click', () => {
    alert("Preparando archivo para impresión...");
    window.print();
  });

  // EXPORTAR
  exportarBtn.addEventListener('click', () => {
    modalExportar.style.display = 'flex';
  });

  // CERRAR MODALES
  closeCarga.addEventListener('click', () => {
    modalCarga.style.display = 'none';
  });

  closeExportar.addEventListener('click', () => {
    modalExportar.style.display = 'none';
  });

  // AYUDA
  ayudaBtn.addEventListener('click', () => {
    window.location.href = 'ayuda.html'; // Redirige al HTML de instrucciones
  });
});
