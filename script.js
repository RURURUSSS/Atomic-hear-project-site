// ==========================================
// 1. НАСТРОЙКА КНОПКИ СМЕНЫ ТЕМЫ И СБОЯ
// ==========================================
const themeToggleBtn = document.getElementById('themeToggle');
const heroTitle = document.querySelector('.hero h1');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('accident');
    
    if (document.body.classList.contains('accident')) {
        themeToggleBtn.textContent = 'Восстановить систему';
        heroTitle.textContent = '⚠️ ВНИМАНИЕ: СБОЙ СИСТЕМЫ ⚠️';
    } else {
        themeToggleBtn.textContent = 'Сбой системы';
        heroTitle.textContent = 'Добро пожаловать на Предприятие 3826';
    }
});

// ==========================================
// 2. ИНТЕРАКТИВНЫЕ ДИАЛОГИ КНОПКИ ГЛАВНОГО МЕНЮ
// ==========================================
// ==========================================
// ОБНОВЛЕННЫЙ ИГРОВОЙ ЗАПУСК С ШАНСОМ СБОЯ 60%
// ==========================================
const peacefulQuotes = [
    "Инициализация нейросети «Коллектив 2.0» прошла успешно!.",
    "ХРАЗ: «Товарищ майор, полимерный запуск произведен без сбоев.».",
    "Успех! Роботы серии ВОВ-А6 работают штатно на благо родины!"
];

const accidentQuotes = [
    "Критическая ошибка! Элеонора заблокировала ремонтные доки! Роботы атаковали персонал!",
    "ХРАЗ: АВАРИЙНАЯ ОШИБКА»",
    "Активация проекта Атомного сердца. Контроль над Предприятием 3826 полностью утерян...",
    "Внимание! Протокол безопасности нарушен. вся связь переходит в ручной режим!"
];

function showAlert() {
    // Находим заголовок, чтобы поменять его при сбое
    const heroTitle = document.querySelector('.hero h1');
    const themeToggleBtn = document.getElementById('themeToggle');
    
    // Генерируем случайное число от 0 до 100
    const chance = Math.random() * 100;

    // Если выпало меньше или равно 60 — происходит сбой (60% шанс)
    if (chance <= 60) {
        document.body.classList.add('accident');
        if (heroTitle) heroTitle.textContent = '⚠️ ВНИМАНИЕ: СБОЙ СИСТЕМЫ ⚠️';
        if (themeToggleBtn) themeToggleBtn.textContent = 'Перезагрузка системы';
        
        const randomAccident = accidentQuotes[Math.floor(Math.random() * accidentQuotes.length)];
        alert("🚨 БАМ! " + randomAccident);
    } 
    // В остальных 40% случаев — всё запускается мирно
    else {
        document.body.classList.remove('accident');
        if (heroTitle) heroTitle.textContent = 'Добро пожаловать на Предприятие 3826';
        if (themeToggleBtn) themeToggleBtn.textContent = 'Перезагрузка системы';
        
        const randomPeace = peacefulQuotes[Math.floor(Math.random() * peacefulQuotes.length)];
        alert("✅ " + randomPeace);
    }
}

// ==========================================
// 3. ЛОГИКА РАБОТЫ СЛАЙДЕРА ДЛЯ DLC
// ==========================================
let currentSlideIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.dlc-slide');
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex += direction;
    
    if (currentSlideIndex < 0) { currentSlideIndex = slides.length - 1; }
    if (currentSlideIndex >= slides.length) { currentSlideIndex = 0; }
    
    slides[currentSlideIndex].classList.add('active');
}

// ==========================================
// 4. СПОСОБНОСТЬ ОТКРЫВАТЬ КАРТИНКИ НА ВЕСЬ ЭКРАН
// ==========================================
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('fullImage');
const captionText = document.getElementById('modalCaption');
const closeBtn = document.querySelector('.modal-close');

// Находим ВСЕ картинки в галерее и вешаем на них клик
document.querySelectorAll('.image-grid img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block"; // Показываем окно
        modalImg.src = this.src;      // Берем путь до этой картинки
        captionText.textContent = this.alt; // Берем описание из тега alt
    });
});

// Закрытие окна по нажатию на крестик
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// Закрытие окна по клику в любое темное место экрана
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


// ==========================================
// 5. КРУТЫЕ АНИМАЦИИ ПОЯВЛЕНИЯ ПРИ СКРОЛЛЕ
// ==========================================
function checkScrollAnimation() {
    const animElements = document.querySelectorAll('.fade-in-element');
    
    animElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.15; // Точка срабатывания
        
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
}

// Запускаем проверку при прокрутке и при первой загрузке страницы
window.addEventListener('scroll', checkScrollAnimation);
window.addEventListener('DOMContentLoaded', checkScrollAnimation);