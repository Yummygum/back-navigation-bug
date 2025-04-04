import SectionDogImage from "@/app/components/SectionDogImage/SectionDogImage";

export default async function Dog() {
	return (
		<main>
			<SectionDogImage />
		</main>
	);
}

export async function generateStaticParams() {
	return [1, 2, 3].map((slug) => ({
		slug: slug.toString(),
	}));
}
