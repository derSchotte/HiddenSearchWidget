import './../scss/style.scss';

// Fügt den Such-Button zur Seite hinzu
const search = document.querySelector('.search');

// Deklariert das Suche-Button Element
const btn = document.querySelector('.btn');

// Deklariert das Input-Element 
const input = document.querySelector('.input');

// Wenn der Button gedrückt wird, fügt die Klasse "active" hinzu und richtet den Fokus auf das Input-Element
btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})
