<?php

    $path="../db/productos.json"
    $productos=[];
    if(file_exists($path)){
        $productos =json_encode(file_get_contents($path), TRUE);
    }

    array_push($productos,[
        "nombre"=>$_POST['nombre'],
        "precio"=>$_POST['precio'],
        "cantidad"=>$_POST['cantidad'],
    ]);

    file_put_contents($path, json_encode($productos));
?>

<script>
    location.href="../misproductos.php"
</script>
