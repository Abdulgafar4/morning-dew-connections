import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/chat/$id")({
  head: () => ({ meta: [{ title: "Conversation — Bond" }] }),
  component: ChatThread,
});

type Msg = { from: "me" | "them"; text: string; time: string };

const MESSAGES: Msg[] = [
  { from: "them", text: "Hi Eleanor — your prompt about Sunday markets stopped me. I haunt the Union Square one too.", time: "Tue · 4:12pm" },
  { from: "me", text: "The cheese guy on the south side knows me by name. It's becoming a problem.", time: "Tue · 5:30pm" },
  { from: "them", text: "Specifically the comté or are we branching out?", time: "Tue · 6:08pm" },
  { from: "me", text: "Mostly comté. Some emotional support gruyère.", time: "Wed · 9:14am" },
  { from: "them", text: "I'd love that — Saturday afternoon, golden hour ideally.", time: "Wed · 11:02am" },
];

function ChatThread() {
  const { id } = Route.useParams();
  void id;
  return (
    <AppShell active="chat">
      <section className="max-w-3xl mx-auto px-6 sm:px-8">
        <Link to="/chat" className="text-sm text-foreground/60 hover:text-foreground inline-flex items-center gap-2">
          ← All letters
        </Link>

        {/* Header */}
        <div className="mt-8 glass-panel rounded-3xl p-6 flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-aqua/70 to-mint/40 relative overflow-hidden">
            <div className="absolute inset-0 orb-refraction opacity-70" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="font-display text-2xl font-bold">Mira, 31</h2>
              <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">✓ Verified</span>
            </div>
            <div className="text-sm text-foreground/60">Documentary editor · Fort Greene</div>
          </div>
          <button className="glass-panel px-4 py-2 rounded-full text-xs font-medium hover:bg-white/70">
            View profile
          </button>
        </div>

        {/* Thread */}
        <div className="mt-10 space-y-8 pb-40">
          <DateMark label="Tuesday" />
          {MESSAGES.slice(0, 3).map((m, i) => (
            <Bubble key={i} m={m} />
          ))}
          <DateMark label="Wednesday" />
          {MESSAGES.slice(3).map((m, i) => (
            <Bubble key={i} m={m} />
          ))}

          {/* Suggestion */}
          <div className="glass-panel rounded-3xl p-6 text-center">
            <div className="text-xs uppercase tracking-widest text-foreground/50 font-mono mb-2">Bond suggestion</div>
            <div className="font-display text-xl leading-snug">
              <em className="italic font-medium">&ldquo;Would you like me to book a table at Mel&rsquo;s on Saturday at 6?&rdquo;</em>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <button className="bg-foreground text-background px-5 py-2.5 rounded-full text-xs font-semibold">
                Yes, please
              </button>
              <button className="glass-panel px-5 py-2.5 rounded-full text-xs font-medium">Not yet</button>
            </div>
          </div>
        </div>

        {/* Composer */}
        <div className="fixed bottom-0 left-0 right-0 z-30 px-6 py-5 pointer-events-none">
          <div className="max-w-3xl mx-auto pointer-events-auto">
            <div className="glass-panel rounded-full pl-6 pr-2 py-2 flex items-center gap-3 shadow-2xl">
              <input
                placeholder="Write thoughtfully…"
                className="flex-1 bg-transparent text-[15px] py-3 focus:outline-none placeholder:text-foreground/40"
              />
              <button className="bg-foreground text-background rounded-full px-6 py-3 text-sm font-semibold hover:bg-foreground/90 transition">
                Send
              </button>
            </div>
            <div className="text-center text-[11px] font-mono text-foreground/40 mt-3">
              No read receipts · No typing indicators · Respond when you mean it
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}

function Bubble({ m }: { m: Msg }) {
  const mine = m.from === "me";
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div className="max-w-[78%]">
        <div
          className={`rounded-3xl px-5 py-4 text-[15px] leading-relaxed ${
            mine
              ? "bg-foreground text-background rounded-br-md"
              : "glass-panel rounded-bl-md"
          }`}
        >
          {m.text}
        </div>
        <div className={`text-[10px] font-mono text-foreground/40 mt-1.5 ${mine ? "text-right" : "text-left"}`}>
          {m.time}
        </div>
      </div>
    </div>
  );
}

function DateMark({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 my-2">
      <span className="flex-1 h-px bg-foreground/10" />
      <span className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">{label}</span>
      <span className="flex-1 h-px bg-foreground/10" />
    </div>
  );
}
