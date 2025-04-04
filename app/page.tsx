import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.container}>
			<div className={styles.flex}>
				<h1>Back Navigation Bug Example</h1>
				<ul className={styles.list}>
					<li>Click the button below to route to dog 1.</li>
					<li>After 3 seconds, it will automatically navigate to the next dog.</li>
					<li>If you use the provided button (Link), the back button in your browser will sometimes work and sometimes not.</li>
					<li>
						If you directly navigate to any dog slug (e.g., /dog/1, /dog/2, or /dog/3) and wait for some automatic navigations, pressing the back button does
						not work as expected and shows a blank new tab page.
					</li>
				</ul>

				<Link href="/dog/1">
					<button className={styles.button}>Go to Dog 1</button>
				</Link>
			</div>
		</main>
	);
}
