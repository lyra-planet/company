import Header from "@/components/Header";
import _Carousel from "@/components/Carousel";
import Product from "@/components/Product";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Display from "@/components/Display";
import Bar from "@/components/Bar";
import Cards from "@/components/Cards";
import Layout from "@/components/layout";
export default function Home() {
  return (
      <>
      <_Carousel />
      <Display/>
      <Product />
      <Bar/>
      <Cards/>
      <AboutUs />
      </>
  );
}