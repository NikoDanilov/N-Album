import clsx from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'
import styles from './ui-button.module.scss'

export type UiButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
	loading?: boolean
}

export const UiButton: FC<UiButtonType> = ({
	className,
	children,
	loading = false,
	...props
}) => {
	return (
		<button
			{...props}
			className={clsx(className, styles.button)}
		>
			{loading ? <div>Loading...</div> : children}
		</button>
	)
}
