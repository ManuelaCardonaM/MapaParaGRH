var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIStandard_1 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Cantidadpozosporcuadrcula_2 = new ol.format.GeoJSON();
var features_Cantidadpozosporcuadrcula_2 = format_Cantidadpozosporcuadrcula_2.readFeatures(json_Cantidadpozosporcuadrcula_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cantidadpozosporcuadrcula_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cantidadpozosporcuadrcula_2.addFeatures(features_Cantidadpozosporcuadrcula_2);
var lyr_Cantidadpozosporcuadrcula_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cantidadpozosporcuadrcula_2, 
                style: style_Cantidadpozosporcuadrcula_2,
                popuplayertitle: 'Cantidad pozos por cuadrícula',
                interactive: true,
    title: 'Cantidad pozos por cuadrícula<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_0.png" /> 0<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_1.png" /> 1<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_2.png" /> 2<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_3.png" /> 3<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_4.png" /> 4<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_5.png" /> 5<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_6.png" /> 6<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_7.png" /> 7<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_8.png" /> 8<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_9.png" /> 9<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_10.png" /> 12<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_11.png" /> 13<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_12.png" /> 14<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_13.png" /> 15<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_14.png" /> 17<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_15.png" /> 18<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_16.png" /> 19<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_17.png" /> 24<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_18.png" /> 27<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_19.png" /> 28<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_20.png" /> 30<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_21.png" /> 41<br />\
    <img src="styles/legend/Cantidadpozosporcuadrcula_2_22.png" /> 48<br />' });
var format_PozosDINAGUAenRaign_3 = new ol.format.GeoJSON();
var features_PozosDINAGUAenRaign_3 = format_PozosDINAGUAenRaign_3.readFeatures(json_PozosDINAGUAenRaign_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PozosDINAGUAenRaign_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PozosDINAGUAenRaign_3.addFeatures(features_PozosDINAGUAenRaign_3);
var lyr_PozosDINAGUAenRaign_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PozosDINAGUAenRaign_3, 
                style: style_PozosDINAGUAenRaign_3,
                popuplayertitle: 'Pozos DINAGUA en Raigón',
                interactive: true,
                title: '<img src="styles/legend/PozosDINAGUAenRaign_3.png" /> Pozos DINAGUA en Raigón'
            });
var format_PozosDINAMIGEenRaign_4 = new ol.format.GeoJSON();
var features_PozosDINAMIGEenRaign_4 = format_PozosDINAMIGEenRaign_4.readFeatures(json_PozosDINAMIGEenRaign_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PozosDINAMIGEenRaign_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PozosDINAMIGEenRaign_4.addFeatures(features_PozosDINAMIGEenRaign_4);
var lyr_PozosDINAMIGEenRaign_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PozosDINAMIGEenRaign_4, 
                style: style_PozosDINAMIGEenRaign_4,
                popuplayertitle: 'Pozos DINAMIGE en Raigón',
                interactive: true,
                title: '<img src="styles/legend/PozosDINAMIGEenRaign_4.png" /> Pozos DINAMIGE en Raigón'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRIStandard_1.setVisible(true);lyr_Cantidadpozosporcuadrcula_2.setVisible(true);lyr_PozosDINAGUAenRaign_3.setVisible(true);lyr_PozosDINAMIGEenRaign_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ESRIStandard_1,lyr_Cantidadpozosporcuadrcula_2,lyr_PozosDINAGUAenRaign_3,lyr_PozosDINAMIGEenRaign_4];
lyr_Cantidadpozosporcuadrcula_2.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'NUMPOINTS': 'Pozos DINAMIGE', });
lyr_PozosDINAGUAenRaign_3.set('fieldAliases', {'id': 'ID', 'idsolicitu': 'ID solicitud', 'padron': 'Padrón', 'uso': 'Uso', 'destino': 'Destino', 'departamen': 'departamen', 'curso': 'curso', 'FID': 'FID', });
lyr_PozosDINAMIGEenRaign_4.set('fieldAliases', {'NumPozo': 'Número Pozo', 'CoordX': 'Coodenada X', 'CoordY': 'Coordenada Y', 'CoordZ': 'CoordZ', 'IdPozo': 'ID ', 'UltimoCaud': 'Caudal', 'Profundida': 'Profundidad', 'FID': 'FID', });
lyr_Cantidadpozosporcuadrcula_2.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'NUMPOINTS': 'TextEdit', });
lyr_PozosDINAGUAenRaign_3.set('fieldImages', {'id': 'Range', 'idsolicitu': 'TextEdit', 'padron': 'TextEdit', 'uso': 'TextEdit', 'destino': 'TextEdit', 'departamen': 'TextEdit', 'curso': 'TextEdit', 'FID': 'TextEdit', });
lyr_PozosDINAMIGEenRaign_4.set('fieldImages', {'NumPozo': 'TextEdit', 'CoordX': 'TextEdit', 'CoordY': 'TextEdit', 'CoordZ': 'TextEdit', 'IdPozo': 'TextEdit', 'UltimoCaud': 'TextEdit', 'Profundida': 'TextEdit', 'FID': 'TextEdit', });
lyr_Cantidadpozosporcuadrcula_2.set('fieldLabels', {'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'NUMPOINTS': 'inline label - always visible', });
lyr_PozosDINAGUAenRaign_3.set('fieldLabels', {'id': 'hidden field', 'idsolicitu': 'inline label - always visible', 'padron': 'inline label - always visible', 'uso': 'inline label - always visible', 'destino': 'inline label - always visible', 'departamen': 'hidden field', 'curso': 'hidden field', 'FID': 'hidden field', });
lyr_PozosDINAMIGEenRaign_4.set('fieldLabels', {'NumPozo': 'inline label - always visible', 'CoordX': 'inline label - always visible', 'CoordY': 'inline label - always visible', 'CoordZ': 'hidden field', 'IdPozo': 'inline label - always visible', 'UltimoCaud': 'inline label - always visible', 'Profundida': 'inline label - always visible', 'FID': 'hidden field', });
lyr_PozosDINAMIGEenRaign_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});