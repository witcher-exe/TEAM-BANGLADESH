import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Reveal } from "@/components/site/SiteLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Play, X, Eye, Film } from "lucide-react";

export const Route = createFileRoute("/video-gallery")({
  head: () => ({
    meta: [
      { title: "Video Gallery | Team Bangladesh" },
      { name: "description", content: "Watch campaign highlights, documentaries and ground-level stories from Team Bangladesh." },
    ],
  }),
  component: VideoGallery,
});

const CATS = ["All", "Campaigns", "Events", "Documentaries", "Testimonials"];

const VIDEOS = [
  { id: "dQw4w9WgXcQ", cat: "Campaigns", title: "National Tree Plantation Drive 2025", views: "12K", dur: "4:32", thumb: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80" },
  { id: "dQw4w9WgXcQ", cat: "Events", title: "Free Mega Medical Camp — Rangpur", views: "8.4K", dur: "6:15", thumb: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80" },
  { id: "dQw4w9WgXcQ", cat: "Documentaries", title: "Street Animals of Dhaka", views: "22K", dur: "18:40", thumb: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80" },
  { id: "dQw4w9WgXcQ", cat: "Testimonials", title: "Voices from the Field", views: "5.1K", dur: "3:20", thumb: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80" },
  { id: "dQw4w9WgXcQ", cat: "Campaigns", title: "Green City Clean City — Dhaka", views: "9.7K", dur: "5:08", thumb: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=600&q=80" },
  { id: "dQw4w9WgXcQ", cat: "Events", title: "Annual Volunteer Summit 2025", views: "14K", dur: "11:22", thumb: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80" },
  { id: "dQw4w9WgXcQ", cat: "Documentaries", title: "Rainwater Harvesting in Rural BD", views: "31K", dur: "24:05", thumb: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600&q=80" },
  { id: "dQw4w9WgXcQ", cat: "Testimonials", title: "Dr. Muhit A Rana — Education Vision", views: "18K", dur: "7:44", thumb: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80" },
  { id: "dQw4w9WgXcQ", cat: "Campaigns", title: "Solar Energy for Villages", views: "6.2K", dur: "9:11", thumb: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&q=80" },
];

type Video = typeof VIDEOS[0];

function VideoGallery() {
  const [active, setActive] = useState("All");
  const [playing, setPlaying] = useState<Video | null>(null);
  const filtered = active === "All" ? VIDEOS : VIDEOS.filter(v => v.cat === active);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Watch & learn"
        title="Video Gallery"
        subtitle="Documentaries, campaign highlights and ground-level stories — the real Bangladesh, filmed by the people who live it."
        image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
        stats={[
          { label: "Total Videos", value: "200+" },
          { label: "Total Views", value: "500K+" },
          { label: "Documentaries", value: "28" },
          { label: "Campaigns", value: "60+" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-5 py-12">
        <Reveal>
          <div className="flex flex-wrap gap-3 justify-center">
            {CATS.map(cat => (
              <motion.button key={cat} whileTap={{ scale: 0.95 }} onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${active === cat ? "gradient-leaf text-white shadow-lg" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                {cat}
              </motion.button>
            ))}
          </div>
        </Reveal>
        <motion.div layout className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((video, i) => (
              <motion.div key={video.title} layout initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl hover:shadow-leaf/10 transition-shadow duration-300"
                onClick={() => setPlaying(video)}>
                <div className="aspect-video relative overflow-hidden">
                  <img src={video.thumb} alt={video.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-ink/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-14 w-14 rounded-full gradient-warm flex items-center justify-center shadow-xl">
                      <Play className="h-6 w-6 text-ink fill-ink ml-1" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs rounded px-1.5 py-0.5 font-mono">{video.dur}</span>
                  <span className="absolute top-2 left-2 rounded-full bg-black/60 text-white text-[10px] px-2 py-0.5 font-semibold uppercase tracking-wide">{video.cat}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm leading-snug line-clamp-2">{video.title}</h3>
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    <Eye className="h-3 w-3" /> {video.views} views
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {playing && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setPlaying(null)}>
            <motion.div initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.85 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-ink"
              onClick={e => e.stopPropagation()}>
              <div className="aspect-video w-full bg-black">
                <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${playing.id}?autoplay=1`}
                  title={playing.title} allow="autoplay; encrypted-media" allowFullScreen />
              </div>
              <div className="p-5 flex items-start justify-between">
                <div>
                  <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">{playing.cat}</span>
                  <h3 className="text-white text-xl font-bold mt-1">{playing.title}</h3>
                </div>
                <button onClick={() => setPlaying(null)} className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <Reveal>
          <div className="rounded-[2rem] bg-ink text-white p-10 text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-60 w-60 rounded-full bg-leaf/20 blob" />
            <Film className="relative h-12 w-12 mx-auto mb-4 text-amber-400" />
            <h2 className="relative text-3xl font-bold">Subscribe & Stay Updated</h2>
            <p className="relative mt-3 text-white/70 max-w-md mx-auto">Get the latest campaign videos, docs and volunteer stories on our YouTube channel.</p>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"
              className="relative mt-6 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full px-8 py-3 transition-colors">
              Subscribe on YouTube
            </a>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
