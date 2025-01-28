import { FC } from 'react'
import styles from './Layout.module.scss'

export interface ILayout {
	header: React.ReactNode
	main: React.ReactNode
}

export const Layout: FC<ILayout> = ({ header, main }) => {
	return (
		<div data-testid="layout">
			{header}
			<main className={styles.main}>{main}</main>
		</div>
	)
}
