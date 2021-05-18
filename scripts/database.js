/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    walkers: [{
        id: 1,
        name: "Alphonse Meron",
        email: "ameron0@mashable.com",
        cityId: 1
    }, {
        id: 2,
        name: "Damara Pentecust",
        email: "dpentecust1@apache.org",
        cityId: 2
    }, {
        id: 3,
        name: "Anna Bowton",
        email: "abowton2@wisc.edu",
        cityId: 3
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        email: "hdrynan3@bizjournals.com",
        cityId: 4
    }, {
        id: 5,
        name: "Elmira Bick",
        email: "ebick4@biblegateway.com",
        cityId: 5
    }, {
        id: 6,
        name: "Bernie Dreger",
        email: "bdreger5@zimbio.com",
        cityId: 6
    }, {
        id: 7,
        name: "Rolando Gault",
        email: "rgault6@google.com",
        cityId: 7
        }, {
        id: 8,
        name: "Tiffanie Tubby",
        email: "ttubby7@intel.com",
        cityId: 8
    }, {
        id: 9,
        name: "Tomlin Cutill",
        email: "tcutill8@marketwatch.com",
        cityId: 9
    }, {
        id: 10,
        name: "Arv Biddle",
        email: "abiddle9@cafepress.com",
        cityId: 10
    }],
    pets: [{
        id: 1,
        name: "Dianemarie Hartness",
        walkerId: 3
    }, {
        id: 2,
        name: "Christoph Fosdyke",
        walkerId: 10
    }, {
        id: 3,
        name: "Rocket",
        walkerId: 7
    }, {
        id: 4,
        name: "Ebony",
        walkerId: 3
    }, {
        id: 5,
        name: "Scotty",
        walkerId: 8
    }, {
        id: 6,
        name: "Mac",
        walkerId: 2
    }, {
        id: 7,
        name: "Oreo",
        walkerId: 5
    }, {
        id: 8,
        name: "Sassy",
        walkerId: 1
    }, {
        id: 9,
        name: "Salem",
        walkerId: 9
    }, {
        id: 10,
        name: "Panda",
        walkerId: 7
    }],
    cities: [{
        id: 1,
        cityName: "Chicago"
    },{
        id: 2,
        cityName: "White Plains" 
    },{
        id: 3,
        cityName: "Sarasota" 
    },{
        id: 4,
        cityName: "San Diego" 
    },{
        id: 5,
        cityName: "Boise"
    },{
        id: 6,
        cityName: "Denver" 
    },{
        id: 7,
        cityName: "Tucson"
    },{
        id: 8,
        cityName: "Phoenix"
    },{
        id: 9,
        cityName: "Minneapolis" 
    },{
        id: 10,
        cityName: "Pittsburgh"
    }]
}

export const getWalkers = () => { //exported to Walkers.js & CityList.js; contains new array of all dog walkers' info
    return database.walkers.map(walker => ({...walker})) //spelled out reference below
}

export const getPets = () => { //exported to RegisteredPets.js; contains new array of all pets' info
    return database.pets.map(pet => ({...pet}))
}

export const getCities = () => {
    return database.cities.map(city => ({...city})) //exports cities array
}

// Long version of export above
// export const getWalkers = () => {
// return database.walkers.map(walker => {
//     const newWalker = {}
//     newWalker.id = walker.id
//     newWalker.name = walker.name
//     newWalker.walkerId = walker.walkerId
//     return newWalker
//   }
// }