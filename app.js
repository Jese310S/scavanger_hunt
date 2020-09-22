// import { hPKey } from './APIKey.js'

let mySpellbook = []
let spellDesc = []
let counter = 0
let num = 10
let randNum = 0
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

                // prevents infinte loops, via data entry
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