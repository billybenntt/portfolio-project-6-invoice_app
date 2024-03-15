import * as Select from '@radix-ui/react-select';
import {IconArrowDown, IconArrowLeft} from '@/assets/icons';


function FormRowSelect(props: any) {

    const {label, name, value, onChange} = props

    return (
        <Select.Root value={value} onValueChange={onChange}>
            <div className="form__row-select">
                <label htmlFor={name} className="form__label">{label}</label>
                <Select.Trigger className="form_row_input">
                    <Select.Value defaultValue={value} placeholder="Pick an option"/>
                    <Select.Icon>
                        <IconArrowDown/>
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
                                    <Select.ItemText>Net 1 Day</Select.ItemText>
                                    <Select.ItemIndicator>
                                        <IconArrowLeft/>
                                    </Select.ItemIndicator>
                                </Select.Item>

                                <Select.Item value="7" className="form_row_item">
                                    <Select.ItemText>Net 7 Days</Select.ItemText>
                                    <Select.ItemIndicator>
                                        <IconArrowLeft/>
                                    </Select.ItemIndicator>
                                </Select.Item>

                                <Select.Item value="14" className="form_row_item">
                                    <Select.ItemText>Net 14 Days</Select.ItemText>
                                    <Select.ItemIndicator>
                                        <IconArrowLeft/>
                                    </Select.ItemIndicator>
                                </Select.Item>

                                <Select.Item value="30" className="form_row_item">
                                    <Select.ItemText>Net 30 Days</Select.ItemText>
                                    <Select.ItemIndicator>
                                        <IconArrowLeft/>
                                    </Select.ItemIndicator>
                                </Select.Item>

                            </Select.Group>
                        </Select.Viewport>
                        <Select.ScrollDownButton/>
                    </Select.Content>
                </Select.Portal>
            </div>
        </Select.Root>
    )
}

export default FormRowSelect
