import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Reveal } from "@/components/site/SiteLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Clock, User, Tag, ArrowRight, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Team Bangladesh" },
      { name: "description", content: "Insights, field stories, environmental guides and news from Team Bangladesh's volunteers and experts." },
    ],
  }),
  component: Blog,
});

const TAGS = ["All", "Environment", "Health", "Education", "Animal Care", "Inspiration"];

const POSTS = [
  {
    tag: "Environment", title: "Why Bangladesh Needs 10 Million Trees — Now", author: "Dr. Muhit A Rana", date: "June 15, 2026",
    excerpt: "Climate scientists have warned that Bangladesh's green cover has shrunk to a critical threshold. Here's what we can do about it.",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=700&q=80", read: "5 min read", featured: true
  },
  {
    tag: "Health", title: "Free Medical Camps: How We Reach 10,000 Patients a Month", author: "Nazmul Hossain", date: "June 10, 2026",
    excerpt: "Our logistics team breaks down the system behind deploying specialist doctors to 64 districts simultaneously.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80", read: "7 min read", featured: false
  },
  {
    tag: "Animal Care", title: "The Hidden Crisis: 3 Million Stray Animals in Bangladesh", author: "Salima Talukder Aruni", date: "June 5, 2026",
    excerpt: "An honest look at the scale of the problem and the compassionate solutions Team Bangladesh is deploying every week.",
    img: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=700&q=80", read: "6 min read", featured: false
  },
  {
    tag: "Education", title: "Implicit Learning: The Radical Approach Changing Rural Schools", author: "Dr. Muhit A Rana", date: "May 28, 2026",
    excerpt: "Dr. Rana explains the science and methodology behind the education model that's showing remarkable results in village schools.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=80", read: "10 min read", featured: false
  },
  {
    tag: "Inspiration", title: "From Volunteer to District Leader: Rakin's Story", author: "Team Bangladesh", date: "May 20, 2026",
    excerpt: "How a 22-year-old university student became the organiser of one of our most successful district campaigns.",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=700&q=80", read: "4 min read", featured: false
  },
  {
    tag: "Environment", title: "Rainwater Harvesting 101: A Guide for Bangladeshi Households", author: "Nahreen Asghar", date: "May 15, 2026",
    excerpt: "Simple, affordable techniques that any household can use to collect and store rainwater safely for drinking.",
    img: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=700&q=80", read: "8 min read", featured: false
  },
];

const TAG_COLORS: Record<string, string> = {
  "Environment": "bg-green-100 text-green-700",
  "Health": "bg-blue-100 text-blue-700",
  "Animal Care": "bg-orange-100 text-orange-700",
  "Education": "bg-purple-100 text-purple-700",
  "Inspiration": "bg-pink-100 text-pink-700",
};

function Blog() {
  const [activeTag, setActiveTag] = useState("All");
  const featured = POSTS[0];
  const rest = POSTS.slice(1);
  const filtered = activeTag === "All" ? rest : rest.filter(p => p.tag === activeTag);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Stories & insights"
        title="Our Blog"
        subtitle="Field dispatches, expert analysis and inspiring volunteer stories — everything happening at Team Bangladesh."
        image="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80"
        stats={[
          { label: "Articles", value: "120+" },
          { label: "Authors", value: "18" },
          { label: "Topics", value: "12" },
          { label: "Readers", value: "45K+" },
        ]}
      />

      {/* Featured Post */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <Reveal>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-leaf" />
            <span className="font-semibold text-leaf text-sm uppercase tracking-wider">Featured Story</span>
          </div>
          <motion.article
            whileHover={{ y: -4 }}
            className="group grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-border bg-card shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
          >
            <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img src={featured.img} alt={featured.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold w-fit ${TAG_COLORS[featured.tag]}`}>{featured.tag}</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-4 leading-tight">{featured.title}</h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-4 mt-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> {featured.author}</span>
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featured.read}</span>
                <span>{featured.date}</span>
              </div>
              <div className="mt-6">
                <motion.a href="#" whileHover={{ x: 4 }} className="inline-flex items-center gap-2 text-leaf font-semibold text-sm">
                  Read Full Article <ArrowRight className="h-4 w-4" />
                </motion.a>
              </div>
            </div>
          </motion.article>
        </Reveal>
      </section>

      {/* Tag Filter */}
      <section className="mx-auto max-w-7xl px-5 pb-6">
        <Reveal>
          <div className="flex flex-wrap gap-3">
            {TAGS.map(t => (
              <motion.button key={t} whileTap={{ scale: 0.95 }} onClick={() => setActiveTag(t)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${activeTag === t ? "gradient-leaf text-white shadow-md" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                <Tag className="h-3 w-3" /> {t}
              </motion.button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Post Grid */}
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {filtered.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <motion.article whileHover={{ y: -6 }} className="group rounded-2xl overflow-hidden border border-border bg-card h-full flex flex-col cursor-pointer hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={post.img} alt={post.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold w-fit mb-3 ${TAG_COLORS[post.tag]}`}>{post.tag}</span>
                  <h3 className="font-bold text-lg leading-snug">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 flex-1 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-3 mt-5 text-xs text-muted-foreground border-t border-border pt-4">
                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.read}</span>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold">Get Stories in Your Inbox</h2>
            <p className="text-muted-foreground mt-3">Weekly field dispatches and volunteer highlights, delivered every Friday.</p>
            <div className="mt-8 flex gap-3 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 rounded-xl px-4 py-3 bg-card border border-border focus:outline-none focus:border-leaf text-sm transition-colors" />
              <motion.button whileTap={{ scale: 0.95 }} className="gradient-leaf text-white font-semibold rounded-xl px-6 py-3 whitespace-nowrap">
                Subscribe
              </motion.button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
