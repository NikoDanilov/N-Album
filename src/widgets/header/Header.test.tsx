import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
	test('должен отрендерить хедер и его дочерние элементы', () => {
		render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		)

		const headerElement = screen.getByTestId('header')
		expect(headerElement).toBeInTheDocument()
		// Проверяем, что компонент UiLogo рендерится
		expect(screen.getByTestId('ui-logo')).toBeInTheDocument()

		// Проверяем, что кнопка с текстом "Разместить обьявление" рендерится
		expect(screen.getByText('Разместить обьявление')).toBeInTheDocument()

		// Проверяем, что текстовое поле рендерится
		expect(screen.getByRole('textbox')).toBeInTheDocument()
	})
})
