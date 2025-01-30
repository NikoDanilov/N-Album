import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import { UiLogo } from './ui-logo'

describe('UiLogo', () => {
	test('должен отрендерить логотип', () => {
		render(
			<MemoryRouter>
				<UiLogo />
			</MemoryRouter>
		)

		const logoElement = screen.getByTestId('ui-logo')
		expect(logoElement).toBeInTheDocument()
	})
})
