import Container from "@/components/Container";
import HeroCarousel from "@/components/hero-carousel";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";


export default function Home() {
  return (
    <div className="py-9">
      <Container>
       <HeroCarousel/>
       <ProductGrid/>
      </Container>
    </div>
  );
}
