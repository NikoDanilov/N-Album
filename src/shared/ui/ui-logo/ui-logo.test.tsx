import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { UiLogo } from './ui-logo'

describe('UiLogo', () => {
	test('должен отрендерить логотип', () => {
		render(<UiLogo />)

		const logoElement = screen.getByTestId('ui-logo')
		expect(logoElement).toBeInTheDocument()
	})
})
