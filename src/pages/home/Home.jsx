import Footer from "../../common/Footer";
import Features from "../../components/Features";
import Hero from "../../components/Hero";

export default function Home({ appStats }) {
  return (
    <div className=" ">
      <Hero />

      <Features />
      {/* <Footer /> */}
    </div>
  );
}
