import './Modal.css'
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    window.removeEventListener('keydown', onCloseModal);
  });

  const handleKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onCloseModal = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className='modalBackdrop' onClick={onCloseModal}>
      <div className='modalContent'>{children}</div>
    </div>,
    modalRoot
  );
}