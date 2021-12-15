import React from 'react'

const Modal = ({children, imgModal}) => {
    return (
        <div className={`fixed top-0 right-0 left-0 bottom-0 bg-overlay w-full h-full z-30 flex items-center justify-center px-5 ${!imgModal && 'md:hidden'}`}>
            <div className={`bg-white w-[360px] md:w-[500px] h-[400px] z-50 rounded ${!imgModal && 'py-3 px-5'}`}>
                {children}
            </div>
        </div>
    )
}

export default Modal
