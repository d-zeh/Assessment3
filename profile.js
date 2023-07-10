let color = document.querySelector(`#color`)
let place = document.querySelector(`#place`)
let ritual = document.querySelector(`#ritual`)

function colorButton(evt) {
    evt.preventDefault();
    alert("Orange!!!")
}
function placeButton(evt) {
    evt.preventDefault();
    alert("On Lake Michigan!!!")
}
function ritualButton(evt) {
    evt.preventDefault();
    alert("Gods and Daemons, we demand you hear our plea. A sacred ritual from us witches three. Return to us what you have yet torn. Or face the WRATH of us, our witches Scorn!!!")
}

color.addEventListener(`click`, colorButton);
place.addEventListener(`click`, placeButton);
ritual.addEventListener(`click`, ritualButton)