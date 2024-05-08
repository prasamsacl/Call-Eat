 
$(document).ready(function() {
    // Espera a que el documento esté completamente cargado

    // Selecciona el botón con el ID "cambiarColor"
    $('#cambiarColor').click(function() {
        // Cuando se hace clic en el botón
        // Cambia el color de fondo del elemento con el ID "elemento" a rojo
        $('#elemento').css('background-color', 'red');
    });
});
