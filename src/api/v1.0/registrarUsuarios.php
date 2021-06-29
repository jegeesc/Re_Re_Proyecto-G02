<?php

function registrarUsuario($id, $nombre, $apellidos, $email, $nSondas, $multiRecinto,
                          $tipoUsuario, $ubicacion, $contrasenya ){

    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";
    $dbNombre = "g02_usuarios";

    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);

    if (!$conn) {
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }

    $sql = "INSERT INTO datos_usuarios VALUES ($id, $nombre, $apellidos, $email, $nSondas, $multiRecinto, $tipoUsuario, $ubicacion)";
    $result = mysqli_query($conn, $sql);

    $sql2 = "INSERT INTO usuariosregistrados VALUES ($id, $nombre, $contrasenya, $tipoUsuario)";
    $result2 = mysqli_query($conn, $sql2);

}
//imp4

$serverNombre = "localhost";
$userNombre = "root";
$password = "";
$dbNombre = "g02_usuarios";

$conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);

if (!$conn) {
    http_response_code(500);
    die("Error: " . mysqli_connect_error());
}

$sql = "INSERT INTO datos_usuarios VALUES (5, Emilio, asdf, dasf@ga.com, 25, sí, user, gandia)";
$result = mysqli_query($conn, $sql);

$sql2 = "INSERT INTO usuariosregistrados VALUES (5, Emilio, 1234, user)";
$result2 = mysqli_query($conn, $sql2);

?>


