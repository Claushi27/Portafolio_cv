// ===== ADVANCED ANIMATIONS JAVASCRIPT =====

class AnimationController {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupParallaxEffect();
        this.setupTypingAnimation();
        this.setupFloatingElements();
        this.setupScrollAnimations();
        this.setupHoverEffects();
    }

    // ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.triggerAnimation(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        const animatedElements = document.querySelectorAll(`
            .animate-on-scroll,
            .fade-in,
            .slide-in-left,
            .slide-in-right,
            .slide-in-up,
            .scale-in,
            .rotate-in
        `);

        animatedElements.forEach(el => {
            observer.observe(el);
        });

        // Special handling for staggered animations
        this.setupStaggeredAnimations(observer);
    }

    triggerAnimation(element) {
        element.classList.add('visible', 'animated');

        // Trigger specific animations based on class
        if (element.classList.contains('counter')) {
            this.animateCounter(element);
        }

        if (element.classList.contains('progress-bar')) {
            this.animateProgressBar(element);
        }

        if (element.classList.contains('tech-card')) {
            this.animateTechCard(element);
        }
    }

    // ===== STAGGERED ANIMATIONS =====
    setupStaggeredAnimations(observer) {
        const staggerGroups = document.querySelectorAll('.stagger-container');

        staggerGroups.forEach(container => {
            const children = container.children;
            Array.from(children).forEach((child, index) => {
                child.style.animationDelay = `${index * 0.1}s`;
                observer.observe(child);
            });
        });
    }

    // ===== PARALLAX EFFECTS =====
    setupParallaxEffect() {
        const parallaxElements = document.querySelectorAll('.parallax');

        const handleParallax = () => {
            const scrollTop = window.pageYOffset;

            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrollTop * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
        };

        // Use throttled scroll for better performance
        window.addEventListener('scroll', this.throttle(handleParallax, 16));
    }

    // ===== TYPING ANIMATION =====
    setupTypingAnimation() {
        const typingElements = document.querySelectorAll('.typing-animation');

        typingElements.forEach(element => {
            const text = element.textContent;
            const speed = parseInt(element.dataset.speed) || 100;

            element.textContent = '';
            element.style.borderRight = '2px solid var(--primary-color)';

            this.typeText(element, text, speed);
        });
    }

    typeText(element, text, speed) {
        let i = 0;
        const typing = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            } else {
                // Blinking cursor effect
                setInterval(() => {
                    element.style.borderRight = element.style.borderRight === 'none'
                        ? '2px solid var(--primary-color)'
                        : 'none';
                }, 500);
            }
        };
        typing();
    }

    // ===== FLOATING ELEMENTS =====
    setupFloatingElements() {
        const floatingElements = document.querySelectorAll('.floating-element');

        floatingElements.forEach((element, index) => {
            const amplitude = element.dataset.amplitude || 20;
            const speed = element.dataset.speed || 2000;
            const delay = index * 500;

            this.animateFloat(element, amplitude, speed, delay);
        });
    }

    animateFloat(element, amplitude, speed, delay) {
        setTimeout(() => {
            const animate = () => {
                element.style.transform = `translateY(${Math.sin(Date.now() / speed) * amplitude}px)`;
                requestAnimationFrame(animate);
            };
            animate();
        }, delay);
    }

    // ===== SCROLL ANIMATIONS =====
    setupScrollAnimations() {
        const scrollElements = document.querySelectorAll('.scroll-animate');

        window.addEventListener('scroll', this.throttle(() => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;

            scrollElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top + scrollTop;
                const elementHeight = element.offsetHeight;
                const animationPoint = windowHeight * 0.8;

                if (scrollTop + animationPoint > elementTop && scrollTop < elementTop + elementHeight) {
                    const progress = (scrollTop + animationPoint - elementTop) / (windowHeight + elementHeight);
                    this.updateScrollAnimation(element, Math.min(Math.max(progress, 0), 1));
                }
            });
        }, 16));
    }

    updateScrollAnimation(element, progress) {
        if (element.classList.contains('fade-scale')) {
            const scale = 0.8 + (progress * 0.2);
            const opacity = progress;
            element.style.transform = `scale(${scale})`;
            element.style.opacity = opacity;
        }

        if (element.classList.contains('slide-reveal')) {
            const translateY = (1 - progress) * 100;
            element.style.transform = `translateY(${translateY}px)`;
            element.style.opacity = progress;
        }
    }

    // ===== HOVER EFFECTS =====
    setupHoverEffects() {
        this.setupMagneticEffect();
        this.setupTiltEffect();
        this.setupGlowEffect();
        this.setupRippleEffect();
    }

    setupMagneticEffect() {
        const magneticElements = document.querySelectorAll('.magnetic');

        magneticElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const deltaX = (e.clientX - centerX) * 0.1;
                const deltaY = (e.clientY - centerY) * 0.1;

                element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translate(0px, 0px)';
            });
        });
    }

    setupTiltEffect() {
        const tiltElements = document.querySelectorAll('.tilt');

        tiltElements.forEach(element => {
            element.addEventListener('mousemove', (e) => {
                const rect = element.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const rotateX = (e.clientY - centerY) / 10;
                const rotateY = (centerX - e.clientX) / 10;

                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            });
        });
    }

    setupGlowEffect() {
        const glowElements = document.querySelectorAll('.glow-on-hover');

        glowElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.boxShadow = '0 0 30px rgba(99, 102, 241, 0.6)';
            });

            element.addEventListener('mouseleave', () => {
                element.style.boxShadow = '';
            });
        });
    }

    setupRippleEffect() {
        const rippleElements = document.querySelectorAll('.ripple-effect');

        rippleElements.forEach(element => {
            element.addEventListener('click', (e) => {
                const rect = element.getBoundingClientRect();
                const ripple = document.createElement('span');
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');

                element.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // ===== SPECIALIZED ANIMATIONS =====
    animateCounter(element) {
        const target = parseInt(element.dataset.target) || 0;
        const duration = parseInt(element.dataset.duration) || 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        updateCounter();
    }

    animateProgressBar(element) {
        const target = parseInt(element.dataset.target) || 100;
        const duration = parseInt(element.dataset.duration) || 2000;

        element.style.width = '0%';

        setTimeout(() => {
            element.style.transition = `width ${duration}ms ease-out`;
            element.style.width = target + '%';
        }, 100);
    }

    animateTechCard(element) {
        const delay = parseInt(element.dataset.delay) || 0;

        setTimeout(() => {
            element.style.transform = 'translateY(0) scale(1)';
            element.style.opacity = '1';
        }, delay);
    }

    // ===== UTILITY FUNCTIONS =====
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ===== PAGE TRANSITION ANIMATIONS =====
    setupPageTransitions() {
        // Smooth page load animation
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });

        // Smooth scroll to section animations
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));

                if (target) {
                    // Add loading animation
                    target.classList.add('section-entering');

                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Remove animation class after scroll
                    setTimeout(() => {
                        target.classList.remove('section-entering');
                    }, 1000);
                }
            });
        });
    }

    // ===== PERFORMANCE OPTIMIZATIONS =====
    optimizeAnimations() {
        // Reduce animations on low-end devices
        if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
            document.body.classList.add('reduce-animations');
        }

        // Pause animations when page is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                document.body.classList.add('paused-animations');
            } else {
                document.body.classList.remove('paused-animations');
            }
        });

        // Respect user's motion preferences
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.classList.add('reduce-motion');
        }
    }

    // ===== INTERACTIVE ANIMATIONS =====
    createInteractiveParticles() {
        const particleContainer = document.querySelector('.particle-container');
        if (!particleContainer) return;

        const particles = [];
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: var(--primary-color);
                border-radius: 50%;
                pointer-events: none;
                opacity: 0.6;
            `;

            particles.push({
                element: particle,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2
            });

            particleContainer.appendChild(particle);
        }

        const animateParticles = () => {
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
                if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

                particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
            });

            requestAnimationFrame(animateParticles);
        };

        animateParticles();
    }

    // ===== MOUSE CURSOR EFFECTS =====
    setupCustomCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            mix-blend-mode: difference;
        `;

        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });

        // Enhance cursor on hoverable elements
        document.querySelectorAll('a, button, .clickable').forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
            });

            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
            });
        });
    }
}

// Initialize animation controller
let animationController;

document.addEventListener('DOMContentLoaded', () => {
    animationController = new AnimationController();
});

// Export for external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnimationController;
}