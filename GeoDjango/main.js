window.onload = init;

function init(){
    //const mymap = L.map('mapid', {
    //    center: [48,14],
    //    zoom: 4,
    //    layers: [
    //        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //        })
    //    ]
    //})

    //mymap.on('resize', function(e){
    //    window.alert("HEY! STOP THAT!");
    //})

    const apiKey = "AAPK36b4dcac7313412aad08f24503023196XZ-ymNsJ6CefFdDzaKXCmfSxO1Tf7OeDK-lJkIMhcKNpQf1KYYxsp5qYIGEVT7bI";
    
    const basemapEnum = "arcgis/streets";

    const map = L.map("mapid", {
      minZoom: 2
    }).setView([44.02, -112], 6);

    L.esri.Vector.vectorBasemapLayer(basemapEnum, {
      apiKey: apiKey
    }).addTo(map);

    var parks = L.esri
    .featureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space_Styled/FeatureServer/0"
    });

    var madrones = L.esri
    .featureLayer({
        url: "https://services5.arcgis.com/W1uyphp8h2tna3qJ/arcgis/rest/services/shp4Zipped/FeatureServer/0"
    });

    madrones.addTo(map);


}