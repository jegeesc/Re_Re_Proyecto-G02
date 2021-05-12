    let map;

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
      }

      function addMarker() {
        let lat = parseFloat(document.getElementById('lat').value);
        let lng = parseFloat(document.getElementById('lng').value);

        var nuevasonda = new google.maps.Marker({
          position: {lat: lat, lng: lng},
          label: "Nueva Sonda",
          animation: google.maps.Animation.DROP,
          map: map
        });

        map.panTo(nuevasonda.getPosition());
      //Marcadores
  }

//////
 /*     let map;
      function initMap() {
        //console.log("Google Maps cargado!!");
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 39.00971602044704, lng: -0.18356627613238444},
          zoom: 14,
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
        <!-- ------Poner un punto fijo en el mapa---------------- -->
        var sonda1 = new google.maps.Marker({
          position: {lat: 39.01068307409519, lng: -0.18946713596529477},
          label: "Sonda 1",
          animation: google.maps.Animation.DROP,
          map: map
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

        var sonda5 = new google.maps.Marker({
          position: {lat: 39.010120421070205, lng: -0.18338794918204276},
          label: "Sonda 4",
          animation: google.maps.Animation.DROP,
          map: map
        });
        <!-- ---------------------------------------------------- -->
      }

      function addMarker() {
        let lat = parseFloat(document.getElementById('lat').value);
        let lng = parseFloat(document.getElementById('lng').value);

        var nuevasonda = new google.maps.Marker({
          position: {lat: lat, lng: lng},
          label: "Nueva Sonda",
          animation: google.maps.Animation.DROP,
          map: map
        });

        map.panTo(nuevasonda.getPosition());
      }*/