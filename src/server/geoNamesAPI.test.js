const getCoordinates = require("./geoNamesAPI");
const regeneratorRuntime = require("regenerator-runtime");


test("it should be a function and return an object", async() => {
    getCoordinates("London").then(
        value => {
            expect(value.geonames[0].toponymName).toEqual("London");
        }
    )
});