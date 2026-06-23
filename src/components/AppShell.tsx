import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function AppNav({ active }: { active?: "matches" | "chat" | "profile" }) {
  const link = (key: string, to: string, label: string) => (
    <Link
      to={to}
      className={`transition-colors ${
        active === key ? "text-foreground" : "text-foreground/60 hover:text-foreground"
      }`}
    >
      {label}
    </Link>
  );
  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-5xl">
      <div className="glass-panel rounded-full pl-6 pr-2 py-2 flex items-center justify-between">
        <Link to="/" className="font-display font-extrabold text-xl tracking-tight">
          BOND
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          {link("matches", "/matches", "Matches")}
          {link("chat", "/chat", "Messages")}
          {link("profile", "/profile", "Profile")}
        </div>
        <Link
          to="/profile"
          className="w-10 h-10 rounded-full orb-refraction border border-white/60 grid place-items-center text-xs font-semibold"
          aria-label="Profile"
        >
          EH
        </Link>
      </div>
    </nav>
  );
}

export function AppShell({
  active,
  children,
}: {
  active?: "matches" | "chat" | "profile";
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-aqua/40">
      <div className="film-grain" aria-hidden />
      <AppNav active={active} />
      <main className="pt-28 sm:pt-32">{children}</main>
    </div>
  );
}

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-body overflow-hidden selection:bg-aqua/40">
      <div className="film-grain" aria-hidden />
      {/* ambient orbs */}
      <div
        className="absolute -top-32 -left-20 w-[28rem] h-[28rem] rounded-full orb-refraction animate-float-orb opacity-70"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -right-24 w-[34rem] h-[34rem] rounded-full orb-refraction animate-drift opacity-60"
        aria-hidden
      />
      <Link
        to="/"
        className="fixed top-6 left-6 z-40 font-display font-extrabold text-xl tracking-tight"
      >
        BOND
      </Link>
      <div className="relative z-10 min-h-screen grid place-items-center px-6 py-24">
        {children}
      </div>
    </div>
  );
}

export function Kicker({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-foreground/50 font-mono">
      <span>{n}</span>
      <span className="w-8 h-px bg-foreground/30" />
      <span>{label}</span>
    </div>
  );
}
