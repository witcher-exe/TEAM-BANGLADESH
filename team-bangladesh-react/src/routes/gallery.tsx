import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Reveal } from "@/components/site/SiteLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, Images } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery | Team Bangladesh" },
      { name: "description", content: "Moments from our tree plantations, medical camps, animal rescues, and community drives across Bangladesh." },
    ],
  }),
  component: Gallery,
});

const CATEGORIES = ["All", "Tree Plantation", "Medical Camp", "Animal Care", "Education", "Clean City"];

const PHOTOS = [
  { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80", cat: "Tree Plantation", title: "National Tree Drive 2025", loc: "Dhaka" },
  { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80", cat: "Medical Camp", title: "Free Medical Camp", loc: "Rangpur" },
  { src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80", cat: "Animal Care", title: "Street Dog Rescue", loc: "Chittagong" },
  { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80", cat: "Education", title: "School Book Distribution", loc: "Sylhet" },
  { src: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&q=80", cat: "Clean City", title: "City Cleanup Drive", loc: "Dhaka" },
  { src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80", cat: "Tree Plantation", title: "Mangrove Restoration", loc: "Khulna" },
  { src: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&q=80", cat: "Medical Camp", title: "Eye Care Camp", loc: "Barisal" },
  { src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80", cat: "Education", title: "Library Launch", loc: "Mymensingh" },
  { src: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800&q=80", cat: "Tree Plantation", title: "Coastal Greenery", loc: "Cox's Bazar" },
  { src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80", cat: "Medical Camp", title: "Flood Relief Medics", loc: "Sunamganj" },
  { src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80", cat: "Clean City", title: "River Cleanup", loc: "Narayanganj" },
  { src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80", cat: "Animal Care", title: "Stray Cat Care", loc: "Rajshahi" },
];

function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<typeof PHOTOS[0] | null>(null);

  const filtered = active === "All" ? PHOTOS : PHOTOS.filter(p => p.cat === active);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our moments"
        title="Photo Gallery"
        subtitle="Every image tells the story of Bangladesh's volunteers working tirelessly for a greener, healthier, more compassionate nation."
        image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80"
        stats={[
          { label: "Albums", value: "48+" },
          { label: "Photos", value: "1,200+" },
          { label: "Campaigns", value: "60+" },
          { label: "Districts", value: "64" },
        ]}
      />

      {/* Filter Tabs */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <Reveal>
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map(cat => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  active === cat
                    ? "gradient-leaf text-white shadow-lg shadow-leaf/30"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </Reveal>

        {/* Masonry Grid */}
        <motion.div layout className="mt-10 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((photo, i) => (
              <motion.div
                key={photo.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setLightbox(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-4 text-white">
                    <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">{photo.cat}</p>
                    <p className="text-sm font-bold mt-0.5">{photo.title}</p>
                    <p className="text-xs text-white/70">{photo.loc}</p>
                  </div>
                  <ZoomIn className="absolute top-3 right-3 h-5 w-5 text-white/80" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.src.replace("w=800", "w=1400")} alt={lightbox.title} className="w-full h-auto max-h-[75vh] object-contain bg-ink" />
              <div className="bg-ink p-5 flex items-start justify-between">
                <div>
                  <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">{lightbox.cat}</span>
                  <h3 className="text-white text-xl font-bold mt-1">{lightbox.title}</h3>
                  <p className="text-white/60 text-sm">{lightbox.loc}</p>
                </div>
                <button onClick={() => setLightbox(null)} className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <Reveal>
          <div className="rounded-[2rem] gradient-leaf p-10 text-center text-white">
            <Images className="h-12 w-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-bold">Share Your Moments</h2>
            <p className="mt-3 text-white/80 max-w-lg mx-auto">Participated in a campaign? Send us your photos and become part of our growing visual story.</p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 bg-white text-leaf font-semibold rounded-full px-8 py-3 hover:bg-amber-50 transition-colors">
              Submit Photos
            </a>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
