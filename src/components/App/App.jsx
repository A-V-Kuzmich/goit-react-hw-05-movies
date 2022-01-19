// import { useState } from 'react';
// import { Modal } from '../Modal';
// import { SearchBar } from '../SearchBar';
// import { ImageGallery } from '../ImageGallery';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ApiService } from '../ApiServise/ApiServise';
import { Navigation } from '../Navigation';
import { HomePage } from '../HomePage/HomePage';
import { MovieDetailsPage } from '../MovieDetailsPage';

export default function App() {
  const hendleMove = e => {
    // const id = e.nativeEvent.path.find(num => num.nodeName === 'LI').dataset.id;
    // id ? console.log(id) : console.log('sorry');

    console.log(e);

    // console.log(e.currentTarget.dataset.id);
    // nativeEvent.path[2].nodeName;
  };

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage click={hendleMove} />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage id={hendleMove} />} />
        <Route path="*" element={<h1>sorry</h1>} />
      </Routes>
    </>
  );
  // const [searchQuery, setSearchQuery] = useState('');
  // const [showModal, setShowModal] = useState(false);
  // const [modalImg, setModalImg] = useState({});
  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };
  // const handleClickImg = ({ target: { dataset, alt } }) => {
  //   setModalImg({ src: dataset.src, alt: alt });
  //   toggleModal();
  // };
  // return (
  //   <>
  //     <SearchBar Submit={setSearchQuery} />
  //     <ImageGallery query={searchQuery} onClick={handleClickImg} />
  //     {showModal && (
  //       <Modal onClose={toggleModal}>
  //         <img src={modalImg.src} alt={modalImg.alt} />
  //       </Modal>
  //     )}
  //   </>
  // );
}
