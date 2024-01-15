import {useState} from 'react'

function Modal() {

    const [className, setClassName] = useState('show')


    return (
        <div className="modal-background">
            <div className={`modal ${className}`}>
                <div className="modal-center">
                    <h2 className="text-xl">Confirm Deletion</h2>
                    <p className="text-base text-light-1">Are you sure you want to delete invoice #XM9141? This action
                        cannot be undone.</p>

                    <div className="modal__control">

                        <button className="btn btn-accent-1" onClick={()=> setClassName("")}>
                            <span className="text-lg">Cancel</span>
                        </button>

                        <button className="btn btn-danger-1">
                            <span className="text-lg">Delete</span>
                        </button>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Modal
