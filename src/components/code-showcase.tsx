import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface CodeShowcaseProps {
	title: string;
	description: string;
	code: string;
	language: string;
}

export default function CodeShowcase({
	title,
	description,
	code,
	language,
}: CodeShowcaseProps) {
	return (
		<div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
			<Card className="w-full max-w-3xl">
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
				<CardContent>
					<pre
						className={`language-${language} p-4 rounded-md bg-muted`}
					>
						<code>{code}</code>
					</pre>
				</CardContent>
				<CardFooter>
					<Button>Run Code</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
