import React, { useState } from 'react';
import { Modal } from '../../components';

const WelcomePage = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Modal isOpened={modal} onModalClose={() => setModal(false)} />
      <button onClick={() => setModal(true)}>Book</button>
    </div>
  );
};

export default WelcomePage;
