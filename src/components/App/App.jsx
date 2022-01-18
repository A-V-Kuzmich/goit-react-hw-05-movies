// import { useState } from 'react';
// import { Modal } from '../Modal';
// import { SearchBar } from '../SearchBar';
// import { ImageGallery } from '../ImageGallery';
import { Navigation } from '../Navigation';

export default function App() {
  <Navigation />;
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
