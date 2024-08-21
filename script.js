const mindMapData = {
    title: "Cybersecurity Overview",
    icon: "🔒",
    children: [
        {
            title: "1. Information Security",
            icon: "🛡️",
            content: "Information Security (InfoSec) is the practice of protecting information by mitigating information risks. It encompasses the protection of information and information systems from unauthorized access, use, disclosure, disruption, modification, or destruction.",
            children: [
                // ... (keep the existing InfoSec content)
            ]
        },
        {
            title: "2. Cyber Security Umbrella",
            icon: "☂️",
            content: "Cyber Security is a broad field that encompasses protecting systems, networks, programs, and data from digital attacks. It involves a range of technologies, processes, and practices designed to defend against, detect, and respond to cyber threats.",
            children: [
                {
                    title: "Categories",
                    icon: "🗂️",
                    content: "Cyber security can be divided into several key categories:",
                    children: [
                        { 
                            title: "Network Security", 
                            icon: "🌐",
                            content: "Focuses on protecting the communication channels used by computer systems. This includes firewalls, intrusion detection systems (IDS), and virtual private networks (VPNs). Example: Implementing a next-generation firewall to monitor and control incoming and outgoing network traffic based on predetermined security rules.",
                            resources: "https://www.cisco.com/c/en/us/products/security/what-is-network-security.html"
                        },
                        { 
                            title: "Application Security", 
                            icon: "💻",
                            content: "Involves measures taken to improve the security of an application by finding, fixing, and preventing security vulnerabilities. This includes practices like secure coding, regular security testing, and implementing security features such as authentication and encryption. Example: Using input validation to prevent SQL injection attacks in a web application.",
                            resources: "https://owasp.org/www-project-top-ten/"
                        },
                        { 
                            title: "Information Security", 
                            icon: "🔐",
                            content: "Protects the confidentiality, integrity, and availability of data in storage and in transit. This overlaps with data security but also includes physical security measures. Example: Implementing data classification policies to ensure sensitive information is properly handled and protected.",
                            resources: "https://www.nist.gov/cyberframework"
                        },
                        { 
                            title: "Operational Security", 
                            icon: "🔧",
                            content: "Focuses on the processes and decisions for handling and protecting data assets. This includes the permissions users have when accessing a network and the procedures that determine how and where data may be stored or shared. Example: Implementing a clean desk policy to ensure sensitive documents are not left in view when employees are away from their desks.",
                            resources: "https://www.sans.org/white-papers/36412/"
                        },
                        { 
                            title: "Disaster Recovery & Business Continuity", 
                            icon: "🚑",
                            content: "Defines how an organization responds to a cyber-security incident or any other event that causes the loss of operations or data. This includes business continuity planning and establishing redundancies. Example: Creating and regularly testing a disaster recovery plan that includes off-site data backups and alternate processing facilities.",
                            resources: "https://www.ready.gov/business-continuity-plan"
                        }
                    ]
                },
                {
                    title: "Frameworks",
                    icon: "🏗️",
                    content: "Cybersecurity frameworks provide a structured approach to implementing and managing cybersecurity measures:",
                    children: [
                        { 
                            title: "NIST Cybersecurity Framework", 
                            icon: "🇺🇸",
                            content: "Developed by the U.S. National Institute of Standards and Technology, this framework provides a set of guidelines for mitigating organizational cybersecurity risks. It's based on existing standards, guidelines, and practices, and consists of five core functions: Identify, Protect, Detect, Respond, and Recover.",
                            resources: "https://www.nist.gov/cyberframework"
                        },
                        { 
                            title: "ISO/IEC 27001", 
                            icon: "🌍",
                            content: "An international standard that provides requirements for an information security management system (ISMS). It helps organizations manage the security of assets such as financial information, intellectual property, and employee details. Example: A company getting ISO 27001 certified to demonstrate to clients that they take information security seriously.",
                            resources: "https://www.iso.org/isoiec-27001-information-security.html"
                        },
                        { 
                            title: "CIS Controls", 
                            icon: "🎛️",
                            content: "A set of 18 prioritized actions to protect organizations and data from known cyber attack vectors. Developed by the Center for Internet Security, these controls are divided into basic, foundational, and organizational categories. Example: Implementing the first CIS control by maintaining an inventory of authorized and unauthorized devices on the network.",
                            resources: "https://www.cisecurity.org/controls/"
                        }
                    ]
                },
                {
                    title: "Threat Landscape",
                    icon: "🦠",
                    content: "The cybersecurity threat landscape is constantly evolving. Here are some common types of threats:",
                    children: [
                        { 
                            title: "Malware", 
                            icon: "🐛",
                            content: "Malicious software designed to disrupt, damage, or gain unauthorized access to a computer system. This includes viruses, worms, trojans, and ransomware. Example: The WannaCry ransomware attack in 2017 that affected over 200,000 computers across 150 countries.",
                            resources: "https://www.malwarebytes.com/malware"
                        },
                        { 
                            title: "Phishing attacks", 
                            icon: "🎣",
                            content: "Attempts to obtain sensitive information such as usernames, passwords, and credit card details by disguising as a trustworthy entity in an electronic communication. Example: An email claiming to be from a bank asking users to verify their account details by clicking on a link.",
                            resources: "https://www.phishing.org/what-is-phishing"
                        },
                        { 
                            title: "Denial-of-service (DoS) attacks", 
                            icon: "🚫",
                            content: "An attack meant to shut down a machine or network, making it inaccessible to its intended users. This is typically accomplished by flooding the target with traffic or sending it information that triggers a crash. Example: The Mirai botnet DDoS attack in 2016 that took down major websites including Twitter, Netflix, and CNN.",
                            resources: "https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/"
                        },
                        { 
                            title: "Insider threats", 
                            icon: "🕵️",
                            content: "A malicious threat to an organization that comes from people within the organization, such as employees, former employees, contractors or business associates. Example: An employee exfiltrating sensitive company data before leaving for a competitor.",
                            resources: "https://www.cisa.gov/insider-threat-mitigation"
                        }
                    ]
                },
                // ... (add more sections as needed)
            ]
        },
        // ... (keep other main sections like "3. Cyber Security Elements" and "4. Key Terminologies")
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
    
    if (node.content || node.children || node.resources) {
        const contentElement = document.createElement('div');
        contentElement.className = 'node-content';
        
        if (node.content) {
            const contentText = document.createElement('p');
            contentText.textContent = node.content;
            contentElement.appendChild(contentText);
        }
        
        if (node.resources) {
            const resourceLink = document.createElement('a');
            resourceLink.href = node.resources;
            resourceLink.textContent = "Learn more";
            resourceLink.target = "_blank";
            contentElement.appendChild(resourceLink);
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
    // This would ideally be a large object or fetched from an API
    const detailedContent = {
        "Network Security": "Network Security involves the policies and practices adopted to prevent and monitor unauthorized access, misuse, modification, or denial of a computer network and network-accessible resources. It involves the authorization of access to data in a network, which is controlled by the network administrator. Key components include firewalls, intrusion detection systems (IDS), virtual private networks (VPNs), and network segmentation. For example, a properly configured firewall can prevent unauthorized external access to a company's internal network, while VPNs allow secure remote access for authorized users.",
        "Application Security": "Application Security encompasses measures taken throughout the application's lifecycle to prevent exceptions in the security policy of an application or the underlying system through flaws in the application design, development, deployment, upgrade, or maintenance. This includes practices such as secure coding, code reviews, penetration testing, and the use of Web Application Firewalls (WAF). A real-world example is the use of input validation and parameterized queries to prevent SQL injection attacks in web applications.",
        // Add more detailed content for each node
    };
    
    return detailedContent[title] || `Detailed information about ${title} would go here. This could include definitions, examples, best practices, and more.`;
}
