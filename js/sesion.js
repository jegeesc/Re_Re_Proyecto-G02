fetch('../bbdd/datosSesion.php', {
    method: "GET"
}).then(function (respuesta) {
    if (respuesta.ok) {
        console.log( respuesta.json())
        return respuesta.json()
    }
}).then(function (datos) {
    console.log(datos)
    document.getElementById("nombreUsuario").textContent = datos.nombre + " " + datos.apellidos;
})

