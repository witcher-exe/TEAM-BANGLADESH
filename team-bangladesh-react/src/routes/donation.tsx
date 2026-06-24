import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Reveal } from "@/components/site/SiteLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, TreePine, Stethoscope, BookOpen, PawPrint, ArrowRight, Shield, Check } from "lucide-react";

export const Route = createFileRoute("/donation")({
  head: () => ({
    meta: [
      { title: "Donate | Team Bangladesh" },
      { name: "description", content: "Support Team Bangladesh's mission — fund tree plantations, free medical camps, education and animal welfare across Bangladesh." },
    ],
  }),
  component: Donation,
});

const CAUSES = [
  { icon: TreePine, title: "Tree Plantation", desc: "Plant native trees across Bangladesh's 64 districts.", color: "from-green-500 to-emerald-600", raised: 78, goal: "1,00,000", tag: "Environmental" },
  { icon: Stethoscope, title: "Free Medical Camp", desc: "Fund specialist doctors and free medicines for remote communities.", color: "from-blue-500 to-cyan-600", raised: 62, goal: "5,00,000", tag: "Healthcare" },
  { icon: BookOpen, title: "Education Fund", desc: "Scholarships, books and digital labs for underprivileged students.", color: "from-purple-500 to-violet-600", raised: 45, goal: "3,00,000", tag: "Education" },
  { icon: PawPrint, title: "Animal Welfare", desc: "Rescue, vaccinate and care for stray animals across cities.", color: "from-orange-500 to-amber-600", raised: 33, goal: "50,000", tag: "Animal Care" },
];

const AMOUNTS = [500, 1000, 2000, 5000, 10000];

function Donation() {
  const [selected, setSelected] = useState<number | null>(1000);
  const [custom, setCustom] = useState("");
  const [cause, setCause] = useState("Tree Plantation");

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Make a difference"
        title="Donate Today"
        subtitle="Every taka you give plants a tree, feeds a stray, heals a patient, or educates a child. Your generosity builds Bangladesh."
        image="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80"
        stats={[
          { label: "Donors", value: "4,200+" },
          { label: "Raised (BDT)", value: "1.2Cr+" },
          { label: "Lives Touched", value: "50K+" },
          { label: "Projects Funded", value: "120+" },
        ]}
      />

      {/* Causes */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <Reveal>
          <div className="text-center mb-12">
            <div className="script text-leaf text-lg">Choose your impact</div>
            <h2 className="text-4xl font-bold mt-2">Fund a Cause</h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAUSES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                onClick={() => setCause(c.title)}
                className={`cursor-pointer rounded-2xl border-2 p-6 transition-all duration-300 ${cause === c.title ? "border-leaf shadow-xl shadow-leaf/20" : "border-border bg-card hover:border-leaf/40"}`}
              >
                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-4`}>
                  <c.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{c.tag}</span>
                <h3 className="font-bold text-lg mt-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 mb-4">{c.desc}</p>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{c.raised}% raised</span>
                    <span>Goal: ৳{c.goal}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${c.raised}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${c.color} rounded-full`}
                    />
                  </div>
                </div>
                {cause === c.title && (
                  <div className="mt-3 flex items-center gap-1 text-leaf text-xs font-semibold">
                    <Check className="h-3.5 w-3.5" /> Selected
                  </div>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Donation Form */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-2xl px-5">
          <Reveal>
            <div className="rounded-3xl bg-card border border-border p-8 lg:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-center">Complete Your Donation</h2>
              <p className="text-center text-muted-foreground mt-2">Donating to: <span className="font-semibold text-leaf">{cause}</span></p>

              <div className="mt-8">
                <p className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Select Amount (BDT)</p>
                <div className="grid grid-cols-3 gap-3">
                  {AMOUNTS.map(amt => (
                    <motion.button
                      key={amt}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => { setSelected(amt); setCustom(""); }}
                      className={`rounded-xl py-3 font-semibold text-sm transition-all duration-200 ${selected === amt && !custom ? "gradient-leaf text-white shadow-md" : "bg-muted hover:bg-muted/80 text-foreground"}`}
                    >
                      ৳{amt.toLocaleString()}
                    </motion.button>
                  ))}
                  <input
                    type="number"
                    placeholder="Custom ৳"
                    value={custom}
                    onChange={e => { setCustom(e.target.value); setSelected(null); }}
                    className="rounded-xl py-3 px-4 font-semibold text-sm bg-muted border border-border focus:outline-none focus:border-leaf col-span-3 transition-colors"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <input type="text" placeholder="Your Full Name" className="w-full rounded-xl px-4 py-3 bg-muted border border-border focus:outline-none focus:border-leaf text-sm transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full rounded-xl px-4 py-3 bg-muted border border-border focus:outline-none focus:border-leaf text-sm transition-colors" />
                <input type="tel" placeholder="Phone Number (bKash / Nagad)" className="w-full rounded-xl px-4 py-3 bg-muted border border-border focus:outline-none focus:border-leaf text-sm transition-colors" />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full gradient-leaf text-white font-bold rounded-2xl py-4 flex items-center justify-center gap-2 shadow-lg shadow-leaf/30"
              >
                <Heart className="h-5 w-5 fill-white" />
                Donate ৳{custom || (selected ? selected.toLocaleString() : "—")} Now
                <ArrowRight className="h-5 w-5" />
              </motion.button>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Shield className="h-4 w-4 text-leaf" />
                100% secure. All funds go directly to verified campaigns.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <Reveal>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: Shield, title: "100% Transparent", desc: "Every taka is tracked and reported publicly through our monthly impact reports." },
              { icon: Heart, title: "Directly Impactful", desc: "No middlemen. Your donation funds real projects with real people on the ground." },
              { icon: Check, title: "Tax Deductible", desc: "Donations to Team Bangladesh qualify for income tax exemption under Bangladesh law." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-border bg-card p-8">
                  <div className="h-12 w-12 rounded-full gradient-leaf flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
