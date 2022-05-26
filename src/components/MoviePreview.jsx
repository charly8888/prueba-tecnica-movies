const MoviePreview = ({
	title,
	year,
	rating,
	landscapeImage,
	description,
	genres
}) => {
	console.log(genres);
	return (
		<div className='w-full '>
			<img className='w-full ' src={landscapeImage} />
			<h3 className='font-bold text-xl my-4'>{title}</h3>
			<div className='mb-4 '>
				<p className=' inline-block py-1 px-2 bg-bg-700 mr-4'>{year}</p>
				<p className=' inline-block py-1 px-2 bg-primary mr-4'>{rating || '-'}</p>
				{genres.map(genre => (
					<span key={genre} className='py-1 px-2 bg-purple mr-4'>
						{genre}
					</span>
				))}
			</div>
			<p>{description}</p>
			<span>Puntua la película</span>
		</div>
	);
};

export default MoviePreview;
