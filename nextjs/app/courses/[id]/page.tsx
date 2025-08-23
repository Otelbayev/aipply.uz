import type { Metadata } from "next";
import ClientPage from "@/components/client-page";
import { python } from "@/utils/python";
import { graphicDesign } from "@/utils/graphic";
import { interior } from "@/utils/interior";
import { motion } from "@/utils/motion";
import { noCoding } from "@/utils/nocoding";
import { computerScience } from "@/utils/computerScience";
import { birOy } from "@/utils/biroy";
import { foundation } from "@/utils/foundation";
import { reactJs } from "@/utils/front";
import { Course } from "@/types";

const courses: Record<string, Course> = {
  python,
  "grafik-dizayn": graphicDesign,
  "interior-exterior-dizayn": interior,
  "kompyuter-savodxonligi": computerScience,
  "frontend-reactjs": reactJs,
  foundation,
  "bir-oyda-bir-veb-sayt": birOy,
  "no-coding": noCoding,
  "moushin-dizayn": motion,
};

export async function generateStaticParams() {
  return Object.keys(courses).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params; // 🔑 params endi await qilinadi
  const data = courses[id];

  if (!data) {
    return {
      title: "Aipply Academy kurslari",
      description: "Zamonaviy IT va dizayn kurslari",
    };
  }

  return {
    title: data.showcase.title,
    description: data.showcase.desc,
    keywords: data.showcase.keywords,
    icons: { icon: data.showcase.icon },
    openGraph: {
      title: data.showcase.title,
      description: data.showcase.desc,
      images: [data.showcase.icon],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // 🔑 bu ham await qilinadi
  const data = courses[id];
  return <ClientPage data={data} />;
}
