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

    window.map = map;

    L.esri.Vector.vectorBasemapLayer(basemapEnum, {
      apiKey: apiKey
    }).addTo(map);

    var parks = L.esri
    .featureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space_Styled/FeatureServer/0"
    });
    
    const species = ["andrachne", "andrachnoides", "androsterilis", "arizonica", "bicolor", "canariensis", "madrensis", "menziesii", "mollis", "tessellata", "unedo", "xalapensis"]
    const colors = ["#d14f4f", "#e8a05d", "#cfc73e", "#679e3a", "#336338", "#7cbfa4", "#7cb2bf", "#6487b5", "#1e2173", "#7e5fb8", "#c000d0", "#8a060e"]
  

    var andrachne = L.esri
    .featureLayer({
        url: "https://services5.arcgis.com/W1uyphp8h2tna3qJ/arcgis/rest/services/Arbutus_andrachne/FeatureServer/0",
        style: () => {
          return {
            color: "#d14f4f",
            dashArray: "2, 3",
            dashOffset: "2",
            weight: "1.5"
          };
        }
    });
    andrachne.addTo(map);
    window.andrachne = andrachne;
    
    var andrachnoides = L.esri
    .featureLayer({
        url: "https://services5.arcgis.com/W1uyphp8h2tna3qJ/arcgis/rest/services/Arbutus_andrachnoides/FeatureServer/0",
        style: () => {
          return {
            color: "#e8a05d",
            dashArray: "2, 3",
            dashOffset: "2",
            weight: "1.5"
          };
        }
    });
    andrachnoides.addTo(map);
    window.andrachnoides = andrachnoides;

    var androsterilis = L.esri
    .featureLayer({
        url: "https://services5.arcgis.com/W1uyphp8h2tna3qJ/arcgis/rest/services/Arbutus_androsterilis/FeatureServer/0",
        style: () => {
          return {
            color: "#cfc73e",
            dashArray: "2, 3",
            dashOffset: "2",
            weight: "1.5"
          };
        }
    });
    androsterilis.addTo(map);
    window.androsterilis = androsterilis;

    var arizonica = L.esri
    .featureLayer({
        url: "https://services5.arcgis.com/W1uyphp8h2tna3qJ/arcgis/rest/services/Arbutus_arizonica/FeatureServer/0",
        style: () => {
          return {
            color: "#679e3a",
            dashArray: "2, 3",
            dashOffset: "2",
            weight: "1.5"
          };
        }
    });
    arizonica.addTo(map);
    window.arizonica = arizonica;

    var bicolor = L.esri
    .featureLayer({
        url: "https://services5.arcgis.com/W1uyphp8h2tna3qJ/arcgis/rest/services/Arbutus_bicolor/FeatureServer/0",
        style: () => {
          return {
            color: "#336338",
            dashArray: "2, 3",
            dashOffset: "2",
            weight: "1.5"
          };
        }
    });
    bicolor.addTo(map);
    window.bicolor = bicolor;

    var canariensis = L.esri
    .featureLayer({
        url: "https://services5.arcgis.com/W1uyphp8h2tna3qJ/arcgis/rest/services/Arbutus_canariensis/FeatureServer/0",
        style: () => {
          return {
            color: "#7cbfa4",
            dashArray: "2, 3",
            dashOffset: "2",
            weight: "1.5"
          };
        }
    });
    canariensis.addTo(map);
    window.canariensis = canariensis;

    var madrensis = L.esri
    .featureLayer({
        url: "https://services5.arcgis.com/W1uyphp8h2tna3qJ/arcgis/rest/services/Arbutus_madrensis/FeatureServer/0",
        style: () => {
          return {
            color: "#7cb2bf",
            dashArray: "2, 3",
            dashOffset: "2",
            weight: "1.5"
          };
        }
    });
    madrensis.addTo(map);
    window.madrensis = madrensis;

    var menziesii = L.esri
    .featureLayer({
        url: "https://services5.arcgis.com/W1uyphp8h2tna3qJ/arcgis/rest/services/Arbutus_menziesii/FeatureServer/0",
        style: () => {
          return {
            color: "#6487b5",
            dashArray: "2, 3",
            dashOffset: "2",
            weight: "1.5"
          };
        }
    });
    menziesii.addTo(map);
    window.menziesii = menziesii;

    var mollis = L.esri
    .featureLayer({
        url: "https://services5.arcgis.com/W1uyphp8h2tna3qJ/arcgis/rest/services/Arbutus_mollis/FeatureServer/0",
        style: () => {
          return {
            color: "#1e2173",
            dashArray: "2, 3",
            dashOffset: "2",
            weight: "1.5"
          };
        }
    });
    mollis.addTo(map);
    window.mollis = mollis;

    var tessellata = L.esri
    .featureLayer({
        url: "https://services5.arcgis.com/W1uyphp8h2tna3qJ/arcgis/rest/services/Arbutus_tessellata/FeatureServer/0",
        style: () => {
          return {
            color: "#7e5fb8",
            dashArray: "2, 3",
            dashOffset: "2",
            weight: "1.5"
          };
        }
    });
    tessellata.addTo(map);
    window.tessellata = tessellata;

    var unedo = L.esri
    .featureLayer({
        url: 'https://services5.arcgis.com/W1uyphp8h2tna3qJ/arcgis/rest/services/Arbutus_unedo/FeatureServer/0',
        style: () => {
          return {
            color: "#c000d0",
            dashArray: "2, 3",
            dashOffset: "2",
            weight: "1.5"
          };
        }
    });
    unedo.addTo(map);
    window.unedo = unedo;

    var xalapensis = L.esri
    .featureLayer({
        url: 'https://services5.arcgis.com/W1uyphp8h2tna3qJ/arcgis/rest/services/Arbutus_xalapensis/FeatureServer/0',
        style: () => {
          return {
            color: "#8a060e",
            dashArray: "2, 3",
            dashOffset: "2",
            weight: "1.5"
          };
        }
    });
    xalapensis.addTo(map);
    window.xalapensis = xalapensis;

    //Legend
    var legend = L.control({ position: "topleft" });

    legend.onAdd = function(map) {
      var div = L.DomUtil.create("div", "legend");
      div.innerHTML += "<h4>Species</h4>";
      for (let i = 0; i < species.length; i++) {
        /*div.innerHTML += '<i style="background: #A24ABF"></i>';*/
        /*div.innerHTML += '<i style="background:' + colors[i] + '"></i><button onclick="togglePoints(' + species[i] + ',' + i+');">' + species[i]+'</button><br>';*/
        div.innerHTML += ' <div style="background:' + colors[i] + '; color:white; display:flex; justify-content:space-between; padding:5px">' + species[i] + ' <input type="checkbox", checked="checked" class="regular-checkbox", onchange="togglePoints(' + species[i] + ',' + i+');"' + species[i] + '" name="' + species[i] + '> <label for="' + species[i] + '"> </label> </div>';
      } 

      return div;
    };

    legend.addTo(map);
    window.toggleList = Array(species.length).fill(false);
  }


function togglePoints(layer, i) {
    if(!toggleList[i]) {
      layer.remove(map);
    } else {
      layer.addTo(map);
    }
    toggleList[i] = !toggleList[i];
}