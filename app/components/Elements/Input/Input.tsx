import { ChangeEvent, forwardRef, HtmlHTMLAttributes } from "react";

interface iInput {
    type: "text" | "email" | "password";
    name: string;
    placeholder: string;
    onChange?: (e: ChangeEvent) => void;
    value?: string;
}
const Input = forwardRef<HTMLInputElement, iInput>((props: iInput, ref) => {
    const { type, name, placeholder, onChange = () => {}, value } = props;
    return (
        <input
            type={type}
            name={name}
            ref={ref}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            className="shadow appearance-none border rounded-full w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline focus:border-cyan-300"
        />
    );
});

Input.displayName = "Input";
export default Input;
