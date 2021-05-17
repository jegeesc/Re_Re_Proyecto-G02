fetch('../bbdd/datosSesion.php', {
    method: "GET"

}).then(function (respuesta) {
    if (respuesta.ok) {
        return respuesta.json();
    }
}).then(function (datos) {
    document.getElementById("nombreUsuario").textContent = datos.usuario;
});