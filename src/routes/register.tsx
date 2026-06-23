import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell, Kicker } from "@/components/AppShell";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Request access — Bond" },
      { name: "description", content: "Request access to Bond. Currently invite-only in NYC." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <AuthShell>
      <div className="w-full max-w-md">
        <Kicker n="00" label="Request access" />
        <h1 className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight mt-6 leading-[0.95]">
          Begin the
          <br />
          <em className="italic font-medium text-foreground/70">application.</em>
        </h1>
        <p className="mt-4 text-foreground/60 text-[15px] leading-relaxed">
          Every Bond member is reviewed by a real person. We&rsquo;ll respond within 72 hours.
        </p>

        <form className="mt-10 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Field label="First name" placeholder="Eleanor" />
          <Field label="Email" type="email" placeholder="you@domain.com" />
          <Field label="Invite code (optional)" placeholder="BOND-XXXX" />
          <Field label="Password" type="password" placeholder="At least 12 characters" />

          <label className="flex items-start gap-3 mt-4 text-sm text-foreground/60">
            <input type="checkbox" className="mt-1 accent-foreground" defaultChecked />
            <span>
              I agree to Bond&rsquo;s{" "}
              <a className="underline underline-offset-4 decoration-foreground/30">Community Standards</a> and{" "}
              <a className="underline underline-offset-4 decoration-foreground/30">Privacy Promise</a>.
            </span>
          </label>

          <Link
            to="/onboarding"
            className="block text-center w-full bg-foreground text-background py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-foreground/90 transition-all mt-4"
          >
            Apply to join
          </Link>
        </form>

        <p className="mt-8 text-sm text-foreground/60 text-center">
          Already a member?{" "}
          <Link to="/login" className="text-foreground font-medium underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground">
            Sign in
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-foreground/50 font-mono">{label}</span>
      <input
        {...rest}
        className="mt-2 w-full glass-panel rounded-2xl px-5 py-4 text-[15px] placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-aqua/60"
      />
    </label>
  );
}
