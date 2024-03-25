import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Page from './page'

describe('Page', () => {
	it('renders message', () => {
		render(<Page/>)

		const header = screen.getByRole('heading', { level: 1 })

		expect(header).toHaveTextContent('This is my site!! Be amazed!!')
	})
})
