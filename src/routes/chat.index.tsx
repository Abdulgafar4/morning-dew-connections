import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell, Kicker } from "@/components/AppShell";

export const Route = createFileRoute("/chat/")({
  head: () => ({ meta: [{ title: "Messages — Bond" }] }),
  component: ChatInbox,
});

const THREADS = [
  { id: "1", name: "Mira", preview: "I'd love that — Saturday afternoon, golden hour ideally.", time: "2m", unread: true, hue: "from-aqua/70 to-mint/40" },
  { id: "2", name: "Theo", preview: "Croissants are non-negotiable. I'll bring two.", time: "1h", unread: true, hue: "from-mint/70 to-aqua/40" },
  { id: "3", name: "Saoirse", preview: "Have you read the new Zadie Smith? It undid me a little.", time: "Yesterday", unread: false, hue: "from-aqua/60 to-stone-warm/60" },
  { id: "4", name: "Iman", preview: "That café on Hudson — let's try it.", time: "3d", unread: false, hue: "from-stone-warm/60 to-aqua/40" },
];

function ChatInbox() {
  return (
    <AppShell active="chat">
      <section className="max-w-3xl mx-auto px-6 sm:px-8 pb-32">
        <Kicker n="01" label="Quiet correspondence" />
        <h1 className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight mt-5 leading-[0.95]">
          Your <em className="italic font-medium text-foreground/70">letters.</em>
        </h1>
        <p className="mt-4 text-foreground/60 text-[15px] max-w-lg">
          Bond conversations move slowly on purpose. There are no read receipts, no typing indicators, no green dots.
        </p>

        <div className="mt-12 glass-panel rounded-3xl divide-y divide-foreground/5 overflow-hidden">
          {THREADS.map((t) => (
            <Link
              key={t.id}
              to="/chat/$id"
              params={{ id: t.id }}
              className="flex items-center gap-5 p-5 hover:bg-white/50 transition-all"
            >
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.hue} relative overflow-hidden shrink-0`}>
                <div className="absolute inset-0 orb-refraction opacity-70" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold">{t.name}</h3>
                  <span className="text-[11px] font-mono text-foreground/40 shrink-0">{t.time}</span>
                </div>
                <p className={`text-sm truncate mt-0.5 ${t.unread ? "text-foreground font-medium" : "text-foreground/55"}`}>
                  {t.preview}
                </p>
              </div>
              {t.unread && <div className="w-2 h-2 rounded-full bg-aqua shrink-0" aria-label="unread" />}
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center text-xs font-mono text-foreground/40 uppercase tracking-widest">
          End of correspondence
        </div>
      </section>
    </AppShell>
  );
}
