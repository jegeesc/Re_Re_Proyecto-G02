<?php
$metodo = $_SERVER['REQUEST_METHOD'];

session_start();

if ($metodo=='GET') {
    echo json_encode($_SESSION);
}
