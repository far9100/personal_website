import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
			<h1 className="text-4xl font-bold mb-6">
				Welcome to My Code Portfolio
			</h1>
			<p className="text-xl text-muted-foreground mb-8 text-center max-w-2xl">
				Explore my projects and get to know me better!
			</p>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<Link href="/project1">
					<Button variant="outline" className="w-full">
						Project 1
					</Button>
				</Link>
				<Link href="/project2">
					<Button variant="outline" className="w-full">
						Project 2
					</Button>
				</Link>
				<Link href="/project3">
					<Button variant="outline" className="w-full">
						Project 3
					</Button>
				</Link>
			</div>
		</div>
	);
}
