async function getImage(cityName){
    const baseURL = "https://pixabay.com/api/?key=";
    const fetch = require("node-fetch");
    const dotenv = require("dotenv");
    dotenv.config();

    const pixabayKey = process.env.pixabayAPIKey;
    const res = await fetch(`${baseURL}${pixabayKey}&q=${cityName}&category=buildings`);
    
    try{
        const result = await res.json();
        let imageURL = result.hits[0].largeImageURL;
        return imageURL;

    } catch(error){
        console.log(`The pixabay api went error is ${error}`);
    }
}
module.exports = getImage;