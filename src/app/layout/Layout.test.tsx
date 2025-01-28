import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Header } from '../../widgets/header'
import { Layout } from './Layout'

describe('Layout', () => {
	test('render Layout and children-components', () => {
		render(
			<Layout
				header={<Header />}
				main={<div>content</div>}
			/>
		)

		const layoutElement = screen.getByTestId('layout')
		expect(layoutElement).toBeInTheDocument()

		const headerElement = screen.getByTestId('header')
		expect(headerElement).toBeInTheDocument()

		const contentElement = screen.getByText(/content/i)
		expect(contentElement).toBeInTheDocument()
	})
})
