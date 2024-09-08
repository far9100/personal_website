export default function Footer() {
	return (
		<footer className="bg-background border-t">
			<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
				<p className="text-center text-muted-foreground">
					© {new Date().getFullYear()} My Portfolio. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}
