import { FC } from 'react'
import styles from './HeaderLayout.module.scss'

export interface IHeaderLayout {
	logo: React.ReactNode
	search: React.ReactNode
	addCar: React.ReactNode
}

export const HeaderLayout: FC<IHeaderLayout> = ({ logo, search, addCar }) => {
	return (
		<header
			className={styles.header}
			data-testid="header"
		>
			<div className={styles.container}>
				<div className={styles.inner}>
					{logo}
					{search}
					{addCar}
				</div>
			</div>
		</header>
	)
}
