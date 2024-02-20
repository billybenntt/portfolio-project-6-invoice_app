import * as Form from '@radix-ui/react-form';


function FormRowAlt() {


    return (
        <Form.Root>
            <Form.Field name="text" className="form__row">
                <Form.ValidityState>
                    {(validity) => (
                        <div>
                            <div className="row_header">
                                <Form.Label className={validity?.valid ? "form__label" : "form__label error"}>
                                    Email
                                </Form.Label>

                                {/* ERROR MESSAGES */}
                                <Form.Message match="valueMissing" className="form__error">
                                    Can't be empty
                                </Form.Message>
                                <Form.Message match="typeMismatch" className="form__error">
                                    Please provide a valid email
                                </Form.Message>

                            </div>
                            <Form.Control asChild>
                                <input className={validity?.valid ? "form__input" : "form__input error"}
                                    type="email"
                                    required/>
                            </Form.Control>
                        </div>
                    )}
                </Form.ValidityState>

            </Form.Field>
        </Form.Root>

    )
}

export default FormRowAlt
