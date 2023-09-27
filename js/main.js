const elementTexts = {
  "O": "<b>Oxigênio</b> é o elemento mais abundante da crosta terrestre. Em sua forma natural, é um gás, mas pode se prender a outros elementos em óxidos, que é como é encontrado em sua maioria.<br><br>Presente em diversas moléculas extremamente importantes para a vida, o oxigênio participa de um grupo extremamente importante para nós, o <b>grupo CHON</b> (carbono, hidrogênio, oxigênio e nitrogênio).<br><br><b>Massa Atômica:</b> 15,9994u<br><b>Ponto de Ebulição:</b> -183°C<br><b>Ponto de Fusão:</b> -218,8°C<br><b>Número Atômico:</b> 8<br><br><a href='https://brasilescola.uol.com.br/quimica/oxigenio.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>",

  "Si": "<b>Silício</b> é um metal extremamente importante na produção de <b>eletrônicos e na agricultura</b>, funcionando como um ajudante para plantas, onde funciona para melhorar a resistência e aprimorar a capacidade de absorção de raios solares.<br><br>O Silício, tal qual o Carbono, pode fazer até <b>4 ligações covalentes</b>, sendo algo cliché em obras de ficção científica <b>vida baseada em Silício</b>, ao invés de Carbono.<br><br><b>Massa Atômica:</b> 28,0855u<br><b>Ponto de Ebulição:</b> 2,3°C<br><b>Ponto de Fusão:</b> 1,4°C<br><b>Número Atômico:</b> 14<br><br><a href='https://brasilescola.uol.com.br/quimica/silicio.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>",

  "Al": "O <b>Alumínio</b>, obtido a partir da bauxita,  é um elemento metálico leve, macio, de aspecto metálico branco muito abundante na crosta terrestre.<br><br>Suas características de resistência, combinadas a baixa densidade e alta condutividade elétrica fazem com que seja amplamente utilizado na engenharia aeronáutica, na construção de navios, pontes, automóveis, dentre outros.<br><br><b>Massa Atômica:</b> 26,9815u<br><b>Ponto de Ebulição:</b> 2519°C<br><b>Ponto de Fusão:</b> 660,5°C<br><b>Número Atômico:</b> 13<br><br><a href='https://brasilescola.uol.com.br/quimica/aluminio.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>",

  "Fe": "O <b>Ferro</b> é o quarto elemento mais abundante da crosta terrestre, sendo utilizado em diversas indústrias, para a produção de panelas, carrocerias e ligas, a mas comum sendo com o Carbono, Aço, liga muito resistente e amplamente usada pelo humano.<br><br>Sua extrema abunância se deve pelo fato que é produzido nos <b>núcleos de estrelas</b> pelo processo de fusão, sendo o elemento mais pesado que é produzido dessa forma.<br><br><b>Massa Atômica:</b> 55,845u<br><b>Ponto de Ebulição:</b> 2861°C<br><b>Ponto de Fusão:</b> 1538°C<br><b>Número Atômico:</b> 26<br><br><a href='https://brasilescola.uol.com.br/quimica/ferro.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>",

  "Ca": "<b>Cálcio</b> é o quinto elemento mais abundante da crosta terrestre, sendo essencial para todos os seres vivos, inclusive o humano, onde é o metal mais abundante. É vital para o crecimento e manutenção dos ossos e dentes e ajuda na coagulação do sangue na contração muscular.<br><br>Suas principais fontes minerais são a <b>dolomita, gipsita, calcária e a fluorita</b>, além de ser encontrado em mares e oceanos.<br><br><b>Massa Atômica:</b> 40,078u<br><b>Ponto de Ebulição:</b> 1484°C<br><b>Ponto de Fusão:</b> 842°C<br><b>Número Atômico:</b> 20<br><br><a href='https://brasilescola.uol.com.br/quimica/calcio.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>",

  "Na": "<b>Sódio</b> é um metal mole, brilhante e prateado, sendo menos denso que água. O Sódio apresenta forma solida em temperatura ambiente, tendo um papel importante nos impulsos nervosos, na regulação do volume sanguíneo e também na contração muscular. Além disso, por si só é um metal altamente reativo, sendo necessário submergi-lo em diferentes líquidos para assegurar que não se decomponha sozinho.<br><br><b>Massa Atômica:</b> 22,989u<br><b>Ponto de Ebulição:</b> 883°C<br><b>Ponto de Fusão:</b> 98°C<br><b>Número Atômico:</b> 11<br><br><a href='https://brasilescola.uol.com.br/quimica/sodio.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>",

  "Mg": "O <b>Magnésio</b> é um metal alcalinoterroso, sendo o oitavo mais abundante da crosta terrestre. É abundante em natureza por ser feito em supernovas com a junção de três átomos de hélio ao carbono.<br><br>Biológicamente, o Magnésio é de extrema importância, sendo necessário para a formação de nevos e músculos, e essencial para múltiplas enzimas do corpo funcionarem normalmente.<br><br><b>Massa Atômica:</b> 24,305u<br><b>Ponto de Ebulição:</b> 650°C<br><b>Ponto de Fusão:</b> 1090°C<br><b>Número Atômico:</b> 12<br><br><a href='https://brasilescola.uol.com.br/quimica/magnesio.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>",

  "K": "Essencial às plantas, o <b>potássio</b> é muito utilizado em fertilizantes NPK, que são os melhores no mercado, e na produção do hidróxido de potássio <b>(KOH)</b> muito utilizado para a fabricação de sabão, o qual é convertido para carbonato de cálcio, outro fertilizante muito famoso no mercado brasileiro. O potássio atua como cofator de muitas enzimas do corpo humano e é necessário na secreção de insulina.<br><br><b>Massa Atômica:</b> 39,098u<br><b>Ponto de Ebulição:</b> 759°C<br><b>Ponto de Fusão:</b> 63°C<br><b>Número Atômico:</b> 19<br><br><a href='https://brasilescola.uol.com.br/quimica/potassio.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>"
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