# Travel-App

### Please ignore the three buttons at the top; And use the buttons in the sideBar;

### Where is my api keys and username? How do u add your keys?

Because of security reason, all my keys have been save in the `.env` file. To test my code, I suggest you create a `.env` file in the root folder. 
In side the file create 3 variables: (1) geonamesUserName = Your Geonames username; (2) darkSkyAPIKey = Your darkSky api key; (3) pixabayAPIKey = your pixabay api key; (#### Please dont add quotes to the values)

### How to run the code and test?

####(1)
After you set up all the keys and environments, you can `npm run build` then `npm run start` to start the app. (#### I used the port number `3030` in my codebase so if this conficts with your local environment, please choose another port number.)

####(2)
In the application, please ignore the top three buttons, they are for my future expansion of this project so they are kinds of useless now.
Using the buttons in the sidebar, type the dates and city name (ex: `New York`) then click the `Submit` button to retrieve the data.