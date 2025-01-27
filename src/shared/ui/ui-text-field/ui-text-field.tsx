import clsx from 'clsx'
import { forwardRef, InputHTMLAttributes, useId } from 'react'
import styles from './ui-text-field.module.scss'

export type UiTextFieldType = InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	className?: string
	error?: string
	inputProps?: InputHTMLAttributes<HTMLInputElement>
}

export const UiTextField = forwardRef<HTMLInputElement, UiTextFieldType>(
	({ label, className, inputProps, error }: UiTextFieldType, ref) => {
		const id = useId()
		return (
			<div className={clsx(className, styles.textField)}>
				{label && (
					<label
						htmlFor={id}
						className={styles.label}
					>
						{label}
					</label>
				)}
				<input
					{...inputProps}
					id={id}
					ref={ref}
					className={clsx(inputProps?.className, styles.inputs)}
				/>
				{error && <div className={styles.error}>{error}</div>}
			</div>
		)
	}
)
