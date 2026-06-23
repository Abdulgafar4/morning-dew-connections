import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell, Kicker } from "@/components/AppShell";

export const Route = createFileRoute("/matches")({
  head: () => ({ meta: [{ title: "Matches — Bond" }] }),
  component: MatchesPage,
});

const MATCHES = [
  { id: "1", name: "Mira", age: 31, work: "Documentary editor", hood: "Fort Greene", prompt: "I'll always say yes to a long walk in October.", hue: "from-aqua/70 to-mint/40" },
  { id: "2", name: "Theo", age: 34, work: "Pastry chef", hood: "Greenpoint", prompt: "I learned to make croissants to impress a girl. I still make them.", hue: "from-mint/70 to-aqua/40" },
  { id: "3", name: "Saoirse", age: 29, work: "Public defender", hood: "Crown Heights", prompt: "I read poetry at the laundromat. It improves the spin cycle.", hue: "from-aqua/60 to-stone-warm/60" },
];

function MatchesPage() {
  return (
    <AppShell active="matches">
      <section className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <Kicker n="01" label="This week's introductions" />
            <h1 className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight mt-5 leading-[0.95]">
              Three for <em className="italic font-medium text-foreground/70">Tuesday.</em>
            </h1>
            <p className="mt-4 text-foreground/60 text-[15px] max-w-xl">
              Curated by our team on Sunday. You have until Friday to send a note. After that, they&rsquo;re reintroduced to someone else.
            </p>
          </div>
          <div className="glass-panel rounded-full px-5 py-3 text-sm font-mono text-foreground/60">
            Refresh in <span className="text-foreground font-semibold">4d 12h</span>
          </div>
        </div>

        {/* Featured match */}
        <FeaturedCard m={MATCHES[0]} />

        {/* Secondary */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {MATCHES.slice(1).map((m) => (
            <MatchCard key={m.id} m={m} />
          ))}
        </div>

        {/* Past */}
        <div className="mt-24 mb-24">
          <Kicker n="02" label="Conversations in motion" />
          <div className="mt-6 glass-panel rounded-3xl p-8 text-center">
            <div className="font-display text-2xl">You have <span className="font-bold">2</span> threads waiting.</div>
            <Link
              to="/chat"
              className="inline-block mt-4 text-sm font-medium underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground"
            >
              Open messages →
            </Link>
          </div>
        </div>
      </section>
    </AppShell>
  );
}

function FeaturedCard({ m }: { m: typeof MATCHES[number] }) {
  return (
    <Link
      to="/chat/$id"
      params={{ id: m.id }}
      className="group block glass-panel rounded-[2rem] overflow-hidden hover:bg-white/70 transition-all"
    >
      <div className="grid md:grid-cols-[1.1fr_1fr]">
        <div className={`relative aspect-[4/5] md:aspect-auto bg-gradient-to-br ${m.hue} overflow-hidden`}>
          <div className="absolute inset-0 orb-refraction opacity-60 mix-blend-screen" />
          <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full orb-refraction animate-float-orb opacity-80" />
          <div className="absolute top-6 left-6 glass-panel rounded-full px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest">
            ✓ Verified
          </div>
        </div>
        <div className="p-10 flex flex-col justify-between">
          <div>
            <Kicker n="—" label="Editor's pick" />
            <h2 className="font-display text-4xl font-extrabold tracking-tight mt-4">
              {m.name}, <span className="font-light text-foreground/60">{m.age}</span>
            </h2>
            <div className="text-sm text-foreground/60 mt-2">
              {m.work} · {m.hood}
            </div>
            <blockquote className="font-display text-2xl leading-snug mt-8 italic text-foreground/80">
              &ldquo;{m.prompt}&rdquo;
            </blockquote>
          </div>
          <div className="flex items-center gap-3 mt-10">
            <span className="bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold group-hover:bg-foreground/90 transition">
              Send a note
            </span>
            <span className="glass-panel px-5 py-3 rounded-full text-sm font-medium">View profile</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function MatchCard({ m }: { m: typeof MATCHES[number] }) {
  return (
    <Link
      to="/chat/$id"
      params={{ id: m.id }}
      className="group block glass-panel rounded-[1.75rem] overflow-hidden hover:bg-white/70 transition-all"
    >
      <div className={`relative aspect-[5/4] bg-gradient-to-br ${m.hue} overflow-hidden`}>
        <div className="absolute inset-0 orb-refraction opacity-50 mix-blend-screen" />
        <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full orb-refraction animate-drift opacity-70" />
      </div>
      <div className="p-7">
        <div className="flex items-baseline justify-between">
          <h3 className="font-display text-2xl font-bold">
            {m.name}, <span className="font-light text-foreground/60">{m.age}</span>
          </h3>
          <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">Verified</span>
        </div>
        <div className="text-sm text-foreground/60 mt-1">{m.work} · {m.hood}</div>
        <p className="font-display italic text-foreground/70 mt-5 leading-snug">&ldquo;{m.prompt}&rdquo;</p>
      </div>
    </Link>
  );
}
