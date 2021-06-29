document.querySelector("form").addEventListener("submit", function (event) {
    //console.log(event)
    alert("Solicitud enviada");
    event.preventDefault();
    let dataRegister = new FormData(event.target);

    fetch("../api/v1.0/prueba.php", {
        method: "POST",
        body: dataRegister
    }).then(function (respuesta) {
        if (respuesta.ok) {
            //document.getElementById("output").textContent = "Bienvenido !"
            return respuesta.json();
        }
    }).then(function (datos) {
        console.log(datos);
    });
});


