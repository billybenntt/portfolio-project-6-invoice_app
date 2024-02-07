import * as Select from '@radix-ui/react-select';
import {ChevronDownIcon, CheckCircledIcon} from '@radix-ui/react-icons';

function FormRowSelect(props: any) {

    const {label} = props


    return (
        <Select.Root>
            <div className="form__row-select">
                <label htmlFor="" className="form__label">{label}</label>
                <Select.Trigger className="form_row_input">
                    <Select.Value defaultValue={"1"} placeholder="Pick an option"/>
                    <Select.Icon>
                        <ChevronDownIcon/>
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content position="popper"
                        side="bottom"
                        className="form__row-select_menu">
                        <Select.ScrollUpButton/>
                        <Select.Viewport>
                            <Select.Group>
                                <Select.Item value="1" className="form_row_item">
                                    <Select.ItemText>Payment Upfront</Select.ItemText>
                                    <Select.ItemIndicator>
                                        <CheckCircledIcon/>
                                    </Select.ItemIndicator>
                                </Select.Item>

                                <Select.Item value="2" className="form_row_item">
                                    <Select.ItemText>Stage payments</Select.ItemText>
                                    <Select.ItemIndicator>
                                        <CheckCircledIcon/>
                                    </Select.ItemIndicator>
                                </Select.Item>

                                <Select.Item value="3" className="form_row_item">
                                    <Select.ItemText>End of month</Select.ItemText>
                                    <Select.ItemIndicator>
                                        <CheckCircledIcon/>
                                    </Select.ItemIndicator>
                                </Select.Item>
                            </Select.Group>
                        </Select.Viewport>
                        <Select.ScrollDownButton/>
                        {/*<Select.Arrow />*/}
                    </Select.Content>
                </Select.Portal>
            </div>
        </Select.Root>
    )
}

export default FormRowSelect
