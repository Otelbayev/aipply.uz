"use client";

import Accardion from "@/components/accardion";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Results from "@/components/results";
import Showcase from "@/components/showcase";
import { Loader2 } from "lucide-react";
import CourseTime from "@/components/course-time";
import Numbers from "@/components/numbers";
import Where from "@/components/where";
import How from "@/components/how";
import CourseInfo from "@/components/stats";
import { useEffect, useState } from "react";
import { Course } from "@/types";
import { interior } from "@/utils/interior";
import { motion } from "@/utils/motion";
import { noCoding } from "@/utils/nocoding";
import { computerScience } from "@/utils/computerScience";
import { birOy } from "@/utils/biroy";
import { foundation } from "@/utils/foundation";
import { reactJs } from "@/utils/front";
import { python } from "@/utils/python";
import { graphicDesign } from "@/utils/graphic";

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

export default function ClientPage({ id }: { id: string }) {
  const [data, setData] = useState<Course | null>(null);

  useEffect(() => {
    if (id && courses[id]) {
      setData(courses[id]);
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!data) {
    return (
      <div className="w-full h-screen absolute z-99 flex items-center justify-center bg-white/90 text-black">
        <Loader2 className="animate-spin w-10 h-10" />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Showcase showcase={data?.showcase} />
      <CourseTime month={data?.month} />
      <Numbers />
      <CourseInfo statistics={data?.statistics} />
      {data.results.length ? <Results results={data?.results} /> : null}
      <How data={data?.about} />
      <Where data={data.then} />
      <Accardion modules={data?.module} />
      <Banner />
      <div className="mb-5" />
      <Footer />
    </div>
  );
}
