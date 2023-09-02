let menuBtn = document.querySelector('.btnmenu')
let barsIco = document.querySelector('.fa-bars')
let xIco = document.querySelector('.fa-times')
let nav = document.querySelector('.navul')
let body = document.querySelector('.body')
let generateQR = document.querySelector('.generateQRCode')

let input = document.querySelector('.input')
let odp = document.querySelector('.odp')
let letters = /[a-z]/i;
let numbers = /[0-9]/;
let special = /[!@#$%^&*()]/;
let minValue = 10

let btn1 = document.querySelector('.btn1Temp')
let btn2 = document.querySelector('.btn2Temp')
let btn3 = document.querySelector('.btn3Temp')
let btn4 = document.querySelector('.btn4Temp')

let win = document.querySelector('.winTemp')
let rel = document.querySelector('.fa-arrows-rotate')
let div = document.querySelector('.divTemp')
let count = 0

let weighInput = document.querySelector('.weighBMI');
let heightInput = document.querySelector('.heightBMI');
let calculateBtn = document.querySelector('.btnBMI');
let answerOutput = document.querySelector('.answerBMI');

let windowCalc = document.querySelector('.windowCalc')
let btnsCalc = document.querySelectorAll('.buttonCalc')
let specialBtns = ['+', '-', '/', '*', '=', 'C']
let output = ''

let btnKCAL = document.getElementById('btnKCAL');
let answerKCAL = document.getElementById('answerKCAL');

let btn1Size = document.querySelector('.btn1Size')
let btn2Size = document.querySelector('.btn2Size')
let btn3Size = document.querySelector('.btn3Size')
let btn4Size = document.querySelector('.btn4Size')
let winSize = document.querySelector('.winSize')
let relSize = document.querySelector('.fa-arrows-rotate')


function calculateKCAL() {
    let gender = document.querySelector('input[name="plec"]:checked');
    let weight = document.getElementById('weightKCAL').value;
    let height = document.getElementById('heightKCAL').value;
    let age = document.getElementById('ageKCAL').value;

    if (!gender || !weight || !height || !age) {
        answerKCAL.textContent = 'Wprowadź poprawne dane.';
        return;
    }

    weight = parseFloat(weight);
    height = parseFloat(height);
    age = parseFloat(age);

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        answerKCAL.textContent = 'Wprowadź poprawne dane.';
        return;
    }

    let kcal;
    if (gender.value === 'kobieta') {
        kcal = 655 + 9.6 * weight + 1.85 * height - 4.7 * age;
    } else if (gender.value === 'mezczyzna') {
        kcal = 66.5 + 13.7 * weight + 5 * height - 6.8 * age;
    }

    answerKCAL.innerHTML = `Twoje dzienne zapotrzebowanie kaloryczne wynosi: ${kcal.toFixed(2)} kcal.`;
    }



var isEnglish = sessionStorage.getItem("isEnglish") === "true";

async function fetchTranslations() {
    try {
        const response = await fetch('translations.json'); 
        const translations = await response.json();
        return translations;
    } catch (error) {
        console.error('Error fetching translations:', error);
        return {};
    }
}

async function translatePage() {
    const translations = await fetchTranslations();

    var elements = document.querySelectorAll('p');

    

    elements.forEach(function(element) {
        var originalText = element.textContent;
        var translatedText = translations[originalText];

        if (translatedText && isEnglish) {
            element.textContent = translatedText;
        } else {
            element.textContent = originalText;
        }
    });

    var flagImage = document.querySelector('.flag');
    if (flagImage) {
        flagImage.src = isEnglish ? './images/pl.png' : './images/usa.png';
    }
}

(async function() {
    await translatePage();
    
    document.getElementById("translateButton").addEventListener("click", async function() {
        isEnglish = !isEnglish;
        sessionStorage.setItem("isEnglish", isEnglish);
        await translatePage();
        location.reload();
    });

})();



function showNav() {
    nav.classList.toggle('active')
    menuBtn.classList.toggle('active1')
    body.classList.toggle('shadow')
    barsIco.classList.toggle('hide')
    xIco.classList.toggle('hide')
}

function showNav1() {
    nav.classList.toggle('active')
    menuBtn.classList.toggle('active1')
    barsIco.classList.toggle('hide')
    xIco.classList.toggle('hide')
}

function handleKeyDown(e) {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      showNav();
    }
  }


function odpowiedz() {
    if (input.value.length > minValue && input.value.match(letters) && input.value.match(numbers) && input.value.match(special)) {
        odp.textContent = 'Bardzo dobre hasło!'
        odp.style.color = 'lime'
    } else if (input.value.length > minValue && input.value.match(letters) && input.value.match(numbers)) {
        odp.textContent = 'Dobre hasło'
        odp.style.color = 'gold'
    } else if (input.value.length > minValue && input.value.match(letters)) {
        odp.textContent = 'Niewłaściwe hasło'
        odp.style.color = 'tomato'
    } else {
        odp.textContent = 'Niewłaściwe hasło'
        odp.style.color = 'tomato'
    }   
}

function generateQRCode() {
    const content = document.querySelector(".content").value;
    if (content !== '') {
    const qr = new QRious({
    element: document.querySelector(".qrcode"),
    value: content,
    size: 200
});
}}


document.addEventListener('keydown', handleKeyDown);
menuBtn.addEventListener('click', showNav);




function calculate(btnValue) {
    if (btnValue === '=' && btnValue !== '') {
        try {
            output = eval(output.replace('%', '/100'));
        } catch (error) {
            output = 'Błąd';
        }
    } else if (btnValue === 'C') {
    output = ''
    } else {
        if (output === '' && specialBtns.includes(btnValue)) return
        output += btnValue
    }
    windowCalc.textContent = output
}




function relfun() {
    if (count === 0) {
      win.placeholder = 'F°';
      btn1.classList.remove('hide')
      btn2.classList.add('hide')
      count++;
    } else if (count === 1) {
      win.placeholder = 'K';
      btn2.classList.remove('hide')
      btn3.classList.add('hide')
      count++;
    } else if (count === 2) {
      win.placeholder = 'C°';
      btn1.classList.toggle('hide')
      btn3.classList.remove('hide')
      count++;
    } else {
        count = 0
    }      
}





function fun4() {
    win.value = ''
}


function fun2() {
    let value = parseFloat(win.value);

    if (win.placeholder === 'C°' && (Number.isInteger(value) || !isNaN(value))) {
        win.value = (value * 1.8) + 32;
    } else if (win.placeholder === 'K' && (Number.isInteger(value) || !isNaN(value))) {
        win.value = (value - 273.15) * 9/5 + 32;
    } 
}



function fun1() {
    let value = parseFloat(win.value);

    if (win.placeholder === 'F°' && (Number.isInteger(value) || !isNaN(value))) {
        win.value = (value - 32) / 1.8;
    } else if (win.placeholder === 'K' && (Number.isInteger(value) || !isNaN(value))) {
        win.value = (value + 273.15)
    } 
}


function fun3() {
    let value = parseFloat(win.value);

    if (win.placeholder === 'F°' && (Number.isInteger(value) || !isNaN(value))) {
        win.value = (value - 273.15) * 1.8 + 32;
    } else if (win.placeholder === 'C°' && (Number.isInteger(value) || !isNaN(value))) {
        win.value = (value + 273.15)
    } 
}




function relfunSize() {
    if (count === 0) {
        winSize.placeholder = 'Ft';
        btn1Size.classList.remove('hide')
        btn2Size.classList.add('hide')
        count++;
    } else if (count === 1) {
        winSize.placeholder = 'Mila';
        btn2Size.classList.remove('hide')
        btn3Size.classList.add('hide')
        count++;
    } else if (count === 2) {
        winSize.placeholder = 'Metr';
        btn1Size.classList.toggle('hide')
        btn3Size.classList.remove('hide')
        count++;
    } else {
        count = 0
    }      
}



function fun1Size() {
    let value = parseFloat(winSize.value);

    if (winSize.placeholder === 'Ft' && (Number.isInteger(value) || !isNaN(value))) {
    winSize.value = (value / 3.2808);
    } else if (winSize.placeholder === 'Mila' && (Number.isInteger(value) || !isNaN(value))) {
    winSize.value = (value / 0.00062137);
    } 
}

function fun2Size() {
    let value = parseFloat(winSize.value);

    if (winSize.placeholder === 'Metr' && (Number.isInteger(value) || !isNaN(value))) {
        winSize.value = (value * 3.2808);
    } else if (winSize.placeholder === 'Mila' && (Number.isInteger(value) || !isNaN(value))) {
        winSize.value = (value / 0.0001893939);
    } 
}


function fun3Size() {
    let value = parseFloat(winSize.value);

    if (winSize.placeholder === 'Ft' && (Number.isInteger(value) || !isNaN(value))) {
        winSize.value = (value * 0.0001893939)
    } else if (winSize.placeholder === 'Metr' && (Number.isInteger(value) || !isNaN(value))) {
        winSize.value = (value * 0.00062137)
    } 
}

function fun4Size() {
    winSize.value = ''
}


function calculateBMI() {
    let gender = document.querySelector('input[name="plec"]:checked');
    if (gender) {
        gender = gender.value;
    } else {
        answerOutput.textContent = 'Wybierz płeć.';
        return;
    }
    let weight = parseFloat(weighInput.value);
    let height = parseFloat(heightInput.value) / 100; 

    if (isNaN(weight) || isNaN(height)) {
        answerOutput.textContent = 'Wprowadź poprawne dane.';
        return;
    }


let bmi = weight / (height * height);

let interpretation = '';
    if (gender === 'kobieta') {
        if (bmi < 18.5) {
            interpretation = 'Niedowaga';
        } else if (bmi < 24.9) {
            interpretation = 'Waga prawidłowa';
        } else if (bmi < 29.9) {
            interpretation = 'Nadwaga';
        } else if (bmi < 34.9) {
            interpretation = 'Otyłość I stopnia';
        } else if (bmi < 39.9) {
            interpretation = 'Otyłość II stopnia';
        } else {
            interpretation = 'Otyłość III stopnia';
        }
    } else if (gender === 'mezczyzna') {
        if (bmi < 18.5) {
            interpretation = 'Niedowaga';
        } else if (bmi < 24.9) {
            interpretation = 'Waga prawidłowa';
        } else if (bmi < 29.9) {
            interpretation = 'Nadwaga';
        } else if (bmi < 34.9) {
            interpretation = 'Otyłość I stopnia';
        } else if (bmi < 39.9) {
            interpretation = 'Otyłość II stopnia';
        } else {
            interpretation = 'Otyłość III stopnia';
        }
    }

    answerOutput.innerHTML = `Twoje BMI wynosi: ${bmi.toFixed(2)}<br>${interpretation}`;
}



const darkModeButton = document.querySelector('.darkMode');
const bodyElement = document.body;
const isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';


function toggleDarkMode() {
    bodyElement.classList.toggle('dark-mode');
    const newDarkModeState = bodyElement.classList.contains('dark-mode');
    localStorage.setItem('darkMode', newDarkModeState.toString());
}

    if (isDarkModeEnabled) {
        toggleDarkMode();
    }
darkModeButton.addEventListener('click', toggleDarkMode);

            

