import fetch from 'node-fetch';

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const URL = `https://api.openweathermap.org/data/2.5/onecall?appid=${WEATHER_API_KEY}`;

const loadWeatherData = async (data) => {

    let points = await data;

    return new Promise((resolveData) => {

        return Promise.all(points.map(async (point) => {

            return new Promise( (resolvePoint) => {
                let query = URL + `&lat=${point.lat}&lon=${point.lon}`;
                let results = fetch(query);

                point.weatherData = results.then(async (results) => {
                    point.weatherData = await results.json();

                    resolvePoint(point);
                })
            });

        })).then(resolveData);

    });
}


export default loadWeatherData;