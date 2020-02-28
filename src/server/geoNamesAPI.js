async function getCoordinates(cityName){
    const fetch = require("node-fetch");
    const dotenv = require("dotenv");
    dotenv.config()

    const baseURL = "http://api.geonames.org/searchJSON?q=";
    const userName = process.env.geonamesUserName;
    const res = await fetch(`${baseURL}${cityName}&maxRows=10&username=${userName}`);
    try{
        const result = await res.json();
        const firstCityCoords = result.geonames[0];
        const lng = firstCityCoords.lng;
        const lat = firstCityCoords.lat;
        return[lng, lat];
    } catch(error){
        console.log(error);
    }
}

module.exports = getCoordinates;