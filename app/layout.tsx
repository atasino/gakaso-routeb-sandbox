import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "サンプルベーカリー（架空）",
    template: "%s | サンプルベーカリー（架空）",
  },
  description: "Gakaso のルート B を試すための、架空のパン屋のサンプルサイトです。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <SiteNav />
        <main className="inner">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
