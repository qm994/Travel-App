async function getCoordinatesData(city) {
    //let cityVal  = document.getElementById("cityName").value;
    const baseURL = "http://api.geonames.org/searchJSON?q=";
    const userName = "ma791778711";
    
    let response = await fetch(`${baseURL}${city}&username=${userName}&maxRows=10`);
    let data = await response.json();
    const lng = data.geonames[0].lng;
    const lat = data.geonames[0].lat;
    return [lng, lat];
}

async function getWeatherData(url){
    // const baseURL = "https://api.darksky.net/forecast/";
    // const key = "a1a23e327c352a8dcfb8a6078531a738";
    let response = await fetch(url);
    try {
        //console.log(response);
        const data = await response.json();
        // const [temperature, humidity, pressure] = [data.currently.apparentTemperature, data.currently.humidity, data.currently.pressure];
        // return [temperature, humidity, pressure];
        return data;
        
    } catch(error){
        //alert(`dark sky api error is ${error}`);
        console.log(`dark sky api error is ${error}`);
    }
}

postGenonamesData = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers:{
            "Content-Type": "text/plain"
        },
        body: JSON.stringify(data)
    })

    return await response.json();
};

module.exports = {
    getCoordinatesData,
    getWeatherData,
    postGenonamesData
};