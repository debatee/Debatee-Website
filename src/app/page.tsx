import HomeSection from "./(pages)/home/page";
import WorkSection from "./(pages)/works/page";
import FeatureSection from "./(pages)/features/page";
import AboutSection from "./(pages)/about/page";
import Footer from "./_components/navigation/bars/footer/nav-footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HomeSection />
      <WorkSection />
      <FeatureSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
