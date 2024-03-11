import {closeModal, deleteInvoice} from "../store/features/Invoice/invoiceSlice.ts";
import {useAppSelector, useAppDispatch} from '../store/hooks.ts';
import {useNavigate} from "react-router-dom";
import {Button} from "./index.tsx";

function Modal() {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {showModal, singleInvoice: {invoice_id}} = useAppSelector(store => store.invoice)


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
                        #{invoice_id}?
                        This action
                        cannot be undone.
                    </p>
                    <div className="modal__control">

                        <Button text="cancel"
                            variation="light"
                            type="button"
                            onClick={handleModalClose}/>

                        <Button text="delete"
                            variation="danger"
                            type="button"
                            onClick={() => handleFormDelete(invoice_id)}/>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal
