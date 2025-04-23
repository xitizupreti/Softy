import Carousel from "@/components/Carousel";
import Categories from "@/components/Categories";
import Discover from "@/components/Discover";
import Hygiene from "@/components/Hygiene";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="pt-10"></div>
      <Carousel />
      <Categories />
      <Discover />
      <Hygiene />
      <Footer />
    </>
  );
}
