function initMap() {
        var grouseLatLng = {lat: 49.379556, lng: -123.081803};
        var cavemanLatLng = {lat: 49.280837, lng: -123.1076061};
        var crocodileLatLng = {lat: 49.2825649, lng: -123.1253563};
        var memphisLatLng = {lat: 49.2796164, lng: -123.1175019};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: crocodileLatLng
        });

        var grouseMarker = new google.maps.Marker({
          position: grouseLatLng,
          draggable: true,
          animation: google.maps.Animation.DROP,
          map: map,
          title: 'Grouse Mountain!',
          words: ", also referred to as <b>a local mountain</b>, is one of the North Shore Mountains of the Pacific Ranges in the District Municipality of North Vancouver, British Columbia, Canada. It is way overcrowded.",
          wiki: 'https://en.wikipedia.org/wiki/Grouse_Mountain'
        });
        var cavemanMarker = new google.maps.Marker({
          position: cavemanLatLng,
          draggable: true,
          animation: google.maps.Animation.DROP,
          map: map,
          title: 'Caveman foods!',
          words: ", also referred to as <b>awesome food place</b>, Get the lamb platter.",
          wiki: 'http://www.cavemanfoods.com/'
        });
        var crocodileMarker = new google.maps.Marker({
          position: crocodileLatLng, 
          draggable: true,
          animation: google.maps.Animation.DROP,
          map: map, 
          title: "Le Crocodile",
          words: " mmmmmmmmmmm, get the caribou or foie gras. Ask for Pierre.",
          wiki: 'http://lecrocodilerestaurant.com/'
        });
        var memphisMarker = new google.maps.Marker({
          position: memphisLatLng, 
          draggable: true,
          animation: google.maps.Animation.DROP,
          map: map, 
          title: "Memphis Blues",
          words: " mmmm BBQ",
          wiki: 'http://www.memphisbluesbbq.com/'
        });

        var markers = [grouseMarker, cavemanMarker, crocodileMarker]

        markers.forEach(function(marker){

          var infoString = '<div id="content">' +
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">' + marker.title + '</h1>'+
            '<div id="bodyContent">'+
            '<p><b>' + marker.title + '</b>' + marker.words + '</p>'+
            '<p>Attribution: <a href=' + marker.wiki + '>' + marker.wiki + '</a> </p>'+
            '</div>'+
            '</div>';

          var infoWindow = new google.maps.InfoWindow({
          content: infoString
          });

          marker.addListener('click', function() {
              infoWindow.open(map, marker);
          });

          function toggleBounce() {
            if (marker.getAnimation() !== null) {
              marker.setAnimation(null);
            } else {
              marker.setAnimation(google.maps.Animation.BOUNCE);
            }
          }

        });
      }