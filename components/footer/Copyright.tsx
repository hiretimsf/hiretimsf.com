export default function Copyright() {
  return (
    <div className="text-muted-foreground max-w-5xl w-full mx-auto text-center border-x screen-line-after border-edge py-4">
      <p className="text-sm leading-5">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  );
}
