import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { UiButton } from '../ui-button'
import { UiTextField } from '../ui-text-field'
import { UiForm } from './ui-form'

describe('UiForm', () => {
	test('должен правильно отрендерить форму и дочерние элементы', () => {
		render(
			<UiForm onSubmit={vi.fn()}>
				<UiTextField
					type="text"
					name="username"
				/>
				<UiButton>Submit</UiButton>
			</UiForm>
		)

		// Проверка, что форма отрендерилась
		const formElement = screen.getByTestId('ui-form')
		expect(formElement).toBeInTheDocument()

		// Проверка, что дочерние элементы (input и button) отрендерились
		const inputElement = screen.getByRole('textbox')
		expect(inputElement).toBeInTheDocument()
		const buttonElement = screen.getByRole('button', { name: /submit/i })
		expect(buttonElement).toBeInTheDocument()
	})

	test('должен обрабатывать отправку формы', () => {
		const handleSubmit = vi.fn((e) => e.preventDefault())

		render(
			<UiForm onSubmit={handleSubmit}>
				<UiTextField
					type="text"
					name="username"
				/>
				<UiButton type="submit">Submit</UiButton>
			</UiForm>
		)

		// Симулируем отправку формы
		const formElement = screen.getByTestId('ui-form')
		fireEvent.submit(formElement)

		// Проверяем, что обработчик отправки был вызван
		expect(handleSubmit).toHaveBeenCalled()
	})

	test('должен правильно передавать другие пропсы формы', () => {
		const handleSubmit = vi.fn((e) => e.preventDefault())

		render(
			<UiForm
				onSubmit={handleSubmit}
				className="test-form"
			>
				<UiTextField
					type="text"
					name="username"
				/>
				<UiButton type="submit">Submit</UiButton>
			</UiForm>
		)

		const formElement = screen.getByTestId('ui-form')
		expect(formElement).toHaveClass('test-form')
	})
})
