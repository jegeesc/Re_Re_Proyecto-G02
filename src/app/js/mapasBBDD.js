var mapaGoogle
function abrirMapa(){
    fetch('../bbdd/mapas.php', {
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
                center: {lat: 39.01850, lng: -0.19241},
                zoom: 13
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
                        mapaGoogle.setZoom(15)
                        console.log(centro.label)

                        infowindow = new google.maps.InfoWindow({
                            content: 'Campo ' + (1+i),
                        });
                        infowindow.open(mapaGoogle, centro);
                        iniciarSensores(centro.label);
                        formarPoligono(centro.label);

                        mapaGoogle.panTo({lat:parseFloat(datos[i].latitudCentro) , lng:parseFloat(datos[i].longitudCentro) })

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
                    console.log(sensores)

                    var sensoritos = []
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
                        sensoritos.push(sensor);

                        (function (sensor, i) {
                            // add click event
                            google.maps.event.addListener(sensor, 'click', function () {
                                console.log(sensor.label)
                                mapaGoogle.setZoom(15);
                                var contentString = crearInfoWindow(infowindow, 'Sonda' + sensor.label, datos);
                                tomarmedidas(sensor.label)
                                infowindow = crearVar(contentString, map);
                                infowindow.open(mapaGoogle, sensor);
                            });
                        })(sensor, i);

                        //-----------------------------------------------------------------------
                        google.maps.event.addListener(mapaGoogle, 'zoom_changed', function () {
                            var zoom = mapaGoogle.getZoom();
                            if( zoom <14 && zoom > 1) {
                                for (let j = 0; j < sensores.length; j++) {
                                    sensoritos[j].setMap(null);
                                }
                            }
                            else {
                                for (let j = 0; j < sensores.length; j++) {
                                    if(sensoritos[j].setMap()==null){
                                        sensoritos[j].setMap(mapaGoogle);
                                    }
                                }
                            }
                        });
                        //-----------------------------------------------------------------------

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
                                '<p class="iw_subtitulo temperatura" id="medidaTemp">' + 'ºC' + '</p>' +
                                '<p class="iw_subtitulo humedad" id="medidaHum">' + '%' + '</p>' +
                                '<p class="iw_subtitulo iluminacion" id="medidaLumi">' + '</p>' +
                                '<p class="iw_subtitulo salinidad" id="medidaSal">' + '%' + '</p>' +
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


                        function tomarmedidas(labe) {
                            fetch('../bbdd/mediciones.php?idSensor=' + labe, {
                                method: "GET",
                            }).then(function (respuesta) {
                                if (respuesta.ok) {
                                    return respuesta.json()
                                }
                            }).then(function (medidas) {

                                document.getElementById("medidaHum").textContent = medidas[0].humedad + "%"
                                document.getElementById("medidaTemp").textContent = medidas[0].temperatura + "ºC"
                                document.getElementById("medidaSal").textContent = medidas[0].salinidad + "%"
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

                    }
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
let vistaG=document.getElementById("vistaGeneral");
let campo1= document.getElementById("vistaC1");
let campo2= document.getElementById("vistaC2");

function vistaGeneral(){
    mapaGoogle.setZoom(13);
    mapaGoogle.panTo({lat: 39.01850, lng: -0.19241});
    console.log("Vista General.");
    vistaG.style.cssText="background-color: #ffffff;\n" +
        "    color: green;\n" +
        "    padding: .5rem 1.5rem;\n" +
        "    box-shadow: 0 0 7px #676767;";
    campo1.style.cssText="background-color: #ffffff;\n" +
        "    color: green;\n" +
        "    padding: .5rem .5rem;\n" +
        "    box-shadow: 0 0 7px #676767;";
    campo2.style.cssText="background-color: #ffffff;\n" +
        "    color: green;\n" +
        "    padding: .5rem .5rem;\n" +
        "    box-shadow: 0 0 7px #676767;";
}

function vistaCampo(ncampo){

    switch(ncampo){
        case 1:
            mapaGoogle.setZoom(15);
            mapaGoogle.panTo({lat: 39.00984, lng: -0.18315});
            vistaG.style.cssText="background-color: #ffffff;\n" +
                "    color: green;\n" +
                "    padding: .5rem .5rem;\n" +
                "    box-shadow: 0 0 7px #676767;";
            campo1.style.cssText="background-color: #ffffff;\n" +
            "    color: green;\n" +
            "    padding: .5rem 2rem;\n" +
            "    box-shadow: 0 0 7px #676767;";
            campo2.style.cssText="background-color: #ffffff;\n" +
            "    color: green;\n" +
            "    padding: .5rem .5rem;\n" +
            "    box-shadow: 0 0 7px #676767;";
            break;

            case 2:
            mapaGoogle.setZoom(15);
            mapaGoogle.panTo({lat: 39.03142, lng: -0.20039});
                vistaG.style.cssText="background-color: #ffffff;\n" +
                    "    color: green;\n" +
                    "    padding: .5rem .5rem;\n" +
                    "    box-shadow: 0 0 7px #676767;";
                campo1.style.cssText="background-color: #ffffff;\n" +
                    "    color: green;\n" +
                    "    padding: .5rem .5rem;\n" +
                    "    box-shadow: 0 0 7px #676767;";
                campo2.style.cssText="background-color: #ffffff;\n" +
                    "    color: green;\n" +
                    "    padding: .5rem 2rem;\n" +
                    "    box-shadow: 0 0 7px #676767;";
            break;
    }
}


//main

function irA(){}


//abrirMapa();