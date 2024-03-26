import '@testing-library/jest-dom'

import { NavLinks } from './nav'
import React from 'react'
import { render } from '@testing-library/react'

describe('link callback', () => {
	it('is called with active', () => {
		const link = jest.fn(() => <a/>)
		const lookup = {
			a: 'path/a',
			b: 'path/b',
		}

		NavLinks({ lookup, link })({ active: 'a' })

		expect(link).toHaveBeenCalledWith({ className: 'link active', href: 'path/a', children: 'a' })
	})

	it('is called with non active', () => {
		const link = jest.fn(() => <a/>)
		const lookup = {
			a: 'path/a',
			b: 'path/b',
		}

		NavLinks({ lookup, link })({ active: 'a' })

		expect(link).toHaveBeenCalledWith({ className: 'link', href: 'path/b', children: 'b' })
	})

	it('result is rendered', () => {
		const link = ({ children }: { children: React.ReactNode }) =>
			<a href='www.example.com'>Link_{ children }</a>
		const lookup = {
			a: '',
			b: '',
		}

		const { getAllByRole } = render(NavLinks({ lookup, link })({ active: 'a' }))
		const lists = getAllByRole('list').map((l) => 'list_' + l.textContent)
		const items = getAllByRole('listitem').map((i) => 'item_' + i.textContent)
		const links = getAllByRole('link').map((l) => 'link_' + l.textContent)

		expect([...lists, ...items, ...links]).toEqual([
			'list_Link_aLink_b',
			'item_Link_a',
			'item_Link_b',
			'link_Link_a',
			'link_Link_b',
		])
	})
})

describe('css class', () => {
	it('is navigation', () => {
		const link = () => <a/>
		const lookup = {
			a: '',
		}

		const { getByRole } = render(NavLinks({ lookup, link })({ active: 'a' }))
		const list = getByRole('list')

		expect(list).toHaveClass('navigation')
	})
})
