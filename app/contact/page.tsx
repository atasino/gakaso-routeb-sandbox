import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "お問い合わせ" };

export default function ContactPage() {
  return (
    <article>
      <h1>お問い合わせ</h1>
      <p>
        ご予約・ご相談は、お電話または店頭でお受けします。このサイトは架空のサンプルなので、
        実際にはどこにもつながりません。
      </p>
      <dl>
        <dt>電話</dt>
        <dd>{SITE.phone}</dd>
        <dt>受付時間</dt>
        <dd>{SITE.hours}</dd>
        <dt>住所</dt>
        <dd>{SITE.address}</dd>
      </dl>
      <h2>ご予約の流れ</h2>
      <ol>
        <li>
          <Link href="/services">サービス</Link> からご希望のものをお選びください。
        </li>
        <li>お電話で、日時と人数（または数量）をお伝えください。</li>
        <li>ご予約の確認をお伝えします。</li>
      </ol>
    </article>
  );
}
