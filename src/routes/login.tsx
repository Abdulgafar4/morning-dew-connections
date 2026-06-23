import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell, Kicker } from "@/components/AppShell";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Bond" },
      { name: "description", content: "Sign in to Bond. Invite-only dating for intentional New Yorkers." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <AuthShell>
      <div className="w-full max-w-md">
        <Kicker n="00" label="Welcome back" />
        <h1 className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight mt-6 leading-[0.95]">
          Sign in,
          <br />
          <em className="italic font-medium text-foreground/70">quietly.</em>
        </h1>
        <p className="mt-4 text-foreground/60 text-[15px] leading-relaxed">
          Your matches are waiting. We&rsquo;ll never post, never notify, never share.
        </p>

        <form className="mt-10 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Field label="Email" type="email" placeholder="you@domain.com" />
          <Field label="Password" type="password" placeholder="••••••••" />

          <button
            type="submit"
            className="w-full bg-foreground text-background py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-foreground/90 transition-all mt-2"
          >
            Continue
          </button>

          <div className="flex items-center gap-4 my-6">
            <span className="flex-1 h-px bg-border" />
            <span className="text-xs text-foreground/40 uppercase tracking-widest">or</span>
            <span className="flex-1 h-px bg-border" />
          </div>

          <button
            type="button"
            className="w-full glass-panel py-4 rounded-full text-sm font-medium hover:bg-white/70 transition-all"
          >
            Continue with Apple
          </button>
          <button
            type="button"
            className="w-full glass-panel py-4 rounded-full text-sm font-medium hover:bg-white/70 transition-all"
          >
            Use my invite link
          </button>
        </form>

        <p className="mt-8 text-sm text-foreground/60 text-center">
          New to Bond?{" "}
          <Link to="/register" className="text-foreground font-medium underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground">
            Request access
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
