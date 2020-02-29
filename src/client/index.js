import{ openForm } from "./js/addTrip";
import "./styles/style.scss";
import "./styles/formStyle.scss";
import "./styles/sideBarStyle.scss";
import "./styles/travelCards.scss";
import updateUI from "./js/updateUI";
var tools = require("./js/geoNames");
const submitButton = document.getElementById("inputsSubmit");

submitButton.addEventListener("click", async () => {
    const departTime = new Date(document.getElementById("startDate").value).getTime()/1000;
    const returnTime = new Date(document.getElementById("endDate").value).getTime()/1000;
    const currentTime = Math.round((new Date()).getTime()/1000);
    console.log(departTime);
    let cityVal = document.getElementById("destinationCity").value;
    console.log(cityVal);

    // if the decideFuture value is bigger than 0 then it means the user departs from their current day;
    // if the decideFuture value is < 0, it means user will departure in the future's one day!
    let postInputs = {
        city: cityVal,
        userCurrentTime: currentTime,
        departureTime: departTime,
        durationDays: parseInt((returnTime - departTime)/3600*24),
        decideFuture: parseInt((departTime - currentTime)/3600*24)
    };

    tools.postFormData("http://localhost:3030/coords", postInputs)
    .then(data => updateUI());
});

// export to the client library
export {
    openForm
};