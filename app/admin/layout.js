import { redirect } from "next/navigation";
import AdminShell from "@/components/admin/AdminShell";
import { getSession } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { Enquiry } from "@/models";

export const metadata = {
  title: { default: "Dashboard", template: "%s · Alisha Admin" },
  robots: { index: false, follow: false, nocache: true },
};

/**
 * The authoritative auth boundary for the dashboard.
 *
 * proxy.js already bounces signed-out visitors, but that is an optimistic
 * check on a cookie. This runs on the server for every admin render and is
 * what actually decides whether the page is allowed to exist.
 *
 * The login route lives under /admin/ too, so it is handled here rather than
 * by redirecting in a loop: it renders its own bare layout and is excluded by
 * the pathname check in proxy.js.
 */
export default async function AdminLayout({ children }) {
  const session = await getSession();

  // /admin/login/ renders through this layout too. Without a session we cannot
  // show the shell, so pass the page through unwrapped and let proxy.js handle
  // the redirect for every other admin path.
  if (!session) return children;

  let newEnquiries = 0;
  try {
    await connectToDatabase();
    newEnquiries = await Enquiry.countDocuments({ status: "new" });
  } catch {
    // A database blip should not lock staff out of the dashboard shell.
  }

  return (
    <AdminShell session={session} newEnquiries={newEnquiries}>
      {children}
    </AdminShell>
  );
}
