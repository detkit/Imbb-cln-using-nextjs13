import Results from '@/components/results';

export default async function SearchPage({ params }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&include_adult=false&language=en-US&query=${params.searchTerm}`
	);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	const data = await res.json();

	const results = data.results;

	return (
		<div>
			{results && results.length === 0 && (
				<h1 className='pt-6 text-center'>No Results Found</h1>
			)}

			{results && <Results results={results} />}
		</div>
	);
}
