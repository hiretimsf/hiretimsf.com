import { cn } from "@/lib/utils";

interface SeparatorHorizontalProps {
	className?: string;
}

export default function SeparatorHorizontal({
	className,
}: SeparatorHorizontalProps) {
	return (
		<div
			className={cn(
				"relative flex h-8 w-full border-x border-edge",
				"before:absolute before:left-1/2 before:-translate-x-1/2 before:-z-1 before:h-8 before:w-[200vw] before:border-y before:border-edge",
				"before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
				className,
			)}
		/>
	);
}
