import Categories from "@/components/Global/Categories";
import WeddingInvitations from "@/components/Global/WeddingInvitation";
import Banner from "@/components/Home/Banner";
import Difference from "@/components/Home/Difference";
import PaperSource from "@/components/Home/PaperOptions";
import Phone from "@/components/Home/Phone";
import ShopBySeason from "@/components/Home/ShopBySeason";
import VirtualConsultations from "@/components/Home/VirtualConsultation";
import WeddingInspiration from "@/components/Home/WeddingInspiration";
import WeddingStationery from "@/components/Home/WeddingStationary";
import WeddingSuite from "@/components/Home/WeddungSuite";




export default function Home() {

  return (
    <div className="text-center">
      {/* <Categories /> */}
      <Banner/>
      <PaperSource />
      <WeddingInvitations />
      <WeddingStationery />
      <Difference/>
      <ShopBySeason />
      <VirtualConsultations />
      <WeddingSuite />
    </div>
  );
}
