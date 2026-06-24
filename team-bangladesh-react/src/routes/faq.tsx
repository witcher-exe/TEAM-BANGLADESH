import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Reveal } from "@/components/site/SiteLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, Search, MessageCircle, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Team Bangladesh" },
      { name: "description", content: "Answers to your questions about joining, donating, volunteering and partnering with Team Bangladesh." },
    ],
  }),
  component: FAQ,
});

const CATS = ["All", "Membership", "Volunteering", "Donation", "Campaigns", "Organization"];

const FAQS = [
  { cat: "Membership", q: "How do I become a member of Team Bangladesh?", a: "You can join Team Bangladesh by filling out our online membership form or by contacting your local district committee. Membership is open to all Bangladeshi citizens aged 16 and above who share our values of environmental care, social justice and human dignity." },
  { cat: "Membership", q: "Is there a membership fee?", a: "There is no mandatory membership fee. Team Bangladesh runs entirely on voluntary contributions and donations. However, members are encouraged to contribute what they can to support operational costs." },
  { cat: "Volunteering", q: "How can I volunteer for an upcoming campaign?", a: "Visit our Events page to see upcoming campaigns near you. Each event has a 'Register as Volunteer' button. You can also reach out to your district committee coordinator directly via our contact page." },
  { cat: "Volunteering", q: "Do I need any special skills to volunteer?", a: "No special skills are required for most campaigns. We welcome everyone — from tree planters and cleanup crews to doctors, teachers and social workers. We match volunteers to roles that fit their abilities." },
  { cat: "Volunteering", q: "Can students participate in campaigns?", a: "Absolutely. Students are the backbone of Team Bangladesh. Many campaigns are scheduled on weekends specifically to accommodate students. We also offer community service certificates for academic purposes." },
  { cat: "Donation", q: "How can I donate to Team Bangladesh?", a: "You can donate through our Donation page using bKash, Nagad, or bank transfer. Select your cause, enter your amount and complete the secure payment. You'll receive a confirmation and impact report within 7 days." },
  { cat: "Donation", q: "How is my donation used?", a: "100% of donations go directly to the selected campaign. We publish monthly transparency reports detailing every taka spent. Our administrative costs are covered separately through institutional grants." },
  { cat: "Donation", q: "Is my donation tax-deductible?", a: "Yes. Donations to registered NGOs like Team Bangladesh are eligible for tax exemption under the Income Tax Ordinance of Bangladesh. We will provide an official receipt for tax purposes." },
  { cat: "Campaigns", q: "How are campaign locations decided?", a: "Campaign locations are selected based on community needs assessments conducted by our district committees. Priority is given to areas with the greatest environmental degradation, healthcare gaps or educational deficits." },
  { cat: "Campaigns", q: "Can I propose a campaign for my area?", a: "Yes! We actively encourage community-proposed campaigns. Submit a proposal through our Campaigns page or contact your district committee. Our team will assess feasibility and guide you through the process." },
  { cat: "Organization", q: "Is Team Bangladesh a registered organization?", a: "Yes, Team Bangladesh is a registered non-governmental organization operating under the laws of Bangladesh. We comply with all NGO Bureau regulations and file annual reports with the relevant government bodies." },
  { cat: "Organization", q: "How can a company partner with Team Bangladesh?", a: "We welcome corporate partnerships for CSR activities, event sponsorships and joint campaigns. Please reach out via our Contact page with your partnership proposal and our team will respond within 48 hours." },
];

function FAQ() {
  const [activeTag, setActiveTag] = useState("All");
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [search, setSearch] = useState("");

  const filtered = FAQS.filter(f => {
    const matchTag = activeTag === "All" || f.cat === activeTag;
    const matchSearch = !search || f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase());
    return matchTag && matchSearch;
  });

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Got questions?"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about joining, giving, volunteering and working with Team Bangladesh."
        image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
        stats={[
          { label: "Questions", value: `${FAQS.length}` },
          { label: "Topics", value: "5" },
          { label: "Response Time", value: "< 48h" },
          { label: "Support Channels", value: "3" },
        ]}
      />

      <section className="mx-auto max-w-4xl px-5 py-16">
        {/* Search */}
        <Reveal>
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card border border-border focus:outline-none focus:border-leaf text-sm transition-colors shadow-sm"
            />
          </div>
        </Reveal>

        {/* Category Tabs */}
        <Reveal>
          <div className="flex flex-wrap gap-3 mb-10">
            {CATS.map(cat => (
              <motion.button key={cat} whileTap={{ scale: 0.95 }} onClick={() => setActiveTag(cat)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${activeTag === cat ? "gradient-leaf text-white shadow-md" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                {cat}
              </motion.button>
            ))}
          </div>
        </Reveal>

        {/* Accordion */}
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <Reveal>
              <div className="text-center py-20 text-muted-foreground">
                <HelpCircle className="h-12 w-12 mx-auto mb-4 opacity-40" />
                <p className="text-lg font-semibold">No matching questions found.</p>
                <p className="text-sm mt-1">Try a different search term or category.</p>
              </div>
            </Reveal>
          ) : (
            filtered.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.04}>
                <motion.div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIdx === i ? "border-leaf shadow-lg shadow-leaf/10" : "border-border bg-card"}`}
                >
                  <button
                    className="w-full flex items-start gap-4 p-6 text-left"
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  >
                    <span className={`mt-0.5 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${openIdx === i ? "gradient-leaf text-white" : "bg-muted text-muted-foreground"}`}>
                      {openIdx === i ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                    <div className="flex-1">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-leaf mb-1 block">{item.cat}</span>
                      <h3 className="font-semibold text-base leading-snug">{item.q}</h3>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIdx === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pl-16 text-muted-foreground text-sm leading-relaxed">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            ))
          )}
        </div>

        {/* Still have questions */}
        <Reveal>
          <div className="mt-16 rounded-3xl gradient-leaf p-10 text-white text-center">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl font-bold">Still have a question?</h2>
            <p className="mt-3 text-white/80 max-w-md mx-auto">Our team responds within 48 hours. Reach us via email, phone or Facebook.</p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 bg-white text-leaf font-semibold rounded-full px-8 py-3 hover:bg-amber-50 transition-colors">
              <MessageCircle className="h-4 w-4" /> Contact Us
            </a>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
