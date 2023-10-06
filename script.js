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
let calculateBtn = document.querySelector('.btnBMI')
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
let gitCloneElements = document.querySelectorAll('.gitClone');
let generateQRButton = document.querySelector('.generateQRCode');

let btnGenerate = document.querySelector('.btnGenerate')
let passwordGEN = document.querySelector('.passwordGEN')

let btnGenerateColor = document.querySelector('#btnGenerateColor')
let colorBox = document.querySelector('#color-box')

let quoteBtnGenerate = document.querySelector('#quoteBtnGenerate')
let randomQuote = document.querySelector('.randomQuote')

let curGenBtn = document.querySelector('#curGenBtn')
let randomCuriosity = document.querySelector('.randomCuriosity')

let searchInputCurrency = document.querySelector('.searchInputCurrency')
let searchInput1 = document.querySelector('#searchInput1')



function showFirstText1() {
    const firstText1 = document.querySelector('.mainTitle');
    if (firstText1) {
        firstText1.classList.add('slidein');
    }
}

function showFirstText2() {
    const firstText2 = document.querySelector('.mainTitleText');
    if (firstText2) {
        firstText2.classList.add('slidein');
    }
}

window.addEventListener('DOMContentLoaded', function() {
    setTimeout(showFirstText1, 250);
});
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(showFirstText2, 500);
});

function copyContent(event) {
    let paragraph = event.currentTarget;
    let content = paragraph.textContent;
    let textarea = document.createElement('textarea');
    textarea.value = content;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

gitCloneElements.forEach(element => {
    element.addEventListener('click', copyContent);
});


async function smoothScroll(target) {
    const targetElement = document.querySelector(target);

    if (targetElement) {
        await targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

const buttonIds = ['aboutMeBtn', 'technologyBtn', 'projectsBtn', 'contactBtn', 'cvBtn'];

buttonIds.forEach(buttonId => {
    const button = document.getElementById(buttonId);
    if (button) {
        button.addEventListener('click', async function() {
            await smoothScroll(`#${buttonId.replace('Btn', 'ID')}`);
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    if (generateQRButton) {
        generateQRButton.addEventListener('click', function() {
            const content = document.querySelector(".content").value;
            if (content !== '') {
                const qr = new QRious({
                element: document.querySelector(".qrcode"),
                value: content,
                size: 200
                });
            }
        })
    }
})


document.addEventListener('DOMContentLoaded', function() {
    if (calculateBtn) {
    calculateBtn.addEventListener('click', calculateBMI);
    }
})

function generatePassword() {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
    let password = '';
    let passwordLength = 20;

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
    }

    let passwordElement = document.getElementById('password');
    passwordElement.textContent = password;
    passwordElement.classList.add('copyable');
    document.getElementById('copied-msg').style.display = 'none';
}


function copyPassword() {
    let passwordElement = document.getElementById('password');
    let password = passwordElement.textContent;
    let textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    document.getElementById('copied-msg').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    if (btnGenerate && passwordGEN) {
    btnGenerate.addEventListener('click', generatePassword)
    passwordGEN.addEventListener('click', copyPassword)
    }
})


function generateColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let colorBox = document.getElementById("color-box");
    colorBox.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";

    let copiedMsg = document.getElementById("copied-msg");
    copiedMsg.textContent = "";

    colorBox.setAttribute("data-color", "rgb(" + red + ", " + green + ", " + blue + ")");
}

function copyColor() {
    let colorBox = document.getElementById("color-box");
    let colorValue = colorBox.getAttribute("data-color");
    let textarea = document.createElement("textarea");
    textarea.value = colorValue;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    let copiedMsg = document.getElementById("copied-msg");
    copiedMsg.textContent = "✅";
}

document.addEventListener('DOMContentLoaded', function() {
    if (btnGenerateColor && colorBox) {
    btnGenerateColor.addEventListener('click', generateColor)      
    colorBox.addEventListener('click', copyColor)
    }
})

const facts = [
    "Będziesz mieć to, na co zasługujesz.<br><br> ~ J.K. Rowling",
    "Życie nie jest problemem, które trzeba rozwiązywać, lecz rzeczywistością, którą trzeba doświadczać.<br><br> ~ Søren Kierkegaard",
    "Sukces to nie klucz do szczęścia. Szczęście to klucz do sukcesu. Jeśli kochasz to, co robisz, odniesiesz sukces.<br><br> ~ Albert Schweitzer",
    "Zacznij tam, gdzie jesteś. Użyj tego, co masz. Zrób to, co możesz.<br><br> ~ Arthur Ashe",
    "Twoje życie jest ograniczone tylko przez to, w co wierzysz.<br><br> ~ Oprah Winfrey",
    "Droga do sukcesu to zawsze budowanie mostów, nie murów.<br><br> ~ Zig Ziglar",
    "Nieznana przyszłość jest lepsza niż przewidywana przyszłość.<br><br> ~ Joel Barker",
    "Życie to coś, co nam się przydarza, kiedy planujemy coś innego.<br><br> ~ John Lennon",
    "Nigdy nie jest za późno, aby stać się tym, kim chcesz być.<br><br> ~ George Eliot",
    "Wszystkie nasze sny mogą się spełnić, jeśli mamy wystarczającą odwagę, aby iść za nimi.<br><br> ~ Walt Disney",
    "Niech twoje przeszłe błędy staną się twoimi naukowcami, a nie twoimi sędziami.<br><br> ~ Robin Sharma",
    "Życie jest zbyt krótkie, aby je spędzać na martwieniu się o to, co myślą inni.<br><br> ~ Demi Lovato",
    "Nigdy nie jesteś za stary, aby wyznaczać nowe cele lub marzyć nowe marzenia.<br><br> ~ C.S. Lewis",
    "Prawdziwa miara sukcesu to ilość radości, jaką przynosi się innym.<br><br> ~ Dalai Lama",
    "Najlepszy czas na działanie jest teraz.<br><br> ~ Roy T. Bennett",
    "Podróż tysiąca mil zaczyna się od jednego kroku.<br><br> ~ Laozi",
    "Dziękuj za każdy dzień, bo każdy dzień jest cudem.<br><br> ~ Anonymous",
    "Celem życia jest samo życie w sposób jak najpełniejszy.<br><br> ~ Daisaku Ikeda",
    "Być sobą to najpiękniejsza rzecz, jaką kiedykolwiek można osiągnąć.<br><br> ~ Zac Efron",
    "Wszyscy jesteśmy tutaj po to, aby zaistnieć.<br><br> ~ W.H. Auden",
    "Pamiętaj, aby być zawsze sobą. Świat nie potrzebuje kolejnej kopii.<br><br> ~ Suzy Kassem",
    "Wiara przenosi góry, ale my musimy je wciąż wspinać.<br><br> ~ David McCullough",
    "Nie widzimy rzeczy takimi, jakie są; widzimy je takimi, jakimi jesteśmy.<br><br> ~ Anaïs Nin",
    "Uczysz się więcej w niepowodzeniach niż w sukcesach.<br><br> ~ Jay-Z",
    "Nigdy nie rezygnuj z marzeń tylko dlatego, że się nie spełniły.<br><br> ~ Mark Twain",
    "Czasami chodzi o to, by schować lęki do kieszeni i ruszyć naprzód.<br><br> ~ Robert Downey Jr.",
    "Twoje działania mówią głośniej niż twoje słowa.<br><br> ~ Robin S. Sharma",
    "Niebo nie jest limitem, umysł jest limitem.<br><br> ~ Usain Bolt",
    "Życie to nie czekanie na burzę minie, to nauczenie się, jak tańczyć w deszczu.<br><br> ~ Vivian Greene",
    "Sukces to kwestia podejmowania kolejnych kroków.<br><br> ~ Brian Tracy",
    "Każdy sukces ma swoje korzenie w odwadze do podjęcia pierwszego kroku.<br><br> ~ Mark Twain",
    "Jedynym miejscem, gdzie sukces pojawia się przed pracą, to w słowniku.<br><br> ~ Vidal Sassoon",
    "Najważniejsza podróż to ta, którą odbywamy do siebie samego.<br><br> ~ Walter Riso",
    "Prawdziwa mądrość polega na tym, że zdajesz sobie sprawę, że nic nie wiesz.<br><br> ~ Socrates",
    "Twoje myśli kształtują twoje życie.<br><br> ~ Tony Robbins",
    "Większość sukcesów zaczyna się od postawienia celu.<br><br> ~ Michael Korda",
    "Życie to nie problem, które trzeba rozwiązać, ale rzeczywistość, którą trzeba doświadczać.<br><br> ~ Søren Kierkegaard",
    "Zacznij tam, gdzie jesteś. Użyj tego, co masz. Zrób to, co możesz.<br><br> ~ Arthur Ashe",
    "Twoje życie jest ograniczone tylko przez to, w co wierzysz.<br><br> ~ Oprah Winfrey",
    "Droga do sukcesu to zawsze budowanie mostów, nie murów.<br><br> ~ Zig Ziglar",
    "Nieznana przyszłość jest lepsza niż przewidywana przyszłość.<br><br> ~ Joel Barker",
    "Życie to coś, co nam się przydarza, kiedy planujemy coś innego.<br><br> ~ John Lennon",
    "Nigdy nie jest za późno, aby stać się tym, kim chcesz być.<br><br> ~ George Eliot",
    "Wszystkie nasze sny mogą się spełnić, jeśli mamy wystarczającą odwagę, aby iść za nimi.<br><br> ~ Walt Disney",
    "Niech twoje przeszłe błędy staną się twoimi naukowcami, a nie twoimi sędziami.<br><br> ~ Robin Sharma",
    "Życie jest zbyt krótkie, aby je spędzać na martwieniu się o to, co myślą inni.<br><br> ~ Demi Lovato",
    "Nigdy nie jesteś za stary, aby wyznaczać nowe cele lub marzyć nowe marzenia.<br><br> ~ C.S. Lewis",
]

function generateRandomQuote() {
    const randomQuoteElement = document.querySelector('.randomQuote');
    const randomNumber = Math.floor(Math.random() * facts.length);
    randomQuoteElement.innerHTML = facts[randomNumber];
}


document.addEventListener('DOMContentLoaded', function() {
    if (quoteBtnGenerate) {
    quoteBtnGenerate.addEventListener('click', generateRandomQuote)
    }
})

const facts1 = [
    "Najmniejszy kość ludzkiego to strzemiączko w uchu, ma około 0,1 cm długości.",
    "Kleopatra VII była bardziej starożytna od piramid w Gizie.",
    "Długość dna oceanów jest większa niż suma wszystkich lądów na Ziemi.",
    "Orka potrafi spać tylko jedną półkulą mózgową na raz.",
    "Największym producentem bananów na świecie jest Indie, a nie Ameryka Łacińska.",
    "Wszystkie cyfry na kalkulatorze w telefonie komórkowym są ułożone tak samo jak na kalkulatorze naukowym.",
    "Wszystkie kangury są leworęczne.",
    "Wielkość populacji mrówek na świecie jest większa od ludzkiej populacji.",
    "Okręty podwodne używają morskich zwierząt jako punktów orientacyjnych, by wybrać najdogodniejszą trasę.",
    "Elektroencefalografia (EEG) może zarejestrować aktywność mózgu przy użyciu elektrod na głowie.",
    "Świnie są bardziej inteligentne niż psy, a ich pamięć może sięgać kilku lat wstecz.",
    "Pluton został zdegradowany z rangi planety do statusu planety karłowatej w 2006 roku.",
    "Wenus ma dłuższy dzień niż rok, obracając się wokół własnej osi wolniej niż przemieszcza się wokół Słońca.",
    "Większość bambusa kwitnie tylko raz na kilkadziesiąt lat.",
    "Język flaminga jest biały, ale ich pożywienie nadaje mu różowy kolor.",
    "Wiatraki były wykorzystywane jako źródło energii już w starożytności.",
    "Astronauta Chris Hadfield wykonał pierwszy akustyczny koncert w kosmosie, grając na gitarze na Międzynarodowej Stacji Kosmicznej.",
    "Ludzkie DNA ma około 98% podobieństwa do DNA szympansów.",
    "Właściciel Microsoft, Bill Gates, zjada na lunch zwykły hamburger, nie używa karty kredytowej i nie ma zegarka.",
    "Wśród wszystkich zwierząt na Ziemi, żółwie mają najdłuższe życie.",
    "Lodowiec na Antarktydzie o nazwie Lambert Glacier jest największym lodowcem na Ziemi, mając powierzchnię porównywalną do stanu Wirginia.",
    "Foka potrafi zanurkować na głębokość ponad 700 metrów.",
    "Chemia jest obecna w smaku deszczu, który zawiera kwas azotowy.",
    "Biała rekinia krew jest cieplejsza niż reszta jej ciała, co pomaga w zachowaniu temperatury ciała w chłodnych wodach.",
    "Koń może spać zarówno stojąc, jak i leżąc.",
    "Największy istniejący owad to pałąk olbrzymi, osiągający rozpiętość skrzydeł do 30 cm.",
    "Język flaminga jest odwrócony - bardziej przypomina ten z tytułu.",
    "Niektóre gatunki modliszek potrafią obracać głowę o 180 stopni.",
    "Rozmiar Księżyca zmniejsza się, ponieważ oddala się od Ziemi o około 3,8 centymetra rocznie.",
    "Ludzki mózg jest jednym z najbardziej energochłonnych narządów ciała, zużywając około 20% całkowitej energii organizmu.",
    "Największy pająk na świecie, ptasznik Goliath, może osiągnąć rozmiar do 30 cm.",
    "Język wielorybów jest na tyle duży, że może ważyć tyle co słonie.",
    "Indyjska Księga Rekordów Guinessa ma własną Księgę Rekordów Guinessa, zarejestrowaną jako największa ilość ludzi jednocześnie malujących paznokcie.",
    "Albert Einstein nigdy nie otrzymał Nagrody Nobla za teorię względności, tylko za wyjaśnienie efektu fotoelektrycznego.",
    "W sumie, na całym świecie istnieje około 1 500 aktywnych wulkanów.",
    "Dzieci urodzone z niebieskimi oczami to na początku zazwyczaj albinosy, których kolor oczu może się później zmienić.",
    "Kosmos jest pustką, ale między gwiazdami znajduje się również pył kosmiczny i gaz, nazywany gazem międzygwiazdowym.",
    "Tylko 10% wszystkich komórek w ludzkim ciele jest rzeczywiście ludzkich - reszta to bakterie, wirusy i inne mikroorganizmy.",
    "Japoński miecz katana jest znany z wyjątkowej ostrości, a proces jego produkcji wymaga wielu skomplikowanych etapów.",
    "Najwyższym nagraniem dźwięku, jakie kiedykolwiek zarejestrowano, był wystrzał pistoletu w pobliżu mikrofonu na szczycie Mount Everest.",
    "Wenus to jedyna planeta w Układzie Słonecznym, która krąży w kierunku przeciwnym do ruchu wskazówek zegara.",
]

function generateRandomCuriosity() {
    const randomQuoteElement = document.querySelector('.randomCuriosity');
    const randomNumber = Math.floor(Math.random() * facts1.length);
    randomQuoteElement.innerHTML = facts1[randomNumber];
}


document.addEventListener('DOMContentLoaded', function() {
    if (curGenBtn) {
    curGenBtn.addEventListener('click', generateRandomCuriosity)
    }
})

btnsCalc.forEach((button) => {
    button.addEventListener('click', (e) => calculate(e.target.dataset.value))
})


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


document.addEventListener('DOMContentLoaded', function() {
    if (btnKCAL) {
    btnKCAL.addEventListener('click', calculateKCAL)
    }
})




let isEnglish = sessionStorage.getItem("isEnglish") === "true";

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

    let elements = document.querySelectorAll('p');

    

    elements.forEach(function(element) {
        let originalText = element.textContent;
        let translatedText = translations[originalText];

        if (translatedText && isEnglish) {
            element.textContent = translatedText;
        } else {
            element.textContent = originalText;
        }
    });

    let flagImage = document.querySelector('.flag');
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


document.addEventListener('DOMContentLoaded', function() {
    if (menuBtn) {
        menuBtn.addEventListener('click', showNav);
    }
})


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


document.addEventListener('DOMContentLoaded', function() {
    if (btn1 && btn2 && btn3 && btn4 && rel) {
    btn1.classList.add('hide')
    btn1.addEventListener('click', fun1)
    btn2.addEventListener('click', fun2)
    btn3.addEventListener('click', fun3)
    btn4.addEventListener('click', fun4)
    rel.addEventListener('click', relfun)
    }
})



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


document.addEventListener('DOMContentLoaded', function() {
    if (btn1Size && btn2Size && btn3Size && btn4Size && relSize) {
        btn1Size.classList.add('hide')
        btn1Size.addEventListener('click', fun1Size)
        btn2Size.addEventListener('click', fun2Size)
        btn3Size.addEventListener('click', fun3Size)
        btn4Size.addEventListener('click', fun4Size)
        relSize.addEventListener('click', relfunSize)
    }
})

async function fetchCurrencies() {
    const url = `https://api.nbp.pl/api/exchangerates/tables/a/today`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const currencies = data[0].rates;

        const sortedCurrencies = currencies.sort((a, b) => b.popularity - a.popularity);

        const topCurrencies = sortedCurrencies.slice(0, 30);
        const currenciesContainer = document.querySelector('.currencies');

        currenciesContainer.innerHTML = '';

        topCurrencies.forEach(currency => {
        const currencyRow = document.createElement('div');
        currencyRow.innerHTML = `<br><br>${currency.code} <br>1.0 ${currency.currency} = ${currency.mid} zł` + '<br><br>';
        currenciesContainer.appendChild(currencyRow);
        });
    } catch (error) {
        console.log('Przekroczono limit pobierania danych:', error);
    }
}

function searchCurrencies() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const currencyRows = document.querySelectorAll('.currencies > div'); 

    currencyRows.forEach(currencyRow => {
        const currencyName = currencyRow.innerText.toLowerCase(); 
        if (currencyName.includes(searchValue)) {
            currencyRow.style.display = "block";
        } else {
            currencyRow.style.display = "none";
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    if (searchInputCurrency) {
    searchInputCurrency.addEventListener('input', searchCurrencies)
    }
})


window.addEventListener('load', fetchCurrencies);


document.addEventListener("DOMContentLoaded", async () => {
    const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1";

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const cryptocurrencyList = document.querySelector(".cryptoUl");

      data.forEach(crypto => {
        const listItem = document.createElement("div");
        listItem.innerHTML = `<br>${crypto.symbol.toUpperCase()}<br>${crypto.name}: ${crypto.current_price} $<br><br>`;
        cryptocurrencyList.appendChild(listItem);
      });
    } catch (error) {
      console.log("Przekroczono limit pobierania danych:", error);
    }
    });

function searchCryptocurrencies() {
    const searchValue = document.getElementById("searchInput1").value.toLowerCase();
    const cryptocurrencyList = document.querySelector(".cryptoUl");
    const cryptocurrencies = cryptocurrencyList.getElementsByTagName("div");

    for (const crypto of cryptocurrencies) {
        const name = crypto.innerText.toLowerCase();
        if (name.includes(searchValue)) {
        crypto.style.display = "block";
        } else {
        crypto.style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (searchInput1) {
        searchInput1.addEventListener('input', searchCryptocurrencies)
    }
})


let inputWeather = document.querySelector('.inputWeather');
let buttonWeather = document.querySelector('.buttonWeather');
let cityName = document.querySelector('.city-name');
let warning = document.querySelector('.warning');
let photo = document.querySelector('.photo');
let weather = document.querySelector('.weather');
let temperature = document.querySelector('.temperature');
let humidity = document.querySelector('.humidity');
let authorWeather = document.querySelector('.authorWeather');

let API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
let API_KEY = '&appid=2854093abbef63b9ca5ed8d664ef6e71';
let API_UNITS = '&units=metric';
let API_LANG = '&lang=pl';

const getWeather = async () => {
    const city = inputWeather.value || 'Polska';
    const URL = API_LINK + city + API_KEY + API_UNITS + API_LANG;

    try {
        const res = await axios.get(URL);
        console.log(res.data);
        const temp = res.data.main.temp;
        const hum = res.data.main.humidity;
        const status = Object.assign({}, ...res.data.weather);

        warning.textContent = '';
        inputWeather.value = '';

        cityName.innerHTML = '<br><br>' + res.data.name + '<br><br><br>';
        temperature.innerHTML = 'Temperatura' + '<br><br>' + Math.floor(temp) + '℃' + '<br><br>';
        humidity.innerHTML = 'Wilgotność' + '<br><br>' + hum + '%' + '<br><br>';
        authorWeather.innerHTML = 'Autorem danych jest' + '<br>' + '<a href="https://openweathermap.org/" target="_blank" style="text-decoration: none; color: #1e1d23;">https://openweathermap.org/</a>' + '<br><br>';
    } catch (error) {
        warning.innerHTML = 'Nieprawidłowa nazwa miasta';
    }
};

const enderCheck = e => {
    if (e.key === 'Enter') {
        getWeather();
    }
};


document.addEventListener('DOMContentLoaded', function() {
    if (inputWeather && buttonWeather) {
        inputWeather.addEventListener('keyup', enderCheck);
        buttonWeather.addEventListener('click', getWeather);
    }
})





let darkModeButton = document.querySelector('.darkMode');
let bodyElement = document.body;
let isDarkModeEnabled = localStorage.getItem('darkMode') === 'true';


function toggleDarkMode() {
    bodyElement.classList.toggle('dark-mode');
    const newDarkModeState = bodyElement.classList.contains('dark-mode');
    localStorage.setItem('darkMode', newDarkModeState.toString());
}

    if (isDarkModeEnabled) {
        toggleDarkMode();
    }


document.addEventListener('DOMContentLoaded', function() {
    darkModeButton.addEventListener('click', toggleDarkMode);
})
