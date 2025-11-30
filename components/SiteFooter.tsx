import TechStacks from "@/components/footer/TechStacks";
import BottomLinks from "@/components/footer/BottomLinks";
import InspiredBy from "@/components/footer/InspiredBy";
import Copyright from "@/components/footer/Copyright";

export function SiteFooter() {
  return (
    <footer className="w-full mx-auto overflow-x-hidden">
      <InspiredBy />
      <TechStacks />
      <BottomLinks />
      <Copyright />
    </footer>
  );
}
