import IconDelete from '../../assets/icon-delete.svg'


function FormListItem() {

    return (
        <div className="form__list-item">

            <div>
                <label htmlFor="" className="form__label">Item Name</label>
                <input type="text" className="form__input"/>
            </div>

            <div className="form__group">
                <div>
                    <label htmlFor="" className="form__label">Qty</label>
                    <input type="text" className="form__input"/>
                </div>
                <div>
                    <label htmlFor="" className="form__label">Price</label>
                    <input type="text" className="form__input"/>
                </div>

                <div>
                    <label htmlFor="" className="form__label">Total</label>
                    <h4 className="item__total">10000.25</h4>
                </div>

                <div className="form__item-delete">
                    <span>
                        <img src={IconDelete} alt=""/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FormListItem
