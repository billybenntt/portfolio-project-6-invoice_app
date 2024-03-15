import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Checkbox from '@radix-ui/react-checkbox';
import {IconCheck, IconArrowDown} from '@/assets/icons'


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
                        <Checkbox.Root className="checkbox" defaultChecked id="draft">
                            <Checkbox.Indicator className="CheckboxIndicator">
                                <IconCheck/>
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        <label className="Label" htmlFor="draft">
                            Draft
                        </label>
                    </DropdownMenu.CheckboxItem>

                    <DropdownMenu.CheckboxItem onSelect={(e) => e.preventDefault()}
                        className="filter-option">
                        <Checkbox.Root className="checkbox" defaultChecked id="pending">
                            <Checkbox.Indicator className="CheckboxIndicator">
                                <IconCheck/>
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        <label className="Label" htmlFor="pending">
                            Pending
                        </label>
                    </DropdownMenu.CheckboxItem>

                    <DropdownMenu.CheckboxItem onSelect={(e) => e.preventDefault()}
                        className="filter-option">
                        <Checkbox.Root className="checkbox" defaultChecked id="paid">
                            <Checkbox.Indicator className="CheckboxIndicator">
                                <IconCheck/>
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        <label className="Label" htmlFor="paid">
                            Paid
                        </label>
                    </DropdownMenu.CheckboxItem>


                </DropdownMenu.Content>
            </DropdownMenu.Portal>


        </DropdownMenu.Root>


    )
}

export default Filter
