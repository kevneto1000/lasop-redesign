import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import WhyChooseUs from "@/components/home/WhyChooseUs";
// import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import About from "@/components/home/About";
import LearnStudyWork from "@/components/home/LearnStudyWork";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhyChooseUs /> 
      <About />
      <LearnStudyWork />  
      {/* <FeaturedPrograms />  */} 
    </>
  );
}