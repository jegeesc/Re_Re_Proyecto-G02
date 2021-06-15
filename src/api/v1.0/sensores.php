<?php

$metodo = $_SERVER['REQUEST_METHOD'];
$id=$_GET['idCampo'];

session_name("loginUsuarios");
session_start();

if ($metodo === 'GET') {

    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";
    $dbNombre = "g02_usuarios";
    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);
    if (!$conn) {
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }
    $sql = "SELECT * FROM `sensor` WHERE `idCampos`='$id'";
    $result = mysqli_query($conn, $sql);//
    $resultado = array();
    $i = 0;
    while ($fila = mysqli_fetch_array($result)) {

        $respuesta = [];
        $respuesta["idSensor"] = $fila ["idSensor"];
        $respuesta["latitud"] = $fila ["latitud"];
        $respuesta["longitud"] = $fila ["longitud"];
        $resultado[$i] = $respuesta;
        $i++;



    }
    echo json_encode($resultado);

}