import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { UiTextField } from './ui-text-field'
import styles from './ui-text-field.module.scss'

describe('UiTextField', () => {
	test('renders the label and input correctly', () => {
		render(<UiTextField label="Username" />)

		// Проверка, что лейбл отображается
		const labelElement = screen.getByText(/Username/i)
		expect(labelElement).toBeInTheDocument()

		// Проверка, что поле ввода отображается
		const inputElement = screen.getByRole('textbox')
		expect(inputElement).toBeInTheDocument()
	})

	test('renders error with class', () => {
		render(
			<UiTextField
				label="Username"
				error="Error"
			/>
		)

		// Проверка на отображающийся класс
		const errorInput = screen.getByText('Error')
		expect(errorInput).toBeInTheDocument()
		expect(errorInput).toHaveClass(styles.error)
	})
})
