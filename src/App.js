import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Users from './components/Users';
import Albums from './components/Albums';
import Photos from './components/Photos';
import { useFetchHook } from 'usefetch_simple_hook';
import './App.css';

const BASE_URL = ' https://jsonplaceholder.typicode.com';

function App() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const {
    data: usersData,
    loading: usersLoading,
    error: usersError,
    doFetch: fetchUsers,
  } = useFetchHook();

  const {
    data: albumsData,
    loading: albumsLoading,
    error: albumsEalbumsLoadingrror,
    doFetch: fetchAlbums,
  } = useFetchHook();

  const {
    data: photosData,
    loading: photosLoading,
    error: photosError,
    doFetch: fetchPhotos,
  } = useFetchHook();

  useEffect(() => {
    fetchUsers(`${BASE_URL}/users`);
  }, []);

  const handleAlbumBtnClick = id => {
    fetchAlbums(`${BASE_URL}/albums?userId=${id}`);
  };
  const handlePhotosBtnClick = id => {
    fetchPhotos(`${BASE_URL}/photos?albumId=${id}`);
  };

  useEffect(() => {
    if (usersData) {
      setUsers(usersData);
    }
    if (albumsData) {
      setAlbums(albumsData);
      setPhotos([]);
    }
    if (photosData) {
      setPhotos(photosData);
    }
  }, [usersData, albumsData, photosData]);

  return (
    <div className='container'>
      <Routes>
        <Route
          path='/'
          element={
            <Users
              list={users}
              handleClick={handleAlbumBtnClick}
              loading={usersLoading}
              error={usersError}
            />
          }
        />
        <Route
          path='/albums/:userId'
          element={
            <Albums
              list={albums}
              handleClick={handlePhotosBtnClick}
              loading={albumsLoading}
              error={albumsEalbumsLoadingrror}
            />
          }
        />
        <Route
          path='/photos/:albumId'
          element={
            <Photos list={photos} loading={photosLoading} error={photosError} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
