const elementTexts = {
	"O" : "<b>Oxigênio</b> é o elemento mais abundante da crosta terrestre.",
	"Si": "<b>Silício</b> é o segundo elemento mais abundante da crosta terrestre.",
	"Al": "<b>Alumínio</b> é o metal mais abundante da crosta terrestre.",
	"Fe": "<b>Ferro</b> é o quarto elemento mais abundante da crosta terrestre.",
	"Ca": "<b>Cálcio</b> é o quinto elemento mais abundante da crosta terrestre."
}

const elements = ["O", "Si", "Al", "Fe", "Ca"];

const unselectedClass = "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-300"
const selectedClass = "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500";

function changeText(element) {
	elements.forEach((e) => {
		document.getElementById(e).className = unselectedClass;
	});
	document.getElementById(element).className = selectedClass;
	document.getElementById("elementText").innerHTML = elementTexts[element];
}