document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Preloader Logic
    const preloader = document.getElementById('splash-screen');
    
    // Let the animation play a bit longer for a premium feel
    const removePreloader = () => {
        if(preloader) {
            preloader.classList.add('fade-out');
            setTimeout(() => preloader.style.display = 'none', 1500);
        }
    };

    const fallbackTimer = setTimeout(removePreloader, 4000);

    window.addEventListener('load', () => {
        // Even if loaded early, wait a bit so user sees the nice animation
        setTimeout(() => {
            clearTimeout(fallbackTimer);
            removePreloader();
        }, 1500);
    });

    // 2. Sticky Navigation (Frosted Glass handling)
    const navBar = document.querySelector('.nav-bar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    });

    // 2.5. Hero Slider Carousel
    const slides = document.querySelectorAll('.hero-slides .slide');
    if (slides.length > 1) {
        let currentSlide = 0;
        
        // Setup initial z-indexes
        slides.forEach((s, i) => {
            s.style.zIndex = i === 0 ? 2 : 0;
            if(i !== 0) s.classList.remove('active');
        });
        
        const nextSlide = () => {
            const prevSlide = currentSlide;
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Re-trigger fade-in-up animations
            const elements = slides[prevSlide].querySelectorAll('.fade-in-up');
            elements.forEach(el => el.style.animation = 'none');
            
            // reset all classes and z-indexes
            slides.forEach(s => {
                s.classList.remove('wipe-left-right', 'wipe-right-left');
                s.style.zIndex = 0;
            });
            
            // Previous slide goes to background but remains active (no white flash!)
            slides[prevSlide].style.zIndex = 1;
            
            // Next slide goes to foreground and gets wipe class
            slides[currentSlide].style.zIndex = 2;
            slides[currentSlide].classList.add('active');
            
            if (currentSlide % 2 !== 0) {
                slides[currentSlide].classList.add('wipe-left-right');
            } else {
                slides[currentSlide].classList.add('wipe-right-left');
            }
            
            // Restart fade-in elements for the new slide
            const nextElements = slides[currentSlide].querySelectorAll('.fade-in-up');
            nextElements.forEach(el => {
                el.style.animation = ''; 
            });
            
            // Remove active from previous slide after transition completes
            // Changed to 2000ms to ensure the 1.8s wipe animation is fully finished before removing the background slide!
            setTimeout(() => {
                slides[prevSlide].classList.remove('active');
            }, 2000); 
        };

        setInterval(nextSlide, 6000);
    }

    // 3. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;
        
        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // 4. Counters Animation (Simple version)
    const counters = document.querySelectorAll('.counter-number');
    let counted = false;

    const runCounters = () => {
        const counterSection = document.querySelector('.counter-grid');
        if(!counterSection) return;
        
        const top = counterSection.getBoundingClientRect().top;
        if (top < window.innerHeight && !counted) {
            counted = true;
            counters.forEach(counter => {
                const targetText = counter.innerText;
                const isK = targetText.includes('k');
                const isPlus = targetText.includes('+');
                const targetNum = parseInt(targetText.replace(/\D/g, ''));
                
                let count = 0;
                const speed = targetNum / 50; 
                
                const updateCount = () => {
                    count += speed;
                    if (count < targetNum) {
                        counter.innerText = Math.ceil(count) + (isK ? 'k' : '') + (isPlus ? '+' : '');
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.innerText = targetText;
                    }
                };
                updateCount();
            });
        }
    };

    window.addEventListener('scroll', runCounters);

    // 5. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const desktopNav = document.querySelector('.desktop-nav');
    
    if(mobileBtn && desktopNav) {
        mobileBtn.addEventListener('click', () => {
            desktopNav.style.display = desktopNav.style.display === 'block' ? 'none' : 'block';
        });
    }

    // 6. Newsletter Popup Logic
    const popup = document.querySelector('.newsletter-popup');
    const closePopupBtn = document.querySelector('.close-popup');
    
    if(popup) {
        // Delay popup by 8 seconds on mobile, 6 seconds on desktop
        const delay = window.innerWidth <= 768 ? 8000 : 6000;
        setTimeout(() => {
            popup.classList.add('active');
        }, delay);

        closePopupBtn.addEventListener('click', () => {
            popup.classList.remove('active');
        });
    }

    // 7. Leadership Team Carousel Slider
    let currentTeamSlide = 0;
    const teamSlides = document.querySelectorAll('.team-slide');
    const teamDots = document.querySelectorAll('.team-dot');

    function showTeamSlide(index) {
        if (!teamSlides.length) return;
        
        const prev = currentTeamSlide;
        currentTeamSlide = ((index % teamSlides.length) + teamSlides.length) % teamSlides.length;

        // Exit old slide to the left
        teamSlides[prev].classList.add('exit-left');
        teamSlides[prev].classList.remove('active');

        // After exit animation finishes, reset it
        setTimeout(() => {
            teamSlides[prev].classList.remove('exit-left');
        }, 600);

        // Enter new slide from the right
        teamSlides[currentTeamSlide].classList.add('active');

        // Update dots
        teamDots.forEach(d => d.classList.remove('active'));
        if (teamDots[currentTeamSlide]) teamDots[currentTeamSlide].classList.add('active');
    }

    window.nextTeamSlide = function() {
        showTeamSlide(currentTeamSlide + 1);
    };

    window.goToTeamSlide = function(index) {
        if (index === currentTeamSlide) return;
        showTeamSlide(index);
    };

});