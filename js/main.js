document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Preloader Logic
    const preloader = document.getElementById('splash-screen');
    const splashLogo = document.getElementById('splash-logo');
    const navLogo = document.getElementById('nav-splash-logo');
    
    // If there is no splash screen on this page, do nothing
    if(!preloader) {
        if(navLogo) {
            navLogo.style.display = 'block';
            navLogo.style.opacity = '1';
        }
        return;
    }
    
    // Check if the page was hard reloaded (Ctrl+R)
    const isReload = window.performance && (
        (window.performance.navigation && window.performance.navigation.type === 1) ||
        (window.performance.getEntriesByType && window.performance.getEntriesByType("navigation").length > 0 && window.performance.getEntriesByType("navigation")[0].type === "reload")
    );
    // Show splash if it hasn't been seen this session OR if the user manually reloaded
    const hasSeenSplash = sessionStorage.getItem('splashShown') && !isReload;

    const removePreloader = () => {
        if(preloader) {
            if(splashLogo && navLogo && !hasSeenSplash) {
                navLogo.style.display = 'block';
                
                const targetRect = navLogo.getBoundingClientRect();
                const startRect = splashLogo.getBoundingClientRect();
                
                // Detach logo from preloader and pin it fixed on screen
                splashLogo.style.position = 'fixed';
                splashLogo.style.left = startRect.left + 'px';
                splashLogo.style.top = startRect.top + 'px';
                splashLogo.style.width = startRect.width + 'px';
                splashLogo.style.height = startRect.height + 'px';
                splashLogo.style.margin = '0';
                splashLogo.style.zIndex = '10000';
                document.body.appendChild(splashLogo); // move outside preloader so bg fade doesn't affect it
                
                void splashLogo.offsetWidth; // trigger reflow
                
                // Start fading out the white background smoothly
                preloader.style.transition = 'opacity 1s ease';
                preloader.style.opacity = '0';

                // Simultaneously morph the logo to the nav
                splashLogo.style.transition = 'all 1s cubic-bezier(0.25, 0.1, 0.25, 1)';
                splashLogo.style.left = targetRect.left + 'px';
                splashLogo.style.top = targetRect.top + 'px';
                splashLogo.style.width = targetRect.width + 'px';
                splashLogo.style.height = targetRect.height + 'px';
                
                setTimeout(() => {
                    splashLogo.style.display = 'none';
                    navLogo.style.opacity = '1';
                    preloader.style.display = 'none';
                    sessionStorage.setItem('splashShown', 'true');
                }, 1100);
            } else {
                if(navLogo) {
                    navLogo.style.display = 'block';
                    navLogo.style.opacity = '1';
                    navLogo.style.transition = 'none';
                }
                preloader.style.display = 'none';
            }
        }
    };

    if(hasSeenSplash) {
        removePreloader();
    } else {
        const audio = new Audio('assets/splashscreen.mp3');
        audio.volume = 0.8;

        const startSplash = () => {
            // Play splash audio
            audio.play().catch(err => console.log("Audio play failed:", err));

            const splash1 = document.getElementById('splash-img-1');
            const splash2 = document.getElementById('splash-img-2');
            const splash3 = document.getElementById('splash-img-3');
            
            if(splash1 && splash2 && splash3 && splashLogo) {
                // img1 starts at 200ms, fades in 1s → done at 1200ms
                setTimeout(() => { splash1.style.opacity = '1'; }, 200);
                // img2 starts at 1200ms, fades in 1s → done at 2200ms  
                setTimeout(() => { splash2.style.opacity = '1'; }, 1200);
                // img3 starts at 2200ms, fades in 1s → done at 3200ms
                setTimeout(() => { splash3.style.opacity = '1'; }, 2200);
                
                // 4th pops instantly at 3400ms
                setTimeout(() => {
                    splashLogo.style.opacity = '1';
                    splash1.style.display = 'none';
                    splash2.style.display = 'none';
                    splash3.style.display = 'none';
                }, 3400);
                
                // Start morph at 3500ms, matching 4.5s total audio duration (3500ms + 1000ms transition)
                setTimeout(() => { removePreloader(); }, 3500);
            } else {
                const fallbackTimer = setTimeout(removePreloader, 4500);
                window.addEventListener('load', () => {
                    setTimeout(() => {
                        clearTimeout(fallbackTimer);
                        removePreloader();
                    }, 1500);
                });
            }
        };

        // Fake an interaction attempt to bypass autoplay (Note: modern browsers strictly block this, but we attempt it)
        try {
            document.dispatchEvent(new MouseEvent('click'));
            document.body.click();
        } catch(e) {}

        // Start splash screen automatically
        startSplash();

        // Fallback: If autoplay was blocked, play it the moment they touch/click anything while splash is visible
        const startTime = Date.now();
        const playOnInteract = () => {
            const elapsed = (Date.now() - startTime) / 1000;
            if (elapsed < 4.5) {
                audio.currentTime = elapsed;
                audio.play().catch(() => {});
            }
            document.removeEventListener('click', playOnInteract);
            document.removeEventListener('touchstart', playOnInteract);
        };
        document.addEventListener('click', playOnInteract);
        document.addEventListener('touchstart', playOnInteract);
        
        // Ensure listeners are removed if they never clicked during splash
        setTimeout(() => {
            document.removeEventListener('click', playOnInteract);
            document.removeEventListener('touchstart', playOnInteract);
        }, 4500);
    }

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

    // 9. Footer Accordion Mobile
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const isMobile = window.innerWidth <= 768;
            if (!isMobile) return;
            e.preventDefault();
            
            const group = this.closest('.accordion-group');
            const content = group.querySelector('.accordion-content');
            
            document.querySelectorAll('.accordion-group').forEach(otherGroup => {
                if (otherGroup !== group) {
                    otherGroup.classList.remove('active');
                    const otherContent = otherGroup.querySelector('.accordion-content');
                    if (otherContent) otherContent.style.maxHeight = null;
                }
            });
            
            group.classList.toggle('active');
            if (group.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // 10. Carousels (Team & Testimonials)
    const initCarousel = (wrapperSelector, slideSelector, dotSelector, nextBtnSelector, autoPlayInterval) => {
        const wrapper = document.querySelector(wrapperSelector);
        if(!wrapper) return;
        const slides = wrapper.querySelectorAll(slideSelector);
        const dots = document.querySelectorAll(dotSelector);
        if(slides.length === 0) return;
        
        let currentSlide = 0;
        let interval;
        const isTeam = slideSelector.includes('team');
        const prefix = isTeam ? 'Team' : 'Testimonial';

        window['goTo' + prefix + 'Slide'] = (index) => {
            currentSlide = index;
            updateSlides();
            resetInterval();
        };

        window['next' + prefix + 'Slide'] = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlides();
            resetInterval();
        };

        window['prev' + prefix + 'Slide'] = () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlides();
            resetInterval();
        };

        const updateSlides = () => {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            if(slides[currentSlide]) slides[currentSlide].classList.add('active');
            if(dots[currentSlide]) dots[currentSlide].classList.add('active');
        };

        const resetInterval = () => {
            if(interval) clearInterval(interval);
            if(autoPlayInterval) {
                interval = setInterval(window['next' + prefix + 'Slide'], autoPlayInterval);
            }
        };
        
        resetInterval();

        let startX = 0;
        let endX = 0;
        let isDragging = false;
        
        // Touch events
        wrapper.addEventListener('touchstart', e => {
            startX = e.changedTouches[0].screenX;
        }, {passive: true});

        wrapper.addEventListener('touchend', e => {
            endX = e.changedTouches[0].screenX;
            handleSwipe();
        }, {passive: true});

        // Mouse events
        wrapper.addEventListener('mousedown', e => {
            startX = e.screenX;
            isDragging = true;
            wrapper.style.cursor = 'grabbing';
        });

        wrapper.addEventListener('mousemove', e => {
            if(!isDragging) return;
            endX = e.screenX;
        });

        wrapper.addEventListener('mouseup', e => {
            if(!isDragging) return;
            endX = e.screenX;
            isDragging = false;
            wrapper.style.cursor = 'grab';
            handleSwipe();
        });

        wrapper.addEventListener('mouseleave', () => {
            if(isDragging) {
                isDragging = false;
                wrapper.style.cursor = 'grab';
                handleSwipe();
            }
        });

        wrapper.style.cursor = 'grab';

        const handleSwipe = () => {
            if (endX < startX - 50) {
                window['next' + prefix + 'Slide']();
            }
            if (endX > startX + 50) {
                window['prev' + prefix + 'Slide']();
            }
        };
    };

    initCarousel('.team-slides-wrapper', '.team-slide', '.team-dot', '.team-next-btn', 0);
    initCarousel('.testimonial-slides-wrapper', '.testimonial-slide', '.testimonial-dot', '.testimonial-next-btn', 5000);

});