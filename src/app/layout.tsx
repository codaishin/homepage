import '../css/globals.scss'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import styles from '../css/page.module.scss'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) =>
	<html lang='en'>
		<body className={ `${inter.className} ${styles.main}` }>
			{ children }
		</body>
	</html>


export default RootLayout

export const metadata: Metadata = {
	title: 'Codaishin\'s Homepage',
	description: 'Codaishin\'s Homepage',
}
