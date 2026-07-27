import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const footerPath = new URL("../components/Footer.tsx", import.meta.url);
const stylesPath = new URL("../app/globals.css", import.meta.url);

test("the dark footer renders the brand mark and navigation with high contrast", async () => {
  const [footer, styles] = await Promise.all([
    readFile(footerPath, "utf8"),
    readFile(stylesPath, "utf8"),
  ]);

  assert.match(footer, /className="footer-logo"/);
  assert.match(styles, /\.footer-logo\s*\{[^}]*filter:\s*brightness\(0\)\s+invert\(1\)/s);
  assert.match(footer, /className="footer-nav-link"/);
  assert.match(styles, /\.footer-nav-link\s*\{[^}]*color:\s*var\(--text-dark\)/s);
  assert.match(
    styles,
    /@media \(max-width: 768px\)\s*\{[\s\S]*?\.footer-top\s*\{[^}]*flex-direction:\s*column/s,
  );
});
