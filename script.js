function cambiarImagen(direccion, carruselId) {
  const carrusel = document.getElementById(carruselId);
  const contenedor = carrusel.querySelector('.carrusel-contenedor');
  const imagenes = contenedor.querySelectorAll('img');

  // Identificar el índice de la imagen actual visible
  let indexActual = [...imagenes].findIndex(
    (img) => img.style.display === 'block' || !img.style.display
  );

  // Asegurarte de que el índice actual esté dentro del rango válido
  if (indexActual === -1) indexActual = 0;

  // Ocultar la imagen actual
  imagenes[indexActual].style.display = 'none';

  // Calcular el nuevo índice
  let nuevoIndex = indexActual + direccion;

  if (nuevoIndex < 0) {
    // Si llegamos al inicio, volver al final
    nuevoIndex = imagenes.length - 1;
  } else if (nuevoIndex >= imagenes.length) {
    // Si llegamos al final, volver al inicio
    nuevoIndex = 0;
  }

  // Mostrar la nueva imagen
  imagenes[nuevoIndex].style.display = 'block';
}

// Inicializar para mostrar solo la primera imagen de cada carrusel
document.querySelectorAll('.carrusel-contenedor').forEach((contenedor) => {
  const imagenes = contenedor.querySelectorAll('img');
  imagenes.forEach((img, index) => {
    img.style.display = index === 0 ? 'block' : 'none';
  });
});
