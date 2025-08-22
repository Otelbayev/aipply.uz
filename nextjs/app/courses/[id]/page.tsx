import type { Metadata } from "next";
import { python } from "@/utils/python";
import { graphicDesign } from "@/utils/graphic";
import { Course } from "@/types";
import { interior } from "@/utils/interior";
import { motion } from "@/utils/motion";
import { noCoding } from "@/utils/nocoding";
import { computerScience } from "@/utils/computerScience";
import { birOy } from "@/utils/biroy";
import { foundation } from "@/utils/foundation";
import { reactJs } from "@/utils/front";
import ClientPage from "@/components/client-page";

type Props = {
  params: { id: string };
};

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

export function generateMetadata({ params }: Props) {
  const { id } = params;
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

export default function Page({ params }: Props) {
  const { id } = params;
  const data = courses[id];
  return <ClientPage data={data} />;
}
