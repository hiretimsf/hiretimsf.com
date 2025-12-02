type ProjectDescriptionProps = {
  description: string;
};

export function ProjectDescription({ description }: ProjectDescriptionProps) {
  return (
    <p className="text-panda-text/80 text-md/6 line-clamp-2">{description}</p>
  );
}
