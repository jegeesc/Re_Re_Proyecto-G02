    let map;
    let map2;
      function initMap() {
        //console.log("Google Maps cargado!!");
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
        //Marcadores
        var sonda1 = new google.maps.Marker({
          position: {lat: 39.01068307409519, lng: -0.18946713596529477},
          label: "Sonda 1",
          animation: google.maps.Animation.DROP,
          map: map

        });
         sonda1.addListener("click", () => {
                infowindow.open(map, sonda1);
            });
        var sonda2 = new google.maps.Marker({
          position: {lat: 39.012583796216596, lng: -0.18343753009972605},
          label: "Sonda 2",
          animation: google.maps.Animation.DROP,
          map: map
        });

        var sonda3 = new google.maps.Marker({
          position: {lat: 39.00720495033061, lng: -0.183881301062853},
          label: "Sonda 3",
          animation: google.maps.Animation.DROP,
          map: map
        });

        var sonda4 = new google.maps.Marker({
          position: {lat: 39.00934263744238, lng: -0.1784923340801241},
          label: "Sonda 4",
          animation: google.maps.Animation.DROP,
          map: map
        });
        //Marcadores
              let polygon = new google.maps.Polygon({
      paths: [ 
        {lat: 39.010661, lng: -0.189822},
        {lat: 39.015428, lng: -0.183803},
        {lat:39.009254, lng: -0.177260},
        {lat:39.004472, lng: -0.183385},
        {lat: 39.010661, lng: -0.189822}],
    strokeColor: "#ff8000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#ff8000",
    fillOpacity: 0.35,
    map: map
    });
    //Ajustar el mapa a un polígono
    let bounds = new google.maps.LatLngBounds();
    polygon.getPath().getArray().forEach(function (v) {
    bounds.extend(v);
    })
    map.fitBounds(bounds);
                const contentString =
              '<div id="content">' +
              '<div id="siteNotice">' +
              "</div>" +
              '<h1 id="texto11" class="firstHeading">Sonda 1</h1>' +
              '<div id="bodyContent">' +
              '<h2>Humedad</h2>'+
              '<h2>Salinidad</h2>'+
              '<h2>Temperatura</h2>'+
              '<h2>Iluminación</h2>'+
              "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
              "sandstone rock formation in the southern part of the " +
              "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
              "south west of the nearest large town, Alice Springs; 450&#160;km " +
              "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
              "features of the Uluru - Kata Tjuta National Park. Uluru is " +
              "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
              "Aboriginal people of the area. It has many springs, waterholes, " +
              "rock caves and ancient paintings. Uluru is listed as a World " +
              "Heritage Site.</p>" +
              '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
              "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
              "(last visited June 22, 2009).</p>" +
              "</div>" +
              "</div>";
          const infowindow = new google.maps.InfoWindow({
              content: contentString,
          });
  }


