import React from 'react';
import ReactModal from 'react-modal';

const ModalWindowInfo = ({isOpenInfoModal, onCloseInfoModal, currentBookTitle}) => {
    return (
        <ReactModal
                isOpen={isOpenInfoModal}
                className="modal-window--info"
                overlayClassName="modal-window__overlay"
                ariaHideApp={false}
            >
                <div className="modal-window__body--info">
                    The book "{currentBookTitle}" successfully added
                </div>
                <div className="modal-window__footer">
                    <button className="modal-window__add-button" onClick={onCloseInfoModal}>CLOSE</button>
                </div>
            </ReactModal>
    );
}

export default ModalWindowInfo;