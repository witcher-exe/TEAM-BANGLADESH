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
    // Auto-reveal elements on load for better animation
    const autoRevealElements = document.querySelectorAll('.btn:not(.reveal-up), .section-title, .activity-card, .policy-card, .testimonial-card, .counter-item, .float-badge');
    autoRevealElements.forEach((el, index) => {
        el.classList.add('reveal-up');
        if(index % 3 === 1) el.classList.add('delay-1');
        if(index % 3 === 2) el.classList.add('delay-2');
    });

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
            desktopNav.classList.toggle('active');
        });
    }

    if (window.innerWidth <= 991) {
        document.querySelectorAll('.desktop-nav .has-dropdown > a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const dropdown = this.parentElement.querySelector('.dropdown');
                const isOpen = dropdown.classList.contains('active');
                
                // Close all dropdowns first
                document.querySelectorAll('.desktop-nav .dropdown').forEach(d => {
                    d.classList.remove('active');
                    d.style.maxHeight = null;
                });
                
                // Toggle this one
                if (!isOpen) {
                    dropdown.classList.add('active');
                    dropdown.style.maxHeight = dropdown.scrollHeight + "px";
                }
            });
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

    // 7.5. Testimonial Carousel Slider with Swiping and Autoplay
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    const testimonialWrapper = document.querySelector('.testimonial-slides-wrapper');
    let currentTestimonialSlide = 0;
    let testimonialInterval;
    let touchStartX = 0;
    let touchEndX = 0;

    function showTestimonialSlide(index, direction = 'next') {
        if (!testimonialSlides.length) return;
        
        const prev = currentTestimonialSlide;
        currentTestimonialSlide = ((index % testimonialSlides.length) + testimonialSlides.length) % testimonialSlides.length;

        // Reset previous classes
        testimonialSlides[prev].classList.remove('active', 'exit-left', 'exit-right', 'enter-left');
        
        if (direction === 'next') {
            testimonialSlides[prev].classList.add('exit-left');
            testimonialSlides[currentTestimonialSlide].classList.remove('enter-left');
        } else {
            testimonialSlides[prev].classList.add('exit-right');
            testimonialSlides[currentTestimonialSlide].classList.add('enter-left');
        }
        
        // Let reflow happen for enter classes
        void testimonialSlides[currentTestimonialSlide].offsetWidth;

        testimonialSlides[currentTestimonialSlide].classList.add('active');

        // Clean up classes after transition
        setTimeout(() => {
            testimonialSlides[prev].classList.remove('exit-left', 'exit-right');
            testimonialSlides[currentTestimonialSlide].classList.remove('enter-left');
        }, 600);

        testimonialDots.forEach(d => d.classList.remove('active'));
        if (testimonialDots[currentTestimonialSlide]) {
            testimonialDots[currentTestimonialSlide].classList.add('active');
        }
    }

    function nextTestimonialSlide() {
        showTestimonialSlide(currentTestimonialSlide + 1, 'next');
    }

    function prevTestimonialSlide() {
        showTestimonialSlide(currentTestimonialSlide - 1, 'prev');
    }

    window.goToTestimonialSlide = function(index) {
        if (index === currentTestimonialSlide) return;
        const direction = index > currentTestimonialSlide ? 'next' : 'prev';
        showTestimonialSlide(index, direction);
        resetTestimonialInterval();
    };

    function startTestimonialInterval() {
        testimonialInterval = setInterval(nextTestimonialSlide, 4000);
    }

    function resetTestimonialInterval() {
        clearInterval(testimonialInterval);
        startTestimonialInterval();
    }

    if (testimonialWrapper) {
        startTestimonialInterval();

        // Touch swipe logic
        testimonialWrapper.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
            clearInterval(testimonialInterval); // pause on touch
        }, {passive: true});

        testimonialWrapper.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            startTestimonialInterval(); // resume
        }, {passive: true});

        // Mouse swipe logic (Drag)
        let isDragging = false;
        testimonialWrapper.addEventListener('mousedown', e => {
            isDragging = true;
            touchStartX = e.screenX;
            clearInterval(testimonialInterval);
        });

        testimonialWrapper.addEventListener('mouseup', e => {
            if (!isDragging) return;
            isDragging = false;
            touchEndX = e.screenX;
            handleSwipe();
            startTestimonialInterval();
        });

        testimonialWrapper.addEventListener('mouseleave', () => {
            if (isDragging) {
                isDragging = false;
                startTestimonialInterval();
            }
        });

        function handleSwipe() {
            const threshold = 50; // min swipe distance
            if (touchStartX - touchEndX > threshold) {
                nextTestimonialSlide();
            } else if (touchEndX - touchStartX > threshold) {
                prevTestimonialSlide();
            }
        }
    }

    // 8. Footer Accordion Logic (Mobile)
    const footerAccordions = document.querySelectorAll('.accordion-btn');
    footerAccordions.forEach(btn => {
        btn.addEventListener('click', function() {
            const group = this.parentElement;
            
            // Optional: Close others
            document.querySelectorAll('.accordion-group').forEach(g => {
                if(g !== group) g.classList.remove('active');
            });
            
            group.classList.toggle('active');
        });
    });

    // 9. Contact Us Popup Logic
    const contactTriggers = document.querySelectorAll('.contact-trigger-btn');
    const contactPopup = document.getElementById('contact-popup');
    const closeContactPopup = document.querySelector('.close-contact-popup');

    if(contactPopup && closeContactPopup) {
        contactTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                contactPopup.classList.add('active');
            });
        });

        closeContactPopup.addEventListener('click', () => {
            contactPopup.classList.remove('active');
        });

        // Close on outside click
        contactPopup.addEventListener('click', (e) => {
            if (e.target === contactPopup) {
                contactPopup.classList.remove('active');
            }
        });
    }

});