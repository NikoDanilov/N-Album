import { render, screen } from '@testing-library/react'
import { describe } from 'node:test'
import { MemoryRouter } from 'react-router'
import { expect, test } from 'vitest'
import { App, UnWrappedApp } from '../App'

describe('react-router', () => {
	test('renders Home page by default ', () => {
		render(<App />)

		expect(screen.getByText(/Home/i)).toBeInTheDocument()
	})

	test('renders path:/34', () => {
		render(
			<MemoryRouter initialEntries={['/34']}>
				<UnWrappedApp />
			</MemoryRouter>
		)
		// Доделать тест
		// expect(screen.getByText(/34/i)).toBeInTheDocument()
	})
})
