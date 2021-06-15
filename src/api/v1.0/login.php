<?php

$metodo = $_SERVER["REQUEST_METHOD"];


if($metodo === 'POST') {

    $usuario = $_POST['usuario'];
    $contrasenya = $_POST['contrasenya'];

    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";
    $dbNombre = "g02_usuarios";

    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);

    if (!$conn) {
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }

    $sql = "SELECT * FROM `usuariosregistrados` WHERE `usuario`='$usuario' AND `contrasenya`='$contrasenya' ";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        session_name("loginUsuarios");
        session_start();
        while ($fila = mysqli_fetch_assoc($result)) {

            $respuesta = [];
            $respuesta["id"] = $fila["id"];
            $respuesta["usuario"] = $fila["usuario"];
            $respuesta["tipoUsuario"] = $fila["tipoUsuario"];

            $_SESSION["id"] = $fila["id"];
            $_SESSION["usuario"] = $fila["usuario"];
            $_SESSION["tipoUsuario"] = $fila["tipoUsuario"];

            header('Content-Type: application/json');
            echo json_encode($respuesta);
        }
    } else {
        header("Location: login.html?errorusuario=si");
        http_response_code(401);
        die();
    }
}
else if($metodo === 'GET') {
    echo json_encode($_SESSION);
}


