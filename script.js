document.getElementById('sim').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    if (nome) {
        document.getElementById('resposta').innerText = `Você disse SIM, ${nome}! ❤️`;
        createHearts();
    } else {
        document.getElementById('resposta').innerText = 'Por favor, digite seu nome.';
    }
});

function moveButtonNo() {
    const button = document.getElementById('nao');
    const container = document.querySelector('.container');
    const maxX = container.clientWidth - button.clientWidth;
    const maxY = container.clientHeight - button.clientHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

document.getElementById('nao').addEventListener('mouseover', moveButtonNo);

// Move button "Não" every 2 seconds
setInterval(moveButtonNo, 2000);

function createHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        const randomLeft = Math.random() * 100;
        const randomDelay = Math.random() * 2;
        const randomSize = Math.random() * 20 + 10;
        
        heart.style.left = `${randomLeft}%`;
        heart.style.animationDelay = `${randomDelay}s`;
        heart.style.width = `${randomSize}px`;
        heart.style.height = `${randomSize}px`;

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}
