import { useEffect, useState } from 'react';
import List from './components/List';
import Button from './components/Button';
import Image from './components/Images';
import './App.css';

const BASE_URL = ' https://jsonplaceholder.typicode.com';

function App() {
  const [users, setUsers] = useState([]);
  const [album, setAlbum] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/users`)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  const handleAlbumBtnClick = id => {
    fetch(`${BASE_URL}/albums`)
      .then(response => response.json())
      .then(data => {
        setAlbum(data.filter(item => item.userId === id));
        setPhotos([]);
      });
  };
  const handlePhotosDtnlick = id => {
    fetch(`${BASE_URL}/photos`)
      .then(response => response.json())
      .then(data => {
        setPhotos(data.filter(item => item.albumId === id));
      });
  };

  return (
    <div className='container'>
      <List list={users}>
        <Button handleClick={handleAlbumBtnClick} btnName={'Album'} />
      </List>

      <List list={album}>
        <Button handleClick={handlePhotosDtnlick} btnName={'Photos'} />
      </List>

      <List list={photos}>
        <Image />
      </List>
    </div>
  );
}

export default App;
