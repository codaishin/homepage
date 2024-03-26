import '@testing-library/jest-dom'

import { Page } from './page'
import { render } from '@testing-library/react'

describe('navigation callback', () => {
	it('is called with current path', () => {
		const navigation = jest.fn(() => <div/>)

		render(
			<Page
				path={ 'path' }
				navigation={ navigation }>
			</Page>
		)

		expect(navigation).toHaveBeenCalledWith({ active: 'path' })
	})

	it('return value is rendered as child', () => {
		const { getByRole } = render(
			<Page
				path={ '' }
				navigation={ () => <h2>We are monkeys</h2> }>
			</Page>
		)
		const h2 = getByRole('heading', { level: 2 })

		expect(h2).toHaveTextContent('We are monkeys')
	})
})

describe('children', () => {
	it('are rendered', () => {
		const { getByRole } = render(
			<Page
				path={ '' }
				navigation={ () => <div/> }>
				<h3>We are lamas</h3>
			</Page>
		)
		const h3 = getByRole('heading', { level: 3 })

		expect(h3).toHaveTextContent('We are lamas')
	})

	it('are rendered after navigation', () => {
		const { getAllByRole } = render(
			<Page
				path={ '' }
				navigation={ () => <h3>navigation</h3> }>
				<h3>child a</h3>
				<h3>child b</h3>
			</Page>
		)
		const textContents = getAllByRole('heading', { level: 3 }).map((e) => e.textContent)

		expect(textContents).toEqual(['navigation', 'child a', 'child b'])
	})
})

describe('css class', () => {
	it('is page', () => {
		const { getByText } = render(
			<Page
				path={ '' }
				navigation={ () => <h3/> }>
				My Page
			</Page>
		)
		const page = getByText('My Page')

		expect(page).toHaveClass('page')
	})
})
