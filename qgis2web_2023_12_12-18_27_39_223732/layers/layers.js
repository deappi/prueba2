var wms_layers = [];


        var lyr_googlemaps_0 = new ol.layer.Tile({
            'title': 'google maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Mentora_act_1 = new ol.format.GeoJSON();
var features_Mentora_act_1 = format_Mentora_act_1.readFeatures(json_Mentora_act_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mentora_act_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mentora_act_1.addFeatures(features_Mentora_act_1);
var lyr_Mentora_act_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mentora_act_1, 
                style: style_Mentora_act_1,
                interactive: true,
                title: '<img src="styles/legend/Mentora_act_1.png" /> Mentoría_act'
            });

lyr_googlemaps_0.setVisible(true);lyr_Mentora_act_1.setVisible(true);
var layersList = [lyr_googlemaps_0,lyr_Mentora_act_1];
lyr_Mentora_act_1.set('fieldAliases', {'No.': 'No.', 'Caso': 'Caso', 'Clave': 'Clave', 'Fecha de c': 'Fecha de c', 'Apellido P': 'Apellido P', 'Apellido M': 'Apellido M', 'Nombre': 'Nombre', 'Sobrenombr': 'Sobrenombr', 'Sexo': 'Sexo', 'Fecha de N': 'Fecha de N', 'Edad': 'Edad', 'CURP': 'CURP', 'Parentesco': 'Parentesco', 'Coordenada': 'Coordenada', 'Coordena_1': 'Coordena_1', 'Direcci�': 'Direcci�', 'Ubicacion': 'Ubicacion', 'Colonia': 'Colonia', 'Alcald�a': 'Alcald�a', 'Mentor asi': 'Mentor asi', 'Componente': 'Componente', 'Sector': 'Sector', 'Fecha de r': 'Fecha de r', 'VP': 'VP', 'VE': 'VE', 'VEF': 'VEF', 'VC': 'VC', '2020': '2020', '2021': '2021', '2022': '2022', '2023': '2023', 'Apoyo unic': 'Apoyo unic', 'Beca Leona': 'Beca Leona', 'SAT': 'SAT', 'INE': 'INE', 'Despensa': 'Despensa', 'Acta de Na': 'Acta de Na', 'Medicament': 'Medicament', 'Donaciones': 'Donaciones', 'Canirac': 'Canirac', 'Grupo Varg': 'Grupo Varg', 'Psicologia': 'Psicologia', 'Asesoria J': 'Asesoria J', 'PSAF': 'PSAF', 'INEA': 'INEA', 'HospTox': 'HospTox', 'Box': 'Box', 'Status fin': 'Status fin', 'Pendientes': 'Pendientes', });
lyr_Mentora_act_1.set('fieldImages', {'No.': '', 'Caso': '', 'Clave': '', 'Fecha de c': '', 'Apellido P': '', 'Apellido M': '', 'Nombre': '', 'Sobrenombr': '', 'Sexo': '', 'Fecha de N': '', 'Edad': '', 'CURP': '', 'Parentesco': '', 'Coordenada': '', 'Coordena_1': '', 'Direcci�': '', 'Ubicacion': '', 'Colonia': '', 'Alcald�a': '', 'Mentor asi': '', 'Componente': '', 'Sector': '', 'Fecha de r': '', 'VP': '', 'VE': '', 'VEF': '', 'VC': '', '2020': '', '2021': '', '2022': '', '2023': '', 'Apoyo unic': '', 'Beca Leona': '', 'SAT': '', 'INE': '', 'Despensa': '', 'Acta de Na': '', 'Medicament': '', 'Donaciones': '', 'Canirac': '', 'Grupo Varg': '', 'Psicologia': '', 'Asesoria J': '', 'PSAF': '', 'INEA': '', 'HospTox': '', 'Box': '', 'Status fin': '', 'Pendientes': '', });
lyr_Mentora_act_1.set('fieldLabels', {'No.': 'inline label', 'Caso': 'inline label', 'Clave': 'inline label', 'Fecha de c': 'inline label', 'Apellido P': 'inline label', 'Apellido M': 'inline label', 'Nombre': 'inline label', 'Sobrenombr': 'inline label', 'Sexo': 'inline label', 'Fecha de N': 'inline label', 'Edad': 'inline label', 'CURP': 'inline label', 'Parentesco': 'inline label', 'Coordenada': 'inline label', 'Coordena_1': 'inline label', 'Direcci�': 'inline label', 'Ubicacion': 'inline label', 'Colonia': 'inline label', 'Alcald�a': 'inline label', 'Mentor asi': 'inline label', 'Componente': 'inline label', 'Sector': 'inline label', 'Fecha de r': 'inline label', 'VP': 'inline label', 'VE': 'inline label', 'VEF': 'inline label', 'VC': 'inline label', '2020': 'inline label', '2021': 'inline label', '2022': 'inline label', '2023': 'inline label', 'Apoyo unic': 'inline label', 'Beca Leona': 'inline label', 'SAT': 'inline label', 'INE': 'inline label', 'Despensa': 'inline label', 'Acta de Na': 'inline label', 'Medicament': 'inline label', 'Donaciones': 'inline label', 'Canirac': 'inline label', 'Grupo Varg': 'inline label', 'Psicologia': 'inline label', 'Asesoria J': 'inline label', 'PSAF': 'inline label', 'INEA': 'inline label', 'HospTox': 'inline label', 'Box': 'inline label', 'Status fin': 'inline label', 'Pendientes': 'inline label', });
lyr_Mentora_act_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});