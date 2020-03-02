function addCity() {
    let cityDiv = document.querySelector(".city-form");
    if(cityDiv.childElementCount < 6){
        cityDiv.insertAdjacentHTML("beforeend", '<label for="destinations">Destination:</label> <input type="text" name="destinations" class="destinations">');
    } else{
        alert("Can Only Add Two More Destinations!")
        
}
}
export {addCity};