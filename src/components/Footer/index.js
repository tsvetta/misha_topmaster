import { ContactInfo } from "../ContactInfo";

import styles from './index.css';

export function Footer() {
	return (
		<footer className={styles.pageFooter}>
			<div className={styles.pageFooterMain}>
				<ContactInfo />
				<p className={styles.year}>© 2023</p>
			</div>
		</footer>
	)
}