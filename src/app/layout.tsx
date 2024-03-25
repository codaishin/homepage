import './globals.css'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Codaishin\'s Homepage',
	description: 'Codaishin\'s Homepage',
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) =>
	<html lang='en'>
		<body className={ inter.className }>{ children }</body>
	</html>

export default RootLayout
