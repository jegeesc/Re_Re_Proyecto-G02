<?php

function agregarSondas($id_usuario,$id_sonda $nombre_sonda, $Lat, $Long, $temperatura, $humedad,
$salinidad,$iluminacion){

    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";
    $dbNombre = "g02_usuarios";
    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);

    if (!$conn) {
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }
    $sql = "INSERT INTO sonda VALUES ($id_usuario,$id_sonda $nombre_sonda, $Lat, $Long, $temperatura, $humedad,
$salinidad, $iluminacion)";
    $result = mysqli_query($conn, $sql);
}

$serverNombre = "localhost";
$userNombre = "root";
$password = "";
$dbNombre = "g02_usuarios";

$conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);

if (!$conn) {
    http_response_code(500);
    die("Error: " . mysqli_connect_error());
}

$sql = "INSERT INTO sonda VALUES (4, pa1, , 10.369425, 10.34586, 15.36, 43,66,soleado)";
$result = mysqli_query($conn, $sql);
?>