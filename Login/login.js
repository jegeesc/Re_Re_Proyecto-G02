//---------------------------------------------------------------
//login()
//---------------------------------------------------------------

document.querySelector("form").addEventListener("submit", function (event) {
    //console.log(event)
    event.preventDefault();
    let dataLogin = new FormData(event.target);
    console.log(dataLogin.get("usuario"));
    console.log(dataLogin.get("contrasenya"));

    fetch("http://localhost/bbdd/login.php", {
        method: "POST",
        body: dataLogin
    }).then(function (respuesta) {
        if (respuesta.ok) {
            //document.getElementById("output").textContent = "Bienvenido !"
            return respuesta.json();
        }
    }).then(function (datos) {
        if (dataLogin.get("usuario") == "user" && dataLogin.get("contrasenya") == "1234") {
            document.getElementById("outputLogin").textContent = "Bienvenido, " + datos.usuario + "!"
            setTimeout(function () {
                window.location = "../normie/normal.html";
            }, 0)
        } else {
            document.getElementById("outputLogin").textContent = "Bienvenido, " + datos.usuario + "!"
            setTimeout(function () {
                location.href = "../admin/admin.html"
            }, 0)
        }
    }).catch(function (error) {
        document.getElementById("outputLogin").textContent = "Los datos introducidos son incorrectos :/";
    });
    //para poner más usuarios se añadiría a continuación:

//Si no se cumple lo anterior sale un mensaje de error por pantalla
});


//----------------------------------------------------------------------
//  Función que se inicia al darle click en el "Recuperar Contraseña"
//----------------------------------------------------------------------

function clicEnRecuperar() {
    alert("Se ha enviado correctamente la petición para reestaurar la contraseña")
}
