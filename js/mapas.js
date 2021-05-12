    let map;

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
      }