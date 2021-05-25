<?php

define('INCLUDE_PATH', '../php_mailer/');

$metodo = $_SERVER["REQUEST_METHOD"];
require_once INCLUDE_PATH.'SendMail.php';


if($metodo === 'POST') {

    $id_contacto = $_POST['id_contacto'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $mail = $_POST['mail'];
    $motivo = $_POST['motivo'];

    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";
    $dbNombre = "g02_usuarios";

    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);

    if (!$conn) {
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }

    $envio = EnviarCorreo($_POST['email'], $_POST['asunto'], '<p>'.$_POST['contenido'].'</p>');
    $sql = "INSERT INTO * FROM `contacto` WHERE `id_contacto`='$id_contacto' AND `nombre`='$nombre' AND `apellido`='$apellido' AND `mail`='$mail' AND `motivo`='$motivo' ";
    $result = mysqli_query($conn, $sql);

//-----------------------------------------------------------
    //MAIL
//-----------------------------------------------------------
    $salida = ['resultado' => $envio];
    header('Content-Type: application.json;charset=utf-8');
    header('Allow: POST');
    header('Access-Control-Allow-Origin: *');
    echo json_encode($salida);
//-----------------------------------------------------------
}