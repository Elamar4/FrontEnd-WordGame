let timer = document.querySelector(".time")
let score = document.querySelector(".score")
let buttonStart = document.querySelector(".buttonStart")
let input = document.querySelector("input")
let letterButtons = document.querySelectorAll(".letter-button")
let hint = document.querySelector(".hint")
let boxDiv = document.querySelector(".boxDiv")
let hintDB = document.querySelector(".hintDB")
let nextWordButton = document.querySelector(".nextWord")
const wordAndHint = [
    { word: "Apple", hint: "A popular fruit" },
    { word: "Book", hint: "Contains stories or information" },
    { word: "Car", hint: "A vehicle used for transportation" },
    { word: "Dog", hint: "A common household pet" },
    { word: "Elephant", hint: "A large mammal with a trunk" },
    { word: "Fire", hint: "Produces heat and light" },
    { word: "Guitar", hint: "A musical instrument with strings" },
    { word: "House", hint: "A place where people live" },
    { word: "Jacket", hint: "Outerwear for cold weather" },
    { word: "Kite", hint: "A toy flown in the air" },
    { word: "Lemon", hint: "A citrus fruit" },
    { word: "Mountain", hint: "A large natural elevation" },
    { word: "Notebook", hint: "Used for writing or taking notes" },
    { word: "Orange", hint: "A citrus fruit" },
    { word: "Pizza", hint: "A popular Italian dish" },
    { word: "Queen", hint: "A female monarch" },
    { word: "Rabbit", hint: "A small mammal with long ears" },
    { word: "Sun", hint: "The star at the center of our solar system" },
    { word: "Table", hint: "Furniture with a flat surface" },
    { word: "Umbrella", hint: "Used to protect against rain" },
    { word: "Violin", hint: "A stringed musical instrument" },
    { word: "Watermelon", hint: "A large, juicy fruit with seeds" },
    { word: "Xylophone", hint: "A musical instrument with wooden bars" },
    { word: "Yacht", hint: "A luxury boat" },
    { word: "Zebra", hint: "A black and white striped animal" },
    { word: "Banana", hint: "A yellow tropical fruit" },
    { word: "Computer", hint: "An electronic device for processing data" },
    { word: "Dolphin", hint: "An aquatic mammal known for its intelligence" },
    { word: "Eagle", hint: "A large bird of prey" },
    { word: "Football", hint: "A popular sport played with a ball" },
    { word: "Garden", hint: "An area for growing plants or flowers" },
    { word: "Helmet", hint: "Protective headgear worn in sports or construction" },
    { word: "Island", hint: "A piece of land surrounded by water" },
    { word: "Jellyfish", hint: "A marine creature with tentacles" },
    { word: "Keyboard", hint: "An input device for typing on a computer" },
    { word: "Lion", hint: "A large carnivorous feline" },
    { word: "Moon", hint: "A natural satellite of the Earth" },
    { word: "Nest", hint: "A structure built by birds for laying eggs" },
    { word: "Ocean", hint: "A vast body of saltwater" },
    { word: "Penguin", hint: "A flightless bird native to Antarctica" },
    { word: "Question", hint: "An inquiry or problem to be solved" },
    { word: "Rainbow", hint: "A colorful arc in the sky" },
    { word: "Soccer", hint: "A sport played with a round ball" },
    { word: "Tree", hint: "A tall plant with a trunk and branches" },
    { word: "Umbrella", hint: "Used to protect against rain" },
    { word: "Violin", hint: "A stringed musical instrument" },
    { word: "Whale", hint: "A large marine mammal" },
    { word: "Xylophone", hint: "A musical instrument with wooden bars" },
    { word: "Yogurt", hint: "A dairy product made from fermented milk" },
    { word: "Zoo", hint: "A place where animals are kept for public viewing" },
];
let scoreFisrt = 0
let second = 30;
function startGame() {
    let randomNum = Math.floor(Math.random() * wordAndHint.length);
    input.classList.add("input1");
    let selectedWord = wordAndHint[randomNum].word;
    console.log(selectedWord)
    boxDiv.innerHTML = '';
    for (let index = 0; index < selectedWord.length; index++) {
        let createBox = document.createElement("div");
        createBox.innerHTML = selectedWord[index];
        createBox.classList.add("boxes", "before");
        boxDiv.appendChild(createBox);
    }
    hint.addEventListener("click", () => {
        if (second != 30) {
            hintDB.innerHTML = wordAndHint[randomNum].hint
            hintDB.classList.add("hintDA")
            setTimeout(() => {
                hintDB.classList.remove("hintDA");
            }, 6000);
        }
    })
}
nextWordButton.addEventListener("click", () => {
    if (second == 30) {
        alert("You must click the Satart button,firstly")
    }
    else {
        startGame()
    }
})
buttonStart.addEventListener("click", () => {
    second = 30;
    startGame()
    const interval = setInterval(function () {
        second--;
        timer.innerHTML = "Remaining time:" + " " + second;
        if (second <= 10) {
            timer.style.color = 'red';
        }
        if (second <= -1) {
            clearInterval(interval);
            timer.innerHTML = "Countdown ended!";
            alert("Time is up,If you wanna play again-->Click the Start Button")
            boxDiv.innerHTML = '';
            input.classList.remove("input1");
            boxDiv.appendChild(input)
            score.innerHTML = "Score:" + " " + "00"
            second = 30;
        }
    }, 1000);
    letterButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            let text = event.target.textContent.toUpperCase();
            let boxes = document.querySelectorAll('.boxes');
            let allBoxesOpened = true;
            boxes.forEach(box => {
                if (!box.classList.contains("after") && box.innerHTML.toUpperCase() === text) {
                    box.classList.add("after");
                }
                if (!box.classList.contains("after")) {
                    allBoxesOpened = false;
                }
            });
            if (second != -1) {
                if (allBoxesOpened) {
                    scoreFisrt += 10
                    score.innerHTML = "Score:" + " " + scoreFisrt
                    startGame()
                }
            }
        });
    });
});
