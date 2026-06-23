import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { AuthShell, Kicker } from "@/components/AppShell";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Onboarding — Bond" }] }),
  component: OnboardingPage,
});

const STEPS = [
  { key: "intent", label: "Intent" },
  { key: "basics", label: "Basics" },
  { key: "photos", label: "Photos" },
  { key: "prompts", label: "Prompts" },
  { key: "preferences", label: "Preferences" },
  { key: "questionnaire", label: "Questionnaire" },
  { key: "verify", label: "Verify" },
] as const;

function OnboardingPage() {
  const [step, setStep] = useState(0);
  const total = STEPS.length;
  const current = STEPS[step];

  return (
    <AuthShell>
      <div className="w-full max-w-2xl">
        {/* Progress */}
        <div className="flex items-center justify-between mb-10">
          <Kicker n={String(step + 1).padStart(2, "0")} label={`Step ${step + 1} of ${total}`} />
          <span className="text-xs font-mono text-foreground/40">{current.label}</span>
        </div>
        <div className="flex gap-1.5 mb-12">
          {STEPS.map((s, i) => (
            <div
              key={s.key}
              className={`h-1 flex-1 rounded-full transition-all ${
                i <= step ? "bg-foreground" : "bg-foreground/10"
              }`}
            />
          ))}
        </div>

        <StepContent step={step} />

        {/* Nav */}
        <div className="mt-12 flex items-center justify-between">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="text-sm text-foreground/60 hover:text-foreground disabled:opacity-30 transition"
          >
            ← Back
          </button>
          {step < total - 1 ? (
            <button
              onClick={() => setStep((s) => Math.min(total - 1, s + 1))}
              className="bg-foreground text-background px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-all"
            >
              Continue
            </button>
          ) : (
            <Link
              to="/matches"
              className="bg-foreground text-background px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-all"
            >
              Enter Bond
            </Link>
          )}
        </div>
      </div>
    </AuthShell>
  );
}

function StepShell({ title, subtitle, children }: { title: ReactNode; subtitle: string; children: ReactNode }) {
  return (
    <div className="animate-fade-up">
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1]">{title}</h1>
      <p className="mt-4 text-foreground/60 text-[15px] leading-relaxed max-w-lg">{subtitle}</p>
      <div className="mt-10">{children}</div>
    </div>
  );
}

function StepContent({ step }: { step: number }) {
  switch (step) {
    case 0:
      return (
        <StepShell
          title={<>What brings you <em className="italic font-medium text-foreground/70">here?</em></>}
          subtitle="There&rsquo;s no wrong answer. Your intent shapes the rooms you&rsquo;ll be invited into."
        >
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { t: "A serious partner", d: "Looking for the long story." },
              { t: "Dating with depth", d: "Open, not in a rush." },
              { t: "Something meaningful", d: "Undefined, intentional." },
              { t: "New friendships", d: "Community first." },
            ].map((o, i) => (
              <button
                key={i}
                className="glass-panel rounded-2xl p-5 text-left hover:bg-white/70 transition-all"
              >
                <div className="font-display text-lg font-semibold">{o.t}</div>
                <div className="text-sm text-foreground/60 mt-1">{o.d}</div>
              </button>
            ))}
          </div>
        </StepShell>
      );
    case 1:
      return (
        <StepShell
          title={<>The <em className="italic font-medium text-foreground/70">basics.</em></>}
          subtitle="Only first name and pronouns are shown publicly. Everything else helps us match you well."
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="First name" placeholder="Eleanor" />
            <Field label="Pronouns" placeholder="she / her" />
            <Field label="Date of birth" placeholder="MM / DD / YYYY" />
            <Field label="Neighborhood" placeholder="West Village" />
            <Field label="Height" placeholder="5&apos;7&quot;" />
            <Field label="Work" placeholder="Architect" />
          </div>
        </StepShell>
      );
    case 2:
      return (
        <StepShell
          title={<>Six <em className="italic font-medium text-foreground/70">photos.</em></>}
          subtitle="Real, recent, unfiltered. Faces visible. Our team reviews every upload."
        >
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <button
                key={i}
                className="aspect-[3/4] rounded-2xl border border-dashed border-foreground/20 bg-white/40 backdrop-blur grid place-items-center text-foreground/40 hover:bg-white/70 hover:border-foreground/40 transition-all"
              >
                <div className="text-center">
                  <div className="text-3xl font-light mb-1">+</div>
                  <div className="text-[10px] uppercase tracking-widest">Photo {i + 1}</div>
                </div>
              </button>
            ))}
          </div>
          <p className="mt-5 text-xs text-foreground/50">First photo becomes your portrait. Drag to reorder later.</p>
        </StepShell>
      );
    case 3:
      return (
        <StepShell
          title={<>Three <em className="italic font-medium text-foreground/70">prompts.</em></>}
          subtitle="Write the way you actually talk. Specificity is the new charisma."
        >
          <div className="space-y-4">
            {[
              "A small thing that brings me unreasonable joy…",
              "I&rsquo;m secretly excellent at…",
              "The best Sunday in New York is…",
            ].map((p, i) => (
              <div key={i} className="glass-panel rounded-2xl p-5">
                <div className="text-xs uppercase tracking-widest text-foreground/50 font-mono mb-2" dangerouslySetInnerHTML={{ __html: p }} />
                <textarea
                  rows={2}
                  placeholder="Type here…"
                  className="w-full bg-transparent text-[15px] placeholder:text-foreground/30 focus:outline-none resize-none"
                />
              </div>
            ))}
          </div>
        </StepShell>
      );
    case 4:
      return (
        <StepShell
          title={<>Your <em className="italic font-medium text-foreground/70">preferences.</em></>}
          subtitle="Guidance, not gatekeeping. We&rsquo;ll occasionally introduce thoughtful exceptions."
        >
          <div className="space-y-6">
            <Pref label="Age range" value="28 – 38" />
            <Pref label="Distance" value="Within 6 miles" />
            <Pref label="Looking to meet" value="Women, Non-binary" />
            <Pref label="Wants children" value="Open" />
          </div>
        </StepShell>
      );
    case 5:
      return (
        <StepShell
          title={<>The <em className="italic font-medium text-foreground/70">questionnaire.</em></>}
          subtitle="Twelve questions designed by relational therapists. There are no right answers."
        >
          <div className="space-y-5">
            {[
              "Conflict, for me, is best resolved by…",
              "I feel most cared for when a partner…",
              "On a free Saturday, my ideal energy is…",
            ].map((q, i) => (
              <div key={i} className="glass-panel rounded-2xl p-5">
                <div className="text-sm font-medium mb-4">{q}</div>
                <div className="flex items-center gap-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <button
                      key={j}
                      className="flex-1 h-10 rounded-full bg-foreground/5 hover:bg-aqua/40 transition-all text-xs font-mono text-foreground/60"
                    >
                      {j + 1}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="text-xs text-foreground/40 text-center font-mono">3 of 12 shown</div>
          </div>
        </StepShell>
      );
    case 6:
      return (
        <StepShell
          title={<>One last <em className="italic font-medium text-foreground/70">step.</em></>}
          subtitle="A 3-second video selfie, matched against your photos. Encrypted, never shown, deleted after review."
        >
          <div className="glass-panel rounded-3xl p-10 text-center">
            <div className="w-32 h-32 mx-auto rounded-full orb-refraction grid place-items-center mb-6">
              <div className="w-4 h-4 rounded-full bg-destructive/80 animate-pulse" />
            </div>
            <div className="font-display text-2xl font-semibold mb-2">Hold still, smile gently.</div>
            <div className="text-sm text-foreground/60 mb-6">Look directly at the camera. Move your head slowly side to side.</div>
            <button className="glass-panel px-6 py-3 rounded-full text-sm font-medium hover:bg-white/70">
              Start verification
            </button>
            <div className="mt-6 text-xs text-foreground/40">SOC 2 · End-to-end encrypted · GDPR &amp; CCPA</div>
          </div>
        </StepShell>
      );
    default:
      return null;
  }
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-foreground/50 font-mono">{label}</span>
      <input
        {...rest}
        className="mt-2 w-full glass-panel rounded-2xl px-5 py-3.5 text-[15px] placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-aqua/60"
      />
    </label>
  );
}

function Pref({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-panel rounded-2xl px-5 py-4 flex items-center justify-between">
      <div>
        <div className="text-xs uppercase tracking-widest text-foreground/50 font-mono">{label}</div>
        <div className="text-[15px] font-medium mt-1">{value}</div>
      </div>
      <button className="text-sm text-foreground/60 hover:text-foreground underline underline-offset-4 decoration-foreground/20">
        Edit
      </button>
    </div>
  );
}
