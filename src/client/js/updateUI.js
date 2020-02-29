async function updateUI (){
    const fetch = require("node-fetch");
    const baseURL = "http://localhost:3030/apiData";
    const res = await fetch(baseURL);
    try{
        const result = await res.json();
        //console.log(`The api data is ${result}`);
        document.getElementById("text-area").innerHTML = `
        <p>Your trip to ${result.cityName} will be starting in ${result.decideFuture}</p>
        <p>Your trip to ${result.cityName} will be lasting ${result.durationDays}</p>
        <p>Be notice!!! The temperature in ${result.cityName} will be ${result.cityTemp}</p>
        <p>Be notice!!! ${result.travelSummary} in ${result.cityName} at that time!!!</p>
        `
    } catch(error){
        console.log(`The error happened in UpdateUI is ${error}`);
    }
};

module.exports = updateUI;
