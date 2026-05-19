// darkMode.js
document.addEventListener('DOMContentLoaded', function() {
    // 1. Счётчик просмотров
    const viewCount = localStorage.getItem('pageViews') || 0;
    localStorage.setItem('pageViews', parseInt(viewCount) + 1);

    const viewsElement = document.createElement('div');
    viewsElement.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        background: #db34db;
        color: white;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.9em;
        z-index: 1000;
    `;
    viewsElement.textContent = `Просмотров: ${parseInt(viewCount) + 1}`;
    document.body.appendChild(viewsElement);

    // 2. Переключение тёмной темы
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Тёмная тема';
    toggleButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        padding: 10px 20px;
        background: #2c3e50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        z-index: 1000;
    `;
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        toggleButton.textContent = document.body.classList.contains('dark-theme')
            ? 'Светлая тема'
            : 'Тёмная тема';
    });

    // 3. Анимация появления элементов
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('h1, h2, p, ul, ol, img');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Первый вызов для начальных элементов

    // В вашем darkMode.js добавьте перед закрывающей }
fetch('save_visit.php')
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error('Ошибка:', error));

});