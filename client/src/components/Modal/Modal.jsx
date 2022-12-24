import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import BookModal from '../BookModal/BookModal';
import {
  ModalBody,
  ModalCenter,
  ModalClose,
  ModalWrapper,
} from './Modal.styled';

const Modal = (props) => {
  return (
    <ModalWrapper className={'modalWrapper ' + props.isOpened}>
      {props.isOpened && (
        <ModalCenter>
          <ModalBody>
            <ModalClose>
              <IoCloseOutline onClick={props.onModalClose} />
            </ModalClose>
            <hr
              style={{
                height: '1px',
                backgroundColor: '#E8D3B9',
                border: 'none',
              }}
            />
            <BookModal />
          </ModalBody>
        </ModalCenter>
      )}
    </ModalWrapper>
  );
};

export default Modal;
