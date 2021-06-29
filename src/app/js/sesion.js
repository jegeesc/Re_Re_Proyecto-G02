fetch('../api/v1.0/datosSesion.php', {
    method: "GET"
}).then(function (respuesta) {
    if (respuesta.ok) {
        console.log( respuesta)
        return respuesta.json()
    }
}).then(function (datos) {
    console.log(datos)
    console.log(JSON.stringify(datos))
    document.getElementById("nombreUsuario").textContent = datos.nombre + " " + datos.apellidos;
})

