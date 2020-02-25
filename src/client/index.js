import{ openForm } from "./js/addTrip";
import "./styles/style.scss";
import "./styles/formStyle.scss";
var tools = require("./js/geoNames");
//import {getCoordinatesData} from "./js/geoNames.js";
document.getElementById("submitForm").addEventListener("click",
     () => {
        
        let country  = document.getElementById("countryName").value;
        console.log(country);
        let cityVal = document.getElementById("cityName").value;
        console.log(cityVal);
        let zipCode = document.getElementById("postCode").value;
        console.log(zipCode);
        tools.getCoordinatesData(cityVal).then(
            value => {console.log(value)},
            reason => {console.log(reason)}
        );
        let weatherData = tools.getWeatherData("http://localhost:8080/geoNames/");
        console.log(weatherData);
        console.log(weatherData.then(value => console.log(value)));
    });

//alert("the entry point is running!!!!");

// export to the client library
export {
    openForm
};