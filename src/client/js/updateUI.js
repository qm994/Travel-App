async function updateUI (){
    const fetch = require("node-fetch");
    const baseURL = "http://localhost:3030/apiData";
    const res = await fetch(baseURL);
    try{
        const result = await res.json();
        //console.log(`The api data is ${result}`);
        document.getElementById("travelCard").insertAdjacentHTML(
            "beforeend",
            `
            <div class="text-area">
                <p>Your trip to ${result.cityName} will be starting in ${result.decideFuture} hours</p>
                <p>Your trip to ${result.cityName} will be lasting ${result.durationDays}</p>
                <p>Be notice!!! The temperature in ${result.cityName} will be ${result.cityTemp}</p>
                <p>Be notice!!! ${result.travelSummary} in ${result.cityName} at that time!!!</p>
                </div>
            <div class="image-area">
                <figure>
                    <img src="${result.imageURL}" id="city-image" width=100%>
                    <figcaption>The ${result.cityName}</figcaption>
                </figure>
            </div>
        `
        );
        // document.getElementById("text-area").innerHTML = `
        // <p>Your trip to ${result.cityName} will be starting in ${result.decideFuture} hours</p>
        // <p>Your trip to ${result.cityName} will be lasting ${result.durationDays}</p>
        // <p>Be notice!!! The temperature in ${result.cityName} will be ${result.cityTemp}</p>
        // <p>Be notice!!! ${result.travelSummary} in ${result.cityName} at that time!!!</p>
        // `;
        
        // document.getElementById("image-area").innerHTML = `
        // <figure>
        //     <img src="${result.imageURL}" id="city-image" width=100%>
        //     <figcaption>The ${result.cityName}</figcaption>
        //  </figure>
        // `;
        // //document.getElementById("city-image").width = "380px";

    } catch(error){
        console.log(`The error happened in UpdateUI is ${error}`);
    }
};

module.exports = updateUI;
