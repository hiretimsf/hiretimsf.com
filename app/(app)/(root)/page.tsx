import SeparatorHorizontal from "@/components/SeparatorHorizontal";
import Hero from "@/features/home/components/Hero";
import HeadingTitle from "@/components/HeadingTitle";
import ContactMe from "@/components/ContactMe";
import FeaturedApps from "@/features/home/components/FeaturedApps";
import Testimonials from "@/features/home/components/Testimonials";
import { FaqSection } from "@/features/home/components/FAQ";

export default function Home() {
  return (
    <>
      <SeparatorHorizontal borderTop={false} />
      <Hero
        imageSrcDesktop="/images/vertical-profile.jpg"
        imageSrcMobile="/images/horizontal-profile.jpg"
        imageAlt="Professional headshot of Tim, a Frontend Developer based in San Francisco Bay Area"
      />
      <SeparatorHorizontal short={true} />
      <HeadingTitle
        title="Featured Apps"
        textStyleClassName="text-2xl font-bold sm:text-3xl"
      />
      <SeparatorHorizontal short={true} />
      <FeaturedApps />
      <SeparatorHorizontal short={true} />
      <HeadingTitle
        title="What People Are Saying"
        textStyleClassName="text-2xl font-bold sm:text-3xl"
      />
      <SeparatorHorizontal short={true} />
      <Testimonials />
      <SeparatorHorizontal />
      <HeadingTitle
        title="FAQ"
        textStyleClassName="text-2xl font-bold sm:text-3xl"
      />
      <SeparatorHorizontal short={true} />
      <FaqSection />
      <SeparatorHorizontal short={true} />
      <ContactMe />
      <SeparatorHorizontal borderBottom={false} />
    </>
  );
}
