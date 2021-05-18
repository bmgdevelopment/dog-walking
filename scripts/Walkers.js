/* eslint-disable no-console */
import { getWalkers, getCities } from './database.js'; //imports getWalkers() from database.js

const cities = getCities();

const findCityForWalker = (walker) => {

  let cityNameMatch;
  for (const city of cities) {
    if (walker.cityId === city.id) {
      cityNameMatch = city.cityName;
    }
  }
  return cityNameMatch;
};

//Syntax: element.addEventListener(event, function)
document.addEventListener( //within the document, the addEventListener is activated
  'click', //the event is the 'click'
  (clickEvent) => { //the parameter is the clickEvent
    const itemClicked = clickEvent.target; //const itemCLicked is created to equal the target clicked

    if (itemClicked.id.startsWith('walker')) { //anything clicked that is in the const walkers array will begin with walker
      const [,walkerId] = itemClicked.id.split('--');//splits item id clicked from the item ex. [,1]; why place in array? why comma?
      //itemClicked.id.split('--') will split the array into STRINGS ['walker', '#'] into ['walker'] ['1']. the int or second element will be walkerId STRING
      //so the first element in the array [,walkerId] is technically an empty STRING in [,walkerId]
      //line 12 can also be written: const walkerId = itemClicked.id.split('--')[1] to access the index 1 element STRING of the array 
      for (const walker of walkers) { //iterates through walkers

        const cityMatch = findCityForWalker(walker);

        if (walker.id === parseInt(walkerId)) { //walker.id has to strictly equal the walkerId integer. parseInt turns strings into integers
          window.alert(`${walker.name} services ${cityMatch}`); //window alert will open reading the name of the walker ans city of service
        }
      }
    }
  }
);

const walkers = getWalkers(); //newly created array collection of all walkers info from main database

export const Walkers = () => { //Walkers contains the entire unordered list of walkers' names and is exported to main.js
  let walkerHTML = '<ul>'; //opens the unordered list element tag

  for (const walker of walkers) { //iteration through walkers collection
    walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`; //walkerHTML = walkerHTML + `<li></li>`
  } //ref if statement itemClicked.id.startsWith('walker');

  walkerHTML += '</ul>'; //walkerHTML = walkerHTML + `</ul>` adds the walker information and closes unordered list element tag

  return walkerHTML; //returns the entire walkerHTML unordered list
};

