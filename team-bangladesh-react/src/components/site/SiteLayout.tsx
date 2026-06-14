// @ts-nocheck
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from '@tanstack/react-router';
import '../../original-style.css';

const headerHtml = `<header class="site-header">
        <!-- Sticky frosted glass nav -->
        <div class="nav-bar">
            <div class="container nav-inner">
                <a href="index.html" class="logo" style="display: flex; align-items: center; gap: 10px;">
                    <img src="assets/downloaded img/tblogo.png" alt="Team Bangladesh Logo"
                        style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;">
                    <div style="display: flex; flex-direction: column; align-items: flex-start; justify-content: center; gap: 2px;">
                        <img id="nav-splash-logo" src="assets/downloaded img/Sobar-agge-Bangladesh-Logo.png" alt="Sobar agge Bangladesh" style="width: auto; height: 32px; opacity: 0; transition: opacity 0.5s ease; display: none;">
                        <span class="logo-text" style="font-size: 18px; line-height: 1;">TEAM BANGLADESH</span>
                    </div>
                </a>
                <nav class="desktop-nav">
                    <ul>
                        <li><a href="#home" class="active">Home</a></li>
                        <li class="has-dropdown">
                            <a href="#about">About us <i class="fa-solid fa-chevron-down"
                                    style="font-size: 10px; margin-left: 5px;"></i></a>
                            <ul class="dropdown">
                                <li><a href="mission.html">Our Mission and Vision</a></li>
                                <li><a href="#activities">How We Work</a></li>
                                <li><a href="committees.html">Our Committees</a></li>
                                <li><a href="#activities">Our Working Arenas</a></li>
                                <li><a href="#projects">Partners</a></li>
                                <li><a href="#" class="contact-trigger-btn">Contact Us</a></li>
                            </ul>
                        </li>
                        <li><a href="campaigns.html">Campaigns</a></li>
                        <li class="has-dropdown">
                            <a href="#more">More <i class="fa-solid fa-chevron-down"
                                    style="font-size: 10px; margin-left: 5px;"></i></a>
                            <ul class="dropdown">
                                <li class="has-sub-dropdown">
                                    <a href="#" class="sub-dropdown-trigger">
                                        <span>Monthly Recognition</span>
                                        <i class="fa-solid fa-chevron-right" style="font-size: 10px;"></i>
                                    </a>
                                    <ul class="sub-dropdown">
                                        <li><a href="#">Green Club / Society</a></li>
                                        <li><a href="#">Great Volunteer</a></li>
                                        <li><a href="#">Great Leader</a></li>
                                        <li><a href="#">Best District Committee</a></li>
                                        <li><a href="#">Best Thana Committee</a></li>
                                        <li><a href="#">Green School of this month</a></li>
                                        <li><a href="#">Green Lover of this month</a></li>
                                    </ul>
                                </li>
                                <li><a href="events.html">Events</a></li>
                                <li><a href="campaigns.html">Campaigns</a></li>
                                <li><a href="committees.html">Our Committees</a></li>
                                <li><a href="#">Photo Gallery</a></li>
                                <li><a href="#">Video Gallery</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Join with us (volunteer)</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Donation</a></li>
                            </ul>
                        </li>
                        <li class="donate-item" style="margin-left: 30px;"><a href="#donate"
                                class="btn-donate">Donate</a></li>
                    </ul>
                </nav>
                <div class="nav-actions">
                    <button class="mobile-menu-btn"><i class="fa-solid fa-bars"></i></button>
                </div>
            </div>
        </div>
    </header>`;
import { MapPin, Mail, Phone, Leaf } from "lucide-react";

export function Footer() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && (href.endsWith('.html') || href.startsWith('/'))) {
        e.preventDefault();
        const route = href.replace('.html', '');
        navigate({ to: route.startsWith('/') ? route : '/' + route });
      }
    };
    document.querySelector('.site-footer-react')?.addEventListener('click', handleClick);
    return () => document.querySelector('.site-footer-react')?.removeEventListener('click', handleClick);
  }, [navigate]);

  return (
    <footer id="donate" className="relative mt-24 bg-ink text-white overflow-hidden site-footer-react">
      <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-leaf/30 blob" />
      <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-amber-glow/20 blob" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="/assets/downloaded img/tblogo.png" alt="TeamBD Logo" style={{width: 40, height: 40, borderRadius: '50%', objectFit: 'cover'}} />
            <div className="font-bold text-lg">TeamBD</div>
          </div>
          <p className="font-rock-salt text-amber-glow text-sm">… because Bangladesh First.</p>
          <div className="flex gap-3 mt-6">
            <a href="https://www.facebook.com/groups/895660733312485/?ref=share&mibextid=NSMWBT" className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-leaf hover:border-leaf transition-all"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-leaf hover:border-leaf transition-all"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-leaf hover:border-leaf transition-all"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-3 text-white/70 text-sm">
            <li><a href="#about" className="hover:text-amber-glow">About Us</a></li>
            <li><a href="#activities" className="hover:text-amber-glow">Our Activities</a></li>
            <li><a href="#guidelines" className="hover:text-amber-glow">Organization Policies</a></li>
            <li><a href="#donate" className="hover:text-amber-glow">Donation</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Help</h4>
          <ul className="space-y-3 text-white/70 text-sm">
            <li><a href="#" className="hover:text-amber-glow">FAQ</a></li>
            <li><a href="#" className="hover:text-amber-glow">Support</a></li>
            <li><a href="#" className="hover:text-amber-glow contact-trigger-btn">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Contact Info</h4>
          <ul className="space-y-3 text-white/70 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-leaf shrink-0 mt-0.5" /> Bangladesh</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-leaf shrink-0 mt-0.5" /> info@teambangladesh.org</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-leaf shrink-0 mt-0.5" /> +880 1911-480021</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Legal</h4>
          <ul className="space-y-3 text-white/70 text-sm">
            <li><a href="#" className="hover:text-amber-glow">Terms of use</a></li>
            <li><a href="#" className="hover:text-amber-glow">Privacy policy</a></li>
            <li><a href="#" className="hover:text-amber-glow">Cookie policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="relative border-t border-white/10 py-6 text-center text-xs text-white/50">
        © 2026 Team Bangladesh. All Rights Reserved. <br className="sm:hidden" /> Design and Developed by CEEDtech
      </div>
    </footer>
  );
}

export function SiteLayout({ children, noPadding = false }: { children: React.ReactNode, noPadding?: boolean }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (sessionStorage.getItem('splashShown') === 'true') {
      const logo = document.getElementById('nav-splash-logo');
      if (logo) {
        logo.style.display = 'block';
        logo.style.opacity = '1';
        logo.style.transition = 'none';
      }
    }
  }, [location.pathname]);

  // Execute all original layout logic (navbar scroll, dropdowns, accordion)
  useEffect(() => {
    
    
    // 1. Preloader Logic
    const preloader = document.getElementById('splash-screen');
    const splashLogo = document.getElementById('splash-logo');
    const navLogo = document.getElementById('nav-splash-logo');
    
    const hasSeenSplash = sessionStorage.getItem('splashShown');

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
        const splash1 = document.getElementById('splash-img-1');
        const splash2 = document.getElementById('splash-img-2');
        const splash3 = document.getElementById('splash-img-3');
        
        if(splash1 && splash2 && splash3 && splashLogo) {
            // img1 starts at 200ms, fades in 1s → done at 1200ms
            setTimeout(() => { splash1.style.opacity = '1'; }, 200);
            // img2 starts at 1000ms, fades in 1s → done at 2000ms  
            setTimeout(() => { splash2.style.opacity = '1'; }, 1000);
            // img3 starts at 2000ms, fades in 1s → done at 3000ms
            setTimeout(() => { splash3.style.opacity = '1'; }, 2000);
            
            // 4th pops instantly right when img3 is fully visible (3000ms)
            setTimeout(() => {
                splashLogo.style.opacity = '1';
                splash1.style.display = 'none';
                splash2.style.display = 'none';
                splash3.style.display = 'none';
            }, 3000);
            
            // Start morph 100ms after 4th appears
            setTimeout(() => { removePreloader(); }, 3100);
        } else {
            const fallbackTimer = setTimeout(removePreloader, 4000);
            window.addEventListener('load', () => {
                setTimeout(() => {
                    clearTimeout(fallbackTimer);
                    removePreloader();
                }, 1500);
            });
        }
    }

    // 2. Sticky Navigation
    const navBar = document.querySelector('.nav-bar');
    window.addEventListener('scroll', () => {
        if (!navBar) return;
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


  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div style={{ paddingTop: noPadding ? 0 : 70 }}>{children}</div>
      <Footer />
    </div>
  );
}

// Keep Reveal for other pages
import { motion } from "framer-motion";
export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  );
}

export function PageHero({ eyebrow, title, subtitle, image = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80", stats = [] }: { eyebrow?: string, title: any, subtitle: any, image?: string, stats?: any[] }) {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 bg-ink text-white">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/85 to-leaf-deep/70" />
      </div>
      <div className="absolute top-20 right-10 h-80 w-80 rounded-full bg-leaf/40 blob" />
      <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-amber-glow/30 blob" />

      <div className="relative mx-auto max-w-7xl px-5">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {eyebrow && <div className="font-rock-salt text-amber-glow text-xl mb-3">{eyebrow}</div>}
          <h1 className="text-5xl lg:text-7xl font-bold text-balance max-w-4xl text-white">
            {title}
          </h1>
          {subtitle && <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">{subtitle}</p>}
        </motion.div>

        {stats && stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl"
          >
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-5">
                <div className="text-3xl font-bold shimmer-text">{s.value}</div>
                <div className="text-xs text-white/60 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* wave divider */}
      <svg className="absolute bottom-0 left-0 w-full h-16 text-background" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,32 C320,80 720,0 1440,48 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
}
