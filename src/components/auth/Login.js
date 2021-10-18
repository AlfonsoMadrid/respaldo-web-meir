import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal, uiCloseModal } from '../../actions/ui';
import { LoginModal } from './LoginModal';

const customStyles = {
    content: {
        top: '58%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}



Modal.setAppElement('#root');

export const Login = () => {

    const dispatch = useDispatch();

    const {modalActive} = useSelector(state => state.ui);

    const handleModal = () => {
        dispatch(uiOpenModal());
    }


    const closeModal = () => {
        console.log('cerrar modal')
        dispatch(uiCloseModal());
    }

    return (
        <div>
            <div className="d-flex ms-sm-5 float-sm-end">
                <button
                    className="btn"
                onClick={handleModal}    
                >INGRESAR</button>
            </div>
            <Modal
                isOpen={modalActive}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                closeTimeoutMS={200}
                className='modal'
                overlayClassName='modal-fondo'
            >
                <LoginModal />
            </Modal>
        </div>


    )
}



