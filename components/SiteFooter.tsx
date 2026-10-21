import Link from "next/link";
import { SITE, FICTIONAL_NOTICE } from "@/lib/site";

const FOOTER_LINKS = [
  { href: "/about", label: "お店について" },
  { href: "/services", label: "サービス" },
  { href: "/contact", label: "お問い合わせ" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="inner">
        <p>
          <strong>{SITE.name}</strong>
          <br />
          {SITE.address}
        </p>
        <ul className="footer-links">
          {FOOTER_LINKS.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <p className="notice">{FICTIONAL_NOTICE}</p>
      </div>
    </footer>
  );
}
