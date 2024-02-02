import * as Select from '@radix-ui/react-select';
import {ChevronDownIcon,} from '@radix-ui/react-icons';

function FormRowRadix() {


    return (
        <Select.Root>

            <div className="form_row_radix">
                <label htmlFor="" className="form__label">Form Row Select</label>
                <Select.Trigger className="form_row_input">
                    <Select.Value defaultValue={"test"} placeholder="Pick an option"/>
                    <Select.Icon>
                        <ChevronDownIcon/>
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content position="popper"
                        side="bottom"
                        className="form_row_box">
                        <Select.ScrollUpButton/>
                        <Select.Viewport>
                            <Select.Group>
                                <Select.Item value="france" className="form_row_item">
                                    <Select.ItemText>France</Select.ItemText>
                                    <Select.ItemIndicator>…</Select.ItemIndicator>
                                </Select.Item>

                                <Select.Item value="united-kingdom" className="form_row_item">
                                    <Select.ItemText>United Kingdom</Select.ItemText>
                                    <Select.ItemIndicator>…</Select.ItemIndicator>
                                </Select.Item>

                                <Select.Item value="spain" className="form_row_item">
                                    <Select.ItemText>Spain</Select.ItemText>
                                    <Select.ItemIndicator>…</Select.ItemIndicator>
                                </Select.Item>
                            </Select.Group>

                        </Select.Viewport>
                        <Select.ScrollDownButton/>
                        {/*<Select.Arrow/>*/}
                    </Select.Content>

                </Select.Portal>
            </div>


        </Select.Root>
    )
}

export default FormRowRadix
