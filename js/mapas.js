let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39.00971602044704, lng: -0.18356627613238444},
        zoom: 15,
        mapTypeId: 'hybrid',
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

        //------------------------SONDA 1------------------------
    var sonda1 = new google.maps.Marker({
        position: {lat: 39.01068307409519, lng: -0.18946713596529477},
        label: "Sonda 1",
        animation: google.maps.Animation.DROP,
        map: map

    });
    sonda1.addListener("click", () => {
        var contentString = crearInfoWindow('Sonda1');
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
        infowindow.open(map, sonda4);
    });

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


function crearInfoWindow(sonda){
    console.log('He llegado')
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
                '<p class="iw_subtitulo temperatura">23</p>' +
                '<p class="iw_subtitulo temperatura">10</p>' +
                '<p class="iw_subtitulo temperatura">2<p/>' +
                '<p class="iw_subtitulo temperatura">3</p>' +
                "</div>" +
                '<div class="iw_abajo">' +
                    '<a class="iw_enlace" href="../html/graficas.html">Más parámetros</a>'+

                    '<a class="iw_enlace" href="" >Cerrar</a>'+
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



