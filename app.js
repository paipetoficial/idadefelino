// Quiz de Idade dos Gatos - JavaScript

// Dados da aplicação baseados no JSON fornecido
const appData = {
    ageCalculation: {
        firstYear: 15,
        secondYear: 9,
        subsequentYears: 4,
        adjustments: {
            indoorCat: 2,
            outdoorCat: -3,
            neutered: 2,
            premiumFood: 1,
            regularVet: 1,
            healthIssues: -2
        }
    },
    lifeStages: [
        {
            stage: "Filhote",
            humanAgeRange: "0-6 anos",
            catAgeRange: "0-6 meses",
            characteristics: "Energia infinita, aprendendo sobre o mundo, muito curioso e brincalhão",
            careTips: "Vacinação completa, socialização, brinquedos seguros, alimentação específica para filhotes"
        },
        {
            stage: "Jovem Adulto",
            humanAgeRange: "7-24 anos",
            catAgeRange: "7 meses - 2 anos",
            characteristics: "Muito ativo, estabelecendo território, período ideal para castração",
            careTips: "Castração, estabelecer rotinas, exercícios regulares, alimentação balanceada"
        },
        {
            stage: "Adulto",
            humanAgeRange: "25-40 anos",
            catAgeRange: "3-6 anos",
            characteristics: "Personalidade definida, menos hiperativo, mais independente",
            careTips: "Manter rotina de exercícios, check-ups anuais, cuidar do peso"
        },
        {
            stage: "Meia-idade",
            humanAgeRange: "41-56 anos",
            catAgeRange: "7-10 anos",
            characteristics: "Início do declínio físico sutil, pode precisar de mais cuidados",
            careTips: "Check-ups semestrais, atenção a sinais de doença, ajustar alimentação"
        },
        {
            stage: "Idoso",
            humanAgeRange: "57-76 anos",
            catAgeRange: "11-15 anos",
            characteristics: "Menos ativo, pode ter problemas de saúde, precisa de mais carinho",
            careTips: "Alimentação senior, ambiente aquecido, cama macia, cuidados dentários"
        },
        {
            stage: "Muito Idoso",
            humanAgeRange: "77+ anos",
            catAgeRange: "16+ anos",
            characteristics: "Muito calmo, dorme mais, pode ter limitações físicas",
            careTips: "Cuidados especiais, medicação se necessário, muito amor e paciência"
        }
    ],
    quizQuestions: [
        {
            id: 1,
            question: "Qual é o nome do seu precioso gatinho?",
            type: "text",
            placeholder: "Digite o nome do seu felino",
            icon: "🐱"
        },
        {
            id: 2,
            question: "Quantos anos e meses {name} tem?",
            type: "age_select",
            icon: "📅"
        },
        {
            id: 3,
            question: "{name} vive onde?",
            type: "radio",
            icon: "🏠",
            options: [
                "Só dentro de casa (mais seguro)",
                "Dentro de casa mas sai no quintal",
                "Tem acesso livre à rua",
                "Vive na rua mas é cuidado"
            ]
        },
        {
            id: 4,
            question: "Como estão os dentinhos do(a) {name}?",
            type: "radio",
            icon: "🦷",
            options: [
                "Branquinhos e perfeitos",
                "Um pouco amarelados",
                "Com tártaro visível",
                "Alguns dentes ausentes ou muito amarelos"
            ]
        },
        {
            id: 5,
            question: "Os olhinhos do(a) {name} são:",
            type: "radio",
            icon: "👁️",
            options: [
                "Brilhantes e cristalinos",
                "Claros mas um pouco opacos",
                "Visivelmente turvos ou nublados",
                "Muito turvos com dificuldade de visão"
            ]
        },
        {
            id: 6,
            question: "O pelinho do(a) {name} é:",
            type: "radio",
            icon: "✨",
            options: [
                "Macio e sedoso como de filhote",
                "Espesso e bem cuidado",
                "Com alguns fios grisalhos",
                "Bem grisalho ou esbranquiçado"
            ]
        },
        {
            id: 7,
            question: "O(a) {name} foi castrado(a)?",
            type: "radio",
            icon: "🏥",
            options: [
                "Sim, foi castrado(a)",
                "Não, ainda é inteiro(a)",
                "Não sei/não lembro"
            ]
        },
        {
            id: 8,
            question: "{name} já teve algum problema de saúde sério?",
            type: "radio",
            icon: "💊",
            options: [
                "Nunca teve nada sério",
                "Teve alguns problemas mas se recuperou",
                "Tem ou teve doenças crônicas",
                "Tem vários problemas de saúde"
            ]
        },
        {
            id: 9,
            question: "Como o(a) {name} se alimenta?",
            type: "radio",
            icon: "🍽️",
            options: [
                "Ração premium de qualidade",
                "Ração comum do mercado",
                "Comida caseira balanceada",
                "Come de tudo um pouco"
            ]
        },
        {
            id: 10,
            question: "Como é o nível de atividade do(a) {name}?",
            type: "radio",
            icon: "🏃",
            options: [
                "Muito ativo, sempre brincando",
                "Moderadamente ativo",
                "Calmo, gosta de descansar",
                "Muito quieto, dorme quase o dia todo"
            ]
        },
        {
            id: 11,
            question: "{name} vai ao veterinário:",
            type: "radio",
            icon: "👨‍⚕️",
            options: [
                "Regularmente para check-ups",
                "Só quando fica doente",
                "Raramente, só em emergências",
                "Nunca foi ao veterinário"
            ]
        },
        {
            id: 12,
            question: "{name} convive com outros pets?",
            type: "radio",
            icon: "🐕",
            options: [
                "Sim, se dá bem com outros animais",
                "Sim, mas prefere ficar sozinho",
                "Não convive com outros pets",
                "Já conviveu mas agora está sozinho"
            ]
        }
    ],
    paymentOptions: [
        {
            method: "PIX",
            icon: "💳",
            description: "Aprovação instantânea",
            processingTime: 2
        },
        {
            method: "Cartão de Crédito",
            icon: "💳",
            description: "Parcelado em até 2x",
            processingTime: 3
        },
        {
            method: "PagSeguro",
            icon: "🔒",
            description: "Seguro e confiável",
            processingTime: 4
        }
    ]
};

// Estado da aplicação
let currentScreen = 'welcome-screen';
let currentQuestion = 1;
let quizAnswers = {};
let catName = '';
let calculatedAge = 0;
let lifeStage = null;
let paymentProcessed = false;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    showScreen('welcome-screen');
    setupEventListeners();
}

function setupEventListeners() {
    // Event listeners para inputs dinâmicos
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('option-btn')) {
            selectOption(e.target);
        }
    });
    
    // Prevent form submission on Enter
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.target.type === 'text') {
            e.preventDefault();
            nextQuestion();
        }
    });
}

// Navegação entre telas
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
        screen.style.display = 'none';
    });
    
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.style.display = 'block';
        targetScreen.classList.add('active');
        currentScreen = screenId;
        window.scrollTo(0, 0);
    }
}

function startQuiz() {
    currentQuestion = 1;
    quizAnswers = {};
    catName = '';
    showScreen('quiz-screen');
    displayQuestion();
}

function displayQuestion() {
    const question = appData.quizQuestions[currentQuestion - 1];
    if (!question) return;
    
    // Atualizar progresso
    updateProgress();
    
    // Personalizar pergunta com nome do gato
    let questionText = question.question;
    if (catName && questionText.includes('{name}')) {
        questionText = questionText.replace(/{name}/g, catName);
    }
    
    // Atualizar elementos da UI
    document.getElementById('question-icon').textContent = question.icon;
    document.getElementById('question-title').textContent = questionText;
    
    // Gerar opções baseado no tipo
    const optionsContainer = document.getElementById('question-options');
    optionsContainer.innerHTML = '';
    
    switch (question.type) {
        case 'text':
            optionsContainer.innerHTML = `
                <input type="text" class="form-control" id="cat-name-input" 
                       placeholder="${question.placeholder}" maxlength="30">
            `;
            // Auto-focus no input
            setTimeout(() => {
                document.getElementById('cat-name-input').focus();
            }, 100);
            break;
            
        case 'age_select':
            optionsContainer.innerHTML = `
                <div class="age-selectors">
                    <div class="age-selector">
                        <label>Anos</label>
                        <select class="form-control" id="age-years">
                            <option value="">Selecione</option>
                            ${Array.from({length: 21}, (_, i) => 
                                `<option value="${i}">${i}</option>`
                            ).join('')}
                        </select>
                    </div>
                    <div class="age-selector">
                        <label>Meses</label>
                        <select class="form-control" id="age-months">
                            <option value="">Selecione</option>
                            ${Array.from({length: 12}, (_, i) => 
                                `<option value="${i}">${i}</option>`
                            ).join('')}
                        </select>
                    </div>
                </div>
            `;
            break;
            
        case 'radio':
            optionsContainer.innerHTML = `
                <div class="option-buttons">
                    ${question.options.map((option, index) => 
                        `<button class="option-btn" data-value="${index}">${option}</button>`
                    ).join('')}
                </div>
            `;
            break;
    }
    
    // Atualizar estado do botão próximo
    updateNextButton();
}

function updateProgress() {
    const progress = (currentQuestion / 12) * 100;
    document.getElementById('quiz-progress').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `Pergunta ${currentQuestion} de 12`;
}

function selectOption(button) {
    // Remove seleção anterior
    const siblings = button.parentElement.querySelectorAll('.option-btn');
    siblings.forEach(btn => btn.classList.remove('selected'));
    
    // Adiciona seleção atual
    button.classList.add('selected');
    
    // Auto-avança para próxima pergunta após um delay
    setTimeout(() => {
        nextQuestion();
    }, 800);
}

function updateNextButton() {
    const nextBtn = document.getElementById('next-btn');
    const question = appData.quizQuestions[currentQuestion - 1];
    
    if (question.type === 'text' || question.type === 'age_select') {
        nextBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'none'; // Esconder para radio buttons (auto-advance)
    }
}

function nextQuestion() {
    if (!validateCurrentAnswer()) {
        return;
    }
    
    saveCurrentAnswer();
    
    if (currentQuestion < 12) {
        currentQuestion++;
        displayQuestion();
    } else {
        // Quiz completo, ir para pagamento
        showPaymentScreen();
    }
}

function validateCurrentAnswer() {
    const question = appData.quizQuestions[currentQuestion - 1];
    
    switch (question.type) {
        case 'text':
            const textInput = document.getElementById('cat-name-input');
            return textInput && textInput.value.trim().length > 0;
            
        case 'age_select':
            const yearsSelect = document.getElementById('age-years');
            const monthsSelect = document.getElementById('age-months');
            return yearsSelect && yearsSelect.value !== '' && 
                   monthsSelect && monthsSelect.value !== '';
            
        case 'radio':
            const selectedOption = document.querySelector('.option-btn.selected');
            return selectedOption !== null;
    }
    
    return false;
}

function saveCurrentAnswer() {
    const question = appData.quizQuestions[currentQuestion - 1];
    
    switch (question.type) {
        case 'text':
            const textInput = document.getElementById('cat-name-input');
            catName = textInput.value.trim();
            quizAnswers[question.id] = catName;
            break;
            
        case 'age_select':
            const years = parseInt(document.getElementById('age-years').value);
            const months = parseInt(document.getElementById('age-months').value);
            quizAnswers[question.id] = { years, months };
            break;
            
        case 'radio':
            const selectedOption = document.querySelector('.option-btn.selected');
            const optionIndex = parseInt(selectedOption.dataset.value);
            quizAnswers[question.id] = {
                index: optionIndex,
                value: question.options[optionIndex]
            };
            break;
    }
}

function showPaymentScreen() {
    showScreen('payment-screen');
    document.getElementById('cat-name-payment').textContent = catName;
}

function processPayment(method) {
    showScreen('processing-screen');
    document.getElementById('processing-method').textContent = `Processando via ${method}`;
    
    // Simular processamento baseado no método
    const paymentOption = appData.paymentOptions.find(opt => opt.method === method);
    const processingTime = paymentOption ? paymentOption.processingTime * 1000 : 3000;
    
    setTimeout(() => {
        paymentProcessed = true;
        calculateResults();
        showResults();
    }, processingTime);
}

function calculateResults() {
    const ageData = quizAnswers[2]; // Pergunta da idade
    const totalMonths = (ageData.years * 12) + ageData.months;
    
    // Cálculo base da idade humana
    let humanAge = 0;
    
    if (totalMonths <= 12) {
        // Primeiro ano
        humanAge = appData.ageCalculation.firstYear * (totalMonths / 12);
    } else if (totalMonths <= 24) {
        // Segundo ano
        humanAge = appData.ageCalculation.firstYear + 
                  (appData.ageCalculation.secondYear * ((totalMonths - 12) / 12));
    } else {
        // Anos subsequentes
        humanAge = appData.ageCalculation.firstYear + appData.ageCalculation.secondYear;
        const additionalYears = Math.floor((totalMonths - 24) / 12);
        humanAge += additionalYears * appData.ageCalculation.subsequentYears;
    }
    
    // Aplicar ajustes baseados nas respostas
    humanAge += calculateAdjustments();
    
    // Garantir que não seja menor que 0
    humanAge = Math.max(0, Math.round(humanAge));
    
    calculatedAge = humanAge;
    lifeStage = determineLifeStage(humanAge, ageData.years);
}

function calculateAdjustments() {
    let adjustments = 0;
    
    // Pergunta 3: Local onde vive
    const livingAnswer = quizAnswers[3];
    if (livingAnswer && livingAnswer.index === 0) {
        adjustments += appData.ageCalculation.adjustments.indoorCat; // Só dentro de casa
    } else if (livingAnswer && livingAnswer.index >= 2) {
        adjustments += appData.ageCalculation.adjustments.outdoorCat; // Acesso à rua
    }
    
    // Pergunta 7: Castração
    const castrationAnswer = quizAnswers[7];
    if (castrationAnswer && castrationAnswer.index === 0) {
        adjustments += appData.ageCalculation.adjustments.neutered; // Castrado
    }
    
    // Pergunta 8: Problemas de saúde
    const healthAnswer = quizAnswers[8];
    if (healthAnswer && healthAnswer.index >= 2) {
        adjustments += appData.ageCalculation.adjustments.healthIssues; // Tem problemas
    }
    
    // Pergunta 9: Alimentação
    const foodAnswer = quizAnswers[9];
    if (foodAnswer && foodAnswer.index === 0) {
        adjustments += appData.ageCalculation.adjustments.premiumFood; // Ração premium
    }
    
    // Pergunta 11: Veterinário
    const vetAnswer = quizAnswers[11];
    if (vetAnswer && vetAnswer.index === 0) {
        adjustments += appData.ageCalculation.adjustments.regularVet; // Check-ups regulares
    }
    
    return adjustments;
}

function determineLifeStage(humanAge, actualYears) {
    // Determinar fase baseada na idade real do gato e idade humana
    if (actualYears < 1) {
        return appData.lifeStages[0]; // Filhote
    } else if (actualYears <= 2) {
        return appData.lifeStages[1]; // Jovem Adulto
    } else if (actualYears <= 6) {
        return appData.lifeStages[2]; // Adulto
    } else if (actualYears <= 10) {
        return appData.lifeStages[3]; // Meia-idade
    } else if (actualYears <= 15) {
        return appData.lifeStages[4]; // Idoso
    } else {
        return appData.lifeStages[5]; // Muito Idoso
    }
}

function showResults() {
    if (!paymentProcessed) {
        alert('Erro: Pagamento não foi processado!');
        return;

    }
    
    showScreen('result-screen');
    
    // Atualizar conteúdo do resultado
    document.getElementById('result-title').textContent = 
        `Parabéns! Descobrimos a idade do(a) ${catName}! 🎉`;
    
    document.getElementById('result-age').textContent = 
        `${catName} tem ${calculatedAge} anos humanos!`;
    
    // Seções do resultado
    document.getElementById('life-stage-content').innerHTML = `
        <strong>${lifeStage.stage}</strong><br>
        Idade equivalente: ${lifeStage.humanAgeRange}<br>
        Faixa felina: ${lifeStage.catAgeRange}
    `;
    
    document.getElementById('characteristics-content').textContent = 
        `Nesta fase da vida, ${catName} tipicamente apresenta: ${lifeStage.characteristics}`;
    
    document.getElementById('care-content').textContent = 
        `Cuidados recomendados para ${catName}: ${lifeStage.careTips}`;
    
    // Calcular expectativa de vida
    const expectancy = calculateLifeExpectancy();
    document.getElementById('expectancy-content').innerHTML = `
        Com base no perfil do(a) ${catName}, a expectativa de vida é de aproximadamente <strong>${expectancy} anos</strong>.<br>
        <small>Esta estimativa considera o estilo de vida, cuidados e saúde atual do seu felino.</small>
    `;
    
    document.getElementById('emotional-content').innerHTML = `
        ${catName} é um ser especial que trouxe alegria e amor para sua vida! 💖<br><br>
        Cada momento com seu companheiro felino é precioso. Continue cuidando dele com todo carinho,
        pois o amor que vocês compartilham é único e verdadeiro. 
        ${catName} tem sorte de ter você! 🐾✨
    `;
}

function calculateLifeExpectancy() {
    const baseExpectancy = 15; // Anos base para gatos domésticos
    let expectancy = baseExpectancy;
    
    // Ajustar baseado nas respostas
    const livingAnswer = quizAnswers[3];
    if (livingAnswer && livingAnswer.index === 0) {
        expectancy += 2; // Só dentro de casa
    } else if (livingAnswer && livingAnswer.index >= 2) {
        expectancy -= 3; // Acesso à rua
    }
    
    const castrationAnswer = quizAnswers[7];
    if (castrationAnswer && castrationAnswer.index === 0) {
        expectancy += 2; // Castrado
    }
    
    const foodAnswer = quizAnswers[9];
    if (foodAnswer && foodAnswer.index === 0) {
        expectancy += 1; // Ração premium
    }
    
    const vetAnswer = quizAnswers[11];
    if (vetAnswer && vetAnswer.index === 0) {
        expectancy += 1; // Check-ups regulares
    }
    
    const healthAnswer = quizAnswers[8];
    if (healthAnswer && healthAnswer.index >= 2) {
        expectancy -= 2; // Problemas de saúde
    }
    
    return Math.max(12, Math.min(20, expectancy));
}

function shareResult() {
    document.getElementById('share-cat-name').textContent = catName;
    document.getElementById('share-modal').classList.remove('hidden');
}

function closeShareModal() {
    document.getElementById('share-modal').classList.add('hidden');
}

function shareOnWhatsApp() {
    const message = `🐱 Descobri que meu gatinho ${catName} tem ${calculatedAge} anos humanos! 
    
Ele(a) está na fase: ${lifeStage.stage}
    
Faça o teste do seu felino também: ${window.location.href}`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    closeShareModal();
}

function shareOnFacebook() {
    const url = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
    closeShareModal();
}

function copyResult() {
    const resultText = `🐱 ${catName} tem ${calculatedAge} anos humanos!
    
Fase da vida: ${lifeStage.stage}
Características: ${lifeStage.characteristics}
Cuidados: ${lifeStage.careTips}

Descubra a idade do seu felino em: ${window.location.href}`;

    navigator.clipboard.writeText(resultText).then(() => {
        alert('Resultado copiado para a área de transferência! 📋');
        closeShareModal();
    }).catch(() => {
        // Fallback para navegadores mais antigos
        const textArea = document.createElement('textarea');
        textArea.value = resultText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Resultado copiado para a área de transferência! 📋');
        closeShareModal();
    });
}

function startNewQuiz() {
    // Reset do estado
    currentQuestion = 1;
    quizAnswers = {};
    catName = '';
    calculatedAge = 0;
    lifeStage = null;
    paymentProcessed = false;
    
    // Voltar para tela inicial
    showScreen('welcome-screen');
}

// Event listeners para modal
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeShareModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeShareModal();
    }
});

// Adicionar efeito de ripple nos botões
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') || 
        e.target.classList.contains('option-btn') || 
        e.target.classList.contains('payment-method')) {
        
        const button = e.target;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.3);
            pointer-events: none;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.remove();
            }
        }, 600);
    }
});

// Adicionar CSS para ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Analytics simulado (opcional)
function trackEvent(eventName, data = {}) {
    console.log(`📊 Evento: ${eventName}`, data);
    // Aqui você poderia integrar com Google Analytics, etc.
}

// Rastrear eventos importantes
document.addEventListener('DOMContentLoaded', () => {
    trackEvent('app_loaded');
});

// Rastrear progresso do quiz
let lastTrackedQuestion = 0;
setInterval(() => {
    if (currentScreen === 'quiz-screen' && currentQuestion !== lastTrackedQuestion) {
        trackEvent('quiz_progress', { question: currentQuestion });
        lastTrackedQuestion = currentQuestion;
    }
}, 1000);
