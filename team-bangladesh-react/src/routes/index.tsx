
// @ts-nocheck
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { SiteLayout } from '@/components/site/SiteLayout'
import '../original-style.css'

export const Route = createFileRoute('/')({
  component: Home,
})

const landingHtml = `
  <!-- PHASE 1: PRELOADER (Splash Screen) -->
    <div id="splash-screen" class="preloader-wrapper">
        <div class="preloader-inner" style="position: relative; width: 500px; height: 500px; display: flex; justify-content: center; align-items: center;">
            <img src="assets/downloaded img/SplashScreen/first.png" id="splash-img-1" style="position: absolute; opacity: 0; width: 100%; height: auto; transition: opacity 1s ease; z-index: 1;">
            <img src="assets/downloaded img/SplashScreen/second.png" id="splash-img-2" style="position: absolute; opacity: 0; width: 100%; height: auto; transition: opacity 1s ease; z-index: 2;">
            <img src="assets/downloaded img/SplashScreen/third.png" id="splash-img-3" style="position: absolute; opacity: 0; width: 100%; height: auto; transition: opacity 1s ease; z-index: 3;">
            <img src="assets/downloaded img/Sobar-agge-Bangladesh-Logo.png" alt="Sobar agge Bangladesh" id="splash-logo" style="position: absolute; opacity: 0; width: 100%; height: auto; z-index: 4;">
        </div>
    </div>
  <main>
        <!-- PHASE 3: HERO SECTION -->
        <section id="home" class="hero">
            <div class="hero-slides">
                <!-- Slide 1 -->
                <div class="slide active">
                    <div class="slide-bg" style="background-image: url('assets/downloaded img/tb.jpeg');"></div>
                    <div class="slide-overlay"></div>
                    <div class="container slide-content">
                        <span class="handwriting fade-in-up">Let's build a greener future</span>
                        <h1 class="fade-in-up delay-1">Pollution-free Green Earth,<br>Healthy Life</h1>
                        <div class="hero-btns fade-in-up delay-2">
                            <a href="#about" class="btn btn-primary">Discover More</a>
                            <a href="#activities" class="btn btn-outline">Our Activities</a>
                        </div>
                    </div>
                </div>
                <!-- Slide 2 -->
                <div class="slide">
                    <div class="slide-bg" style="background-image: url('assets/downloaded img/slide_img2.jpeg');"></div>
                    <div class="slide-overlay"></div>
                    <div class="container slide-content">
                        <span class="handwriting fade-in-up">Protecting the ecology</span>
                        <h1 class="fade-in-up delay-1">Sustainable Growth for<br>Future Generations</h1>
                        <div class="hero-btns fade-in-up delay-2">
                            <a href="#about" class="btn btn-primary">Discover More</a>
                            <a href="#activities" class="btn btn-outline">Our Activities</a>
                        </div>
                    </div>
                </div>
                <!-- Slide 3 -->
                <div class="slide">
                    <div class="slide-bg" style="background-image: url('assets/downloaded img/slide_img3.jpeg');"></div>
                    <div class="slide-overlay"></div>
                    <div class="container slide-content">
                        <span class="handwriting fade-in-up">A noble purpose</span>
                        <h1 class="fade-in-up delay-1">Working Together for<br>Nature & People</h1>
                        <div class="hero-btns fade-in-up delay-2">
                            <a href="#about" class="btn btn-primary">Discover More</a>
                            <a href="#activities" class="btn btn-outline">Our Activities</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Shape Divider -->
            <div class="hero-shape">
                <img src="assets/images/earthcare/h6-rev-shape.png" alt="shape">
            </div>
        </section>

        <!-- PHASE 4: ABOUT & COUNTER STATS -->
        <section id="about" class="about-section pt-120 pb-120">
            <div class="container">
                <div class="row align-center">
                    <div class="col-6 about-image-wrapper">
                        <div class="image-box">
                            <img src="assets/downloaded img/tblogo.png" alt="About Team Bangladesh"
                                class="main-img reveal-left">
                            <div class="float-badge reveal-up">
                                <div class="badge-icon"><i class="fa-solid fa-leaf"></i></div>
                                <h4>Since 2026</h4>
                                <p>Working for Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 about-content pl-50">
                        <span class="section-subtitle reveal-up">Who We Are</span>
                        <h2 class="section-title reveal-up">Team Bangladesh</h2>
                        <div class="registered-tag reveal-up">Registered under Social Welfare of Bangladesh</div>
                        <p class="section-desc reveal-up">Team Bangladesh is a reputed, registered organization working
                            for a long time with the goal of building a green, pollution-free, clean, livable,
                            developed, and humane Bangladesh.</p>
                        <p class="section-desc reveal-up">We work together with this pure belief - for the noble purpose
                            of gifting a sustainable, safe, and better future for the next generations.</p>

                        <div class="counter-grid mt-40 reveal-up">
                            <div class="counter-item">
                                <div class="counter-number">24+</div>
                                <div class="counter-text">Years of Impact</div>
                            </div>
                            <div class="counter-item">
                                <div class="counter-number">50k+</div>
                                <div class="counter-text">Trees Planted</div>
                            </div>
                            <div class="counter-item">
                                <div class="counter-number">12k+</div>
                                <div class="counter-text">Families Helped</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PHASE 5: ACTIVITIES -->
        <section id="activities" class="activities-section bg-light pt-120 pb-120">
            <div class="container">
                <div class="section-header text-center">
                    <span class="section-subtitle reveal-up">Our Key Initiatives</span>
                    <h2 class="section-title reveal-up">Key Areas of Action</h2>
                </div>

                <div class="grid-4 activities-grid">
                    <!-- Item 1 -->
                    <div class="activity-card reveal-up">
                        <div class="card-icon"><i class="fa-solid fa-seedling"></i></div>
                        <h3>Tree Planting</h3>
                        <p>Biodiversity conservation and mass plantation across regions.</p>
                    </div>
                    <!-- Item 2 -->
                    <div class="activity-card reveal-up delay-1">
                        <div class="card-icon"><i class="fa-solid fa-paw"></i></div>
                        <h3>Animal Care</h3>
                        <p>Ensuring welfare, rescue, and care for street and wild animals.</p>
                    </div>
                    <!-- Item 3 -->
                    <div class="activity-card reveal-up delay-2">
                        <div class="card-icon"><i class="fa-solid fa-house-medical"></i></div>
                        <h3>Free Mega Medical Camp</h3>
                        <p>Providing essential free medical services to underprivileged communities.</p>
                    </div>
                    <!-- Item 4 -->
                    <div class="activity-card reveal-up delay-3">
                        <div class="card-icon"><i class="fa-solid fa-book-open-reader"></i></div>
                        <h3>Educational Development</h3>
                        <p>Empowering children through widespread national education improvement.</p>
                    </div>
                    <!-- Item 5 -->
                    <div class="activity-card reveal-up">
                        <div class="card-icon"><i class="fa-solid fa-city"></i></div>
                        <h3>Green City</h3>
                        <p>Clean city initiatives for better, pollution-free urban life.</p>
                    </div>
                    <!-- Item 6 -->
                    <div class="activity-card reveal-up delay-1">
                        <div class="card-icon"><i class="fa-solid fa-recycle"></i></div>
                        <h3>Waste Recycling</h3>
                        <p>Effective waste removal and management systems.</p>
                    </div>
                    <!-- Item 7 -->
                    <div class="activity-card reveal-up delay-2">
                        <div class="card-icon"><i class="fa-solid fa-cloud-sun-rain"></i></div>
                        <h3>Climate Change</h3>
                        <p>Disaster management and climate resilience building.</p>
                    </div>
                    <!-- Item 8 -->
                    <div class="activity-card reveal-up delay-3">
                        <div class="card-icon"><i class="fa-solid fa-faucet-drip"></i></div>
                        <h3>Water & Sanitation</h3>
                        <p>River development and clean drinking water access.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ONGOING PROJECTS -->
        <section id="projects" class="projects-section pt-120 pb-120">
            <div class="container">
                <div class="section-header text-center">
                    <span class="section-subtitle reveal-up">What We Are Doing Now</span>
                    <h2 class="section-title reveal-up">Our Ongoing Projects</h2>
                </div>
                <div class="row mt-50">
                    <div class="col-4 reveal-up">
                        <div class="panel-img text-center">
                            <!-- Fixed to perfectly equal 3/2 aspect ratio rectangle -->
                            <img src="assets/downloaded img/slide_img1.jpeg" alt="Tree Plant"
                                class="premium-rounded-img" style="width: 100%; aspect-ratio: 3/2; object-fit: cover;">
                            <h3 class="mt-20">Tree Plant</h3>
                        </div>
                    </div>
                    <div class="col-4 reveal-up delay-1">
                        <div class="panel-img text-center">
                            <!-- Fixed to perfectly equal 3/2 aspect ratio rectangle -->
                            <img src="assets/downloaded img/animal.jpeg" alt="Animal Care" class="premium-rounded-img"
                                style="width: 100%; aspect-ratio: 3/2; object-fit: cover;">
                            <h3 class="mt-20">Animal care</h3>
                        </div>
                    </div>
                    <div class="col-4 reveal-up delay-2">
                        <div class="panel-img text-center">
                            <!-- Fixed to perfectly equal 3/2 aspect ratio rectangle -->
                            <img src="assets/downloaded img/med.png" alt="Free Mega Medical Camp"
                                class="premium-rounded-img" style="width: 100%; aspect-ratio: 3/2; object-fit: cover;">
                            <h3 class="mt-20">Free mega medical camp</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PHASE 5.5: LEADERSHIP / OUR EXECUTIVE TEAM -->
        <section id="executive-team" class="leadership-section pt-120 pb-120">
            <div class="container">
                <div class="section-header text-center">
                    <span class="section-subtitle reveal-up">Leadership</span>
                    <h2 class="section-title reveal-up">Our Executive Team</h2>
                </div>

                <div class="team-carousel mt-50 reveal-up">
                    <div class="team-slides-wrapper">
                        <!-- Member 1 -->
                        <div class="team-slide active">
                            <div class="row align-center">
                                <div class="col-6 panel-img">
                                    <img src="assets/downloaded img/precident.jpeg" alt="General Secretary"
                                        class="premium-rounded-img" style="object-fit: contain; background: #fff;">
                                </div>
                                <div class="col-6 panel-text pl-50">
                                    <h2 class="leader-name">Dr Muhit A Rana</h2>
                                    <h4 class="leader-designation">General Secretary</h4>
                                    <h5 class="leader-designation">Team Bangladesh</h5>
                                    <p class="section-desc">Organizing the core operations of Team Bangladesh, ensuring
                                        that our
                                        environmental and social policies translate into actionable community goals.</p>
                                    <div class="leader-socials">
                                        <a href="#" title="YouTube"><i class="fa-brands fa-youtube"></i></a>
                                        <a href="https://www.facebook.com/muhitrana" target="_blank" title="Facebook"><i
                                                class="fa-brands fa-facebook-f"></i></a>
                                        <a href="#" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
                                        <a href="#" title="X (Twitter)"><i class="fa-brands fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Member 2 -->
                        <div class="team-slide">
                            <div class="row align-center">
                                <div class="col-6 panel-img">
                                    <img src="assets/downloaded img/aruni.jpeg" alt="Vice President"
                                        class="premium-rounded-img">
                                </div>
                                <div class="col-6 panel-text pl-50">
                                    <h2 class="leader-name">Salima Talukder Aruni</h2>
                                    <h4 class="leader-designation">Vice-president</h4>
                                    <h5 class="leader-designation">Team Bangladesh</h5>
                                    <p class="section-desc">Passionate about sustainability, social progress, and
                                        helping communities
                                        adapt to a better lifestyle through innovative programs and grassroots
                                        engagement.</p>
                                    <div class="leader-socials">
                                        <a href="#" title="YouTube"><i class="fa-brands fa-youtube"></i></a>
                                        <a href="https://www.facebook.com/61581136721878/photos" target="_blank"
                                            title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                                        <a href="#" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
                                        <a href="#" title="X (Twitter)"><i class="fa-brands fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Member 3 -->
                        <div class="team-slide">
                            <div class="row align-center">
                                <div class="col-6 panel-img">
                                    <img src="assets/downloaded img/tblogo.png" alt="Member" class="premium-rounded-img"
                                        style="object-fit: contain; background: #fff;">
                                </div>
                                <div class="col-6 panel-text pl-50">
                                    <h2 class="leader-name">NAHREEN ASGHAR</h2>
                                    <h4 class="leader-designation">Member</h4>
                                    <h5 class="leader-designation">Team Bangladesh</h5>
                                    <p class="section-desc">Actively contributing to the strategic and humanitarian
                                        operations of Team Bangladesh, driving progressive change within the community.
                                    </p>
                                    <div class="leader-socials">
                                        <a href="#" title="YouTube"><i class="fa-brands fa-youtube"></i></a>
                                        <a href="#" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                                        <a href="#" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
                                        <a href="#" title="X (Twitter)"><i class="fa-brands fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Member 4 -->
                        <div class="team-slide">
                            <div class="row align-center">
                                <div class="col-6 panel-img">
                                    <img src="assets/downloaded img/tblogo.png" alt="Member" class="premium-rounded-img"
                                        style="object-fit: contain; background: #fff;">
                                </div>
                                <div class="col-6 panel-text pl-50">
                                    <h2 class="leader-name">Barister Rakeen</h2>
                                    <h4 class="leader-designation">Member</h4>
                                    <h5 class="leader-designation">Team Bangladesh</h5>
                                    <p class="section-desc">Providing crucial guidance and leadership to ensure that
                                        Team Bangladesh successfully meets its environmental and legal developmental
                                        targets.</p>
                                    <div class="leader-socials">
                                        <a href="#" title="YouTube"><i class="fa-brands fa-youtube"></i></a>
                                        <a href="#" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                                        <a href="#" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
                                        <a href="#" title="X (Twitter)"><i class="fa-brands fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Navigation Arrow -->
                    <button class="team-prev-btn" onclick="prevTeamSlide()" style="left: -40px; position: absolute; top: 50%; transform: translateY(-50%); background: none; border: none; font-size: 24px; color: var(--color-primary); cursor: pointer;">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button class="team-next-btn" onclick="nextTeamSlide()">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                    <!-- Slide Dots -->
                    <div class="team-dots">
                        <span class="team-dot active" onclick="goToTeamSlide(0)"></span>
                        <span class="team-dot" onclick="goToTeamSlide(1)"></span>
                        <span class="team-dot" onclick="goToTeamSlide(2)"></span>
                        <span class="team-dot" onclick="goToTeamSlide(3)"></span>
                    </div>
                </div>
            </div>
        </section>

        <!-- PHASE 7: GUIDELINES & POLICIES -->
        <section id="guidelines" class="guidelines-section bg-dark pt-120 pb-120">
            <div class="container text-light">
                <div class="section-header text-center">
                    <span class="section-subtitle reveal-up">Group Guidelines</span>
                    <h2 class="section-title text-white reveal-up">Objectives & Policies</h2>
                    <p class="mt-20 reveal-up">This group coordinates policy-making, planning, and implementation among
                        honorable members.</p>
                </div>

                <div class="row mt-50">
                    <div class="col-6 reveal-left">
                        <div class="policy-card">
                            <div class="policy-icon"><i class="fa-solid fa-bullseye"></i></div>
                            <h3>Group Objective</h3>
                            <p>This group is formed to make the coordination, policy-making, planning, and
                                implementation of activities more dynamic and fruitful among the honorable members of
                                various levels of this organization.</p>
                        </div>
                    </div>
                    <div class="col-6 reveal-right">
                        <div class="policy-card">
                            <div class="policy-icon"><i class="fa-solid fa-list-check"></i></div>
                            <h3>Organization Policies</h3>
                            <ul class="policy-list">
                                <li><i class="fa-solid fa-check"></i> Share only matters related to this organization.
                                </li>
                                <li><i class="fa-solid fa-check"></i> Maintain professionalism and mutual respect.</li>
                                <li><i class="fa-solid fa-check"></i> Propose constructive feedback and new initiatives.
                                </li>
                                <li><i class="fa-solid fa-xmark text-danger"></i> Refrain from sharing misleading or
                                    irrelevant info.</li>
                                <li class="text-warning"><i class="fa-solid fa-triangle-exclamation"></i> Group calls
                                    without the permission of the Honorable Chairman are strictly discouraged.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- TESTIMONIALS -->
        <section id="testimonials" class="testimonials-section bg-light pt-120 pb-120">
            <div class="container">
                <div class="section-header text-center">
                    <span class="section-subtitle reveal-up">What People Say</span>
                    <h2 class="section-title reveal-up">Testimonial</h2>
                </div>
                <div class="testimonial-carousel mt-50 reveal-up liquid-glass-carousel">
                    <div class="testimonial-slides-wrapper">
                        <div class="testimonial-slide active">
                            <div class="testimonial-card frosted-glass-card">
                                <div class="testimonial-icon"><i class="fa-solid fa-quote-left"></i></div>
                                <p class="testimonial-text">"The dedication of Team Bangladesh towards educational
                                    development is inspiring. My students are now actively participating in campaigns thanks
                                    to their interactive workshops."</p>
                                <div class="testimonial-author">
                                    <h3>Nusrat Jahan</h3>
                                    <span>School Teacher</span>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-slide">
                            <div class="testimonial-card frosted-glass-card">
                                <div class="testimonial-icon"><i class="fa-solid fa-quote-left"></i></div>
                                <p class="testimonial-text">"As an academic, I deeply appreciate the empirical approach Team Bangladesh takes towards climate change. Their models and community outreach are exceptional."</p>
                                <div class="testimonial-author">
                                    <h3>Dr. Hasan Ali</h3>
                                    <span>Professor</span>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-slide">
                            <div class="testimonial-card frosted-glass-card">
                                <div class="testimonial-icon"><i class="fa-solid fa-quote-left"></i></div>
                                <p class="testimonial-text">"Team Bangladesh has fundamentally transformed our infrastructure. Their green city initiative shows great engineering foresight."</p>
                                <div class="testimonial-author">
                                    <h3>Rafiqul Islam</h3>
                                    <span>Civil Engineer</span>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-slide">
                            <div class="testimonial-card frosted-glass-card">
                                <div class="testimonial-icon"><i class="fa-solid fa-quote-left"></i></div>
                                <p class="testimonial-text">"Their mega medical camps have provided essential healthcare to thousands. I am proud to volunteer my services with such a dedicated team."</p>
                                <div class="testimonial-author">
                                    <h3>Dr. Sarah Ahmed</h3>
                                    <span>Medical Doctor</span>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-slide">
                            <div class="testimonial-card frosted-glass-card">
                                <div class="testimonial-icon"><i class="fa-solid fa-quote-left"></i></div>
                                <p class="testimonial-text">"The administrative coordination of Team Bangladesh makes my job easier. They handle operations smoothly and align with national developmental goals."</p>
                                <div class="testimonial-author">
                                    <h3>Tariq Mahmud</h3>
                                    <span>Government Officer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-dots text-center mt-30">
                        <span class="testimonial-dot active" onclick="goToTestimonialSlide(0)"></span>
                        <span class="testimonial-dot" onclick="goToTestimonialSlide(1)"></span>
                        <span class="testimonial-dot" onclick="goToTestimonialSlide(2)"></span>
                        <span class="testimonial-dot" onclick="goToTestimonialSlide(3)"></span>
                        <span class="testimonial-dot" onclick="goToTestimonialSlide(4)"></span>
                    </div>
                </div>
            </div>
        </section>

        <!-- PHASE 8: NEWSLETTER CTA -->
        <section class="cta-section pt-80 pb-80">
            <div class="container">
                <div class="cta-inner reveal-up">
                    <div class="cta-content">
                        <h2>Let’s build a greener, cleaner and healthier Bangladesh - together.</h2>
                    </div>
                    <div class="cta-action">
                        <a href="#" class="btn btn-dark btn-double-line">
                            <span class="cta-line-top">Join Us Today</span>
                            <span class="cta-line-bottom">VOLUNTEER</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </main>
  <!-- PHASE 10: NEWSLETTER POPUP -->
    <div class="newsletter-popup">
        <button class="close-popup"><i class="fa-solid fa-xmark"></i></button>
        <div class="popup-bg" style="background-image: url('assets/downloaded img/slide_img3.jpeg');"></div>
        <div class="popup-content">
            <span class="handwriting">For causes that</span>
            <h2>Really Matter</h2>
            <form class="popup-form" onsubmit="event.preventDefault();">
                <input type="email" placeholder="Email" required>
                <button type="submit" class="btn-white">SIGN UP</button>
            </form>
            <label class="do-not-show">
                <input type="checkbox"> Do not show this pop-up again
            </label>
        </div>
    </div>

    <!-- CONTACT US POPUP -->
    <div id="contact-popup" class="contact-popup-wrapper">
        <div class="contact-popup-content">
            <button class="close-contact-popup"><i class="fa-solid fa-xmark"></i></button>
            <h2 class="contact-title">Contact Us</h2>
            <div class="contact-details">
                <div class="contact-item">
                    <i class="fa-solid fa-phone"></i>
                    <div>
                        <h4>Hotline</h4>
                        <p>+880 1911-480021</p>
                    </div>
                </div>
`;

function Home() {
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
    <SiteLayout noPadding>
      <div dangerouslySetInnerHTML={{ __html: landingHtml }} />
    </SiteLayout>
  )
}
export default Home;
