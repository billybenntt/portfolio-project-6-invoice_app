import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import {IconArrowDown} from '../assets'


function Filter() {


    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button aria-label="filter by status" className="filter-btn">
                    <span className="mobile">Filter</span>
                    <span className="desktop">Filter by status</span>
                    <IconArrowDown/>
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="filter-content" sideOffset={20}>
                    <DropdownMenu.CheckboxItem onSelect={(e) => e.preventDefault()}
                        className="filter-option">
                        <input type="checkbox" name="option-1" id="option-1"/>
                        <label htmlFor="option-1">Draft</label>
                    </DropdownMenu.CheckboxItem>

                    <DropdownMenu.CheckboxItem onSelect={(e) => e.preventDefault()}
                        className="filter-option">
                        <input type="checkbox" name="option-1" id="option-1"/>
                        <label htmlFor="option-1">Pending</label>
                    </DropdownMenu.CheckboxItem>

                    <DropdownMenu.CheckboxItem onSelect={(e) => e.preventDefault()}
                        className="filter-option">
                        <input type="checkbox" name="option-1" id="option-1"/>
                        <label htmlFor="option-1">Paid</label>
                    </DropdownMenu.CheckboxItem>


                </DropdownMenu.Content>
            </DropdownMenu.Portal>


        </DropdownMenu.Root>


    )
}

export default Filter
