import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Categories from "@/components/Categories";
import Discover from "@/components/Discover";
import Hygiene from "@/components/Hygiene";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Categories />
      <Discover />
      <Hygiene />
      <Footer />
    </>
  );
}
