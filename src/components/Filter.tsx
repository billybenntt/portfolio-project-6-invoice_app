import {IconArrowDown, IconArrowRight} from '../assets'
import {useState} from "react";


function Filter() {

    const [showFilter, setShowFilter] = useState(false);

    function handleToggle(): void {
        setShowFilter((prevState) => {
            return !prevState
        })
    }

    return (
        <div className="control__filter" onClick={handleToggle}>
            <h3 className="text-lg mobile">Filter</h3>
            <h3 className="text-lg desktop">Filter by status</h3>
            <span className="filter-icon">
                {showFilter ?
                    <IconArrowDown/> :
                    <IconArrowRight/>
                }
            </span>

            <div className={`filter__select ${showFilter ? "open" : ""}`}>
                <div className="filter__option">
                    <input type="checkbox" name="option-1" id="option-1"/>
                    <label htmlFor="option-1">Draft</label>
                </div>
                <div className="filter__option">
                    <input type="checkbox" name="option-2" id="option-2"/>
                    <label htmlFor="option-2">Pending</label>
                </div>
                <div className="filter__option">
                    <input type="checkbox" name="option-3" id="option-3"/>
                    <label htmlFor="option-3">Paid</label>
                </div>
            </div>
        </div>
    )
}

export default Filter
