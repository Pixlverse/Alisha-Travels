import bcrypt from "bcryptjs";

/**
 * bcrypt cost factor. 12 is the current sensible default: roughly a quarter of
 * a second on modern hardware, which is slow enough to matter to an attacker
 * and fast enough that a login does not feel sluggish.
 */
const ROUNDS = 12;

export function hashPassword(plain) {
  return bcrypt.hash(plain, ROUNDS);
}

export function verifyPassword(plain, hash) {
  return bcrypt.compare(plain, hash);
}

/**
 * Constant-ish work even when the account does not exist, so an attacker
 * cannot tell a wrong e-mail from a wrong password by timing the response.
 */
const DUMMY_HASH = "$2b$12$C6UzMDM.H6dfI/f/IKcEeO3fVoYQXcUOZ7xJ0LZLpEjE7dTbzHqm2";

export function verifyPasswordSafely(plain, hash) {
  return bcrypt.compare(plain, hash || DUMMY_HASH);
}
