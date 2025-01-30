import { Link } from 'react-router'
import styles from './ui-logo.module.scss'

export const UiLogo = () => {
	return (
		<Link
			className={styles.logo}
			data-testid="ui-logo"
			to="/"
		>
			N-Album
		</Link>
	)
}
