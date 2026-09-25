const chatWindow = document.getElementById('chat-window');
const optionsContainer = document.getElementById('options-container');
let historyData = [];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('header-title').innerHTML = `<img src="${CONFIG.logo}" alt="Logo" onerror="this.style.display='none'"> ${CONFIG.nombreCampana}`;
    document.getElementById('header-subtitle').innerText = CONFIG.mensajeInicial;
    
    document.getElementById('btn-volver').addEventListener('click', handleBack);
    document.getElementById('btn-reiniciar').addEventListener('click', initChat);
    
    initChat();
});

function initChat() {
    chatWindow.innerHTML = '';
    historyData = [];
    renderNode('main', 'menu');
}

function scrollToBottom() {
    chatWindow.scrollTo({ top: chatWindow.scrollHeight, behavior: 'smooth' });
}

function renderMessage(data, type, sender = 'bot') {
    const row = document.createElement('div');
    row.className = `message-row ${sender}`;
    
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    
    if (sender === 'user') {
        bubble.innerText = data;
    } else {
        if (data.image) {
            bubble.innerHTML += `<img src="${data.image}" alt="Visual" onload="scrollToBottom()">`;
        }
        if (type === 'faq' && data.title) {
            bubble.innerHTML += `<h3>${data.title}</h3>`;
        }
        const text = data.message || data.content;
        if (text) {
            bubble.innerHTML += `<p style="white-space: pre-line">${text}</p>`;
        }
    }
    
    row.appendChild(bubble);
    chatWindow.appendChild(row);
    scrollToBottom();
}

function renderOptions(nodeData) {
    optionsContainer.innerHTML = '';
    let options = nodeData.options || nodeData.buttons || [];
    
    if (options.length === 0 && nodeData.next) {
        options = [{ label: "Continuar 👉", next: nodeData.next }];
    }
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-button';
        btn.innerText = opt.label;
        btn.onclick = () => handleOptionClick(opt);
        optionsContainer.appendChild(btn);
    });
}

function showTyping() {
    const row = document.createElement('div');
    row.className = 'message-row bot';
    row.id = 'typing-indicator-node';
    
    const randomText = MICROCOPY[Math.floor(Math.random() * MICROCOPY.length)];
    
    row.innerHTML = `
        <div class="message-bubble typing-indicator-container">
            <span class="typing-indicator-text">${randomText}</span>
            <div class="typing-indicator">
                <div class="dot"></div><div class="dot"></div><div class="dot"></div>
            </div>
        </div>
    `;
    chatWindow.appendChild(row);
    scrollToBottom();
}

function removeTyping() {
    const el = document.getElementById('typing-indicator-node');
    if (el) el.remove();
}

function handleOptionClick(option) {
    optionsContainer.innerHTML = '';
    renderMessage(option.label, 'text', 'user');
    historyData.push({ type: 'user', text: option.label });
    
    showTyping();
    
    setTimeout(() => {
        removeTyping();
        const nextKey = option.next;
        let nodeType = MENUS[nextKey] ? 'menu' : 'faq';
        renderNode(nextKey, nodeType);
    }, 1200);
}

function renderNode(key, type) {
    const data = type === 'menu' ? MENUS[key] : FAQ[key];
    if (!data) return;
    
    renderMessage(data, type, 'bot');
    renderOptions(data);
    historyData.push({ key, type, data, sender: 'bot' });
}

function handleBack() {
    if (historyData.length <= 1) return;
    
    historyData.pop(); 
    if (historyData[historyData.length - 1].type === 'user') {
        historyData.pop();
    }
    
    chatWindow.innerHTML = '';
    optionsContainer.innerHTML = '';
    
    const newHistory = [...historyData];
    historyData = []; 
    
    newHistory.forEach(item => {
        if (item.type === 'user') {
            renderMessage(item.text, 'text', 'user');
            historyData.push(item);
        } else {
            renderNode(item.key, item.type);
        }
    });
}