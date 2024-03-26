import Link from 'next/link'
import styles from '../css/page.module.css'

type PathLookup = Record<string, string>
type LinkProps = { className: string, href: string, children: React.ReactNode }
type LinkFn = ({}: LinkProps) => JSX.Element

const classes = (pathName: string, currentPathName: string) =>
	pathName === currentPathName ? `${styles.link} ${styles.active}` : styles.link

const links = <T extends PathLookup>(lookup: T, currentPath: string, link: LinkFn) =>
	Object
		.keys(lookup)
		.map(pathName => <li key={ pathName }>{
			link({
				className: classes(pathName, currentPath),
				href: lookup[pathName],
				children: pathName,
			})
		}</li>)


export const NavLinks = <T extends PathLookup,>({
	lookup,
	link,
}: { lookup: T, link: LinkFn }) => {
	const NavLink = ({ active }: { active: keyof T & string }) =>
		<ul className={ styles.navigation }>
			{ links(lookup, active, link) }
		</ul>

	return NavLink
}

export const Navigation = NavLinks({
	lookup: {
		Home: '/',
		'Project Zyheeda': '/projectzyheeda',
	},
	link: ({ className, href, children }) => <Link className={ className } href={ href }>
		{ children }
	</Link>,
})
