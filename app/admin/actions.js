"use server";

import { redirect } from "next/navigation";
import { destroySession, login } from "@/lib/auth";

/**
 * Auth Server Actions.
 *
 * Kept apart from the content actions so it is obvious that these two are the
 * only ones a signed-out visitor can reach.
 */

export async function loginAction(_previousState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const next = formData.get("next");

  const result = await login(email, password);
  if (!result.ok) return { error: result.error };

  // A `next` from the query string is attacker-influenced, so only same-site
  // admin paths are honoured — never an absolute URL to somewhere else.
  const target =
    typeof next === "string" && /^\/admin(\/|$)/.test(next) && !next.startsWith("//")
      ? next
      : "/admin/";

  redirect(target);
}

export async function logoutAction() {
  await destroySession();
  redirect("/admin/login/");
}
