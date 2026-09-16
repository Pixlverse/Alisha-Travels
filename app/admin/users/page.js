import NewUserForm from "./NewUserForm";
import UserRow from "./UserRow";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { requireAdmin } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { AdminUser } from "@/models";
import { plain } from "@/lib/data/_helpers";

export const dynamic = "force-dynamic";
export const metadata = { title: "Team accounts" };

/**
 * Team accounts.
 *
 * Two roles, as the brief defines them:
 *   admin — full CRUD on all content, plus this page
 *   staff — may view enquiries and change their status; read-only everywhere
 *           else, cannot delete content and cannot manage users
 *
 * Note the password field is `select: false` on the schema, so it is not
 * merely hidden from this page — it is never loaded into memory here at all.
 */
export default async function UsersPage() {
  const session = await requireAdmin();

  await connectToDatabase();
  const users = plain(await AdminUser.find({}).sort({ role: 1, name: 1 }).lean());

  const activeAdmins = users.filter((user) => user.role === "admin" && user.active).length;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold tracking-tight text-ink">Team accounts</h1>
        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {users.length} {users.length === 1 ? "account" : "accounts"}, {activeAdmins} active{" "}
          {activeAdmins === 1 ? "admin" : "admins"}. Staff accounts can work every enquiry but
          cannot edit content or reach this page.
        </p>
      </header>

      <NewUserForm />

      <div className="overflow-hidden rounded-xl border border-line bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Person</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Access</TableHead>
              <TableHead>Last signed in</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <UserRow
                key={user._id}
                user={user}
                isSelf={String(user._id) === String(session.id)}
              />
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="rounded-xl border border-line bg-white p-4 text-xs leading-relaxed text-muted-foreground">
        <strong className="font-semibold text-ink">Safety rules enforced on the server:</strong> you
        cannot change your own role, deactivate or delete your own account, or remove the last
        active admin. Passwords are stored only as bcrypt hashes and cannot be read back — a reset
        sets a new one, which you then pass on out of band.
      </p>
    </div>
  );
}
