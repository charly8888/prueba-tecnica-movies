import { API_IMAGE_HOST } from '../constants/api';

const MovieCard = ({ title, image, year, rating , setPreviewMovie}) => {
	return (
		<div className='w-1/5 p-4' onClick={()=>setPreviewMovie({title})}>
			<div
				style={{
					backgroundImage: `url(${API_IMAGE_HOST}${image})`
				}}
				className='relative aspect-2/3 bg-cover bg-gray'
			>
				<h3 className='absolute bottom-0 w-full bg-bg-700 p-2'>{title}</h3>
				<span className='absolute top-2 left-2 py-1 px-2 bg-primary'>
					{rating}
				</span>
				<span className='absolute top-2 right-2 py-1 px-2 bg-bg-700'>
					{year}
				</span>
			</div>
		</div>
	);
};

export default MovieCard;
