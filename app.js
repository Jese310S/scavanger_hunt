import { hPKey } from './APIKey.js'

let mySpellbook = []
let counter = 0
let num = 10

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
                // adds a random spell to the list and then checks/removes dupes
                mySpellbook.push(response.data[randomNumber()].spell)
                mySpellbook = mySpellbook.filter((v, i) => mySpellbook.indexOf(v) === i)
                console.log(mySpellbook)

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