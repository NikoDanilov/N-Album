import styles from './ui-logo.module.scss'

export const UiLogo = () => {
	return (
		<div
			className={styles.logo}
			data-testid="ui-logo"
		>
			NAuto
		</div>
	)
}
