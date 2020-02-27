import{ openForm } from "./js/addTrip";
import "./styles/style.scss";
import "./styles/formStyle.scss";
var tools = require("./js/geoNames");

document.getElementById("submitForm").addEventListener("click",
     () => {
        
        let country  = document.getElementById("countryName").value;
        console.log(country);
        let cityVal = document.getElementById("cityName").value;
        console.log(cityVal);
        let zipCode = document.getElementById("postCode").value;
        console.log(zipCode);
        tools.postFormData("http://localhost:3030/coords",{
            city: cityVal
        })
    });



//alert("the entry point is running!!!!");

// export to the client library
export {
    openForm
};