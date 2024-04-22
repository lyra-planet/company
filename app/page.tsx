import Header from "@/components/Header";
import _Carousel from "@/components/Carousel";
import Product from "@/components/Product";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Display from "@/components/Display";
export default function Home() {
  return (
    <main className="flex flex-col ">
      <Header />
      <_Carousel />
      <Display/>
      <Product />
      <AboutUs />
      <Footer />
    </main>
  );
}
