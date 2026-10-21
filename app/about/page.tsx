import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "お店について" };

export default function AboutPage() {
  return (
    <article>
      <h1>お店について</h1>
      <p>
        {SITE.name} は、近所の方に毎日食べてもらえるパンを目指す、という設定の架空のパン屋です。
        小麦は国産、酵母は店で育てたもの、という設定になっています。
      </p>
      <h2>店舗情報</h2>
      <dl>
        <dt>住所</dt>
        <dd>{SITE.address}</dd>
        <dt>営業時間</dt>
        <dd>{SITE.hours}</dd>
        <dt>電話</dt>
        <dd>{SITE.phone}</dd>
      </dl>
      <p>
        ご予約・ご相談は <Link href="/contact">お問い合わせ</Link> から。 メニューは{" "}
        <Link href="/services">サービス</Link> にまとめています。
      </p>
    </article>
  );
}
