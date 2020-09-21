// import { hPKey } from './APIKey.js'

let mySpellbook = []
let counter = 0
let num = 10
const hPKey = 

function getItems() {

    function randomNumber () {
        let suitableNumber = Math.floor(Math.random() * 150);
        return suitableNumber;
    }

    // get request, url and key
    axios({
        method: 'get',
        url: `https://www.potterapi.com/v1/spells` + "?key=" + hPKey,
    })
        .then(function (response){
        // hard coded information from API
        // console.log(response.data[0])
        // adds new spells to the spellbook
        for (i = 0; i < num;) {
            mySpellbook.push(response.data[randomNumber()].spell)
            console.log(mySpellbook)
            if (i < mySpellbook.length) {
                i++
            }
        }

        mySpellbook = mySpellbook.filter((v, i) => mySpellbook.indexOf(v) === i)

        // map function to add each new spell to the spellbook list
        let test = mySpellbook.map(x => `                    
        <li class="list-group-item d-flex justify-content-between align-items-center">
        ${x}
        <span class="badge badge-primary badge-pill">14</span>
        </li>
        `).join("")

        let spellList = document.getElementsByClassName("spellList")[0];
        console.log(spellList)
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