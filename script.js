
const characters = {
    Stefan: {
        description: "Je hebt een sterk geweten en probeert ondanks alles het juiste te doen. Je bent zorgzaam, loyaal en soms strenger voor jezelf dan voor anderen."
    },
    Damon: {
        description: "Je gebruikt humor en sarcasme om jezelf te beschermen. Je vertrouwt niet snel, maar wanneer iemand belangrijk voor je wordt, kan je bijzonder beschermend zijn."
    },
    Elena: {
        description: "Je bent empathisch en moedig. Je geeft veel om anderen en probeert zelfs in moeilijke situaties je menselijkheid te bewaren."
    },
    Bonnie: {
        description: "Je bent zelfstandig, verstandig en enorm loyaal. Je hebt een sterk gevoel voor rechtvaardigheid en geeft niet snel op."
    },
    Caroline: {
        description: "Je bent ambitieus, georganiseerd en sociaal. Je houdt ervan om controle te hebben over je leven en staat altijd klaar voor je vrienden."
    },
    Katherine: {
        description: "Je bent strategisch, onafhankelijk en moeilijk te doorgronden. Je denkt vooruit en weet hoe je jezelf moet beschermen."
    },
    Elijah: {
        description: "Je bent beheerst, principieel en waardig. Je neemt je beloftes serieus en verwacht hetzelfde van de mensen rondom je."
    },
    Klaus: {
        description: "Je bent intens, ambitieus en onafhankelijk. Je hebt sterke gevoelens, een sterke wil en een kleine groep mensen die echt belangrijk voor je zijn."
    },
    Tyler: {
        description: "Je bent vastberaden, beschermend en temperamentvol. Je wilt je eigen weg bepalen en laat niet zomaar over je heen lopen."
    }
};

const questions = [
    {
        category: "MYSTIC FALLS",
        question: "Je komt 's avonds alleen thuis en merkt dat iemand je al een tijdje volgt. Wat doe je?",
        answers: [
            { text: "Ik blijf rustig en probeer te ontdekken wie het is.", points: { Stefan: 2, Elijah: 2 } },
            { text: "Ik draai me om en confronteer die persoon.", points: { Damon: 2, Tyler: 2 } },
            { text: "Ik zoek eerst een veilige plek en denk vooruit.", points: { Katherine: 3, Bonnie: 1 } },
            { text: "Ik probeer iemand te bereiken die me kan helpen.", points: { Elena: 2, Caroline: 2 } }
        ]
    },
    {
        category: "GEHEIMEN",
        question: "Je ontdekt dat een goede vriend al maanden een groot geheim verbergt.",
        answers: [
            { text: "Ik geef die persoon de kans om alles uit te leggen.", points: { Elena: 2, Stefan: 2 } },
            { text: "Ik wil onmiddellijk de volledige waarheid kennen.", points: { Damon: 2, Tyler: 1 } },
            { text: "Ik onderzoek zelf wat er aan de hand is.", points: { Bonnie: 2, Katherine: 2 } },
            { text: "Ik blijf kalm, maar mijn vertrouwen is beschadigd.", points: { Elijah: 2, Caroline: 2 } }
        ]
    },
    {
        category: "LOYALITEIT",
        question: "Je beste vriend heeft iets gedaan wat je absoluut niet goedkeurt.",
        answers: [
            { text: "Ik blijf aan hun kant, maar zeg eerlijk wat ik ervan vind.", points: { Stefan: 2, Bonnie: 2 } },
            { text: "Ik verdedig hen tegenover anderen.", points: { Damon: 2, Klaus: 2 } },
            { text: "Ik probeer hen te helpen de fout recht te zetten.", points: { Elena: 2, Caroline: 2 } },
            { text: "Ik verwacht dat ze zelf verantwoordelijkheid nemen.", points: { Elijah: 3, Katherine: 1 } }
        ]
    },
    {
        category: "DE SALVATORE BROTHERS",
        question: "Je moet samenwerken met iemand die je totaal niet vertrouwt.",
        answers: [
            { text: "Ik probeer toch een manier te vinden om samen te werken.", points: { Stefan: 2, Elena: 1 } },
            { text: "Ik maak duidelijk dat ik die persoon niet nodig heb.", points: { Damon: 2, Katherine: 2 } },
            { text: "Ik maak duidelijke afspraken en houd alles in de gaten.", points: { Elijah: 2, Caroline: 2 } },
            { text: "Ik zoek uit of die persoon misschien toch nuttig kan zijn.", points: { Klaus: 2, Bonnie: 1 } }
        ]
    },
    {
        category: "GEVOELENS",
        question: "Iemand heeft je diep gekwetst. Hoe reageer je?",
        answers: [
            { text: "Ik probeer te begrijpen waarom die persoon dat deed.", points: { Elena: 2, Stefan: 2 } },
            { text: "Ik doe alsof het me niets kan schelen.", points: { Damon: 2, Katherine: 2 } },
            { text: "Ik neem afstand om alles te verwerken.", points: { Bonnie: 2, Elijah: 2 } },
            { text: "Ik laat duidelijk merken dat ik dit niet pik.", points: { Tyler: 2, Klaus: 2 } }
        ]
    },
    {
        category: "HET BOVENNATUURLIJKE",
        question: "Je ontdekt dat iemand in je omgeving een vampier is.",
        answers: [
            { text: "Ik wil weten wie die persoon werkelijk is.", points: { Elena: 2, Bonnie: 1 } },
            { text: "Ik blijf voorzichtig en onderzoek de risico's.", points: { Katherine: 2, Elijah: 2 } },
            { text: "Ik probeer die persoon te begrijpen.", points: { Stefan: 2, Elena: 1 } },
            { text: "Ik laat me niet intimideren.", points: { Damon: 2, Tyler: 2 } }
        ]
    },
    {
        category: "VERTROUWEN",
        question: "Wat moet iemand doen om jouw vertrouwen te verdienen?",
        answers: [
            { text: "Bewijzen dat die persoon er voor mij is.", points: { Stefan: 2, Bonnie: 2 } },
            { text: "Eerlijk zijn, ook wanneer de waarheid moeilijk is.", points: { Elijah: 2, Caroline: 2 } },
            { text: "Laten zien dat die persoon mij niet probeert te controleren.", points: { Katherine: 2, Tyler: 2 } },
            { text: "Me accepteren, inclusief mijn minder goede kanten.", points: { Damon: 2, Klaus: 2 } }
        ]
    },
    {
        category: "FAMILIE",
        question: "Je familie komt in een ernstig conflict terecht.",
        answers: [
            { text: "Ik probeer iedereen bij elkaar te houden.", points: { Elena: 2, Caroline: 2 } },
            { text: "Ik bescherm mijn familie, wat er ook gebeurt.", points: { Klaus: 3, Tyler: 1 } },
            { text: "Ik probeer eerlijk te blijven tegenover iedereen.", points: { Stefan: 2, Elijah: 2 } },
            { text: "Ik zoek een oplossing die mij en mijn toekomst beschermt.", points: { Katherine: 2, Bonnie: 1 } }
        ]
    },
    {
        category: "MACHT",
        question: "Je krijgt plotseling veel macht. Wat is je eerste gedachte?",
        answers: [
            { text: "Hoe kan ik die gebruiken om anderen te beschermen?", points: { Bonnie: 2, Stefan: 2 } },
            { text: "Eindelijk kan ik zelf bepalen wat er gebeurt.", points: { Klaus: 2, Katherine: 2 } },
            { text: "Ik wil eerst begrijpen wat de gevolgen zijn.", points: { Elijah: 2, Caroline: 2 } },
            { text: "Ik wil vooral voorkomen dat anderen macht over mij krijgen.", points: { Damon: 2, Tyler: 2 } }
        ]
    },
    {
        category: "KEUZES",
        question: "Je moet kiezen tussen je eigen geluk en dat van iemand die je graag ziet.",
        answers: [
            { text: "Ik zet mijn eigen geluk opzij.", points: { Stefan: 2, Bonnie: 2 } },
            { text: "Ik probeer een oplossing te vinden voor ons allebei.", points: { Elena: 2, Elijah: 2 } },
            { text: "Ik vind dat mijn geluk ook belangrijk is.", points: { Caroline: 2, Katherine: 2 } },
            { text: "Ik volg mijn gevoel, zelfs als anderen het niet begrijpen.", points: { Damon: 2, Klaus: 2 } }
        ]
    },
    {
        category: "HET MYSTIC GRILL",
        question: "Je zit in het Mystic Grill en hoort een gesprek dat niet voor jouw oren bedoeld is.",
        answers: [
            { text: "Ik luister verder om te weten wat er speelt.", points: { Katherine: 2, Damon: 1 } },
            { text: "Ik vertel het aan iemand die erbij betrokken is.", points: { Elena: 2, Bonnie: 2 } },
            { text: "Ik doe alsof ik niets gehoord heb.", points: { Stefan: 2, Elijah: 1 } },
            { text: "Ik gebruik de informatie om de situatie beter te begrijpen.", points: { Klaus: 2, Caroline: 1 } }
        ]
    },
    {
        category: "CONTROLE",
        question: "Je hele planning loopt plotseling in het honderd.",
        answers: [
            { text: "Ik maak meteen een nieuw plan.", points: { Caroline: 3, Elijah: 1 } },
            { text: "Ik probeer flexibel te blijven.", points: { Damon: 1, Elena: 2 } },
            { text: "Ik neem even afstand en denk na.", points: { Stefan: 2, Bonnie: 2 } },
            { text: "Ik neem de leiding en regel het zelf.", points: { Klaus: 2, Katherine: 2 } }
        ]
    },
    {
        category: "DE WAARHEID",
        question: "Je ontdekt dat iemand die je graag ziet tegen je gelogen heeft.",
        answers: [
            { text: "Ik wil weten waarom die persoon gelogen heeft.", points: { Elena: 2, Stefan: 2 } },
            { text: "Ik verlies onmiddellijk een deel van mijn vertrouwen.", points: { Elijah: 2, Caroline: 2 } },
            { text: "Ik probeer te ontdekken wat er nog meer verborgen wordt.", points: { Katherine: 2, Bonnie: 2 } },
            { text: "Ik laat niet merken hoeveel het me raakt.", points: { Damon: 2, Klaus: 1 } }
        ]
    },
    {
        category: "VRIENDSCHAP",
        question: "Een vriend heeft het moeilijk, maar wil absoluut geen hulp.",
        answers: [
            { text: "Ik blijf beschikbaar tot die persoon er klaar voor is.", points: { Bonnie: 2, Stefan: 2 } },
            { text: "Ik probeer hen toch te overtuigen.", points: { Caroline: 2, Elena: 2 } },
            { text: "Ik respecteer hun keuze en geef ruimte.", points: { Elijah: 2, Katherine: 1 } },
            { text: "Ik maak duidelijk dat ze niet alles alleen moeten doen.", points: { Damon: 2, Tyler: 2 } }
        ]
    },
    {
        category: "JE VERLEDEN",
        question: "Je krijgt de kans om één fout uit je verleden ongedaan te maken.",
        answers: [
            { text: "Ik zou iemand die ik pijn deed proberen te helpen.", points: { Stefan: 2, Elena: 2 } },
            { text: "Ik zou mezelf beschermen tegen een slechte keuze.", points: { Katherine: 2, Damon: 1 } },
            { text: "Ik zou mijn familie of vrienden beschermen.", points: { Klaus: 2, Bonnie: 2 } },
            { text: "Ik zou proberen de gevolgen eerlijk te herstellen.", points: { Elijah: 3, Caroline: 1 } }
        ]
    },
    {
        category: "DE SALVATORE BOARDING HOUSE",
        question: "Je krijgt een nacht in het Salvatore-huis. Waar ben je het meest nieuwsgierig naar?",
        answers: [
            { text: "De oude dagboeken en verborgen verhalen.", points: { Stefan: 2, Bonnie: 1 } },
            { text: "De geheime kamers en verborgen plannen.", points: { Katherine: 2, Klaus: 1 } },
            { text: "De geschiedenis van de familie.", points: { Elijah: 2, Elena: 1 } },
            { text: "De mensen die er wonen en hun geheimen.", points: { Damon: 2, Caroline: 1 } }
        ]
    },
    {
        category: "IDENTITEIT",
        question: "Welke uitspraak past het best bij jou?",
        answers: [
            { text: "Ik wil goed zijn, zelfs wanneer dat moeilijk is.", points: { Stefan: 3, Elena: 1 } },
            { text: "Ik laat niet zomaar iemand dichtbij komen.", points: { Katherine: 2, Damon: 2 } },
            { text: "Mijn vrienden betekenen enorm veel voor mij.", points: { Bonnie: 2, Caroline: 2 } },
            { text: "Ik bepaal zelf wie ik wil zijn.", points: { Klaus: 2, Tyler: 2 } }
        ]
    },
    {
        category: "VERANTWOORDELIJKHEID",
        question: "Iedereen kijkt naar jou om een moeilijke beslissing te nemen.",
        answers: [
            { text: "Ik luister naar iedereen voordat ik beslis.", points: { Elena: 2, Bonnie: 2 } },
            { text: "Ik neem de verantwoordelijkheid en blijf bij mijn keuze.", points: { Elijah: 3, Caroline: 1 } },
            { text: "Ik kies wat volgens mij het beste resultaat oplevert.", points: { Katherine: 2, Klaus: 2 } },
            { text: "Ik probeer niemand te laten vallen.", points: { Stefan: 2, Tyler: 2 } }
        ]
    },
    {
        category: "LIEFDE",
        question: "Wat vind jij het belangrijkst wanneer je verliefd bent?",
        answers: [
            { text: "Vertrouwen en eerlijkheid.", points: { Stefan: 2, Elijah: 2 } },
            { text: "Passie en sterke gevoelens.", points: { Damon: 2, Klaus: 2 } },
            { text: "Elkaar steunen en begrijpen.", points: { Elena: 2, Bonnie: 2 } },
            { text: "Vrijheid en jezelf kunnen blijven.", points: { Katherine: 2, Tyler: 2 } }
        ]
    },
    {
        category: "CONFLICT",
        question: "Iemand daagt je uit waar iedereen bij staat.",
        answers: [
            { text: "Ik blijf kalm en reageer verstandig.", points: { Elijah: 3, Stefan: 1 } },
            { text: "Ik reageer met een scherpe opmerking.", points: { Damon: 3, Katherine: 1 } },
            { text: "Ik laat duidelijk zien dat ik niet bang ben.", points: { Tyler: 2, Klaus: 2 } },
            { text: "Ik probeer de situatie niet groter te maken.", points: { Elena: 2, Bonnie: 2 } }
        ]
    },
    {
        category: "TOEKOMST",
        question: "Wat zou je het liefst willen bereiken?",
        answers: [
            { text: "Een leven waarin ik trots ben op mijn keuzes.", points: { Stefan: 2, Caroline: 2 } },
            { text: "Een sterke band met de mensen die ik graag zie.", points: { Elena: 2, Bonnie: 2 } },
            { text: "Volledige vrijheid om mijn eigen leven te leiden.", points: { Katherine: 2, Tyler: 2 } },
            { text: "Een leven waarin niemand mij kan onderschatten.", points: { Klaus: 2, Damon: 2 } }
        ]
    },
    {
        category: "GEVOELENS",
        question: "Wat doe je wanneer je je kwetsbaar voelt?",
        answers: [
            { text: "Ik praat met iemand die ik vertrouw.", points: { Elena: 2, Bonnie: 2 } },
            { text: "Ik verberg het achter humor.", points: { Damon: 3, Caroline: 1 } },
            { text: "Ik trek me even terug.", points: { Stefan: 2, Elijah: 2 } },
            { text: "Ik probeer opnieuw controle te krijgen.", points: { Katherine: 2, Klaus: 2 } }
        ]
    },
    {
        category: "LOYALITEIT",
        question: "Wat zou je nooit zomaar vergeven?",
        answers: [
            { text: "Verraad door iemand die ik volledig vertrouwde.", points: { Elijah: 2, Bonnie: 2 } },
            { text: "Iemand die mijn vrienden bewust pijn doet.", points: { Stefan: 2, Tyler: 2 } },
            { text: "Iemand die mij probeert te controleren.", points: { Katherine: 2, Klaus: 2 } },
            { text: "Iemand die mijn gevoelens niet serieus neemt.", points: { Elena: 2, Caroline: 2 } }
        ]
    },
    {
        category: "JOUW LOT",
        question: "Als je deel zou uitmaken van Mystic Falls, welke rol zou je hebben?",
        answers: [
            { text: "De persoon die iedereen bij elkaar probeert te houden.", points: { Elena: 2, Caroline: 2 } },
            { text: "Degene die de geheimen en mysteries ontdekt.", points: { Bonnie: 2, Katherine: 2 } },
            { text: "De persoon die zijn eigen regels maakt.", points: { Damon: 2, Klaus: 2 } },
            { text: "Degene die achter de schermen alles probeert te beschermen.", points: { Stefan: 2, Elijah: 2 } }
        ]
    }
];

const traitNames = [
    "empathy",
    "loyalty",
    "control",
    "ambition",
    "independence",
    "emotion"
];

// Scores per personage worden rechtstreeks uit de antwoorden opgebouwd.
let currentQuestion = 0;
let scores = {};
let shuffledQuestions = [];

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const questionNumber = document.getElementById("questionNumber");
const questionCategory = document.getElementById("questionCategory");
const questionTitle = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progressBar");

function resetScores() {
    scores = {};

    for (const name of Object.keys(characters)) {
        scores[name] = 0;
    }
}

function shuffle(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

function startQuiz() {
    currentQuestion = 0;
    resetScores();
    shuffledQuestions = shuffle(questions);

    startScreen.hidden = true;
    resultScreen.hidden = true;
    quizScreen.hidden = false;

    showQuestion();
}

function showQuestion() {
    const current = shuffledQuestions[currentQuestion];

    questionNumber.textContent =
        `DOSSIER ${String(currentQuestion + 1).padStart(2, "0")} / ${questions.length}`;

    questionCategory.textContent = current.category;
    questionTitle.textContent = current.question;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    answersContainer.innerHTML = "";

    const shuffledAnswers = shuffle(current.answers);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.className = "answer-button";
        button.textContent = answer.text;

        button.addEventListener("click", () => {
            for (const name in answer.points) {
                scores[name] += answer.points[name];
            }

            currentQuestion++;

            if (currentQuestion < shuffledQuestions.length) {
                showQuestion();
            } else {
                showResult();
            }
        });

        answersContainer.appendChild(button);
    });
}

function showResult() {
    quizScreen.hidden = true;
    resultScreen.hidden = false;

    const sorted = Object.entries(scores)
        .map(([name, score]) => ({
            name,
            score,
            tieBreaker: Math.random()
        }))
        .sort((a, b) =>
            b.score - a.score || b.tieBreaker - a.tieBreaker
        );

    const topThree = sorted.slice(0, 3);

    document.getElementById("resultName").textContent =
        topThree[0].name;

    document.getElementById("resultDescription").textContent =
        characters[topThree[0].name].description;

    const matchContainer = document.getElementById("matches");
    matchContainer.innerHTML = "";

    topThree.forEach((match, index) => {
        const card = document.createElement("div");
        card.className = "match-card";

        const rank = document.createElement("div");
        rank.className = "match-rank";
        rank.textContent = `0${index + 1}`;

        const info = document.createElement("div");
        info.className = "match-info";

        const name = document.createElement("h3");
        name.textContent = match.name;

        const description = document.createElement("p");
        description.textContent = characters[match.name].description;

        info.appendChild(name);
        info.appendChild(description);

        card.appendChild(rank);
        card.appendChild(info);

        matchContainer.appendChild(card);
    });
}

document.getElementById("startButton")
    .addEventListener("click", startQuiz);

document.getElementById("restartButton")
    .addEventListener("click", startQuiz);

resetScores();
