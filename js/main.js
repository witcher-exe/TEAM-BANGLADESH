document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Preloader Logic
    const preloader = document.getElementById('splash-screen');
    const removePreloader = () => {
        if(preloader) {
            preloader.classList.add('fade-out');
            setTimeout(() => preloader.style.display = 'none', 1500);
        }
    };
    const fallbackTimer = setTimeout(removePreloader, 4000);
    window.addEventListener('load', () => {
        setTimeout(() => {
            clearTimeout(fallbackTimer);
            removePreloader();
        }, 1500);
    });

    // 2. Sticky Navigation
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
        slides.forEach((s, i) => {
            s.style.zIndex = i === 0 ? 2 : 0;
            if(i !== 0) s.classList.remove('active');
        });
        
        const nextSlide = () => {
            const prevSlide = currentSlide;
            currentSlide = (currentSlide + 1) % slides.length;
            
            const elements = slides[prevSlide].querySelectorAll('.fade-in-up');
            elements.forEach(el => el.style.animation = 'none');
            
            slides.forEach(s => {
                s.classList.remove('wipe-left-right', 'wipe-right-left');
                s.style.zIndex = 0;
            });
            
            slides[prevSlide].style.zIndex = 1;
            slides[currentSlide].style.zIndex = 2;
            slides[currentSlide].classList.add('active');
            
            if (currentSlide % 2 !== 0) {
                slides[currentSlide].classList.add('wipe-left-right');
            } else {
                slides[currentSlide].classList.add('wipe-right-left');
            }
            
            const nextElements = slides[currentSlide].querySelectorAll('.fade-in-up');
            nextElements.forEach(el => {
                el.style.animation = ''; 
            });
            
            setTimeout(() => {
                slides[prevSlide].classList.remove('active');
            }, 2000); 
        };
        setInterval(nextSlide, 6000);
    }

    // 3. Scroll Reveal Animations
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
    revealOnScroll();

    // 4. Counters Animation
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

    const dropdownTriggers = document.querySelectorAll('.desktop-nav .has-dropdown > a, .desktop-nav .has-sub-dropdown > a');
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            const isMobile = window.innerWidth <= 991;
            const href = this.getAttribute('href');

            if (!isMobile && href && href !== '#' && href !== '#more') return;

            e.preventDefault();
            e.stopPropagation();

            const parentLi = this.parentElement;
            const isSubDropdown = parentLi.classList.contains('has-sub-dropdown');

            if (!isSubDropdown && isMobile) {
                const dropdown = parentLi.querySelector('.dropdown');
                const isOpen = dropdown.classList.contains('active');
                
                document.querySelectorAll('.desktop-nav .dropdown').forEach(d => {
                    d.classList.remove('active');
                    d.style.maxHeight = null;
                });
                
                if (!isOpen && dropdown) {
                    dropdown.classList.add('active');
                    dropdown.style.maxHeight = dropdown.scrollHeight + "px";
                    parentLi.classList.add('active');
                } else {
                    parentLi.classList.remove('active');
                }
            } else if (isMobile) {
                parentLi.classList.toggle('active');
                const subDropdown = parentLi.querySelector('.sub-dropdown');
                if (subDropdown) {
                    if (subDropdown.style.display === 'block') {
                        subDropdown.style.display = 'none';
                    } else {
                        subDropdown.style.display = 'block';
                        const rootDropdown = parentLi.closest('.dropdown');
                        if (rootDropdown) {
                            rootDropdown.style.maxHeight = (rootDropdown.scrollHeight + subDropdown.scrollHeight) + "px";
                        }
                    }
                }
            }
        });
    });

    // 6. Member Card Dropdown Logic
    const memberCards = document.querySelectorAll('.member-card');
    memberCards.forEach(card => {
        const btn = card.querySelector('.member-card__image-btn');
        if (!btn) return;
        btn.addEventListener('click', () => {
            memberCards.forEach(c => {
                if (c !== card) {
                    c.classList.remove('expanded');
                    const otherBtn = c.querySelector('.member-card__image-btn');
                    if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                }
            });
            card.classList.toggle('expanded');
            btn.setAttribute('aria-expanded', card.classList.contains('expanded'));
        });
    });

    const committeeCards = document.querySelectorAll('.committee-card');
    committeeCards.forEach(card => {
        card.addEventListener('click', function() {
            committeeCards.forEach(c => {
                if (c !== this) c.classList.remove('expanded');
            });
            this.classList.toggle('expanded');
        });
    });

    // 7. Contact Us Popup
    const contactPopup = document.getElementById('contact-popup');
    const closeContactBtn = document.querySelector('.close-contact-popup');

    const openContactPopup = (e) => {
        if (e) e.preventDefault();
        if (contactPopup) contactPopup.classList.add('active');
        if (desktopNav) desktopNav.classList.remove('active');
    };

    document.querySelectorAll('.contact-trigger-btn').forEach(btn => {
        btn.addEventListener('click', openContactPopup);
    });

    if (closeContactBtn && contactPopup) {
        closeContactBtn.addEventListener('click', () => contactPopup.classList.remove('active'));
        contactPopup.addEventListener('click', (e) => {
            if (e.target === contactPopup) contactPopup.classList.remove('active');
        });
    }

    // 8. Dropdown link navigation
    const allMenuLinks = document.querySelectorAll('.dropdown a, .sub-dropdown a');
    allMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.classList.contains('sub-dropdown-trigger') || this.classList.contains('contact-trigger-btn')) {
                return;
            }

            const destination = this.getAttribute('href');
            if (!destination || destination === '#' || destination === '#more') return;

            e.preventDefault();

            if (destination.includes('.html')) {
                window.location.href = destination;
                return;
            }

            if (destination.startsWith('#')) {
                const target = document.querySelector(destination);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    if (desktopNav) desktopNav.classList.remove('active');
                }
            }
        });
    });

});