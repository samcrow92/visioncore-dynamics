document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setupLanguageSwitcher();
    addParallaxEffect();
    addRippleEffectToButton();
    setupIntersectionObserver();

    // Add entrance animation to body
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
});

// Create animated particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Language Switcher
function setupLanguageSwitcher() {
    const langButtons = {
        ro: document.getElementById('lang-ro'),
        en: document.getElementById('lang-en'),
    };

    const translations = {
        ro: {
            nav_app1: 'Inspecție Automatizată',
            nav_app2: 'Mentenanță Predictivă',
            nav_app3: 'Optimizarea Logisticii',
            hero_title: 'Soluții de Computer Vision pentru Industrie',
            hero_subtitle: 'Automatizare și Inovație prin Inteligență Artificială',
            hero_description: 'Suntem specializați în dezvoltarea de soluții avansate de computer vision și machine learning pentru aplicații industriale. Transformăm procesele de producție și control al calității prin tehnologie de ultimă generație, aducând eficiență și precizie afacerii dumneavoastră.',
            contact_button: 'Contactează-ne',
            features_title: 'Transformarea Producției cu Viziune Inteligentă',
            feature1_title: 'Inspecție Automatizată a Calității',
            feature1_desc: 'Sistemele noastre de computer vision oferă inspecție în timp real, automatizată, a liniilor de producție. Utilizând camere de înaltă rezoluție și modele de machine learning sofisticate, putem detecta defecte microscopice, asigura consistența produselor și reduce erorile umane. Acest lucru duce la produse de calitate superioară, mai puține deșeuri și o satisfacție crescută a clienților.',
            feature2_title: 'Mentenanță Predictivă',
            feature2_desc: 'Monitorizați starea de sănătate a utilajelor cu soluțiile noastre de mentenanță predictivă. Folosind date termice și vizuale, algoritmii noștri de inteligență artificială pot detecta semne timpurii de uzură, supraîncălzire sau potențiale defecțiuni. Acest lucru vă permite să programați întreținerea în mod proactiv, evitând timpii de nefuncționare costisitori și prelungind durata de viață a echipamentelor.',
            feature3_title: 'Optimizarea Logisticii și a Lanțului de Aprovizionare',
            feature3_desc: 'Eficientizați operațiunile de depozitare și logistică cu sistemele noastre inteligente. De la recunoașterea și sortarea automată a pachetelor la optimizarea gestionării stocurilor și ghidarea vehiculelor autonome, soluțiile noastre de computer vision aduc un nou nivel de viteză și acuratețe în lanțul de aprovizionare.',
            feature_learn_more: 'Află mai mult',
        },
        en: {
            nav_app1: 'Automated Inspection',
            nav_app2: 'Predictive Maintenance',
            nav_app3: 'Logistics Optimization',
            hero_title: 'Computer Vision Solutions for Industry',
            hero_subtitle: 'Automation and Innovation through Artificial Intelligence',
            hero_description: 'We specialize in developing advanced computer vision and machine learning solutions for industrial applications. We transform manufacturing and quality control processes through cutting-edge technology, bringing efficiency and precision to your business.',
            contact_button: 'Get In Touch',
            features_title: 'Transforming Manufacturing with Intelligent Vision',
            feature1_title: 'Automated Quality Inspection',
            feature1_desc: 'Our computer vision systems provide real-time, automated inspection of production lines. Using high-resolution cameras and sophisticated machine learning models, we can detect microscopic defects, ensure product consistency, and reduce human error. This leads to higher quality products, less waste, and increased customer satisfaction.',
            feature2_title: 'Predictive Maintenance',
            feature2_desc: 'Monitor the health of your machinery with our predictive maintenance solutions. Using thermal and visual data, our AI algorithms can detect early signs of wear, overheating, or potential failures. This allows you to schedule maintenance proactively, avoiding costly downtime and extending the life of your equipment.',
            feature3_title: 'Logistics and Supply Chain Optimization',
            feature3_desc: 'Streamline your warehouse and logistics operations with our intelligent systems. From automated package recognition and sorting to optimizing inventory management and guiding autonomous vehicles, our computer vision solutions bring a new level of speed and accuracy to your supply chain.',
            feature_learn_more: 'Learn More',
        }
    };

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update button styles
        for (const key in langButtons) {
            langButtons[key].classList.remove('active');
        }
        langButtons[lang].classList.add('active');
    };

    langButtons.ro.addEventListener('click', () => setLanguage('ro'));
    langButtons.en.addEventListener('click', () => setLanguage('en'));

    // Set default language
    setLanguage('ro');
}


// Add parallax effect on mouse move
function addParallaxEffect() {
    document.addEventListener('mousemove', (e) => {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        hero.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    });
}


// Add click effect to contact button
function addRippleEffectToButton() {
    const contactButton = document.querySelector('.contact-btn');
    if (!contactButton) return;

    contactButton.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}


// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[class*="fadeIn"], [class*="slideUp"]').forEach(el => {
        observer.observe(el);
    });
}