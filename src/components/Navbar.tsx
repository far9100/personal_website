import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
	return (
		<nav className="bg-background border-b">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link href="/" className="text-xl font-bold">
							My Portfolio
						</Link>
					</div>
					<div className="flex space-x-4">
						<Button variant="ghost" asChild>
							<Link href="/">Home</Link>
						</Button>
						<Button variant="ghost" asChild>
							<Link href="/about">About</Link>
						</Button>
						<Button variant="ghost" asChild>
							<Link href="/project1">Project 1</Link>
						</Button>
						<Button variant="ghost" asChild>
							<Link href="/project2">Project 2</Link>
						</Button>
						<Button variant="ghost" asChild>
							<Link href="/project3">Project 3</Link>
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}
