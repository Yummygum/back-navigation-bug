/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "./SectionDogImage.module.css";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function SectionDogImage() {
	const router = useRouter();
	const pathname = usePathname();
	const currentDog = parseInt(pathname.split("/").pop() || "1", 10);

	useEffect(() => {
		const interval = setInterval(() => {
			const nextDog = currentDog === 3 ? 1 : currentDog + 1;
			router.push(`/dog/${nextDog}`);
		}, 3000);

		return () => clearInterval(interval);
	}, [currentDog, router]);

	return <img alt="dog" src={`/images/dog-${currentDog}.jpg`} className={styles.image} />;
}
