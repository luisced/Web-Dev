<?php
$path= "../db/productos.json";
$productos = [];

if(file_exists($path)){
    $productos=json_decode(file_get_contents($path), TRUE);
}

array_push($productos, [
    "nombre" => $_POST["nombre"],
    "precio" => $_POST["precio"],
    "cantidad" => $_POST["cantidad"],
]);

var_dump($_POST);
var_dump($productos);

?>
