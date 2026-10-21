import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, findService } from "@/lib/services";

// Static export: every slug is rendered at build time and nothing else exists.
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  return { title: service ? service.title : "サービス" };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();
  return (
    <article>
      <p>
        <Link href="/services">← サービス一覧へ</Link>
      </p>
      <h1>{service.title}</h1>
      <p>{service.summary}</p>
      {service.body.map((line) => (
        <p key={line}>{line}</p>
      ))}
      <p className="price">{service.price}</p>
      <p>
        <Link href="/contact" className="button">
          このサービスについて問い合わせる
        </Link>
      </p>
    </article>
  );
}
