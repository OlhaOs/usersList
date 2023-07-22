import './Photos.css';
import { Link } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { useState } from 'react';
import Modal from '../Modal';

export default function Photos({ list, loading, error }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const openModal = id => {
    setIsLoading(true);
    setSelectedImage(id);
    setIsLoading(false);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsLoading(false);
  };

  return (
    <>
      <Link to={'/albums/:userId'}>
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
        <ul className='list albumImages'>
          {list.map(({ id, thumbnailUrl, title }) => (
            <li className='listItem' key={id}>
              <img
                src={thumbnailUrl}
                alt={title}
                onClick={() => openModal(id)}
                className='albumImg'
              />
            </li>
          ))}
        </ul>
      )}
      {selectedImage && (
        <Modal onClose={closeModal}>
          {isLoading ? (
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
            <img
              src={list.find(image => image.id === selectedImage).url}
              alt={list.find(image => image.id === selectedImage).title}
              className='albumImgLarge'
            />
          )}
        </Modal>
      )}
    </>
  );
}