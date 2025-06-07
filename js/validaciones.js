document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contacto');
    const telefonoInput = document.getElementById('telefono');
  
    // Validar entrada en tiempo real para el campo de teléfono
    telefonoInput.addEventListener('input', () => {
      // Permitir solo números y eliminar ceros iniciales
      telefonoInput.value = telefonoInput.value.replace(/[^1-9][^0-9]/g, '').replace(/^0+/, '');
    });
  
    // Validar el formulario al enviarlo
    form.addEventListener('submit', (event) => {
      const telefonoValue = telefonoInput.value;
  
      // Validar que el teléfono tenga al menos 6 dígitos
      if (telefonoValue.length < 6) {
        event.preventDefault(); // Evitar el envío si hay errores
        event.stopPropagation();
        telefonoInput.setCustomValidity('El teléfono debe tener al menos 6 dígitos y no puede comenzar con 0.');
      } else {
        telefonoInput.setCustomValidity(''); // Restablecer el estado de validación
      }
  
      if (!form.checkValidity()) {
        event.preventDefault(); // Evitar el envío si hay errores
        event.stopPropagation();
      }
  
      form.classList.add('was-validated'); // Añadir clases de validación de Bootstrap
    });
  });