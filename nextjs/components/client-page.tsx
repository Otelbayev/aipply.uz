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
import { Course } from "@/types";

export default function ClientPage({ data }: { data: Course }) {
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
