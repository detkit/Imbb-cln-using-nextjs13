import { Inter } from 'next/font/google';
import './globals.css';

import Providers from '@/app/provides';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import SearchItem from '@/components/search-item';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'IMBB-cln',
	description: 'This is the IMBB clone website',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<Header />

					<Navbar />

					<SearchItem />

					{children}
				</Providers>
			</body>
		</html>
	);
}
