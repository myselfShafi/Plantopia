import { HorizontalStrip } from "@/components/Strips/HorizontalStrip";
import { ContentGrid } from "@/views/ContentGrid";
import { FeatureDiv } from "@/views/FeatureDiv";
import { MainBanner } from "@/views/MainBanner";
import { Testimonials } from "@/views/Testimonials";

export default function Home() {
  return (
    <>
      <MainBanner />
      <HorizontalStrip />
      <ContentGrid />
      <Testimonials />
      <FeatureDiv />
    </>
  );
}
