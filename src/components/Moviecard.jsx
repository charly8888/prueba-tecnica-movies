import { API_IMAGE_HOST } from '../constants/api';

const MovieCard = ({ title, image , year, rating}) => {
	return (
		<div className='w-1/4 p-4'>
    <div className=''>

			<img className='w-full block' src={`${API_IMAGE_HOST}${image}`} />
			<h3>{title}</h3>
      <span>{rating}</span>
      <span>{year}</span>
    </div>
		</div>
	);
};

export default MovieCard;