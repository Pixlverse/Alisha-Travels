/**
 * Brand marks for the social links.
 *
 * lucide-react deliberately ships no brand glyphs, so the three the footer and
 * the contact page need are inlined here — one file rather than three, because
 * they are always used together.
 *
 * Facebook and Instagram are single paths in `currentColor`, so they take the
 * colour of whatever sits around them. Google is the only one drawn in its own
 * four colours: a monochrome "G" is not the Google mark, and the whole point of
 * that link is that a visitor recognises where it goes before clicking it.
 */

export function FacebookIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.07.05-1.79.22-2.43.46-.66.26-1.22.6-1.77 1.16-.56.55-.9 1.11-1.16 1.77-.24.64-.41 1.36-.46 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.07.22 1.79.46 2.43.26.66.6 1.22 1.16 1.77.55.56 1.11.9 1.77 1.16.64.24 1.36.41 2.43.46 1.06.05 1.4.06 4.12.06s3.06-.01 4.12-.06c1.07-.05 1.79-.22 2.43-.46a4.9 4.9 0 0 0 1.77-1.16c.56-.55.9-1.11 1.16-1.77.24-.64.41-1.36.46-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.07-.22-1.79-.46-2.43a4.9 4.9 0 0 0-1.16-1.77 4.9 4.9 0 0 0-1.77-1.16c-.64-.24-1.36-.41-2.43-.46C15.06 2.01 14.72 2 12 2Zm0 1.8c2.67 0 2.99.01 4.04.06.97.05 1.5.21 1.86.35.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.3.89.35 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.05.97-.21 1.5-.35 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.89.3-1.86.35-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.97-.05-1.5-.21-1.86-.35a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.36-.3-.89-.35-1.86-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.05-.97.21-1.5.35-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.89-.3 1.86-.35C9.01 3.81 9.33 3.8 12 3.8Zm0 3.06a5.14 5.14 0 1 0 0 10.28 5.14 5.14 0 0 0 0-10.28Zm0 8.48a3.34 3.34 0 1 1 0-6.68 3.34 3.34 0 0 1 0 6.68Zm6.54-8.68a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
    </svg>
  );
}

export function GoogleIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path
        fill="#4285F4"
        d="M21.6 12.23c0-.68-.06-1.33-.17-1.96H12v3.71h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.89-1.74 2.98-4.3 2.98-7.27Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.24-2.5c-.9.6-2.04.96-3.38.96-2.6 0-4.8-1.76-5.59-4.12H3.07v2.58A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.41 13.91a5.99 5.99 0 0 1 0-3.82V7.5H3.07a10 10 0 0 0 0 9l3.34-2.59Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.96c1.47 0 2.79.5 3.83 1.5l2.87-2.88C16.95 2.99 14.7 2 12 2a10 10 0 0 0-8.93 5.5l3.34 2.59C7.2 7.73 9.4 5.96 12 5.96Z"
      />
    </svg>
  );
}
