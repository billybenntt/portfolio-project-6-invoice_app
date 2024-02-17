import {closeModal, deleteInvoice} from "../../features/Invoice/invoiceSlice.tsx";
import {useAppSelector, useAppDispatch} from '../../store/hooks.ts';
import {useNavigate} from "react-router-dom";

function Modal() {
    const dispatch = useAppDispatch()

    const {showModal, singleInvoice} = useAppSelector(store => store.invoice)

    const navigate = useNavigate()

    const handleModalClose = () => {
        dispatch(closeModal())
    }


    const handleFormDelete = (id: string) => {
        dispatch(deleteInvoice(id))
        dispatch(closeModal())
        navigate("/")
    }


    return (
        <div className={`modal-background ${showModal ? "show" : ""}`}>
            <div className="modal">
                <div className="modal-center">
                    <h2 className="text-xl">Confirm Deletion</h2>
                    <p className="text-base text-light-1">Are you sure you want to delete invoice
                        #{singleInvoice.invoice_id}?
                        This action
                        cannot be undone.</p>

                    <div className="modal__control">
                        <button className="btn btn-accent-1" onClick={handleModalClose}>
                            <span className="text-lg">Cancel</span>
                        </button>

                        <button className="btn btn-danger-1" onClick={() => handleFormDelete(singleInvoice.invoice_id)}>
                            <span className="text-lg">Delete</span>
                        </button>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Modal
