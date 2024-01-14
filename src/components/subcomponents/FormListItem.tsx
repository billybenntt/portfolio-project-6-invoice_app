import IconDelete from '../../assets/icon-delete.svg'


function FormListItem() {

    return (
        <div className="form__list-item">

            <div>
                <label htmlFor="" className="form__label">Item Name</label>
                <input type="text" className="form__input"/>
            </div>

            <div className="form__list-item-group">
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
                    <div className="item__total">2222</div>
                </div>

                <div>
                    <span>
                        <img src={IconDelete} alt=""/>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FormListItem
