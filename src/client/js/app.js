const geoNamesUrl = "http://api.geonames.org/postalCodeSearch?";
const geoNamesUserName = "ma791778711";


getCoordinatesData = async (
    url = "", 
    country = "", 
    placeName = "", 
    postCode = "",
    apiKey) => {
        let response = await fetch(ur + country + placeName + postCode + apiKey);
        let data = await response.json();
        return data;
}

document.getElementsByClassName("submitForm").addEventListener("click",
    async () => {
        let country  = document.getElementById("countryName").value;
        console.log(country);
        let city = document.getElementById("cityName").value;
        console.log(city);
        let zipCode = document.getElementById("postCode").value;
        console.log(zipCode);

    })