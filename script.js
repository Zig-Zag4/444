// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // Animation de défilement fluide
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const selfcareSection = document.querySelector('.selfcare-section');
            selfcareSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Bouton magique pour révéler la surprise
    const magicButton = document.getElementById('magicButton');
    const hiddenMessage = document.getElementById('hiddenMessage');
    const surpriseContent = document.querySelector('.surprise-content');

    if (magicButton && hiddenMessage) {
        magicButton.addEventListener('click', function() {
            // Effet de scintillement sur le bouton
            magicButton.style.animation = 'sparkle 0.5s ease-in-out';
            
            setTimeout(() => {
                // Cacher le contenu initial
                surpriseContent.style.opacity = '0';
                surpriseContent.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    surpriseContent.style.display = 'none';
                    hiddenMessage.classList.add('show');
                    
                    // Créer des particules magiques
                    createMagicalParticles();
                }, 300);
            }, 500);
        });
    }

    // Fonction pour créer des particules magiques
    function createMagicalParticles() {
        const surpriseBox = document.getElementById('surpriseBox');
        const particles = ['✨', '🌟', '💫', '⭐', '🔮'];
        
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.textContent = particles[Math.floor(Math.random() * particles.length)];
            particle.style.position = 'absolute';
            particle.style.fontSize = '1.5rem';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';
            
            // Position aléatoire
            const x = Math.random() * surpriseBox.offsetWidth;
            const y = Math.random() * surpriseBox.offsetHeight;
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            
            // Animation
            particle.style.animation = `particleFloat 2s ease-out forwards`;
            
            surpriseBox.appendChild(particle);
            
            // Supprimer la particule après l'animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 2000);
        }
    }

    // Ajouter l'animation CSS pour les particules
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0% {
                opacity: 1;
                transform: translateY(0) scale(0.5);
            }
            50% {
                opacity: 1;
                transform: translateY(-50px) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-100px) scale(0.5);
            }
        }
    `;
    document.head.appendChild(style);

    // Animation d'apparition au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    const elementsToAnimate = document.querySelectorAll('.selfcare-card, .magic-card, .personal-message, .classy-img');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // Effet parallax léger sur le hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Ajouter des étincelles supplémentaires de façon aléatoire
    function addRandomSparkles() {
        const body = document.body;
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.fontSize = '1rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.animation = 'sparkle 2s ease-in-out forwards';
        
        body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 2000);
    }

    // Ajouter des étincelles toutes les 5 secondes
    setInterval(addRandomSparkles, 5000);

    // Effet de survol sur les cartes avec son (simulation)
    const cards = document.querySelectorAll('.selfcare-card, .magic-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Message de bienvenue après 3 secondes
    setTimeout(() => {
        console.log('💖 Site créé avec amour pour une personne très spéciale 💖');
    }, 3000);
});

// Fonction pour créer un effet de neige magique (optionnel)
function createMagicalSnow() {
    const snowflakes = ['❄️', '✨', '🌟', '💫'];
    
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        snowflake.style.position = 'fixed';
        snowflake.style.top = '-10px';
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
        snowflake.style.pointerEvents = 'none';
        snowflake.style.zIndex = '1000';
        snowflake.style.animation = `snowfall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(snowflake);
        
        setTimeout(() => {
            if (snowflake.parentNode) {
                snowflake.parentNode.removeChild(snowflake);
            }
        }, 5000);
    }
    
    // Créer des flocons toutes les 500ms
    setInterval(createSnowflake, 500);
}

// Ajouter l'animation de chute de neige
const snowStyle = document.createElement('style');
snowStyle.textContent = `
    @keyframes snowfall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(snowStyle);

// Activer la neige magique après 10 secondes (optionnel)
// setTimeout(createMagicalSnow, 10000);

