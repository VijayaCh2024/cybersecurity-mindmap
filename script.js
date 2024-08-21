const topics = [
    {
        title: "Introduction to Cybersecurity",
        content: `
            <p>Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.</p>
            <p>Key aspects of cybersecurity include:</p>
            <ul>
                <li>Information Security</li>
                <li>Network Security</li>
                <li>Application Security</li>
                <li>Operational Security</li>
            </ul>
        `
    },
    {
        title: "Common Cyber Threats",
        content: `
            <p>Understanding common cyber threats is crucial for effective cybersecurity. Some of the most prevalent threats include:</p>
            <ul>
                <li>Malware: Software designed to disrupt, damage, or gain unauthorized access to a computer system.</li>
                <li>Phishing: Fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity.</li>
                <li>Denial of Service (DoS): Attacks designed to shut down a machine or network, making it inaccessible to its intended users.</li>
                <li>Man-in-the-Middle (MitM): Attacks where the attacker secretly relays and possibly alters the communications between two parties.</li>
            </ul>
        `
    },
    {
        title: "Cybersecurity Best Practices",
        content: `
            <p>Implementing cybersecurity best practices can significantly reduce the risk of cyber attacks. Some key practices include:</p>
            <ul>
                <li>Using strong, unique passwords for all accounts</li>
                <li>Keeping software and systems up to date</li>
                <li>Using anti-virus software and firewalls</li>
                <li>Implementing multi-factor authentication</li>
                <li>Regularly backing up data</li>
                <li>Educating employees about cybersecurity risks and best practices</li>
            </ul>
        `
    }
];

let currentTopicIndex = 0;

const contentElement = document.getElementById('content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showTopic(index) {
    contentElement.classList.remove('fade-in');
    setTimeout(() => {
        contentElement.innerHTML = `
            <h2>${topics[index].title}</h2>
            ${topics[index].content}
        `;
        contentElement.classList.add('fade-in');
        updateNavButtons();
    }, 300);
}

function updateNavButtons() {
    prevBtn.disabled = currentTopicIndex === 0;
    nextBtn.disabled = currentTopicIndex === topics.length - 1;
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
showTopic(currentTopicIndex);
