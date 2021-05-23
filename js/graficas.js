var miGrafica;
graficaDefault()
//SELECTOR DE GRÁFICAS
function obtenerTipoGrafica(tipo) {
    if (tipo === 'barras') {

        console.log("BARRAS")
        var tipoGrafica = 'bar';
        var ejePrincipal = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
        cargarGrafica(ejePrincipal,tipoGrafica)

    } else {
        if (tipo === 'lineas') {
            console.log("LÍENAS")
            var tipoGrafica = 'line'
            var ejePrincipal = ['']
            cargarGrafica(ejePrincipal,tipoGrafica)
        } else {
            console.log("ERROR")
        }
    }
}
//DEFINICION DE LOS DATOS DE CADA TIPO DE GRAFICA
function grafica(ejePrincipal,tipoGrafica){
    let datos = {

        labels: ejePrincipal,
        //Se definen los conjuntos de datos de nombre ventas y con los valores del array
        datasets: [
            {
                label: 'humedad',
                data: [100, 234, 45, 210, 430],
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
            }, { //esto es otro objeto de valores que se pondría encima de la otra
                label: 'salinidad',
                data: [350, 34, 267, 110, 30],
                fill: true,
                tension: 0,
                backgroundColor: 'rgba(179, 252, 246, 0.7)',
                borderColor: 'rgba(113, 217, 209, 0.7)',
                pointStyle: 'circle',
                pointRadius: 5,
            }, { //esto es otro objeto de valores que se pondría encima de la otra
                label: 'iluminación',
                data: [20, 14, 67, 10, 30],
                fill: true,
                tension: 0,
                backgroundColor: 'rgba(239, 255, 133, 0.7)',
                borderColor: 'rgba(234, 255, 94, 0.7)',
                pointStyle: 'circle',
                pointRadius: 5,
            }, { //esto es otro objeto de valores que se pondría encima de la otra
                label: 'temperatura',
                data: [120, 114, 167, 110, 130],
                fill: true,
                tension: 0,
                backgroundColor: 'rgba(255, 99, 99, 0.7)',
                borderColor: 'rgba(255, 77, 77, 0.7)',
                pointStyle: 'circle',
                pointRadius: 5,
            }
        ]
    };

    //--------------------------------------------------------


    let ctx = document.getElementById('chart');
    //Destuir grafica antes de crear la nueva
    if(miGrafica){
        miGrafica.destroy();
    }

    miGrafica = new Chart(ctx, {
        type: tipoGrafica,
        data: datos,
        options: {
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
//Definimos los datos en el eje horizontal con los valores del array

//LA GRÁFICA SE DIBUJA EN PANTALLA
function cargarGrafica(ejePrincipal,tipoGrafica) {

        grafica(ejePrincipal,tipoGrafica)



}

function graficaDefault(){
    var ejePrincipal = [''];
    cargarGrafica(ejePrincipal,'bar')
}
