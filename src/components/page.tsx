import styles from '../css/page.module.scss'

interface PageProps<T> {
	children?: React.ReactNode,
	path: keyof T,
	navigation: ({}: { active: keyof T }) => JSX.Element,
}

export const Page = <T,>({ children, path, navigation }: PageProps<T>) =>
	<div className={ styles.page }>
		{ navigation({ active: path }) }
		{ children }
	</div>
