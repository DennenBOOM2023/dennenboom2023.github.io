const elementTexts = {
	"O" : '<b>Oxigênio</b> é o elemento mais abundante da crosta terrestre. Em sua forma natural, é um gás, mas pode se prender a outros elementos em óxidos, que é como é encontrado em sua maioria.<br><br>Presente em diversas moléculas extremamente importantes para a vida, o oxigênio participa de um grupo extremamente importante para nós, o <b>grupo CHON</b> (carbono, hidrogênio, oxigênio e nitrogênio).<br><br><b>Massa Atômica:</b> 15,9994u<br><b>Ponto de Ebulição:</b> -183°C<br><b>Ponto de Fusão:</b> -218,8°C<br><b>Número Atômico:</b> 8',
	
	"Si": "<b>Silício</b> é um metal extremamente importante na produção de <b>eletrônicos e na agricultura</b>, funcionando como um ajudante para plantas, onde funciona para melhorar a resistência e aprimorar a capacidade de absorção de raios solares.<br><br>O Silício, tal qual o Carbono, pode fazer até <b>4 ligações covalentes</b>, sendo algo cliché em obras de ficção científica <b>vida baseada em Silício</b>, ao invés de Carbono.<br><br><b>Massa Atômica:</b> 28,0855u<br><b>Ponto de Ebulição:</b> 2,3°C<br><b>Ponto de Fusão:</b> 1,4°C<br><b>Número Atômico:</b> 14",
	
	"Al": "O <b>Alumínio</b>, obtido a partir da bauxita,  é um elemento metálico leve, macio, de aspecto metálico branco muito abundante na crosta terrestre.<br><br>Suas características de resistência, combinadas a baixa densidade e alta condutividade elétrica fazem com que seja amplamente utilizado na engenharia aeronáutica, na construção de navios, pontes, automóveis, dentre outros.<br><br><b>Massa Atômica:</b> 26,9815u<br><b>Ponto de Ebulição:</b> 2519°C<br><b>Ponto de Fusão:</b> 660,5°C<br><b>Número Atômico:</b> 13",
	
	"Fe": "<b>Ferro</b> é o quarto elemento mais abundante da crosta terrestre, sendo utilizado em diversas indústrias, para a produção de panelas, carrocerias e ligas, a mas comum sendo com o Carbono, Aço, liga muito resistente e amplamente usada pelo humano.<br><br><b>Massa Atômica:</b> 55,845u<br><b>Ponto de Ebulição:</b> 2861°C<br><b>Ponto de Fusão:</b> 1538°C<br><b>Número Atômico:</b> 26",
	
	"Ca": "<b>Cálcio</b> é o quinto elemento mais abundante da crosta terrestre, sendo essencial para todos os seres vivos, inclusive o humano, onde é o metal mais abundante. É vital para o crecimento e manutenção dos ossos e dentes e ajuda na coagulação do sangue na contração muscular.<br><br>Suas principais fontes minerais são a <b>dolomita, gipsita, calcária e a fluorita</b>, além de ser encontrado em mares e oceanos.<br><br><b>Massa Atômica:</b> 40,078u<br><b>Ponto de Ebulição:</b> 1484°C<br><b>Ponto de Fusão:</b> 842°C<br><b>Número Atômico:</b> 20",
	
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