import PhotoGallery from "@/components/about/photo-gallery";
import personalPhotos from "@/constants/personal-photos";
import "react-photo-view/dist/react-photo-view.css";

export default function FamilyPhotos() {
  return <PhotoGallery photos={personalPhotos} />;
}
