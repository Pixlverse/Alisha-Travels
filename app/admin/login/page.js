import LoginForm from "./LoginForm";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Sign in",
  robots: { index: false, follow: false },
};

/**
 * The dashboard login.
 *
 * Outside app/(site)/ deliberately, so it gets none of the public chrome — no
 * header, no footer, no loader, no sticky bar. There is no public signup:
 * accounts are created by the seed script or by an existing admin.
 */
export default async function LoginPage({ searchParams }) {
  const params = await searchParams;
  const next = typeof params?.next === "string" ? params.next : "";

  return (
    <div className="flex min-h-screen items-center justify-center bg-mist-100 px-5 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <span
            aria-hidden="true"
            className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-brand-500"
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="#fff">
              <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
            </svg>
          </span>
          <h1 className="mt-5 font-sans text-xl font-bold text-ink">{SITE.name}</h1>
          <p className="mt-1 text-sm text-ink-muted">Staff dashboard</p>
        </div>

        <div className="mt-8 rounded-2xl border border-line bg-white p-6 shadow-sm">
          <LoginForm next={next} />
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-ink-muted">
          Accounts are created by an administrator. If you cannot get in, ask whoever set up
          your account to reset your password.
        </p>
      </div>
    </div>
  );
}
