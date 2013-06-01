function onDocumentReady() {
	var map = L.map('mapa', {
		center: [43, -2],
		zoom: 10 
	});


	var tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
	map.addLayer(tiles);

	map.locate({
		enableHighAccuracy: true
	});
	map.on('locationfound', onLocationFound);

	function onLocationFound(position) {
		var mycoords = position.latlng;
		var marker = L.marker([mycoords.lat, mycoords.lng]);

		map.panTo(mycoords);
		map.addLayer(marker);
		marker.bindPopup('Hemen zaude');
	}
}

$(document).on('ready', onDocumentReady);
