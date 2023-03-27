import React, { useState } from "react";
import Modal from "react-modal";
import style from "../styles/modal.module.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={style.Home_Page_container}>
      <h1>My App</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel='Example Modal'
        className={style.mymodal}
      >
        <h2>Modal Title</h2>
        <p>Modal Content</p>
        <button onClick={handleCloseModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default App;
