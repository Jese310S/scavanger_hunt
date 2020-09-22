// import { hPKey } from './APIKey.js'

let mySpellbook = []
let spellDesc = []
let counter = 0
let num = 10
let randNum = 0
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
            counter += 1
            console.log(counter)

            for (i = 0; i < num; i++) {
                randNum = randomNumber()

                // adds a random spell to the list and then checks/removes dupes
                mySpellbook.push(response.data[randNum].spell)
                spellDesc.push(`${response.data[randNum].type}, ${response.data[randNum].effect}`)

                mySpellbook = mySpellbook.filter((v, i) => mySpellbook.indexOf(v) === i)
                spellDesc = spellDesc.filter((v, i) => spellDesc.indexOf(v) === i)
                console.log(mySpellbook)
                console.log(spellDesc)

                // prevents infinte loops
                if (num > 20 || num * counter > 151) {
                    console.log("bad luck!")
                    break;
                }

                // removes 1 from i to make a loop not count when a dupe is created
                if (i * counter > mySpellbook.length - (1 * counter)){
                    console.log(i * counter)
                    console.log(mySpellbook.length)
                    i--
                }
            }

        mySpellbook = mySpellbook.filter((v, i) => mySpellbook.indexOf(v) === i)

        // map function to add each new spell to the spellbook list
        let test = mySpellbook.map((x, i) => `                    
        <li onclick="checked(${i})" id=${i} class="list-group-item d-flex justify-content-between align-items-center">
        ${x}
        <span class="badge badge-primary badge-pill">14</span>
        </li>
        `).join("") // need to add in spell desc from spellDesc

        let spellList = document.getElementsByClassName("spellList")[0];
        console.log(spellList)
        // const spellList = document.querySelector('.spellList').innerHTML
        // spellList.innerHTML = `<li>${mySpellbook[counter]}</li>`
        spellList.innerHTML = test
    })
}

function checked(spell) {
    document.getElementById(spell).style.background = "#3CB371"
    console.log(spell)
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
// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map-container-google-1"), {
//     center: { lat: -37.814, lng: 144.964 },
//     zoom: 8
//   });
// }

let map;
function initMap() {
  map = new google.maps.Map(
      document.getElementById('map-container-google-1'),
      {center: new google.maps.LatLng(-37.814, 144.964), zoom: 16});

  var iconBase =
      'https://developers.google.com/maps/documentation/javascript/examples/full/images/';
      var img = document.createElement("img");
      img.src = "./bolt-3.png"


var icons = {
    HP_map: {
      icon: img.src
    }
  };

  var features = [
    { /* state library */
      position: new google.maps.LatLng(-37.80959, 144.965),
      type: 'HP_map'
    }, { /* chinatown */
      position: new google.maps.LatLng(-37.81120, 144.96882),
      type: 'HP_map'
    }, { /* marvel stadium */
      position: new google.maps.LatLng(-37.81636, 144.94754),
      type: 'HP_map'
    }, { /* queen vic market */
      position: new google.maps.LatLng(-37.80736, 144.95678),
      type: 'HP_map'
    }, {/* st. pauls csathedral */
      position: new google.maps.LatLng(-37.81681, 144.96763),
      type: 'HP_map'
    }, { /* ice bar */
      position: new google.maps.LatLng(-37.81731, 144.96982),
      type: 'HP_map'
    }, {/* aquarium */
      position: new google.maps.LatLng(-37.82052, 144.95913),
      type: 'HP_map'
    }, { /* ACMI */
      position: new google.maps.LatLng(-37.81689, 144.96911),
      type: 'HP_map'
    }, { /* fed square */
      position: new google.maps.LatLng(-37.81776, 144.96907),
      type: 'HP_map'
    }, { /* flagstaff */
      position: new google.maps.LatLng(-33.91666, 151.23468),
      type: 'HP_map'
    }
  ];

  // Create markers.
  for (var i = 0; i < features.length; i++) {
    var marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map
    });
  };
}