import Link from "next/link";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { requireSession } from "@/lib/auth";

export const dynamic = "force-dynamic";
export const metadata = { title: "No access" };

/**
 * Where requireAdmin() sends a staff account.
 *
 * Deliberately not framed as an error: nothing has gone wrong, the account
 * simply does not have this permission. It says what the account *can* do and
 * links straight there, rather than leaving somebody at a dead end.
 */
export default async function DeniedPage() {
  const session = await requireSession();

  return (
    <div className="mx-auto max-w-lg py-16 text-center">
      <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-mist-200 text-ink-muted">
        <Lock className="size-6" aria-hidden="true" />
      </span>

      <h1 className="mt-5 text-xl font-bold text-ink">That page is for admin accounts.</h1>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        You are signed in as <strong className="font-semibold text-ink">{session.name}</strong>{" "}
        with the <strong className="font-semibold text-ink">{session.role}</strong> role. Staff
        accounts can view and work every enquiry - updating status, adding notes, exporting the
        list - but content editing and team accounts are restricted to admins.
      </p>

      <p className="mt-3 text-sm text-muted-foreground">
        If you need access, ask an admin to change your role on the Team accounts page.
      </p>

      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/admin/enquiries/">Go to enquiries</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/admin/">Overview</Link>
        </Button>
      </div>
    </div>
  );
}
