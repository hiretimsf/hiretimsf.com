import PhotoGallery from "@/features/about/components/PhotoGallery";
import personalPhotos from "@/features/about/data/personal-photos";
import "react-photo-view/dist/react-photo-view.css";

export default function FamilyPhotos() {
  return <PhotoGallery photos={personalPhotos} />;
}
