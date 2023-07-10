console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	//console.log('form submit');
	alert(`Your form has been submitted successfully, #slay`)
}

function hoverpls(evt) {
	evt.preventDefault();
	alert('ONLY LITERAL KINGS AND QUEENS WOULD HOVER OVER THIS!!!!!!!!!!!!!!!!!')
}

let form = document.querySelector('#contact');
let duckCat = document.querySelector('#duckCat')

form.addEventListener('submit', handleSubmit);
duckCat.addEventListener(`mouseover`, hoverpls)

