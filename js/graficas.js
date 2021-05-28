var miGrafica;
graficaDefault()

//SELECTOR DE GRÁFICAS
function obtenerTipoGrafica(tipo) {

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

//-----------------------------------------------------------------------------------------
//CONSTRUCTOR DE LA GRAFICA
//-----------------------------------------------------------------------------------------
function grafica(ejePrincipal, tipoGrafica, axis,) {
    //DATOS DE LA GRAFICA


    function tomarmedidas(labe) {
        fetch('../bbdd/mediciones.php?idSensor=' + labe, {
            method: "GET",
        }).then(function (respuesta) {
            if (respuesta.ok) {
                return respuesta.json()
            }
        }).then(function (medidas) {
            var datosMedidas;
            datosMedidas[0] = medidas[0].humedad
            datosMedidas[1] = medidas[0].temperatura
            datosMedidas[2] = medidas[0].salinidad
            datosMedidas[3] = medidas[0].luminosidad

            return datosMedidas;
        })
    }


    var datosMedidas = tomarmedidas(0);


    let datos = {

        labels: ejePrincipal,
        //Se definen los conjuntos de datos  con los valores del array
        datasets: [
            { //esto es otro objeto de valores que se pondría encima de la otra
                label: 'Temperatura',
                data: [aleatorio(10,40), aleatorio(10,40), aleatorio(10,40), aleatorio(10,40), aleatorio(10,40)],
                fill: true,
                tension: 0,
                backgroundColor: 'rgba(255, 99, 99, 0.7)',
                borderColor: 'rgba(255, 77, 77, 0.7)',
                pointStyle: 'circle',
                pointRadius: 5,
            },
            { //esto es otro objeto de valores que se pondría encima de la otra
                label: 'Salinidad',
                data: [aleatorio(10,100), aleatorio(10,100), aleatorio(10,100), aleatorio(10,100), aleatorio(10,100)],
                fill: true,
                tension: 0,
                backgroundColor: 'rgba(179, 252, 246, 0.7)',
                borderColor: 'rgba(113, 217, 209, 0.7)',
                pointStyle: 'circle',
                pointRadius: 5,
            }, { //esto es otro objeto de valores que se pondría encima de la otra
                label: 'Iluminación',
                data: [aleatorio(10,100), aleatorio(10,100), aleatorio(10,100), aleatorio(10,100), aleatorio(10,100)],
                fill: true,
                tension: 0,
                backgroundColor: 'rgba(239, 255, 133, 0.7)',
                borderColor: 'rgba(234, 255, 94, 0.7)',
                pointStyle: 'circle',
                pointRadius: 5,
            }, {
                label: 'Humedad',
                data: [aleatorio(10,100), aleatorio(10,100), aleatorio(10,100), aleatorio(10,100), aleatorio(10,100)],
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

    //--------------------------------------------------------

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


//CARGAR MEDIDAS DE LA BBDD
function tomarmedidas(labe) {
    fetch('../bbdd/mediciones.php?idSensor=' + labe, {
        method: "GET",
    }).then(function (respuesta) {
        if (respuesta.ok) {
            return respuesta.json()
        }
    }).then(function (medidas) {
        var datosMedidas;
        datosMedidas[0] = medidas[0].humedad
        datosMedidas[1] = medidas[0].temperatura
        datosMedidas[2] = medidas[0].salinidad
        datosMedidas[3] = medidas[0].luminosidad

        return datosMedidas;
    })
}
