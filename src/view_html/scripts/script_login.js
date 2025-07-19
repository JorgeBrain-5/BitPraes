document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const usuario = document.getElementById("usuario");
  const contrasena = document.getElementById("contrasena");
  const usuarioError = document.getElementById("usuarioError");
  const contrasenaError = document.getElementById("contrasenaError");
  const capsWarning = document.getElementById("capsWarning");
  const togglePassword = document.getElementById("togglePassword");

  // Mostrar/Ocultar contraseña
  togglePassword.addEventListener("click", () => {
    const type = contrasena.getAttribute("type") === "password" ? "text" : "password";
    contrasena.setAttribute("type", type);
    togglePassword.textContent = type === "text" ? "🙈" : "👁️";
  });

  // Detección de Bloq Mayús en cualquier momento
  const checkCapsLock = (e) => {
    if (e.getModifierState("CapsLock")) {
      capsWarning.classList.add("active");
    } else {
      capsWarning.classList.remove("active");
    }
  };

  document.addEventListener("keydown", checkCapsLock);
  document.addEventListener("keyup", checkCapsLock);

  // Validación del formulario
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // Validar usuario
    if (usuario.value.trim() === "") {
      usuarioError.textContent = "El usuario es obligatorio.";
      usuarioError.classList.add("active");
      valid = false;
    } else {
      usuarioError.classList.remove("active");
    }

    // Validar contraseña
    if (contrasena.value.trim() === "") {
      contrasenaError.textContent = "La contraseña es obligatoria.";
      contrasenaError.classList.add("active");
      valid = false;
    } else {
      contrasenaError.classList.remove("active");
    }

    if (valid) {
      loginForm.reset();
      capsWarning.classList.remove("active");
      usuarioError.classList.remove("active");
      contrasenaError.classList.remove("active");
      window.location.href = "index.html";
    }
  });

  // Modal recuperación
  const modal = document.getElementById("modalRecuperar");
  const abrirModal = document.getElementById("olvidaste");
  const cerrarModal = document.getElementById("cerrarModal");
  const recuperarForm = document.getElementById("recuperarForm");
  const modalUsuario = document.getElementById("modalUsuario");
  const modalCorreo = document.getElementById("modalCorreo");
  const modalUsuarioError = document.getElementById("modalUsuarioError");
  const modalCorreoError = document.getElementById("modalCorreoError");

  abrirModal.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
    recuperarForm.reset();
    modalUsuarioError.classList.remove("active");
    modalCorreoError.classList.remove("active");
  });

  recuperarForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let validModal = true;

    if (modalUsuario.value.trim() === "") {
      modalUsuarioError.textContent = "El usuario es obligatorio.";
      modalUsuarioError.classList.add("active");
      validModal = false;
    } else {
      modalUsuarioError.classList.remove("active");
    }

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoValido.test(modalCorreo.value.trim())) {
      modalCorreoError.textContent = "Ingrese un correo válido.";
      modalCorreoError.classList.add("active");
      validModal = false;
    } else {
      modalCorreoError.classList.remove("active");
    }

    if (validModal) {
      alert("La contraseña fue enviada a tu correo.");
      recuperarForm.reset();
      modal.style.display = "none";
    }
  });
});
