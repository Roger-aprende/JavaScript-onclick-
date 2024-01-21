// Selecionando Modelos a seguir (Basicamente lo que estoy usando como base de datos para mis frases, deseo y tips)
const frases = new Cfrases();
const deseos = new Cdeseos();
const tips = new Ctips();
//Todos los atributos de las clases los convertimos en elementos de un array
let arrayFrases = Object.keys(frases);
let arrayDeseos = Object.keys(deseos);
let arrayTips = Object.keys(tips);

let randomFrase = Math.floor(arrayFrases.length * Math.random());
let randomDeseo = Math.floor(arrayDeseos.length * Math.random());
let randomTips = Math.floor(arrayTips.length * Math.random());

let container = document.querySelector('#container');
let menssageTitle = document.getElementsByClassName("windows__title");
let menssageText = document.querySelector(".windows__p");


let elements = document.querySelectorAll('strong');
let menssageD = "ESto es un deseo";
let menssageT = "ESto es un tips";
let menssageF = "ESto es una Frase";
let result = "";

elements.forEach(currentValue =>{
    currentValue.addEventListener('click', () =>{
        if(currentValue.getAttribute('class') === 'deseo'){
            menssageText.innerHTML = deseos[arrayDeseos[randomDeseo]];
            container = container.classList.replace("container-none","container-activo");
        } 

        if(currentValue.getAttribute('class') === 'tip') alert(deseos[arrayDeseos[randomDeseo]]);

        if(currentValue.getAttribute('class') === 'frase') alert(tips[arrayTips[randomTips]]);
    })
});





















