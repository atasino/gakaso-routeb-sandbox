import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1>ページが見つかりません</h1>
      <p>
        <Link href="/">ホームへ戻る</Link>
      </p>
    </section>
  );
}
