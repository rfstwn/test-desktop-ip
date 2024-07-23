interface iButton {
    label?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    style?: "primary" | "secondary" | "tertiary";
    width?: "auto" | "full";
    children?: React.ReactNode;
    className?: string;
}
const Button = (props: iButton) => {
    const { children, label, onClick = () => {}, type = "button", style = "primary", width = "auto", className } = props;
    let buttonStyle =
        style === "primary"
            ? "bg-secondary hover:brightness-110 text-black border-0"
            : style === "secondary"
            ? "bg-transparent border-secondary border text-secondary"
            : "bg-[#666666] text-[#888888] border-0 hover:brightness-110";

    buttonStyle += ` ${width === "full" ? "w-full" : "w-auto"}`;

    return (
        <button
            className={`${buttonStyle} flex items-center justify-center gap-2 font-semibold rounded-full text-sm py-2 px-6 focus:outline-none focus:shadow-outline ${className}`}
            type={type}
            onClick={onClick}
        >
            {children || label}
        </button>
    );
};

export default Button;
