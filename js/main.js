let selectedElement = null;
let konamiCode = "UUDDLRLRBAE";
let cKC = "";
let darkmode = false;

const elementTexts = {
  "C": "O <b>Carbono</b> é o principal elemento responsável pela vida, sendo capaz de fazer <b>4 ligações covalentes</b> tal qual o <a href=\"#\" onClick=\"changeText('Si')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>Silício</a>.<br><br>Substâncias que contém Carbono fazem parte da vertente da Quimíca chamada Química Orgânica, a química da vida, na qual os principais elementos fazem parte do chamado <b>grupo CHON</b> (<a href=\"#\" onClick=\"changeText('C')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>carbono</a>, <a href=\"#\" onClick=\"changeText('H')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>hidrogênio</a>, <a href=\"#\" onClick=\"changeText('O')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>oxigênio</a> e <a href=\"#\" onClick=\"changeText('N')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>nitrogênio</a>), esses sendo a fundação na qual a vida se construiu.<br><br><b>Massa Atômica:</b> 12,011u<br><b>Ponto de Ebulição:</b> 4287°C<br><b>Ponto de Fusão:</b> 3550°C<br><b>Número Atômico:</b> 6<br><br><a href='https://brasilescola.uol.com.br/quimica/carbono.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>",

  "H": "O <b>Hidrogênio</b> é o elemento mais simples que existe, composto apenas por um próton e um eléctron em seu isótopo mais abundante.<br><br>Durante o <i>Big Bang</i>, o Hidrogênio foi o primeiro elemento a ser criado, sendo até hoje o elemento mais abundante no universo em geral, compondo boa parte da massa das estrelas.<br><br>O Hidrogênio é um dos elementos que compõe o <b>grupo CHON</b> (<a href=\"#\" onClick=\"changeText('C')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>carbono</a>, <a href=\"#\" onClick=\"changeText('H')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>hidrogênio</a>, <a href=\"#\" onClick=\"changeText('O')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>oxigênio</a> e <a href=\"#\" onClick=\"changeText('N')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>nitrogênio</a>), esses sendo a fundação na qual a vida se construiu.<br><br><b>Massa Atômica:</b> 1,00794u<br><b>Ponto de Ebulição:</b> -252°C<br><b>Ponto de Fusão:</b> -259°C<br><b>Número Atômico:</b> 1<br><br><a href='https://brasilescola.uol.com.br/quimica/hidrogenio.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>",

  "O": "O <b>Oxigênio</b> é o elemento mais abundante da crosta terrestre. Em sua forma natural, é um gás, mas pode se prender a outros elementos em óxidos, que é como é encontrado em sua maioria.<br><br>Presente em diversas moléculas essenciais à vida, o oxigênio participa de um grupo extremamente importante para nós, o <b>grupo CHON</b> (<a href=\"#\" onClick=\"changeText('C')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>carbono</a>, <a href=\"#\" onClick=\"changeText('H')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>hidrogênio</a>, <a href=\"#\" onClick=\"changeText('O')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>oxigênio</a> e <a href=\"#\" onClick=\"changeText('N')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>nitrogênio</a>), sendo esses a fundação aonde a vida se construiu.<br><br><b>Massa Atômica:</b> 15,9994u<br><b>Ponto de Ebulição:</b> -183°C<br><b>Ponto de Fusão:</b> -218,8°C<br><b>Número Atômico:</b> 8<br><br><a href='https://brasilescola.uol.com.br/quimica/oxigenio.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>",

  "N": "O <b>Nitrogênio</b> (também conhecido como <b>Azoto</b>) é apenas o trigésimo elemento mais abundante na crosta terrestre, porém nem de longe o menos importante, sendo constituente do <b>grupo CHON</b> (<a href=\"#\" onClick=\"changeText('C')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>carbono</a>, <a href=\"#\" onClick=\"changeText('H')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>hidrogênio</a>, <a href=\"#\" onClick=\"changeText('O')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>oxigênio</a> e <a href=\"#\" onClick=\"changeText('N')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>nitrogênio</a>), sendo os constituentes desse grupo a fundação na qual a vida se construiu e na qual a Química Orgânica se baseia.<br><br>O Nitrogênio é capaz de fazer 3 ligações covalentes, participandos de algumas cadeias carbônicas dentro da química orgânica. Quanto a vida, o Nitrogênio é essencial a vida, sendo grande componente de <b>fertilizantes NPK</b> (Nitrogênio, Fósforo e <a href=\"#\" onClick=\"changeText('K')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>Potássio</a>), o tipo mais comum de fertilizantes que existe.<br><br><b>Massa Atômica:</b> 12,011u<br><b>Ponto de Ebulição:</b> -195,79°C<br><b>Ponto de Fusão:</b> -210°C<br><b>Número Atômico:</b> 6<br><br><a href='https://brasilescola.uol.com.br/quimica/nitrogenio.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>",

  "Si": "<b>Silício</b> é um metal extremamente importante na produção de <b>eletrônicos e na agricultura</b>, funcionando como um \"ajudante\" para plantas, onde funciona para melhorar a resistência e aprimorar a capacidade de absorção de raios solares.<br><br>O Silício, tal qual o <a href=\"#\" onClick=\"changeText('C')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>Carbono</a>, pode fazer até <b>4 ligações covalentes</b>, sendo algo cliché em obras de ficção científica a <b>vida baseada em Silício</b>, ao invés de <a href=\"#\" onClick=\"changeText('C')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>Carbono</a>. Não há registros que ela exista.<br><br><b>Massa Atômica:</b> 28,0855u<br><b>Ponto de Ebulição:</b> 2,3°C<br><b>Ponto de Fusão:</b> 1,4°C<br><b>Número Atômico:</b> 14<br><br><a href='https://brasilescola.uol.com.br/quimica/silicio.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>",

  "Al": "O <b>Alumínio</b>, obtido a partir da bauxita, é um elemento metálico leve, macio, de aspecto metálico branco muito abundante na crosta terrestre.<br><br>Suas características de resistência, combinadas a baixa densidade e alta condutividade elétrica fazem com que seja amplamente utilizado na engenharia aeronáutica, na construção de navios, pontes, automóveis, dentre outros.<br><br><b>Massa Atômica:</b> 26,9815u<br><b>Ponto de Ebulição:</b> 2519°C<br><b>Ponto de Fusão:</b> 660,5°C<br><b>Número Atômico:</b> 13<br><br><a href='https://brasilescola.uol.com.br/quimica/aluminio.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>",

  "Fe": "O <b>Ferro</b> é o quarto elemento mais abundante da crosta terrestre, sendo utilizado em diversas indústrias, para a produção de panelas, carrocerias e ligas, com a liga mais comum sendo o aço, liga feita em combinação com o <a href=\"#\" onClick=\"changeText('C')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>Carbono</a>, sendo muito resistente e amplamente usada pelo humano.<br><br>Sua extrema abunância se deve pelo fato que é produzido nos <b>núcleos de estrelas</b> pelo processo de fusão, sendo o elemento mais pesado que é produzido dessa forma.<br><br><b>Massa Atômica:</b> 55,845u<br><b>Ponto de Ebulição:</b> 2861°C<br><b>Ponto de Fusão:</b> 1538°C<br><b>Número Atômico:</b> 26<br><br><a href='https://brasilescola.uol.com.br/quimica/ferro.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>",

  "Ca": "<b>Cálcio</b> é o quinto elemento mais abundante da crosta terrestre, sendo essencial para todos os seres vivos, inclusive o humano, onde é o metal mais abundante. É vital para o crecimento e manutenção dos ossos e dentes e ajuda na coagulação do sangue na contração muscular.<br><br>Suas principais fontes minerais são a <b>dolomita, gipsita, calcária e a fluorita</b>, além de ser encontrado em mares e oceanos.<br><br><b>Massa Atômica:</b> 40,078u<br><b>Ponto de Ebulição:</b> 1484°C<br><b>Ponto de Fusão:</b> 842°C<br><b>Número Atômico:</b> 20<br><br><a href='https://brasilescola.uol.com.br/quimica/calcio.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>",

  "Na": "<b>Sódio</b> é um metal mole, brilhante e prateado, sendo menos denso que água. O Sódio apresenta forma solida em temperatura ambiente, tendo um papel importante nos impulsos nervosos, na regulação do volume sanguíneo e também na contração muscular. Além disso, por si só é um metal altamente reativo com o oxigênio do ar, sendo necessário submergi-lo em diferentes líquidos para assegurar que não se decomponha sozinho em diferentes óxidos ou exploda caso entre em contato com certas substâncias.<br><br><b>Massa Atômica:</b> 22,989u<br><b>Ponto de Ebulição:</b> 883°C<br><b>Ponto de Fusão:</b> 98°C<br><b>Número Atômico:</b> 11<br><br><a href='https://brasilescola.uol.com.br/quimica/sodio.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>",

  "Mg": "O <b>Magnésio</b> é um metal alcalinoterroso, sendo o oitavo mais abundante da crosta terrestre. É abundante em natureza por ser feito em supernovas com a junção de três átomos de hélio ao <a href=\"#\" onClick=\"changeText('C')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>carbono</a>.<br><br>Biológicamente, o Magnésio é de extrema importância, sendo necessário para a formação de nevos e músculos, e essencial para múltiplas enzimas do corpo funcionarem normalmente.<br><br><b>Massa Atômica:</b> 24,305u<br><b>Ponto de Ebulição:</b> 650°C<br><b>Ponto de Fusão:</b> 1090°C<br><b>Número Atômico:</b> 12<br><br><a href='https://brasilescola.uol.com.br/quimica/magnesio.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>",

  "K": "Essencial às plantas, o <b>potássio</b> é muito utilizado em <b>fertilizantes NPK</b> (<a href=\"#\" onClick=\"changeText('N')\" class='text-blue-600 hover:text-blue-800 underline font-bold'>Nitrogênio</a>, Fósforo e Potássio), que são os melhores no mercado, e na produção do hidróxido de potássio <b>(KOH)</b> muito utilizado para a fabricação de sabão, o qual é convertido para carbonato de cálcio, outro fertilizante muito famoso no mercado brasileiro. O potássio atua como cofator de muitas enzimas do corpo humano e é necessário na secreção de insulina.<br><br><b>Massa Atômica:</b> 39,098u<br><b>Ponto de Ebulição:</b> 759°C<br><b>Ponto de Fusão:</b> 63°C<br><b>Número Atômico:</b> 19<br><br><a href='https://brasilescola.uol.com.br/quimica/potassio.htm' target='_blank'><p class='text-blue-600 hover:text-blue-800 underline font-bold'>Fonte</p></a>"
}

const elementDescriptions = {
  "Al": "Latinha de alumínio sendo esmagada.",
  "C": "Rocha de Grafite, alótropo do Carbono.",
  "Si": "<i>Wafer</i> de Silício, usado em microchips.",
  "O": "Cilíndro de Oxigênio.",
  "Na": "Cortes de metal de Sódio puro.",
  "N": "Nitrogênio líquido sendo derramado.",
  "Mg": "Cristais de Magnésio.",
  "K": "Cloreto de Potássio, um fertilizante comum.",
  "H": "Hidrogênio puro brilhando em Ultra-violeta.",
  "Fe": "Esteiras com Ferro Gusa derretido.",
  "Ca": "Depósito de Calcário na Croácia."
};

const elementSources = {
  "Al": "https://commons.wikimedia.org/wiki/File:Aluminium-can-squeezed-by-hand.jpg",
  "C": "https://commons.wikimedia.org/wiki/File:Graphite-and-diamond-with-scale.jpg",
  "Si": "https://commons.wikimedia.org/wiki/File:Etchedwafer.jpg",
  "O": "https://commons.wikimedia.org/wiki/File:Diving_cylinder_oxygen_label.JPG",
  "Na": "https://commons.wikimedia.org/wiki/File:Na_(Sodium).jpg",
  "N": "https://commons.wikimedia.org/wiki/File:Fluessiger_Stickstoff.jpg",
  "Mg": "https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_2893_Crystalised_magnesium.jpg",
  "K": "https://commons.wikimedia.org/wiki/File:Compacted_potassium_chloride,_fertilizer_grade.jpg",
  "H": "https://commons.wikimedia.org/wiki/File:Hydrogenglow.jpg",
  "Fe": "https://commons.wikimedia.org/wiki/File:Chains_of_pig_iron_casting_machine_06.jpg",
  "Ca": "https://commons.wikimedia.org/wiki/File:Limestone_Eocene_deposit_at_Sinj_Stari_grad_-_Dalmatia_-_Croatia_IMG_20210820_083857.jpg"
}


const elements = ["C", "H", "O", "N", "Si", "Al", "Fe", "Ca", "Na", "Mg", "K"];

const unselectedClass = "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-100"
const unselectedClassCHON = "inline-block p-4 rounded-t-lg hover:text-gray-700 hover:bg-green-100 dark:hover:bg-green-400 dark:hover:text-white text-gray-600 dark:text-gray-300";
const selectedClass = "inline-block p-4 text-gray-500 dark:text-gray-900 bg-gray-100 rounded-t-lg active";
const selectedClassCHON = "inline-block p-4 text-gray-500 bg-green-100 dark:bg-green-500 dark:text-gray-900 rounded-t-lg active";

function isPhone() {
  if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
    return true;
  } else {
    return false;
  }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function changeText(element) {
  elements.forEach((e) => {
    if (["C", "H", "O", "N"].includes(e))
      document.getElementById(e).className = unselectedClassCHON;
    else document.getElementById(e).className = unselectedClass;
  });
  if (["C", "H", "O", "N"].includes(String(element).toUpperCase()))
    document.getElementById(element).className = selectedClassCHON;
  else
    document.getElementById(element).className = selectedClass;

  document.getElementById("elementText").innerHTML = elementTexts[element];
  document.getElementById("elementImage").src = `./imagens/${element}.png`
  document.getElementById("imageText").innerHTML = elementDescriptions[element];
  document.getElementById("imageText").href = elementSources[element];

  selectedElement = String(element);
}

function reset() {
  if (getCookie("darkmode") === "")
    setCookie("darkmode", "0", 365);
  else {
    darkmode = getCookie("darkmode") == "1" ? true : false;
    document.getElementById("body").className = darkmode ? "dark transition-all" : "transition-all";
  }

  const defaultTextComputer = "Bem-vindo ao <b>Guia da Crosta Terrestre</b>, onde nós te descrevemos os elementos mais abundantes e importantes da nossa gigante esfera que chamamos de Terra.<br>Para começar, <b>selecione um elemento na barra acima.</b><br><br><b>Atalhos de Teclado:</b><br><kbd class=\"px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500\">←</kbd> ou <kbd class=\"px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500\">→</kbd> - Trocar entre elementos<br><br><kbd class=\"px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500\">Esc</kbd> - Resetar a página<br><br><kbd class=\"px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500\">D</kbd> - Ativar ou desativar o Modo Escuro";

  const defaultTextPhone = "Bem-vindo ao <b>Guia da Crosta Terrestre</b>, onde nós te descrevemos os elementos mais abundantes e importantes da nossa gigante esfera que chamamos de Terra.<br><br>Para começar, <b>selecione um elemento na barra acima.</b>";

  elements.forEach((e) => {
    if (["C", "H", "O", "N"].includes(e))
      document.getElementById(e).className = unselectedClassCHON;
    else document.getElementById(e).className = unselectedClass;
  });

  if (isPhone())
    document.getElementById("elementText").innerHTML = defaultTextPhone;
  else
    document.getElementById("elementText").innerHTML = defaultTextComputer;

  document.getElementById("elementImage").src = "./imagens/earth-icon.png";
  document.getElementById("imageText").innerHTML = "Ilustração do nosso planeta Terra.";
  document.getElementById("imageText").href = "https://www.pngwing.com/pt/free-png-cmrkn";

  selectedElement = null;
}

function enableDarkMode() {
  document.getElementById("body").className = darkmode ? "transition-all" : "dark transition-all";
  darkmode = !darkmode;
  setCookie("darkmode", darkmode ? "1" : 0, 365);
  console.log(1);
}

document.onkeydown = function(event) {

  if (event.key.toLowerCase() === "d") enableDarkMode();

  if (event.keyCode === 37 || event.keyCode === 39) {
    if (selectedElement === null)
      changeText("C");
    else {
      switch (event.keyCode) {
        case 37: // Left Arrow 
          if (selectedElement == "C")
            changeText("K");
          else
            changeText(elements[elements.indexOf(selectedElement) - 1]);
          break;
        case 39: // Right Arrow
          if (selectedElement == "K")
            changeText("C");
          else
            changeText(elements[elements.indexOf(selectedElement) + 1]);
          break;
      }
    }
  } else if (event.keyCode === 27) reset();

  // Konami Code
  if ([38, 40, 37, 39, 66, 65, 13].includes(event.keyCode)) {
    const keys = {
      38: "U", 40: "D", 37: "L", 39: "R", 66: "B", 65: "A", 13: "E"
    };

    cKC += keys[event.keyCode];
    if (konamiCode.slice(0, cKC.length) == cKC) {
      if (cKC == konamiCode) {
		alert("🤓");
        location.href = "https://media.tenor.com/xCc58fEqFREAAAAd/nerd-nerdy.gif";
        cKC = "";
      }
    } else {
      cKC = "";
    }
  }

}