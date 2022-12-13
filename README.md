# Development

### Link to Deployed Website
https://happydolphin111.github.io/DevelopmentReact

### Goal and Value of the Application
This application can be used by anyone interested in seeing what teams are currently participating in the World Cup, and wants to learn more about them. Particularly the continents they are in and the language spoken by the locals.

### Usability Principles Considered
Navigating with ease: Added a button with instructions to make the user's experience go more smoothly. 
Visibility: Controls for filtering etc are visible, easy to access and use.
Alternative Text: In the case the pictures can't load (or any other reason), all images have alternative text describing what they are showing. 

### Organization of Components
The format of the information in the teams.json file is given its shape in my "teamsConst.js" component. 
This component is the one adding and removing each team from favorites when the "FAV/REMOVE" button is clicked, as well as updating the cups count. It is also the one called when rendering each team's card into the website, with all the information needed: country, continent, flag, number of cups, etc.


### How Data is Passed Down Through Components
Data is passed down to my TeamCards components by rendering each team's card with the item, fav set, setfavSum setter and setFav to set the fav array. In my component, the item is broken down into the different properties found in my json file (ex: "country", "continent", etc) carrying information about each team. 


### How the User Triggers State Changes
The user triggers state changes when filtering by continent and language, as well as by sorting and adding/removing from favorites.
