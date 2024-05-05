ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32736").setExtent([290668.491667, 8026631.467983, 297961.915640, 8030203.387244]);
var wms_layers = [];

var format_Harareroads_0 = new ol.format.GeoJSON();
var features_Harareroads_0 = format_Harareroads_0.readFeatures(json_Harareroads_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Harareroads_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Harareroads_0.addFeatures(features_Harareroads_0);
var lyr_Harareroads_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Harareroads_0, 
                style: style_Harareroads_0,
                popuplayertitle: "Harare roads",
                interactive: true,
                title: '<img src="styles/legend/Harareroads_0.png" /> Harare roads'
            });
var format_Points_1 = new ol.format.GeoJSON();
var features_Points_1 = format_Points_1.readFeatures(json_Points_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Points_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Points_1.addFeatures(features_Points_1);
var lyr_Points_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Points_1, 
                style: style_Points_1,
                popuplayertitle: "Points",
                interactive: true,
                title: '<img src="styles/legend/Points_1.png" /> Points'
            });
var format_Existingarkinglotsporitions_2 = new ol.format.GeoJSON();
var features_Existingarkinglotsporitions_2 = format_Existingarkinglotsporitions_2.readFeatures(json_Existingarkinglotsporitions_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Existingarkinglotsporitions_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Existingarkinglotsporitions_2.addFeatures(features_Existingarkinglotsporitions_2);
var lyr_Existingarkinglotsporitions_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Existingarkinglotsporitions_2, 
                style: style_Existingarkinglotsporitions_2,
                popuplayertitle: "Existing arking lots poritions",
                interactive: true,
                title: '<img src="styles/legend/Existingarkinglotsporitions_2.png" /> Existing arking lots poritions'
            });
var format_Harare_CBD_Boundary_3 = new ol.format.GeoJSON();
var features_Harare_CBD_Boundary_3 = format_Harare_CBD_Boundary_3.readFeatures(json_Harare_CBD_Boundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Harare_CBD_Boundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Harare_CBD_Boundary_3.addFeatures(features_Harare_CBD_Boundary_3);
var lyr_Harare_CBD_Boundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Harare_CBD_Boundary_3, 
                style: style_Harare_CBD_Boundary_3,
                popuplayertitle: "Harare_CBD_Boundary",
                interactive: true,
                title: '<img src="styles/legend/Harare_CBD_Boundary_3.png" /> Harare_CBD_Boundary'
            });
var format_Roadconditionmap_4 = new ol.format.GeoJSON();
var features_Roadconditionmap_4 = format_Roadconditionmap_4.readFeatures(json_Roadconditionmap_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_Roadconditionmap_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadconditionmap_4.addFeatures(features_Roadconditionmap_4);
var lyr_Roadconditionmap_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadconditionmap_4, 
                style: style_Roadconditionmap_4,
                popuplayertitle: "Road condition map",
                interactive: true,
    title: 'Road condition map<br />\
    <img src="styles/legend/Roadconditionmap_4_0.png" /> very bad<br />\
    <img src="styles/legend/Roadconditionmap_4_1.png" /> bad<br />\
    <img src="styles/legend/Roadconditionmap_4_2.png" /> medium<br />\
    <img src="styles/legend/Roadconditionmap_4_3.png" /> good<br />\
    <img src="styles/legend/Roadconditionmap_4_4.png" /> very good<br />'
        });
var lyr_suitablelocationsforparkingstations_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webmap:Suitable%20locations%20for%20parking%20stations",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "suitable locations for parking stations",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_suitablelocationsforparkingstations_5, 0]);
var lyr_Harareroads_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webapp:harare_roads",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Harare roads",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Harareroads_6, 0]);
var lyr_suitablelocationsforparkingstations_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webmap:Suitable%20locations%20for%20parking%20stations",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "suitable locations for parking stations",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_suitablelocationsforparkingstations_7, 0]);
var lyr_trueroads_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webmaps:Roads%20maintenance%20actions",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "true roads",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_trueroads_8, 0]);
var lyr_trueroads_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "webmap:Road%20maintainance%20map",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "true roads",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_trueroads_9, 0]);

        var lyr_OpenStreetMap_10 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_suitablelocationsforparkingstations_11 = new ol.format.GeoJSON();
var features_suitablelocationsforparkingstations_11 = format_suitablelocationsforparkingstations_11.readFeatures(json_suitablelocationsforparkingstations_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_suitablelocationsforparkingstations_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_suitablelocationsforparkingstations_11.addFeatures(features_suitablelocationsforparkingstations_11);
var lyr_suitablelocationsforparkingstations_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_suitablelocationsforparkingstations_11, 
                style: style_suitablelocationsforparkingstations_11,
                popuplayertitle: "suitable locations for parking stations",
                interactive: true,
    title: 'suitable locations for parking stations<br />\
    <img src="styles/legend/suitablelocationsforparkingstations_11_0.png" /> not suitable<br />\
    <img src="styles/legend/suitablelocationsforparkingstations_11_1.png" /> suitable<br />\
    <img src="styles/legend/suitablelocationsforparkingstations_11_2.png" /> more suitable<br />'
        });
var format_suitability_for_parking_station_1_12 = new ol.format.GeoJSON();
var features_suitability_for_parking_station_1_12 = format_suitability_for_parking_station_1_12.readFeatures(json_suitability_for_parking_station_1_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32736'});
var jsonSource_suitability_for_parking_station_1_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_suitability_for_parking_station_1_12.addFeatures(features_suitability_for_parking_station_1_12);
var lyr_suitability_for_parking_station_1_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_suitability_for_parking_station_1_12, 
                style: style_suitability_for_parking_station_1_12,
                popuplayertitle: "suitability_for_parking_station_1",
                interactive: true,
    title: 'suitability_for_parking_station_1<br />\
    <img src="styles/legend/suitability_for_parking_station_1_12_0.png" /> low<br />\
    <img src="styles/legend/suitability_for_parking_station_1_12_1.png" /> medium<br />\
    <img src="styles/legend/suitability_for_parking_station_1_12_2.png" /> high<br />\
    <img src="styles/legend/suitability_for_parking_station_1_12_3.png" /> very high<br />'
        });

lyr_Harareroads_0.setVisible(true);lyr_Points_1.setVisible(true);lyr_Existingarkinglotsporitions_2.setVisible(true);lyr_Harare_CBD_Boundary_3.setVisible(true);lyr_Roadconditionmap_4.setVisible(true);lyr_suitablelocationsforparkingstations_5.setVisible(true);lyr_Harareroads_6.setVisible(true);lyr_suitablelocationsforparkingstations_7.setVisible(true);lyr_trueroads_8.setVisible(true);lyr_trueroads_9.setVisible(true);lyr_OpenStreetMap_10.setVisible(true);lyr_suitablelocationsforparkingstations_11.setVisible(true);lyr_suitability_for_parking_station_1_12.setVisible(true);
var layersList = [lyr_Harareroads_0,lyr_Points_1,lyr_Existingarkinglotsporitions_2,lyr_Harare_CBD_Boundary_3,lyr_Roadconditionmap_4,lyr_suitablelocationsforparkingstations_5,lyr_Harareroads_6,lyr_suitablelocationsforparkingstations_7,lyr_trueroads_8,lyr_trueroads_9,lyr_OpenStreetMap_10,lyr_suitablelocationsforparkingstations_11,lyr_suitability_for_parking_station_1_12];
lyr_Harareroads_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'maxspeed': 'maxspeed', 'Shape_Leng': 'Shape_Leng', });
lyr_Points_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Existingarkinglotsporitions_2.set('fieldAliases', {'Id': 'Id', });
lyr_Harare_CBD_Boundary_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Roadconditionmap_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'road_condi': 'road condition', 'Road_manta': 'Road_manta', });
lyr_suitablelocationsforparkingstations_11.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_suitability_for_parking_station_1_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Harareroads_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'oneway': 'Range', 'bridge': 'Range', 'maxspeed': 'Range', 'Shape_Leng': 'TextEdit', });
lyr_Points_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Existingarkinglotsporitions_2.set('fieldImages', {'Id': 'Range', });
lyr_Harare_CBD_Boundary_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Roadconditionmap_4.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'road_condi': 'TextEdit', 'Road_manta': 'TextEdit', });
lyr_suitablelocationsforparkingstations_11.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', });
lyr_suitability_for_parking_station_1_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Harareroads_0.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'name': 'inline label - always visible', 'ref': 'no label', 'type': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', 'Shape_Leng': 'no label', });
lyr_Points_1.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'header label - visible with data', });
lyr_Existingarkinglotsporitions_2.set('fieldLabels', {'Id': 'inline label - always visible', });
lyr_Harare_CBD_Boundary_3.set('fieldLabels', {'OBJECTID': 'no label', 'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'inline label - always visible', 'NL_NAME_2': 'no label', 'NAME_3': 'inline label - always visible', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Roadconditionmap_4.set('fieldLabels', {'osm_id': 'inline label - always visible', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'road_condi': 'inline label - always visible', 'Road_manta': 'header label - visible with data', });
lyr_suitablelocationsforparkingstations_11.set('fieldLabels', {'Id': 'no label', 'gridcode': 'inline label - always visible', });
lyr_suitability_for_parking_station_1_12.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_suitability_for_parking_station_1_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});