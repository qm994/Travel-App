async function getCoordinatesData(city) {
    //let cityVal  = document.getElementById("cityName").value;
    const baseURL = "http://api.geonames.org/searchJSON?q=";
    const userName = "ma791778711";
    console.log(`${baseURL}${city}&username=${userName}&maxRows=1`);
    let response = await fetch(`${baseURL}${city}&username=${userName}&maxRows=10`);
    let data = await response.json();
    const lng = data.geonames[0].lng;
    const lat = data.geonames[0].lat;
    return {"longtitude": lng, "latitude": lat};
}

module.exports = {getCoordinatesData};