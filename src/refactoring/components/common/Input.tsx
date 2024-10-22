import { joinClassName } from "../../utils";

type Props = {
	type: React.HTMLInputTypeAttribute;
	name: string;
	value: string | number | readonly string[] | undefined;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	className?: string;
	placeholder?: string;
};

export function Input({
	type,
	name,
	className,
	value,
	placeholder,
	onChange,
}: Props) {
	return (
		<input
			type={type}
			name={name}
			className={joinClassName("border p-2 rounded", className)}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
}
