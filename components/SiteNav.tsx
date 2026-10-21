import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "お店について" },
  { href: "/services", label: "サービス" },
  { href: "/contact", label: "お問い合わせ" },
];

export function SiteNav() {
  return (
    <header className="site-header">
      <div className="inner">
        <Link href="/" className="brand">
          サンプルベーカリー（架空）
        </Link>
        <nav aria-label="メインメニュー">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
