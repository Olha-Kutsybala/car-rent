import { useEffect } from 'react';
import { Backdrop, ModalBox } from './modal.styled';

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDow = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDow);
    return () => {
      window.removeEventListener('keydown', handleKeyDow);
    };
  }, [onClose]);

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return (
    <Backdrop onClick={handleBackDropClick}>
      <ModalBox>{children}</ModalBox>
    </Backdrop>
  );
};

export default Modal;
