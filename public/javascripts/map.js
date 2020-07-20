var mymap = L.map('main_map').setView([-8.050692, -34.959616], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ' &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(mymap);

L.marker([-8.049002, -34.957637]).addTo(mymap);

$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    succes: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici) {
            L.marker([bici.ubicacion]).addTo(mymap);
        });
    }
})