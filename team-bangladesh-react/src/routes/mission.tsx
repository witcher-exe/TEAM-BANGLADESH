import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero, Reveal } from "@/components/site/SiteLayout";
import { motion } from "framer-motion";
import { Eye, Target, Check, Leaf, Globe, Users, HeartHandshake, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "Our Mission & Vision | Team Bangladesh" },
      { name: "description", content: "A pollution-free, green, and radically developed Bangladesh — our mission and vision." },
      { property: "og:title", content: "Mission & Vision | Team Bangladesh" },
      { property: "og:description", content: "Our pledge to a sustainable, humane and empowered Bangladesh." },
    ],
  }),
  component: Mission,
});

const VALUES = [
  { icon: Leaf, t: "Sustainability", d: "Ecological balance in every initiative." },
  { icon: Globe, t: "Nation-first", d: "From metropolis to remote upazila." },
  { icon: Users, t: "Volunteer-led", d: "Powered by 10,000+ everyday citizens." },
  { icon: HeartHandshake, t: "Humanity", d: "Dignity for people and animals." },
];

function Mission() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Because Bangladesh First"
        title="Our Mission & Vision"
        subtitle="A pollution-free, green and radically developed Bangladesh where urban and rural spaces coexist with nature — for every generation to come."
        image="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1920&q=80"
        stats={[
          { label: "Districts", value: "64" },
          { label: "Volunteers", value: "10K+" },
          { label: "Trees Planted", value: "120K" },
          { label: "Animals Saved", value: "5,400" },
        ]}
      />
      {/* Vision */}
      <section className="mx-auto max-w-7xl px-5 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=900&q=80" alt="A greener Bangladesh" className="h-full w-full object-cover" />
            </div>
            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 h-36 w-36 rounded-full gradient-leaf text-white flex flex-col items-center justify-center shadow-2xl"
            >
              <Eye className="h-7 w-7" />
              <div className="font-bold mt-1">Vision</div>
            </motion.div>
            <svg className="absolute -top-6 -left-6 h-24 w-24 text-amber-glow/40" viewBox="0 0 100 100">
              {Array.from({ length: 25 }).map((_, i) => (
                <circle key={i} cx={(i % 5) * 24 + 4} cy={Math.floor(i / 5) * 24 + 4} r="2" fill="currentColor" />
              ))}
            </svg>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div>
            <div className="script text-leaf text-lg">Looking at the horizon</div>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-balance">A Greener, Thriving Bangladesh.</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              We envision a future where every river runs clean, every street is shaded by a tree, and every citizen — human or animal — lives with dignity.
            </p>
            <ul className="mt-8 space-y-3">
              {["Sustainable Ecological Balance", "Clean, Livable Cities", "A Humane, Empowered Society", "Zero-waste Urban Models"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-foreground">
                  <span className="h-7 w-7 rounded-full bg-leaf/10 text-leaf flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
      {/* Mission */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="lg:order-2 relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=900&q=80" alt="Mission in action" className="h-full w-full object-cover" />
              </div>
              <motion.div
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-amber-glow text-ink flex flex-col items-center justify-center shadow-2xl"
              >
                <Target className="h-7 w-7" />
                <div className="font-bold mt-1">Mission</div>
              </motion.div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="lg:order-1">
              <div className="script text-leaf text-lg">What drives us every day</div>
              <h2 className="text-4xl lg:text-5xl font-bold mt-2 text-balance">Executing the change, one field at a time.</h2>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                We turn intention into action through grounded field projects — conservation, animal welfare, humanitarian aid and rural education.
              </p>
              <Link to="/campaigns" className="mt-8 inline-flex items-center gap-2 rounded-full gradient-leaf text-white px-6 py-3 font-semibold hover:-translate-y-0.5 shadow-xl shadow-leaf/30 transition">
                See our action plan <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      {/* Values */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <div className="text-center">
            <div className="script text-leaf text-lg">Core values</div>
            <h2 className="text-4xl lg:text-5xl font-bold mt-2">The compass we navigate by.</h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.08}>
              <div className="rounded-3xl bg-card border border-border p-6 h-full hover:shadow-xl hover:shadow-leaf/10 hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 rounded-2xl gradient-leaf text-white flex items-center justify-center">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{v.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      {/* SDG */}
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <Reveal>
          <div className="rounded-[2rem] gradient-leaf text-white p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-amber-glow/40 blob" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="script text-amber-glow text-lg">Aligned with the world</div>
                <h2 className="text-3xl lg:text-4xl font-bold mt-2 text-white">UN Sustainable Development Goals</h2>
                <p className="mt-4 text-white/80 max-w-md">Our four pillars directly contribute to seven of the seventeen SDGs.</p>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
                {[3, 4, 6, 11, 13, 14, 15].map((n, i) => (
                  <motion.div
                    key={n}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, type: "spring" }}
                    className="aspect-square rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center font-bold text-xl"
                  >
                    {n}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
