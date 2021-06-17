<?php
$metodo = $_SERVER['REQUEST_METHOD'];

if ($metodo == 'GET') {
    session_name("loginUsuarios");
    session_start();

    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";
    $dbNombre = "g02_usuarios";

    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);

    if (!$conn) {
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }

    $sql = "SELECT * FROM `datos_usuarios` WHERE `id`= '$_SESSION[id]'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {

        while ($fila = mysqli_fetch_assoc($result)) {

            $respuesta = [];
            $respuesta["id"] = $fila["id"];
            $respuesta["nombre"] = $fila["nombre"];
            $respuesta["apellidos"] = $fila["apellidos"];

            $_SESSION["nombre"] = $fila["nombre"];
            $_SESSION["apellidos"] = $fila["apellidos"];

            header('Content-Type: application/json');
            echo json_encode($_SESSION);
        }
    } else {

        http_response_code(401);
        die();
    }

}
/*
    die();
}
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
    unset($_SESSION["id"]);
    unset($_SESSION["usuario"]);
    unset($_SESSION["tipoUsuario"]);
}
header('Location: ../index.html');
session_destroy();*/



