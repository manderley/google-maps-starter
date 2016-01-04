var map;

var lat = document.getElementById('latitude');
var lng = document.getElementById('longitude');

function loadMap() {
	
	// Set the map options
	var mapOptions = {
		// zoom on load (required)
		zoom: 11,
		// map center (required)
		center: new google.maps.LatLng(40.748817,-73.985428),

		// limit min/max zoom
		//minZoom: 10,
		//maxZoom: 12,

		// map control
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			mapTypeIds: [
				google.maps.MapTypeId.ROADMAP,
				google.maps.MapTypeId.SATELLITE,
				google.maps.MapTypeId.HYBRID,
				google.maps.MapTypeId.TERRAIN
			],
			position: google.maps.ControlPosition.TOP_RIGHT
		},

		// set map type
		mapTypeId: google.maps.MapTypeId.ROADMAP,

		// zoom controls
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.RIGHT_TOP
		},

		styles: appleStyle
	};

	// Get the id of the map container div
	var mapid = document.getElementById('map-container');

	// Create the map
	map = new google.maps.Map(mapid, mapOptions);

	updateCurrentLatLng(map.getCenter());

}


function updateCurrentLatLng(LatLng) {
	latitude.innerHTML = LatLng.lat();
	longitude.innerHTML = LatLng.lng();
}

// Load the map
google.maps.event.addDomListener(window, 'load', loadMap());
