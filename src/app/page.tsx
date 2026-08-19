import { Hero } from "@/sections/Hero";
import { FirePit } from "@/sections/FirePit";
import { BrandStatement } from "@/sections/BrandStatement";
import { WeeklyMenu } from "@/sections/WeeklyMenu";
import { SpecialOfTheDay } from "@/sections/SpecialOfTheDay";
import { Marmitas } from "@/sections/Marmitas";
import { FeaturedProducts } from "@/sections/FeaturedProducts";
import { SaltySelection } from "@/sections/SaltySelection";
import { Drinks } from "@/sections/Drinks";
import { Gallery } from "@/sections/Gallery";
import { DeliveryCTA } from "@/sections/DeliveryCTA";
import { InstagramCTA } from "@/sections/InstagramCTA";
import { Location } from "@/sections/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <FirePit />
      <BrandStatement />
      <WeeklyMenu />
      <SpecialOfTheDay />
      <Marmitas />
      <FeaturedProducts />
      <SaltySelection />
      <Drinks />
      <Gallery />
      <DeliveryCTA />
      <InstagramCTA />
      <Location />
    </>
  );
}
