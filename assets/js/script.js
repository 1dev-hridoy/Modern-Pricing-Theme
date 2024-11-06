document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const cards = document.querySelectorAll('.card');
    
    // Initial animations
    gsap.from('h1', { 
        opacity: 0, 
        y: -50, 
        duration: 1 
    });
    
    gsap.from('.subtitle', { 
        opacity: 0, 
        y: -30, 
        duration: 1,
        delay: 0.2 
    });
    
    gsap.from('.most-popular', { 
        opacity: 0, 
        scale: 0.5, 
        duration: 0.5,
        delay: 0.4 
    });
    
    gsap.from(cards, { 
        opacity: 0, 
        y: 50, 
        duration: 0.8, 
        stagger: 0.2,
        delay: 0.6,
        ease: 'power2.out'
    });

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');

        // Animate theme change
        gsap.to('body', { 
            backgroundColor: document.body.classList.contains('dark-theme') ? '#1a1a1a' : '#ffffff',
            color: document.body.classList.contains('dark-theme') ? '#ffffff' : '#333333',
            duration: 0.5
        });

        gsap.to('.card', { 
            backgroundColor: document.body.classList.contains('dark-theme') ? '#2a2a2a' : '#f8f9ff',
            duration: 0.5
        });
    });

    // Card hover animations
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { 
                y: -10,
                boxShadow: '0 20px 30px rgba(0,0,0,0.1)',
                duration: 0.3 
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { 
                y: 0,
                boxShadow: 'none',
                duration: 0.3 
            });
        });
    });

    // Button click animation
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            gsap.to(e.target, { 
                scale: 0.95, 
                duration: 0.1, 
                yoyo: true, 
                repeat: 1
            });
        });
    });
});