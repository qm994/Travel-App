async function getWeather(lng, lat, departTime, currentTime){
    const fetch = require("node-fetch");
    const dotenv = require("dotenv");
    dotenv.config();
    const baseURL = "https://api.darksky.net/forecast/";
    const apiKey = process.env.darkSkyAPIKey;

    // 24h * 3600s * 7days = 604800;
    // This means the depart time exceeds the 7 days, which will out the forecast and 
    // we need to use the `Time Machine Request`
    if(departTime - currentTime > 604800){
        const res = await fetch(`${baseURL}${apiKey}/${lat},${lng},${departTime}`)

        try{
            const result = await res.json();
            const weatherSummary = "Your departure date is more than a week!";
            let temperature = result.currently.temperature;
            return [weatherSummary, temperature]

        } catch(error){
            console.log(`getWeather()function went wrong: ${error}`);
        } 
    } else {
        const res = await fetch(`${baseURL}${apiKey}/${lat},${lng}`);
        try{
            const result = await res.json();
            const weatherSummary = "Your departure date is within a week!";
            let temperature = result.currently.temperature;
            return [weatherSummary, temperature]

        } catch(error){
            console.log(`getWeather()function went wrong: ${error}`);
        }

    }
}

module.exports = getWeather;