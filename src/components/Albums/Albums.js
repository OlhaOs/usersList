import './Albums.css';
import { RotatingLines } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

export default function Albums({ list, handleClick, loading }) {
  return (
    <>
      <Link to={`/`}>
        <button className='goBackBtn'>Go back</button>
      </Link>
      {loading ? (
        <div className='loader'>
          <RotatingLines
            strokeColor='grey'
            strokeWidth='5'
            animationDuration='0.75'
            width='96'
            visible={true}
          />
        </div>
      ) : (
        <ul className='listAlbum'>
          {list.map(item => (
            <li className='listItem' key={item.id}>
              {item.title}
              <Link to={`/photos/${item.id}`}>
                <button
                  type='button'
                  className='btn'
                  onClick={() => handleClick(item.id)}
                >
                  Photos
                </button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}