import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell, Kicker } from "@/components/AppShell";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — Bond" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <AppShell active="profile">
      <section className="max-w-5xl mx-auto px-6 sm:px-8 pb-32">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-start">
          {/* Portrait */}
          <div className="md:sticky md:top-32">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-br from-aqua/70 to-mint/40">
              <div className="absolute inset-0 orb-refraction opacity-70 mix-blend-screen" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full orb-refraction animate-float-orb" />
              <div className="absolute top-5 left-5 glass-panel rounded-full px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest">
                ✓ Verified · NYC
              </div>
            </div>
            <button className="mt-4 w-full glass-panel py-3 rounded-full text-sm font-medium hover:bg-white/70">
              Edit photos
            </button>
          </div>

          {/* Details */}
          <div>
            <Kicker n="01" label="Your presence" />
            <h1 className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight mt-5 leading-[0.95]">
              Eleanor, <em className="italic font-medium text-foreground/70">32.</em>
            </h1>
            <div className="text-foreground/60 mt-3">Architect · West Village · she/her</div>

            <div className="mt-10 space-y-3">
              <Row label="Looking for" value="Dating with depth" />
              <Row label="Wants children" value="Open" />
              <Row label="Drinks" value="Socially" />
              <Row label="Education" value="Yale School of Architecture" />
              <Row label="Languages" value="English, French, a little Portuguese" />
            </div>

            <div className="mt-16">
              <Kicker n="02" label="Your prompts" />
              <div className="mt-6 space-y-4">
                {[
                  { q: "A small thing that brings me unreasonable joy…", a: "The exact moment the subway exits the tunnel onto the Manhattan Bridge." },
                  { q: "I'm secretly excellent at…", a: "Knowing which bakery in any neighborhood has the best almond croissant." },
                  { q: "The best Sunday in New York is…", a: "Greenmarket, a long museum, a longer dinner, somewhere with candles." },
                ].map((p, i) => (
                  <div key={i} className="glass-panel rounded-2xl p-5">
                    <div className="text-xs uppercase tracking-widest text-foreground/50 font-mono mb-2">{p.q}</div>
                    <p className="font-display text-lg italic text-foreground/85 leading-snug">&ldquo;{p.a}&rdquo;</p>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-sm text-foreground/60 hover:text-foreground underline underline-offset-4 decoration-foreground/20">
                Refresh my prompts
              </button>
            </div>

            <div className="mt-16">
              <Kicker n="03" label="Membership" />
              <div className="mt-6 glass-panel rounded-3xl p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display text-2xl font-bold">Bond — Founding member</div>
                    <div className="text-sm text-foreground/60 mt-1">Joined June 2026 · Member 0241</div>
                  </div>
                  <span className="bg-foreground text-background text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Active
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                  <Stat n="12" l="Introductions" />
                  <Stat n="4" l="Conversations" />
                  <Stat n="2" l="Met in person" />
                </div>
              </div>
            </div>

            <div className="mt-16">
              <Kicker n="04" label="Settings" />
              <div className="mt-6 glass-panel rounded-3xl divide-y divide-foreground/5 overflow-hidden">
                <SettingsRow label="Pause matching" hint="Stay subscribed, take a breath." />
                <SettingsRow label="Privacy & visibility" hint="Hide from people you know." />
                <SettingsRow label="Invite a friend" hint="You have 3 invites remaining." />
                <SettingsRow label="Community standards" hint="Read what we expect of every member." />
              </div>
              <div className="mt-8 flex items-center justify-between">
                <Link to="/login" className="text-sm text-foreground/60 hover:text-foreground">
                  Sign out
                </Link>
                <button className="text-sm text-destructive/80 hover:text-destructive">Delete account</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between glass-panel rounded-2xl px-5 py-3.5">
      <span className="text-xs uppercase tracking-widest text-foreground/50 font-mono">{label}</span>
      <span className="text-[15px] font-medium">{value}</span>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-extrabold">{n}</div>
      <div className="text-[11px] font-mono uppercase tracking-widest text-foreground/50 mt-1">{l}</div>
    </div>
  );
}

function SettingsRow({ label, hint }: { label: string; hint: string }) {
  return (
    <button className="w-full flex items-center justify-between p-5 hover:bg-white/50 transition text-left">
      <div>
        <div className="font-medium">{label}</div>
        <div className="text-sm text-foreground/55 mt-0.5">{hint}</div>
      </div>
      <span className="text-foreground/40">→</span>
    </button>
  );
}
