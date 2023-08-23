const elementTexts = {
	"O" : '<b>Oxigênio</b> é o elemento mais abundante da crosta terrestre. Em sua forma natural, é um gás, mas pode se prender a outros elementos em óxidos, que é como é encontrado em sua maioria.<br><br><b>Massa Atômica:</b> 15,9994u<br><br><a href="https://pt.wikipedia.org/wiki/Oxigénio" class="underline text-cyan-600 hover:text-sky-500" target="_blank">Página da Wikipédia sobre <b>Oxigênio</b></a>',
	"Si": "<b>Silício</b> é o segundo elemento mais abundante da crosta terrestre.",
	"Al": "O <b>Alumínio</b>, obtido a partir da bauxita,  é um elemento metálico leve, macio, de aspecto metálico branco muito abundante na crosta terrestre.<br><br>Suas características de resistência, combinadas a baixa densidade e alta condutividade elétrica fazem com que seja amplamente utilizado na engenharia aeronáutica, na construção de navios, pontes, automóveis, dentre outros.",
	"Fe": "<b>Ferro</b> é o quarto elemento mais abundante da crosta terrestre.",
	"Ca": "<b>Cálcio</b> é o quinto elemento mais abundante da crosta terrestre.",
	"Na": "<b>Sódio</b>",
	"Mg": "<b>Magnésio</b>",
	"K" : "<b>Potássio</b>"
}

const elements = ["O", "Si", "Al", "Fe", "Ca", "Na", "Mg", "K"];

const unselectedClass = "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-100"
const selectedClass = "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active";

function changeText(element) {
	elements.forEach((e) => {
		document.getElementById(e).className = unselectedClass;
	});
	document.getElementById(element).className = selectedClass;
	document.getElementById("elementText").innerHTML = elementTexts[element];
}

/*
<img id="elementImage" class="mx-auto w-fit h-fit"
							 src="./imagens/earth-icon.png"></img>
						<a class="py-5" id="imageCredits" href="https://www.iconfinder.com/iconsets/planets-1"><p class="text-xs text-cyan-600 underline">Fonte da imagem</p></li>
*/