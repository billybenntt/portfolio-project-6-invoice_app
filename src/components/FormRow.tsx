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
                                <Form.Label className={validity?.valid ? "form__label" : "form__label error"}>
                                    {label}
                                </Form.Label>
                                {/*{console.log(validity)}*/}
                                <Form.Message match="valueMissing" className="form__error">
                                    Can't be empty
                                </Form.Message>

                                <Form.Message match="typeMismatch" className="form__error">
                                    Format incorrect
                                </Form.Message>
                            </div>

                            <Form.Control asChild>
                                <input className={validity?.valid ? "form__input" : "form__input error"}
                                    onChange={(event) => onChange(event, addressType)}
                                    name={name}
                                    value={value}
                                    id={name}
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
