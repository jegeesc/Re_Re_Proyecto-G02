<?php

$metodo = $_SERVER['REQUEST_METHOD'];

//iniciamos una sesión de nombre "mapas"
session_name("loginUsuarios");
session_start();
$idUsuario = $_SESSION["id"];
if($metodo="GET"){


    $serverNombre ="localhost";
    $userName = "root";
    $password = "";
    $dbNombre = "g02_usuarios";

    //variable de conexion con los datos previamente declarados
    $cone = mysqli_connect($serverNombre,$userName,$password,$dbNombre);

    //en caso de fallo de conexion
    if(!$cone){
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }//if

    //peticion sql
    $sql = "SELECT * FROM `campos` WHERE `idUsuario`='$idUsuario'";

    //datos recibidos que concuerdan con las condiciones de la petición
    $result = mysqli_query($cone,$sql);

    $resultado = [];
    $nCampo=0;

    $resultado2 = [];
    $nEsquina=0;

    //guardamos los datos en una variable respuesta, y a su vez en un array, para asi alnacenar todos los campos
    while ($fila = mysqli_fetch_array($result)){
        $respuesta = [];
        $respuesta["idUsuario"] = $fila["idUsuario"];
        $respuesta["idCampo"] = $fila ["idCampos"];
        $respuesta["latitudCentro"] = $fila ["lat"];
        $respuesta["longitudCentro"] = $fila ["long"];
        $resultado[$nCampo] = $respuesta;
        $nCampo++;

        $aux = "idCampo".$nCampo;
        $_SESSION[$aux]=$respuesta["idCampo"];
        $_SESSION["latitudCentral".$respuesta["idCampo"]]=$respuesta["latitudCentro"];
        $_SESSION["longitudCentral".$respuesta["idCampo"]]=$respuesta["longitudCentro"];

        $sql2 = "SELECT * FROM `esquinas` WHERE `idCampo`='$_SESSION[$aux]'";
        $result2 = mysqli_query($cone,$sql2);


        while ($fila2 = mysqli_fetch_array($result2)){
            $respuesta2 = [];
            $respuesta2["idCampos"]=$fila2["idCampo"];
            $respuesta2["latitudEsquina"] = $fila2["latitud"];
            $respuesta2["longitudEsquina"] = $fila2["longitud"];
            $resultado2[$nEsquina] = $respuesta2;
            $nEsquina++;


            $_SESSION["esquina".$nEsquina]=$respuesta2;

        }//while
    }//while

    //peticion esquinas

    echo json_encode($resultado2);

}//if