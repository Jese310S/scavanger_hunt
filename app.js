// import { hPKey } from './APIKey.js'

let mySpellbook = []
let spellDesc = []
let counter = 0
let num = 10
let randNum = 0
let numbersArray = []

const hPKey = "$2a$10$HK7x9nK6Y8AE7.d1SlMx..sOQ3Id0cXF/3L70MkgeBLYZ.sFuFuC6"

function randomNumber (random) {
  let suitableNumber = Math.floor(Math.random() * random);
  return suitableNumber;
}



function myFunction() {

    
    let select = document.getElementById('mySelect');
    let option = select.options[select.selectedIndex].value;
    console.log(option);
    if (option === "1"){
        document.getElementById("card-bkg").style.backgroundColor = "#EBD70A";
        document.getElementById("card-bkg").style.border = "10px solid black"
    } else if (option === "2") {
        document.getElementById("card-bkg").style.backgroundColor = "#4B0606";
        document.getElementById("card-bkg").style.border = "10px solid #ECB91A"
    }else if(option === "3") {
        document.getElementById("card-bkg").style.backgroundColor = "#0A2F48";
        document.getElementById("card-bkg").style.border = "10px solid #A17750"
    }else if(option ==="4") {
        document.getElementById("card-bkg").style.backgroundColor = "#23561F";
        document.getElementById("card-bkg").style.border = "10px solid #999491"
    }else{
        console.log("not working")
    }
};



function getItems() {

    let elem = document.getElementById('rem').innerHTML;
     elem == "" ? console.log(elem) : location.reload();

 

    // get request, url and key
    axios({
        method: 'get',
        url: `https://www.potterapi.com/v1/spells` + "?key=" + hPKey,
    })
        .then(function (response){
            // hard coded information from API

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

        let test2 = spellDesc.map((x, i) => `
        <li onclick="checked(${i})" id=${i} rem class="list-group-item d-flex justify-content-between align-items-center">
        ${x}
        </li>
        `).join("") 



       

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



let map;
function initMap() {
  map = new google.maps.Map(
      document.getElementById('map-container-google-1'),
      {center: new google.maps.LatLng(-37.814, 144.964), zoom: 15});

}

