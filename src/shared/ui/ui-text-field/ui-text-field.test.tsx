import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { UiTextField } from './ui-text-field'

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
})
