// Selecionando elementos do menu Mobile
const menuBtn = document.querySelector('#menu');
const closeMenuBtn = document.querySelector('#close-menu');
const mobileNavbar = document.querySelector('#mobile-navbar');
const mobileLinks = document.querySelectorAll('#mobile-navbar a');

// Mapeamento de links para seções
const sectionMapping = {
  'index.html': 'header',
  'serviço.html': 'expertise-areas',
  'sobre.html': 'about',
  'time.html': 'team',
  'contato.html': 'contact'
};

// Selecionar os elementos dos slides
const slides = document.querySelectorAll('.banner');
const dots = document.querySelectorAll('.dot');
let slideIndex = 1;

function showSlides() {
    for(let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        dots[i].classList.remove('active');
    }

    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');

    setTimeout(showSlides, 3000);
}

// Ativar menu mobile
menuBtn.addEventListener('click', () => {
    mobileNavbar.classList.add('menu-active');
    document.body.style.overflow = 'hidden'; // Previne rolagem quando menu está aberto
});

// Desativar menu mobile
closeMenuBtn.addEventListener('click', () => {
    mobileNavbar.classList.remove('menu-active');
    document.body.style.overflow = ''; // Restaura rolagem
});

// Fechar menu ao clicar em qualquer link e navegar para a seção correta
mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link
        
        // Fecha o menu mobile
        mobileNavbar.classList.remove('menu-active');
        document.body.style.overflow = '';
        
        // Obtém o nome do arquivo do link
        const href = link.getAttribute('href');
        
        // Verifica se estamos na página index.html
        if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
            // Se estiver na página inicial, navega para a seção correspondente
            const sectionId = sectionMapping[href];
            if (sectionId) {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        } else {
            // Se estiver em outra página, navega para a página correspondente
            window.location.href = href;
        }
    });
});

// Inicialização do slides
showSlides();