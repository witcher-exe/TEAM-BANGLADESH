const fs = require('fs');
const html = fs.readFileSync('../index.html', 'utf8');

// Extract Preloader
const preloaderMatch = html.match(/<!-- PHASE 1: PRELOADER.*?<\/div>\s*<\/div>/s);
// Extract Main
const mainMatch = html.match(/<main>.*?<\/main>/s);
// Extract Popups
const popupsMatch = html.match(/<!-- PHASE 10: NEWSLETTER POPUP.*?<\/div>\s*<\/div>\s*<!-- CONTACT US POPUP.*?<\/div>\s*<\/div>/s);

let js = fs.readFileSync('../js/main.js', 'utf8');
// remove DOMContentLoaded wrapper
js = js.replace(/document\.addEventListener\('DOMContentLoaded',\s*\(\)\s*=>\s*\{/s, '');
js = js.substring(0, js.lastIndexOf('}'));

const tsxContent = `
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { SiteLayout } from '@/components/site/SiteLayout'
import '../original-style.css'

export const Route = createFileRoute('/')({
  component: Home,
})

const landingHtml = \`
  ${preloaderMatch[0]}
  ${mainMatch[0]}
  ${popupsMatch[0]}
\`;

function Home() {
  useEffect(() => {
    ${js}
  }, []);

  return (
    <SiteLayout noPadding>
      <div dangerouslySetInnerHTML={{ __html: landingHtml }} />
    </SiteLayout>
  )
}
export default Home;
`;

fs.writeFileSync('src/routes/index.tsx', tsxContent);
console.log('Successfully generated index.tsx');
