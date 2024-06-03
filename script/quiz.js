const questoes = [
    {
        question: "Qual é o valor hexadecimal de 20?",
        options: ["1A", "1B", "1C", "1D", "14"],
        answer: "14"
    },
    {
        question: "Qual é o valor decimal de 0x14?",
        options: ["19", "20", "21", "22", "23"],
        answer: "20"
    },
    {
        question: "Qual é o valor hexadecimal de 50?",
        options: ["31", "32", "32", "33", "34"],
        answer: "32"
    },
    {
        question: "Qual é o valor decimal de 0x2A?",
        options: ["41", "42", "42", "43", "44"],
        answer: "42"
    },
    {
        question: "Qual é o valor hexadecimal de 100?",
        options: ["62", "63", "64", "64", "65"],
        answer: "64"
    },
    {
        question: "Qual é o valor decimal de 0x1F?",
        options: ["30", "31", "32", "33", "34"],
        answer: "31"
    },
    {
        question: "Qual é o valor hexadecimal de 25?",
        options: ["19", "1A", "1B", "1C", "1D"],
        answer: "19"
    },
    {
        question: "Qual é o valor decimal de 0x3B?",
        options: ["55", "56", "57", "58", "59"],
        answer: "59"
    },
    {
        question: "Qual é o valor hexadecimal de 40?",
        options: ["28", "29", "2A", "2B", "2C"],
        answer: "29"
    },
    {
        question: "Qual é o valor decimal de 0x4D?",
        options: ["75", "76", "77", "77", "78"],
        answer: "77"
    }
];

function Iniciar_Quiz() {
    const quizForm = document.getElementById('form-quiz');
    let rowDiv;
    
    questoes.forEach((q, index) => {
        if (index % 2 === 0) {
            rowDiv = document.createElement('div');
            rowDiv.className = 'row';
            quizForm.appendChild(rowDiv);
        }

        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        q.options.forEach((option, i) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `
                <input type="radio" name="q${index}" id="q${index}o${i}" value="${option}">
                <label for="q${index}o${i}">${option}</label>
            `;
            optionsDiv.appendChild(optionDiv);
        });

        questionDiv.appendChild(optionsDiv);
        rowDiv.appendChild(questionDiv);
    });
}

function Enviar_Quiz() {
    let pontos = 0;
    questoes.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            pontos++;
        }
    });

    if (pontos <= 5) {
        feedback_div.innerHTML = `<p>Você acertou ${pontos} de ${questoes.length} questões. Deve estudar mais!</p>`;
    } else if (pontos > 5 && pontos <= 8) {
        feedback_div.innerHTML = `<p>Você acertou ${pontos} de ${questoes.length} questões. Foi muito bem!</p>`;
    } else if (pontos > 8) {
        feedback_div.innerHTML = `<p>Parabéns! Você acertou ${pontos} de ${questoes.length} questões. Excelente resultado!!</p>`;
    }
}
window.onload = Iniciar_Quiz;