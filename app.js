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
        for (i = 0; i < num;) {
            mySpellbook.push(response.data[randomNumber()].spell)
            console.log(mySpellbook)
            if (i < mySpellbook.length) {
                i++
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