<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enhanced Asesorías Dashboard</title>
    <!-- Link to Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    <!-- Include Select2 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0/dist/css/select2.min.css" rel="stylesheet" />
    <!-- Link to Dashboard CSS -->
    <link href="{{ asset('css/dashboard.css') }}" rel="stylesheet">
    <!-- Custom styles for Select2 within Bootstrap -->
    <style>
        .select2-container .select2-selection--multiple {
            height: auto !important;
        }
        .select2-container--default .select2-selection--multiple .select2-selection__choice {
            color: #000;
        }
    </style>
</head>
<body>
    @include('components.navbar') <!-- Include the navbar component here -->
    <div class="container mt-5">
        <h1 class="text-center text-primary fw-bold mb-5">Enhanced Asesorías Dashboard</h1>

        <!-- Summary Ribbon -->
        <div class="summary-ribbon mb-4">
            <div class="row text-center">
                <div class="col-md-2 col-6 summary-item">
                    <h5>Sesiones:</h5>
                    <p id="sessionsCount">0</p>
                </div>
                <div class="col-md-2 col-6 summary-item">
                    <h5>Total Hrs. Alumnos:</h5>
                    <p id="totalStudentHours">0</p>
                </div>
                <div class="col-md-2 col-6 summary-item">
                    <h5>Duración media de sesión:</h5>
                    <p id="averageSessionDuration">0</p>
                </div>
                <div class="col-md-2 col-6 summary-item">
                    <h5>Total hrs. Talent:</h5>
                    <p id="totalTalentHours">0</p>
                </div>
                <div class="col-md-2 col-6 summary-item">
                    <h5>Profesores:</h5>
                    <p id="uniqueStudents">0</p>
                </div>
            </div>
        </div>

        <!-- Filter Section -->
        <div class="card shadow-sm p-4 mb-4">
            <div class="row">
                <div class="col-md-6 filter-group">
                    <div class="form-group">
                        <label for="start-date" class="fw-bold">Inicio:</label>
                        <input type="date" id="start-date" class="form-control">
                    </div>
                </div>
                <div class="col-md-6 filter-group">
                    <div class="form-group">
                        <label for="end-date" class="fw-bold">Fin:</label>
                        <input type="date" id="end-date" class="form-control">
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- Asesores Filter with Select2 Multiselect -->
                <div class="col-md-6 filter-group">
                    <div class="form-group">
                        <label for="talent-member" class="fw-bold">Asesores:</label>
                        <select id="talent-member" class="form-control select2" multiple></select>
                    </div>
                </div>
                <!-- Sede Filter with Select2 Multiselect -->
                <div class="col-md-6 filter-group">
                    <div class="form-group">
                        <label for="location" class="fw-bold">Sede:</label>
                        <select id="location" class="form-control select2" multiple>
                            <option value="1">México</option>
                            <option value="4">Aguascalientes</option>
                            <option value="5">Guadalajara</option>
                            <option value="6">Ciudad UP</option>
                            <option value="1007">Sin Sede</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- Categoría Filter with Select2 Multiselect -->
                <div class="col-md-6 filter-group">
                    <div class="form-group">
                        <label for="category" class="fw-bold">Categoría:</label>
                        <select id="category" class="form-control select2" multiple></select>
                    </div>
                </div>
            </div>

            <!-- Buttons Group -->
            <div class="d-flex justify-content-end mt-3">
                <button class="btn btn-secondary me-2" id="clear-filters">Limpiar</button>
                <button class="btn btn-primary" id="search">Buscar</button>
            </div>
        </div>

        <!-- Summary of Selected Filters -->
        <div class="alert alert-info" id="selected-filters"></div>

        <!-- Results Section -->
        <div id="results" class="results-container"></div>

        <!-- Asesores Summary Section -->
        <div id="asesores-summary" class="mt-5">
            <h2 class="text-center text-primary fw-bold mb-4">Resumen de Asesores</h2>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Correo</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Sesiones</th>
                        <th>Total Horas TALENT</th>
                        <th>Duración Media Sesión</th>
                        <th>% Horas Prof</th>
                        <th>% Horas TALENT</th>
                    </tr>
                </thead>
                <tbody id="asesores-table-body">
                    <!-- Rows will be populated dynamically -->
                </tbody>
            </table>
        </div>
    </div>

    <!-- Include jQuery (Select2 depends on it) -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Include Select2 JS -->
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0/dist/js/select2.min.js"></script>
    <!-- Include Bootstrap JS -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    <!-- JS to handle filters and populate dropdowns dynamically -->
    <script src="{{ asset('js/dashboard.js') }}"></script>
    <script>
        $(document).ready(function() {
            $('.select2').select2({
                placeholder: "Seleccione una opción",
                allowClear: true
            });
        });
    </script>
</body>
</html>
