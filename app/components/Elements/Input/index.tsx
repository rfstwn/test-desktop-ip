import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

interface iInputForm {
    label: string;
    name: string;
    type: "text" | "email" | "password";
    placeholder: string;
    onChange?: (e: any) => void;
    value?: string;
}

const InputForm = forwardRef<HTMLInputElement, iInputForm>((props: iInputForm, ref) => {
    const { label, name, type, placeholder } = props;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input onChange={props.onChange} ref={ref} type={type} name={name} placeholder={placeholder} />
        </div>
    );
});

InputForm.displayName = "InputForm";
export default InputForm;
