//----------------------------------------------------------------------------------------------------------
//Este código incluye el buscador del desplegable del mapa :)
//----------------------------------------------------------------------------------------------------------
jQuery(document).ready(function($){
    $(document).ready(function() {
        $('.mi-selector').select2();
        $('.miSelector').on('select2:select', function (e) {
            var data = e.params.data.id;
            vistaCampo(parseInt(data))
            console.log(parseInt(data));
        });
    });
});