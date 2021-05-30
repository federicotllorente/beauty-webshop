export const SearchError = ({ error }) => (
	<main>
		<h1>Oops! We didn&apos;t find what you&apos;re looking for</h1>
		<p>{error}</p>
	</main>
)

export const UnexpectedError = ({ error }) => (
	<main>
		<h1>Oops! Something unexpected happened</h1>
		<p>{error}</p>
	</main>
)