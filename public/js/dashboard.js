$(document).ready(function() {
    // Example API call
    $.ajax({
        url: '/api/getData', // Replace with your API endpoint
        method: 'GET',
        success: function(data) {
            console.log(data); // Log the data to ensure it's being received

            // Assuming data is an array of objects with 'id' and 'nombre' properties
            var options = data.map(function(item) {
                return `<option value="${item.id}">${item.nombre}</option>`; 
            });

            // Populate the multi-select dropdown
            $('#talent-member').html(options.join(''));

            // Refresh the Bootstrap Select to update the UI
            $('#talent-member').selectpicker('refresh');
        },
        error: function(error) {
            console.error('Error fetching data:', error);
        }
    });
});
