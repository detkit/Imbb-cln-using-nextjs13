'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchItem = () => {
	const [search, setSearch] = useState('');
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!search) return;

		router.push(`/search/${search}`);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex items-center justify-between max-w-6xl px-5 mx-auto'
		>
			<input
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				type='text'
				placeholder='Search movies...'
				className='flex-1 w-full bg-transparent rounded-sm outline-none h-14 placeholder-gary-500'
			/>
			<button
				disabled={!search}
				type='submit'
				className='text-2xl text-amber-600 disabled:text-gray-400'
			>
				<AiOutlineSearch />
			</button>
		</form>
	);
};

export default SearchItem;
