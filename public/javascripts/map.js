var mymap = L.map('main_map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ' &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(mymap);

L.marker([51.505, -0.09]).addTo(mymap);
L.marker([51.500, -0.15]).addTo(mymap);
L.marker([51.495, -0.09]).addTo(mymap);