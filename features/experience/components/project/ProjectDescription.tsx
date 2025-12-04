type ProjectDescriptionProps = {
  description: string;
};

export function ProjectDescription({ description }: ProjectDescriptionProps) {
  return (
    <p className="text-foreground/80 text-md/6 line-clamp-2">{description}</p>
  );
}
