import * as Form from '@radix-ui/react-form';
import {FormRowProps} from "../types/app";

function FormRow(props: FormRowProps) {

    const {label, inputType, onChange, addressType, name, value} = props

    return (
        <Form.Root asChild={true}>
            <Form.Field name={inputType} className="form__row">
                <Form.ValidityState>
                    {(validity) => (
                        <div>
                            <div className="form__header">
                                {console.log(validity?.valueMissing)}
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
                                    disabled={false}
                                    required/>
                            </Form.Control>

                        </div>
                    )}
                </Form.ValidityState>

            </Form.Field>
        </Form.Root>

    )
}

export default FormRow
