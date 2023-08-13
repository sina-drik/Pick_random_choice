
// Html elements

const textArea = document.getElementById('txtarea');
const choiceContainer = document.querySelector('.choice_container');
const createdspantags = choiceContainer.children;

// Event listener
textArea.addEventListener('keyup', (e) => getKey(e.target.value, e.key))

// Public variables
let pressedKeys = [];
let randomNumber;
let foundRandomWord;

// Functions
const delayedLoop = async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const myAsyncFunc = async () => {
        return true;
    };

    for (let i = 0; i < pressedKeys.length; i++) {
        createdspantags[i].style.backgroundColor = '#d6a400'
        await myAsyncFunc(pressedKeys[i]);
        await delay(50);
        createdspantags[i].style.backgroundColor = '#72f45e'
    }
  
}
const myFunc = async () => {
    await delayedLoop();
    for(i=0;i<pressedKeys.length;i++){
        if (createdspantags[i].innerText === foundRandomWord) {
            createdspantags[i].style.backgroundColor = '#d6a400'
        } else {
            createdspantags[i].style.backgroundColor = '#72f45e'
        }
    }

}
function getKey(value, key) {
    if (key === 'Enter') {
        textArea.value = "";
        randomNumber = Math.floor(Math.random() * pressedKeys.length);
        foundRandomWord = pressedKeys[randomNumber];
        // console.log(`Found word is ${foundRandomWord}`)
        myFunc();
    } else {
        pressedKeys = value.split(',').filter(e => e.trim() !== "").map(e => e.trim())
        choiceContainer.innerHTML = '';
        pressedKeys.map(e => {
            const spanTag = document.createElement('span');
            spanTag.innerText = e
            choiceContainer.appendChild(spanTag)
        })
    }
}



textArea.focus();

