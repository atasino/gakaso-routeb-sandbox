import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>{SITE.name}</h1>
        <p>{SITE.tagline}</p>
        <p>
          <Link href="/services" className="button">
            サービスを見る
          </Link>{" "}
          <Link href="/contact" className="button secondary">
            お問い合わせ
          </Link>
        </p>
      </section>
      <section>
        <h2>人気のサービス</h2>
        <ul className="cards">
          {SERVICES.map((s) => (
            <li key={s.slug} className="card">
              <h3>
                <Link href={`/services/${s.slug}`}>{s.title}</Link>
              </h3>
              <p>{s.summary}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>お知らせ</h2>
        <p>
          営業時間: {SITE.hours}。詳しくは <Link href="/about">お店について</Link> をご覧ください。
        </p>
      </section>
    </>
  );
}
