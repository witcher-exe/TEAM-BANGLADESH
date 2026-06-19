import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Reveal } from "@/components/site/SiteLayout";
import { motion } from "framer-motion";
import { Crown, Shield, Building2, MapPin, Mail } from "lucide-react";

export const Route = createFileRoute("/committees")({
  head: () => ({
    meta: [
      { title: "Our Committees | Team Bangladesh" },
      { name: "description", content: "Founder, executive body, central, district and thana committees of Team Bangladesh." },
    ],
  }),
  component: Committees,
});

type Person = { n: string; name: string; role: string; bio: string; img: string };

const FOUNDER: Person = {
  n: "01", name: "Dr. Muhit A Rana", role: "Member",
  bio: "Visionary behind Team Bangladesh, leading the initiative since inception to drive nation-wide green development.",
  img: "/assets/downloaded img/precident.jpeg",
};

const EXEC: Person[] = [
  { n: "02", name: "Nazmul", role: "Member", bio: "Actively contributing to the strategic and humanitarian operations of Team Bangladesh, driving progressive change within the community.", img: "/assets/downloaded img/nazmul.png" },
  { n: "03", name: "Rakin", role: "Member", bio: "Providing crucial guidance and leadership to ensure that Team Bangladesh successfully meets its environmental and legal developmental targets.", img: "/assets/downloaded img/tblogo.png" },
  { n: "04", name: "Salima Talukder Aruni", role: "Member", bio: "Passionate about sustainability, social progress, and helping communities adapt to a better lifestyle through innovative programs and grassroots engagement.", img: "/assets/downloaded img/aruni.jpeg" },
  { n: "05", name: "Nahreen Asghar", role: "Member", bio: "Actively contributing to the strategic and humanitarian operations of Team Bangladesh, driving progressive change within the community.", img: "/assets/downloaded img/nahreen.jpeg" },
  { n: "06", name: "Xem", role: "Member", bio: "Actively contributing to the strategic and humanitarian operations of Team Bangladesh, driving progressive change within the community.", img: "/assets/downloaded img/xem.png" },
];

const DISTRICTS = [
  { name: "Dhaka", head: "Tanvir Ahmed", members: 1240 },
  { name: "Chittagong", head: "Sumaiya Rahman", members: 980 },
  { name: "Khulna", head: "Faisal Karim", members: 720 },
  { name: "Rajshahi", head: "Lubna Ferdous", members: 640 },
  { name: "Sylhet", head: "Noman Shafique", members: 580 },
  { name: "Barishal", head: "Shahed Alam", members: 420 },
  { name: "Rangpur", head: "Mahfuza Akter", members: 530 },
  { name: "Mymensingh", head: "Rifat Hasan", members: 360 },
];

const THANAS = [
  "Banani", "Gulshan", "Dhanmondi", "Mirpur", "Uttara", "Tejgaon", "Mohammadpur", "Motijheel",
  "Kotwali", "Pahartali", "Khulshi", "Doublemooring", "Bandar", "Halishahar",
];

function PersonCard({ p, big = false }: { p: Person; big?: boolean }) {
  return (
    <motion.div whileHover={{ y: -6 }} className={`group relative rounded-3xl overflow-hidden border border-border bg-card ${big ? "lg:flex" : ""}`}>
      <div className={`relative overflow-hidden ${big ? "lg:w-1/2 aspect-[4/5] lg:aspect-auto" : "aspect-[4/5]"}`}>
        <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-amber-glow text-ink px-3 py-1 text-xs font-bold">#{p.n}</span>
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all">
          <a href="#" className="h-9 w-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-leaf"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#" className="h-9 w-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-leaf"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
      <div className={`p-6 ${big ? "lg:w-1/2 lg:flex lg:flex-col lg:justify-center" : ""}`}>
        <h3 className={`font-bold ${big ? "text-3xl" : "text-lg"}`}>{p.name}</h3>
        <p className="text-leaf font-semibold text-sm mt-1">{p.role}</p>
        <p className={`text-muted-foreground mt-3 ${big ? "" : "text-sm"}`}>{p.bio}</p>
      </div>
    </motion.div>
  );
}

function Committees() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Leadership network"
        title="Our Committees"
        subtitle="From the founder's desk to every thana — meet the dedicated people who carry Team Bangladesh forward."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
        stats={[
          { label: "Founder", value: "1" },
          { label: "Executives", value: "9" },
          { label: "District Heads", value: "64" },
          { label: "Thana Reps", value: "490+" },
        ]}
      />

      {/* Founder */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-glow/15 text-amber-glow px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <Crown className="h-4 w-4" /> Founding Member
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4">Where it all began.</h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <PersonCard p={FOUNDER} big />
          </div>
        </Reveal>
      </section>

      {/* Executive */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-leaf/15 text-leaf px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
                <Shield className="h-4 w-4" /> Executive Body
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mt-4">The Central Committee.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXEC.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <PersonCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* District */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-leaf/15 text-leaf px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="h-4 w-4" /> District Committees
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4">A leader in every district.</h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DISTRICTS.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.05}>
              <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-border bg-card p-5 group">
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 rounded-xl gradient-leaf text-white flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">{d.members.toLocaleString()} members</span>
                </div>
                <h3 className="mt-4 text-lg font-bold">{d.name}</h3>
                <p className="text-sm text-muted-foreground">{d.head}</p>
                <div className="mt-4 h-1 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min(100, (d.members / 1300) * 100)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                    className="h-full gradient-warm"
                  />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Thana cloud */}
      <section className="bg-ink text-white py-24 relative overflow-hidden">
        <div className="absolute -top-20 left-1/3 h-80 w-80 rounded-full bg-leaf/30 blob" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-glow/20 blob" />
        <div className="relative mx-auto max-w-7xl px-5 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="h-4 w-4 text-amber-glow" /> Thana Committees
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-white">490+ thanas, one mission.</h2>
            <p className="text-white/70 mt-3 max-w-xl mx-auto">Local heads run grassroots operations — the people who know every street, school and pond in their thana.</p>
          </Reveal>
          <div className="mt-12 flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {THANAS.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-2 text-sm hover:bg-leaf hover:border-leaf transition cursor-default"
              >
                {t}
              </motion.span>
            ))}
            <span className="rounded-full gradient-warm text-ink px-4 py-2 text-sm font-semibold">+ 476 more</span>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
