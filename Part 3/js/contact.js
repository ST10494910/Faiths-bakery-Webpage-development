var map = L.map('map').setView([-33.9249, 18.4241],13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
	maxZoom:19,
	attribution: '&copy; OpenStreetMap Contributors'
}).addTo(map);

var marker = L.marker([-33.9249,18.4241]).addTo(map);

marker.bindPopup("<b>We are here!</b><br>Cape Town").openPopup();