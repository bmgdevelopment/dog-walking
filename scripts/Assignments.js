/* eslint-disable no-console */
import { getPets, getWalkers, getCities } from './database.js';

// Get copy of state for use in this module
const pets = getPets(); 
const walkers = getWalkers(); 
const cities = getCities();

// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalkers) => { 
  let petWalker = ''; //removed null

  for (const walker of allWalkers) { 
    if (walker.id === pet.walkerId) { 
      petWalker = walker; 
    }
  }
  return petWalker; 
};

export const Assignments = () => { 
  let assignmentHTML = ''; 
  assignmentHTML = '<ul>'; 
  let matchedCity;

  for (const currentPet of pets) { 
    const currentPetWalker = findWalker(currentPet, walkers);

    for (const city of cities) {

      if (currentPetWalker.cityId === city.id) {
        matchedCity = city.cityName;
      }
    }
    //line below didn't have + sign to add additional sentences
    assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${matchedCity}
            </li>
        `;
  }

  assignmentHTML += '</ul>';

  return assignmentHTML;
};

