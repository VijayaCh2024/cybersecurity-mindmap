const quizzes = [
    {
        question: "What are the three main goals of Information Security?",
        options: [
            "Confidentiality, Integrity, Availability",
            "Protection, Detection, Response",
            "Prevention, Mitigation, Recovery",
            "Authentication, Authorization, Accounting"
        ],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT a category of Cyber Security?",
        options: [
            "Network Security",
            "Application Security",
            "Physical Security",
            "Data Security"
        ],
        correctAnswer: 2
    },
    {
        question: "What does the principle of 'Least Privilege' mean?",
        options: [
            "Only the most important users should have access to the system",
            "Users should have the minimum level of access necessary for their job",
            "All users should have equal access to all resources",
            "Administrators should have full access to all systems"
        ],
        correctAnswer: 1
    },
    {
        question: "Which of the following is an example of a social engineering attack?",
        options: [
            "Distributed Denial of Service (DDoS)",
            "SQL Injection",
            "Phishing",
            "Buffer Overflow"
        ],
        correctAnswer: 2
    }
];

let currentTopicIndex = 0;
let topicRead = false;

const contentElement = document.getElementById('content');
const quizElement = document.getElementById('quiz');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressElement = document.getElementById('progress');
const topicOverviewElement = document.getElementById('topicOverview');

function showTopicOverview() {
    topicOverviewElement.textContent = `This course covers ${topics.length} main topics in Cybersecurity Essentials.`;
}

function showTopic(index) {
    contentElement.classList.remove('fade-in');
    quizElement.innerHTML = ''; // Clear any existing quiz
    topicRead = false;
    
    setTimeout(() => {
        const topic = topics[index];
        let html = `<h2>${topic.title}</h2>`;
        
        // Split content into sections
        const sections = topic.content.split('<h3>');
        sections.forEach((section, i) => {
            if (i === 0) return; // Skip the first empty section
            const [header, ...content] = section.split('</h3>');
            html += `
                <div class="section">
                    <div class="section-header" onclick="toggleSection(${i})">${header}</div>
                    <div class="section-content" id="section-${i}">${content.join('</h3>')}</div>
                </div>
            `;
        });
        
        contentElement.innerHTML = html;
        contentElement.classList.add('fade-in');
        updateNavButtons();
        
        // Add an event listener to mark the topic as read when scrolled to bottom
        contentElement.addEventListener('scroll', checkTopicRead);
    }, 300);
}

function toggleSection(sectionIndex) {
    const section = document.getElementById(`section-${sectionIndex}`);
    section.classList.toggle('active');
}

function updateNavButtons() {
    prevBtn.disabled = currentTopicIndex === 0;
    nextBtn.disabled = currentTopicIndex === topics.length - 1;
    updateProgress();
}

function updateProgress() {
    progressElement.innerHTML = '';
    topics.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `progress-dot ${index === currentTopicIndex ? 'active' : ''}`;
        progressElement.appendChild(dot);
    });
}

function checkTopicRead() {
    const element = contentElement;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        topicRead = true;
        showQuiz(currentTopicIndex);
        element.removeEventListener('scroll', checkTopicRead);
    }
}

function showQuiz(index) {
    const quiz = quizzes[index];
    quizElement.innerHTML = `
        <h3>Quick Quiz</h3>
        <div class="quiz-question">
            <p>${quiz.question}</p>
            <ul class="quiz-options">
                ${quiz.options.map((option, i) => `
                    <li class="quiz-option" onclick="selectOption(${i})">${option}</li>
                `).join('')}
            </ul>
        </div>
        <button onclick="checkAnswer()">Submit Answer</button>
    `;
}

function selectOption(optionIndex) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((option, i) => {
        option.classList.toggle('selected', i === optionIndex);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('.quiz-option.selected');
    if (!selectedOption) {
        alert('Please select an answer before submitting.');
        return;
    }
    
    const selectedIndex = Array.from(selectedOption.parentNode.children).indexOf(selectedOption);
    const quiz = quizzes[currentTopicIndex];
    
    if (selectedIndex === quiz.correctAnswer) {
        alert('Correct! Well done!');
    } else {
        alert(`Incorrect. The correct answer is: ${quiz.options[quiz.correctAnswer]}`);
    }
}

prevBtn.addEventListener('click', () => {
    if (currentTopicIndex > 0) {
        currentTopicIndex--;
        showTopic(currentTopicIndex);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentTopicIndex < topics.length - 1) {
        currentTopicIndex++;
        showTopic(currentTopicIndex);
    }
});

// Initial load
showTopicOverview();
showTopic(currentTopicIndex);
