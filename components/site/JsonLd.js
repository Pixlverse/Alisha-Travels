/**
 * Renders JSON-LD.
 *
 * `application/ld+json` is data, not executable script, so this is not the
 * XSS hazard dangerouslySetInnerHTML usually signals — but the payload still
 * has to be escaped, because a literal "</script>" inside any string value
 * would close the tag early and dump the rest into the document. Replacing
 * "<" with its unicode escape is valid JSON and neutralises that.
 *
 * Null objects are skipped, so a caller can pass `faqSchema(faqs)` without
 * checking whether there were any FAQs.
 */
export default function JsonLd({ schema }) {
  const items = (Array.isArray(schema) ? schema : [schema]).filter(Boolean);
  if (!items.length) return null;

  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
