var mapaGoogle
function abrirMapa(){
    fetch('../api/v1.0/mapas.php', {
        method: "GET"
    }).then(function (respuesta){

        //para asegurar...
        if(respuesta.ok){
            //devolvemos la respuesta en formato json
            return respuesta.json()
        }//if

    }).then(function (datos){
        console.log(datos);
        //comenzamos con la creación del mapa

        //primero una variable para trabajar sibre ella y almacenar el propio mapa


        //y ahora la funcion constructor
        function initMap() {
            //ajustamos la inclinación a 0 para verlo verticalmente(vista aérea)

            //añadimos algunas propiedades como el punto en el que se centrará por defecto y el zoom deseado
            mapaGoogle = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 40.41691146311564, lng: -3.703518517408268},
                zoom: 15
            });//map

            for (let i = 0; i < datos.length; i++) {
                var x = datos[i].latitudCentro
                var y = datos[i].longitudCentro
                var lab = datos[i].idCampo
                console.log( parseFloat(x))
                console.log(parseFloat(y))
                var centro = new google.maps.Marker({
                    position: {lat: parseFloat(x), lng: parseFloat(y)},
                    label:lab,
                    animation: google.maps.Animation.DROP,
                    map: mapaGoogle
                });//marker

                (function (centro, i) {
                    google.maps.event.addListener(centro, 'click', function () {
                        mapaGoogle.panTo({lat:parseFloat(x) , lng:parseFloat(y) })
                        mapaGoogle.setZoom(16)
                        console.log(centro.label)
                        infowindow = new google.maps.InfoWindow({
                            content: 'Campo ' + (1+i),
                        });
                        infowindow.open(mapaGoogle, centro);
                        iniciarSensores(centro.label);
                        formarPoligono(centro.label);


                    });
                })(centro, i);


            }//for

            function iniciarSensores(campo) {
                fetch('../bbdd/sensores.php?idCampo='+campo, {
                    method: "GET",
                }).then(function (respuesta) {
                    if (respuesta.ok) {
                        return respuesta.json()
                    }
                }).then(function (sensores) {
                    console.log(JSON.stringify(sensores))
                    for (let i = 0; i < sensores.length; i++) {
                        var sondaLat = sensores[i].latitud
                        var sondaLng = sensores[i].longitud
                        console.log(sensores[i].idSensor)
                        var sensor = new google.maps.Marker({
                            position: {lat: parseFloat(sondaLng), lng: parseFloat(sondaLat)},
                            label: sensores[i].idSensor,
                            animation: google.maps.Animation.DROP,
                            map: mapaGoogle
                        });//marker
                        console.log(sensor);
                        (function (sensor, i) {
                            // add click event
                            google.maps.event.addListener(sensor, 'click', function () {
                                console.log(sensor.label)
                                var contentString = crearInfoWindow(infowindow, 'Sonda'+sensor.label, datos);
                                tomarmedidas(sensor.label)
                                infowindow = crearVar(contentString, map);
                                infowindow.open(mapaGoogle, sensor);
                            });
                        })(sensor, i);
                        if(mapaGoogle.zoom<10){
                            sensor.remove()
                        }
                    }

                    function crearInfoWindow(infowindow, sonda, datos) {

                        //------------------------ CREA CODIGO HTML ------------------------
                        const contentString =
                            '<div class="iw_container">' +
                            '<div class="iw_div_principal">' +
                            '<h1 class="iw_titulo">' + sonda + '</h1>' +
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
                            '<p class="iw_subtitulo temperatura" id="medidaTemp">'+ 'ºC'+'</p>' +
                            '<p class="iw_subtitulo humedad" id="medidaHum">' + '%'+ '</p>' +
                            '<p class="iw_subtitulo iluminacion" id="medidaLumi">' + '</p>' +
                            '<p class="iw_subtitulo salinidad" id="medidaSal">' + '%'+'</p>' +
                            "</div>" +
                            '<div class="iw_abajo">' +
                            '<a class="iw_enlace" href="../graficas.html">Más parámetros</a>' +
                            "</div>" +
                            "</div>" +
                            "</div>"
                        ;
                        return contentString
                    }

                    function crearVar(contentString, mapaGoogle) {
                        const infowindow = new google.maps.InfoWindow({
                            content: contentString,
                            maxWidth: 500,
                            minWidth: 250,
                        });
                        return infowindow;
                    }


                    function tomarmedidas(labe){
                        fetch('../bbdd/mediciones.php?idSensor='+labe, {
                            method: "GET",
                        }).then(function (respuesta) {
                            if (respuesta.ok) {
                                return respuesta.json()
                            }
                        }).then(function (medidas){

                            document.getElementById("medidaHum").textContent = medidas[0].humedad
                            document.getElementById("medidaTemp").textContent = medidas[0].temperatura
                            document.getElementById("medidaSal").textContent = medidas[0].salinidad
                            document.getElementById("medidaLumi").textContent = medidas[0].luminosidad

                        });//then



                        /*
                                                for (let i = 0; i < 3; i++) {
                                                    var sensorX = sensores[i].latitud
                                                    var sensorY = sensores[i].longitud
                                                    var polygon = new google.maps.Polygon({
                                                        paths: [
                                                            {lat: parseFloat(sensorX), lng: parseFloat(sensorY)},
                                                        ],
                                                        strokeColor: "#ff8000",
                                                        strokeOpacity: 0.8,
                                                        strokeWeight: 2,
                                                        fillColor: "#ff8000",
                                                        fillOpacity: 0.35,
                                                        map: mapaGoogle
                                                    });
                                                }
                                                let bounds = new google.maps.LatLngBounds();
                                                polygon.getArray().forEach(function (v) {
                                                    bounds.extend(v);
                                                })
                                                mapaGoogle.fitBounds(bounds);

                                                //aqui acaba
                        */
                    }//tomarTemp()

                });//then
            }//iniciarSensores
        }//initMap()
        initMap()
    })
}//abrirMapa()
function formarPoligono(centro){
    fetch('../bbdd/esquinas.php', {
        method: "GET",
    }).then(function (respuesta) {
        if (respuesta.ok) {
            return respuesta.json()
        }
    }).then(function (esquinas){
        console.log(esquinas.length);
        var arrayEsquinas=[];

        for (let i=0;i<esquinas.length;i++){
            if(esquinas[i].idCampos==centro){
                var latEsquina = parseFloat(esquinas[i].latitudEsquina);
                var lngEsquina = parseFloat(esquinas[i].longitudEsquina);
                arrayEsquinas.push(latEsquina,lngEsquina);
                console.log(arrayEsquinas)
                console.log(typeof arrayEsquinas[0]);
            }
        }
        console.log(arrayEsquinas)
        var aux=[];
        for (let i = 0; i < arrayEsquinas.length; i=i+2) {
            obj= {
                lat:arrayEsquinas[i],
                lng:arrayEsquinas[i+1]
            }
            aux.push(obj)
        }
        console.log(aux)

        var campo = new google.maps.Polygon({
            paths: [aux],
            /* {lat: arrayEsquinas[0], long: arrayEsquinas[1]},
             {lat: arrayEsquinas[2], long: arrayEsquinas[3]},
             {lat: arrayEsquinas[3], long: arrayEsquinas[4]},
             {lat: arrayEsquinas[5], long: arrayEsquinas[6]}

             */
            strokeColor: "#ff8000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#ff8000",
            fillOpacity: 0.8,
            map: mapaGoogle
        });
        console.log(campo)
        let bounds = new google.maps.LatLngBounds();
        campo.getPath().getArray().forEach(function (v){
            bounds.extend(v);
        })
    })

}



//main

//abrirMapa();