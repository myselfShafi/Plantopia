import { HorizontalStrip } from "@/components/Strips/HorizontalStrip";
import { ContentGrid } from "@/views/ContentGrid";
import { MainBanner } from "@/views/MainBanner";

export default function Home() {
  return (
    <>
      <MainBanner />
      <HorizontalStrip />
      <ContentGrid />
    </>
  );
}
