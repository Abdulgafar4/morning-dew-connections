import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import dewLeaf from "@/assets/dew-leaf.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bond — Closer to love." },
      {
        name: "description",
        content:
          "Bond is an invite-only dating sanctuary for intentional New Yorkers. Curated matches, verified profiles, no swiping.",
      },
      { property: "og:title", content: "Bond — Closer to love." },
      {
        property: "og:description",
        content:
          "An invite-only dating sanctuary for intentional New Yorkers. Curated matches, verified profiles.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-aqua/40">
      <div className="film-grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Features />
        <Safety />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Navigation ---------- */
function Nav() {
  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-5xl">
      <div className="glass-panel rounded-full pl-6 pr-2 py-2 flex items-center justify-between">
        <a href="#top" className="font-display font-extrabold text-xl tracking-tight">
          BOND
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/70">
          <a href="#philosophy" className="hover:text-foreground transition-colors">Philosophy</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#safety" className="hover:text-foreground transition-colors">Safety</a>
          <a href="#voices" className="hover:text-foreground transition-colors">Voices</a>
        </div>
        <a
          href="#waitlist"
          className="bg-foreground text-background px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-all"
        >
          Join Waitlist
        </a>
      </div>
    </nav>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <header
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-24"
    >
      {/* 3D Glass Orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[18%] left-[12%] size-72 orb-refraction rounded-full animate-float-orb opacity-80 blur-[2px]" />
        <div
          className="absolute bottom-[14%] right-[10%] size-96 orb-refraction rounded-full animate-float-orb opacity-60 blur-[4px]"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-[28%] right-[22%] size-40 orb-refraction rounded-full animate-float-orb opacity-90"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-[30%] left-[28%] size-24 orb-refraction rounded-full animate-float-orb opacity-95"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Connection lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="line1" x1="0" x2="1">
              <stop offset="0%" stopColor="oklch(0.92 0.06 190)" stopOpacity="0" />
              <stop offset="50%" stopColor="oklch(0.92 0.06 190)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="oklch(0.9 0.07 145)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="line2" x1="0" x2="1">
              <stop offset="0%" stopColor="oklch(0.9 0.07 145)" stopOpacity="0" />
              <stop offset="50%" stopColor="oklch(0.9 0.07 145)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="oklch(0.92 0.06 190)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="240" y1="280" x2="1180" y2="660" stroke="url(#line1)" strokeWidth="1" />
          <line x1="1080" y1="240" x2="380" y2="700" stroke="url(#line2)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-4xl animate-fade-up">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] mb-8 text-foreground/50">
          NYC Beta · Invite Only · Est. 2026
        </p>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-extrabold tracking-tighter mb-8 text-balance leading-[0.85]">
          Closer
          <br />
          to love.
        </h1>
        <p className="text-lg md:text-xl text-foreground/65 max-w-xl mx-auto mb-12 text-pretty leading-relaxed">
          Beyond the swipe. A sanctuary for meaningful connection, curated for
          those who value depth over volume.
        </p>
        <WaitlistForm />
        <p className="mt-6 text-xs text-foreground/40 font-mono tracking-widest uppercase">
          12,400+ New Yorkers waiting
        </p>
      </div>
    </header>
  );
}

/* ---------- Waitlist form ---------- */
function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      id={compact ? undefined : "waitlist"}
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setSubmitted(true);
      }}
      className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
    >
      {submitted ? (
        <div className="glass-panel rounded-full px-8 py-4 text-sm font-medium text-foreground">
          You're on the list. We'll be in touch from New York.
        </div>
      ) : (
        <>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full sm:flex-1 px-6 py-4 rounded-full bg-white/60 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-aqua/60 focus:border-aqua/30 transition-all font-medium placeholder:text-foreground/40"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-9 py-4 bg-foreground text-background rounded-full font-semibold tracking-tight hover:scale-[1.03] active:scale-[0.98] transition-transform cursor-pointer whitespace-nowrap"
          >
            Request Access
          </button>
        </>
      )}
    </form>
  );
}

/* ---------- Philosophy / Why we're different (editorial sticky layout) ---------- */
function Philosophy() {
  const tenets = [
    {
      title: "Verified Authenticity",
      body: "Every member undergoes a multi-layer verification — ID, selfie, and a brief human conversation. The person you meet is exactly who they say they are.",
      align: "left" as const,
    },
    {
      title: "Curation, not Algorithms",
      body: "We replace infinite loops with hand-picked introductions. Three meaningful matches per week, selected for alignment — not activity levels.",
      align: "right" as const,
    },
    {
      title: "Sanctuary Design",
      body: "No notifications, no streaks, no read-receipts roulette. The interface is designed to be closed, so you can step away from the screen and into the world.",
      align: "left" as const,
    },
  ];

  return (
    <section id="philosophy" className="py-32 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="md:col-span-5 md:sticky md:top-32 self-start">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50 mb-6 block font-medium">
            01 — Why we're different
          </span>
          <h2 className="font-display text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight mb-10">
            The art of <br />
            intentional <br />
            <span className="italic font-medium">discovery.</span>
          </h2>
          <img
            src={dewLeaf}
            alt="A single dewdrop suspended on a green blade at dawn"
            width={768}
            height={1024}
            loading="lazy"
            className="w-full aspect-[3/4] rounded-3xl object-cover animate-drift"
          />
        </div>

        <div className="md:col-span-7 space-y-24 md:space-y-32 md:pt-24">
          {tenets.map((t, i) => (
            <div
              key={t.title}
              className={`max-w-md ${t.align === "right" ? "md:ml-auto" : ""}`}
            >
              <span className="font-mono text-xs text-foreground/40 mb-3 block">
                0{i + 1}
              </span>
              <h3 className="font-display text-3xl font-bold mb-4 tracking-tight">
                {t.title}
              </h3>
              <p className="text-foreground/65 leading-relaxed text-lg">{t.body}</p>
              {i === 1 && (
                <div className="mt-12 size-56 orb-refraction rounded-full blur-2xl opacity-50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Features ---------- */
function Features() {
  const items = [
    {
      kicker: "Daily Pulse",
      title: "Three matches. Each Sunday.",
      body: "Hand-selected introductions delivered weekly. We curate for resonance — values, ambition, taste — not photo-quality metrics.",
    },
    {
      kicker: "Editorial Profiles",
      title: "Long-form prompts. Real voices.",
      body: "No bio-line games. Members answer thoughtful prompts and record a brief audio greeting. You meet a person, not a thumbnail.",
    },
    {
      kicker: "Bond Circles",
      title: "Small dinners. Quiet rooms.",
      body: "Curated group gatherings at NYC's most considered spaces — for members who would rather meet in person than message.",
    },
    {
      kicker: "Concierge",
      title: "A thoughtful first date.",
      body: "When you both say yes, our team suggests a reservation tailored to your mutual tastes. A starting point, not a script.",
    },
  ];

  return (
    <section id="features" className="py-32 md:py-40 px-6 bg-stone/40 border-y border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50 mb-6 block font-medium">
              02 — Features
            </span>
            <h2 className="font-display text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] max-w-2xl">
              Built like a place, <br />
              <span className="italic font-medium">not a feed.</span>
            </h2>
          </div>
          <p className="text-foreground/60 max-w-sm leading-relaxed">
            Every detail of Bond is designed to slow you down — and bring you closer to the right person.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 rounded-3xl overflow-hidden border border-foreground/10">
          {items.map((item) => (
            <article
              key={item.title}
              className="bg-background p-10 lg:p-14 group hover:bg-background/60 transition-colors"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40 mb-6 block">
                {item.kicker}
              </span>
              <h3 className="font-display text-3xl lg:text-4xl font-bold mb-5 tracking-tight leading-tight">
                {item.title}
              </h3>
              <p className="text-foreground/65 leading-relaxed text-lg max-w-sm">
                {item.body}
              </p>
              <div className="mt-10 h-px w-12 bg-foreground/30 group-hover:w-24 transition-all duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Safety ---------- */
function Safety() {
  const points = [
    {
      title: "Multi-layer verification",
      body: "Government ID, selfie comparison, and a short video screen. Every single member.",
    },
    {
      title: "Closed community",
      body: "Members-only. No public profiles, no search, no screenshots — your presence is private by default.",
    },
    {
      title: "Real human review",
      body: "Our trust team reviews every report within hours, not days. Zero tolerance for bad actors.",
    },
    {
      title: "Encrypted by default",
      body: "Messages, photos, and audio are end-to-end encrypted. We can't read them — and neither can anyone else.",
    },
  ];

  return (
    <section id="safety" className="py-32 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-16">
        <div className="md:col-span-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50 mb-6 block font-medium">
            03 — Safety
          </span>
          <h2 className="font-display text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] mb-8">
            Trust, by <br />
            <span className="italic font-medium">design.</span>
          </h2>
          <p className="text-foreground/65 leading-relaxed text-lg max-w-md">
            Safety isn't a setting buried in a menu. It's the foundation Bond is built on — for everyone in our community.
          </p>
        </div>

        <ul className="md:col-span-7 grid sm:grid-cols-2 gap-10">
          {points.map((p, i) => (
            <li key={p.title} className="border-t border-foreground/15 pt-6">
              <span className="font-mono text-xs text-foreground/40 mb-2 block">
                / 0{i + 1}
              </span>

              <h3 className="font-display text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-foreground/65 leading-relaxed">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const quotes = [
    { q: "Finally, a space that respects my time.", a: "Maya, West Village" },
    { q: "Found my person in three weeks.", a: "Daniel, Cobble Hill" },
    { q: "The most beautiful app on my phone.", a: "Priya, Tribeca" },
    { q: "It feels like the city I love — curated, quiet, kind.", a: "Sam, Fort Greene" },
  ];

  return (
    <section id="voices" className="py-24 md:py-32 border-y border-foreground/5 bg-mint/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50 mb-6 block font-medium">
          04 — Voices from the beta
        </span>
      </div>
      <div className="overflow-hidden">
        <div className="flex items-center gap-16 whitespace-nowrap animate-marquee w-max">
          {[...quotes, ...quotes].map((t, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0">
              <span className="font-display text-4xl md:text-6xl font-medium text-foreground/30 tracking-tight">
                "{t.q}"
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/40 shrink-0">
                — {t.a}
              </span>
              <span className="font-display text-4xl md:text-6xl text-aqua">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCta() {
  return (
    <section className="relative py-32 md:py-44 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/3 left-1/4 size-72 orb-refraction rounded-full blur-3xl opacity-40 animate-float-orb" />
        <div
          className="absolute bottom-10 right-1/4 size-96 orb-refraction rounded-full blur-3xl opacity-30 animate-float-orb"
          style={{ animationDelay: "3s" }}
        />
      </div>
      <div className="relative max-w-2xl mx-auto">
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-foreground/50 mb-6 block font-medium">
          The Bond
        </span>
        <h2 className="font-display text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-[0.9]">
          Your last <br />
          <span className="italic font-medium">first date.</span>
        </h2>
        <p className="mb-12 text-foreground/60 font-medium italic max-w-md mx-auto">
          "Real love doesn't rush. It waits for the dew to settle."
        </p>
        <WaitlistForm compact />
        <p className="mt-6 text-xs text-foreground/40 font-mono tracking-widest uppercase">
          Currently accepting NYC residents
        </p>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="py-16 px-6 bg-stone border-t border-foreground/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <span className="font-display font-extrabold text-xl tracking-tight">BOND</span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            Closer to love.
          </span>
        </div>
        <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest text-foreground/50">
          <span>New York</span>
          <span className="text-foreground/30">London — 2026</span>
          <span className="text-foreground/30">Paris — 2027</span>
        </div>
        <div className="flex gap-6 text-xs text-foreground/50">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Guidelines</a>
          <a href="#" className="hover:text-foreground transition-colors">Press</a>
        </div>
      </div>
    </footer>
  );
}
