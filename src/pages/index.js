import MainLayout from "@/layouts/index";
import { MainBanner } from "@/views/MainBanner";

export default function Home() {
  return (
    <>
      <MainLayout>
        <MainBanner />
      </MainLayout>
    </>
  );
}
