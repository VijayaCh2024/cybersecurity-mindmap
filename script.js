const topics = [
    {
        title: "1. What is Information Security?",
        content: `
            <h3>Definition and Importance</h3>
            <p>Information Security refers to the protection of information and information systems from unauthorized access, disclosure, modification, destruction, or disruption. It encompasses measures and controls designed to protect the confidentiality, integrity, and availability of data.</p>
            <p><strong>Importance:</strong> Ensuring information security is crucial to safeguard sensitive data, maintain trust with stakeholders, comply with legal and regulatory requirements, and protect against financial losses and reputational damage.</p>
            
            <h3>Goals of Information Security</h3>
            <ul>
                <li><strong>Confidentiality:</strong> Ensuring that information is accessible only to those authorized to have access. Techniques include encryption and access control.</li>
                <li><strong>Integrity:</strong> Ensuring that information is accurate and complete, and protected from unauthorized modification. Techniques include hashing and data validation.</li>
                <li><strong>Availability:</strong> Ensuring that information and resources are available to authorized users when needed. Techniques include redundancy and failover systems.</li>
            </ul>
            
            <h3>Information Security Principles</h3>
            <ul>
                <li><strong>Least Privilege:</strong> Users should have only the minimum level of access necessary to perform their job functions.</li>
                <li><strong>Defense in Depth:</strong> Implementing multiple layers of security controls to protect information, so if one layer is breached, others are still effective.</li>
                <li><strong>Fail-Safe Defaults:</strong> Systems should be configured to deny access by default, only allowing access if specifically permitted.</li>
            </ul>
            
            <h3>Information Security Management</h3>
            <ul>
                <li><strong>Risk Management:</strong> Identifying, assessing, and mitigating risks to information assets.</li>
                <li><strong>Compliance and Legal Requirements:</strong> Adhering to laws and regulations such as GDPR, HIPAA, and others that mandate data protection measures.</li>
                <li><strong>Security Policies and Procedures:</strong> Establishing and enforcing policies and procedures to manage and protect information security effectively.</li>
            </ul>
        `
    },
    {
        title: "2. Cyber Security Umbrella",
        content: `
            <h3>Overview of Cyber Security</h3>
            <p><strong>Definition and Scope:</strong> Cyber Security involves protecting systems, networks, and data from cyber threats such as attacks, unauthorized access, and damage. It covers a broad range of technologies, processes, and practices.</p>
            <p><strong>Importance:</strong> Cyber Security is essential for protecting digital assets, ensuring privacy, and maintaining the operational integrity of systems and networks.</p>
            
            <h3>Categories of Cyber Security</h3>
            <ul>
                <li><strong>Network Security:</strong> Protecting network infrastructure from unauthorized access, misuse, or theft. Techniques include firewalls, intrusion detection systems (IDS), and network segmentation.</li>
                <li><strong>Application Security:</strong> Ensuring that software applications are secure from threats and vulnerabilities. Techniques include secure coding practices, application firewalls, and regular security assessments.</li>
                <li><strong>Endpoint Security:</strong> Protecting individual devices such as computers, smartphones, and tablets from cyber threats. Techniques include antivirus software, device encryption, and access controls.</li>
                <li><strong>Data Security:</strong> Protecting data from unauthorized access and breaches. Techniques include encryption, data masking, and access controls.</li>
            </ul>
            
            <h3>Cyber Security Frameworks</h3>
            <ul>
                <li><strong>NIST Cybersecurity Framework:</strong> A set of guidelines and best practices for managing and improving cyber security risk. It includes identifying, protecting, detecting, responding, and recovering from cyber threats.</li>
                <li><strong>ISO/IEC 27001:</strong> An international standard for information security management systems (ISMS), providing a systematic approach to managing sensitive information.</li>
                <li><strong>CIS Controls:</strong> A set of best practices and guidelines for improving cyber security posture, focusing on key actions to protect against the most common and impactful cyber threats.</li>
            </ul>
            
            <h3>Threat Landscape</h3>
            <ul>
                <li><strong>Types of Threats:</strong> Includes malware (viruses, worms, ransomware), phishing attacks, denial-of-service (DoS) attacks, and insider threats.</li>
                <li><strong>Current Trends and Emerging Threats:</strong> Trends such as advanced persistent threats (APTs), increased ransomware attacks, and the growing use of artificial intelligence by attackers.</li>
            </ul>
        `
    },
    {
        title: "3. Cyber Security Elements",
        content: `
            <h3>Access Control</h3>
            <ul>
                <li><strong>Authentication:</strong> Verifying the identity of users through methods like passwords, biometrics, and multi-factor authentication (MFA).</li>
                <li><strong>Authorization:</strong> Determining what resources and operations users are allowed to access or perform based on their identity.</li>
                <li><strong>Accounting (AAA):</strong> Tracking and logging user activities to ensure compliance and detect any unauthorized actions.</li>
            </ul>
            
            <h3>Encryption</h3>
            <p><strong>Types of Encryption:</strong></p>
            <ul>
                <li><strong>Symmetric Encryption:</strong> Uses the same key for both encryption and decryption (e.g., AES).</li>
                <li><strong>Asymmetric Encryption:</strong> Uses a pair of keys (public and private) for encryption and decryption (e.g., RSA).</li>
            </ul>
            <p><strong>Key Management:</strong> The process of generating, distributing, and managing encryption keys securely.</p>
            
            <h3>Network Security</h3>
            <ul>
                <li><strong>Firewalls:</strong> Devices or software that filter and monitor incoming and outgoing network traffic based on security rules.</li>
                <li><strong>Intrusion Detection Systems (IDS):</strong> Monitors network traffic for suspicious activities and potential threats.</li>
                <li><strong>Virtual Private Networks (VPNs):</strong> Creates a secure, encrypted connection over a less secure network, such as the internet.</li>
            </ul>
            
            <h3>Incident Response</h3>
            <ul>
                <li><strong>Incident Handling Procedures:</strong> Steps for identifying, responding to, and recovering from security incidents.</li>
                <li><strong>Forensics:</strong> The process of collecting, preserving, and analyzing evidence from security incidents to understand what happened and how to prevent future occurrences.</li>
            </ul>
            
            <h3>Security Audits and Monitoring</h3>
            <ul>
                <li><strong>Log Management:</strong> Collecting and analyzing logs from various systems to monitor and detect potential security issues.</li>
                <li><strong>Security Information and Event Management (SIEM):</strong> A solution that provides real-time analysis and correlation of security events from across an organization's IT infrastructure.</li>
            </ul>
        `
    },
    {
        title: "4. Key Terminologies",
        content: `
            <h3>Malware</h3>
            <ul>
                <li><strong>Viruses:</strong> Malicious software that attaches to legitimate files and spreads through them.</li>
                <li><strong>Worms:</strong> Self-replicating malware that spreads across networks without user intervention.</li>
                <li><strong>Trojans:</strong> Malware disguised as legitimate software that performs malicious actions once executed.</li>
                <li><strong>Ransomware:</strong> Malware that encrypts files and demands a ransom for their release.</li>
            </ul>
            
            <h3>Phishing</h3>
            <ul>
                <li><strong>Spear Phishing:</strong> Targeted phishing attacks aimed at specific individuals or organizations, often using personalized information.</li>
                <li><strong>Whaling:</strong> A type of phishing attack targeting high-profile individuals such as executives or high-level managers.</li>
            </ul>
            
            <h3>Firewall</h3>
            <p><strong>Types of Firewalls:</strong></p>
            <ul>
                <li><strong>Network Firewalls:</strong> Protect entire networks by filtering traffic based on rules.</li>
                <li><strong>Host-based Firewalls:</strong> Installed on individual devices to control traffic to and from that device.</li>
            </ul>
            
            <h3>Encryption</h3>
            <ul>
                <li><strong>Symmetric Encryption:</strong> Uses a single key for both encryption and decryption (e.g., AES).</li>
                <li><strong>Asymmetric Encryption:</strong> Uses a pair of keys for encryption (public key) and decryption (private key) (e.g., RSA).</li>
            </ul>
            
            <h3>Intrusion Detection System (IDS)</h3>
            <ul>
                <li><strong>Network IDS:</strong> Monitors network traffic for suspicious activities.</li>
                <li><strong>Host IDS:</strong> Monitors activities on individual devices for potential security breaches.</li>
            </ul>
            
            <h3>Vulnerability</h3>
            <ul>
                <li><strong>Vulnerability Assessment:</strong> The process of identifying and evaluating vulnerabilities in systems and applications.</li>
                <li><strong>Patch Management:</strong> The practice of applying updates and patches to software to fix vulnerabilities and improve security.</li>
            </ul>
            
            <h3>Penetration Testing</h3>
            <p><strong>Types of Penetration Testing:</strong></p>
            <ul>
                <li><strong>Black Box:</strong> The tester has no prior knowledge of the system.</li>
                <li><strong>White Box:</strong> The tester has full knowledge of the system, including source code and architecture.</li>
            </ul>
            
            <h3>Social Engineering</h3>
            <ul>
                <li><strong>Techniques:</strong> Manipulating individuals into divulging confidential information or performing certain actions. Common techniques include pretexting, baiting, and tailgating.</li>
                <li><strong>Prevention:</strong> Training employees to recognize and avoid social engineering tactics and implementing strong security policies.</li>
            </ul>
        `
    }
];

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
