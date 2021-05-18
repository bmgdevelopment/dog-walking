import { getPets, getWalkers } from './database.js';

const pets = getPets();
const walkers = getWalkers();

export const RegisteredPets = () => {
  let petHTML = '<ul>';

  for (const pet of pets) {
    petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`;
  }

  petHTML += '</ul>';

  return petHTML;
};

//CREATES WINDOW POP UP WHEN PET IS CLICKED TO SHOW WHICH DOG IS BEING WALKED BY WHO
document.addEventListener('click', (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.id.startsWith('pet')) {
    const [,petId] = itemClicked.id.split('--');

    let petFound;

    for (const pet of pets) {
      if (pet.id === parseInt(petId)) {
        petFound = pet;

        for (const walker of walkers) {
          if (petFound.walkerId === walker.id) {
            window.alert(`${petFound.name} is being walked by ${walker.name}`); 
          }
        }
      }
    }
  }
}); 