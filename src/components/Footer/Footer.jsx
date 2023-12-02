import React from 'react'
import styles from './Footer.module.css'
import { FaGithub, FaTelegramPlane, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.copyright}>
				<p>Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
			</div>
			<div className={styles.menu}>
				<ul className={styles.menuList}>
					<li className={styles.menuItem}>
						<a href='https://t.me/alkeevivan'>
							<FaTelegramPlane className={styles.icon} />
						</a>
					</li>
					<li className={styles.menuItem}>
						<a href='https://github.com/alkeev00'>
							<FaGithub className={styles.icon} />
						</a>
					</li>
					<li className={styles.menuItem}>
						<a href='mailto:alkeev.iv@gmail.com'>
							<FaEnvelope className={styles.icon} />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
