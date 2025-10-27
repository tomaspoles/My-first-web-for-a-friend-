// Espera a que todo el contenido del HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona todos los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Selecciona todas las secciones de contenido
    const contentSections = document.querySelectorAll('.content-section');

    // Añade un "escuchador" de clics a cada enlace de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Previene el comportamiento por defecto del enlace (que es saltar)
            event.preventDefault();

            // Obtiene el ID de la sección a mostrar desde el atributo 'data-target'
            const targetId = link.getAttribute('data-target');
            
            // --- Ocultar todo ---
            // 1. Quita la clase 'active' de todas las secciones
            contentSections.forEach(section => {
                section.classList.remove('active');
            });

            // 2. Quita la clase 'active' de todos los enlaces
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            // --- Mostrar lo seleccionado ---
            // 3. Añade la clase 'active' a la sección correspondiente
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // 4. Añade la clase 'active' al enlace en el que se hizo clic
            link.classList.add('active');
        });
    });
});