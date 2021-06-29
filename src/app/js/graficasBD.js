var miGrafica;
function tomarmedidas(labe) {
    fetch('../api/v1.0/mediciones.php?idSensor=' + labe, {
        method: "GET",
    }).then(function (respuesta) {
        if (respuesta.ok) {
            return respuesta.json()
        }
    }).then(function (medidas) {
        console.log(medidas)

        graficaDefault()

//SELECTOR DE GRÁFICAS

        function grafica(ejePrincipal, tipoGrafica, axis,) {
            var lumi=100;
            var comoLuz;
            if(labe==5){
                lumi=aleatorio(25,49);
                comoLuz="Muy Nublado"
            }
            else if(labe==6){
                lumi=aleatorio(25,49);
                comoLuz="Muy Nublado"
            }
            else if (medidas[0].luminosidad="Soleado"){
                lumi=aleatorio(75,100);
                comoLuz="Soleado"
            }else if(medidas[0].luminosidad="Escasamente Nublado"){
                lumi=aleatorio(50,74);
                comoLuz="Escasamente Nublado"

            }else if(medidas[0].luminosidad="Muy Nublado"){
                lumi=aleatorio(25,49);
                comoLuz="Muy Nublado"

            }else if(medidas[0].luminosidad="Noche"){
                lumi=aleatorio(0,24);
                comoLuz="Noche"
            }
            let datos = {

                labels: ejePrincipal,
                //Se definen los conjuntos de datos  con los valores del array
                datasets: [
                    { //esto es otro objeto de valores que se pondría encima de la otra
                        label: 'Temperatura',
                        data: [medidas[0].temperatura],
                        fill: true,
                        tension: 0,
                        backgroundColor: 'rgba(255, 99, 99, 0.7)',
                        borderColor: 'rgba(255, 77, 77, 0.7)',
                        pointStyle: 'circle',
                        pointRadius: 5,
                    },
                    { //esto es otro objeto de valores que se pondría encima de la otra
                        label: 'Salinidad',
                        data: [medidas[0].salinidad],
                        fill: true,
                        tension: 0,
                        backgroundColor: 'rgba(179, 252, 246, 0.7)',
                        borderColor: 'rgba(113, 217, 209, 0.7)',
                        pointStyle: 'circle',
                        pointRadius: 5,
                    }, { //esto es otro objeto de valores que se pondría encima de la otra
                        label: 'Iluminación(' +comoLuz+')',
                        data: [lumi],
                        fill: true,
                        tension: 0,
                        backgroundColor: 'rgba(239, 255, 133, 0.7)',
                        borderColor: 'rgba(234, 255, 94, 0.7)',
                        pointStyle: 'circle',
                        pointRadius: 5,
                    }, {
                        label: 'Humedad',
                        data: [medidas[0].humedad],
                        //así se rellena
                        fill: true,
                        //color de fondo
                        backgroundColor: 'rgba(117, 145, 255, 0.7)',
                        //color del borde
                        borderColor: 'rgba(92, 125, 255, 0.7)',
                        //Permite que la línea en vez de ser una recta sea una curva NO PASAR DE 1 solo decimal
                        tension: 0,
                        //Cambia la forma de los puntos
                        pointStyle: 'circle',
                        //tamaño de los puntos
                        pointRadius: 5,

                    }
                ]

            };
            /*if (medidas[0].temperatura>medidasObjeto.temperaturaPerso || lumi>medidasObjeto.luminosidadPerso || medidas[0].humedad<medidas ||medidas[0].humedad>75||medidas[0].salinidad>60){
                document.getElementById("alertaPeligro").style.backgroundColor='rgba(255,0,0,0.6)'
                document.getElementById("alertaPeligro").style.boxShadow='0 0 5px grey'
                document.getElementById("alertaPeligro").textContent=" Los niveles del recinto están llegando a niveles extremos! "
            }
            else {
                document.getElementById("alertaPeligro").style.backgroundColor='white'
                document.getElementById("alertaPeligro").textContent=""
                document.getElementById("alertaPeligro").style.boxShadow='none'
            }*/

            document.querySelector("#formMedidasPersonalizadas").addEventListener("submit",function (event) {
                event.preventDefault();
                let dataForm = new FormData(event.target);
                var medidasObjeto = {
                    humedadPerso: dataForm.get("humedadPerso"),
                    temperaturaPerso: dataForm.get("temperaturaPerso"),
                    salinidadPerso: dataForm.get("salinidadPerso"),
                    luminosidadPerso: dataForm.get("luminosidadPerso")
                }
                console.log(medidas[0].temperatura)
                console.log(medidasObjeto.temperaturaPerso)
                console.log(parseFloat(medidasObjeto.temperaturaPerso))
               if(medidas[0].temperatura > parseFloat(medidasObjeto.temperaturaPerso)) {
                   console.log(" Los niveles de temperatura del recinto están llegando a niveles extremos! ")
                   document.getElementById("alertaPeligro").style.backgroundColor = 'rgba(255,0,0,0.6)'
                   document.getElementById("alertaPeligro").style.boxShadow = '0 0 5px grey'
                   document.getElementById("alertaPeligro").textContent = " Los niveles de temperatura del recinto están llegando a niveles extremos! "

               }else if(lumi > parseFloat(medidasObjeto.luminosidadPerso)) {
                   console.log(" Los niveles de luminosidad del recinto están llegando a niveles extremos! ")
                   document.getElementById("alertaPeligro").style.backgroundColor = 'rgba(255,0,0,0.6)'
                   document.getElementById("alertaPeligro").style.boxShadow = '0 0 5px grey'
                   document.getElementById("alertaPeligro").textContent = " Los niveles de iluminación del recinto están llegando a niveles extremos! "

               }else if(medidas[0].humedad > parseFloat(medidasObjeto.humedadPerso)) {
                   console.log(" Los niveles de humedad del recinto están llegando a niveles extremos! ")
                   document.getElementById("alertaPeligro").style.backgroundColor = 'rgba(255,0,0,0.6)'
                   document.getElementById("alertaPeligro").style.boxShadow = '0 0 5px grey'
                   document.getElementById("alertaPeligro").textContent = " Los niveles de humedad del recinto están llegando a niveles extremos! "

               }else if(medidas[0].salinidad >parseFloat(medidasObjeto.salinidadPerso)) {
                   console.log(" Los niveles de salinidad del recinto están llegando a niveles extremos! ")
                   document.getElementById("alertaPeligro").style.backgroundColor = 'rgba(255,0,0,0.6)'
                   document.getElementById("alertaPeligro").style.boxShadow = '0 0 5px grey'
                   document.getElementById("alertaPeligro").textContent = " Los niveles de salinidad del recinto están llegando a niveles extremos! "
               }else{
                   document.getElementById("alertaPeligro").style.backgroundColor = 'rgba(0,255,0,0.5)'
                   document.getElementById("alertaPeligro").style.boxShadow = '0 0 5px grey'
                   document.getElementById("alertaPeligro").style.color = 'black'
                   document.getElementById("alertaPeligro").textContent = " Los niveles del recinto están ESTABLES! "
               }

            /* default:
                        document.getElementById("alertaPeligro").style.backgroundColor = 'rgba(0,255,0,0.5)'
                        document.getElementById("alertaPeligro").style.boxShadow = '0 0 5px grey'
                        document.getElementById("alertaPeligro").textContent = " Los niveles del recinto son ESTABLES "
                        break;*/
                document.querySelector("#dropdownMenuButton1").addEventListener("button",function (){
                    if(medidas[0].temperatura > parseFloat(medidasObjeto.temperaturaPerso)) {
                        console.log(" Los niveles de temperatura del recinto están llegando a niveles extremos! ")
                        document.getElementById("alertaPeligro").style.backgroundColor = 'rgba(255,0,0,0.6)'
                        document.getElementById("alertaPeligro").style.boxShadow = '0 0 5px grey'
                        document.getElementById("alertaPeligro").textContent = " Los niveles de temperatura del recinto están llegando a niveles extremos! "

                    }else if(lumi > parseFloat(medidasObjeto.luminosidadPerso)) {
                        console.log(" Los niveles de luminosidad del recinto están llegando a niveles extremos! ")
                        document.getElementById("alertaPeligro").style.backgroundColor = 'rgba(255,0,0,0.6)'
                        document.getElementById("alertaPeligro").style.boxShadow = '0 0 5px grey'
                        document.getElementById("alertaPeligro").textContent = " Los niveles de iluminación del recinto están llegando a niveles extremos! "

                    }else if(medidas[0].humedad > parseFloat(medidasObjeto.humedadPerso)) {
                        console.log(" Los niveles de humedad del recinto están llegando a niveles extremos! ")
                        document.getElementById("alertaPeligro").style.backgroundColor = 'rgba(255,0,0,0.6)'
                        document.getElementById("alertaPeligro").style.boxShadow = '0 0 5px grey'
                        document.getElementById("alertaPeligro").textContent = " Los niveles de humedad del recinto están llegando a niveles extremos! "

                    }else if(medidas[0].salinidad >parseFloat(medidasObjeto.salinidadPerso)) {
                        console.log(" Los niveles de salinidad del recinto están llegando a niveles extremos! ")
                        document.getElementById("alertaPeligro").style.backgroundColor = 'rgba(255,0,0,0.6)'
                        document.getElementById("alertaPeligro").style.boxShadow = '0 0 5px grey'
                        document.getElementById("alertaPeligro").textContent = " Los niveles de salinidad del recinto están llegando a niveles extremos! "
                    }else{
                        document.getElementById("alertaPeligro").style.backgroundColor = 'rgba(0,255,0,0.5)'
                        document.getElementById("alertaPeligro").style.boxShadow = '0 0 5px grey'
                        document.getElementById("alertaPeligro").style.color = 'black'
                        document.getElementById("alertaPeligro").textContent = " Los niveles del recinto están ESTABLES! "
                    }
                })//querySelectorDropdown
            })//querySelector
            //CREAR GRAFICA
            let ctx = document.getElementById('chart');
            console.log('Se crea el ctx')
            //Destuir grafica antes de crear la nueva
            if (miGrafica) {
                miGrafica.destroy();
            }

            //Crea el objeto grafica
            miGrafica = new Chart(ctx, {
                type: tipoGrafica,
                data: datos,
                //OPCIONES DE LA GRAFICA
                options: {
                    indexAxis: axis,
                    responsive: true,
                    maintainAspectRatio: false,
                    transitions: {
                        show: {
                            animations: {
                                x: {
                                    from: 0
                                },
                                y: {
                                    from: 0
                                }
                            }
                        },
                        hide: {
                            animations: {
                                x: {
                                    to: 0
                                },
                                y: {
                                    to: 0
                                }
                            }
                        }
                    }
                }
            });
        }

        function obtenerTGrafica(tipo) {

            if (tipo === 'barras') {

                console.log("BARRAS")
                var tipoGrafica = 'bar';
                var ejePrincipal = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
                cargarGrafica(ejePrincipal, tipoGrafica)

            } else {
                if (tipo === 'lineas') {
                    console.log("LÍENAS")
                    var tipoGrafica = 'line'
                    var ejePrincipal = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes']
                    cargarGrafica(ejePrincipal, tipoGrafica)
                } else {
                    if (tipo === 'default') {
                        graficaDefault()
                    } else {
                        console.log('ERROR')
                    }
                }
            }
        }
//LA GRÁFICA SE DIBUJA EN PANTALLA
        function cargarGrafica(ejePrincipal, tipoGrafica) {
            //Se puede cambiar el eje de los datos
            console.log('Carga Grafica')
            if (tipoGrafica === 'bar') {
                var axis = 'x';
            } else {
                var axis = 'x'
            }
            grafica(ejePrincipal, tipoGrafica, axis)


        }

//GRAFICA PREDETERMINADA AL ABRIR LA PAGINA
        function graficaDefault() {
            var axis = 'y';
            var ejePrincipal = [''];
            grafica(ejePrincipal, 'bar', axis)
        }



    })
    document.getElementById("labelSonda").textContent="Sonda "+labe
}

tomarmedidas(1)
