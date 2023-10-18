function initMap() {
    var soehat = {lat: -7.257470, lng: 112.752083};
    var kawi = {lat: -7.261530, lng: 112.748400};
    var wendit = {lat:-7.951305972671428, lng:112.67309083069293}
    var tumpang = {lat:-8.008545025717885, lng:112.76059315618534}
    var pendem = {lat:-7.901900699015055, lng:112.58044001856311}
    var batu = {lat:-7.878115427981514, lng:112.53480062970101}
    var sukun = {lat:-8.002859523614633, lng:112.61862264554344}
    var pakisaji = {lat:-8.062209440569037, lng:112.60217464826412}
    var mondoroko = {lat:-7.900226771165285, lng:112.66459216434743}

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: soehat
    });

    var map2 = new google.maps.Map(document.getElementById('map2'), {
        zoom: 15,
        center: kawi
    });

    var map3 = new google.maps.Map(document.getElementById('map3'), {
        zoom: 15,
        center: wendit
    });

    var map4 = new google.maps.Map(document.getElementById('map4'), {
        zoom: 15,
        center: tumpang
    });

    var map5 = new google.maps.Map(document.getElementById('map5'), {
        zoom: 15,
        center: pendem
    });

    var map6 = new google.maps.Map(document.getElementById('map6'), {
        zoom: 15,
        center: batu
    });

    var map7 = new google.maps.Map(document.getElementById('map7'), {
        zoom: 15,
        center: sukun
    });

    var map8 = new google.maps.Map(document.getElementById('map8'), {
        zoom: 15,
        center: pakisaji
    });

    var map9 = new google.maps.Map(document.getElementById('map9'), {
        zoom: 15,
        center: mondoroko
    });

    var marker = new google.maps.Marker({
        position: soehat,
        map: map
    });

    var marker2 = new google.maps.Marker({
        position: kawi,
        map: map2
    });

    var marker3 = new google.maps.Marker({
        position: wendit,
        map: map3
    });

    var marker4 = new google.maps.Marker({
        position: tumpang,
        map: map4
    });

    var marker5 = new google.maps.Marker({
        position: pendem,
        map: map5
    });

    var marker6 = new google.maps.Marker({
        position: batu,
        map: map6
    });

    var marker7 = new google.maps.Marker({
        position: sukun,
        map: map7
    });

    var marker8 = new google.maps.Marker({
        position: pakisaji,
        map: map8
    });

    var marker9 = new google.maps.Marker({
        position: mondoroko,
        map: map9
    });
}