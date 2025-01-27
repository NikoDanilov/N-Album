import { FC, FormHTMLAttributes } from 'react'

export type UiFormType = FormHTMLAttributes<HTMLFormElement> & {}

export const UiForm: FC<UiFormType> = ({ children, ...props }) => {
	return (
		<form
			data-testid="ui-form"
			{...props}
		>
			{children}
		</form>
	)
}
