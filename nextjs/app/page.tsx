"use client";

import Banner from "@/components/banner";
import Bottom from "@/components/bottom";
import Comments from "@/components/comments";
import Courses from "@/components/courses";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Mentors from "@/components/mentors";
import Numbers from "@/components/numbers";
import Results from "@/components/results";
import Sponsors from "@/components/sponsors";
import Why from "@/components/why";

export default function Page() {
  return (
    <div>
      <Header />
      <Hero />
      <Numbers />
      <Results />
      <Why />
      <Banner />
      <Comments />
      <Courses />
      <Sponsors />
      <Mentors />
      <Bottom />
      <Footer />
    </div>
  );
}
