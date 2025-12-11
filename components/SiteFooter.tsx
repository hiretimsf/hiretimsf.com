import TechStacks from "@/components/footer/TechStacks";
import BottomNavLinks from "@/components/footer/BottomNavLinks";
import InspiredBy from "@/components/footer/InspiredBy";
import Copyright from "@/components/footer/Copyright";
import SeparatorHorizontal from "@/components/SeparatorHorizontal";

export default function SiteFooter() {
  return (
    <footer className="w-full mx-auto overflow-x-hidden">
      <InspiredBy />
      <TechStacks />
      <SeparatorHorizontal short={true} />
      <BottomNavLinks />
      <Copyright />
    </footer>
  );
}
