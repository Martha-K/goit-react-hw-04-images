import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, Wrapper } from './styled';
import { useEffect } from 'react';

const modalRoot = document.createElement('div');
modalRoot.id = 'modal-root';
document.body.appendChild(modalRoot);

export const Modal = ({ onClose, imageModal, descriptionPicture }) => {
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        onClose();
      }
    });
  }, [onClose]);

  return createPortal(
    <Overlay onClick={onClose}>
      <Wrapper>
        <img
          onClick={e => e.stopPropagation()}
          src={imageModal}
          alt={descriptionPicture}
        />
      </Wrapper>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  imageModal: PropTypes.string,
  descriptionPicture: PropTypes.string,
};
