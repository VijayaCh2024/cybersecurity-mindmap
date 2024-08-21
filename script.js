const mindMapData = {
    title: "Cybersecurity Overview",
    icon: "🔒",
    children: [
        {
            title: "1. Information Security",
            icon: "🛡️",
            content: "Protection of information and information systems from unauthorized access, disclosure, modification, destruction, or disruption.",
            children: [
                {
                    title: "Goals",
                    icon: "🎯",
                    children: [
                        { title: "Confidentiality", icon: "🔐" },
                        { title: "Integrity", icon: "✅" },
                        { title: "Availability", icon: "🔛" }
                    ]
                },
                {
                    title: "Principles",
                    icon: "📜",
                    children: [
                        { title: "Least Privilege", icon: "🔑" },
                        { title: "Defense in Depth", icon: "🏰" },
                        { title: "Fail-Safe Defaults", icon: "🔒" }
                    ]
                },
                {
                    title: "Management",
                    icon: "📊",
                    children: [
                        { title: "Risk Management", icon: "⚖️" },
                        { title: "Compliance and Legal Requirements", icon: "📋" },
                        { title: "Security Policies and Procedures", icon: "📘" }
                    ]
                }
            ]
        },
        {
            title: "2. Cyber Security Umbrella",
            icon: "☂️",
            content: "Protecting systems, networks, and data from cyber threats.",
            children: [
                {
                    title: "Categories",
                    icon: "🗂️",
                    children: [
                        { title: "Network Security", icon: "🌐" },
                        { title: "Application Security", icon: "💻" },
                        { title: "Endpoint Security", icon: "📱" },
                        { title: "Data Security", icon: "💾" }
                    ]
                },
                {
                    title: "Frameworks",
                    icon: "🏗️",
                    children: [
                        { title: "NIST Cybersecurity Framework", icon: "🇺🇸" },
                        { title: "ISO/IEC 27001", icon: "🌍" },
                        { title: "CIS Controls", icon: "🎛️" }
                    ]
                },
                {
                    title: "Threat Landscape",
                    icon: "🦠",
                    children: [
                        { title: "Malware", icon: "🐛" },
                        { title: "Phishing attacks", icon: "🎣" },
                        { title: "Denial-of-service (DoS) attacks", icon: "🚫" },
                        { title: "Insider threats", icon: "🕵️" }
                    ]
                }
            ]
        },
        {
            title: "3. Cyber Security Elements",
            icon: "🧩",
            children: [
                {
                    title: "Access Control",
                    icon: "🚪",
                    children: [
                        { title: "Authentication", icon: "🔐" },
                        { title: "Authorization", icon: "✅" },
                        { title: "Accounting (AAA)", icon: "📊" }
                    ]
                },
                {
                    title: "Encryption",
                    icon: "🔒",
                    children: [
                        { title: "Symmetric Encryption", icon: "🔑" },
                        { title: "Asymmetric Encryption", icon: "🔐" },
                        { title: "Key Management", icon: "🗝️" }
                    ]
                },
                {
                    title: "Network Security",
                    icon: "🌐",
                    children: [
                        { title: "Firewalls", icon: "🧱" },
                        { title: "Intrusion Detection Systems (IDS)", icon: "🕵️" },
                        { title: "Virtual Private Networks (VPNs)", icon: "🔒" }
                    ]
                },
                {
                    title: "Incident Response",
                    icon: "🚨",
                    children: [
                        { title: "Incident Handling Procedures", icon: "📋" },
                        { title: "Forensics", icon: "🔍" }
                    ]
                },
                {
                    title: "Security Audits and Monitoring",
                    icon: "📊",
                    children: [
                        { title: "Log Management", icon: "📝" },
                        { title: "Security Information and Event Management (SIEM)", icon: "📡" }
                    ]
                }
            ]
        },
        {
            title: "4. Key Terminologies",
            icon: "📚",
            children: [
                {
                    title: "Malware",
                    icon: "🦠",
                    children: [
                        { title: "Viruses", icon: "🦠" },
                        { title: "Worms", icon: "🐛" },
                        { title: "Trojans", icon: "🐴" },
                        { title: "Ransomware", icon: "💰" }
                    ]
                },
                {
                    title: "Phishing",
                    icon: "🎣",
                    children: [
                        { title: "Spear Phishing", icon: "🎯" },
                        { title: "Whaling", icon: "🐳" }
                    ]
                },
                {
                    title: "Firewall",
                    icon: "🧱",
                    children: [
                        { title: "Network Firewalls", icon: "🌐" },
                        { title: "Host-based Firewalls", icon: "💻" }
                    ]
                },
                {
                    title: "Intrusion Detection System (IDS)",
                    icon: "🕵️",
                    children: [
                        { title: "Network IDS", icon: "🌐" },
                        { title: "Host IDS", icon: "💻" }
                    ]
                },
                {
                    title: "Vulnerability",
                    icon: "🎯",
                    children: [
                        { title: "Vulnerability Assessment", icon: "🔍" },
                        { title: "Patch Management", icon: "🩹" }
                    ]
                },
                {
                    title: "Penetration Testing",
                    icon: "🧪",
                    children: [
                        { title: "Black Box", icon: "⚫" },
                        { title: "White Box", icon: "⚪" }
                    ]
                },
                {
                    title: "Social Engineering",
                    icon: "🎭",
                    children: [
                        { title: "Techniques: Pretexting, Baiting, Tailgating", icon: "🎣" },
                        { title: "Prevention: Training and Policies", icon: "🛡️" }
                    ]
                }
            ]
        }
    ]
};

function createNode(node) {
    const nodeElement = document.createElement('div');
    nodeElement.className = 'node';
    
    const titleElement = document.createElement('div');
    titleElement.className = 'node-title';
    titleElement.innerHTML = `${node.icon} ${node.title}`;
    titleElement.onclick = () => {
        nodeElement.classList.toggle('expanded');
    };
    
    nodeElement.appendChild(titleElement);
    
    if (node.content || node.children) {
        const contentElement = document.createElement('div');
        contentElement.className = 'node-content';
        
        if (node.content) {
            const contentText = document.createElement('p');
            contentText.textContent = node.content;
            contentElement.appendChild(contentText);
        }
        
        if (node.children) {
            node.children.forEach(child => {
                contentElement.appendChild(createNode(child));
            });
        }
        
        nodeElement.appendChild(contentElement);
    }
    
    return nodeElement;
}

const mindMap = document.getElementById('mindMap');
mindMap.appendChild(createNode(mindMapData));

// Zoom functionality
let currentZoom = 1;
const mindMapElement = document.getElementById('mindMap');

document.getElementById('zoomIn').addEventListener('click', () => {
    currentZoom = Math.min(currentZoom + 0.1, 2);
    mindMapElement.style.transform = `scale(${currentZoom})`;
});

document.getElementById('zoomOut').addEventListener('click', () => {
    currentZoom = Math.max(currentZoom - 0.1, 0.5);
    mindMapElement.style.transform = `scale(${currentZoom})`;
});

document.getElementById('resetView').addEventListener('click', () => {
    currentZoom = 1;
    mindMapElement.style.transform = `scale(${currentZoom})`;
    document.querySelectorAll('.node').forEach(node => node.classList.remove('expanded'));
});

// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const nodes = document.querySelectorAll('.node-title');
    
    nodes.forEach(node => {
        const text = node.textContent.toLowerCase();
        const parent = node.closest('.node');
        
        if (text.includes(searchTerm)) {
            parent.style.display = 'block';
            parent.classList.add('expanded');
            node.innerHTML = node.innerHTML.replace(new RegExp(searchTerm, 'gi'), match => `<span class="highlight">${match}</span>`);
        } else {
            parent.style.display = 'none';
            parent.classList.remove('expanded');
            node.innerHTML = node.innerHTML.replace(/<span class="highlight">|<\/span>/gi, '');
        }
    });
});

// Popup functionality
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popupContent');
const popupClose = document.querySelector('.popup-close');

document.querySelectorAll('.node-title').forEach(node => {
    node.addEventListener('dblclick', () => {
        const title = node.textContent.trim();
        const content = getNodeContent(title);
        popupContent.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
        popup.style.display = 'block';
    });
});

popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
});

function getNodeContent(title) {
    // This function would ideally fetch detailed content from a database or API
    // For this example, we'll return some placeholder text
    return `Detailed information about ${title} would go here. This could include definitions, examples, best practices, and more.`;
}
