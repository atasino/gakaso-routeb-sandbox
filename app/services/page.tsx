import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = { title: "サービス" };

export default function ServicesPage() {
  return (
    <section>
      <h1>サービス</h1>
      <ul className="cards">
        {SERVICES.map((s) => (
          <li key={s.slug} className="card">
            <h2>
              <Link href={`/services/${s.slug}`}>{s.title}</Link>
            </h2>
            <p>{s.summary}</p>
            <p className="price">{s.price}</p>
          </li>
        ))}
      </ul>
      <p>
        ご不明な点は <Link href="/contact">お問い合わせ</Link> へ。
      </p>
    </section>
  );
}
