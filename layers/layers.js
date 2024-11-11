var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PARROQUIASPORELECTORES_1 = new ol.format.GeoJSON();
var features_PARROQUIASPORELECTORES_1 = format_PARROQUIASPORELECTORES_1.readFeatures(json_PARROQUIASPORELECTORES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARROQUIASPORELECTORES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARROQUIASPORELECTORES_1.addFeatures(features_PARROQUIASPORELECTORES_1);
var lyr_PARROQUIASPORELECTORES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARROQUIASPORELECTORES_1, 
                style: style_PARROQUIASPORELECTORES_1,
                popuplayertitle: "PARROQUIAS POR ELECTORES",
                interactive: true,
    title: 'PARROQUIAS POR ELECTORES<br />\
    <img src="styles/legend/PARROQUIASPORELECTORES_1_0.png" /> 20.000 - 40.000<br />\
    <img src="styles/legend/PARROQUIASPORELECTORES_1_1.png" /> 40.000 - 60.000<br />\
    <img src="styles/legend/PARROQUIASPORELECTORES_1_2.png" /> 60.000 - 80.000<br />\
    <img src="styles/legend/PARROQUIASPORELECTORES_1_3.png" /> 80.000 - 100.000<br />\
    <img src="styles/legend/PARROQUIASPORELECTORES_1_4.png" /> 100.000 - 300.000<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_PARROQUIASPORELECTORES_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PARROQUIASPORELECTORES_1];
lyr_PARROQUIASPORELECTORES_1.set('fieldAliases', {'PARROQUIAS': 'PARROQUIAS', 'Electores': 'ELECTORES', });
lyr_PARROQUIASPORELECTORES_1.set('fieldImages', {'PARROQUIAS': 'TextEdit', 'Electores': 'Range', });
lyr_PARROQUIASPORELECTORES_1.set('fieldLabels', {'PARROQUIAS': 'inline label - always visible', 'Electores': 'inline label - always visible', });
lyr_PARROQUIASPORELECTORES_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});