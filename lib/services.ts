export interface Service {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  price: string;
}

export const SERVICES: Service[] = [
  {
    slug: "bread-subscription",
    title: "食パン定期便",
    summary: "毎週決まった曜日に、焼きたての食パンをお届けします。",
    body: [
      "週 1 回または隔週で、お好みの食パンをご用意します。",
      "お届け曜日の変更・お休みは、前の週の金曜日までにご連絡ください。",
    ],
    price: "1 斤 480 円〜（架空の価格）",
  },
  {
    slug: "cake-order",
    title: "ケーキのご予約",
    summary: "誕生日や記念日のケーキを、サイズとメッセージを選んでご予約いただけます。",
    body: [
      "ホール 4 号・5 号・6 号からお選びいただけます。",
      "ご予約は受け取り日の 3 日前までにお願いします。",
    ],
    price: "4 号 2,800 円〜（架空の価格）",
  },
  {
    slug: "catering",
    title: "出張販売・ケータリング",
    summary: "イベントや会社の集まりに、パンと焼き菓子を出張してお届けします。",
    body: [
      "20 名さまから承ります。会場へのお届けと、簡単な陳列まで行います。",
      "お見積りは、人数と日時をお知らせいただければ、後日ご連絡します。",
    ],
    price: "1 名さま 900 円〜（架空の価格）",
  },
];

export function findService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
