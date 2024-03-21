import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Codaishin\'s Homepage',
	description: 'Codaishin\'s Homepage',
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) =>
	<html lang='en'>
		<body>{ children }</body>
	</html>

export default RootLayout
