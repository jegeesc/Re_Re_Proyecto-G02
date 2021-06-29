<?php

//Importar las clases PHPMailer necesarias en el espacio global
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';


$mail = new PHPMailer(true);

try {
    //Definir las variables
//-------------------------------------------------
    $nombre = $_POST["firstname"];
    $apellido = $_POST["lastname"];
    $email = $_POST["mail"];
    $mensaje = $_POST["subject"];

    $body = "Nombre: " . $nombre ." <br> Apellidos: " . $apellido ." <br> Email: " . $email . "<br> Mensaje: " . $mensaje;
//-------------------------------------------------

    $mail->isSMTP();
    //Habilitar mensajes de SMTP
    //SMTP::DEBUG_OFF = off (para uso en producción)
    //SMTP::DEBUG_CLIENT = mensajes del cliente
    //SMTP::DEBUG_SERVER = mensajes del cliente y del servidor
    $mail->SMTPDebug = 0;
    //Servidor de correo
    $mail->Host = 'smtp.gmail.com';
    //Puerto – 25 para SMTP simple / 465 para SMTP sobre SSL / 587 para SMTP sobre TSL
    $mail->Port = 587;
    //Mecanismo de encriptado - STARTTLS o SMTPS
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    //Autentificación y opciones SMTP
    $mail->SMTPAuth = true;
    //Usuario para la autentificación SMTP – usar la dirección completa para gmail
    $mail->Username ='gti2021.g02@gmail.com' ;
    //Contraseña para la autentificación SMTP
    $mail->Password =  'GTIupv@grupo02';

    //Remitente del correo – no tiene por que ser la cuenta usada en el servidor
    //pero puede dar problemas con filtros de spam
    $mail->setFrom('gti2021.g02@gmail.com',  $nombre, $apellido );
    //Dirección de destino del mensaje
    $mail->addAddress('gti2021.g02@gmail.com');

    //Contentenido del mensaje
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = $email;
    $mail->Body    = $body;


    $mail->send();

    echo '<script>
        window.location.href = "/src/app/contacto_submit.html"
        </script>';

} catch (Exception $e) {
    echo "NO SE HA PODIDO ENVIAR EL MENSAJE. ERROR: {$mail->ErrorInfo}";

}



?>