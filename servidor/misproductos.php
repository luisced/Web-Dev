<?php
    $path = "db/productos.json";
    // Use json_decode to decode JSON into an associative array (not json_encode)
    $productos = json_decode(file_get_contents($path), TRUE);
?>

<!DOCTYPE html>
<html>
    <head>
        <title>PHP</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <style>
        .container {
            height: 80vh;
        }
    </style>
    <body>
    <?php include "components/navbar.php"; ?>
        <div class="container d-flex">
            <div class="d-flex m-auto">
                <table class="table m-auto border p-3 rounded">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                            if (is_array($productos)) {
                                foreach ($productos as $index => $producto) {
                                    echo "<tr>";
                                    echo "<td>{$producto['nombre']}</td>";
                                    echo "<td>{$producto['precio']}</td>";
                                    echo "<td>{$producto['cantidad']}</td>";
                                    echo "<td><button type='button' onclick='agregar($index)' class='btn btn-sm btn-primary'>+</button></td>";
                                    echo "</tr>";
                                }
                            } else {
                                echo "<tr><td colspan='4' class='text-center'>No hay productos disponibles</td></tr>";
                            }
                        ?>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="4" class="text-center">
                                <a class="btn btn-primary m-auto" href="nuevoproducto.php">Nuevo</a>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <script src="" ></script>
        <script src="js/addCart.js"></script>
    </body>
</html>
