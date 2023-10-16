import NavbarItem from './navbar-item';

export default function Navbar() {
	return (
		<div className='flex justify-center p-4 dark:bg-gray-700 bg-amber-100 lg:text-lg'>
			<NavbarItem title='Trending' param='fetchTrending' />
			<NavbarItem title='Top Rate' param='fetchTopRated' />
		</div>
	);
}
