import './Users.css';

import { RotatingLines } from 'react-loader-spinner';

import { Link } from 'react-router-dom';

export default function Users({ list, handleClick, loading, error }) {
  return (
    <>
      {error ? (
        <div>Something went wrong...</div>
      ) : loading ? (
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
        <ul className='listUser'>
          {list.map(item => (
            <li className='listItem' key={item.id}>
              {item.name}
              <Link to={`/albums/${item.id}`}>
                <button
                  type='button'
                  className='btn'
                  onClick={() => handleClick(item.id)}
                >
                  Album
                </button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}