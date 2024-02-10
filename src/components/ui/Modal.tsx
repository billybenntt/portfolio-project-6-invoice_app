import {closeModal} from "../../features/Invoice/invoiceSlice.tsx";
import {useAppSelector, useAppDispatch} from '../../store/hooks.ts';


function Modal() {
    const dispatch = useAppDispatch()

    const {showModal, singleInvoice} = useAppSelector(store => store.invoice)

    const handleModalClose = () => {
        dispatch(closeModal())
    }


    return (
        <div className={`modal-background ${showModal ? "show" : ""}`}>
            <div className="modal">
                <div className="modal-center">
                    <h2 className="text-xl">Confirm Deletion</h2>
                    <p className="text-base text-light-1">Are you sure you want to delete invoice #{singleInvoice.id}?
                        This action
                        cannot be undone.</p>

                    <div className="modal__control">
                        <button className="btn btn-accent-1" onClick={handleModalClose}>
                            <span className="text-lg">Cancel</span>
                        </button>

                        <button className="btn btn-danger-1" onClick={handleModalClose}>
                            <span className="text-lg">Delete</span>
                        </button>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Modal
