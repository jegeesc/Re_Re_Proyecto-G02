let map;
var datos=[1,2,3,4];





/*
function cerrarIW(){
    console.log('Se ha cerrado')
    infowindow.close();
}
*/


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39.01455194283243, lng: -0.1912415504303265},
        zoom: 14,
        mapTypeId: 'roadmap',
        styles: [
            {
                featureType: 'poi',
                stylers: [{visibility: 'off'}]
            },
            {
                featureType: 'transit',
                stylers: [{visibility: 'off'}]
            }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
    });
    //------------------------Marcadores------------------------
    //-------------------------------------------------------------------------------------------
                                //PARCELA 1
    //------------------------SONDA 5------------------------
    var sonda5 = new google.maps.Marker({
        position: {lat: 39.01904650081264, lng: -0.2042888124011707},
        label: "Sonda 5",
        animation: google.maps.Animation.DROP,
        map: map

    });
    sonda5.addListener("click", () => {

        var contentString = crearInfoWindow(infowindow,'Sonda 5',datos);
        var infowindow = crearVar(contentString,map);
        infowindow.open(map, sonda5);
    });
    //------------------------SONDA 6------------------------
    var sonda6 = new google.maps.Marker({
        position: {lat: 39.01890480192713, lng: -0.2016986904601482},
        label: "Sonda 6",
        animation: google.maps.Animation.DROP,
        map: map

    });
    sonda6.addListener("click", () => {

        var contentString = crearInfoWindow(infowindow,'Sonda 6',datos);
        var infowindow = crearVar(contentString,map);
        infowindow.open(map, sonda5);
    });
    //------------------------SONDA 7------------------------
    var sonda7 = new google.maps.Marker({
        position: {lat: 39.01743771350213, lng: -0.2030934391479297},
        label: "Sonda 7",
        animation: google.maps.Animation.DROP,
        map: map

    });
    sonda7.addListener("click", () => {

        var contentString = crearInfoWindow(infowindow,'Sonda 7',datos);
        var infowindow = crearVar(contentString,map);
        infowindow.open(map, sonda5);
    });
    //-------------------------------------------------------------------------------------------

    //-------------------------------------------------------------------------------------------
                                //PARCELA 2
    //------------------------SONDA 1------------------------
    var sonda1 = new google.maps.Marker({
        position: {lat: 39.01068307409519, lng: -0.18946713596529477},
        label: "Sonda 1",
        animation: google.maps.Animation.DROP,
        map: map
    });

    sonda1.addListener("click", () => {

        var contentString = crearInfoWindow(infowindow,'Sonda 1',datos);
        var infowindow = crearVar(contentString,map);
        infowindow.open(map, sonda1);
    });

    //------------------------SONDA 2------------------------
    var sonda2 = new google.maps.Marker({
        position: {lat: 39.012583796216596, lng: -0.18343753009972605},
        label: "Sonda 2",
        animation: google.maps.Animation.DROP,
        map: map
    });
    sonda2.addListener("click", () => {

        var contentString = crearInfoWindow(infowindow,'Sonda 2',datos);
        var infowindow = crearVar(contentString,map);
        infowindow.open(map, sonda2);
    });
        //------------------------SONDA 3------------------------
    var sonda3 = new google.maps.Marker({
        position: {lat: 39.00720495033061, lng: -0.183881301062853},
        label: "Sonda 3",
        animation: google.maps.Animation.DROP,
        map: map
    });
    sonda3.addListener("click", () => {
        var contentString = crearInfoWindow(infowindow,'Sonda 3',datos);
        var infowindow = crearVar(contentString,map);
        infowindow.open(map, sonda3);
    });
        //------------------------SONDA 4------------------------
    var sonda4 = new google.maps.Marker({
        position: {lat: 39.00934263744238, lng: -0.1784923340801241},
        label: "Sonda 4",
        animation: google.maps.Animation.DROP,
        map: map
    });
    sonda4.addListener("click", () => {
        var contentString = crearInfoWindow(infowindow,'Sonda 4',datos);
        var infowindow = crearVar(contentString,map);
        infowindow.open(map, sonda4);

    });

    //-------------------------------------------------------------------------------------------
    //PARCELA 2
    //------------------------SONDA 8------------------------
    var sonda8 = new google.maps.Marker({
        position: {lat: 39.014902060520114, lng: -0.19763593672180033},
        label: "Sonda 8",
        animation: google.maps.Animation.DROP,
        map: map
    });

    sonda8.addListener("click", () => {

        var contentString = crearInfoWindow(infowindow,'Sonda 8',datos);
        var infowindow = crearVar(contentString,map);
        infowindow.open(map, sonda1);
    });

    //------------------------SONDA 9------------------------
    var sonda9 = new google.maps.Marker({
        position: {lat: 39.01253456421008, lng: -0.19690637586973003},
        label: "Sonda 9",
        animation: google.maps.Animation.DROP,
        map: map
    });
    sonda9.addListener("click", () => {

        var contentString = crearInfoWindow(infowindow,'Sonda 9',datos);
        var infowindow = crearVar(contentString,map);
        infowindow.open(map, sonda2);
    });
//-------------------------------------------------------------------------------------------

    //------------------------POLIGONOS------------------------
    let polygon = new google.maps.Polygon({
        paths: [
            {lat: 39.010661, lng: -0.189822},
            {lat: 39.015428, lng: -0.183803},
            {lat: 39.009254, lng: -0.177260},
            {lat: 39.004472, lng: -0.183385},
            {lat: 39.010661, lng: -0.189822}],
        strokeColor: "#ff8000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ff8000",
        fillOpacity: 0.35,
        map: map
    });


    /*Ajustar el mapa a un polígono
    let bounds = new google.maps.LatLngBounds();
    polygon.getPath().getArray().forEach(function (v) {
        bounds.extend(v);
    })
    map.fitBounds(bounds);
    */


function crearInfoWindow(infowindow,sonda,datos){

    //------------------------ CREA CODIGO HTML ------------------------
    const contentString =
        '<div class="iw_container">' +
            '<div class="iw_div_principal">' +
                '<h1 class="iw_titulo">'+ sonda + '</h1>' +
            "</div>" +
            '<div class="iw_logosytext">' +
                '<div class="iw_iconos">' +


                    '<img src="../images/temperatura.png" alt="temperatura" class="iw_imagen">' +
                    '<img src="../images/humedad.png" alt="humedad" class="iw_imagen">' +
                    '<img src="../images/luz.png" alt="iluminacion" class="iw_imagen">' +
                    '<img src="../images/sal.png" alt="salinidad" class="iw_imagen">' +
                "</div>" +
                '<div class="iw_textos">' +
                    '<h2 class="iw_subtitulo temperatura">Temperatura</h2>' +
                    '<h2 class="iw_subtitulo humedad">Humedad</h2>' +
                    '<h2 class="iw_subtitulo iluminacion">Iluminación</h2>' +
                    '<h2 class="iw_subtitulo salinidad">Salinidad</h2>' +

                "</div>" +
                '<div class="iw_textos">' +
                '<p class="iw_subtitulo temperatura">'+datos[0]+'</p>' +
                '<p class="iw_subtitulo humedad">'+datos[1]+'</p>' +
                '<p class="iw_subtitulo iluminacion">'+datos[2]+'<p/>' +
                '<p class="iw_subtitulo salinidad">'+datos[3]+'</p>' +
                "</div>" +
                '<div class="iw_abajo">' +
                    '<a class="iw_enlace" href="../html/graficas.html">Más parámetros</a>'+
                "</div>" +
            "</div>" +
        "</div>"
    ;
    return contentString;
}

    function crearVar(contentString,map){

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500,
            minWidth: 250,
        });

    return  infowindow;
    }
}

