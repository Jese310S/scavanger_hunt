// import { hPKey } from './API_KEY.js'
// const { hPKey} = require ('./API_KEY.js')
// console.log(hPKey)

let mySpellbook = []
let counter = 0

function getItems() {

    function randomNumber () {
        let suitableNumber = Math.floor(Math.random() * 150);
        return suitableNumber;
    }
    const hPKey = "$2a$10$HK7x9nK6Y8AE7.d1SlMx..sOQ3Id0cXF/3L70MkgeBLYZ.sFuFuC6"
    // get request, url and key
    axios({
        method: 'get',
        url: `https://www.potterapi.com/v1/spells` + "?key=" + hPKey,
    })
        .then(function (response){
        // hard coded information from API
        // console.log(response.data[0])
        let num = randomNumber()
        // adds new spells to the spellbook
        mySpellbook.push(response.data[num].spell)
        console.log(mySpellbook)
        // map function to add each new spell to the spellbook list
        let test = mySpellbook.map(x => `<li>${x}</li>`).join("")

        let spellList = document.getElementsByClassName("spellList")[0];
        // const spellList = document.querySelector('.spellList').innerHTML
        // spellList.innerHTML = `<li>${mySpellbook[counter]}</li>`
        spellList.innerHTML = test
        counter += 1
    })
}

// function generateOptions(data) {
//      console.log(data)
//      const options = data.map(item =>
//      `
//      <li>${item.spell}</li>
//      `).join('');
//      spellList.innerHTML = options;
// }

//---------------------------------
//FUNCTIONS FOR MAP API
//--------------------------------
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}