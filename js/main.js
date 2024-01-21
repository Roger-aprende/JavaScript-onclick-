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
let menssageTitle = document.querySelector(".windows__title");
let menssageText = document.querySelector(".windows__p");


let elements = document.querySelectorAll('strong');
let menssageD = "Deseo";
let menssageT = "Tips";
let menssageF = "Frase";

elements.forEach(currentValue =>{
    currentValue.addEventListener('click', () =>{
        if(currentValue.getAttribute('class') === 'deseo'){
            menssageTitle.innerHTML = menssageD;
            menssageText.innerHTML = deseos[arrayDeseos[randomDeseo]];
            container = container.classList.replace("container-none","container-activo");
        } 

        if(currentValue.getAttribute('class') === 'tip'){
            menssageTitle.innerHTML = menssageT;
            menssageText.innerHTML = tips[arrayTips[randomTips]];
            container = container.classList.replace("container-none","container-activo");
        }

        if(currentValue.getAttribute('class') === 'frase'){
            menssageTitle.innerHTML = menssageF;
            menssageText.innerHTML = tips[arrayTips[randomTips]];
            container = container.classList.replace("container-none","container-activo");
        }
    })
});





















