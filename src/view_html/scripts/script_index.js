document.addEventListener('DOMContentLoaded', () => {
  const iniciarBtn = document.querySelector('.button.green');
  const reanalizarBtn = document.querySelector('.button.green-outline:nth-child(2)');
  const imprimirBtn = document.querySelector('.button.green-outline:nth-child(3)');
  const exportarBtn = document.querySelector('.button.green-outline:nth-child(4)');
  const ayudaBtn = document.querySelector('.button.green-outline:nth-child(5)');

  const modalCarga = document.getElementById('modalCarga');
  const modalExportar = document.getElementById('modalExportar');
  const closeCarga = document.getElementById('closeCarga');
  const closeExportar = document.getElementById('closeExportar');
  const aceptarCarga = document.getElementById('aceptarCarga');
  const exportarArchivo = document.getElementById('exportarArchivo');
  const inputImagen = document.getElementById('inputImagen');
  const dropArea = document.querySelector('.drop-area');
  const fileNameDisplay = document.getElementById('fileName');

  // Mostrar nombre del archivo
  function mostrarNombreArchivo(file) {
    if (file) {
      fileNameDisplay.textContent = `Archivo: ${file.name}`;
    } else {
      fileNameDisplay.textContent = '';
    }
  }

  // Abrir modal carga
  const abrirModalCarga = () => {
    modalCarga.style.display = 'flex';
  };

  // INICIAR BÚSQUEDA
  iniciarBtn.addEventListener('click', () => {
    alert("Por favor selecciona una imagen para iniciar la búsqueda.");
    abrirModalCarga();
  });

  // REANALIZAR
  reanalizarBtn.addEventListener('click', () => {
    alert("Reanalizando imagen. Asegúrate de cargar una imagen válida.");
    abrirModalCarga();
  });

  // ACEPTAR CARGA
  aceptarCarga.addEventListener('click', () => {
    if (inputImagen.files.length > 0) {
      alert("Analizando imagen...");
    } else {
      alert("No se ha seleccionado ninguna imagen.");
    }
    inputImagen.value = "";
    fileNameDisplay.textContent = "";
    modalCarga.style.display = 'none';
  });

  // EXPORTAR
  exportarBtn.addEventListener('click', () => {
    modalExportar.style.display = 'flex';
  });

  // ACEPTAR EXPORTAR
  exportarArchivo.addEventListener('click', () => {
    const tipo = document.getElementById('tipoExportacion').value;
    alert(`Exportando resultados como: ${tipo}`);
    document.getElementById('tipoExportacion').selectedIndex = 0;
    modalExportar.style.display = 'none';
  });

  // IMPRIMIR
  imprimirBtn.addEventListener('click', () => {
    alert("Preparando archivo para impresión...");
    window.print();
  });

  // CERRAR MODALES
  closeCarga.addEventListener('click', () => {
    modalCarga.style.display = 'none';
    inputImagen.value = "";
    fileNameDisplay.textContent = "";
  });

  closeExportar.addEventListener('click', () => {
    modalExportar.style.display = 'none';
    document.getElementById('tipoExportacion').selectedIndex = 0;
  });

  ayudaBtn.addEventListener('click', () => {
    window.location.href = 'ayuda.html';
  });

  // Manejador input
  inputImagen.addEventListener('change', () => {
    mostrarNombreArchivo(inputImagen.files[0]);
  });

  // DRAG & DROP
  dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('highlight');
  });

  dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('highlight');
  });

  dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.classList.remove('highlight');
    const file = e.dataTransfer.files[0];
    if (file) {
      inputImagen.files = e.dataTransfer.files;
      mostrarNombreArchivo(file);
    }
  });
});
