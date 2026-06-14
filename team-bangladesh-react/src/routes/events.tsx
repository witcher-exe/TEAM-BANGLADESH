import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Reveal } from "@/components/site/SiteLayout";
import { motion } from "framer-motion";
import { MapPin, Users, CheckCircle2, Clock, Sparkles } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events | Team Bangladesh" },
      { name: "description", content: "Ongoing, upcoming and past events — find one near you and get involved." },
    ],
  }),
  component: Events,
});

type Ev = { title: string; date: string; loc: string; vol: string; img: string; desc: string };
const ONGOING: Ev[] = [
  { title: "National Tree Plantation Drive", date: "Currently Active", loc: "All 64 Districts", vol: "2,400 volunteers", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&q=80", desc: "Planting 10,000+ native saplings along Dhaka's boundary roads." },
  { title: "City-wide Plastic Cleanup", date: "Weekends, Live", loc: "Dhaka, Chittagong", vol: "950 volunteers", img: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=900&q=80", desc: "Recycling 4 tonnes of plastic with local waste collectives." },
];
const UPCOMING: Ev[] = [
  { title: "Winter Medical Mega-Camp", date: "Next Month", loc: "Rangpur Division", vol: "Recruiting now", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80", desc: "Free checkups, medicines and blanket distribution for 8,000+." },
  { title: "School Library Build-out", date: "January 2026", loc: "Sylhet rural", vol: "Recruiting now", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=80", desc: "Building 12 mini-libraries with 5,000 donated books." },
  { title: "Coastal Mangrove Initiative", date: "February 2026", loc: "Khulna coast", vol: "Recruiting", img: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=900&q=80", desc: "Replanting mangrove belts to defend against cyclones." },
];
const PAST: Ev[] = [
  { title: "Stray Animal Vaccination", date: "Completed", loc: "Dhaka Metro", vol: "300 volunteers", img: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=900&q=80", desc: "Vaccinated 500+ stray dogs & cats across 12 zones." },
  { title: "Flood Relief — Sunamganj", date: "Completed", loc: "Sylhet", vol: "1,200 volunteers", img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=900&q=80", desc: "Distributed dry food & water to 22,000 displaced families." },
];

function Section({ label, items, color, accent }: { label: string; items: Ev[]; color: string; accent: "leaf" | "amber" | "ink" }) {
  const chipColor = accent === "amber" ? "gradient-warm text-ink" : accent === "leaf" ? "gradient-leaf text-white" : "bg-ink text-white";
  const StatusIcon = accent === "amber" ? Sparkles : accent === "leaf" ? Clock : CheckCircle2;
  return (
    <section className={`py-20 ${color}`}>
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <div className={`inline-flex items-center gap-2 rounded-full ${chipColor} px-5 py-2 text-sm font-semibold uppercase tracking-wider`}>
            <StatusIcon className="h-4 w-4" />
            {label}
          </div>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <motion.article whileHover={{ y: -6 }} className="group bg-card rounded-3xl border border-border overflow-hidden h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={e.img} alt={e.title} className={`h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 ${accent === "ink" ? "grayscale" : ""}`} />
                  <div className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold ${chipColor}`}>{e.date}</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold">{e.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 flex-1">{e.desc}</p>
                  <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-muted-foreground border-t border-border pt-4">
                    <div className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-leaf" /> {e.loc}</div>
                    <div className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-leaf" /> {e.vol}</div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get involved"
        title="Events"
        subtitle="From neighborhood cleanups to nationwide drives — find an event near you and lend your hands, voice or time."
        image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
        stats={[
          { label: "This Month", value: "12" },
          { label: "Upcoming", value: "8" },
          { label: "Completed '25", value: "146" },
          { label: "Volunteer Hrs", value: "92K" },
        ]}
      />
      {/* Bar chart */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-6 lg:p-10 grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
            <div>
              <div className="script text-leaf text-lg">2026 outlook</div>
              <h2 className="text-3xl font-bold mt-2">A year on the ground.</h2>
              <p className="text-muted-foreground mt-2 text-sm">Monthly volunteer-hour intensity, projected.</p>
            </div>
            <div className="flex gap-2 items-end h-32">
              {[40, 55, 70, 65, 80, 95, 75, 60, 88, 92, 70, 50].map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${v}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.6, ease: "easeOut" }}
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-leaf to-amber-glow relative group"
                >
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition">{v}%</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
      <Section label="Ongoing" items={ONGOING} color="" accent="amber" />
      <Section label="Upcoming" items={UPCOMING} color="bg-muted/40" accent="leaf" />
      <Section label="Previous" items={PAST} color="" accent="ink" />
    </SiteLayout>
  );
}
