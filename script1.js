
document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // PERSONAGES
    // =====================================

    const characters = {
        Stefan: {
            description: "Je bent loyaal, beschermend en hebt een sterk geweten. Je probeert het juiste te doen, zelfs wanneer dat moeilijk is."
        },
        Damon: {
            description: "Je hebt een scherpe humor en laat niet snel zien wat je werkelijk voelt. Achter je stoere houding zit meer gevoel dan mensen verwachten."
        },
        Elena: {
            description: "Je bent empathisch en geeft veel om de mensen rondom je. Je probeert anderen te begrijpen, zelfs wanneer ze fouten maken."
        },
        Bonnie: {
            description: "Je bent zelfstandig, sterk en bijzonder loyaal. Je staat klaar voor anderen, maar vergeet soms jezelf."
        },
        Caroline: {
            description: "Je bent ambitieus, sociaal en georganiseerd. Je wilt groeien en laat je niet zomaar tegenhouden."
        },
        Katherine: {
            description: "Je bent slim, onafhankelijk en moeilijk te doorgronden. Je denkt vooruit en laat niet iedereen zomaar dichtbij komen."
        },
        Elijah: {
            description: "Je hecht veel waarde aan principes, respect en loyaliteit. Je blijft meestal rustig, zelfs wanneer alles rondom je chaotisch wordt."
        },
        Klaus: {
            description: "Je hebt een sterke persoonlijkheid en wilt zelf bepalen hoe je leven verloopt. Je gevoelens zijn vaak dieper dan je laat merken."
        },
        Tyler: {
            description: "Je bent vastberaden en beschermt de mensen die belangrijk voor je zijn. Je hebt soms tijd nodig om je emoties te begrijpen."
        }
    };

    // =====================================
    // VRAGEN
    // =====================================

    const questions = [
        {
            category: "VERTROUWEN",
            question: "Iemand die je vertrouwt, vertelt je een groot geheim. Wat doe je?",
            answers: [
                { text: "Ik bescherm het geheim, wat er ook gebeurt." },
                { text: "Ik probeer te begrijpen waarom die persoon het vertelt." },
                { text: "Ik onthoud het, maar blijf voorzichtig." },
                { text: "Ik vertrouw mensen niet zomaar, dus dit verandert weinig." }
            ]
        },
        {
            category: "KEUZES",
            question: "Je moet kiezen tussen je eigen geluk en dat van iemand die je graag ziet.",
            answers: [
                { text: "Ik kies voor die persoon." },
                { text: "Ik zoek een oplossing waarbij niemand moet verliezen." },
                { text: "Ik moet ook aan mezelf denken." },
                { text: "Het hangt ervan af hoeveel die persoon voor mij betekent." }
            ]
        },
        {
            category: "EMOTIES",
            question: "Hoe ga je om met sterke emoties?",
            answers: [
                { text: "Ik praat erover met iemand die ik vertrouw." },
                { text: "Ik verberg ze achter humor." },
                { text: "Ik probeer ze onder controle te houden." },
                { text: "Ik laat ze toe, ook als dat moeilijk is." }
            ]
        },
        {
            category: "RELATIES",
            question: "Wat vind je het belangrijkst in een relatie?",
            answers: [
                { text: "Eerlijkheid en vertrouwen." },
                { text: "Passie en avontuur." },
                { text: "Rust, veiligheid en respect." },
                { text: "Elkaar volledig kunnen accepteren." }
            ]
        },
        {
            category: "CONFLICT",
            question: "Iemand behandelt een vriend van je oneerlijk.",
            answers: [
                { text: "Ik spreek die persoon onmiddellijk aan." },
                { text: "Ik probeer de situatie eerst te begrijpen." },
                { text: "Ik bedenk hoe ik het probleem slim kan aanpakken." },
                { text: "Ik laat duidelijk merken dat ik dit niet accepteer." }
            ]
        },
        {
            category: "AMBITIE",
            question: "Wat motiveert jou het meest?",
            answers: [
                { text: "Mijn eigen doelen bereiken." },
                { text: "De mensen die ik graag zie gelukkig maken." },
                { text: "Bewijzen dat ik sterker ben dan mensen denken." },
                { text: "Een leven opbouwen waar ik trots op kan zijn." }
            ]
        },
        {
            category: "GEHEIMEN",
            question: "Mensen begrijpen je soms verkeerd. Wat doe je?",
            answers: [
                { text: "Ik probeer mezelf uit te leggen." },
                { text: "Ik trek me er weinig van aan." },
                { text: "Ik laat liever niet zien wie ik echt ben." },
                { text: "Ik hoop dat de mensen die belangrijk zijn me begrijpen." }
            ]
        },
        {
            category: "LOYALITEIT",
            question: "Een goede vriend maakt een grote fout.",
            answers: [
                { text: "Ik blijf aan hun kant, maar zeg wel wat ik ervan vind." },
                { text: "Ik help hen om het recht te zetten." },
                { text: "Ik verwacht dat ze zelf verantwoordelijkheid nemen." },
                { text: "Ik geef hen een tweede kans." }
            ]
        },
        {
            category: "CONTROLE",
            question: "Wanneer alles onverwacht verandert, hoe reageer je?",
            answers: [
                { text: "Ik maak zo snel mogelijk een nieuw plan." },
                { text: "Ik probeer rustig te blijven." },
                { text: "Ik volg mijn gevoel." },
                { text: "Ik pas me aan en zie wat er gebeurt." }
            ]
        },
        {
            category: "IDENTITEIT",
            question: "Welke uitspraak past het best bij jou?",
            answers: [
                { text: "Ik voel vaak meer dan ik laat zien." },
                { text: "Ik weet meestal wat ik wil." },
                { text: "De mensen rondom mij komen op de eerste plaats." },
                { text: "Ik wil mijn eigen keuzes kunnen maken." }
            ]
        },
        {
            category: "VERLEDEN",
            question: "Hoe kijk je naar fouten uit je verleden?",
            answers: [
                { text: "Ik probeer ervan te leren." },
                { text: "Ik blijf er soms langer mee zitten dan ik wil." },
                { text: "Ik laat mijn verleden niet bepalen wie ik ben." },
                { text: "Ik probeer dingen goed te maken." }
            ]
        },
        {
            category: "INVLOED",
            question: "Je krijgt de kans om veel invloed te hebben. Wat doe je?",
            answers: [
                { text: "Ik gebruik die om anderen te helpen." },
                { text: "Ik zorg dat ik nooit afhankelijk word van anderen." },
                { text: "Ik gebruik die om mijn doelen te bereiken." },
                { text: "Ik gebruik die voorzichtig en verantwoordelijk." }
            ]
        },
        {
            category: "ANGST",
            question: "Wat zou je het moeilijkst vinden?",
            answers: [
                { text: "Iemand verliezen die belangrijk voor me is." },
                { text: "Geen controle meer hebben over mijn leven." },
                { text: "Niet mezelf kunnen zijn." },
                { text: "Iemand teleurstellen die op mij rekent." }
            ]
        },
        {
            category: "VERTROUWEN",
            question: "Hoe snel laat je iemand echt dichtbij komen?",
            answers: [
                { text: "Vrij snel als het goed voelt." },
                { text: "Langzaam. Vertrouwen moet groeien." },
                { text: "Ik ben open, maar hou bepaalde dingen privé." },
                { text: "Dat hangt volledig af van de persoon." }
            ]
        },
        {
            category: "MORALITEIT",
            question: "Is het ooit goed om regels te breken?",
            answers: [
                { text: "Als het iemand beschermt, soms wel." },
                { text: "Alleen als er echt geen andere oplossing is." },
                { text: "Regels zijn niet altijd eerlijk." },
                { text: "Ik probeer altijd het juiste te doen." }
            ]
        },
        {
            category: "PERSOONLIJKHEID",
            question: "Welke eigenschap waarderen mensen waarschijnlijk in jou?",
            answers: [
                { text: "Dat ik er altijd ben voor anderen." },
                { text: "Dat ik zelfstandig ben." },
                { text: "Dat ik alles goed kan organiseren." },
                { text: "Dat ik mensen goed aanvoel." }
            ]
        },
        {
            category: "DRUK",
            question: "Wanneer anderen veel van je verwachten...",
            answers: [
                { text: "Probeer ik aan die verwachtingen te voldoen." },
                { text: "Bepaal ik zelf wat haalbaar is." },
                { text: "Leg ik mezelf soms te veel druk op." },
                { text: "Probeer ik alles stap voor stap aan te pakken." }
            ]
        },
        {
            category: "LIEFDE",
            question: "Wat doe je wanneer je iemand echt graag ziet?",
            answers: [
                { text: "Ik doe veel om die persoon gelukkig te maken." },
                { text: "Ik probeer mijn gevoelens niet te duidelijk te tonen." },
                { text: "Ik ben heel beschermend." },
                { text: "Ik wil dat we allebei onze vrijheid behouden." }
            ]
        },
        {
            category: "KEUZES",
            question: "Je ontdekt dat iemand tegen je gelogen heeft.",
            answers: [
                { text: "Ik wil weten waarom." },
                { text: "Mijn vertrouwen is meteen beschadigd." },
                { text: "Ik blijf kalm en verzamel eerst de feiten." },
                { text: "Ik laat me niet zomaar opnieuw misleiden." }
            ]
        },
        {
            category: "TOEKOMST",
            question: "Hoe zie je jezelf het liefst later?",
            answers: [
                { text: "Omringd door mensen die ik graag zie." },
                { text: "Vrij, onafhankelijk en zelfzeker." },
                { text: "Succesvol en trots op wat ik bereikt heb." },
                { text: "Rustig, gelukkig en in evenwicht." }
            ]
        },
        {
            category: "INNERLIJKE WERELD",
            question: "Wat beschrijft jouw innerlijke wereld het best?",
            answers: [
                { text: "Veel gevoelens en veel gedachten." },
                { text: "Een rustige plek waar ik alles analyseer." },
                { text: "Een sterke drang om mijn eigen weg te volgen." },
                { text: "Een plek waar de mensen die ik graag zie centraal staan." }
            ]
        },
        {
            category: "CONFLICT",
            question: "Wanneer iemand je onderschat...",
            answers: [
                { text: "Laat ik liever zien wat ik kan." },
                { text: "Het raakt me meer dan ik laat merken." },
                { text: "Ik trek mijn eigen plan." },
                { text: "Ik probeer te begrijpen waarom die persoon dat denkt." }
            ]
        },
        {
            category: "LOYALITEIT",
            question: "Wat betekent loyaliteit voor jou?",
            answers: [
                { text: "Iemand niet laten vallen wanneer het moeilijk wordt." },
                { text: "Eerlijk blijven, ook wanneer de waarheid pijn doet." },
                { text: "Elkaar vrijheid geven en toch vertrouwen." },
                { text: "Elkaar begrijpen zonder altijd woorden nodig te hebben." }
            ]
        },
        {
            category: "JOUW LOT",
            question: "Als je één ding over jezelf kon veranderen, wat zou je kiezen?",
            answers: [
                { text: "Minder twijfelen aan mezelf." },
                { text: "Minder rekening houden met anderen." },
                { text: "Mijn gevoelens beter begrijpen." },
                { text: "Meer vertrouwen hebben in mensen." }
            ]
        },
        {
            category: "MYSTIC FALLS",
            question: "Als je in Mystic Falls zou wonen, wat zou je doen?",
            answers: [
                { text: "Mijn vrienden beschermen." },
                { text: "Mijn eigen regels volgen." },
                { text: "Iedereen proberen te helpen." },
                { text: "Mijn eigen weg zoeken." }
            ]
        }
    ];

    // =====================================
    // ELEMENTEN UIT HTML
    // =====================================

    const startScreen = document.getElementById("startScreen");
    const quizScreen = document.getElementById("quizScreen");
    const resultScreen = document.getElementById("resultScreen");

    const startButton = document.getElementById("startButton");
    const restartButton = document.getElementById("restartButton");

    const questionNumber = document.getElementById("questionNumber");
    const questionCategory = document.getElementById("questionCategory");
    const questionTitle = document.getElementById("question");
    const answersContainer = document.getElementById("answers");
    const progressBar = document.getElementById("progressBar");

    const resultName = document.getElementById("resultName");
    const resultDescription = document.getElementById("resultDescription");
    const matchContainer = document.getElementById("matches");

    // =====================================
    // QUIZSTATUS
    // =====================================

    let currentQuestion = 0;

    // =====================================
    // QUIZ STARTEN
    // =====================================

    function startQuiz() {
        currentQuestion = 0;

        startScreen.hidden = true;
        resultScreen.hidden = true;
        quizScreen.hidden = false;

        showQuestion();
    }

    // =====================================
    // VRAAG TONEN
    // =====================================

    function showQuestion() {
        const current = questions[currentQuestion];

        if (!current) {
            showResult();
            return;
        }

        questionNumber.textContent =
            `QUESTION ${String(currentQuestion + 1).padStart(2, "0")} / ${questions.length}`;

        questionCategory.textContent = current.category;
        questionTitle.textContent = current.question;

        progressBar.style.width =
            `${((currentQuestion + 1) / questions.length) * 100}%`;

        answersContainer.innerHTML = "";

        current.answers.forEach(answer => {
            const button = document.createElement("button");

            button.className = "answer-button";
            button.type = "button";
            button.textContent = answer.text;

            button.addEventListener("click", () => {
                currentQuestion++;

                if (currentQuestion < questions.length) {
                    showQuestion();
                } else {
                    showResult();
                }
            });

            answersContainer.appendChild(button);
        });
    }

    // =====================================
    // VASTE TOP 3
    // =====================================

    function calculateMatches() {
        return [
            { name: "Klaus" },
            { name: "Damon" },
            { name: "Bonnie" }
        ];
    }

    // =====================================
    // RESULTAAT TONEN
    // =====================================

    function showResult() {
        quizScreen.hidden = true;
        resultScreen.hidden = false;

        const topThree = calculateMatches();

        resultName.textContent = topThree[0].name;

        resultDescription.textContent =
            characters[topThree[0].name].description;

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
            description.textContent =
                characters[match.name].description;

            info.appendChild(name);
            info.appendChild(description);

            card.appendChild(rank);
            card.appendChild(info);

            matchContainer.appendChild(card);
        });
    }

    // =====================================
    // KNOPPEN
    // =====================================

    if (startButton) {
        startButton.addEventListener("click", startQuiz);
    } else {
        console.error("Startknop niet gevonden!");
    }

    if (restartButton) {
        restartButton.addEventListener("click", startQuiz);
    } else {
        console.error("Herstartknop niet gevonden!");
    }

    console.log("Mystic Falls Quiz is geladen!");

});
