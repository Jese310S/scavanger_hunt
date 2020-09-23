// import { hPKey } from './APIKey.js'

let mySpellbook = []
let spellDesc = []
let counter = 0
let num = 10
let randNum = 0
let numbersArray = []
const hPKey = 

function randomNumber (random) {
  let suitableNumber = Math.floor(Math.random() * random);
  return suitableNumber;
}

function getItems() {

    let elem = document.getElementById('rem').innerHTML;
    // elem == "" ? console.log(elem) : elem.parentNode.removeChild(elem);;
    //  console.log(elem)
    // // elem.style.display = 'none';
    // elem.parentNode.removeChild(elem);

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

                // prevents infinte loops
                if (num > 20 || num * counter > 151) {
                  console.log("bad luck!")
                  break;
                }

                randNum = randomNumber(150)

                // adds a random spell to the list and then checks/removes dupes
                mySpellbook.push(response.data[randNum].spell)
                spellDesc.push(`${response.data[randNum].type}, ${response.data[randNum].effect}`)

                mySpellbook = mySpellbook.filter((v, i) => mySpellbook.indexOf(v) === i)
                spellDesc = spellDesc.filter((v, i) => spellDesc.indexOf(v) === i)
                console.log(mySpellbook)
                console.log(spellDesc)

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
        <li onclick="checked(${i})" id=${i} rem class="list-group-item d-flex justify-content-between align-items-center">
        ${x}
        </li>
        `).join("") 
        
        // map function to add spell descriptions to spellbook list
        // let test2 = spellDesc.map((x, i) => `
        // <li onclick="checked(${i})" id=${i} rem class="list-group-item d-flex justify-content-between align-items-center">`


        // map function to randomise locations to spellbook list (back up plan)
//         let locationArr =["State Library", "Chinatown", "Marvel Stadium", "Queen Victoria Market", "St.Pauls Cathedral", "Ice Bar", "Sea Aquarium", "ACMI", "Federation Square", "Flagstaff Gardens"]
//         let shuffledArr = function shuffle(arra1) {
//             var ctr = arra1.length, temp, index;
//             while (ctr > 0) {
//                 index = Math.floor(Math.random() * ctr);
//                 ctr--;
//                // swap the last element 
//                 temp = arra1[ctr];
//                 arra1[ctr] = arra1[index];
//                 arra1[index] = temp;
//             }
//             return arra1;
//         } 
// console.log(shuffledArr(locationArr))
        
        //adds locations to spellbook List (back up plan)
        // let test3 = shuffledArr(locationArr).map((x, i) => 
        //     `<li onclick="checked(${i})" id=${i} rem class="list-group-item d-flex justify-content-between align-items-center">
        //     ${x}
        //     </li>
        //     `).join("")

        let spell_List = document.getElementsByClassName("spellList")[0];
        // let spell_desc = document.getElementsByClassName("spellDesc")[0];
        // let spell_loc = document.getElementsByClassName("spellLoc")[0]   // back up plan
 
        spell_List.innerHTML = test
        // spell_desc.innerHTML = test2
        // spell_loc.innerHTML = test3 //back up plan

        // console.log(spellList)
        // const spellList = document.querySelector('.spellList').innerHTML
        // spellList.innerHTML = `<li>${mySpellbook[counter]}</li>`

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
            position: new google.maps.LatLng(-37.812110, 144.955975),
            type: 'HP_map'
          }, { /* Chemist Warehouse */
            position: new google.maps.LatLng(-37.814348, 144.963506),
            type: 'HP_map'
          }, { /* Royal Stacks */
            position: new google.maps.LatLng(-37.817297, 144.958335),
            type: 'HP_map'
          }, { /* Higher Ground */
            position: new google.maps.LatLng(-37.815619, 144.952906),
            type: 'HP_map'
          }, { /* Parliment Reserve */
            position: new google.maps.LatLng(-37.810821, 144.973742),
            type: 'HP_map'
          }
        ];

        for (i = 0; i < features.length; i++) {
          numbersArray.push(i)
        }

        function shuffle(o) {
          for(let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
          return o;
        };

        console.log(shuffle(numbersArray))
      
        // Create markers.

        let markers = []

        let contentString = ""
  
        for (var i = 0; i < 10; i++) {
  
          contentString = `${mySpellbook[i]}`
          
          infoWindow = new google.maps.InfoWindow({
            content: contentString
          })
      
          markers[i] = new google.maps.Marker({
            position: features[numbersArray[i]].position,
            icon: icons[features[numbersArray[i]].type].icon,
            map: map,
            title: `${mySpellbook[i]}`
          });
           markers[i].addListener('click', function(){
            infoWindow.open(map, markers[i])
          })
        };
    })
}

function checked(spell) {
    document.getElementById(spell).style.background = "#3CB371"
    // console.log(spell)
}

// // function generateOptions(data) {
// //      console.log(data)
// //      const options = data.map(item =>
// //      `
// //      <li>${item.spell}</li>
// //      `).join('');
// //      spellList.innerHTML = options;
// // }

// //---------------------------------
// //FUNCTIONS FOR MAP API
// //--------------------------------
// // let map;

// // function initMap() {
// //   map = new google.maps.Map(document.getElementById("map-container-google-1"), {
// //     center: { lat: -37.814, lng: 144.964 },
// //     zoom: 8
// //   });
// // }

let map;
function initMap() {
  map = new google.maps.Map(
      document.getElementById('map-container-google-1'),
      {center: new google.maps.LatLng(-37.814, 144.964), zoom: 15});
}