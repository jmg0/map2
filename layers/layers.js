var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_DarkMatter_1 = new ol.layer.Tile({
            'title': 'Dark Matter',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_b1_2 = new ol.format.GeoJSON();
var features_b1_2 = format_b1_2.readFeatures(json_b1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_b1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_b1_2.addFeatures(features_b1_2);
var lyr_b1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_b1_2, 
                style: style_b1_2,
                interactive: false,
    title: 'b1<br />\
    <img src="styles/legend/b1_2_0.png" /> -200 - -20000<br />\
    <img src="styles/legend/b1_2_1.png" /> 150 - 15000<br />\
    <img src="styles/legend/b1_2_2.png" /> 350 - 35000<br />\
    <img src="styles/legend/b1_2_3.png" /> 600 - 60000<br />\
    <img src="styles/legend/b1_2_4.png" /> 1000 - 100000<br />'
        });
var format_b1_3 = new ol.format.GeoJSON();
var features_b1_3 = format_b1_3.readFeatures(json_b1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_b1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_b1_3.addFeatures(features_b1_3);
var lyr_b1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_b1_3, 
                style: style_b1_3,
                interactive: false,
    title: 'b1<br />\
    <img src="styles/legend/b1_3_0.png" /> -200 - -20000<br />\
    <img src="styles/legend/b1_3_1.png" /> 150 - 15000<br />\
    <img src="styles/legend/b1_3_2.png" /> 350 - 35000<br />\
    <img src="styles/legend/b1_3_3.png" /> 600 - 60000<br />\
    <img src="styles/legend/b1_3_4.png" /> 1000 - 100000<br />'
        });

lyr_OpenStreetMap_0.setVisible(false);lyr_DarkMatter_1.setVisible(true);lyr_b1_2.setVisible(true);lyr_b1_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DarkMatter_1,lyr_b1_2,lyr_b1_3];
lyr_b1_2.set('fieldAliases', {'Contribution Total': 'Contribution Total', 'Number of Contributions': 'Number of Contributions', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_b1_3.set('fieldAliases', {'Contribution Total': 'Contribution Total', 'Number of Contributions': 'Number of Contributions', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_b1_2.set('fieldImages', {'Contribution Total': '', 'Number of Contributions': '', 'Latitude': '', 'Longitude': '', });
lyr_b1_3.set('fieldImages', {'Contribution Total': '', 'Number of Contributions': '', 'Latitude': '', 'Longitude': '', });
lyr_b1_2.set('fieldLabels', {'Contribution Total': 'no label', 'Number of Contributions': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_b1_3.set('fieldLabels', {'Contribution Total': 'no label', 'Number of Contributions': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_b1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});