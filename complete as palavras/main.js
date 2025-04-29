// Lista de palavras com letras ausentes
let words = [
    { word: "_asa", correctLetter: "c", icon: "https://img.icons8.com/?size=100&id=n019EocqqOW4&format=png&color=000000" },
    { word: "p_rta", correctLetter: "o", icon: "https://img.icons8.com/?size=100&id=S5SWMOkCAcYB&format=png&color=000000" },
    { word: "gat_", correctLetter: "o", icon: "https://img.icons8.com/?size=100&id=120341&format=png&color=000000" },
    { word: "car_o", correctLetter: "r", icon: " https://img.icons8.com/?size=100&id=12684&format=png&color=000000"},
    { word: "pa_o", correctLetter: "t", icon: "https://img.icons8.com/?size=100&id=16041&format=png&color=000000" },
    { word: "_ivro", correctLetter: "l", icon: "https://img.icons8.com/?size=100&id=16369&format=png&color=000000" },
    { word: "bo_a", correctLetter: "l", icon: "https://img.icons8.com/?size=100&id=104882&format=png&color=000000" },
    { word: "fer_o", correctLetter: "r", icon: "https://img.icons8.com/?size=100&id=563&format=png&color=000000" },
    { word: "ma_a", correctLetter: "l", icon: "https://img.icons8.com/?size=100&id=GF74fAJh0qCM&format=png&color=000000" },
    { word: "ta_i", correctLetter: "x", icon: "https://img.icons8.com/?size=100&id=j2SfqDojO0h4&format=png&color=000000" },
    { word: "jan_la", correctLetter: "e", icon: "https://img.icons8.com/?size=100&id=Sz0LzQr27SP2&format=png&color=000000" },
    { word: "cor_ina", correctLetter: "t", icon: "https://img.icons8.com/?size=100&id=80902&format=png&color=000000" },
    { word: "lam_ada", correctLetter: "p", icon: "https://img.icons8.com/?size=100&id=12305&format=png&color=000000" },
    { word: "par_de", correctLetter: "e", icon: "https://img.icons8.com/?size=100&id=32481&format=png&color=000000" },
    { word: "televis_o", correctLetter: "a", icon: "https://img.icons8.com/?size=100&id=Vdu0R7J70qRi&format=png&color=000000" },
    { word: "comput_dor", correctLetter: "a", icon: "https://img.icons8.com/?size=100&id=9911&format=png&color=000000" },
    { word: "tabl_t", correctLetter: "e", icon: "https://img.icons8.com/?size=100&id=11087&format=png&color=000000" },
    { word: "celu_ar", correctLetter: "l", icon: "https://img.icons8.com/?size=100&id=119445&format=png&color=000000" },
    { word: "mus_ca", correctLetter: "i", icon: "https://img.icons8.com/?size=100&id=78948&format=png&color=000000" },
    { word: "viol_o", correctLetter: "a", icon: "https://img.icons8.com/?size=100&id=k95pbsCYc2EP&format=png&color=000000" },
    { word: "pi_no", correctLetter: "a", icon: "https://img.icons8.com/?size=100&id=111554&format=png&color=000000" },
    { word: "gui_arra", correctLetter: "t", icon: "https://img.icons8.com/?size=100&id=anByGI68H2r5&format=png&color=000000" },
    { word: "bat_ria", correctLetter: "e", icon: "https://img.icons8.com/?size=100&id=y1QZx1Jkx3Wo&format=png&color=000000" },
    { word: "fi_me", correctLetter: "l", icon: "https://img.icons8.com/?size=100&id=PW8vVvwgK4BN&format=png&color=000000" },
    { word: "cin_ma", correctLetter: "e", icon: "https://img.icons8.com/?size=100&id=BExvumgE2U9i&format=png&color=000000" },
    { word: "teat_o", correctLetter: "r", icon: "https://img.icons8.com/?size=100&id=4923&format=png&color=000000" },
    { word: "cad_rno", correctLetter: "e", icon: "https://img.icons8.com/?size=100&id=79136&format=png&color=000000" },
    { word: "pap_l", correctLetter: "e", icon: "https://img.icons8.com/?size=100&id=6552&format=png&color=000000" },
    { word: "can_ta", correctLetter: "e", icon: "https://img.icons8.com/?size=100&id=jE2KL6ClbJnf&format=png&color=000000" },
    { word: "lap_s", correctLetter: "i", icon: "https://img.icons8.com/?size=100&id=11737&format=png&color=000000" },
    { word: "barr_ca", correctLetter: "a", icon: "https://img.icons8.com/?size=100&id=24641&format=png&color=000000" },
    { word: "camp_", correctLetter: "o", icon: "https://img.icons8.com/?size=100&id=12059&format=png&color=000000" },
    { word: "mont_nha", correctLetter: "a", icon: "https://img.icons8.com/?size=100&id=81237&format=png&color=000000" },
    { word: "pisc_na", correctLetter: "i", icon: "https://img.icons8.com/?size=100&id=LXXlmoeNpVYM&format=png&color=000000" },
    { word: "m_r", correctLetter: "a", icon: "https://img.icons8.com/?size=100&id=SGLlYIY8kkK2&format=png&color=000000" },
    { word: "r_o", correctLetter: "i", icon: "https://img.icons8.com/?size=100&id=17581&format=png&color=000000" },
    { word: "lag_", correctLetter: "o", icon: "https://img.icons8.com/?size=100&id=A9oi47sp8PRq&format=png&color=000000" },
    { word: "f_or", correctLetter: "l", icon: "https://img.icons8.com/?size=100&id=HSB537aMhYRZ&format=png&color=000000" },
    { word: "p_aia", correctLetter: "r", icon: "https://img.icons8.com/?size=100&id=17569&format=png&color=000000" },
    { word: "s_l", correctLetter: "o", icon: "https://img.icons8.com/?size=100&id=qnMTFGbujs2I&format=png&color=000000" },
    { word: "n_vem", correctLetter: "u", icon: "https://img.icons8.com/?size=100&id=21754&format=png&color=000000" },
    { word: "c_u", correctLetter: "e", icon: "https://img.icons8.com/?size=100&id=iZuwxZxWDwvB&format=png&color=000000" },
    { word: "e_trela", correctLetter: "s", icon: "https://img.icons8.com/?size=100&id=19295&format=png&color=000000" },
    { word: "l_a", correctLetter: "u", icon: "https://img.icons8.com/?size=100&id=67639&format=png&color=000000" },
    { word: "pre_uiça", correctLetter: "g", icon: "https://img.icons8.com/?size=100&id=36778&format=png&color=000000" },
    { word: "g_lo", correctLetter: "a", icon: "https://img.icons8.com/?size=100&id=36858&format=png&color=000000" },
    { word: "v_ca", correctLetter: "a", icon: "https://img.icons8.com/?size=100&id=30917&format=png&color=000000" },
    { word: "c_valo", correctLetter: "a", icon: "https://img.icons8.com/?size=100&id=4tOWxsfKlVab&format=png&color=000000" },
    { word: "pá_saro", correctLetter: "s", icon: "https://img.icons8.com/?size=100&id=16023&format=png&color=000000" },
    { word: "ji_óia", correctLetter: "b", icon: "https://img.icons8.com/?size=100&id=B9KthcApBrrK&format=png&color=000000" },
    { word: "_achorro", correctLetter: "c", icon: "https://img.icons8.com/?size=100&id=120353&format=png&color=000000" },
    { word: "pei_e", correctLetter: "x", icon: "https://img.icons8.com/?size=100&id=HoKsW590IMku&format=png&color=000000" },
    { word: "ti_re", correctLetter: "g", icon: "https://img.icons8.com/?size=100&id=IPM25sfz9lod&format=png&color=000000" },
    { word: "l_ão", correctLetter: "e", icon: "https://img.icons8.com/?size=100&id=120346&format=png&color=000000" },
    { word: "_ebra", correctLetter: "z", icon: "https://img.icons8.com/?size=100&id=Fdqv3Y6oLK2y&format=png&color=000000" },
    { word: "ele_ante", correctLetter: "f", icon: "https://img.icons8.com/?size=100&id=24485&format=png&color=000000" },
    { word: "_inoceronte", correctLetter: "r", icon: "https://img.icons8.com/?size=100&id=31018&format=png&color=000000" },
    { word: "c_ocodilo", correctLetter: "r", icon: "https://img.icons8.com/?size=100&id=2pO02-vVjy-O&format=png&color=000000" },
    { word: "jaca_é", correctLetter: "r", icon: "https://img.icons8.com/?size=100&id=ucFXo98hhFEL&format=png&color=000000" },
    { word: "_inguim", correctLetter: "p", icon: "https://img.icons8.com/?size=100&id=hgrGzESUav94&format=png&color=000000" },
    { word: "f_ca", correctLetter: "o", icon: "https://img.icons8.com/?size=100&id=45434&format=png&color=000000" },
    { word: "ba_eia", correctLetter: "l", icon: "https://img.icons8.com/?size=100&id=81134&format=png&color=000000" },
    { word: "gol_inho", correctLetter: "f", icon: "https://img.icons8.com/?size=100&id=9188&format=png&color=000000" },
    { word: "_aranguejo", correctLetter: "c", icon: "https://img.icons8.com/?size=100&id=44&format=png&color=000000" },
    { word: "po_vo", correctLetter: "l", icon: "https://img.icons8.com/?size=100&id=9228&format=png&color=000000" },
    { word: "_artaruga", correctLetter: "t", icon: "https://img.icons8.com/?size=100&id=30977&format=png&color=000000" },
    { word: "a_elha", correctLetter: "b", icon: "https://img.icons8.com/?size=100&id=16030&format=png&color=000000" },
    { word: "bo_boleta", correctLetter: "r", icon: "https://img.icons8.com/?size=100&id=16031&format=png&color=000000" },
    { word: "mos_uito", correctLetter: "q", icon: "https://img.icons8.com/?size=100&id=9sJaXqS_KhuP&format=png&color=000000" },
    { word: "_ormiga", correctLetter: "f", icon: "https://img.icons8.com/?size=100&id=30989&format=png&color=000000" },
    { word: "aran_a", correctLetter: "h", icon: "https://img.icons8.com/?size=100&id=eqyhKuW3MoV2&format=png&color=000000" },
    { word: "e_corpião", correctLetter: "s", icon: "https://img.icons8.com/?size=100&id=mig8r0e1VEzD&format=png&color=000000" },
    { word: "gira_a", correctLetter: "f", icon: "https://img.icons8.com/?size=100&id=16056&format=png&color=000000" },
    { word: "_ipopótamo", correctLetter: "h", icon: "https://img.icons8.com/?size=100&id=25074&format=png&color=000000" },
    { word: "pa_da", correctLetter: "n", icon: "https://img.icons8.com/?size=100&id=wsZWi9BF5kLF&format=png&color=000000" },
    { word: "ca_elo", correctLetter: "m", icon: "https://img.icons8.com/?size=100&id=0HDALqTHiQ5K&format=png&color=000000" },
    { word: "d_omedário", correctLetter: "r", icon: "https://img.icons8.com/?size=100&id=1GYF0CzbLe3T&format=png&color=000000g" },
    { word: "_lamingo", correctLetter: "f", icon: "https://img.icons8.com/?size=100&id=XG9KQAFR7fNc&format=png&color=000000" },
    { word: "p_vão", correctLetter: "a", icon: "https://img.icons8.com/?size=100&id=95586&format=png&color=000000" },
    { word: "co_uja", correctLetter: "r", icon: "https://img.icons8.com/?size=100&id=bWSF9BaSORCP&format=png&color=000000" },
    { word: "a_aconda", correctLetter: "n", icon: "https://img.icons8.com/?size=100&id=a1yR50Jgsw5W&format=png&color=000000" },
    { word: "la_arta", correctLetter: "g", icon: "https://img.icons8.com/?size=100&id=9236&format=png&color=000000" },
    { word: "caramu_o", correctLetter: "j", icon: "https://img.icons8.com/?size=100&id=4474&format=png&color=000000" },
    { word: "lo_tra", correctLetter: "n", icon: "https://img.icons8.com/?size=100&id=F2T76eVK4Z3a&format=png&color=000000" },
    { word: "a_ta", correctLetter: "n", icon: "https://img.icons8.com/?size=100&id=yI8juWXIiErA&format=png&color=000000" }
];

// Frases de incentivo ao acertar
const successMessages = [
    "Muito bem  ! Você é incrível!",
    "Parabéns ! Continue assim!",
    "Ótimo trabalho ! Você acertou!",
    "Você está arrasando !",
    "Excelente! Vamos para a próxima!",
    "Fantástico!  você é genial!",
    "Incrível ! Que talento!",
    "Você está indo muito bem !",
    "Maravilhoso! Continue jogando!",
    "Uau! Você é muito bom nisso!",
    "Que legal ! Você acertou!",
    "Você é um campeão!",
    "Sensacional! Que habilidade!",
    "Perfeito! Você conseguiu!",
    "Você está brilhando!",
    "Que orgulho! Continue assim!",
    "Você é demais!",
    "Espetacular! Você acertou!",
    "Que show ! Você está arrasando!",
    "Você é um exemplo de dedicação!",
    "Muito bom ! Vamos para a próxima!",
    "Você está no caminho certo!",
    "Que incrível! Você acertou!",
    "Você é um verdadeiro mestre!",
    "Parabéns ! Você está aprendendo rápido!",
    "Você é uma estrela!",
    "Que conquista! Continue assim!",
    "Manu você está se superando!",
    "Que maravilha! Você acertou!",
    "Você é uma verdadeira campeã!"
];

const errorMessages = [
    "Não desista ! Você consegue!",
    "Tente novamente, você está indo bem!",
    "Errar faz parte do aprendizado !",
    "Continue tentando, você é capaz!",
    "Quase lá ! Não desista!",
    "Você está aprendendo, errar faz parte !",
    "Não se preocupe, você vai acertar!",
    "Cada erro é uma chance de melhorar!",
    "Você está indo muito bem, tente de novo!",
    "Não desanime, você está no caminho certo!",
    "Você consegue! Tente mais uma vez!",
    "Errar é normal , continue tentando!",
    "Você está quase lá, não desista!",
    "A prática leva à perfeição !", 
    "Você está aprendendo, continue jogando!",
    "Não se preocupe, você vai acertar na próxima!",
    "Você é capaz , tente novamente!",
    "Não desista, você está indo bem!",
    "Cada tentativa te deixa mais perto do acerto!",
    "Você está fazendo um ótimo trabalho, continue!",
    "Não desanime, você está aprendendo!",
    "Você consegue, tente mais uma vez!",
    "Errar é só mais um passo para acertar!",   
    "Você está no caminho certo, continue tentando!",
    "Não se preocupe, você está indo bem!",
    "Você é forte, continue tentando!",
    "Você está aprendendo, não desista!",
    "Cada erro é uma oportunidade de melhorar!",  
    "Você está quase lá, continue tentando!",
    "Você é incrível, tente novamente!"
];

// Arrays auxiliares para controlar as frases já exibidas
let usedSuccessMessages = [];
let usedErrorMessages = [];

// Função para obter uma frase aleatória sem repetição
function getRandomMessage(messages, usedMessages) {
    // Se todas as frases já foram exibidas, reinicia o array
    if (usedMessages.length === messages.length) {
        usedMessages.length = 0; // Limpa o array de frases usadas
    }

    // Filtra as frases que ainda não foram usadas
    const availableMessages = messages.filter(msg => !usedMessages.includes(msg));

    // Seleciona uma frase aleatória
    const randomMessage = availableMessages[Math.floor(Math.random() * availableMessages.length)];

    // Adiciona a frase ao array de frases usadas
    usedMessages.push(randomMessage);

    return randomMessage;
}

let currentWordIndex = 0;
let score = 0;

// Elementos do DOM
const wordElement = document.getElementById("word-to-complete");
const feedbackMessage = document.getElementById("feedback-message");
const scoreElement = document.getElementById("score");
const themeSelection = document.getElementById("theme-selection");
const gameContainer = document.getElementById("game-container");
const themePinkButton = document.getElementById("theme-pink");
const themeBlueButton = document.getElementById("theme-blue");

// Função para embaralhar o array de palavras
function shuffleWords(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Atualiza a palavra na tela com espaços editáveis
function updateWord() {
    const currentWordObject = words[currentWordIndex];
    wordElement.innerHTML = ""; // Limpa o conteúdo anterior

    // Oculta o botão e o input
    const userInput = document.getElementById("user-input");
    const submitButton = document.getElementById("submit-button");
    if (userInput && submitButton) {
        userInput.classList.add("hidden");
        submitButton.classList.add("hidden");
    }

    currentWordObject.word.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.classList.add("letter");
        span.textContent = char === "_" ? "" : char; // Mantém o caractere original

        // Torna o espaço editável se for um "_"
        if (char === "_") {
            span.contentEditable = true;
            span.dataset.index = index;

            // Adiciona evento para verificar a letra inserida
            span.addEventListener("input", () => handleLetterInput(span, currentWordObject.correctLetter));
        }

        wordElement.appendChild(span);
    });

    // Atualiza o ícone correspondente
    const iconElement = document.getElementById("word-icon");
    iconElement.src = currentWordObject.icon;
    iconElement.alt = `Ícone de ${currentWordObject.word}`;
}

// Lida com a entrada de texto no espaço reservado
function handleLetterInput(span, correctLetter) {
    // Remove espaços em branco e converte para minúsculas
    let userAnswer = span.textContent.trim().toLowerCase();

    // Garante que apenas um caractere seja permitido
    if (userAnswer.length > 1) {
        userAnswer = userAnswer.slice(0, 1); // Mantém apenas o primeiro caractere
        span.textContent = userAnswer; // Atualiza o campo com o caractere válido
    }

    // Verifica se a resposta está correta
    if (userAnswer === correctLetter) {
        span.textContent = correctLetter; // Atualiza o texto com a letra correta
        span.classList.add("correct");
        span.contentEditable = false; // Torna o espaço não editável após acerto
        score += 10; // Ganha 10 pontos por resposta correta

        // Exibe uma frase de incentivo aleatória sem repetição
        const randomSuccessMessage = getRandomMessage(successMessages, usedSuccessMessages);
        feedbackMessage.textContent = randomSuccessMessage;
        feedbackMessage.classList.add("correct");
        feedbackMessage.classList.remove("wrong");

        // Passa para a próxima palavra
        currentWordIndex++;
        if (currentWordIndex < words.length) {
            setTimeout(updateWord, 1000); // Aguarda 1 segundo antes de atualizar a palavra
        } else {
            setTimeout(() => {
                alert("Fim do jogo! Sua pontuação final é: " + score);
                resetGame();
            }, 1000);
        }
    } else if (userAnswer.length > 0) {
        span.classList.add("wrong");
        score -= 5; // Perde 5 pontos por resposta errada

        // Exibe uma frase motivacional aleatória sem repetição
        const randomErrorMessage = getRandomMessage(errorMessages, usedErrorMessages);
        feedbackMessage.textContent = randomErrorMessage;
        feedbackMessage.classList.add("wrong");
        feedbackMessage.classList.remove("correct");
    }

    scoreElement.textContent = score; // Atualiza a pontuação na tela
}

// Função para reiniciar o jogo
function resetGame() {
    currentWordIndex = 0;
    score = 0;
    shuffleWords(words);
    updateWord();
    usedBackgroundImages = []; // Limpa o array de imagens usadas
}

// Função para aplicar o tema
function applyTheme(theme) {
    document.body.className = ""; // Remove qualquer tema anterior
    document.body.classList.add(`theme-${theme}`);
    gameContainer.classList.add(`theme-${theme}`);
    themeSelection.style.display = "none"; // Oculta a seleção de tema
    gameContainer.style.display = "block"; // Exibe o jogo
}

// Eventos para os botões de tema
themePinkButton.addEventListener("click", () => applyTheme("pink"));
themeBlueButton.addEventListener("click", () => applyTheme("blue"));

// Inicializa o jogo
shuffleWords(words);
updateWord();

