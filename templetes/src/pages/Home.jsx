import HeroSlider from "../components/Home/HeroSlider";
import FeatureSection from "../components/Home/FeatureSection";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Newsletter from "../components/Home/Newsletter";
import RecentProducts from "../components/Home/RecentProducts";
import CategorySection from "../components/CategorySection";
import BrandSlider from "../components/BrandSection";

function Home() {
  return (
    <>
      <HeroSlider />
      <FeatureSection />
      <CategorySection />
      <FeaturedProducts />
      <Newsletter />
      <RecentProducts />
      <BrandSlider/>
    

      
    </>
  );
}

export default Home;
