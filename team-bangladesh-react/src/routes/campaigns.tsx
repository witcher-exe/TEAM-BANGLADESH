import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Reveal } from "@/components/site/SiteLayout";
import { motion } from "framer-motion";
import { TreePine, PawPrint, BookOpen, Stethoscope, Recycle, Droplets, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/campaigns")({
  head: () => ({
    meta: [
      { title: "Our Campaigns | Team Bangladesh" },
      { name: "description", content: "Green cities, animal care, rural education and free medical camps — the campaigns driving Bangladesh forward." },
    ],
  }),
  component: Campaigns,
});

const CAMPAIGNS = [
  {
    n: "01", title: "Green City — Clean City",
    desc: "Massive waste recycling, urban tree plantations and rooftop garden incentives across all eight divisions.",
    img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=900&q=80",
    icon: TreePine,
    stats: [{ k: "120K", v: "trees planted" }, { k: "48", v: "wards greened" }],
    span: "",
  },
  {
    n: "02", title: "Street Animal Care",
    desc: "Rescue operations, neutering, daily feeding routes and 24-hr vet hotlines for stray populations.",
    img: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=900&q=80",
    icon: PawPrint,
    stats: [{ k: "5.4K", v: "rescued" }, { k: "12", v: "city zones" }],
    span: "",
  },
  {
    n: "03", title: "Rural Education",
    desc: "Books, scholarships, solar lighting and digital labs for under-resourced village schools.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80",
    icon: BookOpen,
    stats: [{ k: "230", v: "schools" }, { k: "8.5K", v: "scholarships" }],
    span: "",
  },
  {
    n: "04", title: "Free Mega Medical Camps",
    desc: "Specialist doctors, free diagnostics and medicines deployed monthly to remote upazilas.",
    img: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=900&q=80",
    icon: Stethoscope,
    stats: [{ k: "62", v: "camps held" }, { k: "44K", v: "patients" }],
    span: "",
  },
];

function Campaigns() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="What we're driving"
        title="Our Campaigns"
        subtitle="Four flagship initiatives, hundreds of micro-projects, and one mission: a Bangladesh that grows without losing its soul."
        image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80"
        stats={[
          { label: "Active Campaigns", value: "4" },
          { label: "Sub-projects", value: "240+" },
          { label: "Lives Touched", value: "1.2M" },
          { label: "Districts", value: "64" },
        ]}
      />
      {/* Cards */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid lg:grid-cols-2 gap-6">
          {CAMPAIGNS.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.08}>
              <article className={`group relative overflow-hidden rounded-[2rem] bg-card border border-border h-[480px] ${c.span}`}>
                <img src={c.img} alt={c.title} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                <div className="relative h-full p-7 flex flex-col justify-between text-white">
                  <div className="flex items-start justify-between">
                    <span className="h-12 w-12 rounded-2xl gradient-warm flex items-center justify-center text-ink shadow-lg">
                      <c.icon className="h-6 w-6" />
                    </span>
                    <span className="text-5xl font-bold opacity-30">{c.n}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">{c.title}</h3>
                    <p className="mt-2 text-white/75 text-sm max-w-md">{c.desc}</p>
                    <div className="mt-5 flex gap-5 border-t border-white/15 pt-4">
                      {c.stats.map((s) => (
                        <div key={s.v}>
                          <div className="text-xl font-bold text-amber-glow">{s.k}</div>
                          <div className="text-[11px] text-white/60 uppercase tracking-wider">{s.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      {/* Process */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="script text-leaf text-lg">How a campaign comes to life</div>
              <h2 className="text-4xl lg:text-5xl font-bold mt-2">From a meeting to a movement.</h2>
            </div>
          </Reveal>
          <div className="mt-16 grid lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-leaf via-amber-glow to-leaf" />
            {[
              { t: "Listen", d: "Field surveys with local committees identify urgent needs.", icon: Droplets },
              { t: "Plan", d: "Resources, volunteers and timelines are mapped per district.", icon: Recycle },
              { t: "Act", d: "Mega-events, daily ops and partner orgs deploy on the ground.", icon: TreePine },
              { t: "Measure", d: "Public dashboards track outcomes & accountability.", icon: BookOpen },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.1}>
                <div className="text-center relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    className="mx-auto h-20 w-20 rounded-2xl gradient-leaf text-white flex items-center justify-center shadow-xl shadow-leaf/30 relative z-10"
                  >
                    <s.icon className="h-8 w-8" />
                  </motion.div>
                  <div className="mt-5 text-xs font-semibold text-amber-glow uppercase tracking-wider">Step {i + 1}</div>
                  <h3 className="text-xl font-bold mt-1">{s.t}</h3>
                  <p className="text-sm text-muted-foreground mt-2 max-w-[14rem] mx-auto">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <div className="rounded-[2rem] bg-ink text-white p-10 lg:p-14 grid lg:grid-cols-2 gap-8 items-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-leaf/30 blob" />
            <div className="absolute bottom-0 -left-10 h-60 w-60 rounded-full bg-amber-glow/20 blob" />
            <div className="relative">
              <div className="script text-amber-glow text-lg">Want to lead?</div>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 text-white text-balance">Propose a campaign for your district.</h2>
              <p className="mt-3 text-white/70 max-w-md">If you see a problem in your neighbourhood, the committees will help you turn it into a campaign.</p>
            </div>
            <div className="relative flex flex-wrap gap-3 lg:justify-end">
              <a href="#" className="inline-flex items-center gap-2 rounded-full gradient-warm px-6 py-3 font-semibold text-ink">Submit a proposal <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
