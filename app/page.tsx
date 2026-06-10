import HeroSection from "@/components/hero/page";
import Preloader from "@/components/preloader/page";

const Home = () => {
  return (
    <>
      <Preloader />
      <main>
        <HeroSection />
      </main>
    </>
  );
};

export default Home;
