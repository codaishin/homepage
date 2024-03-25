import '@testing-library/jest-dom'

import Page from './page'
import { render } from '@testing-library/react'

describe('Page', () => {
	it('renders message', () => {
		const { getByRole } = render(<Page/>)

		const h1 = getByRole('heading', { level: 1 })

		expect(h1).toHaveTextContent('This is my site!! Be amazed!!')
	})
})
