// ===== BILINGUAL LANGUAGE SYSTEM =====

const translations = {
    es: {
        // Navigation
        'inicio': 'Inicio',
        'sobre-mi': 'Sobre Mí',
        'habilidades': 'Habilidades',
        'proyectos': 'Proyectos',
        'experiencia': 'Experiencia',
        'contacto': 'Contacto',

        // Hero Section
        'hola-soy': 'Hola, soy',
        'desarrollador-fullstack': 'Desarrollador Full Stack',
        'hero-description': 'Estudiante de Ingeniería en Informática enfocado en desarrollo web moderno con Python, JavaScript y SQL. Apasionado por crear soluciones digitales innovadoras y aprendiendo Machine Learning.',
        'ver-proyectos': 'Ver Proyectos',
        'descargar-cv': 'Descargar CV',

        // About Section
        'about-p1': 'Soy estudiante de 3er año de Ingeniería en Informática en Duoc UC, con una pasión por el desarrollo full-stack y una mentalidad de resolución de problemas desarrollada durante mi experiencia en atención al cliente.',
        'about-p2': 'Mi transición desde el call center al desarrollo de software me ha enseñado la importancia de la comunicación efectiva y el trabajo bajo presión. Actualmente estoy expandiendo mis conocimientos hacia el Machine Learning y buscando oportunidades para crecer como desarrollador junior.',
        'estudiando': 'Estudiando Ing. Informática',
        'aprendiendo-ml': 'Aprendiendo ML',
        'ingles-intermedio': 'Inglés Intermedio-Avanzado',

        // Skills Section
        'frontend': 'Frontend',
        'backend': 'Backend',
        'bases-datos': 'Bases de Datos',
        'herramientas': 'Herramientas',

        // Projects Section
        'proyectos-main': 'Últimos 3 Proyectos',
        'proyectos-count': '10+ proyectos realizados',
        'aniemotion-titulo': 'AniEmotion - Recomendador de Anime',
        'aniemotion-desc': 'Sistema web full-stack que recomienda anime basado en emociones. Conecta con MyAnimeList, incluye dashboard personal, sistema de puntajes, búsqueda avanzada e inicio de sesión.',
        'ferremas-titulo': 'FERREMAS - E-commerce',
        'ferremas-desc': 'Proyecto académico de e-commerce con desarrollo de API de productos, integración de pasarela de pagos Webpay y API de conversión de divisas.',
        'dogstore-titulo': 'Tienda de Perros - E-commerce',
        'dogstore-desc': 'Página web de e-commerce para venta de perros con sistema de carrito de compras, gestión de productos y proceso de checkout completo con persistencia de datos.',
        'tienda-perros': 'Tienda de Perros',
        'ver-codigo': 'Ver Código',
        'ver-demo': 'Ver Demo',

        // Experience Section
        'ing-informatica': 'Ingeniería en Informática',
        'ing-desc': 'Estudiante de 3er año enfocado en desarrollo full-stack. Certificaciones en Análisis de Datos, Programación de Software, Análisis de Requerimientos y Calidad de Software.',
        'ejecutivo-call': 'Ejecutivo Call Center',
        'call-desc': 'Atención a clientes de fibra óptica y móvil, resolución de consultas técnicas y comerciales. Desarrollo de habilidades de comunicación efectiva y trabajo bajo presión.',

        // Contact Section
        'hablemos': '¡Hablemos!',
        'contacto-desc': 'Estoy buscando oportunidades como desarrollador junior. Si tienes un proyecto interesante o una oportunidad laboral, me encantaría conocer más detalles.',
        'metodos-contacto': 'Métodos de Contacto',
        'email-directo': 'Email Directo',
        'email-desc': 'La forma más rápida de contactarme',
        'enviar-email': 'Enviar Email',
        'llamada-directa': 'Llamada Directa',
        'llamada-desc': 'Para conversaciones más detalladas',
        'llamar-ahora': 'Llamar Ahora',

        // Footer
        'todos-derechos': 'Todos los derechos reservados.'
    },

    en: {
        // Navigation
        'inicio': 'Home',
        'sobre-mi': 'About Me',
        'habilidades': 'Skills',
        'proyectos': 'Projects',
        'experiencia': 'Experience',
        'contacto': 'Contact',

        // Hero Section
        'hola-soy': 'Hello, I\'m',
        'desarrollador-fullstack': 'Full Stack Developer',
        'hero-description': 'Computer Engineering student focused on modern web development with Python, JavaScript and SQL. Passionate about creating innovative digital solutions and learning Machine Learning.',
        'ver-proyectos': 'View Projects',
        'descargar-cv': 'Download CV',

        // About Section
        'about-p1': 'I\'m a 3rd year Computer Engineering student at Duoc UC, with a passion for full-stack development and a problem-solving mindset developed during my customer service experience.',
        'about-p2': 'My transition from call center to software development has taught me the importance of effective communication and working under pressure. I\'m currently expanding my knowledge towards Machine Learning and seeking opportunities to grow as a junior developer.',
        'estudiando': 'Studying Computer Engineering',
        'aprendiendo-ml': 'Learning ML',
        'ingles-intermedio': 'Intermediate-Advanced English',

        // Skills Section
        'frontend': 'Frontend',
        'backend': 'Backend',
        'bases-datos': 'Databases',
        'herramientas': 'Tools',

        // Projects Section
        'proyectos-main': 'Latest 3 Projects',
        'proyectos-count': '10+ projects completed',
        'aniemotion-titulo': 'AniEmotion - Anime Recommender',
        'aniemotion-desc': 'Full-stack web system that recommends anime based on emotions. Connects with MyAnimeList, includes personal dashboard, scoring system, advanced search and login.',
        'ferremas-titulo': 'FERREMAS - E-commerce',
        'ferremas-desc': 'Academic e-commerce project with product API development, Webpay payment gateway integration and currency conversion API.',
        'dogstore-titulo': 'Dog Store - E-commerce',
        'dogstore-desc': 'E-commerce website for dog sales with shopping cart system, product management and complete checkout process with data persistence.',
        'tienda-perros': 'Dog Store',
        'ver-codigo': 'View Code',
        'ver-demo': 'View Demo',

        // Experience Section
        'ing-informatica': 'Computer Engineering',
        'ing-desc': '3rd year student focused on full-stack development. Certifications in Data Analysis, Software Programming, Requirements Analysis and Software Quality.',
        'ejecutivo-call': 'Call Center Executive',
        'call-desc': 'Customer service for fiber optic and mobile clients, technical and commercial query resolution. Development of effective communication skills and working under pressure.',

        // Contact Section
        'hablemos': 'Let\'s Talk!',
        'contacto-desc': 'I\'m looking for opportunities as a junior developer. If you have an interesting project or job opportunity, I\'d love to learn more details.',
        'metodos-contacto': 'Contact Methods',
        'email-directo': 'Direct Email',
        'email-desc': 'The fastest way to reach me',
        'enviar-email': 'Send Email',
        'llamada-directa': 'Direct Call',
        'llamada-desc': 'For more detailed conversations',
        'llamar-ahora': 'Call Now',

        // Footer
        'todos-derechos': 'All rights reserved.'
    }
};

class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || null;
        this.init();
    }

    init() {
        // Check if this is first visit - force popup for testing
        const hasSeenLanguageModal = localStorage.getItem('hasSeenLanguageModal');

        if (!hasSeenLanguageModal || !this.currentLanguage) {
            // Show modal on first visit or if no language is set
            setTimeout(() => this.showLanguageModal(), 500);
        } else {
            this.setupLanguageToggle();
            this.updateContent();
            this.updateToggleButton();
        }
        this.setupLanguageModal();
    }

    showLanguageModal() {
        const modal = document.getElementById('languageModal');
        if (modal) {
            modal.classList.add('show');
        }
    }

    hideLanguageModal() {
        const modal = document.getElementById('languageModal');
        if (modal) {
            modal.classList.remove('show');
        }
    }

    setupLanguageModal() {
        const languageOptions = document.querySelectorAll('.language-option');

        languageOptions.forEach(option => {
            option.addEventListener('click', () => {
                const selectedLang = option.getAttribute('data-lang');
                this.setLanguage(selectedLang);
                this.hideLanguageModal();
            });
        });
    }

    setLanguage(language) {
        this.currentLanguage = language;
        localStorage.setItem('language', language);
        localStorage.setItem('hasSeenLanguageModal', 'true');
        this.setupLanguageToggle();
        this.updateContent();
        this.updateToggleButton();
        this.updatePageAttributes();
    }

    setupLanguageToggle() {
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
        localStorage.setItem('language', this.currentLanguage);
        this.updateContent();
        this.updateToggleButton();
        this.updatePageAttributes();
    }

    updateContent() {
        const elements = document.querySelectorAll('[data-text]');

        elements.forEach(element => {
            const key = element.getAttribute('data-text');
            const translation = translations[this.currentLanguage][key];

            if (translation) {
                // Handle different element types
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Update document title
        const title = this.currentLanguage === 'es'
            ? 'Claudio Cabrera - Desarrollador Full Stack'
            : 'Claudio Cabrera - Full Stack Developer';
        document.title = title;

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLanguage;
    }

    updateToggleButton() {
        const langToggle = document.getElementById('langToggle');
        const langText = langToggle?.querySelector('.lang-text');

        if (langText) {
            langText.textContent = this.currentLanguage === 'es' ? 'EN' : 'ES';
        }

        // Update tooltip
        if (langToggle) {
            const tooltip = this.currentLanguage === 'es' ? 'Switch to English' : 'Cambiar a Español';
            langToggle.setAttribute('data-tooltip', tooltip);
        }
    }

    updatePageAttributes() {
        // Update any language-specific attributes or classes
        document.body.setAttribute('data-lang', this.currentLanguage);

        // Trigger custom event for other components that might need to react
        const langChangeEvent = new CustomEvent('languageChanged', {
            detail: { language: this.currentLanguage }
        });
        document.dispatchEvent(langChangeEvent);
    }

    getCurrentLanguage() {
        return this.currentLanguage;
    }

    translate(key) {
        return translations[this.currentLanguage][key] || key;
    }

    // Add new translations dynamically
    addTranslations(newTranslations) {
        Object.keys(newTranslations).forEach(lang => {
            if (translations[lang]) {
                Object.assign(translations[lang], newTranslations[lang]);
            } else {
                translations[lang] = newTranslations[lang];
            }
        });
    }

    // Get all available languages
    getAvailableLanguages() {
        return Object.keys(translations);
    }

    // Format content based on language
    formatContent(content, type = 'text') {
        switch (type) {
            case 'date':
                return this.formatDate(content);
            case 'currency':
                return this.formatCurrency(content);
            case 'number':
                return this.formatNumber(content);
            default:
                return content;
        }
    }

    formatDate(date) {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        const locale = this.currentLanguage === 'es' ? 'es-ES' : 'en-US';
        return new Date(date).toLocaleDateString(locale, options);
    }

    formatCurrency(amount, currency = 'CLP') {
        const locale = this.currentLanguage === 'es' ? 'es-CL' : 'en-US';
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency
        }).format(amount);
    }

    formatNumber(number) {
        const locale = this.currentLanguage === 'es' ? 'es-ES' : 'en-US';
        return new Intl.NumberFormat(locale).format(number);
    }
}

// Initialize language manager when DOM is loaded
let languageManager;

document.addEventListener('DOMContentLoaded', () => {
    languageManager = new LanguageManager();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LanguageManager, translations };
}

// Global utility functions
window.translate = function(key) {
    return languageManager ? languageManager.translate(key) : key;
};

window.getCurrentLanguage = function() {
    return languageManager ? languageManager.getCurrentLanguage() : 'es';
};

// Handle dynamic content updates
document.addEventListener('languageChanged', (event) => {
    // Update any dynamically generated content
    updateDynamicContent(event.detail.language);

    // Update form validation messages
    updateFormValidation(event.detail.language);

    // Update notification messages if any are currently shown
    updateNotificationLanguage(event.detail.language);
});

function updateDynamicContent(language) {
    // Update any content that might be generated dynamically
    const dynamicElements = document.querySelectorAll('.dynamic-content');

    dynamicElements.forEach(element => {
        // Custom logic for dynamic content updates
        if (element.dataset.updateFunction) {
            window[element.dataset.updateFunction](language);
        }
    });
}

function updateFormValidation(language) {
    const validationMessages = {
        es: {
            required: 'Este campo es requerido',
            email: 'Por favor ingresa un email válido',
            minLength: 'Mínimo {min} caracteres',
            maxLength: 'Máximo {max} caracteres'
        },
        en: {
            required: 'This field is required',
            email: 'Please enter a valid email',
            minLength: 'Minimum {min} characters',
            maxLength: 'Maximum {max} characters'
        }
    };

    // Update HTML5 validation messages
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (input.hasAttribute('required')) {
            input.oninvalid = function() {
                this.setCustomValidity(validationMessages[language].required);
            };
            input.oninput = function() {
                this.setCustomValidity('');
            };
        }
    });
}

function updateNotificationLanguage(language) {
    // Update any existing notifications to the new language
    const notifications = document.querySelectorAll('.notification');
    notifications.forEach(notification => {
        // This would require storing the original message key and re-translating
        // Implementation depends on how notifications are structured
    });
}

// SEO and accessibility improvements
function updateMetaTags(language) {
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        const descriptions = {
            es: 'Claudio Cabrera - Desarrollador Full Stack especializado en Python, JavaScript y SQL. Estudiante de Ingeniería en Informática buscando oportunidades como desarrollador junior.',
            en: 'Claudio Cabrera - Full Stack Developer specialized in Python, JavaScript and SQL. Computer Engineering student seeking opportunities as a junior developer.'
        };
        metaDescription.content = descriptions[language];
    }

    // Update other meta tags as needed
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        const keywords = {
            es: 'desarrollador, full stack, python, javascript, sql, angular, flask, programador, chile',
            en: 'developer, full stack, python, javascript, sql, angular, flask, programmer, chile'
        };
        metaKeywords.content = keywords[language];
    }
}

// Listen for language changes to update meta tags
document.addEventListener('languageChanged', (event) => {
    updateMetaTags(event.detail.language);
});