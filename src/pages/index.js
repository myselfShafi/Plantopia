import { HorizontalStrip } from "@/components/Strips/HorizontalStrip";
import { ContentGrid } from "@/views/ContentGrid";
import { FeatureDiv } from "@/views/FeatureDiv";
import { MainBanner } from "@/views/MainBanner";

export default function Home() {
  return (
    <>
      <MainBanner />
      <HorizontalStrip />
      <ContentGrid />
      <FeatureDiv />
    </>
  );
}
