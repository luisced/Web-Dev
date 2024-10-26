<?php

?>

<!DOCTYPE html>
<html>
    <head>
        <title>PHP</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <style>
        .container{
            height: 80vh;
        }
        .input-group-text{
            width: 100px;
        }
    </style>
    <body> 
    <?php include "components/navbar.php"; ?>
        <div class="container d-flex">
            <div class="m-auto card p-3">
                <h2 class="text-center">Nuevo producto</h2>
                <hr>
                <form action="components/guardar.php" method="post">
                    <div class="input-group mb-3">
                        <span class="input-group-text">Nombre:</span>
                        <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre del producto">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Precio:</span>
                        <input type="text" class="form-control" id="precio" name="precio" placeholder="Precio del producto">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Cantidad:</span>
                        <input type="text" class="form-control" id="cantidad" name="cantidad" placeholder="Cantidad en inventario">
                    </div>
                    <div class="d-flex">
                        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal-confirmar">Cancelar</button>
                        <button class="ms-auto btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    </body>

    <!-- Modal -->
    <div class="modal fade" id="modal-confirmar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Confirmación</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            ¿Estás seguro de que deseas cancelar la acción?
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <a type="button" class="btn btn-primary" href="misproductos.php">Continuar</a>
        </div>
        </div>
    </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    </body>


</html>
<!-- <script>
    function regresar(){
        let r = confirm("¿Estás seguro de que deseas cancelar?");
        if(r){
            location.href = "misproductos.php";
        }
    }
</script> -->