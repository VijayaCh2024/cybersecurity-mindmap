const mindMapData = {
    title: "Cybersecurity Overview",
    icon: "fa-shield-alt",
    children: [
        {
            title: "1. Information Security",
            icon: "fa-lock",
            content: "Information Security (InfoSec) is the practice of protecting information by mitigating information risks.",
            children: [
                // ... (keep the existing InfoSec content)
            ]
        },
        {
            title: "2. Cyber Security Umbrella",
            icon: "fa-umbrella",
            content: "Cyber Security is a broad field that encompasses protecting systems, networks, programs, and data from digital attacks.",
            children: [
                // ... (keep the existing Cyber Security Umbrella content)
            ]
        },
        {
            title: "3. Cyber Security Elements",
            icon: "fa-puzzle-piece",
            content: "Cyber Security Elements are the core components that make up a comprehensive cybersecurity strategy.",
            children: [
                // ... (keep the existing Cyber Security Elements content)
            ]
        },
        {
            title: "4. Key Terminologies",
            icon: "fa-book",
            content: "Understanding key terminologies is crucial for grasping the concepts of cybersecurity.",
            children: [
                // ... (keep the existing Key Terminologies content)
            ]
        }
    ]
};

let currentTopicIndex = 0;

function createNode(node) {
    const nodeElement = document.createElement('div');
    nodeElement.className = 'node';
    
    const titleElement = document.createElement('div');
    titleElement.className = 'node-title';
    
    const iconElement = document.createElement('i');
    iconElement.className = `icon fas ${node.icon}`;
    titleElement.appendChild(iconElement);
    
    const titleText = document.createElement('span');
    titleText.textContent = node.title;
    titleElement.appendChild(titleText);
    
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

function showTopic(index) {
    const mindMap = document.getElementById('mindMap');
    mindMap.innerHTML = '';
    
    if (index >= 0 && index < mindMapData.children.length) {
        const topicNode = createNode(mindMapData.children[index]);
        mindMap.appendChild(topicNode);
        currentTopicIndex = index;
    }
    
    updateNavButtons();
}

function updateNavButtons() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    
    prevButton.disabled = currentTopicIndex === 0;
    nextButton.disabled = currentTopicIndex === mindMapData.children.length - 1;
}

function showNextTopic() {
    if (currentTopicIndex < mindMapData.children.length - 1) {
        showTopic(currentTopicIndex + 1);
    }
}

function showPreviousTopic() {
    if (currentTopicIndex > 0) {
        showTopic(currentTopicIndex - 1);
    }
}

// Initialize the mind map
document.addEventListener('DOMContentLoaded', () => {
    showTopic(0);
    
    document.getElementById('prevButton').addEventListener('click', showPreviousTopic);
    document.getElementById('nextButton').addEventListener('click', showNextTopic);
});

// Existing zoom functionality
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

// Existing search functionality
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
