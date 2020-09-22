// import { hPKey } from './APIKey.js'

let mySpellbook = []
let counter = 0
let num = 10
const hPKey = "$2a$10$HK7x9nK6Y8AE7.d1SlMx..sOQ3Id0cXF/3L70MkgeBLYZ.sFuFuC6"

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
// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8
//   });
// }

var map;
function initMap() {
  map = new google.maps.Map(
      document.getElementById('map'),
      {center: new google.maps.LatLng(-37.814, 144.964), zoom: 16});

  var iconBase =
      'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

var icons = {
    parking: {
      icon: iconBase + 'parking_lot_maps.png'
    },
    library: {
      icon: iconBase + 'library_maps.png'
    },
    info: {
      icon: iconBase + 'info-i_maps.png'
    }
  };

  var features = [
    { /* state library */
      position: new google.maps.LatLng(-37.80959, 144.965),
      type: 'info'
    }, { /* chinatown */
      position: new google.maps.LatLng(-37.81120, 144.96882),
      type: 'info'
    }, { /* marvel stadium */
      position: new google.maps.LatLng(-37.81636, 144.94754),
      type: 'info'
    }, { /* queen vic market */
      position: new google.maps.LatLng(-37.80736, 144.95678),
      type: 'info'
    }, {/* st. pauls csathedral */
      position: new google.maps.LatLng(-37.81681, 144.96763),
      type: 'info'
    }, { /* ice bar */
      position: new google.maps.LatLng(-37.81731, 144.96982),
      type: 'info'
    }, {/* aquarium */
      position: new google.maps.LatLng(-37.82052, 144.95913),
      type: 'info'
    }, { /* ACMI */
      position: new google.maps.LatLng(-37.81689, 144.96911),
      type: 'info'
    }, { /* fed square */
      position: new google.maps.LatLng(-37.81776, 144.96907),
      type: 'info'
    }, { /* flagstaff */
      position: new google.maps.LatLng(-33.91666, 151.23468),
      type: 'info'
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