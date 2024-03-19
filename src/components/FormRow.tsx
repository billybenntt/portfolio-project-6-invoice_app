import * as Form from '@radix-ui/react-form';
import {UpdateFormEvent} from "@/types/app.definitions.ts";
import {useAppSelector} from '@/store/hooks.ts';

interface IProps {
    label: string
    inputType: string
    onChange: (value: UpdateFormEvent, addressType?: any) => void;
    addressType?: "client" | "sender"
    name: string,
    value: string | number
}


function FormRow(props: IProps) {

    const {label, inputType, onChange, addressType, name, value} = props
    const {isEditing} = useAppSelector(store => store.form)
    const isOldInvoice = isEditing && inputType == 'date';

    return (
        <Form.Field name={label + addressType} className="form__row">
            <div>
                <div className="form__header">
                    <Form.Label className="form__label">
                        {label}
                    </Form.Label>
                    <Form.Message match="valueMissing">
                        Can't be empty
                    </Form.Message>
                    <Form.Message match="tooShort">
                        Too Short
                    </Form.Message>

                    <Form.Message match="typeMismatch">
                        Format incorrect
                    </Form.Message>
                </div>

                <Form.Control asChild>
                    <input className="form__input"
                        onChange={(event) => onChange(event, addressType)}
                        name={name}
                        value={value}
                        id={name}
                        placeholder={label}
                        minLength={4}
                        maxLength={30}
                        type={inputType}
                        disabled={isOldInvoice}
                        required={true}/>
                </Form.Control>
            </div>
        </Form.Field>

    )
}

export default FormRow
