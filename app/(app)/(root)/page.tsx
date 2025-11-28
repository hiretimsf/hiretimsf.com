export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center gap-4 border-x border-border py-10">
			<h1 className="text-2xl font-bold">Home</h1>
			<p className="text-sm text-muted-foreground">
				Welcome to my website. This is a simple website built with Next.js and
				Tailwind CSS.
			</p>

			<div className="mt-10 w-full max-w-2xl space-y-8 px-4">
				{Array.from({ length: 10 }).map((_, i) => (
					<section key={i} className="rounded-lg border p-6">
						<h2 className="mb-4 text-xl font-semibold">Section {i + 1}</h2>
						<p className="leading-relaxed text-muted-foreground">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<p className="mt-4 leading-relaxed text-muted-foreground">
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo.
						</p>
					</section>
				))}
			</div>
		</div>
	);
}
