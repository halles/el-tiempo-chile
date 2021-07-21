const mapData = () => {
    return new Promise((resolve, reject) => {

        const map = [];

        const addMapPoint = (name, lat, lon) => {
            map.push({
                name: name,
                lat: lat,
                lon: lon,
            });
        };

        // Line 1
        addMapPoint('Arica', -18.4746, -70.29792);
        // Line 2
        addMapPoint('Iquique', -20.22036, -70.13913);
        addMapPoint('San Martin de Pica', -19.865835, -69.003734);
        // Line 3
        addMapPoint('Tocopilla', -22.0887, -70.1961);
        addMapPoint('Calama', -22.45591, -68.93015);
        // Line 4
        addMapPoint('Antofagasta', -23.65236, -70.3954);
        addMapPoint('Sierra Gorda', -22.8905, -69.3200);
        addMapPoint('San Pedro de Atacama', -22.9087, -68.1997);
        // Line 5
        addMapPoint('Taltal', -25.3102, -69.8614);
        addMapPoint('Rio Frío', -25.0891, -69.1080);
        // Line 6
        addMapPoint('Chañaral', -26.3450, -70.6242);
        addMapPoint('Potrerillos', -26.4357, -69.4830);
        // Line 7
        addMapPoint('Copiapó', -27.36679, -70.3314);
        addMapPoint('Parque Nacional Nevado Tres Cruces', -27.0290, -69.0516);
        // Line 8
        addMapPoint('La Serena', -29.90453, -71.24894);
        addMapPoint('Pisco Elqui', -30.1242, -70.4956);
        // Line 9
        addMapPoint('Valparaiso', -33.03932, -71.62725);
        addMapPoint('Santiago', -33.45694, -70.64827);
        // Line 10
        addMapPoint('Pichilemu', -34.3867, -72.0048);
        addMapPoint('Rancagua', -34.17083, -70.74444);
        // Line 11
        addMapPoint('Constitución', -35.33321, -72.41156);
        addMapPoint('Talca', -35.4264, -71.65542);
        // Line 12
        addMapPoint('Concepción', -36.82699, -73.04977);
        addMapPoint('Los Ángeles', -37.46973, -72.35366);
        // Line 13
        addMapPoint('Puerto Saavedra', -38.7837, -73.3987);
        addMapPoint('Temuco', -38.73965, -72.59842);
        // Line 14
        addMapPoint('Valdivia', -39.81422, -73.24589);
        addMapPoint('Osorno', -40.57395, -73.13348);
        // Line 15
        addMapPoint('Maullín', -41.6184, -73.6017);
        addMapPoint('Puerto Montt', -41.46574, -72.94289);
        // Line 16
        addMapPoint('Castro', -42.4721, -73.77319);
        addMapPoint('Chaitén', -42.91596, -72.70632);
        // Line 17
        addMapPoint('Puerto Cisnes', -44.74736, -72.69695);
        // Line 18
        addMapPoint('Coihaique', -45.57524, -72.06619);
        // Line 19
        addMapPoint('Cochrane', -47.2557, -72.5695);
        // Line 20
        addMapPoint('Villa O\'Higgins', -48.4821, -72.5880);
        // Line 21
        addMapPoint('Isla Mornington', -49.6952, -75.4249);
        addMapPoint('Parque Nacional Bernardo O\'Higgins', -49.7975, -74.4849);
        // Line 22
        addMapPoint('Isla Jorge Montt', -51.2498, -74.6999);
        addMapPoint('Parque Nacional Torres del Paine', -50.9423, -73.4068);
        // Line 23
        addMapPoint('Isla Contreras', -52.0165, -74.9565);
        addMapPoint('Puerto Natales', -51.72363, -72.48745);
        // Line 24
        addMapPoint('Reserva Nacional Alacalufes', -52.5104, -73.7774);
        addMapPoint('Villa Tehuelches', -52.4276, -71.4139);
        addMapPoint('Campo Cerro Manantiales', -52.5460, -69.4208);
        // Line 25
        addMapPoint('Isla Riesco', -52.9894, -72.3841);
        addMapPoint('Punta Arenas', -53.15483, -70.91129);
        // Line 26
        addMapPoint('Parque Nacional Alberto Agostini', -54.7620, -70.1238);
        addMapPoint('Puerto Williams', -54.9352, -67.6059);

        resolve(map);
    });

}

// return mapData;
export default mapData;