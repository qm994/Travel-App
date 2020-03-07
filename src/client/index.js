import{ openForm } from "./js/addTrip";
import {addCity} from "./js/addDestination";
import "./styles/style.scss";
import "./styles/formStyle.scss";
import "./styles/sideBarStyle.scss";
import "./styles/travelCards.scss";
import updateUI from "./js/updateUI";
var tools = require("./js/geoNames");
const submitButton = document.getElementById("inputsSubmit");

function getCurrentDate() {
    let d = new Date();
    let day = d.getDate();
    let dayTrans = day.toString().length < 2 ? `0${day}` : day;
    let month = d.getMonth() + 1;
    let monthTrans = month.toString().length < 2 ? `0${month}` : month;
    let year = d.getFullYear();
    let currentDate = `${year}-${monthTrans}-${dayTrans}`;
    return currentDate;
};

submitButton.addEventListener("click", async () => {
    const departTime = new Date(document.getElementById("startDate").value).getTime()/1000;
    const returnTime = new Date(document.getElementById("endDate").value).getTime()/1000;
    //const currentTime = Math.round((new Date()).getTime()/1000);
    const currentTime = new Date(getCurrentDate()).getTime()/1000;
    console.log(
        `The departTime is ${departTime};
        The returnTime is ${returnTime};
        ThE currentTime is ${currentTime}`
    );
    let cityVal = document.getElementById("destinationCity").value;
    console.log(cityVal);

    // if the decideFuture value is bigger than 0 then it means the user departs from their current day;
    // if the decideFuture value is < 0, it means user will departure in the future's one day!
    // '3600' means 3600 seconds and 24 means 24 hours so `3600 * 24` means the seconds in one day!!!!
    let postInputs = {
        city: cityVal,
        userCurrentTime: currentTime,
        departureTime: departTime,
        durationDays: parseInt((returnTime - departTime)/3600*24),
        // decideFuture: 
        decideFuture: parseInt((departTime - currentTime)/3600*24)
    };

    tools.postFormData("http://localhost:3030/coords", postInputs)
    .then(data => updateUI());
});

// export to the client library
export {
    openForm,
    addCity
};