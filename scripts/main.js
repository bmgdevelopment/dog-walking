import { Walkers } from './Walkers.js'; //Walkers is the full unordered list of walkers' names
import { CityList } from './CityList.js';
import { Assignments } from './Assignments.js';
import { RegisteredPets } from './RegisteredPets.js';

const mainContainer = document.querySelector('#container');

const applicationHTML = `
<h1>DeShawns Dog Walking</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Cities with Service</h2>
        ${CityList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Walkers</h2>
        ${Walkers()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Pets</h2>
        ${RegisteredPets()}
    </section>
</article>

<article class="assignments">
<section class="detail--column list details__cities">
    <h2>Current Assignments</h2>
    ${Assignments()}
    </section>
</article>
`;

mainContainer.innerHTML = applicationHTML;

