const fs = require('fs');

const html = fs.readFileSync('../index.html', 'utf8');

// Extract Header
const headerMatch = html.match(/<header class="site-header">.*?<\/header>/s);
// Extract Footer
const footerMatch = html.match(/<footer class="site-footer">.*?<\/footer>/s);

let js = fs.readFileSync('../js/main.js', 'utf8');
// remove DOMContentLoaded
js = js.replace(/document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{/s, '');
js = js.substring(0, js.lastIndexOf('}'));

const tsxContent = `// @ts-nocheck
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from '@tanstack/react-router';
import '../original-style.css';

const headerHtml = \`${headerMatch[0]}\`;
const footerHtml = \`${footerMatch[0]}\`;

export function Navbar() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Intercept a hrefs to soft-navigate
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
    document.querySelector('.site-header')?.addEventListener('click', handleClick);
    return () => document.querySelector('.site-header')?.removeEventListener('click', handleClick);
  }, [navigate]);

  return <div dangerouslySetInnerHTML={{ __html: headerHtml }} />;
}

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
    document.querySelector('.site-footer')?.addEventListener('click', handleClick);
    return () => document.querySelector('.site-footer')?.removeEventListener('click', handleClick);
  }, [navigate]);

  return <div dangerouslySetInnerHTML={{ __html: footerHtml }} />;
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
    ${js}
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

export function PageHero({ title, subtitle, image = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80" }) {
  return (
    <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-leaf-deep/60" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 text-center">
        <Reveal>
          {subtitle && <div className="inline-block font-rock-salt text-amber-glow text-lg mb-4">{subtitle}</div>}
          <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">{title}</h1>
        </Reveal>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/components/site/SiteLayout.tsx', tsxContent);
console.log('Successfully generated SiteLayout.tsx');
