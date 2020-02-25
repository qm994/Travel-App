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
        tools.getWeatherData("http://localhost:3030/geoNames").then(
            value => {console.log(value)},
            message => {console.log(`The eror is ${message}`)}
        )
    });

//alert("the entry point is running!!!!");

// export to the client library
export {
    openForm
};